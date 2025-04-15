function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    if (tabName === 'social') {
        document.querySelector('.tab-indicator').style.left = '0';
    } else {
        document.querySelector('.tab-indicator').style.left = '50%';
    }
}

document.getElementById("language-en").addEventListener("click", function () {
    changeLanguage("en");
});

document.getElementById("language-ru").addEventListener("click", function () {
    changeLanguage("ru");
});

function changeLanguage(language) {
    const elements = document.querySelectorAll("[data-lang-en], [data-lang-ru]");

    elements.forEach(element => {
        if (language === "en") {
            element.textContent = element.getAttribute("data-lang-en");
        } else {
            element.textContent = element.getAttribute("data-lang-ru");
        }
    });
}