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
    rating: "4",
    experience:"5.8",
    doj: "2017",
    currentTeam: "OCBC Singapore",
    reportingManager:"Lalit Agarwal",
    contactNumber: 7406559241,
    email:"andrew@infrrd.ai",
    empImage:"../../assets/Idris-Elba.webp",
    location: "Bangalore"
  },{
    name: "Andrew A",
    role: "Sr. UI Developer",
    rating: "4",
    experience:"6.8",
    doj: "2018",
    currentTeam: "OCBC Singapore",
    reportingManager:"Lalit Agarwal",
    contactNumber: 7406559241,
    email:"andrew@infrrd.ai",
    empImage:"../../assets/Idris-Elba.webp",
    location: "Bangalore"
  },{
    name: "Andrew C",
    role: "Sr. UI Developer",
    rating: "4",
    experience:"5.8",
    doj: "2017",
    currentTeam: "OCBC Singapore",
    reportingManager:"Lalit Agarwal",
    contactNumber: 7406559241,
    email:"andrew@infrrd.ai",
    empImage:"../../assets/Idris-Elba.webp",
    location: "Bangalore"
  },{
    name: "Andrew D",
    role: "Sr. UI Developer",
    rating: "4",
    experience:"5.8",
    doj: "2017",
    currentTeam: "OCBC Singapore",
    reportingManager:"Lalit Agarwal",
    contactNumber: 7406559241,
    email:"andrew@infrrd.ai",
    empImage:"../../assets/Idris-Elba.webp",
    location: "Bangalore"
  },{
    name: "Andrew E",
    role: "Sr. UI Developer",
    rating: "4",
    experience:"5.8",
    doj: "2017",
    currentTeam: "OCBC Singapore",
    reportingManager:"Lalit Agarwal",
    contactNumber: 7406559241,
    email:"andrew@infrrd.ai",
    empImage:"../../assets/Idris-Elba.webp",
    location: "Pune"
  },{
    name: "Andrew F",
    role: "Sr. UI Developer",
    rating: "4",
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
  newEmpEntry: any = {name: "", role: "", rating: "", experience: "", doj: "", currentTeam:"", reportingManager: "Lalit Agarwal", contactNumber: "", email: ""}

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
  showAddPopup: boolean = false;
  addNewEmp(){
    this.commonService.setHideHoleContent(true);
    this.showAddPopup = true;
    this.newEmpEntry = {name: "", role: "", rating: "", experience: "", doj: "", currentTeam:"", reportingManager: "Lalit Agarwal",location:"Bangalore", contactNumber: "", email: ""}
  }
  closeAddNewEmp(){
    this.commonService.setHideHoleContent(false);
    this.showAddPopup = false;
  }
  addAndCloseNewEmp(){
    this.dataForAllEmp.push(this.newEmpEntry);
    this.commonService.setHideHoleContent(false);
    this.showAddPopup = false;
    let dataForAllEmpCpy = JSON.parse(JSON.stringify(this.dataForAllEmp))
    this.employeeDetails = dataForAllEmpCpy.filter((emp:any)=>{
      return emp.location == "Bangalore"
  })
  }
  deleteRecordFromView(empToDelete:any){
    let text = "Are you sure? You want to delete this record!";
    if (confirm(text) == true) {
      this.dataForAllEmp = this.dataForAllEmp.filter((emp:any)=>{
        return emp.name !== empToDelete.name
    })
    let dataForAllEmpCpy = JSON.parse(JSON.stringify(this.dataForAllEmp))
    this.employeeDetails = dataForAllEmpCpy.filter((emp:any)=>{
      return emp.location == "Bangalore"
  })
    }
  }

}
