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
   else if(document.form_fill.cpassword.value==""){
        document.getElementById("result").innerHTML="Confirm your password!!";
        return false;
    }
    else if(document.form_fill.cpassword.value !== document.form_fill.password.value){
        document.getElementById("result").innerHTML="Password dosen't match!";
        return false;
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
// =============Dom======================

// ===============varia  ble part===================
let error                  = document.querySelector('.error')
let error2                 = document.querySelector('.error2')
let error3                 = document.querySelector('.error3')
let player_name            = document.querySelector('.player_name')
let result                 = document.querySelector('.result')
let result2                = document.querySelector('.result2')
let result3                = document.querySelector('.result3')
let i                      = 0
let m                      = 0
// console.log(i);
// ===============player one==========================
let player_one             = document.querySelector('.player_one')
let player_one_input       = document.querySelector('.player_one_input')
let plyaer_one_inp_numer   = document.querySelector('.plyaer_one_inp_numer')
let player_one_btn         = document.querySelector('.player_one_btn')
// console.log(error,player_name,player_one,player_one_input,plyaer_one_inp_numer,player_one_btn);
// =================player two===============================
let player_two             = document.querySelector('.player_two')
let chance                 = document.querySelector('.chance')
let chance_number          = document.querySelector('.chance_number')
let plyaer_two_inp_numer   = document.querySelector('.plyaer_two_inp_numer')
let player_two_input       = document.querySelector('.player_two_input')
let player_two_btn         = document.querySelector('.player_two_btn')

console.log(player_two,chance,chance_number,player_two_input,plyaer_two_inp_numer,player_two_btn);
// =============Player three variable=========================
let player_three           = document.querySelector('.player_three')
let player_three_input     = document.querySelector('.player_three_input')
let player_three_sub_btn   = document.querySelector('.player_three_sub_btn')
let plyaer_three_inp_numer = document.querySelector('.plyaer_three_inp_numer')
let player_three_btn       = document.querySelector('.player_three_btn')
let chance3                 = document.querySelector('.chance3')
let chance_number3          = document.querySelector('.chance_number3')
// ===================functionality of game====================
// =========================player one=========================
player_one_btn.addEventListener('click',()=>{
    if(player_one_input.value==""){
        error.innerHTML="Please Enter Your Name "
    }else{
        if(plyaer_one_inp_numer.value==""){
            error.innerHTML="Please Enter a Number "
        }else{
            if(plyaer_one_inp_numer.value>10){
                error.innerHTML="Please Enter a Number less than 10"
            }else{
                error.innerHTML=''
                player_two.style = 'display:block'
                player_one.style = 'display:none'
                player_name.innerHTML='Player-2'
            }
        }
    }
})
// =================player two==================
player_two_btn.addEventListener('click',()=>{
    if(player_two_input.value==''){
        error2.innerHTML='Please enter your name'
    }
    else{
        if(plyaer_two_inp_numer.value=='')
            {error2.innerHTML="Please enter a number"}
        else{
            if(plyaer_two_inp_numer.value>10){
                error2.innerHTML='Enter anumber less than 10'
        }else{
            error2.innerHTML=''
            if(plyaer_one_inp_numer.value==plyaer_two_inp_numer.value){
                result2.style='display:block;'
                result2.innerHTML = 'Player two is win'
                player_two.style='display:none;'
                player_three.style='display:block;'
            }
            else{
                i++
                chance_number.innerHTML=i
                if(i==5){
                    result2.style='display:block;'
                    result2.innerHTML='Player one is win'
                    player_two.style='display:none;'
                    player_name.style='display:none;'
                    player_three.style='display:block;'
                }
            }
        }
        }
    }
})
// ======================player three======================
player_three_btn.addEventListener('click',()=>{
    if(player_three_input.value==''){
        error3.innerHTML='Please enter your name'
    }
    else{
        if(plyaer_three_inp_numer.value=='')
            {error3.innerHTML="Please enter a number"}
        else{
            if(plyaer_three_inp_numer.value>10){
                error2.innerHTML='Enter anumber less than 10'
        }else{
            error3.innerHTML=''
            if(plyaer_one_inp_numer.value==plyaer_three_inp_numer.value){
                result3.style='display:block;'
                result3.innerHTML = 'Player two is win'
                player_two.style='display:none;'
                player_three.style='display:block;'
            }
            else{
                m++
                chance_number3.innerHTML=m
                if(m==5){
                    result3.style='display:block;'
                    result3.innerHTML='Player one is win'
                    player_three.style='display:none;'
                    player_name.style='display:none;'
                    player_three.style='display:block;'
                }else{
                    chance_number3.style='display:none'

                }
            }
        }
        }
    }
})
// =====================game part end