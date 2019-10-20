import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from '../../../shared/service/language.service';
import { environment } from '../../../../environments/environment';
import {AppUrl} from '../../../app-url';


@Component({
  selector: 'language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {

  languages:any = [];
  projectId = '';
  api = environment.REST_API_URL;
  appUrl = AppUrl;
  
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    const projectId = this.activeRoute.snapshot.queryParamMap.get('projectId');
    this.projectId = projectId;
    console.log(projectId);
    if (projectId != null) {
      this.languageService.findAll("projects/" + projectId).subscribe(resp => {
        console.log(resp);
        this.languages = resp;
      });
    }
  }


  naviagetToSongle(languageId) {
    this.router.navigate(
      [AppUrl.privateLanguageSingle], {
        queryParams: {
          projectId: this.projectId,
          languageId: languageId
        }
      }
    );
  }


  navigateToLocalization(languageId) {
    this.router.navigate(
      [AppUrl.privateLocalizationList], {
        queryParams: {
          languageId: languageId
        }
      }
    );
  }


}
