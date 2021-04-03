/*
https://www.youtube.com/watch?v=cWNEl4HE2OE
https://fireship.io/courses/javascript/interview-graphs/

Graph
=====
dataset that contains airports and routes
We can represent the graph as a Map where each key (node) is an airport and
the value (edges) is an array airports that it can connect to.

*/
// DATA
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ').sort()

const routes = [
    ['PHX', 'LAX'],
    ['LAX', 'MEX'],
    ['MEX', 'BKK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
    ['PHX', 'JFK'],
];

// The graph
const adj = new Map();

/*
  Map(11) {
    'BKK' => [ 'MEX', 'LIM' ],
    'EZE' => [ 'MEX' ],
    'HEL' => [ 'JFK' ],
    'JFK' => [ 'PHX', 'OKC', 'HEL', 'LOS' ],
    'LAP' => [],
    'LAX' => [ 'PHX', 'MEX' ],
    'LIM' => [ 'MEX', 'BKK' ],
    'LOS' => [ 'JFK' ],
    'MEX' => [ 'LAX', 'BKK', 'LIM', 'EZE' ],
    'OKC' => [ 'JFK' ],
    'PHX' => [ 'LAX', 'JFK' ]
  }
*/

// Add node
const addNode = airport => adj.set(airport, [])

// Add edge, undirected
function addEdge(src, dest) {
    adj.get(src).push(dest)
    adj.get(dest).push(src)
}

// Create the Graph
airports.forEach(addNode)

routes.forEach(route => addEdge(...route))

/*
Breadth-first Search
====================
BFS starts by pushing all of the direct children to a queue (first-in, first-out). It then visits each item in queue and adds the next layer of children to the back of the queue. This example uses a Set to keep track of nodes that have already been visited.
*/
function bfs(start) {

    const visited = new Set()
    let queue = [start]
    let airport

    while (queue.length > 0) {

        [airport, ...queue] = queue
        const dests = adj.get(airport);

        for (const dest of dests) {

            if (dest === 'BKK') {
                console.log(`[BFS] found Bangkok: ${[...visited]}`)
                return
            }

            visited.size === visited.add(dest).size
            || (queue = [...queue, dest])

            // if (!visited.has(dest)) {
            //     visited.add(dest)
            //     queue = [...queue, dest]
            // }
        }
    }
}

// determine if a route exists between PHX and BKK
bfs('PHX')



console.log('\n',
//     airports, '\n',
//     adj, '\n',
)

/*
Depth-first Search
==================
DFS will go as far into the graph as possible until it reaches a node without any children, at which point it backtracks and continues the process.

Starting from a node, we visit its 1st child, then the child's 1st child, etc. until either we find the needle node or we hit a node without any children, in which case we backtrack to the starting node (?) and repeat with other children (?)

The algorithm can be implemented with a recursive function that keeps track of previously visited nodes. If a node has not been visited, we call the function recursively.

*/
function dfs(start, visited = new Set()) {
    console.log(start)
    visited.add(start)
    const destinations = adj.get(start)

    for (const dest of destinations) {
        if (dest === 'BKK') {
            console.log(`[DFS] found Bangkok: ${[...visited]}`)
            return;
        }
        
        if (!visited.has(dest)) {
            dfs(dest, visited);
        }
    }
}

dfs('PHX')
