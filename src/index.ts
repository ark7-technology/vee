import './visitor';

import { CharStream, CommonTokenStream } from 'antlr4';
import { VariableVeeVisitor, VariableVeeVisitorOptions } from './visitor';
import { VeeLexer, VeeParser } from './grammar';

export * from './grammar';

export function vee(
  expr: string,
  veeOptions: VeeOptions = {},
): (options?: VariableVeeVisitorOptions) => string {
  const chars = new CharStream(expr);
  const lexer = new VeeLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new VeeParser(tokens);
  const tree = parser.prog();

  return (options: VariableVeeVisitorOptions = {}) => {
    return tree
      .accept(
        new VariableVeeVisitor({
          variables: options.variables,
          log: veeOptions.log,
        }),
      )
      .toString();
  };
}

export interface VeeOptions {
  log?: boolean;
}
