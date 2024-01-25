import {createElement} from "../modules/createElement.js";

const CONTACT_GROUPS = "Группы контактов";
const ADDING_CONTACT = "Добавление контакта";

export function generateSidebarContent(title) {

    /*return `
        <header class="sidebar-header">
            <h2 class="sidebar-title">${title}</h2>
            <button type="button" id="sidebar-close" class="sidebar-close">
                <img src="./assets/icons/closeIcon.svg" alt="close-icon">
            </button>
        </header>

        <!-- Группы -->
        <main class="sidebar-main" >
            ${title === CONTACT_GROUPS
        ? `<section id="groups-container" class="groups-container" ></section>`
        : ""
    }

            ${title === ADDING_CONTACT
        ? `
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
    `;*/
}

export function generateUniqueId() {
    return Date.now().toString(36);
}

export function renderGroups() {
    const groupId1 = generateUniqueId();
    const groupId2 = generateUniqueId();

    let groupsData = [
        { id: 1, name: "Друзья1", members: [groupId1] },
        { id: 2, name: "Друзья2", members: [groupId2] }
    ];

    let membersData = {
        [groupId1]: [
            { id: 1, name: "Артем", phoneNumber: "+375291038725" },
            { id: 2, name: "Никита", phoneNumber: "+375291038727" }
        ],
        [groupId2]: [
            { id: 1, name: "Женя", phoneNumber: "+375291038725" },
            { id: 2, name: "Петя", phoneNumber: "+375291038729" }
        ],
    };

    const groupsContainer = document.getElementById('groups-container');
    groupsContainer.innerHTML = `
        <header class="sidebar-header">
            <h2 class="sidebar-title">Тест</h2>
            <button type="button" id="sidebar-close" class="sidebar-close">
                <img src="./assets/icons/closeIcon.svg" alt="close-icon">
            </button>
        </header>
        
        
        <main class="sidebar-main" >
            <section id="groups-container" class="groups-container" ></section>
        </main>
    `;




    groupsData.forEach(group => {
        const elementDiv = document.createElement('div');
        elementDiv.className = 'input__area';

        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.className = 'modal__input';
        inputElement.placeholder = 'Введите название';
        inputElement.value = group.name;

        const buttonElement = document.createElement('button');
        buttonElement.type = 'button';
        buttonElement.className = 'modal__button';
        buttonElement.textContent = 'X';

        elementDiv.appendChild(inputElement);
        elementDiv.appendChild(buttonElement);
        groupsContainer.appendChild(elementDiv);

        buttonElement.addEventListener('click', () => {
            groupsContainer.removeChild(elementDiv);
        });
    });
}