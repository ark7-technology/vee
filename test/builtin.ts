import 'should';

import { vee } from '../src';

describe('basic', () => {
  it('can process builtin functions', () => {
    vee('{{"hello"|upper}}')().should.be.equals('HELLO');
  });

  describe('upper()', () => {
    it('can convert numbers', () => {
      vee('{{123|upper}}')().should.be.equals('123');
    });
  });
});
