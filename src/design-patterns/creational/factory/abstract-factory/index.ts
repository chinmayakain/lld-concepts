import { ConcreteFoodOrderFactory } from "./factory";

(() => {
    const orderFactory = new ConcreteFoodOrderFactory();

    const dineInOrder = orderFactory.createDineInOrder("Fish and Chips", 2, "No Onions");
    console.log(dineInOrder);

    const takeAwayOrder = orderFactory.createTakeAwayOrder("Ice Cream - Death by Chocolate", 4, "Extra cheese");
    console.log(takeAwayOrder);
})();
