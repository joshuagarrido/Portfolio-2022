/*****************************************************
*Original Author:Joshua Garrido                                    
*Date Created:8/27/2021                                   
*Version:1                                             
*Date Last Modified: 9/2/2021 --9/9/2021                        
*Modified by:Joshua Garrido                                        
*Modification log:
(clean up links and files edited pictures)
                              
Began demo 8/27/2021                                 
****************************************************** */
"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

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
    });

    $(".purchaseButton").addEventListener("click", () => {
        alert("Being able to purchase merchandise is in progress");
    });


    
    /*

    const card = document.getElementById("card")
    card.addEventListener("click", flipCard);
    function flipCard() {
        card.classList.toggle("flipCard");
    } */
    
    $("#join_list").addEventListener("click", () => {
        // get values user entered in textboxes
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const firstName = $("#first_name");
    
        // create a Boolean variable to keep track of invalid entries
        let isValid = true;

        // check user entries - add text to error message if invalid
        if (email1.value == "") {
            email1.nextElementSibling.textContent = "This field is required.";
            isValid = false; 
        } else {
            email1.nextElementSibling.textContent = "";
        }
    
        if (email2.value == "") { 
            email2.nextElementSibling.textContent = "This field is required.";
            isValid = false; 
        } else {
            email2.nextElementSibling.textContent = "";
        }
    
        if (email1.value != email2.value) { 
            email2.nextElementSibling.textContent = "Email addresses must match.";
            isValid = false; 
        }
    
        if (firstName.value == "") {
            firstName.nextElementSibling.textContent = "First name is required.";
            isValid = false;
        } else {
            firstName.nextElementSibling.textContent = "";
        }
    
        // submit the form if all entries are valid
        if (isValid) {
            $("#email_form").submit();
        }
    });
    

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";

        $("#email_1").focus();
    });
    
    $("#email_1").focus();

//Validation for Contact us page
    $("#submitContact").addEventListener("click", () => {
        const contact_name = $("#fname");
        const contact_lname =$("#lname");
        const contact_subject=$("#subject");

        let valid = true;

        if (contact_name.value == "") {
            contact_name.nextElementSibling.textContent = "This field is required.";
            valid = false; 
        } else {
            contact_name.nextElementSibling.textContent = "";
        }
        if (contact_lname.value == "") {
            contact_lname.nextElementSibling.textContent = "This field is required.";
            valid = false; 
        } else {
            contact_lname.nextElementSibling.textContent = "";
        }
        if (contact_subject.value == "") {
            contact_subject.nextElementSibling.textContent = "This field is required.";
            valid = false; 
        } else {
            contact_subject.nextElementSibling.textContent = "";
        }

        if(valid == true) {
            $("contact_form").submit();
        }
    });
    
    $("#emailfooterSubmit").addEventListener("click", () => {
        const enterEmail = $("#emailFooter");

        isValid = true;

        if(enterEmail.value == ""){
            enterEmail.nextElementSibling.textContent="This Field is required.";
            isValid=false;
        }
        if (isValid==true) {
            $("#emailform").submit();
        }
    });

    
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


/*
// the event handler for the click event of each <a> element
const toggle = evt => {
    const linkElement = evt.currentTarget;                 // get the clicked link element
    const h2Element = linkElement.parentNode;              // get the h2 tag for the <a> tag
    const divElement = h2Element.nextElementSibling;       // get h2's sibling div

    // h2Element.classList.toggle("minus");
    if (h2Element.hasAttribute("class")) {
        h2Element.removeAttribute("class");
    } else {
        h2Element.className="minus";
    }

    // divElement.classList.toggle("open");
    if (divElement.hasAttribute("class")) {
        divElement.removeAttribute("class");
    } else {
        divElement.className="open";
    }

    evt.preventDefault();   // cancel default action of the <a> tag
};

document.addEventListener("DOMContentLoaded", () => {
    // get the <a> tags
    const linkElements = faqs.querySelectorAll("#faqs a");
    
    // attach event handler for each <a> tag	    
    for (let linkElement of linkElements) {
        linkElement.addEventListener("click", toggle);
    }
    // set focus on first <a> tag
    linkElements[0].focus();       
});*/


