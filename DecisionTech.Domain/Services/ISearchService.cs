using System.Collections.Generic;
using DecisionTech.Domain.Models;

namespace DecisionTech.Domain.Services
{
    public interface ISearchService
    {
        IEnumerable<Deal> Search(SearchRequest request);
    }
}