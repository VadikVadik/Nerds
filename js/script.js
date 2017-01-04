var btn = document.querySelector('.contact_btn');
var write_us = document.querySelector('.write_us');
var close = document.querySelector('.close_form');
var names = document.querySelector('[name="name"]');
var mail = document.querySelector('[name="mail"]');

    btn.addEventListener('click', function(event){
        event.preventDefault();
        if(write_us.style.display = "none"){
            write_us.style.display = "block";
            names.focus();
        }
    })
        
    close.addEventListener('click', function(event){
        if(write_us.style.display = "block"){
            write_us.style.display = "none";
        }
    })
        
    write_us.addEventListener('submit', function(event){
        if(!names.value || !mail.value){
            event.preventDefault();       
            names.focus();
        }
    })