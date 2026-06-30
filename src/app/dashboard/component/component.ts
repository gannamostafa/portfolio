import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { Header } from '../shared/header/header';

@Component({
  selector: 'app-component',
  imports: [RouterOutlet,Sidebar],
  templateUrl: './component.html',
  styleUrl: './component.css',
})
export class ComponentComponent {}
