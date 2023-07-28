// closure is nothing but a function remembering it's lexical scope

const once = (callback) => {
    let call_times = 0;
    // memoize
    let results = {};
    return (...args) => {
        if (args in results) {
            console.log("ARGS already in result");
            return results[args];
        }
        if (call_times === 0) {
            call_times += 1;
            results[args] = callback(...args)
            return results[args];
        }
        throw "Already executed"
    }
}

const add = (n1, n2) => n1+n2

const add_once = once(add);
console.log(add_once(10, 20))
console.log(add_once(10, 20))
console.log(add_once(30, 30))