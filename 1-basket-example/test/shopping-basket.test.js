const totalize = require('../shopping-basket');
describe('Calculated Shopping basket', () => {
  it('should return zero when the basket is empty', () => {
    const basket = [];
    expect(totalize(basket)).toBe(0.0);
  });

  it('should return the price of a unit item in the basket', () => {
    const unitPrice = 10.0
    const basket = [
      { price: unitPrice, quantity:1 }
    ];
    expect(totalize(basket)).toBe(unitPrice);
  });

  it('should return the price of two units of the same item in the basket', () => {
    const unitPrice = 10.0
    const basket = [
      { price: unitPrice, quantity:2 }
    ];
    const finalPrice = basket[0].price * basket[0].quantity;
    expect(totalize(basket)).toBe(finalPrice);
  });

  it('should return the price of two unit item in the basket', () => {
    const totalPrice = 50.0
    const basket = [
      { price: 10.0, quantity: 1 },
      { price: 20.0, quantity: 2 }
    ];
    expect(totalize(basket)).toBe(totalPrice);
  })

  it('should throw an error if the basket is undefined', () => {
    expect(() => {totalize(undefined)}).toThrow(TypeError);
  })

  it('should throw an error if the basket is null', () => {
    expect(() => {totalize(null)}).toThrow(TypeError);
  })
});
