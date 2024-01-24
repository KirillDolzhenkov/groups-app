
/*const modalLinks = document.querySelectorAll(".modal-link");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;
const timeout = 800;

if (modalLinks.length > 0) {
    for (let i = 0; i < modalLinks.length; i++) {
        const modalLink = modalLinks[i];
        modalLink.addEventListener("click", function (e){
            const modalName = modalLink.getAttribute("href").replace("#", "");
            const currentModal = document.getElementById(modalName);
            modalOpen(currentModal);
            e.preventDefault();
        });
    }
}

const modalCloseIcon = document.querySelectorAll(".close-modal");
if (modalCloseIcon.length > 0) {
    for (let i = 0; i < modalLinks.length; i++) {
        const el = modalCloseIcon[i];
        el.addEventListener("click", function (e){
            modalClose(el.closest(".modal"));
            e.preventDefault();
        });
    }
}

function modalOpen(currentModal) {
    if (currentModal && unlock) {
        const modalActive = document.querySelector(".modal.open");
        if (modalActive) {
            modalClose(modalActive, false);
        } else {
            bodyLock();
        }
        currentModal.classList.add(".open");
        currentModal.addEventListener("click", function (e) {
            if (!e.currentTarget.closest(".modal__body")) {
                modalClose(e.currentTarget.closest(".modal"));
            }
        });
    }
}

function popupClose(modalActive, doUnlock = true) {
    if (unlock) {
        modalActive.classList.add(".open");
        if (unlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {}
function bodyUnLock() {}*/


/*OpenSidebar*/
const CONTACT_GROUPS = "Группы контактов";
const ADDING_CONTACT = "Добавление контакта";

const groupsBtn = document.querySelector("#groups-btn");
const addContactBtn = document.querySelector("#add-contact-btn");
const sidebarBody = document.querySelector("#sidebar");
const sidebarContent = document.querySelector("#sidebar-content");

groupsBtn.addEventListener("click", () => openSidebar(CONTACT_GROUPS));
addContactBtn.addEventListener("click", () => openSidebar(ADDING_CONTACT));



function openSidebar(title) {
    sidebarBody.classList.add("open");
    document.body.classList.add("stop-scrolling");

    sidebarContent.innerHTML =`
            <header class="sidebar-header">
                <h2 class="sidebar-title">${title}</h2>

                <button type="button" id="sidebar-close" class="sidebar-close">
                    <img src="./assets/icons/closeIcon.svg" alt="close-icon">
                </button>
            </header>

            <!-- Группы -->
            <main class="sidebar-main" >
                ${title === CONTACT_GROUPS 
                    ? `
                        <section id="groups-container" class="groups-container" >
                        </section>
                    `
                    : ""
                }
                
                ${title === ADDING_CONTACT 
                    ? 
                        `
                            <form id="content-sidebar-form" class="content-sidebar-form">
                                <input 
                                    id="content-sidebar-form-person" 
                                    class="content-sidebar-form-person" 
                                    placeholder="Введите ФИО" 
                                    type="text"
                                    aria-label=content-sidebar-form-person
                                >
                                <input 
                                    id="content-sidebar-form-number" 
                                    class="content-sidebar-form-number" 
                                    placeholder="Введите номер" 
                                    type="tel"
                                    aria-label="content-sidebar-form-number"
                                >
                                <select 
                                    class="content-sidebar-form-groups" 
                                    name="Выберите группу" 
                                    id="choose-group"
                                    aria-label="choose-group"
                                ></select>
                            </form>
                        ` 
                    : ""
                }
            </main>

            <footer class="sidebar-footer">
                ${title === CONTACT_GROUPS
                    ? `<button type="button" id="createButton" class="modal__button secondary">Добавить</button>`
                    : ""
                }
                <button type="button" class="modal__button primary">Сохранить</button>
            </footer>
    `;


    const btnClose = document.querySelector("#sidebar-close");
    btnClose.addEventListener("click", () => closeSidebar());


    /*createBtn*/
    const container = document.querySelector("#groups-container");
    const createButton = document.querySelector("#createButton");
    createButton.addEventListener("click", CreateElement);

    function CreateElement() {
        const elementHTML = `
            <div class="input__area">
                <input type="text" class="modal__input" placeholder="Введите название" value="">
                 <button type="button" class="modal__button">X</button>
            </div>
        `;

        container.innerHTML += elementHTML;

        const buttonElement = container.querySelector(".modal__button:last-child");

        buttonElement.addEventListener("click", () => {
            container.removeChild(buttonElement.parentNode);
        });
    }
}

function closeSidebar() {
    sidebarBody.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
}

window.addEventListener("click", (e) => {
    if (e.target === sidebarBody) {
        closeSidebar();
    }
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeSidebar();
    }
});

function removeItemHandler(id) {

}

/*createBtn*/
/*const container = document.querySelector("#groupsContainer");
const createButton = document.querySelector("#createButton");
createButton.addEventListener("click", CreateElement);

function CreateElement() {
    alert("message")
    const divElement = document.createElement("div");
    divElement.className = "input__area";

    // Создаем input элемент
    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.className = "modal__input";
    inputElement.placeholder = "Введите название";
    inputElement.value = "";

    // Создаем button элемент
    const buttonElement = document.createElement("button");
    buttonElement.type = "button";
    buttonElement.className = "modal__button";
    buttonElement.textContent = "X";

    // Добавляем input и button в div элемент
    divElement.appendChild(inputElement);
    divElement.appendChild(buttonElement);

    // Добавляем div элемент в контейнер
    container.appendChild(divElement);




    /!*removeBtn*!/
    buttonElement.addEventListener("click", () => {
        // Удаляем div элемент при нажатии на кнопку "X"
        container.removeChild(divElement);
    });
}*/