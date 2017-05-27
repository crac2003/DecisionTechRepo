namespace DecisionTech.Domain.Models
{

    public interface IConfig
    {
        string DataFile { get; }
        string SystemRoot { get; }
    }

    public class Config : IConfig
    {
        public string DataFile { get; set; }
        public string SystemRoot { get; set; }
    }
}