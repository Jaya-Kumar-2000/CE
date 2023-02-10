
function _(id){
    return document.getElementById(id)
}

let renamed_Value='';
let album_name_input_value ="";


                                // Album images are stored

document.querySelector(".adding_album_images").addEventListener("click",function(e){
    // console.log(e.target.classList)

    try{
        document.querySelector(".show_rename_delete").classList.remove('show_rename_delete');
    }
    catch(error){
        console.log(error)
    }

                                // three dot icon
    if(e.target.classList[0] == 'material-symbols-outlined'){
        // console.log("hello")
        e.target.previousElementSibling.previousElementSibling.classList.add('show_rename_delete');
         renamed_Value = e.target.parentNode.querySelector('.created_album_name')

    }



    if((e.target.id) == 'image_1'){
        e.target.parentNode.parentNode.remove(); 
        // console.log(e.target.parentNode.parentNode.parentNode)
    }
    if((e.target.id) == 'image_2'){
        e.target.parentNode.parentNode.remove(); 
    }
    if((e.target.id)== 'rename_1') {
        // console.log(e.target.id);
        document.querySelector('.backdrop').style.display = "flex";

    }  
    if((e.target.id)== 'rename_2') {
        // console.log(e.target.id);
        document.querySelector('.backdrop').style.display = "flex";

    }  

                        // Stored album image in create album button

    if(e.target.classList[0] == 'adding_create_album'){
        document.querySelector('.adding_album_images').style.display ="none";
        document.querySelector('.album_section').style.display = "flex";
        // document.querySelector('.create_album_page').style.display = "flex";
        document.querySelector('.Album_add_photos').style.display = "flex";
        document.querySelector('.album_name_input_error').style.display = "none";    

    }

})


                        // Main create album page & button

document.querySelector('.create_album_page').addEventListener("click",function(e){
    console.log(e.target.classList);

    if(e.target.classList[0] == "before_add_create_album"){
        document.querySelector('.Album_add_photos').style.display = "flex";
        document.querySelector('.album_section').style.display = "flex";
        document.querySelector('.create_album_page').style.display = "none"

    }
})


// Add photos click button

document.querySelector('.add_photos_button_click').addEventListener('click',function(){

    album_name_input_value = _('album_name_input').value;

    if(album_name_input_value == ""){
        document.querySelector('.album_name_input_error').style.display = "block";    
    }
    if(album_name_input_value != ""){
        document.querySelector('.album_name_input_error').style.display = "none";   
    }

    // putImage();
})


                       // Album add photos & videos page and button

document.querySelector('.Album_add_photos').addEventListener("click",function(e){
    // console.log(e.target.classList[0])
    // console.log(_('album_name_input').value)
    


    if(e.target.parentNode.classList[0] == "Album_add_photos"){
        console.log(e.target.parentNode.classList[0])  
        document.querySelector('.Album_add_photos').style.display = "none";
        document.querySelector('.adding_album_images').style.display ="flex";
        document.querySelector('.album_section').style.display = "none";

    }


})





                        // Album rename_button  also pop_up_done_button

document.querySelector('.album_pop_up_done').addEventListener("click",function(){
    let album_pop_up_done =  _('rename_input').value

    console.log("hello")

    if(album_pop_up_done != ""){
        // console.log(e.target.parentNode.querySelector('.created_album_name'))
        renamed_Value.innerText = album_pop_up_done;
        document.querySelector('.backdrop').style.display = "none";
        
    }
    if(album_pop_up_done == ""){
        document.querySelector('.rename_album_name_error').style.display = "block";
    }
    else{
        document.querySelector('.rename_album_name_error').style.display = "none";
    }
    _('rename_input').value = "";
    // document.querySelector('.rename_album_name_error').style.display = "none";

})

                       // dropfilter cancel button

document.querySelector('.album_pop_up_cancel').addEventListener("click",function(){
    document.querySelector('.backdrop').style.display = "none";
    document.querySelector('.rename_album_name_error').style.display = "none";

})

let photo= "";

let album_name = '';

let choose_file_image_function =  function(){
    const  reader = new FileReader();
    reader.addEventListener("load", function(){

        let uploadedImage = reader.result;

        document.querySelector('.adding_album_images').style.display ="flex";
        document.querySelector('.Album_add_photos').style.display = "none";
        document.querySelector('.album_section').style.display = "none";
        
        document.querySelector('.recent_album_image_1').style.backgroundImage = `url(${uploadedImage})`;
        
        console.log(uploadedImage)
			
        photo = document.getElementById("choose_file_image").files[0]; 
        album_name = document.getElementById('album_name_input').value
        let formData = new FormData(); 
        



        formData.append("photo", photo); 
        formData.append("album_name", album_name); 
        console.log(formData.get("photo"))
        fetch('http://172.24.250.68:9876/FileSender/Filereceiver', {method: "POST", body: formData, mode: "no-cors"});

        });

        

    reader.readAsDataURL(this.files[0]);
    // console.log(photo)
    



    
}





const choose_file_images = document.getElementById('choose_file_image');

// choose_file_images.addEventListener("change",choose_file_image_function)

choose_file_images.addEventListener("click",function(e){
    album_name_input_value = _('album_name_input').value;

    if(album_name_input_value == ""){
        e.preventDefault();
        document.querySelector('.album_name_input_error').style.display = "block";    
    }
    if(album_name_input_value != ""){
        // _('choose_file_image').disabled = false;
        document.querySelector('.album_name_input_error').style.display = "none";   
        choose_file_images.addEventListener("change",choose_file_image_function);
        document.querySelector('.created_album_name').textContent = album_name_input_value;

        // document.querySelector('.adding_album_images').style.display ="flex";
        // document.querySelector('.Album_add_photos').style.display = "none";
        // document.querySelector('.album_section').style.display = "none";





    }
    
})



/* Saved_Portfolio_page start*/

document.querySelector('.Saved_Portfolio_page').addEventListener("click", function(e){
    console.log(e.target)

    if(e.target.classList[1] == 'select_icon'){
        e.target.parentNode.parentNode.classList.toggle('portfolio_image_select_parent');

        e.target.classList.toggle('portfolio_image_select_icon');
    }

    // saved_portfolio_rename_delete

    try{
        document.querySelector(".show_portfolio_rename_delete").classList.remove('show_portfolio_rename_delete');
    }
    catch(error){
        console.log(error)
    }


    if(e.target.classList[1] == 'share_delete'){
        console.log(e.target);
        e.target.parentNode.nextElementSibling.classList.add('show_portfolio_rename_delete');
    }



})




