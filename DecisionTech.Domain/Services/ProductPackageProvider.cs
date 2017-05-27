using System.Collections.Generic;
using DecisionTech.Domain.Models;

namespace DecisionTech.Domain.Services
{
    public class ProductPackageProvider : IProductPackageProvider
    { 
        private readonly Dictionary<string, IEnumerable<string>> _productPackage
            = new Dictionary<string, IEnumerable<string>>
            {
                {SystemConstants.Products.Broadband, new [] { SystemConstants.Products.Broadband, SystemConstants.Products.Phone} },
                {SystemConstants.Products.Phone, new [] { SystemConstants.Products.Broadband, SystemConstants.Products.Phone} }
            };

        public bool IsProductInPackage(string product)
        {
            return _productPackage.ContainsKey(product);
        }

        public IEnumerable<string> GetProductPackage(string package)
        {
            if (!_productPackage.ContainsKey(package))
            {
                return new string[0];
            }

            return _productPackage[package];
        }
    }
}