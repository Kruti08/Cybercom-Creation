import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  console.log(data.getAllUsers);
  
  return (
    <div>
      <h1>Get Data</h1>
    </div>
  );
}

export default GetUsers;
