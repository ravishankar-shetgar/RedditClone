import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import {rootSaga} from './root-saga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whiteList: ['userState'],
  blacklist: [],
};

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const Store = createStore(
  persistedReducer,
  {},
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export const Persistor = persistStore(Store);
