import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../shared/footer/footer';
import { Header } from './shared/header/header';

@Component({
  selector: 'app-frontend',
  imports: [RouterOutlet,Footer,Header],
  templateUrl: './frontend.html',
  styleUrl: './frontend.css',
})
export class Frontend {}
