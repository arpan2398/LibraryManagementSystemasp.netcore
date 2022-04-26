import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  
   { path:'login', component: LoginComponent} ,
   { path: 'registration', component: RegistrationComponent} ,
   { path: 'home', component: HomeComponent} ,
   { path: 'footer', component: FooterComponent},
   { path: 'content', component: ContentComponent},
   
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
