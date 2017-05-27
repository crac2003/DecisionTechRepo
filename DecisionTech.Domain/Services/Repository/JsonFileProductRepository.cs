using System.Collections.Generic;
using System.IO;
using DecisionTech.Domain.Models;
using Newtonsoft.Json;

namespace DecisionTech.Domain.Services.Repository
{
    public class JsonFileProductRepository : IProductRepository
    {
        private readonly IConfig _config;

        public JsonFileProductRepository(IConfig config)
        {
            _config = config;
        }

        public IEnumerable<Deal> GetAll()
        {
            var content = File.ReadAllText(Path.Combine(_config.SystemRoot, _config.DataFile));
            var structure = JsonConvert.DeserializeObject<FileStructure>(content);
            return structure?.Deals;
        }
    }
}