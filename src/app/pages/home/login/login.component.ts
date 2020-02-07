import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { UserVO } from "../../../vo/UserVO";
import { HomeComponent } from "../home.component";
import { Auth } from "../../../core/auth.service";


@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginComponent {
    user : UserVO;
    constructor(public navCtrl: NavController, public authService : Auth ) {}

    ngOnInit(){
        this.user = new UserVO();
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