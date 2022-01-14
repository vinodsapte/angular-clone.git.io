import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { IntroductionComponent } from './sidebar/introduction/introduction.component';
import { ComponentlifecycleComponent } from './sidebar/componentlifecycle/componentlifecycle.component';
import { OverviewComponent } from './sidebar/overview/overview.component';
import { AngularComponent } from './sidebar/angular/angular.component';
import { FeaturesComponent } from './features/features.component';


@NgModule({
  declarations: [
  
    AppComponent,
    FooterComponent,
    ArticleComponent,
    HeaderComponent,
    ToolbarComponent,
    SidebarComponent,
    FirstPageComponent,
    IntroductionComponent,
    OverviewComponent,
    AngularComponent,
    ComponentlifecycleComponent,
    FeaturesComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
