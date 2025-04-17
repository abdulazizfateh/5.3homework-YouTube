const headerMenuBtnEl = document.querySelector(".header_nav_menu_btn");
const headerSearchInputEl = document.querySelector(".header_nav_search_input");
const headerVoiceBtnEl = document.querySelector(".header_nav_voice_btn");
const headerCreateBtnEl = document.querySelector(".header_nav_create_btn");
const headerNotBtnEl = document.querySelector(".header_nav_notification_btn");
const headerUserEl = document.querySelector(".header_nav_user");
const overlayEl = document.querySelector(".overlay");
const samelayEl = document.querySelector(".sameplay");
// console.log(headerMenuBtnEl);
// console.log(headerSearchInputEl);
// console.log(headerVoiceBtnEl);
// console.log(headerCreateBtnEl);
// console.log(headerNotBtnEl);
// console.log(headerUserEl);
// console.log(overlayEl);



// OVERLAY
const showOverlay = () => {
    overlayEl.classList.add("show");
}
const hideOverlay = () => {
    overlayEl.classList.remove("show");
}

overlayEl.addEventListener("click", () => {
    hideMenu();
    hideVoiceWindow();
})

// SAMELAY
const showSamelay = () => {
    samelayEl.classList.add("show");
}
const hideSamelay = () => {
    samelayEl.classList.remove("show");
}

samelayEl.addEventListener("click", () => {
    hideCreateWindow();
    hideNotWindow();
    hideUserWindow();
    not.src = "./assets/images/notification.svg";
})


// MENU WINDOW
const menuWindowEl = document.querySelector(".menu_window");
const menuWindowMenuBtn = document.querySelector(".menu_window_menu_btn");

const showMenu = () => {
    menuWindowEl.classList.add("show");
    showOverlay();
}

const hideMenu = () => {
    menuWindowEl.classList.remove("show");
    hideOverlay();
}

headerMenuBtnEl.addEventListener("click", () => {
    showMenu();
});

menuWindowMenuBtn.addEventListener("click", () => {
    hideMenu();
})




// VOICE
const voiceWindowEl = document.querySelector(".voice_window");
const voiceWindowHideBtn = document.querySelector(".voice_hide_btn");

const showVoiceWindow = () => {
    voiceWindowEl.classList.add("show");
    showOverlay();
}

const hideVoiceWindow = () => {
    voiceWindowEl.classList.remove("show");
    hideOverlay();
}

headerVoiceBtnEl.addEventListener("click", () => {
    showVoiceWindow();
});

voiceWindowHideBtn.addEventListener("click", () => {
    hideVoiceWindow();
})




// CREATE
const createWindowEl = document.querySelector(".create_window");

const showCreateWindow = () => {
    createWindowEl.classList.add("show");
    showSamelay();
}
const hideCreateWindow = () => {
    createWindowEl.classList.remove("show");
    hideSamelay();
}

headerCreateBtnEl.addEventListener("click", () => {
    showCreateWindow();
})





// NOTIFICATION
const notWindowEl = document.querySelector(".not_window");

const showNotWindow = () => {
    notWindowEl.classList.add("show");
    showSamelay();
}

const hideNotWindow = () => {
    notWindowEl.classList.remove("show");
    hideSamelay();
}

const not = document.querySelector("#not_image");

headerNotBtnEl.addEventListener("click", () => {
    showNotWindow();
    showSamelay();
    not.src = "./assets/images/notification-full.svg";
})




// USER
const userWindowEl = document.querySelector(".user_window");

const showUserWindow = () => {
    userWindowEl.classList.add("show");
    showSamelay();
}
const hideUserWindow = () => {
    userWindowEl.classList.remove("show");
    hideSamelay();
}

headerUserEl.addEventListener("click", () => {
    showUserWindow();
})