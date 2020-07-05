console.log('it works');

// dragging the HTML to access the elements if it is neccessary

const postListDiv = document.getElementById('post-list');
const submitButton = document.getElementById('submit-form');
const heading = document.getElementsByTagName('h5');
const paragraph = document.getElementsByTagName('p');

//creating new elements for each div

let newDivSpace = document.createElement('div');
let newCardDiv = document.createElement('div');
let newHeading = document.createElement('h5');
let newParagraph = document.createElement('p');


//add some classes needed for the new elements

newDivSpace.classList.add("card", "some-space");
newCardDiv.classList.add("card-body");
newHeading.classList.add("card-title");
newParagraph.classList.add("card-text");

//modifying the DOM by attending the new elements

newCardDiv.appendChild(newHeading);
newCardDiv.appendChild(newParagraph);
newDivSpace.appendChild(newCardDiv);
postListDiv.appendChild(newDivSpace);

// New title and new paragraph's contents

newHeading.textContent = 'My Second Article';
newParagraph.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.';

//Submit our submit button by clicking the submit button.

const transportResult = `${heading} \n ${paragraph}`;

submitButton.addEventListener('click', ($event) => {
  transportResult.textContent = $event.target.value;
  document.querySelector('form').reset();
});
