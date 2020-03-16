

// id :: a -> a

// const :: a -> b -> a

// flip :: a -> b -> a

// scanl :: (b -> a -> b) -> b -> [a] -> [b]

// scanr :: (a -> b -> b) -> b -> [a] -> [b]


// append :: [a] -> [a] -> [a]

// length :: [a] → Int
// length = fold (\ x n -> 1 + n) 0

// reverse :: [a] → [a]
// reverse = fold (\ x xs -> xs ++ [x]) []

// map :: (a -> b) -> [a] -> [b]
// map f = fold (\ x xs -> (f x) : xs) []

// filter :: (a -> Bool) -> [a] -> [a]
// filter p = fold (\ x xs -> if p x then x:xs else xs) []


// impl:
// flatten
// flatMap
// snoc
// using foldr and foldl
// foldr works on infinite data structures, but foldl doesn't (oh,yeah?)
