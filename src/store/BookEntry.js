export default class BookEntry {
//Hashで管理でいいんじゃね？
  constructor(entryData){
    this._entryData = entryData;
  }

  get entryData(){
    return this._entryData;
  }
}

const TEST_ENTRY_DATA = {
    kind: "books#volumes",
    totalItems: 4,
    items: [
    {
     kind: "books#volume",
     id: "n0WU-RX8-yoC",
     etag: "i1EbgqzMFpU",
     selfLink: "https://www.googleapis.com/books/v1/volumes/n0WU-RX8-yoC",
     volumeInfo: {
      title: "スレイヤーズ　水竜王の騎士(6)",
      authors: [
      "トミイ　大塚"
      ],
      imageLinks: {
       smallThumbnail: "http://books.google.com/books/content?id=n0WU-RX8-yoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
       thumbnail: "http://books.google.com/books/content?id=n0WU-RX8-yoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      }
     }
    },
    {
     kind: "books#volume",
     id: "n0WU-RX8-yoC",
     etag: "i1EbgqzMFpU",
     selfLink: "https://www.googleapis.com/books/v1/volumes/n0WU-RX8-yoC",
     volumeInfo: {
      title: "スレイヤーズ　水竜王の騎士(1)",
      authors: [
      "トミイ　大塚"
      ],
      imageLinks: {
       smallThumbnail: "http://books.google.com/books/content?id=n0WU-RX8-yoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
       thumbnail: "http://books.google.com/books/content?id=n0WU-RX8-yoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      }
     }
    }
   ]
  };