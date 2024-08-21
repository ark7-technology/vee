// Generated from src/grammar/Vee.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { ProgContext } from "./VeeParser.js";
import { ExprContext } from "./VeeParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `VeeParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class VeeVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `VeeParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;
	/**
	 * Visit a parse tree produced by `VeeParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;
}

