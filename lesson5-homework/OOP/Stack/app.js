class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
    console.log("element pushed");
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    this.items.pop();
    console.log("element poped");
  }

  top() {
    if (this.isEmpty()) {
      console.log("stack is empty");
      return null;
    }
    console.log(`top element: ${this.items[this.items.length - 1]}`);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    console.log(`stack size: ${this.items.length}`);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.top();
stack.pop();
stack.top();
stack.size();
console.log(stack.isEmpty());
