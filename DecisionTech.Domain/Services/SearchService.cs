using System;
using System.Collections.Generic;
using System.Linq;
using DecisionTech.Domain.Models;
using DecisionTech.Domain.Services.Repository;

namespace DecisionTech.Domain.Services
{
    public class SearchService : ISearchService
    {
        private readonly IProductRepository _productRepository;
        private readonly IProductPackageProvider _productPackageProvider;

        public SearchService(IProductRepository productRepository,
            IProductPackageProvider productPackageProvider)
        {
            _productRepository = productRepository;
            _productPackageProvider = productPackageProvider;
        }

        public IEnumerable<Deal> Search(SearchRequest request)
        {
            var products = _productRepository.GetAll();

            if (request.Types != null && request.Types.Any())
            {
                var checks = new List<Func<Deal, bool>>();
                foreach (var requestType in request.Types)
                {
                    if (_productPackageProvider.IsProductInPackage(requestType))
                    {
                        var bundle = _productPackageProvider.GetProductPackage(requestType);
                        foreach (var product in bundle)
                        { 
                            checks.Add(x => x.ProductTypes.Contains(product));
                        }
                    }
                    else
                    {
                        checks.Add(x => x.ProductTypes.Contains(requestType));
                    } 
                }

                products = products.Where(x => checks.All(c => c(x) && x.ProductTypes.Count == checks.Count));
            }

            if (request.Speed.HasValue)
            {
                products = products.Where(x => x.Speed != null && x.Speed.SortValue == request.Speed.Value);
            }

            return products;
        }
    }
}