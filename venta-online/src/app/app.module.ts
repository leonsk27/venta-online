import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ReportComponent } from './components/report/report.component';
import { LoginComponent } from './components/login/login.component';
// SERVICES
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ClientGuard } from './guards/client.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AdmGuard } from './guards/adm.guard';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ReportService } from './services/report.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ReportComponent,
    LoginComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    ReportService,
    ClientGuard,
    AdmGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
