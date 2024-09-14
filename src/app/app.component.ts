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
  isSearchClicked = false;
  isFilterClicked = false;
  isHistoryClicked = false;
  isMyAccount = false;
  showFilterSection= false;

  overviewClicked(){
    this.isMessageClicked = false;
    this.isOverviewClicked = true;
    this.isSearchClicked = false;
    this.isFilterClicked = false;
    this.isHistoryClicked = false;
    this.isMyAccount = false;
  }
  openFilter(){
    this.isMessageClicked = false;
    this.isOverviewClicked = false;
    this.isSearchClicked = false;
    this.isFilterClicked = true;
    this.isHistoryClicked = false;
    this.isMyAccount = false;
    this.commonService.setFilterFlag(true);
  }
  closeFilterSection(){
    this.commonService.setFilterFlag(false);
  }
  openMessage(){
    this.commonService.setFilterFlag(false);
    this.isMessageClicked = true;
    this.isOverviewClicked = false;
    this.isSearchClicked = false;
    this.isFilterClicked = false;
    this.isHistoryClicked = false;
    this.isMyAccount = false;
  }
  openSearch(){
    this.isMessageClicked = false;
    this.isOverviewClicked = false;
    this.isSearchClicked = true;
    this.isFilterClicked = false;
    this.isHistoryClicked = false;
    this.isMyAccount = false;
    this.commonService.setFilterFlag(false);
  }
  openHistory(){
    this.isMessageClicked = false;
    this.isOverviewClicked = false;
    this.isSearchClicked = false;
    this.isFilterClicked = false;
    this.isHistoryClicked = true;
    this.isMyAccount = false;
    this.commonService.setFilterFlag(false);
  }
  openMyAccount(){
    this.isMessageClicked = false;
    this.isOverviewClicked = false;
    this.isSearchClicked = false;
    this.isFilterClicked = false;
    this.isHistoryClicked = false;
    this.isMyAccount = true;
    this.commonService.setFilterFlag(false);
  }
}
