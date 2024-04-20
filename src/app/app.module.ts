import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageStructureComponent } from './components/page-structure/page-structure.component';
import { TextComponent } from './components/text/text.component';
import { OptionListComponent } from './components/option-list/option-list.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageStructureComponent,
    TextComponent,
    OptionListComponent,
    ButtonComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
