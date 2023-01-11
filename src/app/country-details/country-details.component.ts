import { CountriesService } from './../countries-service';
import { RESTCountryResponse, Currencies } from './../interfaces/countries.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

interface currency {
  name: string,
  symbol?: string
}

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  country!: RESTCountryResponse;
  countryCurrencies: any;
  countryLanguages!: any;
  languages: any[] = [];
  currencies: any[] = [];
  isLoading: boolean = false;
  borders: any[] = [];

  constructor(private router: Router, private activateRoute: ActivatedRoute, private CountriesService: CountriesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.activateRoute.params.subscribe(params => {
      this.CountriesService.searchCountryByName(params['id']).subscribe((data) => {
        this.country = data[0];
        this.countryLanguages = data[0].languages;
        this.countryCurrencies = data[0].currencies;
      })
    })
    setTimeout(() => {
      this.languageAndCurrency();
      this.getBorders();
    }, 1000);
  }

  languageAndCurrency() {
    const languagesValues = Object.values(this.countryLanguages);
    languagesValues.sort();
    this.languages.push(languagesValues);

    const currenciesValues = Object.values(this.countryCurrencies);
    currenciesValues.forEach((element: any) => {
      this.currencies.push(element.name)
    });
    this.isLoading = false;
  }

  getBorders() {
    this.country.borders!.forEach(element => {
      if (element) {
        this.CountriesService.getCountryByCode(element).subscribe(data => {
          this.borders.push(data[0].name);
          console.log(this.borders);
        })
      }
    });


  }


  backButton() {
    this.router.navigateByUrl('/home');
  }
}
