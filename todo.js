let inp;
let i = 0;
var keys = Object.keys(localStorage);
console.log(keys);

let keylength = keys.length;
if (keylength == 0) {
  inp = 1;
} else {
  var max = Math.max(...keys);
  inp = max + 1;
}
console.log(keylength);

let form = document.querySelector("#Add-Notes");
let input = document.querySelector("#input");
let container = document.querySelector("#container");
let add_bt = document.querySelector("#Add");

for (i = 0; i < keylength; i++) {
  const content_el = document.createElement("div");
  content_el.classList.add("content");
  const task_el = document.createElement("div");
  task_el.classList.add("task");

  content_el.appendChild(task_el);

  const list_input = document.createElement("input");
  list_input.classList.add("list_item");
  list_input.type = "text";
  list_input.value = localStorage.getItem(keys[i]);
  list_input.setAttribute("readonly", "readonly");

  task_el.appendChild(list_input);

  const action_el = document.createElement("div");
  action_el.classList.add("actions");

  const delete_bt = document.createElement("button");
  delete_bt.classList.add("delete");
  delete_bt.innerText = "Delete";
  delete_bt.setAttribute("id", keys[i]);

  const edit_bt = document.createElement("button");
  edit_bt.classList.add("edit");
  edit_bt.innerText = "Edit";
  edit_bt.setAttribute("id", keys[i]);

  action_el.appendChild(delete_bt);
  action_el.appendChild(edit_bt);

  content_el.appendChild(action_el);
  container.appendChild(content_el);

  edit_bt.addEventListener("click", function edit() {
    if (edit_bt.innerText == "Edit") {
      edit_bt.innerText = "Save";
      list_input.removeAttribute("readonly");
      list_input.focus();
    } else {
      edit_bt.innerText = "Edit";
      list_input.setAttribute("readonly", "readonly");

      var id = edit_bt.id;
      window.localStorage.setItem(id, list_input.value);
    }
  });

  delete_bt.addEventListener("click", (e) => {
    var id = delete_bt.id;
    window.localStorage.removeItem(id);
    container.removeChild(content_el);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value.length == 0) {
    alert("Please enter the notes");
  } else {
    window.localStorage.setItem(inp, input.value);

    addCont();
    inp++;
    input.value = "";
  }
}); //(end submit)

function addCont() {
  const content_el = document.createElement("div");
  content_el.classList.add("content");
  const task_el = document.createElement("div");
  task_el.classList.add("task");

  content_el.appendChild(task_el);

  const list_input = document.createElement("input");
  list_input.classList.add("list_item");
  list_input.type = "text";
  list_input.value = localStorage.getItem(inp);
  list_input.setAttribute("readonly", "readonly");

  task_el.appendChild(list_input);

  const action_el = document.createElement("div");
  action_el.classList.add("actions");

  const delete_bt = document.createElement("button");
  delete_bt.classList.add("delete");
  delete_bt.innerText = "Delete";
  delete_bt.setAttribute("id", inp);

  const edit_bt = document.createElement("button");
  edit_bt.classList.add("edit");
  edit_bt.innerText = "Edit";
  edit_bt.setAttribute("id", inp);

  action_el.appendChild(delete_bt);
  action_el.appendChild(edit_bt);

  content_el.appendChild(action_el);
  container.appendChild(content_el);

  edit_bt.addEventListener("click", function edit() {
    if (edit_bt.innerText == "Edit") {
      edit_bt.innerText = "Save";
      list_input.removeAttribute("readonly");
      list_input.focus();
    } else {
      edit_bt.innerText = "Edit";
      list_input.setAttribute("readonly", "readonly");

      var id = edit_bt.id;
      window.localStorage.setItem(id, list_input.value);
    }
  });

  delete_bt.addEventListener("click", (e) => {
    var id = delete_bt.id;
    window.localStorage.removeItem(id);
    container.removeChild(content_el);
  });
} //(end func addCont)
