
let Mode_Change = () => {
    document.querySelector(".XF-sign_up_mode").classList.toggle("d-mode_to_l-mode");
    document.querySelector(".XF-mode_icon").classList.toggle("icon_color");

    let checked = document.getElementById("mode").checked;


    console.log(checked)

    if (checked) {
        document.documentElement.setAttribute('data-theme', 'light');

        localStorage.setItem("theme", "light");
    }

    else {
        document.documentElement.setAttribute('data-theme', 'dark');

        localStorage.setItem("theme", "dark");
    }

    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

    }

}


document.querySelector(".XF-sign_up_mode").addEventListener("click", Mode_Change);






document.querySelector(".XF-Sign_up_btn").addEventListener("click", () => {
    let form = document.getElementById("form");

    let formdata = new FormData(form);

    for (const [key, value] of formdata) {
        console.log(key, value);
    }
})