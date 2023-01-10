import { ThemeService } from './services/theme.service';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'api-rest-countries';
  theme: string = 'lara-light';
  darkModeStatus: boolean = false;

  constructor(private primengConfig: PrimeNGConfig, private themeService: ThemeService) {

  }
  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  setTheme() {
    var element = document.getElementById('body') as HTMLElement;
    element.classList.remove('dark-mode');
    this.darkModeStatus = false;
    this.themeService.switchTheme(this.theme, this.darkModeStatus);


  }
}
