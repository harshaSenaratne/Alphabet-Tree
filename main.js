/* Alphabet Tree */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  //Adding nodes to the tree
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  
  
  //InOrder traversal returns a sorted array
  inOrder() {
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {       
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    };
  }


  // Returns a Tree with unique values from the inserted trees 
  static createTreeWithUniqueValues( firstTree, secondTree){

    //sorts the first tree 
    var firstTreeInOrder = firstTree.inOrder();

    // sorts the second tree
    var secondTreeInOrder = secondTree.inOrder();
    
    //Filters unique values from the firstTreeInOrder & secondTreeInOrder arrays 
    var uniqueValueArray = firstTreeInOrder.filter(function(obj) { return secondTreeInOrder.indexOf(obj) == -1; });
     
    const uniqueTree = new BST();

    //Adds unique values to the new tree
    for(const val of uniqueValueArray) {
      
      uniqueTree.add(val);
    }

    // Returns the unique value tree in a alphabetical order
    return uniqueTree.inOrder();


};

}


//Initializing First Tree
const firstTree = new BST();

//Initializing Second Tree
const secondTree = new BST();


//Creating the First Tree
firstTree.add("d");
firstTree.add("f");
firstTree.add("a");
firstTree.add("x");
firstTree.add("j");
firstTree.add("v");
firstTree.add("t");
firstTree.add("l");
firstTree.add("u");


//Creating the Second Tree
secondTree.add("x");
secondTree.add("r");
secondTree.add("k");
secondTree.add("p");
secondTree.add("j");
secondTree.add("w");
secondTree.add("z");


console.log('inOrder: ' + firstTree.inOrder());
console.log('inOrder: ' + secondTree.inOrder());

console.log('createTreeWithUniqueValues: ',BST.createTreeWithUniqueValues(firstTree,secondTree) );
