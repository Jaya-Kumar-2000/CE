function _(id){
    return document.getElementById(id)
}


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


// view the album

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


    

    


})


// images

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
                album_val = "";
            }


            if(key == album_name){
                

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
                    var clon = temp3.content.cloneNode(true);
                    document.querySelector(".Portfolio_album_page").appendChild(clon);


                    Saved_album_image = eachAlbum[key][i];


                    _(`photo_portfolio_image${i}`).style.backgroundImage = `url(data:image/jpeg;base64,${Saved_album_image})`;

                    

                
                }

            }

            

          
          });
    })

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


// click the image to view


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