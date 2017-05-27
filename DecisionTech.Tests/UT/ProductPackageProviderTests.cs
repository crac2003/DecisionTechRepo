using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DecisionTech.Domain.Models;
using DecisionTech.Domain.Services;
using NUnit.Framework;
using NUnit.Framework.Internal;

namespace DecisionTech.Tests.UT
{
    [TestFixture]
    public class ProductPackageProviderTests
    {
        private IProductPackageProvider packageProvider;

        [SetUp]
        public void SetUp()
        {
            packageProvider = new ProductPackageProvider();
        }

        [TestFixture]
        public class IsProductInPackage : ProductPackageProviderTests
        {
            [TestCase(SystemConstants.Products.Broadband, true)]
            [TestCase(SystemConstants.Products.Phone, true)]
            [TestCase(SystemConstants.Products.Mobile, false)]
            [TestCase(SystemConstants.Products.TV, false)]
            public void IsProductInPackage_WhenCalled_ShouldReturnCorrectResult(string product, bool expectedResult)
            {
                //Arrange

                //Act
                var result = packageProvider.IsProductInPackage(product);

                //Assert
                Assert.That(result, Is.EqualTo(expectedResult));
            }
        }

        [TestFixture]
        public class GetProductPackage : ProductPackageProviderTests
        {
            [TestCase(SystemConstants.Products.Broadband, SystemConstants.Products.Broadband, SystemConstants.Products.Phone)]
            [TestCase(SystemConstants.Products.Phone, SystemConstants.Products.Broadband, SystemConstants.Products.Phone)]
            [TestCase(SystemConstants.Products.Mobile)]
            [TestCase(SystemConstants.Products.TV)]
            public void GetProductPackage_WhenCalled_ShouldReturnCorrectResult(string product, params string[] expectedProducts)
            {
                //Arrange

                //Act
                var result = packageProvider.GetProductPackage(product);

                //Assert
                CollectionAssert.AreEquivalent(result, expectedProducts);
            }
        }
    }
}
