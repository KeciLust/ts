import Movie from "../domain/Movie";
import Cart from "../service/Cart";

test('add obj Movie', () => {
    const cart = new Cart;
    cart.add(new Movie(1005,'Avenger',137,1000,2012,'USA','fantasy','Avengers Assemble'));
    expect(cart.items.length).toBe(1);

})