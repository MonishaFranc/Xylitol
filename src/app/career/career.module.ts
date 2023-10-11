import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareerRoutingModule } from './career-routing.module';
import { CareerComponent } from './career/career.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { JuniorSoftwareDevComponent } from './junior-software-dev/junior-software-dev.component';
import { InternshipComponent } from './internship/internship.component';
import { TraineeComponent } from './trainee/trainee.component';
import { SeniorSoftwareDevComponent } from './senior-software-dev/senior-software-dev.component';


@NgModule({
  declarations: [
    CareerComponent,
    ApplicationFormComponent,
    JuniorSoftwareDevComponent,
    InternshipComponent,
    TraineeComponent,
    SeniorSoftwareDevComponent
  ],
  imports: [
    CommonModule,
    CareerRoutingModule
  ],
  exports: [
    CareerComponent,
    ApplicationFormComponent,
    ]
  })
export class CareerModule { }
