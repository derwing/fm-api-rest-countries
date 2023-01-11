import { RESTCountryResponse } from './interfaces/countries.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  selectedRegion: string = 'americas';
  allCountries!: RESTCountryResponse[];
  selectedCountry!: RESTCountryResponse;




  constructor(private httpClient: HttpClient) {

  }

  setCountries() {
    this.getCountriesByRegion().subscribe((data) => {
      console.log(this.allCountries);
      if (data) {
        this.allCountries.push(...data);
        console.log(this.allCountries);
      }
    })
  }


  getAllCountries() {
    return this.httpClient.get<RESTCountryResponse[]>('https://restcountries.com/v3.1/all');
  }

  getCountriesByRegion() {
    this.allCountries = [];
    return this.httpClient.get<RESTCountryResponse[]>(`https://restcountries.com/v3.1/region/${this.selectedRegion}`);
  }

  searchCountryByName(countryName: string) {
    console.log('esto llega', countryName);
    return this.httpClient.get<RESTCountryResponse[]>(`https://restcountries.com/v3.1/name/${countryName}`);

  }

  getCountryByCode(code: string) {
    return this.httpClient.get<RESTCountryResponse[]>(`https://restcountries.com/v3.1/alpha/${code}`);
  }

}
