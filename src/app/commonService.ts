import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CommonService{

     filterFlag$ = new Subject<any>();

     setFilterFlag(value:any){
        this.filterFlag$.next(value)
     }
     getFilterFlag(){
        return this.filterFlag$.asObservable();
     }
     pendingTabText$ = new BehaviorSubject<any>("");

     setPendingTabText(value:any){
        this.pendingTabText$.next(value)
     }
     getPendingTabText(){
        return this.pendingTabText$.asObservable();
     }
     hideHoleContent$ = new BehaviorSubject<any>("");

     setHideHoleContent(value:any){
        this.hideHoleContent$.next(value)
     }
     getHideHoleContent(){
        return this.hideHoleContent$.asObservable();
     }
}