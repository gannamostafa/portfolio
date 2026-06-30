import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './component/sidebar/sidebar';
import { Home } from './home/home';
import { About } from './about/about';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,Sidebar,Home,About],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
