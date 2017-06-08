import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from "angularfire2/database";
import { AngularFire } from "angularfire2/index";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	AngularFire
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
