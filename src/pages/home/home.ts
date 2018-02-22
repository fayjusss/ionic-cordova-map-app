import { Component, OnInit } from '@angular/core';

import { ModalController } from 'ionic-angular';
import { AddPostPage } from "../add-post/add-post";
import { Place } from "../../models/place";
import { PlacesService } from "../../services/places";
import { ViewPostPage } from "../view-post/view-post";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  addPostPage = AddPostPage;
  places: Place[] = [];

  constructor(private modalCtrl: ModalController,
              private placesService: PlacesService) {

  }

  ngOnInit() {
    this.placesService.fetchPlaces()
      .then(
        (places: Place[]) => this.places = places
      );
  }

  ionViewWillEnter() {
    this.places = this.placesService.loadPlaces();
  }

  onOpenPlace(place: Place, index: number) {
    const modal = this.modalCtrl.create(ViewPostPage, {place: place, index: index});
    modal.present();
    modal.onDidDismiss(
      () => {
        this.places = this.placesService.loadPlaces();
      }
    );
  }
}
