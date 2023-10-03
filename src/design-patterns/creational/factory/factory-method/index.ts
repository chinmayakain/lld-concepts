import { DineInOrderFactory } from "./factory/orderFactories/dineInOrderFactory";
import { TakeAwayOrderFactory } from "./factory/orderFactories/takeAwayOrderFactory";

(() => {
    const takeAwayFactory = new TakeAwayOrderFactory();

    const factoryTakeAwayOrder = takeAwayFactory.createOrder("Fish and Chips", 2, "No onions");
    console.log(factoryTakeAwayOrder);

    const dineInFactory = new DineInOrderFactory();

    const factoryDineInOrder = dineInFactory.createOrder("Ratatouille", 4, "Extra cheese");
    console.log(factoryDineInOrder);
})();
