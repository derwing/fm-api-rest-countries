import { RESTCountryResponse } from './../interfaces/countries.interface';
import { CountriesService } from './../countries-service';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit, AfterContentChecked {
  allCountriesView!: RESTCountryResponse[];
  selectedCountry!: RESTCountryResponse;
  isLoading: boolean = false;

  constructor(private countryService: CountriesService, private router: Router) {
  }

  ngOnInit(): void {
    this.countryService.setCountries();
  }

  ngAfterContentChecked(): void {
    this.isLoading = true;
    this.allCountriesView = [];
    if (this.allCountriesView != this.countryService.allCountries) {
      this.allCountriesView = [...this.countryService.allCountries];
      this.isLoading = false;
    }
    if (this.selectedCountry != this.countryService.selectedCountry) {
      this.selectedCountry = this.countryService.selectedCountry
    }

  }

}
