export default class BookEntry {

  constructor(entryData){
    this._entryData = entryData;
  }

  get entryData(){
    return this._entryData;
  }

  get totalItems(){
    return this._entryData.totalItems;
  }
}