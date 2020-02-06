import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { MessagesUtils } from "../../services/mensagem.service";
import { ServiceAPI } from "../../services/api.service";
import { UserVO } from "../../vo/UserVO";
import { HomePage } from "../home/home";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginComponent {

    private configurationAPI : ServiceAPI;
    user : UserVO;

    constructor(public navCtrl: NavController, 
        public http: HttpClient,
        public message_utils : MessagesUtils,
        public serviceAPI : ServiceAPI ) {
         
        this.configurationAPI = this.serviceAPI;
    }

    ngOnInit(){
        this.user = new UserVO();
    }

    login(){
        console.log(this.user.login);
        console.log(this.user.password);

        if(this.user.areRequiredFieldsFullfiled()){
            
            this.navCtrl.push(HomePage);
        }else{
            this.message_utils.showErrorMessage('Login e senha são obrigatórios');
        }

    }
}