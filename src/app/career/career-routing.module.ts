import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { CareerComponent } from './career/career.component';
import { JuniorSoftwareDevComponent } from './junior-software-dev/junior-software-dev.component';
import { InternshipComponent } from './internship/internship.component';
import { TraineeComponent } from './trainee/trainee.component';
import { SeniorSoftwareDevComponent } from './senior-software-dev/senior-software-dev.component';


const routes: Routes = [
  { 
  path:'', 
  component: CareerComponent
  },
  { 
  path:'application-form', 
  component: ApplicationFormComponent
  },
  { 
  path:'junior-software-dev', 
  component: JuniorSoftwareDevComponent
  },
  { 
  path:'internship', 
  component: InternshipComponent
  },
  { 
  path:'trainee', 
  component: TraineeComponent
  },
  { 
  path:'senior-software-dev', 
  component: SeniorSoftwareDevComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule { }
