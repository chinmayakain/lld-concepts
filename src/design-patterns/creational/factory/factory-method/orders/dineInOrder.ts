import { IExtendedDineInOrder } from "../interfaces";

import { OrderType, OrderStatus } from "../../../../../enums";

export class DineInOrder implements IExtendedDineInOrder {
    order: OrderType = OrderType.DINE_IN;
    chief: string = "some-available-chief";
    waiter: string = "some-available-waiter";
    orderStatus: OrderStatus = OrderStatus.ORDER_ACCEPTED;
    item: string;
    quantity: number;
    userComment: string | null;
    tableNumber: number;

    constructor(item: string, quantity: number, comments?: string) {
        this.item = item;
        this.quantity = quantity;
        this.userComment = comments ?? null;
        this.tableNumber = Math.floor(Math.random() * (15 - 1 + 1)) + 1;
    }

    public create(): IExtendedDineInOrder {
        const order: IExtendedDineInOrder = {
            order: this.order,
            item: this.item,
            quantity: this.quantity,
            userComment: this.userComment,
            chief: this.chief,
            tableNumber: this.tableNumber,
            waiter: this.waiter,
            orderStatus: OrderStatus.ORDER_ACCEPTED,
        };
        return order;
    }
}
