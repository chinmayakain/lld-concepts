import { IOrder } from "../../interfaces";

export abstract class AbstractFoodOrderFactory {
    abstract createTakeAwayOrder(item: string, quantity: number, comments?: string): IOrder;

    abstract createDineInOrder(item: string, quantity: number, comments?: string): IOrder;
}
