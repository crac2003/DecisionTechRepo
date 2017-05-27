using System.Collections.Generic;
using System.Linq;
using DecisionTech.Domain.Models;
using DecisionTech.Domain.Services;
using DecisionTech.Domain.Services.Repository;
using Moq;
using NUnit.Framework;
using NUnit.Framework.Internal;

namespace DecisionTech.Tests.UT
{
    [TestFixture]
    public class SearchServiceTests
    {
        private Mock<IProductRepository> _repository;
        private Mock<IProductPackageProvider> _packageProvider;
        private ISearchService _searchService;

        [SetUp]
        public void SetUpBase()
        {
            _repository = new Mock<IProductRepository>();
            _packageProvider = new Mock<IProductPackageProvider>();
            _searchService = new SearchService(_repository.Object,
                _packageProvider.Object);
        }

        [TestFixture]
        public class Search : SearchServiceTests
        {
            private SearchRequest _request;

            [SetUp]
            public void Setup()
            {
                _request = new SearchRequest();
            }

            [Test]
            public void Search_WhenRepositoryReturnsNoItems_ShouldReturnEmptyCollection()
            {
                //Arrange
                _repository.Setup(x => x.GetAll()).Returns(new Deal[0]);

                //Act
                var result = _searchService.Search(_request);

                //Assert
                Assert.That(result.Count(), Is.EqualTo(0));
            }

            [Test]
            public void Search_WhenNoDealsAvailableForSelectedProduct_ShouldReturnEmptyCollection()
            {
                //Arrange
                _repository.Setup(x => x.GetAll()).Returns(new Deal[]
                {
                    new Deal {ProductTypes = new List<string> {"Product 1", "Product 2"}}
                });

                _request.Types = new[] { "Product" };

                //Act
                var result = _searchService.Search(_request);

                //Assert
                Assert.That(result.Count(), Is.EqualTo(0));
            }

            [Test]
            public void Search_WhenProductIsAvailableInADeal_ShouldReturnCorrectDeal()
            {
                //Arrange
                var deal = new Deal { ProductTypes = new List<string> { "Product" } };
                _repository.Setup(x => x.GetAll()).Returns(new[] { deal });

                _request.Types = new[] { "Product" };

                //Act
                var result = _searchService.Search(_request);

                //Assert
                Assert.That(result.First(), Is.SameAs(deal));
            }

            [Test]
            public void Search_WhenProductIsABundleProduct_ShouldReturnCorrectDeal()
            {
                //Arrange
                var productName = "Product";
                var deal = new Deal { ProductTypes = new List<string> { productName, "Product 2" } };
                _repository.Setup(x => x.GetAll()).Returns(new[] { deal });

                _packageProvider.Setup(x => x.IsProductInPackage(productName)).Returns(true);
                _packageProvider.Setup(x => x.GetProductPackage(productName)).Returns(new[] { productName, "Product 2" });

                _request.Types = new[] { productName };

                //Act
                var result = _searchService.Search(_request);

                //Assert
                Assert.That(result.First(), Is.SameAs(deal));
            }

            [Test]
            public void Search_WhenCalledWithSelectedBroadbandSpeed_ShouldReturnCorrectDeal()
            {
                //Arrange
                var productName = "Product";
                var selectedBBspeed = 128;
                var deal = new Deal
                {
                    ProductTypes = new List<string> { productName },
                    Speed = new OptionItem { Label = "Great speed", SortValue = selectedBBspeed }
                };

                _repository.Setup(x => x.GetAll()).Returns(new[] { deal });

                _request.Types = new[] { productName };
                _request.Speed = selectedBBspeed;

                //Act
                var result = _searchService.Search(_request);

                //Assert
                Assert.That(result.First(), Is.SameAs(deal));
            }

            [Test]
            public void Search_WhenProductIsCorrectButDoesntSupportCorrectSpeed_ShouldReturnEmptyCollection()
            {
                //Arrange
                var productName = "Product";
                var selectedBBspeed = 128;
                var deal = new Deal
                {
                    ProductTypes = new List<string> { productName },
                    Speed = new OptionItem { Label = "Great speed", SortValue = selectedBBspeed + 100 }
                };

                _repository.Setup(x => x.GetAll()).Returns(new[] { deal });

                _request.Types = new[] { productName };
                _request.Speed = selectedBBspeed;

                //Act
                var result = _searchService.Search(_request);

                //Assert
                Assert.That(result.Count(), Is.EqualTo(0));
            }
        }
    }
}