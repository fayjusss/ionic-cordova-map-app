import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MapPage} from '../map/map';
import {AddPostPage} from '../add-post/add-post';
import {ViewPostPage} from '../view-post/view-post';
import {SettingsPage} from '../settings/settings';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1Root = MapPage;
    this.tab2Root = AddPostPage;
    this.tab3Root = ViewPostPage;
    this.tab4Root = SettingsPage;
  }

}
