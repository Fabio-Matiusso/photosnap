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
import { GalleryComponent } from './shared/components/generics-components/gallery/gallery.component';
import { DetailsComponent } from './shared/components/home-components/details/details.component';
import { FooterComponent } from './shared/components/generics-components/footer/footer.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { MountainComponent } from './shared/components/stories-components/mountain/mountain.component';
import { ApresentationFeaturesComponent } from './shared/components/generics-components/apresentation-features/apresentation-features.component';
import { FeaturesDatasComponent } from './shared/components/features-components/features-datas/features-datas.component';
import { InviteComponent } from './shared/components/generics-components/invite/invite.component';
import { CardPricesComponent } from './shared/components/prices-components/card-prices/card-prices.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

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
    StoriesComponent,
    MountainComponent,
    ApresentationFeaturesComponent,
    FeaturesDatasComponent,
    InviteComponent,
    CardPricesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
