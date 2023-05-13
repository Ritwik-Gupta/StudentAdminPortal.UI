import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUrl = "https://localhost:44352/api"

  constructor(private httpClient : HttpClient)  { }

  public getStudents() : Observable<any> {
    return this.httpClient.get(this.baseApiUrl + "/students");
  }
}
