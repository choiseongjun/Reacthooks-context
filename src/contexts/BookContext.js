// import React, { createContext, useState } from 'react';

// export const BookContext = createContext();

// const BookContextProvider = (props) => {
//   const [books, setBooks] = useState([
//     {title: 'name of the wind', id: 1},
//     {title: 'the way of kings', id: 2},
//     {title: 'the final empire', id: 3},
//     {title: 'the hero of ages', id: 4}
//   ]);
//   return (
//     <BookContext.Provider value={{books}}>
//       {props.children}
//     </BookContext.Provider>
//   )
// }

// export default BookContextProvider;
/*이전꺼 */
import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
    {title: 'the final empire', author: 'brandon sanderson', id: 2},
  ]);
  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuid()}]);
  };
  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;
