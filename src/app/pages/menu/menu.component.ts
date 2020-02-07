import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
    selector: 'menu-component',
    templateUrl: 'menu.component.html'
})

export class MenuComponent{
  
    constructor(public navCtrl: NavController){
      
    }
    
    goToHome(){
        this.navCtrl.setRoot(HomePage);
    }
}