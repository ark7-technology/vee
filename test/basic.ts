import 'should';

import { vee } from '../src';

// export class MyTreeWalker extends VeeListener {
// exitProg = (_ctx: ProgContext) => {
// console.log('In MyStartRule');
// };
// }

describe('basic', () => {
  it('can use should', () => {
    vee('10+20*30')({}).should.be.equals('10+20*30');
    vee('{{10+20*30}}')({}).should.be.equals('610');
    // const input = '10+20*30';
    // const chars = new CharStream(input); // replace this with a FileStream as required
    // const lexer = new VeeLexer(chars);
    // const tokens = new CommonTokenStream(lexer);
    // const parser = new VeeParser(tokens);
    // const tree = parser.prog();
    // // console.log(tree);

    // const walker = new MyTreeWalker();
    // ParseTreeWalker.DEFAULT.walk(walker, tree);

    // console.log(tree.accept(new VeeVisitor()));
  });
});
