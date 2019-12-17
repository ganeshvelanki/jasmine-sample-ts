import { gstCalculator } from '../src/gstCalculator';
import { gstItem } from '../src/models/gstItem';
import { gstType } from '../src/models/gstType';

describe('gst calculator getGstAmountForItem method', () => {
    const suite: { gstCalc: gstCalculator } = {
        gstCalc: new gstCalculator()
    };

    it('should return 0 for non taxable item.', () => {
        // Arrange
        const item = new gstItem({
            name: 'chicken',
            gstType: gstType.NonGst,
            value: 100
        });
        spyOn(suite.gstCalc, 'getTaxAmountForGSTType').and.callThrough();

        // Action
        let result = suite.gstCalc.getGstAmountForItem(item);

        // Assert
        expect(result).toEqual(0);
        expect(suite.gstCalc.getTaxAmountForGSTType).toHaveBeenCalledWith(item.gstType, item.value);
    });

    // it('should return 5 for item value 100.', () => {
    //     // Arrange

    //     // Action

    //     // Assert
    // });

    // it('should reutrn 12 for item value 100.', () => {
    //     // Arrange

    //     // Action

    //     // Assert
    // });

    // it('should reutrn 18 for item value 100.', () => {
    //     // Arrange

    //     // Action

    //     // Assert
    // });

    // it('should reutrn 28 for item value 100.', () => {
    //     // Arrange

    //     // Action

    //     // Assert
    // });
})