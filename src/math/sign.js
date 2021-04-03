// sign (n) should return:
//   -1 if n < 0
//    0 if n = 0
//    1 if n > 0

// sign :: Num a => a -> a
const sign = n => 
    n === 0 
        ? 0
        : n < 0
            ? -1
            : 1
;
 
export default sign;
