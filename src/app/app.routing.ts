import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SaleListingComponent} from './sale-listing/sale-listing.component'
import {HomeComponent} from './home/home.component'

const appRoutes:Routes = [
    //{path: 'sale-listing/:id', component: HeroDetailComponent},
    //{path: 'crisis-center', component: CrisisCenterComponent},
    {
        path: 'sale-listings',
        component: SaleListingComponent,
        data: {
            title: 'Sale Listings'
        }
    },
    {path: '', component: HomeComponent},
    //{path: '**', component: PageNotFoundComponent}
];

export const appRoutingProviders:any[] = [];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);