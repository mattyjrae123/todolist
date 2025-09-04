import Model from "../model/Model.js";
import View from "../view/View.js";

const Controller = (() => {
  const run = () => {
    console.log("Hello, from Controller.start()");
    Model.start();
    View.start();
  }

  return {
    run
  }
})();

export default Controller;