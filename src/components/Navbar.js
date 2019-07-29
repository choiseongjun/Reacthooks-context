// import React, { useContext } from 'react';
// import { ThemeContext } from '../contexts/ThemeContext';
// import { AuthContext } from '../contexts/AuthContext';

// const Navbar = () => {
//   const { isLightTheme, light, dark } = useContext(ThemeContext);
//   const { isAuthenticated, toggleAuth } = useContext(AuthContext);
//   const theme = isLightTheme ? light : dark;
//   return (
//     <nav style={{ background: theme.ui, color: theme.syntax }}>
//       <h1>Context App</h1>
//       <div onClick={() => toggleAuth()}>
//         { isAuthenticated ? 'Logged in' : 'Logged out' }
//       </div>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   );
// }
 
// export default Navbar;

    
import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <p>Currently you have {books.length} books to get through...</p>
    </div>
  );
}
 
export default Navbar;