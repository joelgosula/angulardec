import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
//Enabling Routing
//Step 1: Import the routing module.
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './services/data.service';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { UserModule } from './custom.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ///LoginComponent,
    //RegisterComponent,
    ProductsComponent,
    ProductdetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserModule,
    // LoginModule,
    // RegisterModule,
    //Enabling Routing
//Step 2: Adding the module to imports
//for step 3 refer to header.component.html
RouterModule.forRoot([
  {path :'Home',component:HomeComponent},
  {path :'Login',component:LoginComponent},
  {path :'Signup',component:RegisterComponent},
  {path :'Products',component:ProductsComponent},
  {path:'',component:HomeComponent,pathMatch:"full"}
])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
