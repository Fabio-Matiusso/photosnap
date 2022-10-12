import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FeaturesComponent } from './pages/features/features.component';
import { PricesComponent } from './pages/prices/prices.component';
import { ErrorComponent } from './pages/error/error.component';
import { HeaderComponent } from './shared/components/generics-components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApresentationComponent } from './shared/components/home-components/apresentation/apresentation.component';
import { BeautifulStoriesComponent } from './shared/components/home-components/beautiful-stories/beautiful-stories.component';
import { AcessibilityComponent } from './shared/components/home-components/acessibility/acessibility.component';
import { GalleryComponent } from './shared/components/home-components/gallery/gallery.component';
import { DetailsComponent } from './shared/components/home-components/details/details.component';
import { FooterComponent } from './shared/components/generics-components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    PricesComponent,
    ErrorComponent,
    HeaderComponent,
    ApresentationComponent,
    BeautifulStoriesComponent,
    AcessibilityComponent,
    GalleryComponent,
    DetailsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
