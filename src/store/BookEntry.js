export default class BookEntry {

  constructor(entryData){
    console.log(entryData);
    this._entryData = entryData;
  }

  get entryData(){
    return this._entryData;
  }
}