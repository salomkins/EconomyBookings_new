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
import { StoreButtonPrimitiveComponent } from './primitives/store-button-primitive/store-button-primitive.component';
import { RatingPrimitiveComponent } from './primitives/rating-primitive/rating-primitive.component';
import { FontsPrimitiveComponent } from './primitives/fonts-primitive/fonts-primitive.component';
import { IconsSocComponent } from './components/icons-soc/icons-soc.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MybookingDropdownComponent } from './components/mybooking-dropdown/mybooking-dropdown.component';
import { StayTunedBlockComponent } from './components/stay-tuned-block/stay-tuned-block.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { QuestionsBlockComponent } from './components/questions-block/questions-block.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookByPhoneBlockComponent } from './components/book-by-phone-block/book-by-phone-block.component';
import { GridComponent } from './components/grid/grid.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { ReviewBlockComponent } from './components/review-block/review-block.component';

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
    FormSelectPrimitiveComponent,
    StoreButtonPrimitiveComponent,
    RatingPrimitiveComponent,
    FontsPrimitiveComponent,
    IconsSocComponent,
    DropdownComponent,
    MybookingDropdownComponent,
    StayTunedBlockComponent,
    FeedbackComponent,
    QuestionsBlockComponent,
    NavbarComponent,
    BookByPhoneBlockComponent,
    GridComponent,
    SubscribeComponent,
    ReviewBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
