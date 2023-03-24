//1.) listen for a click
//1.a) target/select the button
const addItemBtn = document.querySelector(".add-item-btn")
//1.b) event listener on the button
addItemBtn.addEventListener("click", function (event) {
    //preventing the form from reloading the page
    event.preventDefault()
    //2.) take the input
    const itemToAdd = document.querySelector(".item-to-add")
    //3.) add it to the list in our DOM 
    const todoList = document.querySelector(".todo-list")
    const listItem = document.createElement("li")
    listItem.textContent = itemToAdd.value
    todoList.appendChild(listItem)
    // add event listener for list items
    listItem.addEventListener("click", function(event) {
        const listItemClicked = event.target
        listItemClicked.classList.toggle("done")
    })
})

//Clear the item input
itemToAdd.value = ""