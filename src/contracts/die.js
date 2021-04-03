/**
 * Prints the name of the offender when a contract is broken.
 *
 * die :: String -> ⊥
 */
const die = (received, expected) =>
    console.error(`
      Expected: \u001b[1;31m${expected}\u001b[m
      Received: \u001b[1;32m${typeof received === 'function'
        ? received.toString() 
        : JSON.stringify(received)}\u001b[m`)
;

export default die;



// ----------------------------------------------------------------------------
/*
This function is called when a contract gets broken and it prints a complaint naming the perpetrator. It makes sure the execution is aborted.

Prints the name of the offender when a contract is broken

Part of the contracts subsystem.
Should pretty print a reason why.
Would be nice to elide printing the stack trace mambo.
If a fn is received that wasn't expected, stringyfy it with toString()


*/
//-----------------------------------------------------------------------------
