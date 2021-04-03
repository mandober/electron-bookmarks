// https://joneshf.github.io/programming/2015/12/31/Comonads-Monoids-and-Trees.html

// BinaryTree
// data Tree a = Leaf a annot | Branch (Tree a) (Tree a) annot

// Leaf :: val -> annot -> Tree val annot
function Leaf(val, annotation) {
    return {
        annotation,
        val,
        toString: () => `Leaf(${val}, ${annotation})`,
        // Functor
        map: f => Leaf(val, f(annotation)),
    }
}

// Branch :: Tree val annot -> Tree val annot -> annot -> Tree val annot
function Branch(left, right, annotation) {
    return {
        annotation,
        left,
        right,
        toString: () => `Branch(${left}, ${right}, ${annotation})`,
        // Functor
        map: f => Branch(left.map(f), right.map(f), f(annotation)),
    }
}


const l1 = Leaf(1, 'leaf 1')
const l2 = Leaf(2, 'leaf 2')
const l3 = Leaf(3, 'leaf 3')
const l4 = Leaf(4, 'leaf 4')

const b1 = Branch(l1, l2, 'branch1')
const b2 = Branch(l3, l4, 'branch2')

const b0 = Branch(b1, b2, 'root branch')



console.log('\n',
    b0.toString(), '\n',
    //l1.toString(), '\n',
    //l2.toString(), '\n',
    //b1.toString(), '\n',
    b0.map(str => str.length).toString(), '\n',
    b0.map(_ => false).toString(), '\n',
)
