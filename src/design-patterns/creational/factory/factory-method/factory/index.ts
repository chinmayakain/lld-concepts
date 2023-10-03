import { IOrder } from "../../simple-factory/interfaces";

export abstract class FoodOrderFactory {
    abstract createOrder(item: string, quantity: number, comments?: string): IOrder;
}
