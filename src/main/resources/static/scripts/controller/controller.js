import Model from "../model/Model.js";
import View from "../view/View.js";

const Controller = (() => {
  const run = () => {
    console.log("Hello, from Controller.start()");
    const lists = Model.getLists();
    View.setLists(lists);
  }

  return {
    run
  }
})();

export default Controller;