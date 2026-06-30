import { Component, OnInit } from '@angular/core';
import { Profileservice } from '../../core/services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class FrontHome implements OnInit {
  myProfileData: any; 

  constructor(private profileService: Profileservice) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe((res) => {
      this.myProfileData = res; 
      console.log('My Data:', this.myProfileData);
    });
  }
}