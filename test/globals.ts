import 'should';

import { SetupVee, vee } from '../src';

describe('globals', () => {
  const log = false;

  SetupVee({
    functions: {
      globalFoo: (val: string) => `bar(${val})`,
    },
  });

  it('can set the global functions', () => {
    vee('Name {{date|globalFoo}} DONE', { log })({
      variables: { date: 'Jan 1, 2000' },
    }).should.be.equals('Name bar(Jan 1, 2000) DONE');
  });
});
