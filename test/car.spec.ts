import { car } from '../src/car';

describe('car start & stop functionality', () => {
    const suite: {car: car;} = {
        car: new car({})
    };

   it('should set isEngineRunning to true, when started.', () => {
       //Arrange
        //nothing here
       //Action
       suite.car.startEngine();
       //Assert
       expect(suite.car.isEngineRunning).toBeTruthy();
   })

   it('should set isEngineRunning to false, when stopped.', () => {
        //Arrange
        //nothing here
       //Action
       suite.car.stopEngine();
       //Assert
       expect(suite.car.isEngineRunning).toBeFalsy();
   })
});

describe('car init functionality', () => {
    it('should set is engine running to false.', () => {
        // Arrange
        const skodaRapid2021 = new car({});

        // Action
        // nothing here

        //Assert
        expect(skodaRapid2021.isEngineRunning).toBeFalsy();
    })
})