import { IOrder } from "../interfaces";
import { DineInOrder } from "../orders/dineInOrder";
import { TakeAwayOrder } from "../orders/takeAwayOrder";
import { AbstractFoodOrderFactory } from "./orderFactories";

export class ConcreteFoodOrderFactory extends AbstractFoodOrderFactory {
    createDineInOrder(item: string, quantity: number, comments?: string | undefined): IOrder {
        return new DineInOrder(item, quantity, comments);
    }

    createTakeAwayOrder(item: string, quantity: number, comments?: string | undefined): IOrder {
        return new TakeAwayOrder(item, quantity, comments);
    }
}
