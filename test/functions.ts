import 'should';

import { vee } from '../src';

describe('functions', () => {
  const log = false;

  describe('builtin functions', () => {
    it('can process builtin functions', () => {
      vee('{{"hello"|upper}}')().should.be.equals('HELLO');
    });

    describe('strings', () => {
      it('can convert to upper strings', () => {
        vee('{{123|upper}}')().should.be.equals('123');
      });
    });
  });

  describe('user-defined functions', () => {
    it('can reference to function', () => {
      vee('Name {{date|formatUtcDate}} DONE', { log })({
        variables: { date: 'Jan 1, 2000' },
        functions: {
          formatUtcDate: (date: string) => `formatted(${date})`,
        },
      }).should.be.equals('Name formatted(Jan 1, 2000) DONE');
    });

    it('should reference to the override function', () => {
      vee('Name {{date|formatUtcDate}} DONE', { log })({
        variables: {
          date: 'Jan 1, 2000',
          formatUtcDate: () => `incorrect function`,
        },
        functions: {
          formatUtcDate: (date: string) => `formatted(${date})`,
        },
      }).should.be.equals('Name formatted(Jan 1, 2000) DONE');

      vee('Name {{date|formatUtcDate}} DONE', { log })({
        variables: {
          date: 'Jan 1, 2000',
          formatUtcDate: () => `incorrect function`,
        },
        functions: {},
      }).should.be.equals('Name incorrect function DONE');
    });
  });
});
