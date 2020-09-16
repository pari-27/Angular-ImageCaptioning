import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {AngularMaterialModule} from './angular-material.module'
import { AppComponent } from './app.component';

/*components*/
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*Flex layout */
import { FlexLayoutModule } from '@angular/flex-layout';
/* Routing */
import { AppRoutingModule } from './app-routing.module';





import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

// GridModule
import { GridModule } from '@progress/kendo-angular-grid';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule ,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
