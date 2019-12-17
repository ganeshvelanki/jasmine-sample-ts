import { gstType } from "./gstType";

export class gstItem {
    public name: string;
    public gstType: gstType;
    public value: number;
    public taxAmount: number;

    constructor(args: any) {
        this.name = args.name;
        this.gstType = args.gstType || gstType.NonGst;
        this.value = args.value || 0;
    }
}