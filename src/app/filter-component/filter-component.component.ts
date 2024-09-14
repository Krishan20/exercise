import { Component } from '@angular/core';
import { CommonService } from '../commonService';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.scss']
})
export class FilterComponentComponent {
  constructor(private commonService: CommonService){}
  closeFilterSection(){
    this.commonService.setFilterFlag(false)
  }
}
