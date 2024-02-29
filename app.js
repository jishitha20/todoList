
document.addEventListener('DOMContentLoaded', function() {
    
    console.log('HTML is fully loaded.');
const inp = document.getElementById('todoItem');
const btn = document.getElementById('btn-todo');
const list = document.querySelector('.todoList');


function uuid() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

const items = [{
    id:uuid(),
    task: "task1"

}];




function init(){
    for(const item of items){
        const li = document.createElement("li");
        li.innerText = item.task;
        list.append(li);
    }
}

init();


let myPromise = new Promise(function(resolve,reject) {
       
    function addToList(){
        items.push({ID : uuid(), task : inp.value});
        addItem();

    }

    function addItem(){
        while(list.firstChild){
        list.firstChild.remove();
        }
    
        for(const item of items){
        const li = document.createElement("li");
        li.innerText = item.task;
        li.setAttribute('ID',uuid());
        li.setAttribute('class',"myList");
        list.append(li);
        console.log("item got added")
        }
    }
    btn.addEventListener("click",() => {
     addToList();
    })
        resolve();
    });


// Usage
myPromise.then(function() {
    
    let dsec = document.querySelectorAll('.todoList');
    console.log(dsec);
        dsec.forEach(el => {
            el.addEventListener('click',function (e) {
                console.log("list element is pressed");
            });
        })
    
   
});

});
