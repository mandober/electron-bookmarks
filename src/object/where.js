// where - object helper; is it needed when we have lenses?


const prop = key => obj => obj[key]


// const where = ({ done }) => done === true
const where = k => v => obj => obj[k] === v ? obj : undefined

const wher = ({ _, done }) => obj => obj[done] ? obj : undefined


let tasks = [
    { id: 1, done: true } ,
    { id: 2, done: true } ,
    { id: 3, done: false },
    { id: 4, done: true },
]

let users = [
    { id: 1,  name: 'Carry Grant'    } ,
    { id: 2,  name: 'Jimmy Stewart'  } ,
    { id: 3,  name: 'Rock Hudson'    } ,
    { id: 6,  name: 'Jack Nicholson' } ,
    { id: 11, name: 'Robert Redford' } ,
    { id: 14, name: 'Paul Newman'    } ,
]


const doneTasks = tasks.filter(t => t.done)

// or just:
const doneTask = tasks => [].filter( where({done: true}) )

let {k1, k2} = { k1: 11, k2: 32 }

console.log('\n',
    // doneTasks,'\n',
    // doneTask(tasks),'\n',
    // where('done')(true)(tasks[0]),'\n',
    wher({ done: true })(tasks[0]),'\n',
    k1, k2,'\n',

)
