import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  accessToken:any;
  constructor(
    private authService: SocialAuthService,
    private router: Router
  ) { }

  ngOnInit(): void {  
    this.authService.authState.subscribe((user:any) => {
      if(user){
        localStorage.setItem('google_auth', JSON.stringify(user));
        this.router.navigate(['/dashboard']);
      }
    });
  }


}
