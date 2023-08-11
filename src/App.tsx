import { Success } from "./components/Succes/Success";
import { Users } from "./components/Users/Users";
import "./index.scss";
import { useState, useEffect } from "react";
import { UsersType } from "./types/types";
// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState<UsersType[] | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);
  console.log(users);
  return (
    <div className="App">
      <Users items={users} isLoading={loading} />
      {/* <Success /> */}
    </div>
  );
}

export default App;
