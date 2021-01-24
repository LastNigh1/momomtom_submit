const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";
let toDos = [];




function saveToDos(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
  }

function deleteToDos(event){
  const delTarget = event.target.parentNode;
  toDoList.removeChild(delTarget);
  const cleanedToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(delTarget.id);
  });

  toDos = cleanedToDos;
  saveToDos();
}


function paintToDO(text){
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
    delBtn.innerHTML = "[X]";
    delBtn.addEventListener("click",deleteToDos);
  const span = document.createElement("span");
    span.innerText = text;
  const newId = toDos.length + 1;

  toDoList.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;

  const toDoObj = {
    text: text,
    id: newId
  };

  toDos.push(toDoObj);
  saveToDos();

}

function handleSubmit(event){
  event.preventDefault();
  //const currentValue = toDoInput.value;
  paintToDO(toDoInput.value);
  toDoInput.value = "";
  saveToDos();
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODO_LS);
  if(loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo){
      paintToDO(toDo.text);
    }

    );

  }

}

function init(){
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
