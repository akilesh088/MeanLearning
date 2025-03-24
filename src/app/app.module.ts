import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
// import { RxjsComponent } from './rxjs/rxjs.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { DataserviceService } from './dataservice.service';
import { catchError } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
// import { AdminComponent } from './admin/admin.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {  MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import{FlexLayoutModule} from '@angular/flex-layout';
import{MatMenuModule}from '@angular/material/menu';
import{MatTabsModule} from'@angular/material/tabs';
import{MatStepperModule} from '@angular/material/stepper';
import{MatPaginatorModule} from '@angular/material/paginator'
import{MatSortModule} from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    // RxjsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UserComponent,
    // AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,MatInputModule,
    // BrowserAnimationsModule
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    FlexLayoutModule,
    MatMenuModule,
    MatTabsModule,
    MatStepperModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
