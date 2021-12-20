export type ArrItem = string|number|boolean|null;
export type SomeArr = Array<ArrItem>;

export interface User {
    name:string;
    age:number;
    size: {
        height:number;
        weight:number;
    }
    sayHello:() => void
}