import thunk from 'redux-thunk';
import { legacy_createStore as createStore, applyMiddleware} from 'redux';

import reducers from './reducers/index';

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
