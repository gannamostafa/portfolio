import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Profileservice {
  
  private apiUrl = 'http://localhost:3000/api/profile';

  constructor(private http: HttpClient) { }

  saveProfile(profileData: any): Observable<any> {
    return this.http.post(this.apiUrl, profileData);
  }
  
  uploadImage(file: File): Observable<any> {
  const formData = new FormData();
  formData.append('profileImage', file);
  return this.http.post('http://localhost:3000/api/upload-image', formData);
}

  getProfile(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}