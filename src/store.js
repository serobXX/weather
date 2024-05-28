import createSagaMiddleware from "redux-saga";
import { watchFetchData } from "./saga";
import rootReducer from './reducers'
import { configureStore } from "@reduxjs/toolkit";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchData);

export default store;