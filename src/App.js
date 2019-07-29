import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import SongList from './components/SongList';
import BookContextProvider from './contexts/BookContext';
import NewBookForm from './components/NewBookForm';

function App() {
  return (
    <div className="App">
   {/* 여기는 context&& hooks 사용한 간단한 예제 누르면 버튼 바뀜  */}
      {/* <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
            <BookContextProvider>
              <BookList />
            </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider> */}
      {/* <SongList /> */}
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
