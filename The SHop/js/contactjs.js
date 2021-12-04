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
            $("#contact_form").submit();
        }
    });
});
