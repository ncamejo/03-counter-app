// const saludo = (nombre)=>{
//   return `Hola mi nombre es: ${nombre}`
// }

const getResult = ()=>{
    return 4 + 4;
}

export const FirstApp = () => {
  let nombre = 'Goku!!!'
  return (
    <>
      <h1>{getResult()}</h1>
      <h2>Néstor Camejo</h2>
    </>
  );
};
