import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register.component';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations:[RegisterComponent],
    imports:[FormsModule,BrowserModule],
    providers:[],
    exports:[RegisterComponent]
})
export class RegisterModule{}