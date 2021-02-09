import { useState } from "react";
import "./styles.css";
const myDb = [
  { username: "job", pass: "1234" },
  { username: "stamp", pass: "12345" }
];
export default function App() {
  const [username, setUser] = useState("");

  const [password, setPass] = useState("");

  function handleChangeUsername(e) {
    setUser(e.target.value);
  }
  function handleChangePass(e) {
    setPass(e.target.value);
  }
  function login(e) {
    e.preventDefault();
    if (username !== "" && password !== "") {
      const user = myDb.find(
        (user) => user.username === username && user.pass === password
      );
      if (user) {
        localStorage.setItem("myData", JSON.stringify(user));

        return alert("login success");
      } else {
        return alert("login failed");
      }
    } else {
      alert("ไปใส่มาเลยนะ ไอ้ต้าวบ้า");
    }
  }

  return (
    <form onSubmit={login}>
      {/* {username !== "" ? (
        <>
          <h1>Hello</h1>
          <h1>Hello</h1>
        </>
      ) : (
        "world"
      )} */}
      <input
        value={username}
        type="text"
        onChange={handleChangeUsername}
        placeholder="username"
      />
      <input
        value={password}
        type="password"
        onChange={handleChangePass}
        placeholder="password"
      />
      <br />
      <button type="submit">Login</button>
    </form>
  );
}
