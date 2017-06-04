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

  console.log(bookData)

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

export function searchBookData2(bookTitle) {
  return (dispatch) => {

    fetchData(bookTitle).then(
      sauce => dispatch(receiveBooks(sauce)))
  }
}

//@see https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3
export function searchBookData(bookTitle) {

  //itemsIsLoading(true)を返す

  //APIにアクセス
  //結果をsuccess,errorでActionに振り分ける
  return (dispatch) => {
    fetchData(bookTitle)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }

        return response
      })
      .then((response) => response.json())
      .then((items) => dispatch(receiveBooks(items)))
    // .catch(() => dispatch(itemsHasErrored(true)))

    // return fetchData(bookTitle).then(
    //   sauce => dispatch(receiveBooks(sauce)),
    //   error => dispatch(apologize('検索出来ませんでした', error))
    // )
  }
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