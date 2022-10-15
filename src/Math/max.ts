export class Mathe {
    
    public static num: Array<number>;

    static max(num: Array<number>): number {
        let tmp = 0;
        for(let i = 0; i < num.length; i++) {
            if(num[i] > tmp) {
                tmp = num[i];
            }
        }
        return tmp;
    }
}