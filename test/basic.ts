import 'should';

import { vee } from '../src';

describe('basic', () => {
  it('can process number expression', () => {
    vee('10+20*30')().should.be.equals('10+20*30');
    vee('{{10+20*30}}')().should.be.equals('610');
  });

  it('can support text with variables', () => {
    vee('Name {{date}} DONE')({
      variables: { date: 'Jan 1, 2000' },
    }).should.be.equals('Name Jan 1, 2000 DONE');

    vee('Name{{date}} DONE')({
      variables: { date: 'Jan 1, 2000' },
    }).should.be.equals('NameJan 1, 2000 DONE');

    vee('123{{date}} DONE~')({
      variables: { date: 'Jan 1, 2000' },
    }).should.be.equals('123Jan 1, 2000 DONE~');
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
