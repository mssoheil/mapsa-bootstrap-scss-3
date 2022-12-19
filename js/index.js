//const todoItems = document.querySelectorAll("#todos > li");

//for (const todoItem of todoItems) {
//todoItem.addEventListener("click", () => {
//const newElement = document.createElement("del");
//newElement.innerHTML = todoItem.innerHTML;
//todoItem.innerHTML = `<del>${todoItem.innerHTML}<del/>`;
//todoItem.appendChild(newElement);
//});
//}

function handleTodoDone(target) {
  const newElement = document.createElement("del");
  newElement.innerHTML = target.innerHTML;
  target.innerHTML = "";
  target.appendChild(newElement);
}

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}
