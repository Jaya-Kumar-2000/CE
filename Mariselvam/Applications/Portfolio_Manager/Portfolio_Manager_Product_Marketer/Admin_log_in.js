// shortcut function



function _(id){
    return document.getElementById(id)
}




function Admin_log_in_input(){


    console.log("Hello");

    let username = _('fname').value;

    let Password = _('pwd').value;

    console.log(Password.length)


    if((username == "") & (Password == "")){


        _('fname').style.border ="1px solid red";
        document.querySelector('.username_error').style.display = "block";
        document.querySelector('.Password_error').style.display = "block";
        document.querySelector('.username_error').textContent = "Please Enter Username";
        document.querySelector('.Password_error').textContent = "Please Enter Password";
        _('pwd').style.border ="1px solid red";
        document.querySelector('.Admin_error').style.display = "none";


    }


    
    if((username.length < 10) || (Password.length < 8)){
        document.querySelector('.Admin_error').style.display = "block";
        document.querySelector('.username_error').style.display = "block";
        document.querySelector('.Password_error').style.display = "block";
        document.querySelector('.username_error').textContent = "Username Atleast need 10 charcters";
        document.querySelector('.Password_error').textContent = "Password Atleast need 8 charcters";
        _('fname').style.border ="1px solid rgb(40, 124, 207)";

    }
    if((username.length >= 10)){
        document.querySelector('.Admin_error').style.display = "none";
        document.querySelector('.username_error').style.display = "none";
        _('fname').style.border = "1.5px solid rgb(40, 124, 207)";
    }
    if((Password.length >= 8)){
        document.querySelector('.Password_error').style.display = "none";
        _('pwd').style.border = "1.5px solid rgb(40, 124, 207)";

    }

    else{
        document.querySelector('.Admin_error').style.display = "none";
    }
}

let Admin_log_in_function = function(){

    let username = _('fname').value;

    let Password = _('pwd').value;

    console.log(username);
    console.log(Password);

    if((username != 'Mariselvam') & (Password != 'Ma@ri@20')){
        document.querySelector('.Admin_error').style.display = "block";

    }
    if((username == 'Mariselvam') & (Password == 'Ma@ri@20')){
        document.querySelector('.Admin_error').style.display = "none";
        document.querySelector('.username_error').style.display = "none";
        document.querySelector('.Password_error').style.display = "none";

        this.parentNode.style.top = "0%";
        _('Admin_logIn_end_h3').textContent ="Authenticate";

        setTimeout(function(){
            document.querySelector('.loader_page').classList.add('loader_page_down');
            console.log("hello")
        },200)

        setTimeout(function(){
            document.querySelector('.loader').classList.remove('loader');
            document.querySelector('.default_loader').classList.add('loader_to_tick');
            document.querySelector('.log_In_tick_view').classList.add('log_In_tick');
            _('Admin_logIn_end_h3').textContent ="Welcome Back Admin";
            
        },1500);

        setTimeout(function(){
            document.querySelector('.curtain_sec').style.display = "none";
            document.querySelector('.portfolio_page_2').style.display = "block";
        },1700);


    }
    // if((username == 'Mariselvam') & (Password == 'Ma@ri@20')){
    //     this.parentNodestyle.top = "0%";
    //     _('Admin_logIn_end_h3').textContent ="Authenticate";
    
    
    
    //     setTimeout(function(){
    //         document.querySelector('.loader_page').classList.add('loader_page_down');
    //         console.log("hello")
    //     },200)
    
    //     setTimeout(function(){
    //         document.querySelector('.loader').classList.remove('loader');
    //         document.querySelector('.default_loader').classList.add('loader_to_tick');
    //         document.querySelector('.log_In_tick_view').classList.add('log_In_tick');
    //         _('Admin_logIn_end_h3').textContent ="Welcome Back Admin";
            
    //     },1500);
    // }
    if((username == "") & (Password == "")){


        _('fname').style.border ="1px solid red";
        document.querySelector('.username_error').style.display = "block";
        document.querySelector('.Password_error').style.display = "block";
        document.querySelector('.username_error').textContent = "Please Enter Username";
        document.querySelector('.Password_error').textContent = "Please Enter Password";
        _('pwd').style.border ="1px solid red";
        document.querySelector('.Admin_error').style.display = "none";


    }

    


    
}
document.querySelector('#Admin_logIn_end_h3').addEventListener("click",Admin_log_in_function)

