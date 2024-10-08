import * as fns from './functions';

import {
  ArgsContext,
  ExprContext,
  PargsContext,
  ProgContext,
  TextContentContext,
  TextContext,
  VeeVisitor,
} from './grammar';

function numberWithCommas(x: string) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export class FormattedValue {
  constructor(public num: number, public format: string) {}

  plus(o: VeeValueType): FormattedValue {
    return new FormattedValue(
      this.num + FormattedValue.from(o).num,
      this.format,
    );
  }

  minus(o: VeeValueType): FormattedValue {
    return new FormattedValue(
      this.num - FormattedValue.from(o).num,
      this.format,
    );
  }

  multiple(o: VeeValueType): FormattedValue {
    return new FormattedValue(
      this.num * FormattedValue.from(o).num,
      this.format,
    );
  }

  divide(o: VeeValueType): FormattedValue {
    return new FormattedValue(
      this.num / FormattedValue.from(o).num,
      this.format,
    );
  }

  toString() {
    switch (this.format) {
      case ',.6':
        return numberWithCommas(
          (Math.round(this.num * 1000000) / 1000000).toFixed(6),
        );

      case ',.5':
        return numberWithCommas(
          (Math.round(this.num * 100000) / 100000).toFixed(5),
        );

      case ',.4':
        return numberWithCommas(
          (Math.round(this.num * 10000) / 10000).toFixed(4),
        );

      case ',.3':
        return numberWithCommas(
          (Math.round(this.num * 1000) / 1000).toFixed(3),
        );

      case ',.2':
        return numberWithCommas((Math.round(this.num * 100) / 100).toFixed(2));

      case ',.1':
        return numberWithCommas((Math.round(this.num * 10) / 10).toFixed(1));

      case ',':
      case ',.0':
        return numberWithCommas(Math.round(this.num).toFixed(0));

      default:
        return this.num.toString();
    }
  }

  static from(o: VeeValueType): FormattedValue {
    if (o instanceof FormattedValue) {
      return o;
    }

    return new FormattedValue(Number.parseFloat(o as string), 'N:.0-4');
  }
}

export type VeeValueType = string | number | FormattedValue;

export class VariableVeeVisitor extends VeeVisitor<VeeValueType> {
  constructor(public options: VariableVeeVisitorOptions) {
    super();
  }

  extractValue(name: string, variables?: VeeVariable): VeeValueType {
    let extractedVariables = variables ?? this.options.variables ?? {};
    let extractedFunctions = this.options.functions ?? {};

    let result = {
      ...extractedVariables,
      ...extractedFunctions,
    };

    let first: boolean = true;
    for (const key of name.split('.')) {
      result = result != null ? result[key] : undefined;

      if (first && result === undefined) {
        result = (fns as any)[key];
        first = false;
      }
    }

    return result as any;
  }

  convertValue(o1: VeeValueType): string {
    return o1.toString();
  }

  concatValue(o1: VeeValueType, o2: VeeValueType): VeeValueType {
    return o1.toString() + o2.toString();
  }

  plusValue(o1: VeeValueType, o2: VeeValueType): VeeValueType {
    return FormattedValue.from(o1).plus(o2);
  }

  minusValue(o1: VeeValueType, o2: VeeValueType): VeeValueType {
    return FormattedValue.from(o1).minus(o2);
  }

  multipleValue(o1: VeeValueType, o2: VeeValueType): VeeValueType {
    return FormattedValue.from(o1).multiple(o2);
  }

  divideValue(o1: VeeValueType, o2: VeeValueType): VeeValueType {
    return FormattedValue.from(o1).divide(o2);
  }

  visitProg = (ctx: ProgContext) => {
    let result: string = '';

    if (ctx?.getChildCount() > 0) {
      result = ctx.children
        .map((child) => {
          return (child as TextContext).accept(this);
        })
        .join('');
    }

    return result;
  };

  visitText: (ctx: TextContext) => VeeValueType = (ctx: TextContext) => {
    if (this.options.log) {
      console.log(`text(${ctx.getText()})(childs=${ctx.getChildCount()})`);
    }

    return ctx.children
      .map((c) =>
        c instanceof TextContentContext ? c.accept(this) : c.getText(),
      )
      .join('');
  };

  visitTextContent: (ctx: TextContentContext) => VeeValueType = (
    ctx: TextContentContext,
  ) => {
    if (this.options.log) {
      console.log(
        `textContent(${ctx.getText()})(childs=${ctx.getChildCount()}, ruleIndex=${
          ctx.ruleIndex
        })`,
      );
    }

    if (
      ctx.getChildCount() === 3 &&
      ctx.getChild(0).getText() === '{{' &&
      ctx.getChild(2).getText() === '}}' &&
      ctx.getChild(1) instanceof ExprContext
    ) {
      return (ctx.getChild(1) as ExprContext).accept(this);
    }

    return ctx.children.map((c) => c.getText()).join('');
  };

  visitArgs: (ctx: ArgsContext) => VeeValueType = (ctx: ArgsContext) => {
    const result: any[] = [];
    for (let i = 0; i < ctx.getChildCount(); i += 2) {
      result.push((ctx.getChild(i) as ExprContext).accept(this));
    }
    return result as any;
  };

  visitPargs: (ctx: PargsContext) => VeeValueType = (ctx: PargsContext) => {
    const result: any[] = [];
    for (let i = 1; i < ctx.getChildCount(); i += 2) {
      result.push((ctx.getChild(i) as ExprContext).accept(this));
    }
    return result as any;
  };

  visitExpr: (ctx: ExprContext) => VeeValueType = (ctx: ExprContext) => {
    if (ctx.NUM()) {
      return Number.parseFloat(ctx.getText());
    }

    if (ctx.VAR() && ctx.getChildCount() === 1) {
      return this.extractValue(ctx.getText());
    }

    if (ctx.STR()) {
      const value = ctx.getText();
      return value.substring(1, value.length - 1);
    }

    if (
      ctx.getChildCount() >= 3 &&
      ctx.getChild(1).getText() === '(' &&
      ctx.getChild(ctx.getChildCount() - 1).getText() === ')'
    ) {
      const fnName = ctx.getChild(0).getText();
      const args = [];
      for (let i = 2; i + 1 < ctx.getChildCount(); i++) {
        args.push(...((ctx.getChild(i) as ArgsContext).accept(this) as any));
      }

      const fn = this.extractValue(fnName as string) as any as Function;
      return fn.apply(this.options.variables, args);
    }

    if (ctx.getChildCount() >= 3 && ctx.getChild(1).getText() === '|') {
      const firstArgs = (ctx.getChild(0) as ExprContext).accept(this);
      const fnName = ctx.getChild(2).getText();

      const args = [firstArgs];

      for (let i = 3; i < ctx.getChildCount(); i++) {
        args.push(...((ctx.getChild(i) as PargsContext).accept(this) as any));
      }

      const fn = this.extractValue(fnName as string) as any as Function;
      return fn == null
        ? `!UNKNOWN FUNCTION ${fnName}!`
        : fn.apply(this.options.variables, args);
    }

    switch (ctx.getChildCount()) {
      case 4:
        if (
          ctx.getChild(1).getText() === '[' &&
          ctx.getChild(3).getText() === ']'
        ) {
          const base = (ctx.getChild(0) as ExprContext).accept(this);
          const index = (ctx.getChild(2) as ExprContext).accept(this);

          return this.extractValue(index.toString(), base as VeeVariable);
        }
        break;

      case 3:
        const separator = ctx.getChild(1).getText();

        if (['+', '-', '*', '/'].includes(separator)) {
          const o1: VeeValueType = (ctx.getChild(0) as ExprContext).accept(
            this,
          );
          const o2: VeeValueType = (ctx.getChild(2) as ExprContext).accept(
            this,
          );

          switch (ctx.getChild(1).getText()) {
            case '+':
              return this.plusValue(o1, o2);
            case '-':
              return this.minusValue(o1, o2);
            case '*':
              return this.multipleValue(o1, o2);
            case '/':
              return this.divideValue(o1, o2);
          }
        }

        if (
          ctx.getChild(0).getText() === '(' &&
          ctx.getChild(2).getText() === ')'
        ) {
          return (ctx.getChild(1) as ExprContext).accept(this);
        }

        break;

      case 1:
        break;

      default:
        break;
    }
    return '!ERROR(Expr1)!' as VeeValueType;
  };
}

export interface VariableVeeVisitorOptions {
  /**
   * Pass-in the variables to extract out.
   */
  variables?: VeeVariable;

  /**
   * Pass-in the functions to reference.
   */
  functions?: VeeFunctions;

  log?: boolean;
}

export interface VeeVariable {
  [key: string]: any;
}

export interface VeeFunctions {
  [key: string]: Function;
}
