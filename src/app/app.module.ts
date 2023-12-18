import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './pages/cruds/user/user.component';
import { WaitingListComponent } from './pages/cruds/waiting-list/waiting-list.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { PatientComponent } from './pages/cruds/patient/patient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { DinosourFormComponent } from './dinosour_library/dinosour_form/components/dinosour-form/dinosour-form.component';
import { DinosourTableComponent } from './dinosour_library/dinosour_table/components/dinosour-table/dinosour-table.component';
import { DinosourFormActionsComponent } from './dinosour_library/dinosour_form/components/dinosour-form-actions/dinosour-form-actions.component';
import { DinosourButtonComponent } from './dinosour_library/dinosour_button/components/dinosour-button/dinosour-button.component';
import { DinosourFormBodyComponent } from './dinosour_library/dinosour_form/components/dinosour-form-body/dinosour-form-body.component';
import { DinosourDialogMessageComponent } from './dinosour_library/dinosour_dialog/components/dinosour-dialog-message/dinosour-dialog-message.component';
import { DinosourDialogLoadingComponent } from './dinosour_library/dinosour_dialog/components/dinosour-dialog-loading/dinosour-dialog-loading.component';
import { DinosourDialogFormComponent } from './dinosour_library/dinosour_dialog/components/dinosour-dialog-form/dinosour-dialog-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InsuranceComponent } from './pages/cruds/insurance/insurance.component';
import { DinosourTableBodyComponent } from './dinosour_library/dinosour_table/components/dinosour-table-body/dinosour-table-body.component';
import { DinosourPaginatorComponent } from './dinosour_library/dinosour_paginator/components/dinosour-paginator/dinosour-paginator.component';
import { DinosourPageComponent } from './dinosour_library/dinosour_page/components/dinosour-page/dinosour-page.component';
import { DinosourFilterClasicComponent } from './dinosour_library/dinosour_filter/components/dinosour-filter-clasic/dinosour-filter-clasic.component';
import { DinosourFilterAdvancedComponent } from './dinosour_library/dinosour_filter/components/dinosour-filter-advanced/dinosour-filter-advanced.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PatientComponent,
    WaitingListComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    PatientComponent,
    DinosourFormComponent,
    DinosourFormActionsComponent,
    DinosourFormBodyComponent,
    DinosourTableComponent,
    DinosourButtonComponent,
    DinosourDialogMessageComponent,
    DinosourDialogLoadingComponent,
    DinosourDialogFormComponent,
    InsuranceComponent,
    DinosourTableBodyComponent,
    DinosourPaginatorComponent,
    DinosourPageComponent,
    DinosourFilterClasicComponent,
    DinosourFilterAdvancedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
