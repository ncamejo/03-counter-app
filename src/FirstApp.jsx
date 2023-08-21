const newMessage = {
  message: "Hola mundo",
  title: "Néstor",
};

const saludo = (nombre)=>{
  return `Hola mi nombre es: ${nombre}`
}

export const FirstApp = () => {
  let nombre = 'Goku!!!'
  return (
    <>
      <h1>{saludo(nombre)}</h1>
      <h2>Néstor Camejo</h2>
    </>
  );
};
