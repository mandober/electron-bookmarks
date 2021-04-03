// BST
/*
Elements must impl Ord (which implies Eq).
Elements are not to be duplicated.

*/
class BSTNode {
    constructor(data, id) {
        this.data  = data
        this.id    = id
        this.left  = null
        this.right = null
    }
}

//-----------------------------------------------------------------------------
const ORDER = {
    PRE : 0,
    IN  : 1,
    POST: 2,
}

//-----------------------------------------------------------------------------
class BST {
    constructor () {
        this.root = null
        this.size = 0
    }

    insert(v, node, id = 10) {
        //console.log(`About to insert: ${v}`)

        // The empty tree, insert as the new root
        if (this.root == null) {
            this.root = new BSTNode(v, '10')
            this.size = this.size + 1
            //console.log(`The tree is empty so the new root is: ${v}`)
            return this
        }

        // Non-empty tree: set node to the root
        node = node || this.root

        // Compare val to insert with root data
        if (v === node.data) {
            //console.log(`That value already exists: ${v}`)
            // data already exists:
            return this
        } else {
            v < node.data
                ? this.insertNode(node, v, 'left', id+'0')   // LT: L
                : this.insertNode(node, v, 'right', id+'1')  // GT: R
        }
    }

    insertNode(n, v, side, id) {
        // if child node.{side} is null: insert node here
        if (n[side] == null) {
            n[side] = new BSTNode(v, id)
            this.size = this.size + 1
            //console.log(`The new node ${v} inserted here`)
            return this // done
        }

        // if child node.{side} is not null:
        // set node to the current node and do it again
        else {
            this.insert(v, n[side], id)
        }
    }

    traverse(order, node = this.root) {
        // order: 0,1,2
        if (!node) return;

        if (order === 0) console.log(node.data);
        this.traverse(order, node.left);
        if (order === 1) console.log(node.data);
        this.traverse(order, node.right);
        if (order === 2) console.log(node.data);
    }

    breadthFirst(node = this.root) {
        if (!node) return;
        let queue = [];
        queue.push(node);

        while (queue.length > 0) {
            // dequeue node
            node = queue.shift();
            console.log(node.data);
            if (node.left)  queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
}


// ---------------------------------------------------------------------- check
const t1 = new BST()
t1.insert(11)
t1.insert(6)
t1.insert(15)
t1.insert(3)
t1.insert(8)
t1.insert(13)
t1.insert(17)
t1.insert(1)
t1.insert(5)
t1.insert(12)
t1.insert(14)
t1.insert(19)

console.log('\n',
    //JSON.stringify(t1, null, 2), '\n',
)

// t1.traverse(0)
// console.log('\n')

// t1.traverse(ORDER.IN)
// console.log('\n')

// t1.traverse(ORDER.POST)
// console.log('\n')

t1.breadthFirst()
console.log('\n')
