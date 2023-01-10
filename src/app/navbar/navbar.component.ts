import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CountriesService } from '../countries-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];
  region: {}[] = [{}];

  selectedRegion = [
    'americas'
  ];


  constructor(private countryService: CountriesService) {
    this.items = [
      {
        label: 'File',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Open' },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
        ]
      }
    ];

    this.region = [
      'americas',
      'africa',
      'asia',
      'europe',
      'oceania',
    ];

  }

  ngOnInit() {

  }

  getSelecteRegion() {
    console.log('esto es la seleccion', this.selectedRegion);
    this.countryService.selectedRegion = this.selectedRegion.toString();
    this.countryService.allCountries = [];
    this.countryService.setCountries();
  }

  searchCountry(country: string) {
    if (country.length > 2) {
      console.log(country);
      this.countryService.searchCountryByName(country).subscribe((data) => {
        this.countryService.selectedCountry = data[0];
        console.log(data[0]);
      })

    }
  }

}
