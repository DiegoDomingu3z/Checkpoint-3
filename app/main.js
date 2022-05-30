// import { ValuesController } from "./Controllers/ValuesController.js";
import { FlightsController } from "./Controllers/FlightsController.js"
import { ListsController } from "./Controllers/ListsController.js";

class App {
  // valuesController = new ValuesController();


  flightsController = new FlightsController()

  listsController = new ListsController()
}

window["app"] = new App();
