
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MaterialUiModule } from './modules/material-ui/material-ui.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { MigrationComponent } from './migration/migration.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateTableComponent } from './create-table/create-table.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    MigrationComponent,
    CreateTableComponent,
  ],
  imports: [
    BrowserModule,
    NgxElectronModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    MaterialUiModule,
    AppRoutingModule,
    RouterModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
