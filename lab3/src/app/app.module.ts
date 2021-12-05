import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import { AngularRocketComponent } from './angular-rocket/angular-rocket.component';
import { IpzDirective } from './directives/ipz.directive';
import { ClickDirective } from './directives/click.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormComponent,
    AngularRocketComponent,
    IpzDirective,
    ClickDirective,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
