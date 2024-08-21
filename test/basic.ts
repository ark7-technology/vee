import 'should';

import { vee } from '../src';

describe('basic', () => {
  it('can process basic extractions', () => {
    vee('10+20*30')().should.be.equals('10+20*30');
    vee('{{10+20*30}}')().should.be.equals('610');

    vee('{{foo.bar}}')({
      variables: { foo: { bar: 'result' } },
    }).should.be.equals('result');

    vee('{{foo["bar"]}}')({
      variables: { foo: { bar: 'result' } },
    }).should.be.equals('result');

    vee('{{fn("yoo","shi")}}')({
      variables: {
        fn: (...names: string[]) => 'Hello ' + names.join(', ') + '.',
      },
    }).should.be.equals('Hello yoo, shi.');

    vee('{{"yoo"|fn:"shi"}}')({
      variables: {
        fn: (...names: string[]) => 'Hello ' + names.join(', ') + '.',
      },
    }).should.be.equals('Hello yoo, shi.');
  });
});
