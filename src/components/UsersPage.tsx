import { UserRow } from './UserRow';

// https://reqres.in/api/users?page=2

export const UsersPage = () => {
  return (
    <>
      <h3>Usuarios:</h3>
      <table className='w-[500px] bg-black rounded-xl text-white'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <UserRow />
        </tbody>
      </table>

      <div className='flex justify-between w-[500px] mt-2'>
        <button className='p-2 bg-blue-500 text-white rounded-[5px]'>
          Prev
        </button>
        <button className='p-2 bg-blue-500 text-white rounded-[5px]'>
          Next
        </button>
      </div>
    </>
  );
};
