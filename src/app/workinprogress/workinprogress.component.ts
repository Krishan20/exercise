import { Component } from '@angular/core';
import { CommonService } from '../commonService';

@Component({
  selector: 'app-workinprogress',
  templateUrl: './workinprogress.component.html',
  styleUrls: ['./workinprogress.component.scss']
})
export class WorkinprogressComponent {
  constructor(private commonService:CommonService){}

  showFilter: boolean = false;
  ngOnInit(): void {
    this.commonService.getFilterFlag().subscribe((res)=>{
      this.showFilter = res;
    })
    
  }
}
