import {NgModule} from '@angular/core';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
@NgModule({
    declarations:[],
    imports:[LoginModule,RegisterModule],
    providers:[],
    exports:[LoginModule,RegisterModule]
})
export class UserModule{}