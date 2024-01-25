export function createElement() {
    const container = document.querySelector("#groups-container");

    const elementHTML = `
            <li class="input-group-container">
                <input type="text" class="sidebar-form-input" placeholder="Введите название" value="">
                <button type="button" class="modal__button">
                    <img src="./assets/icons/removeIcon.svg" alt="remove-icon">
                </button>
            </li>
        `;

    container.innerHTML += elementHTML;

    const buttonElement = container.querySelector(".modal__button:last-child");
    buttonElement.addEventListener("click", () => {
        container.removeChild(buttonElement.parentNode);
    });

    const inputElement = container.querySelector(".sidebar-form-input");
    inputElement.focus();
}
