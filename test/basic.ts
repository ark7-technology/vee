import 'should';

import { vee } from '../src';

describe('basic', () => {
  const log = false;

  it('can process number expression', () => {
    vee('+', { log })().should.be.equals('+');
    vee('10+20*30', { log })().should.be.equals('10+20*30');
    vee('{{10+20*30}}', { log })().should.be.equals('610');
    vee('(415)275-0701', { log })().should.be.equals('(415)275-0701');
  });

  // it('can process normal text', () => {
  // vee(`I'm a good man.`, { log })().should.be.equals(`I'm a good man.`);
  // });

  it('can support text with variables', () => {
    vee('Name {{date}} DONE', { log })({
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

    vee('{{activity.seriesFormationDate|formatUtcDate:"standard"}}')({
      variables: {
        formatUtcDate: (date: Date, format: string) =>
          date.toString() + ' ' + format,
        activity: {
          seriesFormationDate: new Date(2000, 1, 1),
        },
      },
    }).should.be.equals(
      'Tue Feb 01 2000 00:00:00 GMT-0800 (Pacific Standard Time) standard',
    );

    vee(`{{activity.seriesFormationDate|formatUtcDate:'standard'}}`)({
      variables: {
        formatUtcDate: (date: Date, format: string) =>
          date.toString() + ' ' + format,
        activity: {
          seriesFormationDate: new Date(2000, 1, 1),
        },
      },
    }).should.be.equals(
      'Tue Feb 01 2000 00:00:00 GMT-0800 (Pacific Standard Time) standard',
    );
  });
});
