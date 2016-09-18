/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {SaleListingService} from './sale-listing.service';

describe('Service: SaleListing', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SaleListingService]
        });
    });

    it('should ...', inject([SaleListingService], (service:SaleListingService) => {
        expect(service).toBeTruthy();
    }));
});
