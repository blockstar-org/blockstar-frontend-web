import type { PayloadAction } from '@reduxjs/toolkit';
export interface CounterState {
    value: number;
}
export declare const counterSlice: import("@reduxjs/toolkit").Slice<CounterState, {
    increment: (state: import("immer").WritableDraft<CounterState>) => void;
    decrement: (state: import("immer").WritableDraft<CounterState>) => void;
    incrementByAmount: (state: import("immer").WritableDraft<CounterState>, action: PayloadAction<number>) => void;
}, "counter", "counter", import("@reduxjs/toolkit").SliceSelectors<CounterState>>;
export declare const increment: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"counter/increment">, decrement: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"counter/decrement">, incrementByAmount: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<number, "counter/incrementByAmount">;
declare const _default: import("redux").Reducer<CounterState, import("redux").UnknownAction, CounterState>;
export default _default;
