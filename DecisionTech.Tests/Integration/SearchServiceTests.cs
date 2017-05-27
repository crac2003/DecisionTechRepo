using System.Linq;
using DecisionTech.Domain.Models;
using DecisionTech.Domain.Services;
using DecisionTech.Domain.Services.Repository;
using NUnit.Framework;

namespace DecisionTech.Tests.Integration
{
    [TestFixture] 
    public class SearchServiceTests
    {
        private ISearchService _searchService;
        private Config _config;

        [SetUp]
        public void SetUpBase()
        {
            _config = new Config
            {
                DataFile = "../../Integration/Data/deals.json"
            };

            _searchService = new SearchService(
                new JsonFileProductRepository(_config),
                new ProductPackageProvider());
        }

        [TestFixture]
        public class Search : SearchServiceTests
        {
            [TestCase(3, null, "Broadband")]
            [TestCase(2, null, "Broadband", "TV")]
            [TestCase(1, null, "Broadband", "Mobile")]
            [TestCase(0, 5120, "Broadband", "Mobile", "TV")]
            [TestCase(1, 53248, "Broadband")]
            public void Search_WhenCalled_ShouldReturnCorrectNumberOfDeals(int expectedProductNo, int? speed, params string[] types)
            {
                _config.SystemRoot = TestContext.CurrentContext.TestDirectory;
                //Arrange
                var request = new SearchRequest
                {
                    Types = types,
                    Speed = speed
                };

                //Act
                var result = _searchService.Search(request);

                //Assert
                Assert.That(result.Count(), Is.EqualTo(expectedProductNo));
            }
        }
    }
}