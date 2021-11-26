
    const form = document.querySelector("#Add-Notes");
    const input = document.querySelector("#input");
    const container= document.querySelector("#container");
    const add_bt = document.querySelector("#Add");

    window.localStorage.setItem('list_input','Notes');
    
    form.addEventListener('submit', (e) => {
		e.preventDefault();
   
        if(input.value.length == 0){
            alert('Please enter the notes')
        }else{
          const Notes = input.value;
      
        
        const content_el = document.createElement('div');
        content_el.classList.add('content');
        
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        content_el.appendChild(task_el);

        const list_input = document.createElement('input');
        list_input.classList.add('list_item');
        list_input.type='text';
        list_input.value=Notes;
        list_input.setAttribute('readonly','readonly');  
        
        task_el.appendChild(list_input);

        const action_el = document.createElement('div');
        action_el.classList.add('actions');

        const delete_bt = document.createElement('button');
        delete_bt.classList.add('delete');
        delete_bt.innerText = 'Delete';
       
        const edit_bt = document.createElement('button');
        edit_bt.classList.add('edit');
        edit_bt.innerText = 'Edit';

        action_el.appendChild(delete_bt);
        action_el.appendChild(edit_bt);

        content_el.appendChild(action_el);
        container.appendChild(content_el);

        input.value="";

        edit_bt.addEventListener('click', () => {
            if(edit_bt.innerText == "Edit"){
            edit_bt.innerText = "Save";
            list_input.removeAttribute("readonly");
            list_input.focus();
        }else{
            
                edit_bt.innerText = "Edit";
                list_input.setAttribute("readonly","readonly");
                
            }
        });
        
            delete_bt.addEventListener('click', (e) => {
            container.removeChild(content_el);
            });
        }       
    });

