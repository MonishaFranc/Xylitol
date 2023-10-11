import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BannerComponent } from './banner/banner.component';
import { FeatureComponent } from './feature/feature.component';
import { ServiceComponent } from './service/service.component';
import { ProcessComponent } from './process/process.component';
import { WebServiceComponent } from './web-service/web-service.component';
import { ProjectComponent } from './project/project.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GeneralService } from './_service/general.service';
import { CareerModule } from './career/career.module';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BannerComponent,
    FeatureComponent,
    ServiceComponent,
    ProcessComponent,
    WebServiceComponent,
    ProjectComponent,
    NewsComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    ContactusComponent,
    AboutusComponent,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CareerModule,
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
