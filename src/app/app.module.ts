import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { TemplateDrivenComponent } from './Forms/template-driven/template-driven.component';
import { ReactiveComponent } from './Forms/reactive/reactive.component';
import { HomeComponent } from './home/home.component';
import { HoverFocusDirectiveDirective } from './hover-focus-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    HomeComponent,
    HoverFocusDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
