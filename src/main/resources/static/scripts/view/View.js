const View = (() => {
  const setLists = (lists) => {
    const listArr = lists.lists.map(list => {
      const btn = document.createElement("button");
      btn.classList.add("todo-list-selector-item");
      btn.textContent = list.title;
    
      const li = document.createElement("list");
      li.appendChild(btn);

      return li;
    });

    const parent = document.querySelector("#todo-list-selector");
    listArr.forEach(element => {
      parent.appendChild(element);
    });

  }
  return {
    setLists
  }
})();

export default View;