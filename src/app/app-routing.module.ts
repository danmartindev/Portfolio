import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { WorkComponent } from './work/work.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: 'main', component: MainComponent, data: {animation: "Main"} },
  { path: 'resume', component: ResumeComponent, data: {animation: "Resume"} },
  { path: 'work', component: WorkComponent, data: {animation: "Work"} },
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
