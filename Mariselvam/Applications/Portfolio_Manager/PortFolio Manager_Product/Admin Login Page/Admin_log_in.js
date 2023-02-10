// shortcut function

function _(id){
    return document.getElementById(id)
}

document.querySelector('.Admin_logIn_end').addEventListener("click",function(){
    console.log("Hello")
    this.style.top = "0%";
    _('Admin_logIn_end_h3').textContent ="Authenticate";


    // if(this.style.top = "50%"){
    //     _('Admin_logIn_end_h3').textContent ="Authenticate"
    // }

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
})