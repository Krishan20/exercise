import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

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
}