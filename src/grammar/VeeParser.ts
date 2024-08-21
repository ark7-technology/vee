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
	public static readonly NEWLINE = 11;
	public static readonly NUM = 12;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_text = 1;
	public static readonly RULE_expr = 2;
	public static readonly literalNames: (string | null)[] = [ null, "'{{'", 
                                                            "'}}'", "'{'", 
                                                            "'}'", "'*'", 
                                                            "'/'", "'+'", 
                                                            "'-'", "'('", 
                                                            "')'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "NEWLINE", 
                                                             "NUM" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "text", "expr",
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
			this.state = 6;
			this.text(0);
			this.state = 7;
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

	public text(): TextContext;
	public text(_p: number): TextContext;
	// @RuleVersion(0)
	public text(_p?: number): TextContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: TextContext = new TextContext(this, this._ctx, _parentState);
		let _prevctx: TextContext = localctx;
		let _startState: number = 2;
		this.enterRecursionRule(localctx, 2, VeeParser.RULE_text, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 26;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 10;
				this.match(VeeParser.T__0);
				this.state = 11;
				this.expr(0);
				this.state = 12;
				this.match(VeeParser.T__1);
				}
				break;
			case 2:
				{
				this.state = 15;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 14;
						_la = this._input.LA(1);
						if(_la<=0 || _la===3) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 17;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 19;
				this.text(3);
				}
				break;
			case 3:
				{
				this.state = 23;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 20;
						this.matchWildcard();
						}
						}
					}
					this.state = 25;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 36;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new TextContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_text);
					this.state = 28;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 30;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 29;
							_la = this._input.LA(1);
							if(_la<=0 || _la===4) {
							this._errHandler.recoverInline(this);
							}
							else {
								this._errHandler.reportMatch(this);
							    this.consume();
							}
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 32;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					}
				}
				this.state = 38;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 4, this._ctx);
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
		let _startState: number = 4;
		this.enterRecursionRule(localctx, 4, VeeParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
				{
				this.state = 40;
				this.match(VeeParser.NUM);
				}
				break;
			case 9:
				{
				this.state = 41;
				this.match(VeeParser.T__8);
				this.state = 42;
				this.expr(0);
				this.state = 43;
				this.match(VeeParser.T__9);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 55;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 53;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expr);
						this.state = 47;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 48;
						_la = this._input.LA(1);
						if(!(_la===5 || _la===6)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 49;
						this.expr(5);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expr);
						this.state = 50;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 51;
						_la = this._input.LA(1);
						if(!(_la===7 || _la===8)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 52;
						this.expr(4);
						}
						break;
					}
					}
				}
				this.state = 57;
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
		case 1:
			return this.text_sempred(localctx as TextContext, predIndex);
		case 2:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private text_sempred(localctx: TextContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 4);
		case 2:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,12,59,2,0,7,0,2,
	1,7,1,2,2,7,2,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,4,1,16,8,1,11,1,12,1,
	17,1,1,1,1,5,1,22,8,1,10,1,12,1,25,9,1,3,1,27,8,1,1,1,1,1,4,1,31,8,1,11,
	1,12,1,32,5,1,35,8,1,10,1,12,1,38,9,1,1,2,1,2,1,2,1,2,1,2,1,2,3,2,46,8,
	2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,54,8,2,10,2,12,2,57,9,2,1,2,1,23,2,2,4,3,
	0,2,4,0,4,1,0,3,3,1,0,4,4,1,0,5,6,1,0,7,8,64,0,6,1,0,0,0,2,26,1,0,0,0,4,
	45,1,0,0,0,6,7,3,2,1,0,7,8,5,0,0,1,8,1,1,0,0,0,9,10,6,1,-1,0,10,11,5,1,
	0,0,11,12,3,4,2,0,12,13,5,2,0,0,13,27,1,0,0,0,14,16,8,0,0,0,15,14,1,0,0,
	0,16,17,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,19,1,0,0,0,19,27,3,2,1,3,
	20,22,9,0,0,0,21,20,1,0,0,0,22,25,1,0,0,0,23,24,1,0,0,0,23,21,1,0,0,0,24,
	27,1,0,0,0,25,23,1,0,0,0,26,9,1,0,0,0,26,15,1,0,0,0,26,23,1,0,0,0,27,36,
	1,0,0,0,28,30,10,2,0,0,29,31,8,1,0,0,30,29,1,0,0,0,31,32,1,0,0,0,32,30,
	1,0,0,0,32,33,1,0,0,0,33,35,1,0,0,0,34,28,1,0,0,0,35,38,1,0,0,0,36,34,1,
	0,0,0,36,37,1,0,0,0,37,3,1,0,0,0,38,36,1,0,0,0,39,40,6,2,-1,0,40,46,5,12,
	0,0,41,42,5,9,0,0,42,43,3,4,2,0,43,44,5,10,0,0,44,46,1,0,0,0,45,39,1,0,
	0,0,45,41,1,0,0,0,46,55,1,0,0,0,47,48,10,4,0,0,48,49,7,2,0,0,49,54,3,4,
	2,5,50,51,10,3,0,0,51,52,7,3,0,0,52,54,3,4,2,4,53,47,1,0,0,0,53,50,1,0,
	0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,5,1,0,0,0,57,55,1,0,0,
	0,8,17,23,26,32,36,45,53,55];

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
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public text(): TextContext {
		return this.getTypedRuleContext(TextContext, 0) as TextContext;
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


export class ExprContext extends ParserRuleContext {
	constructor(parser?: VeeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUM(): TerminalNode {
		return this.getToken(VeeParser.NUM, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
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
