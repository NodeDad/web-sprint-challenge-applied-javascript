import axios from 'axios';

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  let card = document.createElement('div');
  card.classList.add('card');

  let headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = article.headline;
  card.appendChild(headline);

  let author = document.createElement('div');
  author.classList.add('author');

  let imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  author.appendChild(imgContainer);
  
  let authorPhoto = document.createElement('img');
  authorPhoto.setAttribute('src', article.authorPhoto)
  imgContainer.appendChild(authorPhoto);

  let authorName = document.createElement('span');
  authorName.textContent = article.authorName;
  author.appendChild(authorName);

  card.appendChild(author);


  return card;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5001/api/articles').then(res => {
    let concatArr = [res.data.articles.javascript, res.data.articles.bootstrap, res.data.articles.technology, res.data.articles.jquery, res.data.articles.node];
    for (let arr of concatArr) {
      for (let cardData of arr) {
        let card = Card(cardData);
        document.querySelector(selector).appendChild(card);
      }
    }
  });
}

export { Card, cardAppender }
