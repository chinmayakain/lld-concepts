import { IOrder } from "../interfaces";

import { OrderType } from "../../../../../enums";
import { DineInOrder } from "../orders/dineInOrder";
import { TakeAwayOrder } from "../orders/takeAwayOrder";

export class SimpleFoodOrderFactory {
    public static createOrder(type: OrderType, item: string, quantity: number, comments?: string): IOrder {
        switch (type) {
            case OrderType.DINE_IN:
                return new DineInOrder(item, quantity, comments ?? null);
            case OrderType.TAKE_AWAY:
                return new TakeAwayOrder(item, quantity, comments);
            default:
                throw new Error("Unknown order type!");
        }
    }
}
