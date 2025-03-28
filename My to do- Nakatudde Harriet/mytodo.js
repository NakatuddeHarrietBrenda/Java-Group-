
// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
//We are selecting HTML elements from the page using their IDs and storing them in JavaScript 

// variables. This lets us interact with these elements later.
// taskInput: Refers to the input field where the user types a task.
// addBtn: Refers to the button that the user clicks to add a task.
// taskList: Refers to the <ul> (unordered list) where the tasks will be displayed




// Function to add a task
function addTask() {
    const taskValue = taskInput.value.trim();
    if (taskValue !== "") {
        const li = document.createElement("li");
        // We create a function called addTask() that will be responsible for adding tasks to the list.
        // We get the value from the taskInput field (what the user typed) using taskInput.value.trim()
        //  removes any extra spaces before or after the task text to ensure clean input.
        // If the taskValue is not empty, we proceed to create a new task


        // Create the task text
        const taskText = document.createElement("span");
        taskText.textContent = taskValue;
         //We create a <span> element to hold the task text (taskText).
         // We set the text content of the taskText span to be the value the user typed (taskValue)


        // Create the delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        //The button's text content is set to "Delete", and I give it a CSS class delete-btn to style it


        // Append task and delete button to the list item
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        //We append (add) the taskText and deleteBtn as children to the newly created <li> element.
        //This means the task text and delete button will appear inside the same list item



        // Add the list item to the task list
        taskList.appendChild(li); //This means the task will be visible to the user on the web page



        // Clear the input field
        taskInput.value = "";
        //After adding the task to the list, we clear the input field (taskInput.value = "";), 
        // so the user can add a new task without manually clearing the input



        // Add event listener to delete button
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(li);
        });
      } 
    }
        //We add an event listener to the delete button.
        //When the delete button is clicked, the function inside the event listener runs and removes the 
        //corresponding <li> (task) from the taskList (taskList.removeChild(li))



        

// Event listener for the Add Task button

addBtn.addEventListener("click", addTask);
// We add an event listener to the Add Task button (addBtn).
// When the button is clicked, the addTask() function is called, which adds the task to the list.



// Event listener for pressing "Enter" to add a task
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

// We also listen for the Enter key press inside the taskInput field.
// If the user presses Enter (the key is "Enter"), we call the addTask() function to add the task.
// This allows the user to add tasks without clicking the button, just by pressing Enter after typing the task.
