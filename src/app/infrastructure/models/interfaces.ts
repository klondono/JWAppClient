export interface ITerritoryAssignment {
    TerritoryAssignmentId: number;
    TerritoryId: number | null;
    AssignedTo: number | null;
    AssignedToLong: string;
    AssignedDate: Date | string | null;
    ReturnedDate: Date | string | null;
    ExpirationDate: Date | string | null;
    Territory: ITerritory;
}

export interface ITerritory {
    TerritoryId?: number;
    TerritoryNumber?: number;
    TerritoryLocation?: string;
    TerritoryDescription?: string;
    TerritoryMapLink?: string;
    CurrentlyAssigned?: number | null;
    CurrentlyAssignedLong?: string;
    AssignedOn?: Date | string | null;
    LastPreached?: Date | string | null;
    IsActive?: boolean | null;
    DateAdded?: Date | string | null;
    DateModified?: Date | string | null;
    UserAdded?: number | null;
    UserModified?: number | null;
    UserAddedLong?: string;
    UserModifiedLong?: string;
    CongregationId?: number | null;
    Congregation?: ICongregation;
    TerritoryAddressLink?: ITerritoryAddressLink[];
    TerritoryAssignment?: ITerritoryAssignment[];
}

export interface ICongregation {
    CongregationId: number;
    CongregationNo: number;
    CongregationName: string;
    CongregationNameLong: string;
    CongregationPhoneNo: string;
    CongregationEmail: string;
    IsActive: boolean | null;
    DateAdded: Date | string | null;
    DateModified: Date | string | null;
    UserAdded: number | null;
    UserModified: number | null;
    AddressId: number | null;
    LanguageId: number;
    Address: IAddress;
    Language: ILanguage;
    FieldServiceSymbol: IFieldServiceSymbol[];
    Person: IPerson[];
    Territory: ITerritory[];
}

export interface IPerson {
    PersonId: number;
    FirstName: string;
    LastName: string;
    MiddleInitial: string;
    FormattedName: string;
    BaptismDate: Date | string | null;
    Email: string;
    PhoneNo: string;
    MobileNo: string;
    IsActive: boolean | null;
    DateAdded: Date | string | null;
    DateModified: Date | string | null;
    UserAdded: number | null;
    UserModified: number | null;
    CongregationId: number | null;
    AddressId: number | null;
    Address: IAddress;
    Congregation: ICongregation;
    PersonServicePrivilegeLink: IPersonServicePrivilegeLink[];
    TerritoryAddressLink: ITerritoryAddressLink[];
}

export interface IFieldServiceSymbol {
    FieldServiceSymbol1: string;
    FieldServiceSymbolDescription: string;
    ListOrder: number | null;
    CongregationId: number | null;
    Congregation: ICongregation;
    TerritoryActivity: ITerritoryActivity[];
}

export interface ITerritoryActivity {
    FieldServiceActivityId: number;
    ActivityDate: Date | string;
    Notes: string;
    HouseholderFirstName: string;
    HouseholderLastName: string;
    HouseholderPhoneNumber: string;
    UpdateTerritory: boolean;
    AddressId: number;
    FieldServiceSymbol: string;
    IsActive: boolean | null;
    DateAdded: Date | string;
    DateModified: Date | string | null;
    UserAdded: number | null;
    UserModified: number | null;
    UserAddedLong: string;
    UserModifiedLong: string;
    Address: IAddress;
    FieldServiceSymbolNavigation: IFieldServiceSymbol;
}

export interface IAddress {
    AddressId: number;
    AddressLine1: string;
    AddressLine2: string;
    Number: string;
    PreDir: string;
    Street: string;
    Suffix: string;
    PostDir: string;
    Sec: string;
    SecNumber: string;
    City: string;
    State: string;
    Zip: string;
    Zip4: string;
    County: string;
    StateFp: string;
    CountyFp: string;
    Latitude: string;
    Longitude: string;
    GeoPrecision: string;
    IsActive: boolean | null;
    DateAdded: Date | string | null;
    DateModified: Date | string | null;
    UserAdded: number | null;
    UserModified: number | null;
    Congregation: ICongregation[];
    Person: IPerson[];
    TerritoryActivity: ITerritoryActivity[];
    TerritoryAddressLink: ITerritoryAddressLink[];
}

export interface IPersonServicePrivilegeLink {
    PersonServicePrivilegeLinkId: number;
    StartDate: Date | string | null;
    EndDate: Date | string | null;
    IsActive: boolean | null;
    DateAdded: Date | string | null;
    DateModified: Date | string | null;
    UserAdded: number | null;
    UserModified: number | null;
    PersonId: number | null;
    ServicePrivilegeId: number | null;
    Person: IPerson;
    ServicePrivilege: IServicePrivilege;
}

export interface IServicePrivilege {
    ServicePrivilegeId: number;
    ServicePrivilegeName: string;
    IsActive: boolean | null;
    DateAdded: Date | string | null;
    DateModified: Date | string | null;
    UserAdded: number | null;
    UserModified: number | null;
    PersonServicePrivilegeLink: IPersonServicePrivilegeLink[];
}

export interface ITerritoryAddressLink {
    TerritoryAddressLinkId: number;
    TerritoryId: number | null;
    AddressId: number | null;
    IsActive: boolean | null;
    HouseholderFirstName: string;
    HouseholderLastName: string;
    HouseholderPhoneNumber: string;
    PersonId: number | null;
    Address: IAddress;
    Person: IPerson;
    Territory: ITerritory;
}

export interface ILanguage {
    LanguageId: number;
    LanguageName: string;
    IsActive: boolean | null;
    UserAdded: number | null;
    UserModified: number | null;
    DateAdded: Date | string | null;
    DateModified: Date | string | null;
    Congregation: ICongregation[];
}
