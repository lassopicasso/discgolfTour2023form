import "./App.css";

function App() {
  return (
    <>
      <div className="backgroundImg"></div>
      <main>
        <form action="">
          <label>
            Hva bør inkluderes i tjenesten Disc Golf Tournament?
            <textarea className="textArea" />
          </label>
          <button type="submit">Send</button>
        </form>
      </main>
    </>
  );
}

export default App;
