import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeComponent } from '../home/home.component';

@Component({
    selector: 'menu-component',
    templateUrl: 'menu.component.html'
})
export class MenuComponent{
  
    constructor(public navCtrl: NavController){}
    
    goToHome(){
        this.navCtrl.setRoot(HomeComponent);
    }
}