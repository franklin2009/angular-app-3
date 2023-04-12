import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SecondLayoutComponent } from './layout/second-layout/second-layout.component';

import { BaseComponent } from './pages/base/base.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TermComponent as PageTerms } from './pages/term/term.component';

const routes: Routes = [
  {
    path: 'base',
    component: BaseComponent,
  },
  {
    path: 'base-layout',
    component: SecondLayoutComponent,
    children: [
      {
        path: '',
        component: BaseComponent
      }
    ]
  },

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'terms',
        component: PageTerms
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
