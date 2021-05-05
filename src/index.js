let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(toy => { 
      let toyCard = document.querySelector('#toy-collection')
      let toyName = document.createElement('h2')
      let toyUrl = document.createElement('img')
      let toyLikes = document.createElement('p')
      let toyLikeButton = document.createElement('button')
      toyCard.appendChild(toyName)
      toyCard.appendChild(toyUrl)
      toyCard.appendChild(toyLikes)
      toyCard.appendChild(toyLikeButton)
      toyName.innerHTML = toy.name
      toyUrl.innerHTML = toy.image
      toyLikes.innerHTML = toy.likes
    })
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

