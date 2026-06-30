import { Routes } from '@angular/router';
import { ComponentComponent } from './dashboard/component/component';
import { Notfound } from './shared/notfound/notfound';
import { Home } from './dashboard/home/home';
import { Skills } from './dashboard/skills/skills';
import { Projects } from './dashboard/projects/projects';
import { Contact } from './dashboard/contact/contact';
import { About } from './dashboard/about/about';
import { Frontend } from './frontend/frontend';
import { FrontHome } from './frontend/home/home';
import { About as FrontAbout } from './frontend/about/about';
import { Skills as FrontSkills } from './frontend/skills/skills';
import { Projects as FrontProjects } from './frontend/projects/projects';
import { Contact as FrontContact } from './frontend/contact/contact';

export const routes: Routes = [
  { path: '', component: Frontend, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: FrontHome }, 
      { path: 'about', component: FrontAbout },
      {path:'skills',component: FrontSkills},
      {path: 'projects', component: FrontProjects},
      {path: 'contact',component: FrontContact}
    ]
  },
  
  {path: 'dashboard',component: ComponentComponent,children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: Home },      
      { path: 'profile', component: Home },  
      { path: 'about', component: About },
      { path: 'skills', component: Skills },
      { path: 'projects', component: Projects },
      { path: 'contact', component: Contact },
    ],
  },
  
  { path: '**', component: Notfound },
];