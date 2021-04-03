/*

data Tree a = Leaf a | Node a (Tree a) (Tree a)

data Tree a = Node {rootLabel :: a, subForest :: Forest a}

type Forest a = [Tree a]

*/
