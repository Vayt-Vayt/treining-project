import { Country, Currency } from "shared/const/common";

export interface Profile {
    first?: string;
    lastname?: string;
    age?: number | string;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}

export interface ProfileShema { 
    isLoading: boolean;
    readonly: boolean;
    data?: Profile;
    form?: Profile;
    error?: string;
}