import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { FeaturesComponent } from './pages/features/features.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HomeComponent, FeaturesComponent, PricingComponent, PageErrorComponent, HeaderComponent],
  imports: [CommonModule],
})
export class HomeModule {}
