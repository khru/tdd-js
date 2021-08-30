module.exports = function totalize(basket) {
  if (undefined === basket || null === basket) {
    throw new TypeError('Invalid basket')
  }
  basket = Array.isArray(basket) ? basket : [basket];
  if (basket.length === 0) {
    return 0;
  }

  return basket.reduce((total, item) => total += item.price * item.quantity, 0)
}
