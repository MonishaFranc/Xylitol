import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ServiceComponent } from './service/service.component';



const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'aboutus', component: AboutusComponent},
  { path:'contactus', component: ContactusComponent},
  { path:'service', component: ServiceComponent},
  { path:'project', component: ProjectComponent},
  {
    path: "career",
        loadChildren: () =>
      import("./career/career.module").then(m => m.CareerModule),
  },
  
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
