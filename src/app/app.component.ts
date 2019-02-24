import { Component } from '@angular/core';
import { Translator } from 'angular-translator';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pt');
  }
}
