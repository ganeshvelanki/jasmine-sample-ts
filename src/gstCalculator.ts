import { gstItem } from "./models/gstItem";
import { gstType } from "./models/gstType";

// lets discuss test cases here.

// test for init ?
export class gstCalculator {
    
    // what can we test here ? lets discuss test cases.
    //
    public getGstAmountForItem(item: gstItem) {
        if(!item || item.gstType == undefined) {
            throw "Not a valid gst item.";
            return null;
        }

        return this.getTaxAmountForGSTType(item.gstType, item.value);
    }

    // what can we test here ? lets discuss test cases.
    // 
    public getTaxAmountForGSTType(gstTyp: gstType, itemValue: number) {
        switch(+gstTyp) {
            case gstType.Gst5:
                return itemValue * 0.05;
            case gstType.Gst12:
                return itemValue * 0.12;
            case gstType.Gst18:
                return itemValue * 0.18;
            case gstType.Gst28:
                return itemValue * 0.28;
            default:
                return 0;
        }
    }
}