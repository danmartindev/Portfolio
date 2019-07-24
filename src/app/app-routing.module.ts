import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { WorkComponent } from './work/work.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent, data: {animation: "about"} },
  { path: 'main', component: MainComponent, data: {animation: "main"} },
  { path: 'resume', component: ResumeComponent, data: {animation: "resume", } },
  { path: 'work', component: WorkComponent, data: {animation: "work"} },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
