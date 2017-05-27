using System.Collections.Generic;

namespace DecisionTech.Domain.Models
{
    public class Period
    {
        public int? Months { get; set; }
        public double Amount { get; set; }
    }

    public class Price
    {
        public List<Period> Periods { get; set; }
        public double FirstYear { get; set; }
        public double TotalContractCost { get; set; }
        public double UpFrontCost { get; set; }
        public object Upsell { get; set; }
        public List<object> SelectedOptions { get; set; }
    } 
      
    public class OptionItem
    {
        public string Label { get; set; }
        public int SortValue { get; set; }
    }

    public class Mobile
    {
        public OptionItem Minutes { get; set; }
        public OptionItem Data { get; set; }
        public OptionItem Texts { get; set; }
        public OptionItem ConnectionType { get; set; }
    }

    public class Offer
    {
        public string Type { get; set; }
        public string Title { get; set; }
        public string SmallLogo { get; set; }
        public string ExpiresAt { get; set; }
    }

    public class Provider
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Logo { get; set; }
    }

    public class UpfrontCost
    {
        public string Name { get; set; }
        public double Price { get; set; }
    }

    public class PremiumFeatures
    {
        // ReSharper disable once InconsistentNaming
        public bool? BTSport { get; set; }
        public bool? ComedyCentral { get; set; }
        public bool? DiscoveryChannel { get; set; }
        public bool? CartoonNetwork { get; set; }
        public bool? DisneyChannel { get; set; }
    }

    public class Extras
    {
        public int SortValue { get; set; }
        public List<string> Labels { get; set; }
    }

    public class Deal
    {
        public string Title { get; set; }
        public List<Price> Prices { get; set; }
        public int Id { get; set; }
        public int ContractLength { get; set; }
        public string TvProduct { get; set; }
        public OptionItem StandardChannels { get; set; }
        public OptionItem TotalChannels { get; set; }
        public OptionItem HdChannels { get; set; }
        public OptionItem Speed { get; set; }
        public OptionItem UploadSpeed { get; set; }
        public OptionItem Usage { get; set; }
        public Mobile Mobile { get; set; }
        public Offer Offer { get; set; }
        public Provider Provider { get; set; }
        public int NewLineCost { get; set; }
        public List<UpfrontCost> UpfrontCosts { get; set; }
        public List<string> ProductTypes { get; set; }
        public PremiumFeatures PremiumFeatures { get; set; }
        public List<object> PopularChannels { get; set; }
        public string TelephoneNumber { get; set; }
        public Extras Extras { get; set; }
        public string BroadbandType { get; set; }
    }

    public class FileStructure
    {
        public IEnumerable<Deal> Deals { get; set; }
    }
}
