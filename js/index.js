// ===============varia  ble part===================
// let headline              = document.querySelector('.headline')
// let reg_head              = document.querySelector('.reg_head')
// let manu_btn              = document.querySelector('.manu_btn')
// let sing_up               = document.querySelector('.sing_up')
// let login                 = document.querySelector('.login')
// let reg_form_one          = document.querySelector('.reg_form_one')
// let player_one_name       = document.querySelector('.player_one_name')
// let player_one_email      = document.querySelector('.player_one_email')
// let player_one_password   = document.querySelector('.player_one_password')
// let player_one_sub_btn    = document.querySelector('.player_one_sub_btn')
// let player_one_input      = document.querySelector('.player_one_input')
// let pl_one_btn            = document.querySelector('.pl_one_btn')
// // ==============player  two variable=====================
// let player_two_name       = document.querySelector('.player_two_name')
// let player_two_email      = document.querySelector('.player_two_email')
// let player_two_password   = document.querySelector('.player_two_password')
// let player_two_sub_btn    = document.querySelector('.player_two_sub_btn')
// let player_two_input      = document.querySelector('.player_two_input')
// let pl_two_inpt           = document.querySelector('.pl_two_inpt')
// let pl_two_btn            = document.querySelector('.pl_two_btn')
// // =============Player three variable=========================
// let player_three_name     = document.querySelector('.player_three_name')
// let player_three_email    = document.querySelector('.player_three_email')
// let player_three_password = document.querySelector('.player_three_password')
// let player_three_sub_btn  = document.querySelector('.player_three_sub_btn')
// let player_three_input    = document.querySelector('.player_three_input')
// let pl_three_btn          = document.querySelector('.pl_three_btn')
// ===================functionality===========================
function validation(){
    if(document.form_fill.username.value==""){
        document.getElementById("result").innerHTML="Enter User name!!";
        return false;
    }
    else if(document.form_fill.username.value.length<6){
        document.getElementById("result").innerHTML="At least six letter!!";
        return false;
    }
    else if(document.form_fill.email.value==""){
        document.getElementById("result").innerHTML="Enter your E-mail!";
        return false;
    }
    else if(document.form_fill.password.value==""){
        document.getElementById("result").innerHTML="Enter your password!!";
        return false;
    }
    else if(document.form_fill.password.value.lenght<6){
        document.getElementById("result").innerHTML="Password must be 6-digit!!";
        return false;
    }
   else if(document.form_fill.cpassword.value){
        document.getElementById("result").innerHTML="Confirm your password!!";
        return false;
    }
    else if(document.form_fill.cpassword.value!==document.form_fill.password.value){
        document.getElementById("result").innerHTML="Password dosen't match!!";
        return false;
        console.log(cpassword);
    }
    else if(document.form_fill.password.value==document.form_fill.cpassword.value){
        popup.classList.add("open_slide")
        return false;
    }
}
let popup =document.getElementById('popup');
function closeSlide(){
    popup.classList.remove('open_slide')
}