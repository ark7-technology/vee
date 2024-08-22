import 'should';

import { vee } from '../src';

describe('basic', () => {
  it('can process number expression', () => {
    vee('10+20*30')().should.be.equals('10+20*30');
    vee('{{10+20*30}}')().should.be.equals('610');
  });

  it('can process value extraction', () => {
    vee('{{foo.bar}}')({
      variables: { foo: { bar: 'result' } },
    }).should.be.equals('result');

    vee('{{foo["bar"]}}')({
      variables: { foo: { bar: 'result' } },
    }).should.be.equals('result');
  });

  it('can process function expression', () => {
    vee('{{fn("yoo","shi")}}')({
      variables: {
        fn: (...names: string[]) => 'Hello ' + names.join(', ') + '.',
      },
    }).should.be.equals('Hello yoo, shi.');
  });

  it('can process pipe function expression', () => {
    vee('{{"yoo"|fn:"shi"}}')({
      variables: {
        fn: (...names: string[]) => 'Hello ' + names.join(', ') + '.',
      },
    }).should.be.equals('Hello yoo, shi.');
  });
});
