import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GateLayoutComponent } from './layout/gate-layout/gate-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SecondLayoutComponent } from './layout/second-layout/second-layout.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TermComponent } from './components/term/term.component';
import { BannerComponent } from './components/banner/banner.component';
import { SliderComponent } from './components/slider/slider.component';
import { NewletterComponent } from './components/newletter/newletter.component';

import { BaseComponent } from './pages/base/base.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AgeGateComponent } from './pages/age-gate/age-gate.component';
import { TermComponent as TermPage } from './pages/term/term.component';
import { VideoComponent } from './components/video/video.component';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    GateLayoutComponent,
    MainLayoutComponent,
    SecondLayoutComponent,
    HeaderComponent,
    FooterComponent,
    BaseComponent,
    HomeComponent,
    NotFoundComponent,
    TermComponent,
    TermPage,
    BannerComponent,
    SliderComponent,
    NewletterComponent,
    AgeGateComponent,
    VideoComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
