// trycatch takes a function and execs it in a try-catch block
const trycatch = f => {
    try {
        f()
    } catch (err) {
        console.log(err)
    }
}
