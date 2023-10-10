import { createEvent, createStore } from "effector";

export const eventTimerPlus = createEvent<number>()

export const $storeTimer = createStore<number>(1500).on(eventTimerPlus, (store, offset)=>{ 
    return store + offset
});

