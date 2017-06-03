// actionのtypeをimportしておく
import {
  BOOK_SEARCH,
  RECEIVE_BOOKS,
  SEARCH_ERROR,
} from '../actions/Routes';

// 初期化
const initialState = {
  text: '',
};

// 入り口は一つにしてswitchで分ける。
// stateは前回のstateもしくはinitialStateが
// actionはactionでreturnしたvalueが渡る。
// reducer内ではstateを更新することはせず、新しいstate(assignして)を返す。
export default function searchReducer(state = initialState, action = {}) {
  // typeでswitchする
  switch (action.type) {
    case BOOK_SEARCH:
      // 空のObnectにマージする
      return Object.assign({}, state, {
        text: action.text,
      })
    // 初期状態を返してあげる必要がある。
    default:
      return state;
  }
}