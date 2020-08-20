//copy cate frome jhonkar mahbub



 class Node{
 constructor(value){
   this.value = value;
   this.next;
 }
}

class LinkedList {
 constructor(head) {
   this.head = head;
 }
 add(newNode){
    var currentNode = this.head;
    while(currentNode.next != undefined){
       currentNode = currentNode.next;
     }
     currentNode.next = newNode;
 }
}


var head= new Node("amader");
var manobBondon = new LinkedList(head);

var pant = new Node("pant");
manobBondon.add(pant);

var dhila = new Node("dhila");
manobBondon.add(dhila);

var keno = new Node("keno");
manobBondon.add(keno);

var kotripokkho = new Node("kotripokkho");
manobBondon.add(kotripokkho);

var jobab = new Node("jobab");
manobBondon.add(jobab);

var chai = new Node("chai");
manobBondon.add(chai);

console.log(manobBondon);
