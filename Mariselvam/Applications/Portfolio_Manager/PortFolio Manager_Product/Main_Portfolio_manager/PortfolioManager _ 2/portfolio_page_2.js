function _(id) {
    return document.getElementById(id);
}


/* Saved_Portfolio_page start*/

// document.querySelector('.Saved_Portfolio_page').addEventListener("click", function(e){
//     console.log(e.target)


//     if(e.target.classList[1] == 'select_icon'){
//         e.target.parentNode.parentNode.classList.toggle('portfolio_image_select_parent');

//         e.target.classList.toggle('portfolio_image_select_icon');
//     }

//     // saved_portfolio_rename_delete

//     try{
//         document.querySelector(".show_portfolio_rename_delete").classList.remove('show_portfolio_rename_delete');
//     }
//     catch(error){
//         console.log(error)
//     }


//     if(e.target.classList[1] == 'share_delete'){
//         console.log(e.target);
//         e.target.parentNode.nextElementSibling.classList.add('show_portfolio_rename_delete');
//     }



// })


// Main create album page & button
// document.querySelector('.create_album_page').addEventListener("click",function(e){
//     console.log(e.target.classList);
//     if(e.target.classList[0] == "before_add_create_album"){

//         document.querySelector('.Album_add_photos').style.display = "flex";
//         document.querySelector('.album_section').style.display = "flex";
//         document.querySelector('.create_album_page').style.display = "none"

//     }
// })




// Add photos click button

// document.querySelector('.add_photos_button_click').addEventListener('click',function(){

//     album_name_input_value = _('album_name_input').value;

//     if(album_name_input_value == ""){
//         document.querySelector('.album_name_input_error').style.display = "block";    
//     }
//     if(album_name_input_value != ""){
//         document.querySelector('.album_name_input_error').style.display = "none";   
//     }

//     // putImage();
// })


// Album add photos & videos page and button

// document.querySelector('.Album_add_photos').addEventListener("click",function(e){
//     // console.log(e.target.classList[0])
//     // console.log(_('album_name_input').value)



//     if(e.target.parentNode.classList[0] == "Album_add_photos"){
//         console.log(e.target.parentNode.classList[0])  
//         document.querySelector('.Album_add_photos').style.display = "none";
//         document.querySelector('.adding_album_images').style.display ="flex";
//         document.querySelector('.album_section').style.display = "none";

//     }


// })



// let photo= "";

// let album_name = '';

// let choose_file_image_function =  function(){
//     const  reader = new FileReader();
//     reader.addEventListener("load", function(){

//         let uploadedImage = reader.result;

//         document.querySelector('.adding_album_images').style.display ="flex";
//         document.querySelector('.Album_add_photos').style.display = "none";
//         document.querySelector('.album_section').style.display = "none";

//         document.querySelector('.recent_album_image_1').style.backgroundImage = `url(${uploadedImage})`;

//         console.log(uploadedImage)

//         photo = document.getElementById("choose_file_image").files[0]; 
//         album_name = document.getElementById('album_name_input').value
//         let formData = new FormData(); 




//         formData.append("photo", photo); 
//         formData.append("album_name", album_name); 
//         console.log(formData.get("photo"))
//         fetch('http://172.24.250.68:9876/FileSender/Filereceiver', {method: "POST", body: formData, mode: "no-cors"});

//         });



//     reader.readAsDataURL(this.files[0]);
//     // console.log(photo)





// }




// const choose_file_images = document.getElementById('choose_file_image');

// // choose_file_images.addEventListener("change",choose_file_image_function)

// choose_file_images.addEventListener("click",function(e){
//     album_name_input_value = _('album_name_input').value;

//     if(album_name_input_value == ""){
//         e.preventDefault();
//         document.querySelector('.album_name_input_error').style.display = "block";    
//     }
//     if(album_name_input_value != ""){
//         // _('choose_file_image').disabled = false;
//         document.querySelector('.album_name_input_error').style.display = "none";   
//         choose_file_images.addEventListener("change",choose_file_image_function);
//         // document.querySelector('.created_album_name').textContent = album_name_input_value;

//         // document.querySelector('.adding_album_images').style.display ="flex";
//         // document.querySelector('.Album_add_photos').style.display = "none";
//         // document.querySelector('.album_section').style.display = "none";





//     }

// })




// swiper

// const swiper = new Swiper('.swiper', {

//     // loop: true,

//     effect: 'cube',
//     slidesPerView:1,
//     grabCursor: true,
//     cubeEffect :{
//         shadow:true,
//         slideShadows : true,
//         shadowOffset :20,
//         shadowScale :0.94,
//     },
//     // on: {
//     //     init(swiper) {
//     //       const totalSlidesLen = swiper.slides.length;

//     //       swiper.el.querySelector('.swiper-button-prev').addEventListener('click', () => {
//     //         if (swiper.isBeginning) {
//     //           swiper.el.querySelector('.swiper-button-prev').style.display = "none";
//     //           swiper.el.querySelector('.swiper-button-next').style.display = "block";

//     //         } 
//     //         else {
//     //           swiper.slideTo(swiper.realIndex);
//     //           swiper.el.querySelector('.swiper-button-prev').style.display = "block";
//     //           swiper.el.querySelector('.swiper-button-next').style.display = "block";

//     //         }
//     //       });
//     //       swiper.el.querySelector('.swiper-button-next').addEventListener('click', () => {
//     //         if (swiper.isEnd) {
//     //           swiper.el.querySelector('.swiper-button-next').style.display = "none";
//     //           swiper.el.querySelector('.swiper-button-prev').style.display = "block";

//     //         } else {
//     //           swiper.slideTo(swiper.realIndex);
//     //           swiper.el.querySelector('.swiper-button-next').style.display = "block";
//     //           swiper.el.querySelector('.swiper-button-prev').style.display = "block";

//     //         }
//     //       });
//     // }},
//     pagination: {
//         el: '.swiper-pagination',
//     },


//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// });





// Admin_page_flow start

//   Entering admin using id password

// function _(id){
//     return document.getElementById(id)
// }




// let Admin_log_in_input = function(){


//     console.log("Hello");

//     let username = _('fname').value;

//     let Password = _('pwd').value;

//     console.log(Password.length)


//     if((username == "") & (Password == "")){


//         _('fname').style.border ="1px solid red";
//         document.querySelector('.username_error').style.display = "block";
//         document.querySelector('.Password_error').style.display = "block";
//         document.querySelector('.username_error').textContent = "Please Enter Username";
//         document.querySelector('.Password_error').textContent = "Please Enter Password";
//         _('pwd').style.border ="1px solid red";
//         document.querySelector('.Admin_error').style.display = "none";


//     }



//     if((username.length < 10) || (Password.length < 8)){
//         document.querySelector('.Admin_error').style.display = "block";
//         document.querySelector('.username_error').style.display = "block";
//         document.querySelector('.Password_error').style.display = "block";
//         document.querySelector('.username_error').textContent = "Username Atleast need 10 charcters";
//         document.querySelector('.Password_error').textContent = "Password Atleast need 8 charcters";
//         _('fname').style.border ="1px solid rgb(40, 124, 207)";

//     }
//     if((username.length >= 10)){
//         document.querySelector('.Admin_error').style.display = "none";
//         document.querySelector('.username_error').style.display = "none";
//         _('fname').style.border = "1.5px solid rgb(40, 124, 207)";
//     }
//     if((Password.length >= 8)){
//         document.querySelector('.Password_error').style.display = "none";
//         _('pwd').style.border = "1.5px solid rgb(40, 124, 207)";

//     }

//     else{
//         document.querySelector('.Admin_error').style.display = "none";
//     }
// }

// let Admin_log_in_function = function(){

//     let username = _('fname').value;

//     let Password = _('pwd').value;

//     console.log(username);
//     console.log(Password);

//     if((username != 'Mariselvam') & (Password != 'Ma@ri@20')){
//         document.querySelector('.Admin_error').style.display = "block";

//     }
//     if((username == 'Mariselvam') & (Password == 'Ma@ri@20')){
//         document.querySelector('.Admin_error').style.display = "none";
//         document.querySelector('.username_error').style.display = "none";
//         document.querySelector('.Password_error').style.display = "none";

//         this.parentNode.style.top = "0%";
//         _('Admin_logIn_end_h3').textContent ="Authenticate";

//         setTimeout(function(){
//             document.querySelector('.loader_page').classList.add('loader_page_down');
//             console.log("hello")
//         },200)

//         setTimeout(function(){
//             document.querySelector('.loader').classList.remove('loader');
//             document.querySelector('.default_loader').classList.add('loader_to_tick');
//             document.querySelector('.log_In_tick_view').classList.add('log_In_tick');
//             _('Admin_logIn_end_h3').textContent ="Welcome Back Admin";

//         },1500);

//         setTimeout(function(){
//             document.querySelector('.curtain_sec').style.display = "none";
//             document.querySelector('.portfolio_page_2').style.display = "block";
//         },1700);


//     }
//     // if((username == 'Mariselvam') & (Password == 'Ma@ri@20')){
//     //     this.parentNodestyle.top = "0%";
//     //     _('Admin_logIn_end_h3').textContent ="Authenticate";



//     //     setTimeout(function(){
//     //         document.querySelector('.loader_page').classList.add('loader_page_down');
//     //         console.log("hello")
//     //     },200)

//     //     setTimeout(function(){
//     //         document.querySelector('.loader').classList.remove('loader');
//     //         document.querySelector('.default_loader').classList.add('loader_to_tick');
//     //         document.querySelector('.log_In_tick_view').classList.add('log_In_tick');
//     //         _('Admin_logIn_end_h3').textContent ="Welcome Back Admin";

//     //     },1500);
//     // }
//     if((username == "") & (Password == "")){


//         _('fname').style.border ="1px solid red";
//         document.querySelector('.username_error').style.display = "block";
//         document.querySelector('.Password_error').style.display = "block";
//         document.querySelector('.username_error').textContent = "Please Enter Username";
//         document.querySelector('.Password_error').textContent = "Please Enter Password";
//         _('pwd').style.border ="1px solid red";
//         document.querySelector('.Admin_error').style.display = "none";


//     }





// }
// document.querySelector('#Admin_logIn_end_h3').addEventListener("click",Admin_log_in_function)






//   back from  Album add photos & videos page and button

// 1.back from  Album add photos & videos page and button


document.querySelector('.Album_add_photos').addEventListener("click", function (e) {
    // console.log(e.target.classList[0])
    // console.log(_('album_name_input').value)



    if (e.target.parentNode.classList[0] == "Album_add_photos") {
        console.log(e.target.parentNode.classList[0])
        document.querySelector('.Album_add_photos').style.display = "none";
        document.querySelector(".Saved_Portfolio_page").style.display = "block";



    }


})

// 2.Album add photos & videos page and button



let album_name = '';

let formData = "";

let album_name_count = 0;

let album_image_count = 0;

let temp ="";

let photo = [];

let post_res = [];

let choose_file_image_function = function () {





    
    document.querySelector(".Saved_Portfolio_page").style.display = "none";
    document.querySelector('.Album_add_photos').style.display = "none";


    photo = document.getElementById("choose_file_image").files;
    album_name = document.getElementById('album_name_input').value;

    console.log(typeof photo)
    console.log(photo)




    formData = new FormData();

    formData.append("sizeoffile", photo.length)


    console.log(formData.get("sizeoffile"))

    for (let i = 0; i < photo.length; i++) {
        let element = photo[i];
        formData.append("photo" + i, photo[i]);
        console.log(formData.get("photo" + i))
    }


    let total_Album_box = document.querySelectorAll(".saved_portfolio_image").length +1;


    const reader = new FileReader();
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;

        temp = document.querySelector("template");
        temp.content.querySelector(".saved_portfolio_image").setAttribute("class", `saved_portfolio_image saved_portfolio_image_${total_Album_box}`)
        temp.content.querySelector(".saved_portfolio__content_album_name").setAttribute("class", `saved_portfolio__content_album_name saved_portfolio__content_album_name${total_Album_box}`)
        temp.content.querySelector(`.saved_portfolio_image_${total_Album_box}`).style.backgroundImage = `url(${uploaded_image})`;
        temp.content.querySelector(`.saved_portfolio__content_album_name${total_Album_box}`).textContent = album_name;
    
        var clon = temp.content.cloneNode(true);
        document.querySelector(".saved_portfolio_images").appendChild(clon); 

    });
    reader.readAsDataURL(photo[0]);


    document.querySelector(".saved_portfolio_images").style.display = "flex";

    formData.append("album_name", album_name);



    fetch('http://172.24.255.209:9876/FileSender/Filereceiver', {
        method: "POST",
        Headers: {
            Accept: 'application.json',
            'Content-Type': 'applicaton/json'
        },
        body: formData
        //  mode: "no-cors"
    })
        .then(ele => {
            // console.log(ele);
            return ele.json();

        })
        .then(res => {
            console.log(document.querySelectorAll(".saved_portfolio_image"));
            
            post_res = JSON.parse(JSON.stringify(res));
            console.log(res);
            console.log(album_name);
            document.querySelector('.showed_images_page_album_name').innerText = album_name;
            show_photo();
            document.querySelector('.showed_the_full_images').style.display = "flex";

            // console.log(Object.keys[res].length);




        }).catch(err => {
            console.error(err)
        });





}


// Fetch Api function call start 

let old_data_count = 0;

let old_image_data_count = 0;


window.onload = get_Data_Function();

function get_Data_Function(){

    fetch('http://172.24.255.209:9876/FileSender/Filereceiver'
    ).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        // console.log(data.Albums[0])

        post_res = JSON.parse(JSON.stringify(data))

        if (data.length == 0) {
            document.querySelector(".saved_portfolio_images").style.display = "none";
        }

        else {
            document.querySelector(".saved_portfolio_images").style.display = "flex";

            data.forEach(function(item) {

                console.log(item)
                Object.keys(item).forEach(function(key) {
                  console.log("key:" + key + "value:" + item[key]); 
                console.log(key)
                create_Album_Elements(); 
                document.querySelector(`.saved_portfolio__content_album_name${old_data_count+=1}`).textContent = key;
                document.querySelector(`.saved_portfolio_image_${old_image_data_count+=1}`).style.backgroundImage = `url(data:image/jpeg;base64,${item[key][0]})`;

                console.log(item[key][0])
                // console.log(item[Object.keys(item)[0]])
                });
              });

            // console.log(data[0])


            


        }

    });

}



// Fetch Api function call end


// Portfolio album page start 


let photo_selected_item = 0;

document.querySelector(".Portfolio_album_page").addEventListener("click",function(e){
    console.log(e.target)
    if (e.target.classList[1] == 'select_icon') {
        e.target.parentNode.parentNode.classList.toggle('portfolio_image_select_parent');

        e.target.classList.toggle('portfolio_image_select_icon');

        if (e.target.classList[2] == "portfolio_image_select_icon") {
            photo_selected_item += 1;
            console.log("+" + photo_selected_item)
            document.querySelector(".selected_photo_item_total").textContent = photo_selected_item;
            document.querySelector(".selected_photo_edit_delete").style.bottom = "-12px";
        }
        if (e.target.classList[2] != "portfolio_image_select_icon") {
            photo_selected_item -= 1;
            console.log("-" + photo_selected_item)
            document.querySelector(".selected_photo_item_total").textContent = photo_selected_item;
        }

        if (photo_selected_item == 0) {
            document.querySelector(".selected_photo_edit_delete").style.bottom = "-70px";
        }

    }

    try {
        document.querySelector(".show_portfolio_rename_delete").classList.remove('show_portfolio_rename_delete');
    }
    catch (error) {
        console.log(error)
    }


    if (e.target.classList[1] == 'share_delete') {
        console.log(e.target);
        e.target.parentNode.nextElementSibling.classList.add('show_portfolio_rename_delete');
    }

})

// Portfolio album page end

// main album page

let selected_item = 0;

let renamed_album_name = 0;
let rename_album ='';

let marketerer_values_to_show = [];


let album_val ="";

let edited_album_name = "";



document.querySelector('.Saved_Portfolio_page').addEventListener("click", function (e) {


    if (e.target.id == "main_add_album_button") {

        document.querySelector(".Saved_Portfolio_page").style.display = "none";
        document.querySelector(".Album_add_photos").style.display = "block";
        document.getElementById('album_name_input').value = "";
    }

    if (e.target.classList[1] == 'select_icon') {
        e.target.parentNode.parentNode.classList.toggle('portfolio_image_select_parent');

        e.target.classList.toggle('portfolio_image_select_icon');

        if (e.target.classList[2] == "portfolio_image_select_icon") {
            selected_item += 1;
            console.log("+" + selected_item)
            document.querySelector(".selected_item_total").textContent = selected_item;
            document.querySelector(".selected_edit_delete").style.bottom = "-3px";
        }
        if (e.target.classList[2] != "portfolio_image_select_icon") {
            selected_item -= 1;
            console.log("-" + selected_item)
            document.querySelector(".selected_item_total").textContent = selected_item;
        }

        if (selected_item == 0) {
            document.querySelector(".selected_edit_delete").style.bottom = "-62px";
        }

    }

    // saved_portfolio_rename_delete

    try {
        document.querySelector(".show_portfolio_rename_delete").classList.remove('show_portfolio_rename_delete');
    }
    catch (error) {
        console.log(error)
    }


    if (e.target.classList[1] == 'share_delete') {
        console.log(e.target);
        e.target.parentNode.nextElementSibling.classList.add('show_portfolio_rename_delete');
    }


    // rename the image

    let total_rename_box = document.querySelectorAll(".saved_portfolio__content").length +1;

   

    if (e.target.id == "portfolio_rename") {
        document.querySelector(".backdrop").style.display = "flex";

        let rename_background_image = e.target.parentNode.parentNode.style.backgroundImage;

       console.log(e.target.parentNode.nextElementSibling.querySelector(".saved_portfolio__content_album_name").textContent);

       rename_album =  e.target.parentNode.nextElementSibling.querySelector(".saved_portfolio__content_album_name")


        document.querySelector('.pop_up_iamge').style.backgroundImage = rename_background_image

        document.querySelector(".backdrop").addEventListener("click", function (e) {
            if (e.target.className == "album_pop_up_cancel") {
                document.querySelector(".Saved_Portfolio_page").style.display = "block";
                document.querySelector(".backdrop").style.display = "none";
                _("rename_input").value = "";
                document.querySelector(".rename_album_name_error").style.display = "none";

            }
            if (e.target.className == "album_pop_up_done") {

                console.log(rename_album.innerText);

                oldname = rename_album.innerText;

                console.log("oldname",oldname)

                if (_("rename_input").value == "") {
                    document.querySelector(".rename_album_name_error").style.display = "block";
                }
                else {
                    document.querySelector(".Saved_Portfolio_page").style.display = "block";
                    document.querySelector(".backdrop").style.display = "none";
                    document.querySelector(".rename_album_name_error").style.display = "none";
                    console.log(rename_album)

                   formData = new FormData();

                   formData.append("oldName",oldname);
                   formData.append("newName",_(_("rename_input").value))


                    rename_album.innerText = _("rename_input").value;

                    

                    fetch('http://172.24.255.209:9876/FileSender/Filereceiver', {
                        method: "PUT",
                        Headers: {
                            'Content-Type': 'applicaton/json'
                        },
                        body: formData,
                        mode : "no-cors"
                    })
                    .then(response => {return response.json()})
                    .then(data => {

                        console.log(data)


                    
                        // data[1]["jaya"] = data[1].MS

                        // console.log(data[1].MS)

                        // console.log(data)

                        // delete data[1].MS

                        // console.log(data)
                        
                    });

                    // rendat = data
                        
                    

                    rename_album =''


                }

                _("rename_input").value = "";



            }
        })

    }


    // delete the image


    if (e.target.id == "portfolio_Delete") {
        document.querySelector(".saved_portfolio_image_1").remove();
    }

    if (e.target.id == "edit_the_album") {
        document.querySelector(".Saved_Portfolio_page").style.display = "none";
        document.querySelector(".main_Portfolio_album_page").style.display = "flex";
        console.log(post_res);
        edited_album_name = e.target.previousElementSibling.innerText
        console.log("edited_album_name",edited_album_name);
        show_photo();
        console.log(e.target.previousElementSibling.innerText)

    }


    // share to





    let temp2 = document.querySelector(".template_2");

    if (e.target.id == "portfolio_share_to") {
        document.querySelector(".backdrop_share").style.display = "flex";

        // get marketers details
        fetch('http://172.24.255.209:9876/FileSender/Marketer')
        // http://172.24.254.37:9123/PortfolioManager/Marketer
        .then(markres => {
            return markres.json();
        }).then(markdata => {                             
            // console.log(markdata.MarketerData[0].Memail);

            marketerer_values_to_show  = JSON.parse(JSON.stringify(markdata));;
            
            console.log(markdata)


            // markdata.MarketerData.forEach(function(index){


            //     // console.log(index);
            //     // console.log(markdata.MarketerData.length)

            //     temp2 = document.querySelector(".template_2");
            //     temp2.content.querySelector(".pop_up_page_share_marketers_image").setAttribute("class", `pop_up_page_share_marketers_image pop_up_page_share_marketers_image${index.Mid}`)
            //     temp2.content.querySelector(".pop_up_page_share_marketer_name").setAttribute("class", `pop_up_page_share_marketer_name pop_up_page_share_marketer_name${index.Mid}`);
            //     temp2.content.querySelector(`.pop_up_page_share_marketers_image${index.Mid}`).style.backgroundImage = `url(data:image/jpeg;base64,${index.Mphoto})`;
            //     temp2.content.querySelector(`.pop_up_page_share_marketer_name${index.Mid}`).textContent = index.Mname;

            
                

            //     var clon = temp2.content.cloneNode(true);
            //     document.querySelector(".pop_up_page_share_marketers").appendChild(clon);




            // })

            let parentEleempty = document.querySelector('.pop_up_page_share_marketers');

                parentEleempty.innerHTML = "";

            let parentEle = document.querySelector('.pop_up_page_share_marketers');

            for (let i = 0; i < markdata.MarketerData.length; i++) {
                const element = markdata.MarketerData[i];

                console.log(element);

                let pop_up_page_share_marketers_detail_Ele = document.createElement("div");

                pop_up_page_share_marketers_detail_Ele.setAttribute("class","pop_up_page_share_marketers_detail");

                let pop_up_page_share_marketers_image = document.createElement('div');
                pop_up_page_share_marketers_image.setAttribute("class",`pop_up_page_share_marketers_image pop_up_page_share_marketers_image${i}`);
                pop_up_page_share_marketers_detail_Ele.appendChild(pop_up_page_share_marketers_image);

                let pop_up_page_share_marketer_name = document.createElement('h2');
                pop_up_page_share_marketer_name.setAttribute("class",`pop_up_page_share_marketer_name pop_up_page_share_marketer_name${i}`)
                pop_up_page_share_marketers_detail_Ele.appendChild(pop_up_page_share_marketer_name);

                let select_span = document.createElement("span");
                select_span.setAttribute("class","material-symbols-outlined");
                select_span.textContent = "check";
                pop_up_page_share_marketers_detail_Ele.appendChild(select_span);


                parentEle.appendChild(pop_up_page_share_marketers_detail_Ele);

                document.querySelector(`.pop_up_page_share_marketers_image${i}`).style.backgroundImage = `url(data:image/jpeg;base64,${element.Mphoto})`;
                document.querySelector(`.pop_up_page_share_marketer_name${i}`).textContent = element.Mname;
                
            }

            


            


        });
    }

    document.querySelector(".showed_the_full_images").addEventListener("click",function(e){

        console.log(e.target)

        if(e.target.classList[1] == "showed_the_full_images_button"){
            document.querySelector(".showed_the_full_images").style.display = "none";
            document.querySelector(".Saved_Portfolio_page").style.display = "flex";
        }
    }) 

    if(e.target.classList[0] == "saved_portfolio_image"){
        // console.log(e.target.querySelector(".saved_portfolio__content h2"))
        album_val = e.target.querySelector(".saved_portfolio__content h2").innerText;
        // console.log(album_val)
        document.querySelector(".showed_the_full_images").style.display = "flex";
        document.querySelector(".Saved_Portfolio_page").style.display = "none";
        document.querySelector('.showed_images_page_album_name').innerText = album_val;
        show_photo();
        // console.log(Get_full_data)

    }

    // console.log(e.target.id)

    // remove the selected item using close start

    if (e.target.classList[1] == "selected_item_close_button") {

        const portfolio_image_select_parents = document.querySelectorAll('.portfolio_image_select_parent');

        portfolio_image_select_parents.forEach(portfolio_image_select_parent => {

            portfolio_image_select_parent.classList.remove('portfolio_image_select_parent');

        });

        const portfolio_image_select_icons = document.querySelectorAll('.portfolio_image_select_icon');

        portfolio_image_select_icons.forEach(portfolio_image_select_icon => {

            portfolio_image_select_icon.classList.remove('portfolio_image_select_icon');

        });

        document.querySelector(".selected_edit_delete").style.bottom = "-62px";
        document.querySelector(".selected_edit_delete").style.transition = "1s";
        selected_item = 0


        
    }

    // remove the selected item using close end


})



const choose_file_images = document.getElementById('choose_file_image');


choose_file_images.addEventListener("click", function (e) {
    album_name_input_value = _('album_name_input').value;

    if (album_name_input_value == "") {
        e.preventDefault();
        document.querySelector('.album_name_input_error').style.display = "block";
    }
    if (album_name_input_value != "") {
        document.querySelector('.album_name_input_error').style.display = "none";
        choose_file_images.addEventListener("change", choose_file_image_function);

    }

})

// rename album put the request start 



// rename album put the request end 


document.querySelector(".main_Portfolio_album_page").addEventListener("click", function (e) {
    console.log(e.target.className)

    if (e.target.id == "edited_album_saved") {
        document.querySelector(".main_Portfolio_album_page").style.display = "none";
        console.log("saved name ", edited_album_name)
        document.querySelector(".Saved_Portfolio_page").style.display = "block";
    }

    if (e.target.classList[0] == "Add_Album_icon") {
        console.log("hello");
    }

    if (e.target.classList[0] == "Saved_albums") {
        document.querySelector(".click_the_image_to_view").style.display = "flex"
    }
})




// marketer pop_up


function checked(ele){
    ele.classList.toggle("pop_up_page_share_marketers_select");
}

document.querySelector(".pop_up_page_share").addEventListener("click", function (e) {
    console.log(e.target)
   

    

    if (e.target.id == "pop_up_page_share_close") {
        document.querySelector(".backdrop_share").style.display = "none";
        document.querySelector(".Saved_Portfolio_page").style.display = "block";
        // let MarketEle = document.querySelector('.pop_up_page_share_marketers')
        // MarketEle.innerHTML = "";
    }

    // marketer search

    let  searchBox = _('marketer_name_search');

    let searched_marketerer = function(){
    let    filter_marketer = [];
    let val = searchBox.value;
    console.log(val);
    // console.log(marketerer_values_to_show.MarketerData[0].Mname = "jaya");
    console.log(marketerer_values_to_show.MarketerData)
    marketerer_values_to_show.MarketerData.forEach(e => {

        if(e.Mname.toLowerCase().includes(val.toLowerCase())){
            console.log(filter_marketer.unshift(e.Mname))
        }
        console.log(filter_marketer)
    });
    }
    document.getElementById("marketer_name_search").addEventListener("input",searched_marketerer)

})











// Double click album open   function





document.querySelectorAll(".saved_portfolio_image").forEach(function (eachProfile) {
    eachProfile.addEventListener("click", function () {
        console.log(this.querySelector(".saved_portfolio__content h2").innerText)
    })
})


// create Album Elements


let create_Album_Elements_count = 0
let create_Album_name_count = 0


function create_Album_Elements() {


    var temp = document.querySelector("template");
    temp.content.querySelector(".saved_portfolio_image").setAttribute("class", `saved_portfolio_image saved_portfolio_image_${create_Album_Elements_count += 1}`)
    temp.content.querySelector(".saved_portfolio__content_album_name").setAttribute("class", `saved_portfolio__content_album_name saved_portfolio__content_album_name${create_Album_name_count += 1}`)

    var clon = temp.content.cloneNode(true);
    document.querySelector(".saved_portfolio_images").appendChild(clon);



}

// create_Album_Elements();




// show photos

let ordered_photo_album = "";

let temp3 = "";

let Saved_album_image = "";

let edited_album_photo = "";

function show_photo(clickedImageVal){

    console.log(post_res)
    post_res.forEach(function(eachAlbum){
        Object.keys(eachAlbum).forEach(function(key) {
            console.log(key,','+album_val)

            if(key == album_val){
                // console.log(e[key][0])

                let parentEle = document.querySelector(".showed_images");
               

                parentEle.innerHTML = "";
                for (let i = 0; i < eachAlbum[key].length; i++) {

                    const Saved_album_image = eachAlbum[key][i];
                    console.log(Saved_album_image);
                    
                    // temp3 = document.querySelector(".template_3");
                    // temp3.content.querySelector("a").setAttribute("href", `url(data:image/jpeg;base64,${Saved_album_image})`)
                    // temp3.content.querySelector("img").setAttribute("src", `url(data:image/jpeg;base64,${Saved_album_image})`);
                    // var clon = temp3.content.cloneNode(true);
                    // document.querySelector(".showed_images").appendChild(clon);
    
                    
                    let Image = document.createElement("div");
                    Image.setAttribute("class","showed_album_image");
                    Image.setAttribute("id",`showed_album_image_${i}`);
                    parentEle.appendChild(Image);
                    // parentEle.appendChild(Image);
                    
                    _(`showed_album_image_${i}`).style.backgroundImage = `url(data:image/jpeg;base64,${Saved_album_image})`;
                }
                album_val = "";
            }


            if(key == album_name){
                // console.log(e[key][0])

                let parentEle = document.querySelector(".showed_images");

                parentEle.innerHTML = "";
                for (let i = 0; i < eachAlbum[key].length; i++) {

                    const Saved_album_image = eachAlbum[key][i];
                    console.log(Saved_album_image);
                    
                    let Image = document.createElement("div");
                    Image.setAttribute("class","showed_album_image");
                    Image.setAttribute("id",`showed_album_image_${i}`);
                    parentEle.appendChild(Image);


                    _(`showed_album_image_${i}`).style.backgroundImage = `url(data:image/jpeg;base64,${Saved_album_image})`;
                }

                album_name = "";
            }

            if(key == ordered_photo_album){

                // console.log(e[key][0])

                let main_swiperEle = document.querySelector(".slide-container");

                main_swiperEle.innerHTML = "";
                for (let i = 0; i < eachAlbum[key].length; i++) {

                    Saved_album_image = eachAlbum[key][i];
                    console.log(Saved_album_image);
                    
                    let swiper_photo = document.createElement("div");
                    swiper_photo.setAttribute("class","slide");
                    swiper_photo.setAttribute("id",`main_path_${i}`);
                    
                    main_swiperEle.appendChild(swiper_photo);


                    _(`main_path_${i}`).style.backgroundImage = `url(data:image/jpeg;base64,${Saved_album_image})`;

                    // console.log(eachAlbum[key].length)

                
                }

                    slides = document.querySelectorAll('.slide');


                    let left_button = document.createElement('button');
                    left_button.setAttribute("class","arrow left-arrow");
                    left_button.setAttribute("id","left");

                    let leftI = document.createElement("i");
                    leftI.setAttribute("class","fa-solid fa-chevron-left");
                    left_button.appendChild(leftI);
                    
                    let right_button = document.createElement('button');
                    right_button.setAttribute("class","arrow right-arrow");
                    right_button.setAttribute("id","right");

                    let rightI = document.createElement("i");
                    rightI.setAttribute("class","fa-solid fa-chevron-right");
                    right_button.appendChild(rightI);
                    main_swiperEle.appendChild(left_button);
                    main_swiperEle.appendChild(right_button);

                ordered_photo_album = "";
            }

            if(key == edited_album_name){
                
                _('edited_album_name').value = edited_album_name;

                document.querySelectorAll(".saved_images").forEach(ele => ele.remove())
                
            
                for (let i = 0; i < eachAlbum[key].length; i++) {

                    temp3 = document.querySelector(".template_3");
                    temp3.content.querySelector(".Saved_albums").setAttribute("class", "Saved_albums saved_images")
                    temp3.content.querySelector(".photo_portfolio_image").setAttribute("id", `photo_portfolio_image${i}`)
                    // temp3.content.querySelector("img").setAttribute("src", `url(data:image/jpeg;base64,${Saved_album_image})`);
                    var clon = temp3.content.cloneNode(true);
                    document.querySelector(".Portfolio_album_page").appendChild(clon);


                    Saved_album_image = eachAlbum[key][i];


                    _(`photo_portfolio_image${i}`).style.backgroundImage = `url(data:image/jpeg;base64,${Saved_album_image})`;

                    // console.log(eachAlbum[key].length)

                
                }


                // console.log(document.querySelectorAll(".saved_images").forEach(ele => ele.remove()));;
                    

                    // edited_album_name = "";
            }

            

          
          });
    })
    // let single_photo_res = [];

    // let single_photo_show = function(){

    //     single_photo_res = JSON.parse(JSON.stringify(post_res));
    //     single_photo_res.forEach(function(single_photo){
    //         Object.keys(single_photo).forEach(function(key){
    //             if(key == ordered_photo_album){
    //                 // console.log(e[key][0])
    
    //                 let swiperEle = document.querySelector(".swiper-wrapper");
    
    //                 swiperEle.innerHTML = "";
    //                 for (let i = 0; i < eachAlbum[key].length; i++) {
    
    //                     const Saved_album_image = eachAlbum[key][i];
    //                     console.log(Saved_album_image);
                        
    //                     let swiper_photo = document.createElement("div");
    //                     swiper_photo.setAttribute("class","swiper-slide");
    //                     swiper_photo.setAttribute("id",`swiper-slide_${i}`);
    //                     swiperEle.appendChild(swiper_photo);
    
    //                     _(`swiper-slide_${i}`).style.backgroundImage = `url(data:image/jpeg;base64,${Saved_album_image})`;
    
    //                     // console.log(eachAlbum[key].length)
    //                 }
    //                 ordered_photo_album = "";
    //             }
    //         })
    //     })

    // }

    // show the photos ordered

    let clickedImage = "";
    document.querySelectorAll('.showed_album_image').forEach(function(show_albums){
        show_albums.addEventListener("click",function(e){

            console.log(e.target.parentNode.parentNode.parentNode);
            ordered_photo_album = e.target.parentNode.parentNode.parentNode.querySelector('.showed_images_page_album_name').innerText;
            clickedImage = e.target.style.backgroundImage;
            show_photo();
            document.querySelectorAll('.slide').forEach(function(each_one_swiper){
                console.log(each_one_swiper)
                if(each_one_swiper.style.backgroundImage == clickedImage){
                    // each_one_swiper.style.display = "block";
                    each_one_swiper.classList.add('active');
                }
            })
            document.querySelector('.click_the_image_to_view').style.display = "flex";
           
        })
    })
}

// let photosOfSwiper = "";
// let left_photosOfSwiper = "";
// document.querySelector('.right_arrow').addEventListener("click",function(e){
//     // console.log(each_one_swiper.target.previousElementSibling);
//     photosOfSwiper = e.target.previousElementSibling.querySelectorAll('.main_swiper')
//     for (let i = 0; i < photosOfSwiper.length; i++) {
//         const element = photosOfSwiper[i];
//         console.log(element);
//         if(element.nextElementSibling == null){
//             document.querySelector('.right_arrow').style.opacity = "0";
//            break;
//         }
//         if(element.style.display == "block"){
//             element.style.display = "none";
//             element.nextElementSibling.style.display = "block";
//             break;
//             // console.log(ele.nextElementSibling)
//         }
//     }
// })
// document.querySelector('.left_arrow').addEventListener("click",function(e){
    // left_photosOfSwiper = e.target.nextElementSibling.querySelectorAll('.slide')
//     console.log(left_photosOfSwiper);
//     for (let i = 0; i < left_photosOfSwiper.length; i++) {
//         const element = left_photosOfSwiper[i];
//         console.log(element);
//         if(element.style.display == "block"){
//             element.style.display = "none";
//             element.previousElementSibling.style.display = "block";
//             break
//             // console.log(ele.nextElementSibling)
//         }

//     }

// })

// const  slides = document.querySelectorAll('.slide');
// const  leftBtn = document.getElementById('left');
// const  rightBtn = document.getElementById('right');


// console.log(rightBtn)
// let activeSlide = 0;

// rightBtn.addEventListener('click', () => {
//     console.log("hello");
//     activeSlide++;

//     if(activeSlide > slides.length -1){
//         activeSlide = 0;
//     }

//     setActiveSlide();
    
// })
// leftBtn.addEventListener('click', () => {
//     activeSlide--;

//     if(activeSlide  < 0){
//         activeSlide = slides.length-1;
//     }

//     setActiveSlide();
// })
// / Zoom in Zoom out image  close

let backgroundsize = 100;
let difference = 5;
let backgroundzoomImage = 0;
let backgroundzoom_out_Image = 0;
let activeSlide = 0;
var  slides ;
console.log(document.querySelectorAll('.slide'))

document.querySelector(".click_the_image_to_view").addEventListener("click", function(e) {
    console.log(slides)

    if(e.target.className == "click_the_image_to_view"){
        document.querySelector(".click_the_image_to_view").style.display = "none";
        document.querySelector(".main_Portfolio_album_page").style.display = "block";
    }

    if (e.target.parentNode.className == "close_the_image") {
        document.querySelector(".click_the_image_to_view").style.display = "none";
        document.querySelector(".main_Portfolio_album_page").style.display = "block";
        // document.querySelector('.swiper').innerHTML ="";

    }

    if(e.target.id == "right"){
        console.log("hello");
        activeSlide++;

        if(activeSlide > slides.length -1){
            activeSlide = 0;
        }

        setActiveSlide();
    
    }

    if(e.target.id == "left"){
        activeSlide--;

        if(activeSlide  < 0){
            activeSlide = slides.length-1;
        }
    
        setActiveSlide();
    }

    if(e.target.innerText == "zoom_in"){
        // zoomin(e.target);
    }
    if(e.target.innerText == "zoom_out"){
        // zoomout(e.target);
    }

    

})

function setActiveSlide(){
    console.log(slides)
    slides.forEach((slide) => slide.classList.remove('active'));

    slides[activeSlide].classList.add('active'); 
    console.log(slides[activeSlide])
}

// function zoomin(zoomImage) {

//     console.log()
//     if (backgroundsize < 200){
//         backgroundzoomImage = backgroundsize + difference

//         document.querySelector(".swiper-slide-active").style.backgroundSize = backgroundzoomImage + "%";

//         backgroundsize = backgroundzoomImage;

//     }
//     else {
//         document.querySelector(".swiper-slide-active").style.backgroundSize = "80%";
//         backgroundsize = 100;    
//     }
//     // console.log(document.querySelector(".swiper-slide_1").style.backgroundSize)
// }

// function zoomout() {
//     if (backgroundsize > 100) {
//         console.log(backgroundsize)
//         backgroundzoom_out_Image = backgroundsize - difference

//         document.querySelector(".swiper-slide-active").style.backgroundSize = backgroundzoom_out_Image + "%";

//         backgroundsize = backgroundzoom_out_Image;
        

//     }
//     else {
//         document.querySelector(".swiper-slide-active").style.backgroundSize = "80%";
//         backgroundsize = 100;
//     }
// }




// Add_The_Marketers start
function Add_The_Marketers(){
    document.querySelector('.Marketers_Full_Page').style.display = "flex";
    document.querySelector('.portfolio_page_2').style.display = "none";
}
// Add_The_Marketers end