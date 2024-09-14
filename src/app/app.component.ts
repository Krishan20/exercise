import { Component } from '@angular/core';
import { CommonService } from './commonService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private commonService:CommonService){}
  ngOnInit(): void {
    this.commonService.getFilterFlag().subscribe((res)=>{
      this.showFilterSection = res;
    })
  }
  title = 'infrrdDashboard';
  notificationCount = 22;
  messageCount = 120

  selectedTeam = "chooseTeam";

  isOverviewClicked = true;
  isMessageClicked = false;
  showFilterSection= false;

  openFilter(){
    this.commonService.setFilterFlag(true);
  }
  closeFilterSection(){
    this.commonService.setFilterFlag(false);
  }
  openMessage(){
    this.commonService.setFilterFlag(false);
  }
  openSearch(){
    this.commonService.setFilterFlag(false);
  }
  openHistory(){
    this.commonService.setFilterFlag(false);
  }
  openMyAccount(){
    this.commonService.setFilterFlag(false);
  }
}
