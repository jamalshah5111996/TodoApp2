var list = document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo-item");

    var li = document.createElement('li')
    var litext = document.createTextNode(todo_item.value)

    li.appendChild(litext)

    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onclick","deleteitem(this)")
    delBtn.appendChild(delText)

    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("class","btn2")
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)

    li.setAttribute("class","li")
    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)

    todo_item.value = ""

    console.log(li)
}
function deleteAll() {
    list.innerHTML = ""
}

function editItem (e){
    var val = e.parentNode.firstChild.nodeValue
    var editValue = prompt("Enter Edit Value",val)
    e.parentNode.firstChild.nodeValue = editValue
}

function deleteitem(e){
    e.parentNode.remove()
}

