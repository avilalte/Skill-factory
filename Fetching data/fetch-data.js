// render in DOM: mini card with title, ID, userID and status

const container = document.querySelector(".container");

const showData = (data) => {
  data.forEach((user) => {
    const { id, userId, title, completed } = user;

    let card = document.createElement("div");
    container.append(card);
    card.classList.add("card");

    card.innerHTML = ` 
    <span>Title: ${title}</span>
    <span>ID: ${id}</span>
    <span>User ID: ${userId}</span>
    <span>Completed: <span class=${
      completed == true ? "stateTrue" : "stateFalse"
    }>${completed}</span></span>
    `;
  });
};

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => showData(data));
