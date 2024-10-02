const taskname = document.getElementById('task-name') ;
const card_container=document.getElementById('card-contain');

taskname.addEventListener("keypress",function(event){
    const card=document.getElementById('card').cloneNode(true);

    if(event.key=="Enter"){
    if(taskname.value == " " || taskname.value == ""){
        window.alert("Enter a task");
        return
    }
        card.children[0].innerHTML=taskname.value ;
        card_container.appendChild(card);
        document.getElementById('task-name').value=''
    }
})

function complete_task(button){
    button.parentNode.parentNode.dataset.completed = "true";
    sortTask()
}

function sortTask(){
    
    var completed = [];
    var all_tasks=card_container.children;


    for (let i = 0; i < all_tasks.length; i++) {

        if (all_tasks[i].dataset.completed=="true") {

            card_container.appendChild(all_tasks[i]

            );
            
        }
        
    }
}
