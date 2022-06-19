import './Content.css';

function Content() {
  return (
    <main className="App-content">
      <h1 className="Content-title">Fun Facts About React</h1>
      <ul className="Content-facts">
        <li>Was released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}

export default Content;