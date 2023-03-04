import { useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";


export default function Header() {
const {setCurrentUserInfo, currentUserInfo} = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:4040/profile', {
      credentials: 'include',
    })
      .then(response => {
        return response.json();
      })
      .then(userInfo => {
        setCurrentUserInfo(userInfo);
      });
  }, []);

  function logout () {
    fetch('http://localhost:4040/logout', {
      credentials: 'include',
      method: 'POST'
    });
    setCurrentUserInfo(null);
  }

  const username = currentUserInfo?.username;

    return (
        <header>
          <Link to={"/"} className="logo">
            My Blog
          </Link>
          <nav>
            {username && (
              <>
              <Link to={'/create'}>Create new post</Link>
              <a href="#" onClick={logout}>Logout</a>
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