export interface IOrder {
    id: number;
    orderNumber: string;
    loadingDate: number;
    loadingCountryId: {
        id: number;
        name: string;
        createdAt: number | null; //can be problems
    };
    loadingCityId: {
        id: number;
        name: string;
        isCapital: boolean;
    };
    companyNameLoading: string;
    addressLoading: string;
    postcodeLoading: string;
    loadingCoordinates: {
        lat: number;
        lng: number;
    };
    unloadingDate: number;
    unloadingCountry: {
        id: number;
        name: string;
        createdAt: number | null; //can be problems
    };
    unloadingCity: {
        id: number;
        name: string;
        isCapital: boolean;
    };
    addressUnloading: string;
    companyNameUnloading: string;
    postcodeUnloading: string;
    unloadingCoordinates: {
        lat: number;
        lng: number;
    };
    weight: number;
    orderStatus: {
        name: string;
        title: string;
    };
    notes: string;
}
