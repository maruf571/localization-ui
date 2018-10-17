
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from '../auth.service';


@Component({
    templateUrl: 'signin.component.html',
    styleUrls: ['signin.component.css']
})
export class SigninComponent implements OnInit {
    user:any = {};
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private activeRoute: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthService) {}

    ngOnInit() {
  
        // get return url from route parameters or default to '/'
        this.returnUrl = this.activeRoute.snapshot.queryParams['returnUrl'] || '/dashboard';      
        if(this.authenticationService.isLoggedIn()){
            this.router.navigate([this.returnUrl]);   
            return;
        }
        
        // reset login status
         this.authenticationService.logout();
    }


    onSubmit(user) {
        this.submitted = true;

        this.loading = true;
        this.authenticationService.login(user.email, user.password)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
}
