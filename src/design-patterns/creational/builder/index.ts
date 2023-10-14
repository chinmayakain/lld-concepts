/** Product */
class Computer {
    private components: string[] = [];

    public addComponents(component: string) {
        this.components.push(component);
    }

    public showSpecs() {
        console.log(`Computer Specs: ${this.components.join(", ")}`);
    }
}

/** Builder Interface */
interface IComputerBuilder {
    setProcessor(): void;
    setRAM(): void;
    setStorage(): void;
    setGPU(): void;
    setRGBLighting(): void;
    setMouse(): void;
    setKeyBoard(): void;
    setCoolingSystem(): void;
    getComputer(): Computer;
}

/** Builder Abstract Class */
abstract class ComputerBuilder {
    protected computer = new Computer();
    abstract setProcessor(): void;
    abstract setRAM(): void;
    abstract setStorage(): void;
    abstract setGPU(): void;
    abstract setRGBLighting(): void;
    abstract setMouse(): void;
    abstract setKeyBoard(): void;
    abstract setCoolingSystem(): void;

    public getComputer(): Computer {
        return this.computer;
    }
}

/** Concrete classes can implement either Builder Interface or Builder Abstract Class */

/** Concrete Builders */
class GamingComputer extends ComputerBuilder {
    // private computer: Computer = new Computer();

    setProcessor() {
        this.computer.addComponents("High-performance CPU");
    }

    setRAM() {
        this.computer.addComponents("32GB Corsseir RAM");
    }

    setStorage() {
        this.computer.addComponents("2TB NVMe SSD");
    }

    setGPU() {
        this.computer.addComponents("Dedicated Nvidia 6GB RTX 3080");
    }

    setCoolingSystem() {
        this.computer.addComponents("Liquied Cooling");
    }

    setKeyBoard() {
        this.computer.addComponents("Razzor Black Widow Mechanical KeyBoard");
    }

    setMouse() {
        this.computer.addComponents("Razzor Gaming Mouse");
    }

    setRGBLighting() {
        this.computer.addComponents("Philips RGB Lighthing");
    }

    getComputer() {
        return this.computer;
    }
}

class WorkStationComputer extends ComputerBuilder {
    // private computer: Computer = new Computer();

    setProcessor(): void {
        this.computer.addComponents("High-performance CPU");
    }

    setRAM() {
        this.computer.addComponents("16GB Corsseir RAM");
    }

    setStorage() {
        this.computer.addComponents("526GB SSD");
    }

    setGPU() {
        this.computer.addComponents("Dedicated Nvidia 4GB 1050-Ti");
    }

    setCoolingSystem() {
        /** No Cooling system */
    }

    setKeyBoard() {
        this.computer.addComponents("Keychron K2 Mechanical KeyBoard");
    }

    setMouse() {
        this.computer.addComponents("logitech Master M2 Mouse");
    }

    setRGBLighting() {
        /** No Lighting System */
    }

    getComputer() {
        return this.computer;
    }
}

/** Director */
class ComputerDirector {
    private builder: ComputerBuilder;

    constructor(builder: ComputerBuilder) {
        this.builder = builder;
    }

    buildComputer(): Computer {
        this.builder.setProcessor();
        this.builder.setRAM();
        this.builder.setGPU();
        this.builder.setStorage();
        this.builder.setCoolingSystem();
        this.builder.setKeyBoard();
        this.builder.setMouse();
        this.builder.setRGBLighting();

        return this.builder.getComputer();
    }
}

/** Client */
const gamingComputerBuilder = new GamingComputer();
const workStationComputerBuilder = new WorkStationComputer();

const gamingComputerDirector = new ComputerDirector(gamingComputerBuilder);
const workstationComputerDirector = new ComputerDirector(workStationComputerBuilder);

const gamingComputer = gamingComputerDirector.buildComputer();
const workStationComputer = workstationComputerDirector.buildComputer();

gamingComputer.showSpecs();
workStationComputer.showSpecs();
