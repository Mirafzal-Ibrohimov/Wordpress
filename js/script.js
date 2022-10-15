'use strict'

window.addEventListener('DOMContentLoaded', function () {
    const mainBtn = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        CloseBtn = document.querySelector('[data-close]'),
        downImg = document.querySelector('.down_img');

    mainBtn.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
    }

    CloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal()
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    downImg.addEventListener(item, function() {
        
    });
})
