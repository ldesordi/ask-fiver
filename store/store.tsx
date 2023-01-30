
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createWrapper } from "next-redux-wrapper";
import Account from './reducers/Account/Account'

const reducers = combineReducers({
  Account,
})

const middlwares = applyMiddleware(thunk, logger)

export const store = createStore(
  reducers,
  // enhancers,
  middlwares,
)

const makeStore = () => store;
export const wrapper = createWrapper(makeStore, { debug: true });

export type RootState = ReturnType<typeof store.getState>;