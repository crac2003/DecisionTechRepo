using System.Collections.Generic;

namespace DecisionTech.Domain.Services
{
    public interface IProductPackageProvider
    {
        bool IsProductInPackage(string product);
        IEnumerable<string> GetProductPackage(string package);
    }
}