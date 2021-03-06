import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {saveAs} from 'file-saver';
import {LocalizationService} from '../../../shared/service/localization.service';
import {LanguageService} from '../../../shared/service/language.service';
import {AppUrl} from '../../../app-url';

@Component({
  selector: 'localization-list',
  templateUrl: './localization-list.component.html',
  styleUrls: ['./localization-list.component.css']
})
export class LocalizationListComponent implements OnInit {

  localizations:any = [];
  language:any = [];
  languageId:string = '';
  appUrl = AppUrl;
  fileToUpload: File = null;

  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private localizationService: LocalizationService,
              private languageService: LanguageService) {
  }

  ngOnInit() {
    this.languageId = this.activeRoute.snapshot.queryParamMap.get('languageId');
  
    this.languageService.findOne(this.languageId).subscribe(resp => {
      console.log(resp);
      this.language = resp;
    })
    this.localizationService.findAll("language/" + this.languageId).subscribe(resp => { 
      console.log(resp);
      this.localizations = resp;
    });
  }

  addOrEdit(localizationId) {
    console.log(localizationId);
    this.router.navigate(
      [AppUrl.privateLanguageSingle], {
        queryParams: {
          localizationId: localizationId,
          languageId: this.languageId,
        }
      }
    );
  }



  export(localizationId){
      console.log(localizationId);
      this.localizationService.export(localizationId).subscribe(data => {
        console.log(data);
        saveAs(data, 'YourFileName.xlsx', { 
            type: data.type 
        })
     })
  }

  uploadFile(files: FileList) {
    if (files.length == 0) {
      console.log("No file selected!");
      return
    }

    let file: File = files[0];
    console.log(file);
    this.localizationService.uploadFile(this.languageId, file).subscribe(resp => {
      location.reload();
    });
  }

}
