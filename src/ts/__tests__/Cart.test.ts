import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});
test('total coast', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  expect(cart.totalCoast()).toBe(2900);
})
test('total coast with discount', () => {
  const cart = new Cart();
  const discount = 50;
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  expect(cart.totalCoastWithDiscount(discount)).toBe(1450);
})