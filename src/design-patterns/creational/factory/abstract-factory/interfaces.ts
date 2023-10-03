import { OrderType, OrderStatus } from "../../../../enums";

export interface IOrder {
    order: OrderType;
    item: string;
    quantity: number;
    userComment: string | null;
    orderStatus: OrderStatus;
}

export interface IExtendedTakeAwayOrder extends IOrder {
    chief: string;
    takeAwayCounter: number;
    orderHandler: string;
}

export interface IExtendedDineInOrder extends IOrder {
    chief: string;
    waiter: string;
    tableNumber: number;
}
