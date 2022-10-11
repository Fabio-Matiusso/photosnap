import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { FeaturesComponent } from './pages/features/features.component';
import { PricesComponent } from './pages/prices/prices.component';
import { ErrorComponent } from './pages/error/error.component';
import { HeaderComponent } from './shared/header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApresentationComponent } from './shared/apresentation/apresentation.component';
import { BeautifulStoriesComponent } from './shared/beautiful-stories/beautiful-stories.component';
import { AcessibilityComponent } from './shared/acessibility/acessibility.component';

import { NgsRevealModule } from 'ngx-scrollreveal';
import { GalleryComponent } from './shared/gallery/gallery.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    NgsRevealModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
