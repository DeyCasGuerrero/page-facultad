const optionMenu = document.querySelector(".language-container"),
selecBtn = optionMenu.querySelector(".select-btn"),
options = optionMenu.querySelectorAll(".option"),
sBtn_btn = optionMenu.querySelector(".sBtn-text");

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    const requestJson = await fetch(`../assets/languages/${language}.json`)
    const texts = await requestJson.json();

    for(const textToChange of textsToChange ){
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        console.log(section, value);

        textToChange.innerHTML=texts[section][value];
    }
}

flagsElement.addEventListener("click", (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});

selecBtn.addEventListener("click", function(){
    optionMenu.classList.toggle("active");
});

options.forEach(option =>{
    option.addEventListener("click" , function(){
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_btn.innerText = selectedOption;
        console.log(selectedOption);
        optionMenu.classList.remove("active");
    });
});

flagsElement.addEventListener("click", function(){
    console.log("SE DIO CLICK EN LA BANDERA")
})




