import {closeSidebar} from "./sidebar.js";
import {modalBody} from "../main.js";

export function handleOutsideClick(event, modalBody) {
    if (event.target === modalBody) {
        closeSidebar(modalBody);
    }
}

export function handleKeyDown(event) {
    if (event.key === "Escape") {
        closeSidebar(modalBody);
    }
}