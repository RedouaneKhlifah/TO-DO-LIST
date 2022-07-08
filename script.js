"use strict";
const addTaskBUtton = document.querySelector("#new-task-submit");
const newInput = document.querySelector("#new-task-input");
const taskContainer = document.querySelector("#tasks");

addTaskBUtton.addEventListener("click", () => {
  const divTask = document.createElement("div");
  divTask.classList.add("task");

  const divContent = document.createElement("div");
  divContent.classList.add("content");
  divTask.appendChild(divContent);

  const inputText = document.createElement("input");
  inputText.classList.add("text");
  inputText.type = "text";
  inputText.value = newInput.value;
  inputText.setAttribute("readonly", "readonly");
  divContent.appendChild(inputText);

  const divActions = document.createElement("div");
  divActions.classList.add("actions");

  const buttonEdit = document.createElement("button");
  buttonEdit.classList.add("edit");
  buttonEdit.innerText = "EDIT";
  divActions.appendChild(buttonEdit);

  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("delete");
  buttonDelete.innerText = "dELETE";
  divActions.appendChild(buttonDelete);

  divTask.appendChild(divActions);
  taskContainer.appendChild(divTask);
  newInput.value = "";

  buttonDelete.addEventListener("click", () => {
    taskContainer.removeChild(divTask);
  });

  buttonEdit.addEventListener("click", () => {
    if (buttonEdit.innerText == "EDIT") {
      buttonEdit.innerText = "SAVE";
      inputText.removeAttribute("readonly");
      inputText.focus();
    } else {
      buttonEdit.innerText = "EDIT";
      inputText.setAttribute("readonly", "readonly");
    }
  });
});
