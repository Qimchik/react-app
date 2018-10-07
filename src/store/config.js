import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['currentUser'],
};

export const history = createHistory();

export default function configureStore(initialState) {
  const persistedReducer = persistReducer(persistConfig, reducer);
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history))),
    initialState,
  );
  const persistor = persistStore(store);

  return { store, persistor };
}
