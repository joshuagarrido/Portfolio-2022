"use strict";

//const $ = selector => document.querySelector(selector)

document.addEventListener("DOMContentLoaded", () => 

  $("#emailfooterSubmit").addEventListener("click", () => {
        const enterEmail = $("#emailFooter");

        let isValid = true;

        if(enterEmail.value == ""){
            enterEmail.nextElementSibling.textContent="This Field is required.";
            isValid=false;
        }
        if (isValid) {
            $("#emailform").submit();
        }
    }));

    $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  })


