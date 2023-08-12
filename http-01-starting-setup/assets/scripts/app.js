const API_DOMAIN = "https://jsonplaceholder.typicode.com";

const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const formEl = document.querySelector("#new-post form");
const fetchBtn = document.querySelector("#available-posts button");


const jsonifyFormEl = form => {
    const fm = new FormData(form);
    const data = {};
    fm.forEach((val, key) => {
        data[key] = val;
    })
    return data;
}

const sendHttpRequest = (method, path, data) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method.toUpperCase(), API_DOMAIN + path);
    xhr.onload = function () {
      // convert the string to json
      resolve(JSON.parse(xhr.response));
    };
    xhr.send(JSON.stringify(data));
  });
  return promise;
};

const fetchPosts = async () => {
  const resp = await sendHttpRequest("GET", "/posts");
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
        title, userId, 
        body: content
    };
    const resp = await sendHttpRequest("POST", "/posts", post);
    return resp;
}

fetchBtn.addEventListener("click", fetchPosts);

formEl.addEventListener("submit", async (event) => {
    event.preventDefault();
    const {title, content, ...others} = jsonifyFormEl(formEl);
    await createPost(title, content);
    console.log(title, content, others);
})


listElement.addEventListener('click', async event => {
  if(event.target.tagName === "BUTTON") {
    const listElem = event.target.closest("li")
    const postId = listElem.id;
    const resp = await sendHttpRequest("DELETE", `/posts/${postId}`);
    console.log(resp)
    listElem.remove();
  }
})