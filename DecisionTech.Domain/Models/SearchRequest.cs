using System.Collections.Generic;

namespace DecisionTech.Domain.Models
{
    public class SearchRequest
    {
        public IEnumerable<string> Types { get; set; }
        public int? Speed { get; set; }
    } 
}