import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import RootReducers from './RootReducers';
import sagas from './sagas';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];


const store = configureStore({
    reducer: RootReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(middleware),
});

sagaMiddleware.run(sagas);

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
