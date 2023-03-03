import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4040/profile', {
      credentials: 'include',
    })
      .then(response => {
        return response.json();
      })
      .then(userInfo => {
        setUsername(userInfo.username);
      });
  }, []);

    return (
        <header>
          <Link to={"/"} className="logo">
            My Blog
          </Link>
          <nav>
            {username && (
              <>
              <Link to={'/create'}>Create new post</Link>
              <a>Logout</a>
              </>
            )}
            {!username && (
              <>
              <Link to={'/login'}>Login</Link>
              <Link to={'/register'}>Register</Link>
              </>
            )}
          </nav>
        </header>
    );
};