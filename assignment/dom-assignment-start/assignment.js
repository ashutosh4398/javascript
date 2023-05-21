const selectTask1UsingConventionalApproach = () =>
  document.getElementById("task-1");

const selectTask1UsingModernApproach = () => document.querySelector("#task-1");

const task1El = selectTask1UsingConventionalApproach();

const applyStylesToTask1 = (taskEl) => {
  taskEl.style.color = "white";
  taskEl.style.backgroundColor = "black";
};

// question 1
applyStylesToTask1(task1El);

const changeTitleViaProperty = () => {
  const headEl = document.head;
  const titleEl = headEl.querySelector("title");
  titleEl.textContent = "Assignment Solved";
};

const changeTitleDirectly = () => {
  const titleEl = document.querySelector("title");
  titleEl.textContent = "Assignment Solved 2";
};

// question 2
changeTitleViaProperty();
changeTitleDirectly();

const h1Elem = document.querySelector('h1');
h1Elem.textContent = 'Assignment Solved';



// not a good approach
const addNewTaskUsingHTMLString = () => {
  // this is not a good approach as we are telling HTML to re-render
  // all the list items 
  // not good for bigger applications / performance issues can occur
  const newLiItem = `
    <li>New Task added using HTML String</li>
  `;
  const ol = document.querySelector("ol");
  ol.innerHTML += newLiItem;

  // NOTE: incase of input tag, this will result in unexpected results due to value attribute
}


// better approach
const addNewTaskUsingHTMLStringPosition = () => {
  const newLiItem = `
    <li>New Task added using HTML String</li>
  `;
  const ol = document.querySelector("ol");
  // ol.insertAdjacentHTML('beforebegin', newLiItem);
  // ol.insertAdjacentHTML('afterend', newLiItem);
  // ol.insertAdjacentHTML('afterbegin', newLiItem);
  ol.insertAdjacentHTML('beforeend', newLiItem);
}


// BEST APPROACH since we also have access to newly created element
// instead of querying it
const addNewTaskUsingMethods = () => {
  const ol = document.querySelector("ol");
  const listItemElem = document.createElement("li");
  listItemElem.textContent = "New Task";
  ol.appendChild(listItemElem);
}