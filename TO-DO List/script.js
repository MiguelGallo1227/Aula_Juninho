function addTask(){
    const taskInput = document.getElementById("taskinput");
    const taskText = taskInput.value.trim();


    if (taskText === ""){
        alert("Por favor, digite uma tarefa...")
        return;
    }

    const li = document.createElement("li")
    li.content = taskText;
     
    li.addEventListener("click", function(){
        li.classList.toggle("completed")
    });

    const removeButton = document.createElement("button")
    removeButton.textContent = "Remover";
    removeButton.addEventListener("click", function (e){
        e.stopPropagation();
        li.remove();
    });
 
    
    li.appendChild(removeButton);
 
    const taskList = document.getElementById("taskList");
    taskList.appendChild(li);
 

    taskInput.value = "";
}