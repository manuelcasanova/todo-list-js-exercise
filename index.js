// // // Arrays to keep track of each task's state
// // const taskTitles = [];
// // const taskComplete = [];
// // const taskDescriptions = [];



// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskComplete.push(false);
// }

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean cat litter", "Take all the -you know- out of the box");
const task2 = newTask("Do laundry", "Do not forget to separate the colors");
const tasks = [task1, task2];

console.log(tasks);
