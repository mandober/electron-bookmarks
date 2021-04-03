// ---------------------------------------------------------------------- about
/*
Imports the specified function
if it finds the eponymous file
plus the .js suffix, provided
the function is a default export

import statement:
import x from '../src/f/x.js'
import ${id} from `../src/f/${id}.js`
import ${id} from `... ${id}.js`

algo:
1. check if cwd is 'src' (lvl = 0)
2. if not: go up (lvl++), then repeat (1) until 'src' found (3) or lvl>5 (end)
3. check if x.js exists; return path=`src / ${ ${dir_i}+'/'} ${x} .js`
4. enum dirs in src ASC, if none (end)
5. cd into dir_i
6. (3)


*/


// ---------------------------------------------------------------------- check
console.log('\n',
    'theorytheorytheorytheorytheory', '\n',
)
