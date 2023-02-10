// function _(id){
//     return document.getElementById(id)
// }

// Add_Marketer_detail start

let Add_Marketer_detail = function(e){
    if(e.target.id == "Marketers_Full_Page_2_close"){

        _('Marketername').value = "";
        _('MarketerEmail').value = "";
        document.querySelector('.Marketer_Image_upload').style.backgroundImage= "none";
        _('MarketerPassword').value = "";
        document.querySelector('.Marketer_Image_upload').style.border = "thin dotted black" 
        _('Marketer_image_add_icon').style.display = "block";

        document.querySelector('.Marketers_Full_Page_2').style.display = "none";
        document.querySelector('.Marketers_Full_Page').style.display = "flex";


    }
}
document.querySelector('.Marketers_Full_Page_2').addEventListener("click", Add_Marketer_detail)


// Add_Marketer_detail end


// Add_Marketers start
let Add_Marketers = function(e){
    if(e.target.className == "add_marketers_btn"){
        document.querySelector('.Name_error').style.display = "none";
        document.querySelector('.email_error').style.display = "none";
        document.querySelector('.password_error').style.display = "none";
        document.querySelector('.Marketers_Full_Page_2').style.display = "flex";
    }

    if(e.target.id == "Marketers_Full_Page_close"){
        document.querySelector('.Marketers_Full_Page').style.display = "none";
        document.querySelector('.portfolio_page_2').style.display = "block";
    }
    // Edit_the_Marketer start

    if(e.target.classList[1] == "Edit_the_Marketer"){

        console.log(e.target.parentNode.querySelector('h2'));

        document.querySelector('.Marketer_Image_upload').style.border = "0px" 
        _('Marketer_image_add_icon').style.display = "none"

        let edit_Mname = e.target.parentNode.querySelector('h2').innerText;

        let edit_EmailName = e.target.parentNode.querySelector('h5').innerText;

        // let edit_roll = e.target.parentNode.querySelector('.Mroll').querySelector('h2').innerText;

        let edit_image = e.target.parentNode.querySelector('.Marketer_image').style.backgroundImage;

        let edit_password = e.target.parentNode.querySelector('.pwd_div').querySelector("h4").innerText;

        _('Marketername').value = edit_Mname;

        _('MarketerEmail').value = edit_EmailName;

        // _("my_selection").value = edit_roll;

        _('MarketerPassword').value = edit_password;

        document.querySelector('.Marketer_Image_upload').style.backgroundImage = edit_image;

        // console.log(edit_Mname,",",edit_EmailName,",",edit_roll,",",edit_image,",",edit_password)

        document.querySelector('.Marketers_Full_Page_2').style.display = "flex";

        document.querySelector('.Name_error').style.display = "none";
        document.querySelector('.email_error').style.display = "none";
        document.querySelector('.password_error').style.display = "none";
        
    }
    // Edit_the_Marketer end

    // Edited the Marketer details start

    // Edited the Marketer details end
}
document.querySelector('.Marketers_Full_Page').addEventListener("click", Add_Marketers)

// Add_Marketers end





// marketer_choose_file_image_function start

let Marketer_photo = [];

let Marketer_Name = "";

let MarketerEmail = "";

let my_selection = "";

let MarketerPwd = "";

let uploaded_Marketer_image = "";

let marketer_choose_file_image_function = function(){

    Marketer_photo = _('marketer_choose_file_image').files;

    // Marketer_Name = _('Marketername').value;

    // MarketerEmail = _('MarketerEmail').value;

    // my_selection = _("my_selection").value;

    // console.log(Marketer_photo,",",Marketer_Name,",",MarketerEmail,",",my_selection)

    const reader = new FileReader();
    
    reader.addEventListener("load", () => {
        uploaded_Marketer_image = reader.result;

        document.querySelector('.Marketer_Image_upload').style.backgroundImage = `url(${uploaded_Marketer_image})`;
        document.querySelector('.Marketer_Image_upload').style.border = "0px" 
        _('Marketer_image_add_icon').style.display = "none";

        console.log(uploaded_Marketer_image)
    });
    reader.readAsDataURL(this.files[0]);




}


const marketer_choose_file_image = _('marketer_choose_file_image')


marketer_choose_file_image.addEventListener("change",marketer_choose_file_image_function)

// marketer_choose_file_image_function end

// Marketer_submit start

let formData2 = "";
let temp4 = document.querySelector('.template_4');
let temp5 = document.querySelector('.template_5');

let total_Album_box = 0 ;

let total_Admin_box = 0 ;

let Marketer_id = 0;

let Admin_id = 0;

let Marketer_Array;


let Marketer_submit_btn = document.querySelector('.Marketer_submit');

let Marketer_submit_function = function(){

    // Through error Messages start
    if((_('Marketername').value == "") && (_('MarketerEmail').value == "") && (_('MarketerPassword').value == "")){
        document.querySelector('.Name_error').style.display = "block";
        document.querySelector('.email_error').style.display = "block";
        document.querySelector('.password_error').style.display = "block";
        document.querySelector('.Marketers_Full_Page_2').style.display = "flex";


        if(_('Marketername').value == ""){
            document.querySelector('.Name_error').style.display = "block";
            document.querySelector('.email_error').style.display = "none";
            document.querySelector('.password_error').style.display = "none";
            document.querySelector('.Marketers_Full_Page_2').style.display = "flex";
        }
        
        if(_('MarketerEmail').value == ""){
            document.querySelector('.email_error').style.display = "block";
            document.querySelector('.password_error').style.display = "none";
            document.querySelector('.Name_error').style.display = "none";
            document.querySelector('.Marketers_Full_Page_2').style.display = "flex";
        }
    
        if(_('MarketerPassword').value == ""){
            document.querySelector('.password_error').style.display = "block";
            document.querySelector('.email_error').style.display = "none";
            document.querySelector('.Name_error').style.display = "none";
              document.querySelector('.Marketers_Full_Page_2').style.display = "flex";
        }

    

    let hereImage =  document.querySelector('.Marketer_Image_upload').style.backgroundImage= "none";
    
    if(hereImage){
        document.querySelector('.Marketers_Full_Page_2').style.display = "flex";

    }

    }

    
        

    // Through error Messages end

    else{

        document.querySelector('.Marketer_Image_upload').style.backgroundImage = `url(${uploaded_Marketer_image})`;

        Marketer_Name = _('Marketername').value;

        MarketerEmail = _('MarketerEmail').value;

        my_selection = _("my_selection").value;

        MarketerPwd = _('MarketerPassword').value;

        console.log(uploaded_Marketer_image,",",Marketer_Name,",",MarketerEmail,",",my_selection);

        formData2 = new FormData();

        formData2.append('MarketerName',Marketer_Name);
        formData2.append('MarketerEmail',MarketerEmail);
        formData2.append('my_selection',my_selection);
        formData2.append('MarketerPwd',MarketerPwd);
        formData2.append("Marketer_Image",Marketer_photo[0])

        // console.log("print",Marketer_photo[0]);

        fetch('http://172.24.254.37:9876/FileSender/Users', {
            method : "POST",
            Headers : {
                Accept :'application.json',
                'Content-Type' : 'application/json'
            },
            body : formData2
        })
        .then(ele => {
            return ele.json();
        })
        .then(res => {
            console.log(res)

            if(my_selection== "Marketer"){

                // console.log(res.UserData.Marketer);

                let Marketer_div = document.querySelectorAll('.Marketer');

                Marketer_div.forEach(ele => {
                    ele.remove();
                });

                Marketer_Array = res.UserData.Marketer


                Marketer_Array.forEach(element => {
                    console.log(element);

                    Marketer_Elements_created();
                    // console.log(temp4.content.querySelector(`.Marketer_image${element.Mid}`))
                    document.querySelector(`.Marketer_image${total_Album_box}`).style.backgroundImage = `url(data:image/jpeg;base64,${element.Mphoto})`;
                    document.querySelector(`.MName${total_Album_box}`).innerText = element.Mname;
                    document.querySelector(`.Memail${total_Album_box}`).innerText = element.Memail;
                    document.querySelector(`.pwd${total_Album_box}`).innerText = element.Mpass;
                    // document.querySelector(`.M_roll_name$$${element.id}`.innerText = my_selection);

                });
            
            }

            if(my_selection == "Admin"){

                let Admin_Array = res.UserData.Admin;

                let Admin_div = document.querySelectorAll('.Admin');

                Admin_div.forEach(ele => {
                    ele.remove();
                });

                console.log(my_selection)

                Admin_Array.forEach(element => {
                    console.log(element);
                    Admin_Elements_created();
                    // console.log(temp4.content.querySelector(`.Marketer_image${element.Mid}`))
                    document.querySelector(`.Admin_image${total_Admin_box}`).style.backgroundImage = `url(data:image/jpeg;base64,${element.Mphoto})`;
                    document.querySelector(`.AName${total_Admin_box}`).innerText = element.Mname;
                    document.querySelector(`.Aemail${total_Admin_box}`).innerText = element.Memail;
                    document.querySelector(`.Apwd${total_Admin_box}`).innerText = element.Mpass;
                    // document.querySelector(`.A_roll_name${element.Mid}`.innerText = my_selection);


                });

            }
        })

        _('Marketername').value = "";
        _('MarketerEmail').value = "";
        document.querySelector('.Marketer_Image_upload').style.backgroundImage= "none";
        _('MarketerPassword').value = "";
        document.querySelector('.Marketer_Image_upload').style.border = "thin dotted black" 
        _('Marketer_image_add_icon').style.display = "block"

        document.querySelector('.Marketers_Full_Page_2').style.display = "none";
        document.querySelector('.full_Marketers').style.display = "flex";
        document.querySelector(".Show_marketers").style.display = "flex";
    }
    

}

Marketer_submit_btn.addEventListener("click",Marketer_submit_function)



// function Create_Marketer(){

           
//         // if(my_selection == "Marketer"){
//         //     Marketer_Elements_created();
//         // }
//         // if(my_selection == "Admin"){
//         //     Admin_Elements_created();
            
//         // }
        
// }


function Admin_Elements_created(){
    total_Admin_box = document.querySelectorAll('.Admin').length+1

        // console.log(total_Album_box)

    temp5 = document.querySelector(".template_5");
    temp5.content.querySelector(".Admin_image").setAttribute("class", `Admin_image Admin_image${total_Admin_box}`)
    temp5.content.querySelector(".AName").setAttribute("class", `AName AName${total_Admin_box}`);
    temp5.content.querySelector(".Aemail").setAttribute("class", `Aemail Aemail${total_Admin_box}`);
    temp5.content.querySelector(".Apwd").setAttribute("class", `Apwd Apwd${total_Admin_box}`);
    // temp5.content.querySelector(".A_roll_name").setAttribute("class", `A_roll_name A_roll_name${total_Admin_box}`);

    var clon = temp5.content.cloneNode(true);
    document.querySelector(".Show_Admins").appendChild(clon); 
}

function Marketer_Elements_created(){
    total_Album_box = document.querySelectorAll('.Marketer').length+1

    // console.log(total_Album_box)

    temp4 = document.querySelector(".template_4");
    temp4.content.querySelector(".Marketer_image").setAttribute("class", `Marketer_image Marketer_image${total_Album_box}`)
    temp4.content.querySelector(".MName").setAttribute("class", `MName MName${total_Album_box}`);
    temp4.content.querySelector(".Memail").setAttribute("class", `Memail Memail${total_Album_box}`);
    temp4.content.querySelector(".pwd").setAttribute("class", `pwd pwd${total_Album_box}`);
    // temp4.content.querySelector(".M_roll_name").setAttribute("class", `M_roll_name M_roll_name${total_Album_box}`);

    var clon = temp4.content.cloneNode(true);
    document.querySelector(".Show_marketers").appendChild(clon); 
}


// Marketer_submit end


// onload get marketer details start 

let Admin_Marketer = {};

window.onload = get_full_Marketerer_detailed();


function get_full_Marketerer_detailed(){
    fetch('http://172.24.254.37:9876/FileSender/Users')
    .then(res => {
        return res.json();
    })
    .then(response => {
        console.log(response)

        if((response.UserData.Admin.length == 0) & (response.UserData.Marketer.length == 0)){
            document.querySelector('.full_Marketers').style.display = "none";
            // console.log("Hello")
        }
        else{
            
            Admin_Marketer = Object.keys(response.UserData)

            Admin_Marketer.forEach(ele => {
                console.log(ele)

                if(ele == 'Marketer'){
                    
                    let onload_Marketer_Array = response.UserData.Marketer


                    onload_Marketer_Array.forEach(element => {
                        console.log(element);

                        Marketer_Elements_created();
                        // console.log(temp4.content.querySelector(`.Marketer_image${element.Mid}`))
                        document.querySelector(`.Marketer_image${total_Album_box}`).style.backgroundImage = `url(data:image/jpeg;base64,${element.Mphoto})`;
                        document.querySelector(`.MName${total_Album_box}`).innerText = element.Mname;
                        document.querySelector(`.Memail${total_Album_box}`).innerText = element.Memail;
                        document.querySelector(`.pwd${total_Album_box}`).innerText = element.Mpass;
                        // document.querySelector(`.M_roll_name$$${element.id}`.innerText = my_selection);

                    });
                }
                if(ele == 'Admin'){
                    let onload_Admin_Array = response.UserData.Admin


                    onload_Admin_Array.forEach(element => {
                        console.log(element);

                        Admin_Elements_created();
                        // console.log(temp4.content.querySelector(`.Marketer_image${element.Mid}`))
                        document.querySelector(`.Admin_image${total_Admin_box}`).style.backgroundImage = `url(data:image/jpeg;base64,${element.Mphoto})`;
                        document.querySelector(`.AName${total_Admin_box}`).innerText = element.Mname;
                        document.querySelector(`.Aemail${total_Admin_box}`).innerText = element.Memail;
                        document.querySelector(`.Apwd${total_Admin_box}`).innerText = element.Mpass;
                        // document.querySelector(`.M_roll_name$$${element.id}`.innerText = my_selection);

                    });
                }
                document.querySelector('.full_Marketers').style.display = "flex";
            })
            // if(){

            // }

        }
    })
}


// onload get marketer details end 



// Scroll start

function rightScroll(){
    const right = document.querySelector('.Show_marketers');
    right.scrollBy(900,0)
}
function leftScroll(){
    const left =document.querySelector('.Show_marketers');
    left.scrollBy(-900,0)
}


function AdminRightScroll(){
    const right = document.querySelector('.Show_Admins');
    right.scrollBy(900,0);
    console.log("rightAdmin");
}
function AdminLeftScroll(){
    const left =document.querySelector('.Show_Admins');
    left.scrollBy(-900,0)
    console.log("rightAdmin");
}