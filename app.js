let todoList=[
  
];
window.onload = function() {
  let savedTodos = localStorage.getItem('todoList');
  if (savedTodos) {
    todoList = JSON.parse(savedTodos);
    displayItem();
  }
};
displayItem();


function addTodo(){
  let inputElement=document.querySelector('#todoInput');
  let dateElement=document.querySelector('#todoDate');
  let todoItem=inputElement.value;
  let todoDate=dateElement.value
  todoList.push({item:todoItem,dueDate:todoDate});
  inputElement.value='';
  dateElement.value='';
  saveTodos();
  displayItem();
}

function displayItem(){
  let containerElement=document.querySelector('.todoContainer');
  let newHtml='';

 
 for(let i=0;i<todoList.length;i++){
  let item=todoList[i].item;
  let dueDate=todoList[i].dueDate;
  
  newHtml +=`
      
        <span class="item">${item} </span>
         <span class="dueDate">${dueDate} </span>
        <button class="btn-delete" onclick="todoList.splice(${i},1);  saveTodos(); displayItem();">Delete</button>
      
     
       `;
     

 }
 containerElement.innerHTML=newHtml;

}
function saveTodos() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}