import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IntroductionComponent } from './sidebar/introduction/introduction.component';
import { AngularComponent } from './sidebar/angular/angular.component';
import { OverviewComponent } from './sidebar/overview/overview.component';
import { ComponentlifecycleComponent } from './sidebar/componentlifecycle/componentlifecycle.component';
import { FeaturesComponent } from './features/features.component';





const routes: Routes = [
  {path:'', redirectTo: 'firstpage', pathMatch:'full'},
  {path:'firstpage',component:FirstPageComponent},
  {path:'features',component:FeaturesComponent},
 
  {path:'sidebar', component:SidebarComponent, children: [
    {path:'introduction',component:IntroductionComponent},
    {path:'', redirectTo: 'introduction', pathMatch:'full'},
    {path:"angular",component:AngularComponent},
    {path:'overview',component:OverviewComponent},
    {path:'componentlifecycle',component:ComponentlifecycleComponent},
 


   

  ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
