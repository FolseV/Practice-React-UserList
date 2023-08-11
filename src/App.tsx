import { Success } from "./components/Succes/Success";
import { Users } from "./components/Users/Users";
import "./index.scss";
import { useState, useEffect } from "react";
import { UsersType } from "./types/types";
// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState<UsersType[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [invited, setInvited] = useState<Number[]>([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);
  // console.log(users);
  const onChangeSearchValue = (event: any) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (id: number) => {
    if (invited.includes(id)) {
      setInvited((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvited((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  };

  return (
    <div className="App">
      {success ? (
        <Success invited={invited} setSuccess={setSuccess} />
      ) : (
        <Users
          items={users}
          isLoading={loading}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          invited={invited}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
}

export default App;
