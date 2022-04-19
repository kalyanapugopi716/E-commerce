class user{
    constructor(email,DOB,Password){
        this.DOB=DOB;
        this.email=email;
        this.Password=Password;
    }
    set DOB(value){
        this.DOB=value;
    }
    set email(value){
        this.email=value;
    }
    set pwd(value){
        this.pwd=value;
    }
    get email(){
        return this.email;
    }
};