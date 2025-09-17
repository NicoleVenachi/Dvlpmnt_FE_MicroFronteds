export declare const useCounterStore: () => {
    counter: any;
    increment: () => {
        payload: undefined;
        type: "counter/increment";
    };
    decrement: () => {
        payload: undefined;
        type: "counter/decrement";
    };
    clear: () => {
        payload: undefined;
        type: "counter/clear";
    };
};
