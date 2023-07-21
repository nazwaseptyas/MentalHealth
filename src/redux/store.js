import { createStore } from "redux";

const initialState = []

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            return [...state, ...action.payload];
        case "remove":
            // remove
            // [{}, {}] -> hilangkan item paling akhir
            return {};
    }
};

const store = createStore(courseReducer);

export default store;