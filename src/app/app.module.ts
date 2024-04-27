import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageStructureComponent } from './components/page-structure/page-structure.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { ScorePageComponent } from './components/score-page/score-page.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
  },
  {
    path: 'quiz',
    component: PageStructureComponent
  },
  {
    path: 'scores',
    component: ScorePageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PageStructureComponent,
    WelcomePageComponent,
    ScorePageComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
