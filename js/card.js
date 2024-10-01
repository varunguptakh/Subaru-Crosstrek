document.addEventListener("DOMContentLoaded", () => {
  const cardRow = document.getElementById("card-row");

  cardData.forEach((card, index) => {
    const cardElement = document.createElement("div");
    if (index % 2 == 0) {
      cardElement.className = "card leftCard";
    } else {
      cardElement.className = "card rightCard";
    }

    const cardImgContent = document.createElement("div");
    cardImgContent.className = "card-img-content";

    const cardImage = document.createElement("img");
    cardImage.src = card.image;
    cardImage.alt = card.title;
    cardImage.className = "gallery-img";

    const cardContent = document.createElement("div");
    cardContent.className = "card-content";

    const cardTitle = document.createElement("div");
    cardTitle.className = "card-title";
    cardTitle.textContent = card.title;

    const cardDescription = document.createElement("div");
    cardDescription.className = "card-description";
    cardDescription.textContent = card.description;

    cardImgContent.appendChild(cardImage);
    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);
    cardElement.appendChild(cardImgContent);
    cardElement.appendChild(cardContent);
    cardRow.appendChild(cardElement);
  });
});
