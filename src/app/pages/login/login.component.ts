import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { MessagesUtils } from "../../services/mensagem.service";
import { UserVO } from "../../vo/UserVO";
import { HomePage } from "../home/home";
import { Auth } from "../../services/auth.service";


@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginComponent {

    user : UserVO;

    constructor(public navCtrl: NavController, 
        public message_utils : MessagesUtils,
        public authService : Auth ) {
         
    }

    ngOnInit(){
        this.user = new UserVO();
    }

    login(){
        this.authService.login(this.user).subscribe(
            response => {
                this.navCtrl.push(HomePage);
            },
            error => {
                console.log('Erro')
            }
        );
    }
}