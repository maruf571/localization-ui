import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {LocalizationService} from '../../../shared/service/localization.service';
import {LanguageService} from '../../../shared/service/language.service';
import {AppUrl} from '../../../app-url';

@Component({
  selector: 'localization-single',
  templateUrl: './localization-single.component.html',
  styleUrls: ['./localization-single.component.css']
})

export class LocalizationSingleComponent implements OnInit {

  @ViewChild('customerName', { static: true })
  private elementRef: ElementRef;

  localization:any = {};
  language:any = {};
  projectId = null;
  languageId = null;
  localizationId = '';

  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private localizationService: LocalizationService,
              private languageService: LanguageService) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.focus();

    this.localizationId = this.activeRoute.snapshot.queryParamMap.get('localizationId');
    this.languageId = this.activeRoute.snapshot.queryParamMap.get('languageId');
    console.log(this.localizationId);
    console.log(this.languageId);

    if(this.languageId){
      this.languageService.findOne(this.languageId)
      .subscribe(resp => {
        console.log(resp);
        this.language = resp
      })
    }

    if (this.localizationId) {
      this.localizationService.findOne(this.localizationId + "/language/"+ this.languageId).subscribe(resp => {
        console.log(resp);
        this.localization = resp;
      });
    }
  }

  submit(entity) {

    entity.languageId = this.language['id'];
    entity.projectId = this.language['project'].id;

    console.log(entity);
    this.localizationService.submit(entity).subscribe(resp => {
      this.router.navigate([AppUrl.privateLocalizationList], {
        queryParams: {
          languageId: this.languageId,
          projectId: this.projectId
        }
      });
    });
  }
}
