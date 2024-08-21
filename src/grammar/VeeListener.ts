// Generated from src/grammar/Vee.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgContext } from "./VeeParser.js";
import { TextContext } from "./VeeParser.js";
import { ArgsContext } from "./VeeParser.js";
import { PargsContext } from "./VeeParser.js";
import { ExprContext } from "./VeeParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `VeeParser`.
 */
export default class VeeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `VeeParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `VeeParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
	/**
	 * Enter a parse tree produced by `VeeParser.text`.
	 * @param ctx the parse tree
	 */
	enterText?: (ctx: TextContext) => void;
	/**
	 * Exit a parse tree produced by `VeeParser.text`.
	 * @param ctx the parse tree
	 */
	exitText?: (ctx: TextContext) => void;
	/**
	 * Enter a parse tree produced by `VeeParser.args`.
	 * @param ctx the parse tree
	 */
	enterArgs?: (ctx: ArgsContext) => void;
	/**
	 * Exit a parse tree produced by `VeeParser.args`.
	 * @param ctx the parse tree
	 */
	exitArgs?: (ctx: ArgsContext) => void;
	/**
	 * Enter a parse tree produced by `VeeParser.pargs`.
	 * @param ctx the parse tree
	 */
	enterPargs?: (ctx: PargsContext) => void;
	/**
	 * Exit a parse tree produced by `VeeParser.pargs`.
	 * @param ctx the parse tree
	 */
	exitPargs?: (ctx: PargsContext) => void;
	/**
	 * Enter a parse tree produced by `VeeParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `VeeParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
}

