import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../../../shared/service/project.service';
import {AppUrl} from '../../../app-url';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: ProjectService) {
  }

  ngOnInit() {
    this.service.findAll("").subscribe(resp => { 
      this.projects = resp.content;
    });
  }


  navigateToSingle(projectId){    
    this.router.navigate(
      [AppUrl.privateProjectSingle], {
        queryParams:{ 
          projectId: projectId,
        }
      }
  );
}

  navigateToLanguage(projectId){
    this.router.navigate(
      [AppUrl.privateLanguageList], {
        queryParams:{ 
          projectId: projectId,
        }
      }
    );
  }

}
