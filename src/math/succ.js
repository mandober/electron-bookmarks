// succ :: Num a => a -> a
const succ = n => n + 1;

export default succ;

/*
hyperop0(n) ≡ succ(n) ≡ n'
hyperop1(m, n) ≡ hyperop0(m, n-1) ≡ add(m,n) ≡ m + n
hyperop2(m, n) ≡ hyperop1(m, n-1) ≡ mul(m,n) ≡ m * n
hyperop3(m, n) ≡ hyperop2(m, n-1) ≡ exp(m,n) ≡ m ^ n ≡ m ↑¹ n


¹²³
*/
