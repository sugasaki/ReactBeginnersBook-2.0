function* generator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

g = generator();
console.log(g);

console.log(g.next());
console.log(g);

console.log(g.next());
console.log(g);

console.log(g.next());
console.log(g);

console.log(g.next());
console.log(g);

console.log(g.next());
console.log(g);
