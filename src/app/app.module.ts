import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GoogleplaceDirective } from './directive/googleplace.directive';
import { AutocompleteComponent } from './google-places.component';
@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    GoogleplaceDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
