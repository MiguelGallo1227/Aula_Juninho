function addTask(){
    const taskInput = document.getElementById("taskinput");
    const taskText = taskInput.value.trim();


    if (taskText === ""){
        alert("Por favor, digite uma tarefa...")
        return;
    }

    const li = document.createElement("li")
    li.content = taskText;

}