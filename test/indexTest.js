const { expect } = require("chai");
const sinon = require("sinon");

describe("index.js", () => {
  let spy;

  beforeEach(() => {
    spy = sinon.spy(console, "log");
  });

  afterEach(() => {
    spy.restore();
  });

  it("1. objetoVacio es un objeto sin propiedades ni metodos", () => {
    expect(objetoVacio).to.be.an("object");
  });

  it("2. contador es un objeto con propiedades: unidades, decenas, y puntaje", () => {
    expect(contador).to.eql({ unidades: 1, decenas: 5, puntaje: 0 });
  });

  it("3. bird es un objeto con propiedades: color y poderes", () => {
    expect(bird).to.eql({color: "amarillo", poderes: "volar"});
  });

  it("4. juego es un objeto con propiedades: nombre y perdiste", () => {

    expect(juego).to.eql({nombre: "Flappy Bird", perdiste: false});
  });





  it("5. Imprime el valor de la propiedad unidades del objeto contador", () => {
    imprimirUnidades()
    expect( spy.calledWithExactly( contador.unidades )).to.be.true;  });
});
