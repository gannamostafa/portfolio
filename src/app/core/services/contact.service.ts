import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContactAPI } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  apiUrl = "http://localhost:5000/api/contact";

  constructor(private http: HttpClient) {}
  getContact(): Observable<IContactAPI> {
    return this.http.get<IContactAPI>(this.apiUrl);

  }

  createContact(data: IContactAPI) {
    return this.http.post(this.apiUrl, data);

  }

  updateContact(id: string, data: IContactAPI) {
    return this.http.put(`${this.apiUrl}/${id}`, data);

  }

}