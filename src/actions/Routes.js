import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

export const BOOK_SEARCH = 'BOOK_SEARCH'

//GoogleBooksから検索する
function fetchData(book_title) {
  console.log('fetch now');

  return fetch("https://www.googleapis.com/books/v1/volumes?q=intitle:" + book_title + "&maxResults=" + maxResults + "&startIndex=" + startIndex * 10);
}

//取得しにいく
export function fetchBookData(bookData) {
  return {
    type: BOOK_SEARCH,
    book_data: bookData,
    start_index: startIndex,
  }
}

const maxResults = 10;
let startIndex = 0;

//受け取る
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS'
export function receiveBooks(bookData) {
  return {
    type: RECEIVE_BOOKS,
    books: bookData,
  }
}

export const SEARCH_ERROR = 'SEARCH_ERROR'
export function searchError(errorMessage, error) {
  return {
    type: SEARCH_ERROR,
    error: error,
  }
}

export function searchBookData(bookTitle) {
  //APIにアクセス
  //結果をsuccess,errorでActionに振り分ける
  return fetchData(bookTitle).then(
    sauce => dispatch(receiveBooks(sauce)),
    error => dispatch(apologize('検索出来ませんでした', error))
  )
}

function fetch_data1(book_title) {
  console.log('fetch now');

  fetch("https://www.googleapis.com/books/v1/volumes?q=intitle:" + book_title + "&maxResults=" + maxResults + "&startIndex=" + startIndex * 10)
    .then((response) => response.json())
    .then((responseData) => {
      if (responseData.items) {

      }
    }).done();
}