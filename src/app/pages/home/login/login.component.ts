import { Component } from "@angular/core";
import { NavController, App } from "ionic-angular";
import { HomeComponent } from "../home.component";
import { Auth } from "../../../core/auth.service";
import { LoginForm } from "../../../form/LoginForm";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginComponent {
    user : LoginForm;

    constructor(public navCtrl: NavController, 
        public authService : Auth, 
        private app : App) {}

    ngOnInit(){
        this.user = new LoginForm();
    }

    login(){
        this.authService.login(this.user).subscribe(
            response => {
                this.app.getRootNav().setRoot(HomeComponent)
            },
            error => {
                console.log('Erro')
            }
        );
    }
}