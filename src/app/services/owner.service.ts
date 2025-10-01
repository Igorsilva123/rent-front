import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OwnerDataRegistration } from '../models/owner.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {
  private apiUrl = 'http://localhost:8080/owner';
  constructor(private http: HttpClient){}

  createOwner(owner: OwnerDataRegistration): Observable<any>{
    return this.http.post(this.apiUrl, owner);
  }
}
