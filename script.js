const addTaskBtn = document.getElementById("add-task-btn");
const todoBoard = document.getElementById("todo-board");
const btnContainer = document.getElementById("button-container")

const taskInp = document.getElementById("to-do-inp")

//function to attach class and trigger it
function attachDragEvents(target) {
    target.addEventListener('dragstart', () => {
        target.classList.add('flying');
    });

    target.addEventListener('dragend', () => {
        target.classList.remove('flying');
    });
}


//add task functionality
addTaskBtn.addEventListener('click', () => {
    const input = taskInp.value.trim();
    if (!input) return;

    const taskCard = document.createElement("p");
    const btnContainer = document.createElement("span");
    const delBtn = document.createElement("button")
    const editBtn = document.createElement("button")
    delBtn.classList.add('del');
    editBtn.classList.add('edit')
    editBtn.innerText = 'Edit'
    delBtn.innerText = "Delete"
    taskCard.classList.add('item');
    taskCard.innerText = input;
    taskCard.setAttribute('draggable', 'true');



    attachDragEvents(taskCard);


    todoBoard.appendChild(taskCard);
    taskCard.appendChild(btnContainer)
    btnContainer.appendChild(editBtn)
    btnContainer.appendChild(delBtn)
    //todoBoard.appendChild(btnContainer)

    taskInp.value = "";


    const delBtns = document.getElementsByClassName("del");


    Array.from(delBtns).forEach((btn) => {
        btn.addEventListener("click", () => {
            const parent = btn.parentElement.parentElement;
            parent.remove();
            console.log(parent);
        });
    });


    ///edit option 
    editBtn.addEventListener('click', () => {
        console.log("hello");

        const div = document.createElement("div")
        div.classList.add("edit-div")
        
        const inp = document.createElement("input");
        inp.classList.add('edit-inp');
        inp.setAttribute("placeholder", "Enter new to-do");
     

        const btn = document.createElement("button");
        btn.innerText = "Done";
        btn.classList.add("edit-btn")
 
        //appending button and input field 
        div.appendChild(inp)
        div.appendChild(btn)
        todoBoard.appendChild(div)
        
 



        btn.addEventListener("click", () => {
            const data = inp.value.trim();
            if (data) {
                editBtn.parentElement.parentElement.innerText = data; //  Update task text
                taskCard.appendChild(btnContainer)
                btnContainer.appendChild(editBtn)
                btnContainer.appendChild(delBtn)
            }
            inp.remove(); //  Remove input
            btn.remove(); //  Remove button after clicking
        });
    })

});




const allBoards = document.querySelectorAll('.board');

//for dragging
allBoards.forEach(board => {
    board.addEventListener('dragover', (event) => {
        event.preventDefault();
        const flyingElement = document.querySelector('.flying');
        if (flyingElement) board.appendChild(flyingElement);
    });
});






