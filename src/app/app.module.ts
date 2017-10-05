import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonPrimitiveComponent } from './primitives/button-primitive/button-primitive.component';
import { ChecklistPrimitiveComponent } from './primitives/checklist-primitive/checklist-primitive.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonPrimitiveComponent,
    ChecklistPrimitiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
