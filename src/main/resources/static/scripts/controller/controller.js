import Model from "../model/Model.js";
import View from "../view/View.js";

const Controller = (() => {
  const run = async () => {
    const lists = await Model.getLists();

    if (lists.length > 0) {
      View.setLists(lists, _selectListHandler);
      
      const todos = await Model.getTodos(lists[0].id);
      View.setTodos(todos, _deleteTodoButtonHandler);
    }
  }

  const _selectListHandler = async (listId) => {
    const todos = await Model.getTodos(listId);
    View.setTodos(todos);
  }

  const _deleteTodoButtonHandler = async (todoIds, listId) => {
    Model.deleteTodos(todoIds);

    const todos = await Model.getTodos(listId);
    View.setTodos(todos, _deleteTodoButtonHandler);
  }

  return {
    run
  }
})();

export default Controller;