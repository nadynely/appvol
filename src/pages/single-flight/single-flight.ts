import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Flight } from '../../models/flights.model';
import { FlightService } from '../../services/flights.service';

/**
 * Generated class for the SingleFlightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-single-flight',
  templateUrl: 'single-flight.html',
})
export class SingleFlightPage implements OnInit {

  index: number;
  flight: Flight;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public flightsService: FlightService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('indexDuVol');

    this.flight = this.flightsService.flightsList[this.index];

  }

}
