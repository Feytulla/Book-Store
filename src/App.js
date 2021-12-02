import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BookPage from './pages/BookPage';
import Cart from './pages/Cart';
import SearchResultPage from './pages/SearchResultPage';
import Pagination from './components/Pagination';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookPage />}>
          <Route path=":isbn13" element={<BookPage />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<SearchResultPage />}>
          <Route path=":searchResult" element={<SearchResultPage />} >
            <Route path=":pageNumber" element={<Pagination />} />
          </Route>
        </Route>

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
