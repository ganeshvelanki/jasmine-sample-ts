export class car {

    constructor(args: any) {
        this.isEngineRunning = false; // test for this initalization
    }

    //can be tested ? nope, there are not much cases, only initalization test can be done.
    public isEngineRunning: boolean;

    //can be tested ? yes, make sure that true is set to isEngineRunning.
    public startEngine() {
        this.isEngineRunning = true;
    }

    //can be tested ? yes, make sure that false is set to isEngineRunning.
    public stopEngine() {
        this.isEngineRunning = false;
    }
}
