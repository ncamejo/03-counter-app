import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Prueba en 09-promesas", () => {
  test("getHeroeByIdAsync debe de retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
    .then(hero =>{
        expect(false).toBe(false);
        done()
    })
  });
});
