const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  let i = 10
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimeout(() => {
        console.log(posData);
        console.log(i)
      },2000)
    },
    error => {
      console.log(error);
    }
  );
  setTimeout(() => {
    console.log("EVEN THOUGH THE TIMER IS 0, IT IS PUSHED TO MESSAGE QUEUE AND HENCE THIS LINE IS EXECUTED LATER!");
  },0)
  console.log('Getting position...');
  i += 10;
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
