import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AlertModule, DatepickerModule} from 'ng2-bootstrap/ng2-bootstrap';
import {AgmCoreModule} from 'angular2-google-maps/core';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AlertModule,
        DatepickerModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDmz6BTx26-5rp6sjEHRyczFjZrpaFQLBc'
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
