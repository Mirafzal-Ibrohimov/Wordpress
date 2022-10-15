
'use strict'

window.addEventListener('DOMContentLoaded', function () {

    const modal = document.querySelector('.modal_button'),
            button = document.querySelector('.modal_btn'),
            close = document.querySelector('.btn_img_modal');

    button.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    close.addEventListener('click', function() {
        modal.style.display = 'none';
    });
})
    
