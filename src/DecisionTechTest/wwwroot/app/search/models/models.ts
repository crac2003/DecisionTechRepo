

export class SearchRequest {
    public types: string[] = [];
    public speed: number;
}

export class Period {
    public months: number;
    public amount: number;
}

export class Price {
    public periods: Period[];
    public firstYear: number;
    public totalContractCost: number;
    public upFrontCost: number;
    public upsell: any;
    public selectedOptions: any[];
}

export class OptionItem {
    public label: string;
    public sortValue: number;
}

export class Mobile {
    public minutes: OptionItem;
    public data: OptionItem;
    public texts: OptionItem;
    public connectionType: OptionItem;
    }

export class Offer {
    public type: string;
    public title: string;
    public smallLogo: string;
    public expiresAt: string;
}

export class Provider {
    public id: number;
    public name: string;
    public logo: string;
}

export class UpfrontCost {
    public name: string;
    public price: number;
}

export class PremiumFeatures {
    // ReSharper disable once InconsistentNaming
    public bTSport: boolean;
    public comedyCentral: boolean;
    public discoveryChannel: boolean;
    public cartoonNetwork: boolean;
    public disneyChannel: boolean;
}

export class Extras {
    public sortValue: number;
    public labels: string[];
}

export class Deal {
    public title: string;
    public prices: Price[];
    public id: number;
    public contractLength: number;
    public tvProduct: string;
    public standardChannels: OptionItem;
    public totalChannels: OptionItem;
    public hdChannels: OptionItem;
    public speed: OptionItem;
    public uploadSpeed: OptionItem;
    public usage: OptionItem;
    public mobile: Mobile;
    public offer: Offer;
    public provider: Provider;
    public newLineCost: number;
    public upfrontCosts: UpfrontCost[];
    public productTypes: string[];
    public premiumFeatures: PremiumFeatures;
    public popularChannels: any[];
    public telephoneNumber: string;
    public extras: Extras;
    public broadbandType: string;
}