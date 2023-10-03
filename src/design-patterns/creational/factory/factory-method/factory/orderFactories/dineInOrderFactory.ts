import { FoodOrderFactory } from "..";
import { DineInOrder } from "../../orders/dineInOrder";

import { IOrder } from "../../../simple-factory/interfaces";

export class DineInOrderFactory extends FoodOrderFactory {
    createOrder(item: string, quantity: number, comments?: string | undefined): IOrder {
        return new DineInOrder(item, quantity, comments);
    }
}
