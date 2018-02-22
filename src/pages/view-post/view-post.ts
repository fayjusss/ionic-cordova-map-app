import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Place } from "../../models/place";
import { PlacesService } from "../../services/places";

@IonicPage()
@Component({
  selector: 'page-view-post',
  templateUrl: 'view-post.html',
})
export class ViewPostPage {
  place: Place;
  index: number;

  constructor(public navParams: NavParams,
              private viewCtrl: ViewController,
              private placesService: PlacesService) {
    this.place = this.navParams.get('place');
    this.index = this.navParams.get('index');
  }

  onLeave() {
    this.viewCtrl.dismiss();
  }

  onDelete() {
    this.placesService.deletePlace(this.index);
    this.onLeave();
  }
}
