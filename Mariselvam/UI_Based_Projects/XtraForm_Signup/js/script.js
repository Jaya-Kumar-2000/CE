
let Mode_Change = () => {
    document.querySelector(".XF-sign_up_mode").classList.toggle("d-mode_to_l-mode");
    document.querySelector(".XF-mode_icon").classList.toggle("icon_color");

    let checked = document.getElementById("mode").checked;


    console.log(checked)
    // if (checked) {
    //     document.querySelectorAll('.dark_mode').forEach(function(e){
    //         e.classList.remove("dark_mode");
    //         e.classList.add("light")
    //     });
    //     document.querySelectorAll(".secondary_color").forEach(function(e){
    //         e.classList.remove("secondary_color")
    //         e.classList.add("secondary_color_change");
    //     })

    //     document.querySelectorAll(".Primary_Color").forEach(function(e){
    //         e.classList.remove("Primary_Color");
    //         e.classList.add("Primary_Color_Change")
    //     })

    //     document.querySelectorAll(".btn_text_color").forEach(function(e){

    //         e.classList.remove("btn_text_color");
    //         e.classList.add("btn_text_color_change");

    //     })
        
    //     document.querySelectorAll(".white_shadow").forEach(function(e){
    //         e.classList.add("dark_shadow");
    //     })

    // }
    // else{

    //     document.querySelectorAll('.light').forEach(function(e){
    //         e.classList.remove("light")
    //         e.classList.add("dark_mode");
    //     });
    //     document.querySelectorAll(".secondary_color_change").forEach(function(e){
    //         e.classList.remove("secondary_color_change")
    //         e.classList.add("secondary_color");
    //     })

    //     document.querySelectorAll(".Primary_Color_Change").forEach(function(e){
    //         e.classList.remove("Primary_Color_Change");
    //         e.classList.add("Primary_Color")
    //     })

    //     document.querySelectorAll(".btn_text_color_change").forEach(function(e){

    //         e.classList.remove("btn_text_color_change");
    //         e.classList.add("btn_text_color");

    //     })
    // }

}


document.querySelector(".XF-sign_up_mode").addEventListener("click", Mode_Change)