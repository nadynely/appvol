import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FlightService } from '../../services/flights.service';
import { SingleFlightPage } from '../single-flight/single-flight';

/**
 * Generated class for the ListvolsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-listvols',
  templateUrl: 'listvols.html',
})
export class ListvolsPage {

  flightList: any[];


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public flightsService: FlightService
            ) {
  }

  ionViewDidLoad() {
    this.flightList = this.flightsService.flightsList;
  }

  onLoadFlight(i: number) {

    this.navCtrl.push(SingleFlightPage, { indexDuVol: i })
  }

  

}
