import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AcademicsComponent } from './academics/academics.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'academics', component: AcademicsComponent},
  {path: 'resume', component: ResumeComponent},
  {
    path: "**",
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
