const API_DOMAIN = "https://jsonplaceholder.typicode.com";

const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const formEl = document.querySelector("#new-post form");
const fetchBtn = document.querySelector("#available-posts button");

const jsonifyFormEl = (form) => {
  const fm = new FormData(form);
  const data = {};
  fm.forEach((val, key) => {
    data[key] = val;
  });
  return data;
};

const sendHttpRequest = (method, path, data) => {
  path = API_DOMAIN + path;
  // const promise = new Promise((resolve, reject) => {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open(method.toUpperCase(), path);
  //   xhr.onload = function () {
  //     if (xhr.status >= 200 && xhr.status < 300) {
  //       // convert the string to json
  //       resolve(JSON.parse(xhr.response));
  //     } else {
  //       reject(new Error(xhr.response));
  //     }
  //   };

  //   xhr.onerror = function() {
  //     reject(new Error("Failed"));
  //   }
  //   xhr.send(JSON.stringify(data));
  // });
  // return promise;

  // FETCH API returns promise by default, hence we dont have to use promise wrapper
  return fetch(path, {
    method: method.toUpperCase(),
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'product': 'side-project'
    }
  }).then((response) => {
    console.log("RESPONSE STATUS: " + response.status + " " + typeof(response.status));
    console.log(200 >= response.status < 300);
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      return response.json().then(errorData => {
        console.log(errorData);
        console.log(response.status);
        throw new Error("Something went wrong from server side");
      })
    }
  }).catch(error => {
    // if there is some error due to which network could not be made, eg network failure
    // then we reach in catch block
    // for any server side non 2xx response, it will go to .then()
    throw error;
  });
};

const fetchPosts = async () => {
  console.log("FETCHING POSTS...");
  let resp;
  try {
    resp = await sendHttpRequest("GET", "/pos");
    console.log(resp);
  } catch (error) {
    console.log(error.message);
    console.log(typeof error.message);
    resp = [];
  }
  const listOfPosts = resp;
  listOfPosts.map((post, idx) => {
    // make a deep copy of the post template
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title?.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    postEl.querySelector("li").id = post.id;
    listElement.append(postEl);
  });
};

async function createPost(title, content) {
  const userId = Math.random();
  const post = {
    title,
    userId,
    body: content,
  };
  const resp = await sendHttpRequest("POST", "/posts", post);
  return resp;
}

fetchBtn.addEventListener("click", fetchPosts);

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();
  const { title, content, ...others } = jsonifyFormEl(formEl);
  await createPost(title, content);
  console.log(title, content, others);
});

listElement.addEventListener("click", async (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
  if (event.target.tagName === "BUTTON") {
    const listElem = event.target.closest("li");
    const postId = listElem.id;
    const resp = await sendHttpRequest("DELETE", `/posts/${postId}`);
    console.log(resp);
    listElem.remove();
  }
});
