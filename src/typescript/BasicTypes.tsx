export const BasicTypes = () => {
  const name: string = 'Obi';
  const age: number = 20;
  const isActive: boolean = true;

  const powers: string[] = ['React', 'React Native', 'Astro'];

  return (
    <>
      <h3>Tipos básicos</h3>
      {name} - {age} - {isActive ? 'Activo' : 'Inactivo'}
      <p>{powers.join(', ')}</p>
    </>
  );
};
