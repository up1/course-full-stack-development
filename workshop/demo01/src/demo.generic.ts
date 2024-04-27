function echo<T>(arg: T): T {
  return arg;
}

class Queue<XX> {
  private data: XX[] = [];
  push(item: XX) {
    this.data.push(item);
  }
}

let myQ1 = new Queue<number>();
let myQ2 = new Queue<string>();