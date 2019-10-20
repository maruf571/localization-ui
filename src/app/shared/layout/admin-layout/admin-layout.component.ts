import { Component} from '@angular/core';
import {AppUrl} from '../../../app-url';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent{

  appUrl = AppUrl;
}
