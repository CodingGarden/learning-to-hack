const query = new URLSearchParams(window.location.search);
const search = query.get('search');
const exampleElement = document.querySelector('#example');

function sanitizeHTML(input) {
  // also need to handle attributes...
  // handles elements... probably...
  return input.replace(/\<|\>/g, 'NOT THIS TIME HACKER!');
}

if (search) {
  // Vulnerable! User input directly set in html
  // exampleElement.innerHTML = `
  //   <a href="/" class="button">Search Again</a>
  //   <h2>You searched for:</h2>
  //   <div>${search}</div>
  // `;
  
  // Not vulnerable! Uses node text instead of HTML
  // Node text does not render content! Only displays it!
  // exampleElement.innerHTML = `
  //   <a href="/" class="button">Search Again</a>
  //   <h2>You searched for:</h2>
  // `;
  // const searchTermElement = document.createElement('div');
  // // searchTermElement.innerText = search;
  // searchTermElement.textContent = search;
  // exampleElement.append(searchTermElement);

  // We write our own sanitizer function...
  // Not vulnerable.. mostly...
  // exampleElement.innerHTML = `
  //   <a href="/" class="button">Search Again</a>
  //   <h2>You searched for:</h2>
  //   <div title="${sanitizeHTML(search)}">
  //     ${sanitizeHTML(search)}
  //   </div>
  // `;


  // Most secure! Use a known secure library like DOMPurify
  exampleElement.innerHTML = `
  <a href="/" class="button">Search Again</a>
  <h2>You searched for:</h2>
  `;
  const options = { ALLOWED_TAGS: ['p', 'h1'] };
  const userSearchElement = document.createElement('div');
  userSearchElement.setAttribute('title', search);
  userSearchElement.innerHTML = DOMPurify.sanitize(search, options);
  exampleElement.append(userSearchElement);
}
