import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const endpoint = "https://4c0cb3d2550c.ngrok.io/list";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  public getPost(){
    return this.http.get(endpoint);
  }

}
