import Model from "../model/Model.js";
import View from "../view/View.js";

const Controller = (() => {
  const run = async () => {
    const lists = await Model.getLists();
    View.setLists(lists);

    const todos = await Model.getTodos(1);
    View.setTodos(todos);
  }

  return {
    run
  }
})();

export default Controller;