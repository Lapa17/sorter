class Sorter {
  constructor() {
    this.arr= [];
    this.comparator = (a,b)=> a-b;
    // your implementation
  }

  add(element) { 
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray(){
    return this.arr;
  }

  sort(indices) {
   const sortedArr = [];
   const sortedIndices = indices.sort((a,b)=> a-b);
   for(let i = 0, len = sortedIndices.length;i< len;i++){
     sortedArr.push(this.arr[sortedIndices[i]]);
   }
   sortedArr.sort(this.comparator);
   for(let i = 0, len = sortedIndices.length;i< len;i++){
     this.arr[sortedIndices[i]] = sortedArr.shift();
   }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;