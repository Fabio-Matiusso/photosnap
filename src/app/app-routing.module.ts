import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { FeaturesComponent } from './modules/home/pages/features/features.component';
import { PricingComponent } from './modules/home/pages/pricing/pricing.component';
import { PageErrorComponent } from './modules/home/pages/page-error/page-error.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'features', component: FeaturesComponent },
  { path: 'pricing', component: PricingComponent },
  { path: '404', component: PageErrorComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
