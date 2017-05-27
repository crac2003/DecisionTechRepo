using System.Collections.Generic;
using DecisionTech.Domain.Models;

namespace DecisionTech.Domain.Services.Repository
{
    public interface IProductRepository
    {
        IEnumerable<Deal> GetAll();
    }
}