import '../styles/AddBook.css';

const AddBook = () => (
  <div className="add-container">
    <h2>ADD NEW BOOK</h2>
    <form action="">
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Author" />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;
