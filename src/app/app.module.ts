import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GateLayoutComponent } from './layout/gate-layout/gate-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SecondLayoutComponent } from './layout/second-layout/second-layout.component';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TermComponent } from './components/term/term.component';

import { BaseComponent } from './pages/base/base.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TermComponent as TermPage } from './pages/term/term.component';


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
    TermPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
