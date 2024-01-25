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