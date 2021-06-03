import { CREATE_USER_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";

const AddData = () => {
  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

  const addUser = () => {
    createUser({
      variables: {
        firstName: 'Kruti',
        lastName: 'Panchal',
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
      <button onClick={addUser}>Add User</button>
  );
}

export default AddData;
