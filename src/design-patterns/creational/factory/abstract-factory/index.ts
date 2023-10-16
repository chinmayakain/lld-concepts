/** Vehicle type */
const vehicleMap = {
    CAR: "CAR",
    BIKE: "BIKE",
    TUKTUK: "TUKTUK",
} as const;

/** Abstract product interfaces */
interface IVehicle {
    type: (typeof vehicleMap)[keyof typeof vehicleMap];
}

interface IRoute {
    distance: number;
    duration: number;
}

/** Concrete products */
class Car implements IVehicle {
    type = vehicleMap.CAR;
}

class Bike implements IVehicle {
    type = vehicleMap.CAR;
}

class TukTuk implements IVehicle {
    type = vehicleMap.TUKTUK;
}

class LongRoute implements IRoute {
    distance = 60;
    duration = 120;
}

class ShortRoute implements IRoute {
    distance = 30;
    duration = 60;
}

/** Abstract Factory interface */
interface IRideFactory {
    createVehicle(): IVehicle;
    createRoute(): IRoute;
}

/** Concrete factories */
class UrbanRideFactory implements IRideFactory {
    public createVehicle(): IVehicle {
        return new Car();
    }
    public createRoute(): IRoute {
        return new LongRoute();
    }
}

class SubUrbanRideFactory implements IRideFactory {
    public createVehicle(): IVehicle {
        return new TukTuk();
    }

    public createRoute(): IRoute {
        return new ShortRoute();
    }
}

class RuralRideFactory implements IRideFactory {
    public createVehicle(): IVehicle {
        return new Bike();
    }

    public createRoute(): IRoute {
        return new ShortRoute();
    }
}

/** Client Code */
function orderRide(factory: IRideFactory): string {
    const vehicle = factory.createVehicle();
    const route = factory.createRoute();

    return `Ordered a ${vehicle.type} for a ${route.distance} km ride. Estimated duration: ${route.duration} minutes.`;
}

console.log("Urban Ride:");
console.log(orderRide(new UrbanRideFactory()));

console.log("SubUrban Ride:");
console.log(orderRide(new SubUrbanRideFactory()));

console.log("Rural Ride:");
console.log(orderRide(new RuralRideFactory()));
