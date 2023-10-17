/** Vehicle type */
const VehicleMap = {
    CAR: "CAR",
    BIKE: "BIKE",
    TUKTUK: "TUKTUK",
} as const;

/** Abstract product interfaces */
interface IVehicle {
    type: (typeof VehicleMap)[keyof typeof VehicleMap];
}

interface IRoute {
    distance: number;
    duration: number;
}

/** Abstract Factory interface */
interface IRideFactory {
    createVehicle(): IVehicle;
    createRoute(): IRoute;
}

/** Concrete factories */
class UrbanRideFactory implements IRideFactory {
    public createVehicle(): IVehicle {
        return {
            type: VehicleMap.CAR,
        };
    }
    public createRoute(): IRoute {
        return {
            distance: 60,
            duration: 120,
        };
    }
}

class SubUrbanRideFactory implements IRideFactory {
    public createVehicle(): IVehicle {
        return {
            type: VehicleMap.TUKTUK,
        };
    }
    public createRoute(): IRoute {
        return {
            distance: 30,
            duration: 60,
        };
    }
}

class RuralRideFactory implements IRideFactory {
    public createVehicle(): IVehicle {
        return {
            type: VehicleMap.BIKE,
        };
    }
    public createRoute(): IRoute {
        return {
            distance: 30,
            duration: 60,
        };
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
