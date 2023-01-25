import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userDetail: any;
  loggedIn: boolean = false;
  constructor(
    private authService: SocialAuthService,
    private router: Router
  ) { 
    const data:any = localStorage.getItem('google_auth');
    this.userDetail =JSON.parse(data);
    console.log(this.userDetail);
  }

  ngOnInit(): void {
  }

  signOut(): void {
    this.authService.signOut().then(()=>{
      localStorage.clear();
      this.router.navigateByUrl("/login")
    }).catch((error:any) => {
      console.log(error);
    })
  }

}
