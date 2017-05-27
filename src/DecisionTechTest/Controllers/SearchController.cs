using System.Web.Http;
using DecisionTech.Domain.Services;
using Microsoft.AspNetCore.Mvc;
using DecisionTech.Domain.Models;

namespace DecisionTechTest.Controllers
{ 
    public class SearchController : Controller
    {
        private readonly ISearchService _searchService; 

        public SearchController(ISearchService searchService)
        {
            _searchService = searchService; 
        }

        [Microsoft.AspNetCore.Mvc.HttpGet]
        [Microsoft.AspNetCore.Mvc.Route("search")]
        public IActionResult Search([FromUri]SearchRequest request)
        {
            return Ok(_searchService.Search(request));
        }
    }
}
