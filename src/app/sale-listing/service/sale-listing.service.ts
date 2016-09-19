import {Injectable} from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'
import {Http, Response, URLSearchParams} from '@angular/http';
import {environment} from '../../../environments/environment';
import {SaleListing} from '../model/sale-listing'
import {SaleListingsResponse} from '../model/sale-listings-response'


@Injectable()
export class SaleListingService {

    modelName = 'sale_listings';
    apiListUrl = null;
    apiDetailUrl = null;

    constructor(private http:Http) {
        this.apiListUrl = environment.api_endpoint + `${this.modelName}.json`;
        this.apiDetailUrl = environment.api_endpoint + this.modelName
    }

    getSaleListingsResponse(lat:number, lng:number):Observable<SaleListingsResponse> {

        let params:URLSearchParams = new URLSearchParams();
        params.set('lat', lat.toString());
        params.set('lng', lng.toString());
        return this.http.get(this.apiListUrl, {
            search: params
        })
            .map(this.extractJsonResponse)
            .catch(this.handleError);
    }

    getSaleListings():Observable<SaleListing[]> {
        return this.http.get(this.apiListUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getSaleListing(id):Observable<SaleListing> {
        return this.http.get(this.apiDetailUrl + '/' + id + '.json')
            .map(this.extractSingleData)
            .catch(this.handleError);
    }

    private extractData(res:Response):Array<SaleListing> {
        let body = res.json();
        let response = new Array<SaleListing>();
        for (var saleListingJson of body.sale_listings) {
            response.push(new SaleListing(saleListingJson))
        }

        return response;
    }

    private extractSingleData(res:Response):SaleListing {
        let body = res.json();
        return new SaleListing(body);
    }

    private extractJsonResponse(res:Response):SaleListingsResponse {
        let body = res.json();
        return new SaleListingsResponse(body);
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


}
