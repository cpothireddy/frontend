import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn:'root'
})


export class UserService {
    constructor(private http:HttpClient){}
    //  userBasket: BehaviorSubject<any> = new BehaviorSubject<any>(0);
    //  postUserData(data:any){
    //     this.userBasket.next(data);
    //  }
    
    registerUser(user:any){
        const headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
          }
        return this.http.post("http://localhost:3200/api/registerUser",user);
    }
    listUsers():Observable<any[]>{
        return this.http.get<any[]>("http://localhost:3200/api/listusers");
    }
    editUser(id:number){
        return this.http.get("http://localhost:3200/api/editUser/"+id);
    }
    updateUser(user:any){
        return this.http.put("http://localhost:3200/api/updateUser",user);
    }
    deleteUser(id:number){
        return this.http.delete("http://localhost:3200/api/deleteUser/"+id);
    }
    loginUser(user:any){
        return this.http.post("http://localhost:3200/api/loginUser",user);
    }
     
}