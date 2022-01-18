console.log("Register");
//constructor
class User{
    constructor(email,password,first,last,age,address,phone,payment,color){
        this.email=email;
        this.password=password;        
        this.first=first;
        this.last=last;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}
//funcion de registro del usuario
function registerUser(){

    let email=$("#txtEmail").val();
    let password=$("#txtPassword").val();
    let first=$("#txtFirst").val();
    let last=$("#txtLast").val();
    let age=$("#txtAge").val();
    let address=$("#txtAddress").val();
    let phone=$("#txtPhone").val();
    let payment=$("#selPayment").val();

    document.getElementById("txtEmail").value = "";
    document.getElementById("txtPassword").value = "";
    document.getElementById("txtFirst").value = "";
    document.getElementById("txtLast").value = "";
    document.getElementById("txtAge").value =""; 
    document.getElementById("txtAddress").value = "";
    document.getElementById("txtPhone").value = "";
    document.getElementById("selPayment").value = "";


    let user = new User(email,password,first,last,age,address,phone,payment)
    console.log(user);
 
}

function init(){
    console.log("Initi function");
}
window.onload=init;