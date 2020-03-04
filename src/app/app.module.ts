import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
