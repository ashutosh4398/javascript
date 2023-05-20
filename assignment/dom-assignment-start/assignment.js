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