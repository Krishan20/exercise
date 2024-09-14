import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../commonService';

@Component({
  selector: 'app-cardview',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cardview.component.html',
  styleUrls: ['./cardview.component.scss']
})
export class CardviewComponent implements OnInit {

  dataForAllEmp=[{
    name: "Andrew Bridgen",
    role: "Sr. UI Developer",
    rating: "3.5",
    experience:"5.8",
    doj: "2017",
    currentTeam: "OCBC Singapore",
    reportingManager:"Lalit Agarwal",
    contactNumber: 7406559241,
    email:"andrew@infrrd.ai",
    empImage:"../../assets/Idris-Elba.webp",
    location: "Bangalore"
  },{
    name: "Andrew Bridgen",
    role: "Sr. UI Developer",
    rating: "3.5",
    experience:"5.8",
    doj: "2017",
    currentTeam: "OCBC Singapore",
    reportingManager:"Lalit Agarwal",
    contactNumber: 7406559241,
    email:"andrew@infrrd.ai",
    empImage:"../../assets/Idris-Elba.webp",
    location: "Bangalore"
  },{
    name: "Andrew Bridgen",
    role: "Sr. UI Developer",
    rating: "3.5",
    experience:"5.8",
    doj: "2017",
    currentTeam: "OCBC Singapore",
    reportingManager:"Lalit Agarwal",
    contactNumber: 7406559241,
    email:"andrew@infrrd.ai",
    empImage:"../../assets/Idris-Elba.webp",
    location: "Bangalore"
  },{
    name: "Andrew Bridgen",
    role: "Sr. UI Developer",
    rating: "3.5",
    experience:"5.8",
    doj: "2017",
    currentTeam: "OCBC Singapore",
    reportingManager:"Lalit Agarwal",
    contactNumber: 7406559241,
    email:"andrew@infrrd.ai",
    empImage:"../../assets/Idris-Elba.webp",
    location: "Bangalore"
  },{
    name: "Andrew Bridgen",
    role: "Sr. UI Developer",
    rating: "3.5",
    experience:"5.8",
    doj: "2017",
    currentTeam: "OCBC Singapore",
    reportingManager:"Lalit Agarwal",
    contactNumber: 7406559241,
    email:"andrew@infrrd.ai",
    empImage:"../../assets/Idris-Elba.webp",
    location: "Pune"
  },{
    name: "Andrew Bridgen",
    role: "Sr. UI Developer",
    rating: "3.5",
    experience:"5.8",
    doj: "2017",
    currentTeam: "OCBC Singapore",
    reportingManager:"Lalit Agarwal",
    contactNumber: 7406559241,
    email:"andrew@infrrd.ai",
    empImage:"../../assets/Idris-Elba.webp",
    location: "Pune"
  }]
  checkForCity = true;
  employeeDetails:any;

  constructor(private commonService:CommonService){}

  showFilter: boolean = false;
  ngOnInit(): void {
    let dataForAllEmpCpy = JSON.parse(JSON.stringify(this.dataForAllEmp))
    this.employeeDetails = dataForAllEmpCpy.filter((emp:any)=>{
        return emp.location == "Bangalore"
    })
    
    this.commonService.getFilterFlag().subscribe((res)=>{
      this.showFilter = res;
    })
    
  }

  openMailto(email:any){
    window.location.href = "mailto:"+email;
  }

  copyEmail(email:any) {
    var copyText = email;
      navigator.clipboard.writeText(copyText);
    // Alert the copied text
    alert("Copied the text: " + copyText);
  }
  filterDataForBlrEmp(flag:any){
    if(!flag){
      this.employeeDetails = this.dataForAllEmp;
    }else{
      let dataForAllEmpCpy = JSON.parse(JSON.stringify(this.dataForAllEmp))
      this.employeeDetails = dataForAllEmpCpy.filter((emp:any)=>{
        return emp.location == "Bangalore"
    })
    }
  }

}
