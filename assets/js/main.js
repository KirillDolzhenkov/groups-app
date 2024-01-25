import {createElement} from "./modules/createElement.js"



/*OpenSidebar*/

const ADDING_CONTACT = "Добавление контакта";
const CONTACT_GROUPS = "Группы контактов";

const modalBody = document.querySelector("#sidebar"); //sidebarMask!!!
/*const sidebarContent = document.querySelector("#sidebar-content");*/
const sidebarBody = document.querySelector("#sidebar-body");

const addContactBtn = document.querySelector("#add-contact-btn");
const groupsBtn = document.querySelector("#groups-btn");

addContactBtn.addEventListener("click", () => openSidebar(ADDING_CONTACT));
groupsBtn.addEventListener("click", () => openSidebar(CONTACT_GROUPS));




function openSidebar(title) {
    modalBody.classList.add("open");
    document.body.classList.add("stop-scrolling");

    /*sidebarContent.innerHTML = createSidebarEl(title);*/
    sidebarBody.innerHTML = createSidebarEl(title);
    generateButtons(title);
}

function closeSidebar() {
    modalBody.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
}

window.addEventListener("click", (e) => {
    if (e.target === modalBody) {
        closeSidebar();
    }
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeSidebar();
    }
});




function createSidebarEl(title) {

    return `
            <header class="sidebar-header">
                <h2 class="sidebar-title">${title}</h2>
                <button type="button" id="sidebar-close" class="sidebar-close">
                    <img src="./assets/icons/closeIcon.svg" alt="close-icon">
                </button>
            </header>
            
            <main class="sidebar-main" >
                ${title === CONTACT_GROUPS
                    ? `<div class="sidebar-main-container">
                            <ul id="groups-container" class="groups-container"></ul>
                       </div>`
                    : ""
                }
                ${title === ADDING_CONTACT
                    ?`<form id="sidebar-form" class="sidebar-form-container">
                        <input 
                            id="sidebar-form-member" 
                            class="sidebar-form-input" 
                            placeholder="Введите ФИО" 
                            type="text"
                            aria-label="sidebar-form-member"
                        >
                        <input 
                            id="sidebar-form-number" 
                            class="sidebar-form-input" 
                            placeholder="Введите номер" 
                            type="tel"
                            aria-label="sidebar-form-number"
                        >
                        <select 
                            id="sidebar-choose-group"
                            class="sidebar-form-select" 
                            name="Выберите группу" 
                            aria-label="sidebar-choose-group"
                        ></select>
                    </form>`
                    : ""
                }
            </main>
            
            <footer class="sidebar-footer">
                <div class="button-container">
                    ${title === CONTACT_GROUPS
                        ? `<button type="button" id="createButton" class="modal__button secondary">Добавить</button>`
                        : ""
                    }
                    <button type="button" class="modal__button primary">Сохранить</button>
                </div>
            </footer>
    `

}


function generateButtons(title) {
    const btnClose = document.querySelector("#sidebar-close");
    btnClose.addEventListener("click", () => closeSidebar());

    if (title === CONTACT_GROUPS) {
        const createButton = document.querySelector("#createButton");
        createButton.addEventListener("click", createElement);
    }
}