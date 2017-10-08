import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonPrimitiveComponent } from './primitives/button-primitive/button-primitive.component';
import { ChecklistPrimitiveComponent } from './primitives/checklist-primitive/checklist-primitive.component';
import { AnchorPrimitiveComponent } from './primitives/anchor-primitive/anchor-primitive.component';
import { IconsPrimitiveComponent } from './primitives/icons-primitive/icons-primitive.component';
import { DropdownPrimitiveComponent } from './primitives/dropdown-primitive/dropdown-primitive.component';
import { InputPrimitiveComponent } from './primitives/input-primitive/input-primitive.component';
import { IconsFlagsPrimitiveComponent } from './primitives/icons-flags-primitive/icons-flags-primitive.component';
import { HeadingsPrimitiveComponent } from './primitives/headings-primitive/headings-primitive.component';
import { MainLogoPrimitiveComponent } from './primitives/main-logo-primitive/main-logo-primitive.component';
import { FormSelectPrimitiveComponent } from './primitives/form-select-primitive/form-select-primitive.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonPrimitiveComponent,
    ChecklistPrimitiveComponent,
    AnchorPrimitiveComponent,
    IconsPrimitiveComponent,
    DropdownPrimitiveComponent,
    InputPrimitiveComponent,
    IconsFlagsPrimitiveComponent,
    HeadingsPrimitiveComponent,
    MainLogoPrimitiveComponent,
    FormSelectPrimitiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
