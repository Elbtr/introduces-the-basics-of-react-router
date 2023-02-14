import { Link, useNavigate } from "react-router-dom";

// dalam penggunaan useNavigation saya menggunakan button sebagai contoh agar lebih mudah memahami nya

const Home = () => {
  const navigate = useNavigate();

  function navigationHandler() {
    navigate("about");
  }

  return (
    <>
      <h1>the home page</h1>
      <p>
        go to <Link to="about">About</Link>
      </p>
      <p>
        <button onClick={navigationHandler}>Navigate</button>
      </p>
    </>
  );
};

export default Home;
