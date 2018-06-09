export interface City {
    id: string;
    name : string;
};

export const CITY = {
  NY: { id:'ny', name:'New York'},
  TK: { id:'tk', name:'Tokyo'},
  SP: { id:'sp', name:'São Paulo'}
};

export interface Location {
  city: City;
}

export const InitialLocation:Location = {
  city: CITY.NY
};
