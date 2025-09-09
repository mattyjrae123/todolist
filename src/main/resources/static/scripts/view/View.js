const View = (() => {
  const setLists = (lists, buttonClickHandler) => {
    // create <li> elements
    const listArr = lists.map(list => {
      const btn = document.createElement("button");
      btn.classList.add("todo-list-selector-item");
      btn.textContent = list.title;

      btn.addEventListener('click', () => buttonClickHandler(list.id))
    
      const li = document.createElement("li");
      li.appendChild(btn);

      return li;
    });

    // append <li> elements
    const parent = document.querySelector("#todo-list-selector");
    listArr.forEach(element => {
      parent.appendChild(element);
    });

  }

  const setTodos = (todos, deleteTodoButtonHandler) => {
    // create <li> elements
    const todosArr = todos.map(todo => {
      const input = document.createElement("input");
      input.type = "checkbox";

      const label = document.createElement("label");
      label.appendChild(input);
      label.appendChild(document.createTextNode(todo.content));

      const li = document.createElement("li");
      li.classList.add("todo-item");

      const btn = document.createElement("button");
      btn.textContent = "X";

      btn.addEventListener('click', () => deleteTodoButtonHandler(todo.id, todo.todo_list_id));

      li.appendChild(label);
      li.appendChild(btn);

      return li;
    });

    // append <li> elements
    document.querySelector("#todo-items").replaceChildren(...todosArr);
  };

  return {
    setLists,
    setTodos
  }
})();

export default View;