
export class UserVO {

  id : number;
  login : String;
  password : String;
  email : String;

  constructor(){

  }

  areRequiredFieldsFullfiled(){
    if(!this.login || !this.password) {
      return false;
    }else{
      return true;
    }
  }
}