import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MobxAngularModule } from 'mobx-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './/app-routing.module';
import { IndexComponent } from './index/index.component';
import { BooksComponent } from './books/books.component';
import { HeadingComponent } from './heading/heading.component';
import { BookStatsComponent } from './book-stats/book-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    IndexComponent,
    BooksComponent,
    HeadingComponent,
    BookStatsComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    MobxAngularModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
