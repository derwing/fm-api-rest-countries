export interface RESTCountryResponse {
    name: Name;
    tld?: string[];
    cca2: string;
    ccn3?: string;
    cca3: string;
    cioc?: string;
    independent?: boolean;
    status: Status;
    unMember: boolean;
    currencies?: Currencies;
    idd: Idd;
    capital?: string[];
    altSpellings: string[];
    region: Region;
    subregion?: string;
    languages?: { [key: string]: string };
    translations: { [key: string]: Translation };
    latlng: number[];
    landlocked: boolean;
    area: number;
    demonyms?: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    fifa?: string;
    car: Car;
    timezones: string[];
    continents: Continent[];
    flags: CoatOfArms;
    coatOfArms: CoatOfArms;
    startOfWeek: StartOfWeek;
    capitalInfo: CapitalInfo;
    borders?: string[];
    gini?: { [key: string]: number };
    postalCode?: PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side: Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    XCD?: Aed;
    MYR?: Aed;
    EUR?: Aed;
    CKD?: Aed;
    NZD?: Aed;
    XOF?: Aed;
    LYD?: Aed;
    DZD?: Aed;
    MAD?: Aed;
    MRU?: Aed;
    SBD?: Aed;
    TND?: Aed;
    GBP?: Aed;
    GGP?: Aed;
    SCR?: Aed;
    USD?: Aed;
    GEL?: Aed;
    SYP?: Aed;
    NOK?: Aed;
    PHP?: Aed;
    ISK?: Aed;
    MZN?: Aed;
    AFN?: Aed;
    DJF?: Aed;
    PEN?: Aed;
    BIF?: Aed;
    GYD?: Aed;
    AUD?: Aed;
    EGP?: Aed;
    ILS?: Aed;
    JOD?: Aed;
    BBD?: Aed;
    KID?: Aed;
    ZAR?: Aed;
    MNT?: Aed;
    MUR?: Aed;
    BMD?: Aed;
    ANG?: Aed;
    JEP?: Aed;
    KHR?: Aed;
    SDG?: BAM;
    GNF?: Aed;
    IRR?: Aed;
    SEK?: Aed;
    BDT?: Aed;
    SHP?: Aed;
    MVR?: Aed;
    XPF?: Aed;
    RWF?: Aed;
    RUB?: Aed;
    BYN?: Aed;
    GIP?: Aed;
    CLP?: Aed;
    AMD?: Aed;
    HTG?: Aed;
    CDF?: Aed;
    IQD?: Aed;
    DKK?: Aed;
    NGN?: Aed;
    MWK?: Aed;
    COP?: Aed;
    GTQ?: Aed;
    FKP?: Aed;
    TTD?: Aed;
    KPW?: Aed;
    TVD?: Aed;
    IDR?: Aed;
    ETB?: Aed;
    BOB?: Aed;
    SLL?: Aed;
    XAF?: Aed;
    UYU?: Aed;
    TWD?: Aed;
    BWP?: Aed;
    ZMW?: Aed;
    MOP?: Aed;
    FJD?: Aed;
    BZD?: Aed;
    ZWL?: Aed;
    QAR?: Aed;
    AOA?: Aed;
    MMK?: Aed;
    OMR?: Aed;
    WST?: Aed;
    BAM?: BAM;
    SZL?: Aed;
    PLN?: Aed;
    KMF?: Aed;
    PGK?: Aed;
    KES?: Aed;
    VND?: Aed;
    VUV?: Aed;
    UGX?: Aed;
    UZS?: Aed;
    PYG?: Aed;
    CAD?: Aed;
    THB?: Aed;
    BHD?: Aed;
    NPR?: Aed;
    KZT?: Aed;
    LAK?: Aed;
    KYD?: Aed;
    TMT?: Aed;
    BRL?: Aed;
    RON?: Aed;
    CHF?: Aed;
    STN?: Aed;
    PKR?: Aed;
    TRY?: Aed;
    SRD?: Aed;
    SGD?: Aed;
    TZS?: Aed;
    HKD?: Aed;
    ALL?: Aed;
    INR?: Aed;
    NIO?: Aed;
    JPY?: Aed;
    ARS?: Aed;
    CVE?: Aed;
    MDL?: Aed;
    PAB?: Aed;
    TOP?: Aed;
    CZK?: Aed;
    MGA?: Aed;
    HUF?: Aed;
    DOP?: Aed;
    JMD?: Aed;
    SAR?: Aed;
    AZN?: Aed;
    IMP?: Aed;
    CRC?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    NAD?: Aed;
    RSD?: Aed;
    KWD?: Aed;
    UAH?: Aed;
    BTN?: Aed;
    YER?: Aed;
    VES?: Aed;
    BND?: Aed;
    SSP?: Aed;
    LBP?: Aed;
    MKD?: Aed;
    MXN?: Aed;
    BSD?: Aed;
    CNY?: Aed;
    KGS?: Aed;
    GMD?: Aed;
    ERN?: Aed;
    TJS?: Aed;
    LKR?: Aed;
    BGN?: Aed;
    LSL?: Aed;
    KRW?: Aed;
    SOS?: Aed;
    GHS?: Aed;
    LRD?: Aed;
    FOK?: Aed;
    AED?: Aed;
    HNL?: Aed;
    AWG?: Aed;
}

export interface Aed {
    name: string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng: Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root?: string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Name {
    common: string;
    official: string;
    nativeName?: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common: string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
