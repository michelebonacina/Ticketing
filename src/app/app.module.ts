import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { TicketModule } from './ticket/ticket.module';

const routes: Routes = [
    // { path: '', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    TicketModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
