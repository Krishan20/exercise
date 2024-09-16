import { Component, OnInit, inject } from '@angular/core';
import { CommonService } from '../commonService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }
  hideLoginPopup: boolean = true;
  commonService = inject(CommonService)
  router = inject(Router)
  emailId: string = "";
  password: string = "";
  ngOnInit(): void {
    this.commonService.setHideHoleContent(true);
  }

  logIn(){
    this.hideLoginPopup = false;
    this.router.navigate(["overview"])
    this.commonService.setHideHoleContent(false);
  }
}
