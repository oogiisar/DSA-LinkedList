class _Node {
    constructor(val, next) {
      this.val = val
      this.next = next
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null
    }
  
    insertFirst(item) {
      this.head = new _Node(item, this.head)
    }
  
    insertLast(item) {
      if (this.head === null) {
        this.insertFirst(item)
    } else {
        let tempNode = this.head
        while (tempNode.next !== null) {
          tempNode = tempNode.next
        }
        tempNode.next = new _Node(item, null)
      }
    }
    insertBefore(newItem, beforeItem) {
        if(this.head === null) {
            this.insertFirst(newItem)
            return
        }
        let currNode = this.head
        let prevNode = this.head

        while(currNode !== null && currNode.val !== beforeItem) {
            prevNode = currNode
            currNode = currNode.next
        }
        if(currNode == null) {
            this.insertLast(newItem)
            return
        }

        const tempNode = new _Node(newItem, currNode)
        prevNode.next = tempNode
    }
    insertAfter(newItem, afterItem) {
        if(this.head === null) {
            this.insertFirst(newItem);
            return
        }
        let currNode = this.find(afterItem)
        if(currNode === null) {
            this.insertLast(newItem)
            return
        }
        const tempNode = new _Node(newItem, currNode.next);
        currNode.next = tempNode;

    }
    insertAt(item, position) {
        if (this.head === null) {
          this.insertFirst(item)
          return
        }
    
        let currNode = this.head
        let currPosition = 1
    
        while (currPosition < position - 1) {
          currNode = currNode.next
          currPosition++
        }
    
        const tempNode = new _Node(item, currNode.next)
    
        currNode.next = tempNode
    }

    remove(item) {
        if(!this.head) {
            return null
        }
        if(this.head.val === item) {
            this.head = this.head.next
            return
        }
        let currNode = this.head;
        let prevNode = this.head

        while (currNode !== null && currNode.val !== item) {
            prevNode = currNode
            currNode = currNode.next
          }
      
          if (currNode === null) {
            console.log('item not found')
            return
        }
          prevNode.next = currNode.next
    }
    find(item){
        let currNode = this.head
        if(!this.head) {
            return null
        }
        while (currNode.val !== item){
            if(currNode.next === null) {
                return null
            } else {
                currNode = currNode.next
            }
        }
        return currNode
    }
}


function main() {
    const SSL = new LinkedList()
    SSL.insertFirst('Apollo')
    SSL.insertLast('Boomer')
    SSL.insertLast('helo')
    SSL.insertLast('Husker')
    SSL.insertLast('Starbuck')
    SSL.insertLast('Tauhida')

// returns item not found 
// SSL.remove('squirrel')

    SSL.insertBefore('Athena', 'Boomer')
    SSL.insertAfter('Hotdog', 'Helo')

    SSL.remove('Tauhida')
return SSL
}


const LL = main()

function display(LL) {
  let output = ''

  let currNode = LL.head

  while (currNode !== null) {
    output += currNode.val

    if (currNode.next !== null) {
      output += ' -> '
    }

    currNode = currNode.next
  }

  console.log(output)
  // return output
}

display(LL)

function size(LL) {
  let size = 0

  let currNode = LL.head

  while (currNode !== null) {
    size++
    currNode = currNode.next
  }

  return size
}

const emptyLL = new LinkedList()
// console.log(size(emptyLL))
// console.log(size(LL))

function isEmpty(LL) {
  if (LL.head === null) {
    return true
  }

  return false
}

// console.log(isEmpty(emptyLL))
// console.log(isEmpty(LL))

function findPrevious(item, LL) {
  if (LL.head === null) {
    console.log(`linked list is empty!`)
    return
  }

  let currNode = LL.head
  let prevNode = LL.head

  while (currNode !== null && currNode.val !== item) {
    prevNode = currNode
    currNode = currNode.next
  }

  if (currNode === null) {
    console.log('Item not found')
    return
  }

  return console.log(prevNode.val)
}

// findPrevious('Kat', LL)
// findPrevious('Kat', emptyLL)
// findPrevious('Falsy', LL)

function findLast(LL) {
  //[1-> 2 -> 3]
  if (LL.head === null) {
    return 'linked list is empty'
  }

  let currNode = LL.head

  while (currNode.next !== null) {
    currNode = currNode.next
  }

  return currNode.val
}

// console.log(findLast(LL))
// console.log(findLast(emptyLL))

// Input = 1->2->3
// (1) current = 1
//     newNode = 1
//     newNode.next = 2

// 4. Removes duplicates in a Linked List with O(n^2)

function reverseListIter(LL) {
  // A -> B -> C
  let currNode = LL.head // A
  let prevNode = LL.head // A
  let nextNode = currNode.next // B

  while (nextNode !== null) {
    if (currNode === prevNode) {
      currNode.next = null // A -> null
    } else {
      currNode.next = prevNode // B -> A -> null
    }
    prevNode = currNode // prev = B
    currNode = nextNode // curr = C
    nextNode = nextNode.next // next = null
  }

  if (nextNode === null) {
    LL.head = currNode // head -> C -> B
    currNode.next = prevNode
  }

  return LL
}

display(reverseListIter(LL))


function cylceList(list){
    if (list.head === null) return 'error';
  
    let current = list.head;
    const check = [];
  
    while (current !== null){
      if (check.includes(current.value)){ 
        return `${current} is a duplicate node`;
      }
      current = current.next;
    }
}

function find3FromLast(SLL){

    if (SLL.head === null) return new Error('No List');
    const length = sizer(SLL);
    if (length < 3) return new Error('Not Possible');
    
    const thirdFromEnd = length - 3;
    let tempNode = SLL.head;
    let counter = 0;

    while (counter < thirdFromEnd){
      tempNode = tempNode.next;
      counter++;
    }
    return tempNode;
}
  
function findMiddle(SLL){

    const middle = Math.ceil(sizer(SLL)/2);
    return middle;
}

