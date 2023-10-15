import { OrderType, OrderStatus } from "../../enums";
import { IExtendedTakeAwayOrder } from "../interfaces";

export class TakeAwayOrder implements IExtendedTakeAwayOrder {
    chief: string = "some-available-cheif";
    order: OrderType = OrderType.TAKE_AWAY;
    takeAwayCounter: number = 2;
    orderHandler: string = "some-available-waiter";
    orderStatus: OrderStatus = OrderStatus.ORDER_ACCEPTED;
    item: string;
    quantity: number;
    userComment: string | null;

    constructor(item: string, quantity: number, comments?: string) {
        this.item = item;
        this.quantity = quantity;
        this.userComment = comments ?? null;
    }

    public create(): IExtendedTakeAwayOrder {
        const order: IExtendedTakeAwayOrder = {
            order: this.order,
            item: this.item,
            quantity: this.quantity,
            userComment: this.userComment,
            chief: this.chief,
            takeAwayCounter: this.takeAwayCounter,
            orderHandler: this.orderHandler,
            orderStatus: OrderStatus.ORDER_ACCEPTED,
        };
        return order;
    }
}
