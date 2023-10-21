/* Declerations */
const listOfDecks = document.querySelector(".listOfDecks");
const deckForm = document.getElementById("deckForm");
const random = document.querySelector(".random");
const reset = document.querySelector(".reset");
const search = document.querySelector(".search");
const deckTitle = document.querySelector(".deckTitle");
const deckDescription = document.querySelector(".deckDescription");
const cardList = document.querySelector(".cardList");
let selectedDeck = null;

// Flashcard constructor
function Flashcard(keyword, description) {
  this.keyword = keyword;
  this.description = description;
}

// Deck constructor
function Deck(name) {
  this.name = name;
  this.cards = []; // An array to store flashcards

  // Method to add a flashcard to the deck
  this.addCard = function (keyword, description) {
      const newCard = new Flashcard(keyword, description);
      this.cards.push(newCard);
  };

  // Method to remove a flashcard from the deck
  this.removeCard = function (index) {
      if (index >= 0 && index < this.cards.length) {
          this.cards.splice(index, 1);
      }
  };

  // Method to get the number of flashcards in the deck
  this.cardCount = function () {
      return this.cards.length;
  };
}

/* Initializing an array to store decks
 * eg: const deck1 = new Deck("Deck 1");
 * decks.push(deck1) to add to it
*/
const decks = [];


// Function to update the list of decks
function updateDeckList() {
  listOfDecks.innerHTML = "";

  decks.forEach(function (deck, index) {
      const listItem = document.createElement("div"); 
      listItem.textContent = deck.name;

      // Apply styling
      listItem.style.cssText = "background-color: #C0C6CC; cursor: pointer; text-align: center; font-size: 24px;"; 

      // Add the hover effect using the :hover pseudo-class
      listItem.addEventListener("mouseover", function () {
        listItem.style.textDecoration = "underline";
      });
      listItem.addEventListener("mouseout", function () {
        listItem.style.textDecoration = "none";
      });

      listItem.addEventListener("click", function () {
        selectedDeck = deck;
        console.log("it goes wrong here");
        updateCards(selectedDeck);
      });
      console.log("it goes wrong here");
      listOfDecks.appendChild(listItem);
  });
  // Adding back the choose statement element. 
  const statement = document.createElement("p");
  statement.classList.add("statement");
  statement.textContent = "Choose a deck:";
  listOfDecks.insertBefore(statement, listOfDecks.firstChild);
}


// When going to the next screen
function updateCards(deck) {
  cardList.innerHTML = "";
  deck.cards.forEach(function (card) {
    const cardElement = document.createElement("div");
    let isKeywordVisible = true;
    cardElement.textContent = card.keyword;
    cardElement.classList.add("element");

    cardElement.addEventListener("click", function () {
      if (isKeywordVisible) {
        cardElement.textContent = card.description;
      } else {
        cardElement.textContent = card.keyword;
      }
      isKeywordVisible = !isKeywordVisible;
    });

      cardElement.style.cssText = "border: 1px solid #000; padding: 10px; margin: 5px; cursor: pointer;";
      cardList.appendChild(cardElement);
});
}

document.getElementById("addCardBtn").addEventListener("click", function () {
  const keywordInput = document.getElementById("keyword");
  const descriptionInput = document.getElementById("description");

  const keyword = keywordInput.value;
  const description = descriptionInput.value;
  if (!selectedDeck) {
    alert("Please select a deck to add the card to.");
    return;
  }
  selectedDeck.addCard(keyword, description);
  keywordInput.value = "";
  descriptionInput.value = "";
  updateCards(selectedDeck);
});



// Function to update the deck list
deckForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  const nameInput = document.getElementById("deckName");
  const descriptionInput = document.getElementById("deckDescription");
  
  const name = nameInput.value;
  const description = descriptionInput.value;

  // Check if a deck with the same name already exists
  const deckExists = decks.some(deck => deck.name === name);

  if (deckExists) {
      alert("A deck with the same name already exists. Please choose a different name.");
      nameInput.value = "";
      descriptionInput.value = "";
  } else {
      const deck = {
          name: name,
          description: description,
          cards: []
      };

      // Add the deck to the 'decks' array
      decks.push(deck);
      updateDeckList();

      // Clear the input fields
      nameInput.value = "";
      descriptionInput.value = "";
  }
});
