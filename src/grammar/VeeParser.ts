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
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly NEWLINE = 16;
	public static readonly NUM = 17;
	public static readonly VAR = 18;
	public static readonly STR = 19;
	public static readonly UnterminatedStringLiteral = 20;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_text = 1;
	public static readonly RULE_args = 2;
	public static readonly RULE_pargs = 3;
	public static readonly RULE_expr = 4;
	public static readonly literalNames: (string | null)[] = [ null, "'{{'", 
                                                            "'}}'", "'{'", 
                                                            "'}'", "','", 
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
                                                             null, null, 
                                                             "NEWLINE", 
                                                             "NUM", "VAR", 
                                                             "STR", "UnterminatedStringLiteral" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "text", "args", "pargs", "expr",
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
			this.state = 10;
			this.text(0);
			this.state = 11;
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
			this.state = 30;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 14;
				this.match(VeeParser.T__0);
				this.state = 15;
				this.expr(0);
				this.state = 16;
				this.match(VeeParser.T__1);
				}
				break;
			case 2:
				{
				this.state = 19;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 18;
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
					this.state = 21;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 23;
				this.text(3);
				}
				break;
			case 3:
				{
				this.state = 27;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
				while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1 + 1) {
						{
						{
						this.state = 24;
						this.matchWildcard();
						}
						}
					}
					this.state = 29;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
				}
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 40;
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
					this.state = 32;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 34;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 33;
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
						this.state = 36;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					}
				}
				this.state = 42;
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
	// @RuleVersion(0)
	public args(): ArgsContext {
		let localctx: ArgsContext = new ArgsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, VeeParser.RULE_args);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 43;
			this.expr(0);
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 44;
				this.match(VeeParser.T__4);
				this.state = 45;
				this.expr(0);
				}
				}
				this.state = 50;
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
		this.enterRule(localctx, 6, VeeParser.RULE_pargs);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 55;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 51;
					this.match(VeeParser.T__5);
					this.state = 52;
					this.expr(0);
					}
					}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
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
		let _startState: number = 8;
		this.enterRecursionRule(localctx, 8, VeeParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 72;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 59;
				this.match(VeeParser.NUM);
				}
				break;
			case 2:
				{
				this.state = 60;
				this.match(VeeParser.VAR);
				}
				break;
			case 3:
				{
				this.state = 61;
				this.match(VeeParser.STR);
				}
				break;
			case 4:
				{
				this.state = 62;
				this.match(VeeParser.VAR);
				this.state = 63;
				this.match(VeeParser.T__13);
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 933888) !== 0)) {
					{
					this.state = 64;
					this.args();
					}
				}

				this.state = 67;
				this.match(VeeParser.T__14);
				}
				break;
			case 5:
				{
				this.state = 68;
				this.match(VeeParser.T__13);
				this.state = 69;
				this.expr(0);
				this.state = 70;
				this.match(VeeParser.T__14);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 91;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 89;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expr);
						this.state = 74;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 75;
						_la = this._input.LA(1);
						if(!(_la===7 || _la===8)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 76;
						this.expr(10);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expr);
						this.state = 77;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 78;
						_la = this._input.LA(1);
						if(!(_la===9 || _la===10)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 79;
						this.expr(9);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expr);
						this.state = 80;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 81;
						this.match(VeeParser.T__10);
						this.state = 82;
						this.expr(0);
						this.state = 83;
						this.match(VeeParser.T__11);
						}
						break;
					case 4:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expr);
						this.state = 85;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 86;
						this.match(VeeParser.T__12);
						this.state = 87;
						this.match(VeeParser.VAR);
						this.state = 88;
						this.pargs();
						}
						break;
					}
					}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
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
		case 4:
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
			return this.precpred(this._ctx, 9);
		case 2:
			return this.precpred(this._ctx, 8);
		case 3:
			return this.precpred(this._ctx, 7);
		case 4:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,20,95,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,4,1,20,
	8,1,11,1,12,1,21,1,1,1,1,5,1,26,8,1,10,1,12,1,29,9,1,3,1,31,8,1,1,1,1,1,
	4,1,35,8,1,11,1,12,1,36,5,1,39,8,1,10,1,12,1,42,9,1,1,2,1,2,1,2,5,2,47,
	8,2,10,2,12,2,50,9,2,1,3,1,3,5,3,54,8,3,10,3,12,3,57,9,3,1,4,1,4,1,4,1,
	4,1,4,1,4,1,4,3,4,66,8,4,1,4,1,4,1,4,1,4,1,4,3,4,73,8,4,1,4,1,4,1,4,1,4,
	1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,90,8,4,10,4,12,4,93,9,4,
	1,4,1,27,2,2,8,5,0,2,4,6,8,0,4,1,0,3,3,1,0,4,4,1,0,7,8,1,0,9,10,106,0,10,
	1,0,0,0,2,30,1,0,0,0,4,43,1,0,0,0,6,55,1,0,0,0,8,72,1,0,0,0,10,11,3,2,1,
	0,11,12,5,0,0,1,12,1,1,0,0,0,13,14,6,1,-1,0,14,15,5,1,0,0,15,16,3,8,4,0,
	16,17,5,2,0,0,17,31,1,0,0,0,18,20,8,0,0,0,19,18,1,0,0,0,20,21,1,0,0,0,21,
	19,1,0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,23,31,3,2,1,3,24,26,9,0,0,0,25,24,
	1,0,0,0,26,29,1,0,0,0,27,28,1,0,0,0,27,25,1,0,0,0,28,31,1,0,0,0,29,27,1,
	0,0,0,30,13,1,0,0,0,30,19,1,0,0,0,30,27,1,0,0,0,31,40,1,0,0,0,32,34,10,
	2,0,0,33,35,8,1,0,0,34,33,1,0,0,0,35,36,1,0,0,0,36,34,1,0,0,0,36,37,1,0,
	0,0,37,39,1,0,0,0,38,32,1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,
	0,41,3,1,0,0,0,42,40,1,0,0,0,43,48,3,8,4,0,44,45,5,5,0,0,45,47,3,8,4,0,
	46,44,1,0,0,0,47,50,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,5,1,0,0,0,50,
	48,1,0,0,0,51,52,5,6,0,0,52,54,3,8,4,0,53,51,1,0,0,0,54,57,1,0,0,0,55,53,
	1,0,0,0,55,56,1,0,0,0,56,7,1,0,0,0,57,55,1,0,0,0,58,59,6,4,-1,0,59,73,5,
	17,0,0,60,73,5,18,0,0,61,73,5,19,0,0,62,63,5,18,0,0,63,65,5,14,0,0,64,66,
	3,4,2,0,65,64,1,0,0,0,65,66,1,0,0,0,66,67,1,0,0,0,67,73,5,15,0,0,68,69,
	5,14,0,0,69,70,3,8,4,0,70,71,5,15,0,0,71,73,1,0,0,0,72,58,1,0,0,0,72,60,
	1,0,0,0,72,61,1,0,0,0,72,62,1,0,0,0,72,68,1,0,0,0,73,91,1,0,0,0,74,75,10,
	9,0,0,75,76,7,2,0,0,76,90,3,8,4,10,77,78,10,8,0,0,78,79,7,3,0,0,79,90,3,
	8,4,9,80,81,10,7,0,0,81,82,5,11,0,0,82,83,3,8,4,0,83,84,5,12,0,0,84,90,
	1,0,0,0,85,86,10,6,0,0,86,87,5,13,0,0,87,88,5,18,0,0,88,90,3,6,3,0,89,74,
	1,0,0,0,89,77,1,0,0,0,89,80,1,0,0,0,89,85,1,0,0,0,90,93,1,0,0,0,91,89,1,
	0,0,0,91,92,1,0,0,0,92,9,1,0,0,0,93,91,1,0,0,0,11,21,27,30,36,40,48,55,
	65,72,89,91];

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
