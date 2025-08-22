function addTask() {
    const taskInput = document.getElementById("taskinput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, digite uma tarefa...");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Criar imagem como botão de remover
    const removeImage = document.createElement("img");
    removeImage.src = "img/trash-bin.png";
    removeImage.alt = "Remover";
    removeImage.style.width = "30px";           
    removeImage.style.height = "30px";
    removeImage.style.marginLeft = "15px";       
    removeImage.style.cursor = "pointer";        
    removeImage.style.verticalAlign = "middle";  

    removeImage.addEventListener("click", function (e) {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(removeImage);

    const taskList = document.getElementById("taskList");
    taskList.appendChild(li);

    taskInput.value = "";
}
