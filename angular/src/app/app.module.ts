import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RevizeComponent } from './revize/revize.component';
import { OnasComponent } from './onas/onas.component';
import { LegislativaComponent } from './legislativa/legislativa.component';
import { KontaktyComponent } from './kontakty/kontakty.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    RevizeComponent,
    OnasComponent,
    LegislativaComponent,
    KontaktyComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
