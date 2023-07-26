const button = document.querySelector('button');
const output = document.querySelector('p');


// promises have thress states,
// RESOLVED
// PENDING -> PUSHED TO BROWSER THREAD FOR EXECUTING
// REJECTED
// SETTLED => IF THERE IS NO MORE .THEN BLOCKS, PROMISE ENTERS IN THIS STATE
// we can use .finally() block to clean the mess

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    // this function is called immediately as soon as promise is instantiated
    // async code...
    setTimeout(() => {
      // mark promise object internally as resolved
      resolve(`WAITED FOR ${duration/1000} SECS`);
    },duration);
  });
  return promise;
}


const getPosition = (opts={}) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (successResp) => {
        resolve(successResp);
      }, 
      (errorResp) => {
        reject(errorResp);
      },
      opts
    )
  });
  return promise;
}

function trackUserHandler() {
  let i = 10
  let prom;
  let positionDetails; // leveraging closures
  prom = getPosition()
    .then(success => {
      positionDetails = success
      console.log(prom);
      return setTimer(2000);
    })
    .then(timerResp => {
      console.log(prom);
      console.log(timerResp);
      console.log(positionDetails);
      return "DONE WITH SUCCESSFUL EXECUTION";
    })
    .then(resp => {
      console.log(resp)
      return "HEHEHE"; // RETURNS PROMISE WRAPPER
    })
    .catch(err => {
      // catches any exception raised in above chanining
      // the other .then are skipped!
      console.log(err);
    })
    .finally(()=> {
      console.log(positionDetails);
      console.log("SETTLED")
    });
  
  setTimeout(() => {
    console.log("EVEN THOUGH THE TIMER IS 0, IT IS PUSHED TO MESSAGE QUEUE AND HENCE THIS LINE IS EXECUTED LATER!");
  },0)
  console.log('Getting position...');
  i += 10;
}

// async functions always returns promises
async function trackUser() {
  let getPos;
  try {
    getPos = await getPosition(); //await => .then() => returns resolve()
  } catch (error) {
    console.log("Error occured");  
    console.log(error);  
  }
  const timerData = await setTimer(2000);
  console.log(timerData, getPos);
}

// button.addEventListener('click', trackUserHandler); // using promises
button.addEventListener('click', trackUser); // using async-await

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
