// actionのtypeをimportしておく
import {
  BOOK_SEARCH,
  RECEIVE_BOOKS,
  SEARCH_ERROR,
} from '../actions/Routes';

// 初期化
const initialState = {
  books: '',
};

// 入り口は一つにしてswitchで分ける。
// stateは前回のstateもしくはinitialStateが
// actionはactionでreturnしたvalueが渡る。
// reducer内ではstateを更新することはせず、新しいstate(assignして)を返す。
export default function receiveReducer(state = initialState, action = {}) {
  // typeでswitchする
  console.log(action);

  switch (action.type) {
    case RECEIVE_BOOKS:
      // 空のObjectにマージする
      return Object.assign({}, state, {
        books: action.books,
      })
    // 初期状態を返してあげる必要がある。
    default:
      return state;
  }
}