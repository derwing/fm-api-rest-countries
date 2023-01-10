import { ThemeService } from './../services/theme.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CountriesService } from '../countries-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMobile: boolean = false;
  orientationStepper: string = 'horizontal';
  darkModeStatus: boolean = false;
  theme: string = 'lara-light';
  items: MenuItem[];
  region: {}[] = [{}];

  selectedRegion = [
    'americas'
  ];


  constructor(
    private countryService: CountriesService,
    private themeService: ThemeService) {
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
    this.detectDevice();

  }

  ngOnInit() {
  }

  detectDevice() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // true for mobile device
      this.isMobile = true;
      this.orientationStepper = 'horizontal';
    }

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

  darkMode() {
    this.darkModeStatus = !this.darkModeStatus;
    if (this.darkModeStatus) {
      this.theme = 'lara-dark';
      this.themeService.switchTheme(this.theme, this.darkModeStatus);
      var element = document.getElementById('body') as HTMLElement;
      element.classList.add('dark-mode');
    } else {
      this.theme = 'lara-light';
      this.themeService.switchTheme(this.theme, this.darkModeStatus);
      var element = document.getElementById('body') as HTMLElement;
      element.classList.remove('dark-mode');
    }
  }


}
