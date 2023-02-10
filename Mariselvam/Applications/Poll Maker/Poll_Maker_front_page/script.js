
function _(id) {

    return document.getElementById(id)

}

document.querySelector(".Poll_Visibility").addEventListener("click", function (e) {

    if (e.target.className == "poll_visibility_input") {

        document.querySelector(".Poll_options").classList.toggle("show_Poll_Options");

    }

    if (e.target.className == "Public") {

        document.querySelector(".Poll_Visibility_value").textContent = "Public";

        document.querySelector(".Poll_options").classList.remove("show_Poll_Options");
    }

    if (e.target.className == "Private") {

        document.querySelector(".Poll_Visibility_value").textContent = "Private";

        document.querySelector(".Poll_options").classList.remove("show_Poll_Options");

    }
})

let saved_option = "";

let option_Arr = [];

let Question_value = "";

let created_poll_datas = {};

let voted_for;

let show_option_html = document.querySelector(".chosed_options");

document.querySelector(".create_poll").addEventListener("click", function (e) {

    let option1_Value = document.querySelector(".option_1").value;

    let option2_Value = document.querySelector(".option_2").value;

    Question_value = document.querySelector(".Qus_val").value;




    document.querySelector(".Show_Options").innerHTML = "";

    document.querySelectorAll(".options_val").forEach(function (e) {

        if (e.value != "") {

            const clone = show_option_html.cloneNode(true);

            document.querySelector(".Show_Options").appendChild(clone);
            option_Arr.push(e.value);
        }

    })

    document.querySelectorAll(".chosed_options").forEach(function (e) {


        e.addEventListener("click", function (e) {


            document.querySelectorAll(".before_check").forEach(function (e) {

                e.style.display = "none";
                e.style.opacity = "0";

            })

            document.querySelectorAll(".h3_round").forEach(function (e) {

                e.style.border = "2px solid rgb(120, 119, 119)";

            })

            document.querySelectorAll(".chosed_options").forEach(function (e) {

                e.style.left = "0px";
                e.style.border = "none";

            })

            if (e.target.className == "options_Value") {

                saved_option = e.target.value;
                console.log(saved_option)

            }

            if (e.target.className == "h3_round") {

                saved_option = e.target.nextElementSibling.value;
                console.log(saved_option)

            }

            if (e.target.className == "chosed_options") {

                saved_option = e.target.querySelector(".options_Value").value;
                console.log(saved_option)

            }

            if ((e.target.parentNode.className == "chosed_options")) {


                e.target.parentNode.querySelector(".before_check").style.display = "block";

                e.target.parentNode.querySelector(".h3_round").style.border = "none";


                e.target.parentNode.querySelector(".before_check").style.opacity = "1";

                e.target.parentNode.style.left = "30px";

                e.target.parentNode.style.border = "2px solid #75eeb9";



            }

            if ((e.target.parentNode.className == "h3_round")) {

                e.target.parentNode.parentNode.querySelector(".before_check").style.display = "block"

                e.target.parentNode.parentNode.querySelector(".h3_round").style.border = "none";


                e.target.parentNode.parentNode.querySelector(".before_check").style.opacity = "1";

                e.target.parentNode.parentNode.style.left = "30px";

                e.target.parentNode.parentNode.style.border = "2px solid #75eeb9";

            }



            if ((e.target.parentNode.className == "Show_Options")) {


                e.target.querySelector(".before_check").style.display = "block"

                e.target.querySelector(".h3_round").style.border = "none";


                e.target.querySelector(".before_check").style.opacity = "1";

                e.target.style.left = "30px";

                e.target.style.border = "2px solid #75eeb9";

            }




        });

    })



    if ((option1_Value != "") & (option2_Value != "") & (Question_value != "")) {

        created_poll_datas = {

            "Poll_Question": Question_value,
            "Visibility": 1

        }

        document.querySelector(".Question_of_poll").textContent = Question_value;

        document.querySelector(".Poll_created_successful").style.display = " flex";

        document.querySelectorAll(".options_Value").forEach(function (e, i) {

            e.value = option_Arr[i];

            created_poll_datas[`option${++i}`] = e.value;

            console.log(created_poll_datas)
        })

        document.querySelector(".main").style.display = "none";


        // Fetch Call of the Poll maker

        // send the option and question


        let create_poll_url = "";


        fetch(create_poll_url, {

            method: "POST",

            Headers: {
                Accept: 'application.json',
                'Content-Type': 'applicaton/json'
            },

            body: created_poll_datas

        })

            .then(ele => {

                return ele.json();

            })

            .then(res => {

                console.log(res);

            })


    }

    if ((option1_Value == "") & (option2_Value == "") & (Question_value == "")) {

        document.querySelectorAll(".error_Msg_Question").forEach(element => {

            element.style.display = "block";

        })

    }

    if ((option1_Value == "")) {

        document.querySelector(".option_1_error").style.display = "block";

    }

    if ((option2_Value == "")) {

        document.querySelector(".option_2_error").style.display = "block";

    }

    if ((Question_value == "")) {

        document.querySelector(".Qus_val_error").style.display = "block";

    }

    if ((option1_Value != "")) {

        document.querySelector(".option_1_error").style.display = "none";

    }

    if ((option2_Value != "")) {

        document.querySelector(".option_2_error").style.display = "none";

    }

    if ((Question_value != "")) {

        document.querySelector(".Qus_val_error").style.display = "none";

    }

    document.querySelector(".Qus_val").addEventListener("focus", function (e) {

        if (e.target.value == "") {

            document.querySelector(".Qus_val_error").style.display = "block";
            document.querySelector(".Qus_val").style.boxShadow = "red 0px 4px 12px";
            document.querySelector(".Qus_val").style.border = "2px solid #ff243e";

        }

        if (e.target.value != "") {

            document.querySelector(".Qus_val_error").style.display = "none";
            document.querySelector(".Qus_val").style.boxShadow = "#53C1FF 0px 4px 12px";
            document.querySelector(".Qus_val").style.border = "2px solid #53C1FF";

        }
    })

    document.querySelector(".Qus_val").addEventListener("focusout", function (e) {

        if (e.target.value == "") {

            document.querySelector(".Qus_val_error").style.display = "block";
            document.querySelector(".Qus_val").style.boxShadow = "red 0px 4px 12px";
            document.querySelector(".Qus_val").style.border = "2px solid #ff243e";

        }
        if (e.target.value != "") {

            document.querySelector(".Qus_val_error").style.display = "none";
            document.querySelector(".Qus_val").style.boxShadow = "";
            document.querySelector(".Qus_val").style.border = "";

        }
    })

    document.querySelector(".option_1").addEventListener("focus", function (e) {

        if (e.target.value == "") {

            document.querySelector(".option_1_error").style.display = "block";
            document.querySelector(".option_1").style.boxShadow = "red 0px 4px 12px";
            document.querySelector(".option_1").style.border = "2px solid #ff243e";

        }

        if (e.target.value != "") {

            document.querySelector(".option_1_error").style.display = "none";
            document.querySelector(".option_1").style.boxShadow = "#53C1FF 0px 4px 12px";
            document.querySelector(".option_1").style.border = "2px solid #53C1FF";

        }
    })

    document.querySelector(".option_1").addEventListener("focusout", function (e) {

        if (e.target.value == "") {

            document.querySelector(".option_1_error").style.display = "block";
            document.querySelector(".option_1").style.boxShadow = "red 0px 4px 12px";
            document.querySelector(".option_1").style.border = "2px solid #ff243e";

        }

        if (e.target.value != "") {

            document.querySelector(".option_1_error").style.display = "none";
            document.querySelector(".option_1").style.boxShadow = "";
            document.querySelector(".option_1").style.border = "";

        }

    })

    document.querySelector(".option_2").addEventListener("focus", function (e) {

        if (e.target.value == "") {

            document.querySelector(".option_2_error").style.display = "block";
            document.querySelector(".option_2").style.boxShadow = "red 0px 4px 12px";
            document.querySelector(".option_2").style.border = "2px solid #ff243e";

        }

        if (e.target.value != "") {

            document.querySelector(".option_2_error").style.display = "none";
            document.querySelector(".option_2").style.boxShadow = "#53C1FF 0px 4px 12px";
            document.querySelector(".option_2").style.border = "2px solid #53C1FF";

        }
    })

    document.querySelector(".option_2").addEventListener("focusout", function (e) {

        if (e.target.value == "") {

            document.querySelector(".option_2_error").style.display = "block";
            document.querySelector(".option_2").style.boxShadow = "red 0px 4px 12px";
            document.querySelector(".option_2").style.border = "2px solid #ff243e";

        }

        if (e.target.value != "") {

            document.querySelector(".option_2_error").style.display = "none";
            document.querySelector(".option_2").style.boxShadow = "";
            document.querySelector(".option_2").style.border = "";

        }
    })


})


// create poll options html

function create_poll_options() {

    let formEle = document.querySelector("form");

    let parentEle = document.createElement("div");
    parentEle.setAttribute("class", "Add_Poll_Question__options poll_options");

    let labelEle = document.createElement("label");
    labelEle.textContent = "Poll option";

    let option_input_box = document.createElement("input");
    option_input_box.setAttribute("class", "options_val")
    option_input_box.setAttribute("placeholder", `Eg. Option${options_count}`);


    parentEle.appendChild(labelEle);
    parentEle.appendChild(option_input_box);

    formEle.appendChild(parentEle);
}

let options_count = 2;

document.querySelector(".Add_Another_option").addEventListener("click", function (e) {

    options_count++;
    create_poll_options();
    
})



// submit the poll 


// show_the_result_poll

let show_chose_option_html = document.querySelector(".result_of_options")

function show_result_of_chose() {

    const clone = show_chose_option_html.cloneNode(true);

    document.querySelector(".Show_Results").appendChild(clone);

}


let Voted_value_url = ""

let voted_value_object = {};

document.querySelector(".submit_your_vote_first").addEventListener("click", function (e) {


    let length_of_chosed_options = document.querySelectorAll(".chosed_options").length


    document.querySelector(".After_Question_of_poll").textContent = Question_value;


    document.querySelector(".Show_Results").innerHTML = "";

    for (let i = 0; i < length_of_chosed_options; i++) {
        show_result_of_chose();
    }



    document.querySelectorAll(".show_result_value").forEach(function (e, i) {

        e.textContent = option_Arr[i];

        voted_for = saved_option;

        voted_value_object.Answer_of_poll = voted_for;


        if (e.textContent == voted_for) {

            e.nextElementSibling.textContent = "100%";

            e.parentNode.parentNode.querySelector(".percentage_border").style.border = "3px solid #4AD97F";

            e.parentNode.parentNode.querySelector(".votes_count").textContent = "1";
        }

    })

    fetch(Voted_value_url, {

        method: "POST",

        Headers: {
            Accept: 'application.json',
            'Content-Type': 'applicaton/json'
        },

        body: voted_value_object

    })

        .then(ele => {

            return ele.json();

        })

        .then(res => {

            console.log(res)

        })


    document.querySelector(".Poll_created_successful").style.display = "none";
    document.querySelector(".After_Poll_created_successful").style.display = "flex";
    document.querySelector(".jump_to_result").style.display = "flex";
    document.querySelector(".jumped_result_submit").style.display = "none";
    document.querySelector(".result_of_vote").textContent = "1";


    // checkCookie();
})

document.querySelector(".direct_jump_result").addEventListener("click", function (e) {

    document.querySelector(".Poll_created_successful").style.display = "none";
    document.querySelector(".After_Poll_created_successful").style.display = "flex";
    document.querySelector(".jump_to_result").style.display = "flex";

})

document.querySelector(".jumped_result_submit").addEventListener("click", function (e) {

    document.querySelector(".Poll_created_successful").style.display = "flex";
    document.querySelector(".After_Poll_created_successful").style.display = "none";
    document.querySelector(".jump_to_result").style.display = "none";

})


// formulae



// The percent of votes for a candidate (C) equals the number of votes for the candidate (V) divided by the total number of votes (T). Multiply by 100 to get the percentage of votes for the candidate or ballot option.

// Vote Percentage Formula
// C = V/T × 100




// Set the cookies of Poll maker;

let setCookie = function (cname, cvalue, exdays) {

    const date_val = new Date();

    date_val.setTime(date_val.getTime() + (exdays * 24 * 60 * 60 * 1000));

    let expires = "expires=" + date_val.toUTCString();

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";

}

let getCookie = function (cname) {

    let name = cname + "=";

    let decodeedCookie = decodeURIComponent(document.cookie);

    let ca = decodeedCookie.split(";");

    for (let i = 0; i < ca.length; i++) {
        const element = ca[i];

        while (element.charAt(0) == " ") {
            element = element.substring(1);
        }

        if (element.indexOf(name) == 0) {
            return element.substring(name.length, element.length);
        }

    }

    return "";
}


let checkCookie = function () {

    let user = getCookie("username");

    if (user != "") {

        document.querySelector(".Poll_created_successful").style.display = "none";
        document.querySelector(".main").style.display = "none";
        document.querySelector(".jump_to_result").style.display = "flex";
        document.querySelector(".After_Poll_created_successful").style.display = "flex";

    }

    else {

        user = "Valid_user";

        if (user != "" & user != null) {

            setCookie("username", user, 30);

        }
        document.querySelector(".Poll_created_successful").style.display = "none";
        document.querySelector
    }
}


document.querySelector(".Share_link").addEventListener("click", function () {

    document.querySelector(".Pop_up_of_Share_link").style.display = "flex";

})


document.querySelector(".Pop_up_of_Share_link").addEventListener("click", function (e) {

    if (e.target.innerText == "close") {

        document.querySelector(".Pop_up_of_Share_link").style.display = "none";

    }

    if(e.target.className == "copy_result_link"){

        _("result_val").select();


        _("result_val").setSelectionRange(0, 99999);



        let copied = e.target.previousElementSibling.value;

        navigator.clipboard.writeText(copied);

    }

    if(e.target.className == "copy_vote_link"){

        _("vote_val").select();

        _("vote_val").setSelectionRange(0, 99999);

        let copied = e.target.previousElementSibling.value;

        navigator.clipboard.writeText(copied);

    }

})




document.querySelector(".Poll_created_successful").style.display = "none";
document.querySelector