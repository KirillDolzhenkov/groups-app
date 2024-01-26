import {CONTACT_GROUPS, ADDING_CONTACT} from "../main.js";
import {getSidebarContent} from "./content.js";
import {addItemForm} from "./addItemForm.js";
import {createElement} from "./createElement.js";
import {modalBody} from "../main.js";


export function openSidebar(title, modalBody, sidebarBody) {
    modalBody.classList.add("open");
    document.body.classList.add("stop-scrolling");

    sidebarBody.innerHTML = getSidebarContent(title);
    generateButtons(title);
}

export function closeSidebar(modalBody) {
    modalBody.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
}

export function generateButtons(title) {
    const btnClose = document.querySelector("#sidebar-close");
    btnClose.addEventListener("click", () => closeSidebar(modalBody));

    if (title === ADDING_CONTACT) {
        const sidebarForm = document.querySelector("#sidebar-form");
        const saveBtn = document.querySelector("#saveButton");
        saveBtn.addEventListener("click", (event) => addItemForm(event, sidebarForm));
    }

    if (title === CONTACT_GROUPS) {
        const createButton = document.querySelector("#createButton");
        createButton.addEventListener("click", createElement);
    }
}