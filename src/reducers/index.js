import { combineReducers } from 'redux';
import searchReducers from './searchReducers';
import receiveReducers from './receiveReducers';

export default combineReducers({
    searchReducers,
    receiveReducers
    // aReducers,              // 作るたび追加していく
    // bReducers,
})