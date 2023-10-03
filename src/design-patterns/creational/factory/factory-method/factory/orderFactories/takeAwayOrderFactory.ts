import { FoodOrderFactory } from "..";
import { TakeAwayOrder } from "../../orders/takeAwayOrder";

import { IOrder } from "../../../simple-factory/interfaces";

export class TakeAwayOrderFactory extends FoodOrderFactory {
    createOrder(item: string, quantity: number, comments?: string | undefined): IOrder {
        return new TakeAwayOrder(item, quantity, comments);
    }
}
