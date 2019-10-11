import { addNewTask, updateTask } from "./server";

async function myFunc() {
  await addNewTask({
    name: "my task",
    id: "12346"
  });
  await updateTask({
    id: "12346",
    name: "my task-updated"
  });
}

myFunc();
