import Model from "../model/Model.js";
import View from "../view/View.js";

const Controller = (() => {
  const start = () => {
    console.log("Hello, from Controller.start()");
    Model.start();
    View.start();
  }

  return {
    start
  }
})();

export default Controller;