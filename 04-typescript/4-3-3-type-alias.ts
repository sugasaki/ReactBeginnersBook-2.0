interface Foo { hoge?: number, fuga: string };
interface Bar { hoge: number };
interface Buz { piyo: string };

type FooBar1 = Foo & Bar; // { hoge: number, fuga: string }
type FooBar2 = Foo | Bar; // { hoge?: number, fuga: string } or { hoge: number } 
type FooBuz1 = Foo & Buz; // { hoge?: number, fuga: string, piyo: string }
type FooBuz2 = Foo | Buz; // { hoge?: number, fuga: string } or { piyo: string } 
type BarFooBuz = Bar & (Foo | Buz); // { hoge: number, fuga: string } or { hoge: number, piyo: string }


const jane: Foo = { hoge: 27, fuga: 'abc' }
const bar: Bar = { hoge: 27 }


const foobar: FooBar1 = { hoge: 27, fuga: 'abc' }
const foobuz: FooBuz1 = { hoge: 27, fuga: 'abc', piyo: 'piyo' }

