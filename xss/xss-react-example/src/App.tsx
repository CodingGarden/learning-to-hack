import createDOMPurify from "dompurify";

const DOMPurify = createDOMPurify();

const query = new URLSearchParams(window.location.search);
const search = query.get("search");

function App() {
  if (search) {
    return (
      <div className="container">
        <a href="/" className="button">
          Search Again
        </a>
        <h2>You searched for:</h2>
        <div
          title={search}
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(search) }}
        />
      </div>
    );
  }

  return (
    <div className="container" id="example">
      Enter your search term:
      <form>
        <input type="text" name="search" />
      </form>
    </div>
  );
}

export default App;

