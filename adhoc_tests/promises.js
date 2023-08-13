const makePromise = (raise=false) => {
    const promise = new Promise((resolve, reject) => {
        if (raise) {
            reject("REJECTING...")
        } else {
            resolve("Kuch to locha hai");
        }
    })
    return promise
}



execute = () => {
    makePromise()
        .then(resp => {
            // throw new Error("hello world");
            return makePromise();
        })
        .then(resp => {
            // if we want to merge the inner .then() and .catch() with outer,
            // we will have to return it
            return makePromise()
                .then(str => {
                    throw new Error(str);
                })
                .catch(err => {
                    console.log("Throwing...");
                    throw new Error(err);
                })
        })
        .catch(resp => {
            // console.log(resp);
            console.log("INSIDE CATCH")
            console.log(resp.message);
        })
}

execute()