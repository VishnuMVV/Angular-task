import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchService } from './search.service';
import { SearchComponent } from './search/search.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, SearchComponent, MovieListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
