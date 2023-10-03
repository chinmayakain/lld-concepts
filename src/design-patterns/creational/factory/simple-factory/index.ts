import { SimpleFoodOrderFactory } from "./factory";

import { OrderType } from "../../../../enums";

(() => {
    let dineInOrder = SimpleFoodOrderFactory.createOrder(OrderType.DINE_IN, "Fish and Chips", 2, "No Onions");
    console.log(dineInOrder);

    let takeAwayOrder = SimpleFoodOrderFactory.createOrder(OrderType.TAKE_AWAY, "Death by Chocolate Ice-cream", 6);
    console.log(takeAwayOrder);
})();
