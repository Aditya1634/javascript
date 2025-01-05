// Insertion at a desired postiton
function insertAtPos(head, pos, data){
  // Invalid Position
  if (pos < 1) {
    console.log("Invalid Position")
    return head
  }

  // Start Position
  if (pos === 1) {
    const newNode = new Node(data)
    newNode.next = head
    return newNode
  }

  // Traverse List before Insertion Point
  let prev = head
  let cnt = 1
  while (cnt < pos-1 && prev!=null) {
    cnt++
    prev = prev.next
  }

  // If position is greater than number of nodes
  if (prev === null) {
    console.log("Invalid Position")
    return head
  }

  // Insert new node at specified position
  const newNode = new Node(data)
  newNode.next = prev.next
  prev.next = newNode
  return head;

}

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

let ll = new LinkedList();
console.log(ll.isEmpty());
console.log(insertAtPos(null, 1, 25))