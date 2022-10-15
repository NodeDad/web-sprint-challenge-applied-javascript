const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  let header = document.createElement('div');
  header.classList.add('header');

  let dateElem = document.createElement('span');
  dateElem.classList.add('date');
  dateElem.textContent = date;
  header.appendChild(dateElem);
  
  let titleElem = document.createElement('h1');
  titleElem.textContent = title;
  header.appendChild(titleElem);
  
  let tempElem = document.createElement('span');
  tempElem.classList.add('temp');
  tempElem.textContent = temp;
  header.appendChild(tempElem);

  return header;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  let elem = document.querySelector(selector);
  let header = Header('foo', 'bar', 'baz');
  elem.appendChild(header)
}

export { Header, headerAppender }
