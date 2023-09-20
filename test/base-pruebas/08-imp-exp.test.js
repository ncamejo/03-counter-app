import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroreById debe retornar un herore por id", () => {
    const id = 1;
    const hero = getHeroeById(id);
    console.log(hero);

    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroreById debe retornar undefined si no existe el id", () => {
    const id = 100;
    const hero = getHeroeById(id);
    console.log(hero);
    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner debe retornar un arreglo con los héroes de DC", () => {
    const owner = 'DC';
    const hero = getHeroesByOwner(owner);
    console.log(hero)
    expect(hero.length).toBe(3);
    expect(hero).toEqual(
        [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]
    );
    expect(hero).toEqual(hero.filter(heroe => heroe.owner === owner ))
  });

  test('getHeroesByOwner debe retornar un arreglo con los héroes de Marvel', () => { 
    const owner = 'Marvel';
    const hero = getHeroesByOwner(owner)
    console.log(hero)
    expect(hero.length).toBe(2);
    expect(hero).toEqual(
        [
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
              
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            }
          ]
    );
    expect(hero).toEqual(hero.filter(heroe => heroe.owner === owner ))
 })




});
