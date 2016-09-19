import {Component, OnInit, EventEmitter} from '@angular/core';
import {SaleListingService} from './service/sale-listing.service'
import {SaleListing} from './model/sale-listing'
import {Router} from '@angular/router';
import {Meta} from '../model/meta'
import {LatLngLiteral} from 'angular2-google-maps/core'

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
    center_lat:number = 43.6532;
    center_lng:number = -79.3832;
    map_center_lat:number;
    map_center_lng:number;


    constructor(private router:Router,
                private saleListingService:SaleListingService) {
    }

    ngOnInit() {
        this.getSaleListings();
    }

    getSaleListings() {
        this.saleListings = [];
        this.meta = null;
        this.saleListingService.getSaleListingsResponse(this.center_lat, this.center_lng)
            .subscribe(
                (saleListingsResponse) => {
                    console.log(saleListingsResponse);
                    this.saleListings = saleListingsResponse.sale_listing;
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

    }

}
