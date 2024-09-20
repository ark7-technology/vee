import './visitor';

import { CharStream, CommonTokenStream } from 'antlr4';
import {
  VariableVeeVisitor,
  VariableVeeVisitorOptions,
  VeeFunctions,
} from './visitor';
import { VeeLexer, VeeParser } from './grammar';

export * from './grammar';

var globalOptions: VeeGlobalOptions = {};

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
          functions: {
            ...globalOptions.functions,
            ...options.functions,
          },
          log: veeOptions.log,
        }),
      )
      .toString();
  };
}

export interface VeeOptions {
  log?: boolean;
}

/**
 * Setup for Vee's global options.
 *
 * @params options.functions -
 */
export function SetupVee(options: VeeGlobalOptions) {
  globalOptions.functions = {
    ...globalOptions.functions,
    ...options.functions,
  };
}

export interface VeeGlobalOptions {
  /**
   * The functions to provide.
   */
  functions?: VeeFunctions;
}
