import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { HomeComponent } from "../home.component";
import { Auth } from "../../../core/auth.service";
import { LoginForm } from "../../../form/LoginForm";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginComponent {
    user : LoginForm;

    constructor(public navCtrl: NavController, public authService : Auth ) {}

    ngOnInit(){
        this.user = new LoginForm();
        this.user.login = 'minguini';
        this.user.password = 'teste';
    }

    login(){
        this.authService.login(this.user).subscribe(
            response => {
                this.navCtrl.push(HomeComponent);
            },
            error => {
                console.log('Erro')
            }
        );
    }
}