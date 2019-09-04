import { NgModule } from '@angular/core';


import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ServicesComponent } from './components/services/services.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { BlogComponent } from './components/blog/blog.component';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HeaderComponent },
  { path: 'About', component: IntroComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'Testimonial', component: TestimonialComponent },
  { path: 'Pricing', component: PricingComponent },
  { path: 'Clients', component: ClientsComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'article/id', component: ArticleComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],

  exports: [ RouterModule ]
})
export class AppRoutingModule { }
