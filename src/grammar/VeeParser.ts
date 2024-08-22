// Generated from src/grammar/Vee.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import VeeListener from "./VeeListener.js";
import VeeVisitor from "./VeeVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class VeeParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly NEWLINE = 14;
	public static readonly NUM = 15;
	public static readonly VAR = 16;
	public static readonly STR = 17;
	public static readonly WORDS = 18;
	public static readonly UnterminatedStringLiteral = 19;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_text = 1;
	public static readonly RULE_textContent = 2;
	public static readonly RULE_args = 3;
	public static readonly RULE_pargs = 4;
	public static readonly RULE_expr = 5;
	public static readonly literalNames: (string | null)[] = [ null, "'{{'", 
                                                            "'}}'", "','", 
                                                            "':'", "'*'", 
                                                            "'/'", "'+'", 
                                                            "'-'", "'['", 
                                                            "']'", "'|'", 
                                                            "'('", "')'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "NEWLINE", 
                                                             "NUM", "VAR", 
                                                             "STR", "WORDS", 
                                                             "UnterminatedStringLiteral" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "text", "textContent", "args", "pargs", "expr",
	];
	public get grammarFileName(): string { return "Vee.g4"; }
	public get literalNames(): (string | null)[] { return VeeParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return VeeParser.symbolicNames; }
	public get ruleNames(): string[] { return VeeParser.ruleNames; }
	public get serializedATN(): number[] { return VeeParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, VeeParser._ATN, VeeParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let localctx: ProgContext = new ProgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, VeeParser.RULE_prog);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 12;
			this.text();
			this.state = 13;
			this.match(VeeParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public text(): TextContext {
		let localctx: TextContext = new TextContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, VeeParser.RULE_text);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 18;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 491522) !== 0)) {
				{
				{
				this.state = 15;
				this.textContent();
				}
				}
				this.state = 20;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public textContent(): TextContentContext {
		let localctx: TextContentContext = new TextContentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, VeeParser.RULE_textContent);
		try {
			this.state = 29;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 21;
				this.match(VeeParser.T__0);
				this.state = 22;
				this.expr(0);
				this.state = 23;
				this.match(VeeParser.T__1);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 25;
				this.match(VeeParser.VAR);
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 26;
				this.match(VeeParser.NUM);
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 27;
				this.match(VeeParser.STR);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 28;
				this.match(VeeParser.WORDS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public args(): ArgsContext {
		let localctx: ArgsContext = new ArgsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, VeeParser.RULE_args);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 31;
			this.expr(0);
			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 32;
				this.match(VeeParser.T__2);
				this.state = 33;
				this.expr(0);
				}
				}
				this.state = 38;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pargs(): PargsContext {
		let localctx: PargsContext = new PargsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, VeeParser.RULE_pargs);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 43;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 39;
					this.match(VeeParser.T__3);
					this.state = 40;
					this.expr(0);
					}
					}
				}
				this.state = 45;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 10;
		this.enterRecursionRule(localctx, 10, VeeParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 60;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 47;
				this.match(VeeParser.NUM);
				}
				break;
			case 2:
				{
				this.state = 48;
				this.match(VeeParser.VAR);
				}
				break;
			case 3:
				{
				this.state = 49;
				this.match(VeeParser.STR);
				}
				break;
			case 4:
				{
				this.state = 50;
				this.match(VeeParser.VAR);
				this.state = 51;
				this.match(VeeParser.T__11);
				this.state = 53;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 233472) !== 0)) {
					{
					this.state = 52;
					this.args();
					}
				}

				this.state = 55;
				this.match(VeeParser.T__12);
				}
				break;
			case 5:
				{
				this.state = 56;
				this.match(VeeParser.T__11);
				this.state = 57;
				this.expr(0);
				this.state = 58;
				this.match(VeeParser.T__12);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 79;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 77;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expr);
						this.state = 62;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 63;
						_la = this._input.LA(1);
						if(!(_la===5 || _la===6)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 64;
						this.expr(10);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expr);
						this.state = 65;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 66;
						_la = this._input.LA(1);
						if(!(_la===7 || _la===8)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 67;
						this.expr(9);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expr);
						this.state = 68;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 69;
						this.match(VeeParser.T__8);
						this.state = 70;
						this.expr(0);
						this.state = 71;
						this.match(VeeParser.T__9);
						}
						break;
					case 4:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expr);
						this.state = 73;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 74;
						this.match(VeeParser.T__10);
						this.state = 75;
						this.match(VeeParser.VAR);
						this.state = 76;
						this.pargs();
						}
						break;
					}
					}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
		case 1:
			return this.precpred(this._ctx, 8);
		case 2:
			return this.precpred(this._ctx, 7);
		case 3:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,19,83,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,1,0,1,0,1,0,1,1,5,1,17,8,1,10,1,12,
	1,20,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,30,8,2,1,3,1,3,1,3,5,3,35,
	8,3,10,3,12,3,38,9,3,1,4,1,4,5,4,42,8,4,10,4,12,4,45,9,4,1,5,1,5,1,5,1,
	5,1,5,1,5,1,5,3,5,54,8,5,1,5,1,5,1,5,1,5,1,5,3,5,61,8,5,1,5,1,5,1,5,1,5,
	1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,78,8,5,10,5,12,5,81,9,5,
	1,5,0,1,10,6,0,2,4,6,8,10,0,2,1,0,5,6,1,0,7,8,92,0,12,1,0,0,0,2,18,1,0,
	0,0,4,29,1,0,0,0,6,31,1,0,0,0,8,43,1,0,0,0,10,60,1,0,0,0,12,13,3,2,1,0,
	13,14,5,0,0,1,14,1,1,0,0,0,15,17,3,4,2,0,16,15,1,0,0,0,17,20,1,0,0,0,18,
	16,1,0,0,0,18,19,1,0,0,0,19,3,1,0,0,0,20,18,1,0,0,0,21,22,5,1,0,0,22,23,
	3,10,5,0,23,24,5,2,0,0,24,30,1,0,0,0,25,30,5,16,0,0,26,30,5,15,0,0,27,30,
	5,17,0,0,28,30,5,18,0,0,29,21,1,0,0,0,29,25,1,0,0,0,29,26,1,0,0,0,29,27,
	1,0,0,0,29,28,1,0,0,0,30,5,1,0,0,0,31,36,3,10,5,0,32,33,5,3,0,0,33,35,3,
	10,5,0,34,32,1,0,0,0,35,38,1,0,0,0,36,34,1,0,0,0,36,37,1,0,0,0,37,7,1,0,
	0,0,38,36,1,0,0,0,39,40,5,4,0,0,40,42,3,10,5,0,41,39,1,0,0,0,42,45,1,0,
	0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,9,1,0,0,0,45,43,1,0,0,0,46,47,6,5,-1,
	0,47,61,5,15,0,0,48,61,5,16,0,0,49,61,5,17,0,0,50,51,5,16,0,0,51,53,5,12,
	0,0,52,54,3,6,3,0,53,52,1,0,0,0,53,54,1,0,0,0,54,55,1,0,0,0,55,61,5,13,
	0,0,56,57,5,12,0,0,57,58,3,10,5,0,58,59,5,13,0,0,59,61,1,0,0,0,60,46,1,
	0,0,0,60,48,1,0,0,0,60,49,1,0,0,0,60,50,1,0,0,0,60,56,1,0,0,0,61,79,1,0,
	0,0,62,63,10,9,0,0,63,64,7,0,0,0,64,78,3,10,5,10,65,66,10,8,0,0,66,67,7,
	1,0,0,67,78,3,10,5,9,68,69,10,7,0,0,69,70,5,9,0,0,70,71,3,10,5,0,71,72,
	5,10,0,0,72,78,1,0,0,0,73,74,10,6,0,0,74,75,5,11,0,0,75,76,5,16,0,0,76,
	78,3,8,4,0,77,62,1,0,0,0,77,65,1,0,0,0,77,68,1,0,0,0,77,73,1,0,0,0,78,81,
	1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,11,1,0,0,0,81,79,1,0,0,0,8,18,29,
	36,43,53,60,77,79];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!VeeParser.__ATN) {
			VeeParser.__ATN = new ATNDeserializer().deserialize(VeeParser._serializedATN);
		}

		return VeeParser.__ATN;
	}


	static DecisionsToDFA = VeeParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgContext extends ParserRuleContext {
	constructor(parser?: VeeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public text(): TextContext {
		return this.getTypedRuleContext(TextContext, 0) as TextContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(VeeParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return VeeParser.RULE_prog;
	}
	public enterRule(listener: VeeListener): void {
	    if(listener.enterProg) {
	 		listener.enterProg(this);
		}
	}
	public exitRule(listener: VeeListener): void {
	    if(listener.exitProg) {
	 		listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VeeVisitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TextContext extends ParserRuleContext {
	constructor(parser?: VeeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public textContent_list(): TextContentContext[] {
		return this.getTypedRuleContexts(TextContentContext) as TextContentContext[];
	}
	public textContent(i: number): TextContentContext {
		return this.getTypedRuleContext(TextContentContext, i) as TextContentContext;
	}
    public get ruleIndex(): number {
    	return VeeParser.RULE_text;
	}
	public enterRule(listener: VeeListener): void {
	    if(listener.enterText) {
	 		listener.enterText(this);
		}
	}
	public exitRule(listener: VeeListener): void {
	    if(listener.exitText) {
	 		listener.exitText(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VeeVisitor<Result>): Result {
		if (visitor.visitText) {
			return visitor.visitText(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TextContentContext extends ParserRuleContext {
	constructor(parser?: VeeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public VAR(): TerminalNode {
		return this.getToken(VeeParser.VAR, 0);
	}
	public NUM(): TerminalNode {
		return this.getToken(VeeParser.NUM, 0);
	}
	public STR(): TerminalNode {
		return this.getToken(VeeParser.STR, 0);
	}
	public WORDS(): TerminalNode {
		return this.getToken(VeeParser.WORDS, 0);
	}
    public get ruleIndex(): number {
    	return VeeParser.RULE_textContent;
	}
	public enterRule(listener: VeeListener): void {
	    if(listener.enterTextContent) {
	 		listener.enterTextContent(this);
		}
	}
	public exitRule(listener: VeeListener): void {
	    if(listener.exitTextContent) {
	 		listener.exitTextContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VeeVisitor<Result>): Result {
		if (visitor.visitTextContent) {
			return visitor.visitTextContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsContext extends ParserRuleContext {
	constructor(parser?: VeeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
    public get ruleIndex(): number {
    	return VeeParser.RULE_args;
	}
	public enterRule(listener: VeeListener): void {
	    if(listener.enterArgs) {
	 		listener.enterArgs(this);
		}
	}
	public exitRule(listener: VeeListener): void {
	    if(listener.exitArgs) {
	 		listener.exitArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VeeVisitor<Result>): Result {
		if (visitor.visitArgs) {
			return visitor.visitArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PargsContext extends ParserRuleContext {
	constructor(parser?: VeeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
    public get ruleIndex(): number {
    	return VeeParser.RULE_pargs;
	}
	public enterRule(listener: VeeListener): void {
	    if(listener.enterPargs) {
	 		listener.enterPargs(this);
		}
	}
	public exitRule(listener: VeeListener): void {
	    if(listener.exitPargs) {
	 		listener.exitPargs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VeeVisitor<Result>): Result {
		if (visitor.visitPargs) {
			return visitor.visitPargs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: VeeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUM(): TerminalNode {
		return this.getToken(VeeParser.NUM, 0);
	}
	public VAR(): TerminalNode {
		return this.getToken(VeeParser.VAR, 0);
	}
	public STR(): TerminalNode {
		return this.getToken(VeeParser.STR, 0);
	}
	public args(): ArgsContext {
		return this.getTypedRuleContext(ArgsContext, 0) as ArgsContext;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public pargs(): PargsContext {
		return this.getTypedRuleContext(PargsContext, 0) as PargsContext;
	}
    public get ruleIndex(): number {
    	return VeeParser.RULE_expr;
	}
	public enterRule(listener: VeeListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: VeeListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VeeVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
