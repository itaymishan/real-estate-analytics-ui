import {Component, OnInit} from '@angular/core';
import {SaleListingService} from './service/sale-listing.service'
import {SaleListing} from './model/sale-listing'
import {Router} from '@angular/router';

@Component({
    selector: 'app-sale-listing',
    templateUrl: './sale-listing.component.html',
    styleUrls: ['./sale-listing.component.css'],
    providers: [SaleListingService],
})
export class SaleListingComponent implements OnInit {

    lat:number = 43.6532;
    lng:number = -79.3832;

    saleListings:Array<SaleListing>;
    errorMessage:Object;


    constructor(private router:Router,
                private saleListingService:SaleListingService) {
    }

    ngOnInit() {
        this.getSaleListings();
    }

    getSaleListings() {
        this.saleListingService.getSaleListings()
            .subscribe(
                (saleListings) => {
                    console.log(saleListings);
                    this.saleListings = saleListings
                },
                error => this.errorMessage = <any>error);
    }

    onSelect(saleListing:SaleListing) {
        this.router.navigate(['/saleListings', saleListing.id]);
    }

}
