import {Component, OnInit, EventEmitter} from '@angular/core';
import {SaleListingService} from './service/sale-listing.service'
import {SaleListing} from './model/sale-listing'
import {Router} from '@angular/router';
import {Meta} from '../model/meta'
import {LatLngLiteral} from 'angular2-google-maps/core'
import {URLSearchParams} from '@angular/http';

@Component({
    selector: 'app-sale-listing',
    templateUrl: './sale-listing.component.html',
    styleUrls: ['./sale-listing.component.css'],
    providers: [SaleListingService],
})
export class SaleListingComponent implements OnInit {

    saleListings:Array<SaleListing>;
    meta:Meta;
    errorMessage:Object;

    zoom:number = 14;
    center_lat:number = 43.6532;
    center_lng:number = -79.3832;

    map_center_lat:number;
    map_center_lng:number;

    price_from:number;
    price_to:number;
    dist:number;


    constructor(private router:Router,
                private saleListingService:SaleListingService) {
    }

    ngOnInit() {
        this.getSaleListings();
    }

    getSaleListings(with_reset = true) {
        if (with_reset) {
            this.saleListings = [];
            this.meta = null;
        }

        let params:URLSearchParams = new URLSearchParams();
        if (this.meta) {
            params.set('page', this.meta.page.toString());
        }
        else {
            params.set('page', '1');
        }

        if (this.meta) {
            params.set('count', this.meta.count.toString());
        }
        else {
            params.set('count', '50');
        }

        if (this.center_lat) {
            params.set('lat', this.center_lat.toString());
        }
        else {
            params.set('lat', '43.6532');
        }

        if (this.center_lng) {
            params.set('lng', this.center_lng.toString());
        }
        else {
            params.set('lng', '-79.3832');
        }

        if (this.price_from) {
            params.set('price_from', this.price_from.toString());
        }
        if (this.price_to) {
            params.set('price_to', this.price_to.toString());
        }
        if (this.dist) {
            params.set('dist', this.dist.toString());
        }

        this.saleListingService.getSaleListingsResponse(params)
            .subscribe(
                (saleListingsResponse) => {
                    console.log(saleListingsResponse);
                    this.saleListings = this.saleListings.concat(saleListingsResponse.sale_listing);
                    this.meta = saleListingsResponse.meta;
                },
                error => this.errorMessage = <any>error);
    }

    onSelect(saleListing:SaleListing) {
        this.router.navigate(['/saleListings', saleListing.id]);
    }

    centerChanged(event:LatLngLiteral) {
        this.map_center_lat = event.lat;
        this.map_center_lng = event.lng;
    }

    refresh() {
        this.center_lat = this.map_center_lat;
        this.center_lng = this.map_center_lng;
        this.getSaleListings();
    }

    loadMore() {
        if (this.meta) {
            this.meta.page += 1
        }
        this.getSaleListings(false);
    }

}
