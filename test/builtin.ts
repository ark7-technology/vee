import 'should';

import { vee } from '../src';

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
