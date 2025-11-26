interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address;
}

interface Address {
  country: string;
  houseNo: string;
  street?: string;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 20,
    firstName: 'Obi',
    lastName: 'Wan',
    address: {
      country: 'Colombia',
      houseNo: '231',
    },
  };

  return (
    <>
      <h3>Objetos literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
