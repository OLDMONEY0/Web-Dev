import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CompanyDetailComponent} from "./company-detail/company-detail.component";

const routes: Routes = [
  {path:'', redirectTo:'/companies', pathMatch:'full'},
  {path:'companies', component:HomeComponent},
  {path:'companies/:id', component: CompanyDetailComponent},

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
