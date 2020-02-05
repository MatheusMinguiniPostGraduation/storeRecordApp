import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { HomePage } from "../home/home";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginComponent {
    
    constructor(public navCtrl: NavController) {

    }

    login(){
        this.navCtrl.push(HomePage);
    }
}