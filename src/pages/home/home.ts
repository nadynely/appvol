import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListvolsPage } from '../listvols/listvols';
import { FlightService } from '../../services/flights.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lienVerslistvols = ListvolsPage;

  constructor(private flightsService: FlightService) {}





}
