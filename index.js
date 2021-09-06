function addTask(){
    let taskValue = document.getElementById("taskValue").value;
    let task = document.createElement("span");
    let container = document.createElement("div");
    let button = document.createElement("button");
    let buttonValue = document.createTextNode("X"); //each element is created in the beginning
                                                    //of the function. 

    container.setAttribute("class","container");
    button.setAttribute("onclick", "deleteTask(this.parentElement)");
    taskValue = document.createTextNode(taskValue); //attributes are assigned and set to the 
                                                    //elements to ensure proper styling and function
    
    task.appendChild(taskValue);
    button.appendChild(buttonValue);
    container.appendChild(task);
    container.appendChild(button);
    document.getElementById("taskList").appendChild(container); //elements are appended to the container
                                                                //div and then appended to the task list
}

function deleteTask(task){
    task.remove(); //the task value is the parent element (container div) which is then deleted.
}