import {CONTACT_GROUPS, ADDING_CONTACT} from "../main.js";

export function getSidebarContent(title) {
    const sidebarHeaderTemplate = `
    <header class="sidebar-header">
      <h2 class="sidebar-title">${title}</h2>
      <button type="button" id="sidebar-close" class="sidebar-close">
        <img src="./assets/icons/closeIcon.svg" alt="close-icon">
      </button>
    </header>
  `;

    const sidebarMainTemplate = `
    <main class="sidebar-main">
      ${title === CONTACT_GROUPS
        ? `<div class="sidebar-main-container">
            <ul id="groups-container" class="groups-container"></ul>
          </div>`
        : ""}
      ${title === ADDING_CONTACT
        ? `<form id="sidebar-form" class="sidebar-form-container" action="">
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
        : ""}
    </main>
  `;

    const sidebarFooterTemplate = `
    <footer class="sidebar-footer">
      <div class="button-container">
        ${title === CONTACT_GROUPS
        ? `<button type="button" id="createButton" class="modal__button secondary">Добавить</button>`
        : ""}
        <button type="button" id="saveButton" class="modal__button primary">Сохранить</button>
      </div>
    </footer>
  `;

    return `${sidebarHeaderTemplate}${sidebarMainTemplate}${sidebarFooterTemplate}`;
}