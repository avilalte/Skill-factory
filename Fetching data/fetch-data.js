// render in DOM: mini cards with title, ID, userID and status

const container = document.querySelector(".container");

const showData = (data) => {
  data.forEach((user) => {
    const { id, userId, title, completed } = user;

    let card = document.createElement("div");
    container.append(card);
    card.classList.add(`${completed == true ? "cardTrue" : "cardFalse"}`);

    card.innerHTML = ` 
    <span><b>Title: </b> ${title}</span>
    <span><b>ID: </b> ${id}</span>
    <span><b>User ID: </b> ${userId}</span>
    <span><b>Completed: </b> <span class=${
      completed == true ? "stateTrue" : "stateFalse"
    }>${completed}</span></span>
    `;
  });
};

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => showData(data));
