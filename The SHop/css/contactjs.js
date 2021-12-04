const taskInput = document.querySelector('.task-input');
const submit= document.querySelector('.submit');
const list = document.querySelector('.list');

submit.addEventListener('click', addTask);

function addTask(e){
    const li = document.createElement('li');
    li.className = 'task-item';
    li.textContent = taskInput.value;
    list.appendChild(li);

    taskInput.value = '';


}


const $ = selector => document.querySelector(selector);


document.addEventListener("DOMContentLoaded", () => {
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
});