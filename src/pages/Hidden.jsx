import { Link } from "react-router-dom";

function Hidden() {
  return (
    <>
      <main>
        <h2>Whoa!</h2>
        <p>You are not supposed to see this</p>
        {user ? <p>Hello, {user.firstName}!</p> : null}
        <UserButton />
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default Hidden;
