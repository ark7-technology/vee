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
	public static readonly PLUS = 10;
	public static readonly MINUS = 11;
	public static readonly MULTI = 12;
	public static readonly DIV = 13;
	public static readonly SQ = 14;
	public static readonly NEWLINE = 15;
	public static readonly NUM = 16;
	public static readonly VAR = 17;
	public static readonly STR = 18;
	public static readonly OTHERS = 19;
	public static readonly UnterminatedStringLiteral = 20;
	public static readonly UnterminatedStringLiteralSingleQuote = 21;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_text = 1;
	public static readonly RULE_textContent = 2;
	public static readonly RULE_args = 3;
	public static readonly RULE_pargs = 4;
	public static readonly RULE_expr = 5;
	public static readonly literalNames: (string | null)[] = [ null, "'{{'", 
                                                            "'}}'", "','", 
                                                            "':'", "'['", 
                                                            "']'", "'|'", 
                                                            "'('", "')'", 
                                                            "'+'", "'-'", 
                                                            "'*'", "'/'", 
                                                            "'''" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "PLUS", "MINUS", 
                                                             "MULTI", "DIV", 
                                                             "SQ", "NEWLINE", 
                                                             "NUM", "VAR", 
                                                             "STR", "OTHERS", 
                                                             "UnterminatedStringLiteral", 
                                                             "UnterminatedStringLiteralSingleQuote" ];
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 998402) !== 0)) {
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
			this.state = 33;
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
			case 17:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 25;
				this.match(VeeParser.VAR);
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 26;
				this.match(VeeParser.NUM);
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 27;
				this.match(VeeParser.STR);
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 28;
				this.match(VeeParser.PLUS);
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 29;
				this.match(VeeParser.MINUS);
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 30;
				this.match(VeeParser.MULTI);
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 31;
				this.match(VeeParser.DIV);
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 32;
				this.match(VeeParser.OTHERS);
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
			this.state = 35;
			this.expr(0);
			this.state = 40;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===3) {
				{
				{
				this.state = 36;
				this.match(VeeParser.T__2);
				this.state = 37;
				this.expr(0);
				}
				}
				this.state = 42;
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
			this.state = 47;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 43;
					this.match(VeeParser.T__3);
					this.state = 44;
					this.expr(0);
					}
					}
				}
				this.state = 49;
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
			this.state = 64;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 51;
				this.match(VeeParser.NUM);
				}
				break;
			case 2:
				{
				this.state = 52;
				this.match(VeeParser.VAR);
				}
				break;
			case 3:
				{
				this.state = 53;
				this.match(VeeParser.STR);
				}
				break;
			case 4:
				{
				this.state = 54;
				this.match(VeeParser.VAR);
				this.state = 55;
				this.match(VeeParser.T__7);
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 459008) !== 0)) {
					{
					this.state = 56;
					this.args();
					}
				}

				this.state = 59;
				this.match(VeeParser.T__8);
				}
				break;
			case 5:
				{
				this.state = 60;
				this.match(VeeParser.T__7);
				this.state = 61;
				this.expr(0);
				this.state = 62;
				this.match(VeeParser.T__8);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 83;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 81;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expr);
						this.state = 66;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 67;
						_la = this._input.LA(1);
						if(!(_la===12 || _la===13)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 68;
						this.expr(10);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expr);
						this.state = 69;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 70;
						_la = this._input.LA(1);
						if(!(_la===10 || _la===11)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 71;
						this.expr(9);
						}
						break;
					case 3:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expr);
						this.state = 72;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 73;
						this.match(VeeParser.T__4);
						this.state = 74;
						this.expr(0);
						this.state = 75;
						this.match(VeeParser.T__5);
						}
						break;
					case 4:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, VeeParser.RULE_expr);
						this.state = 77;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 78;
						this.match(VeeParser.T__6);
						this.state = 79;
						this.match(VeeParser.VAR);
						this.state = 80;
						this.pargs();
						}
						break;
					}
					}
				}
				this.state = 85;
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

	public static readonly _serializedATN: number[] = [4,1,21,87,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,1,0,1,0,1,0,1,1,5,1,17,8,1,10,1,12,
	1,20,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,34,8,2,1,3,
	1,3,1,3,5,3,39,8,3,10,3,12,3,42,9,3,1,4,1,4,5,4,46,8,4,10,4,12,4,49,9,4,
	1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,58,8,5,1,5,1,5,1,5,1,5,1,5,3,5,65,8,5,1,
	5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,82,8,5,10,
	5,12,5,85,9,5,1,5,0,1,10,6,0,2,4,6,8,10,0,2,1,0,12,13,1,0,10,11,100,0,12,
	1,0,0,0,2,18,1,0,0,0,4,33,1,0,0,0,6,35,1,0,0,0,8,47,1,0,0,0,10,64,1,0,0,
	0,12,13,3,2,1,0,13,14,5,0,0,1,14,1,1,0,0,0,15,17,3,4,2,0,16,15,1,0,0,0,
	17,20,1,0,0,0,18,16,1,0,0,0,18,19,1,0,0,0,19,3,1,0,0,0,20,18,1,0,0,0,21,
	22,5,1,0,0,22,23,3,10,5,0,23,24,5,2,0,0,24,34,1,0,0,0,25,34,5,17,0,0,26,
	34,5,16,0,0,27,34,5,18,0,0,28,34,5,10,0,0,29,34,5,11,0,0,30,34,5,12,0,0,
	31,34,5,13,0,0,32,34,5,19,0,0,33,21,1,0,0,0,33,25,1,0,0,0,33,26,1,0,0,0,
	33,27,1,0,0,0,33,28,1,0,0,0,33,29,1,0,0,0,33,30,1,0,0,0,33,31,1,0,0,0,33,
	32,1,0,0,0,34,5,1,0,0,0,35,40,3,10,5,0,36,37,5,3,0,0,37,39,3,10,5,0,38,
	36,1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,7,1,0,0,0,42,40,
	1,0,0,0,43,44,5,4,0,0,44,46,3,10,5,0,45,43,1,0,0,0,46,49,1,0,0,0,47,45,
	1,0,0,0,47,48,1,0,0,0,48,9,1,0,0,0,49,47,1,0,0,0,50,51,6,5,-1,0,51,65,5,
	16,0,0,52,65,5,17,0,0,53,65,5,18,0,0,54,55,5,17,0,0,55,57,5,8,0,0,56,58,
	3,6,3,0,57,56,1,0,0,0,57,58,1,0,0,0,58,59,1,0,0,0,59,65,5,9,0,0,60,61,5,
	8,0,0,61,62,3,10,5,0,62,63,5,9,0,0,63,65,1,0,0,0,64,50,1,0,0,0,64,52,1,
	0,0,0,64,53,1,0,0,0,64,54,1,0,0,0,64,60,1,0,0,0,65,83,1,0,0,0,66,67,10,
	9,0,0,67,68,7,0,0,0,68,82,3,10,5,10,69,70,10,8,0,0,70,71,7,1,0,0,71,82,
	3,10,5,9,72,73,10,7,0,0,73,74,5,5,0,0,74,75,3,10,5,0,75,76,5,6,0,0,76,82,
	1,0,0,0,77,78,10,6,0,0,78,79,5,7,0,0,79,80,5,17,0,0,80,82,3,8,4,0,81,66,
	1,0,0,0,81,69,1,0,0,0,81,72,1,0,0,0,81,77,1,0,0,0,82,85,1,0,0,0,83,81,1,
	0,0,0,83,84,1,0,0,0,84,11,1,0,0,0,85,83,1,0,0,0,8,18,33,40,47,57,64,81,
	83];

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
	public PLUS(): TerminalNode {
		return this.getToken(VeeParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(VeeParser.MINUS, 0);
	}
	public MULTI(): TerminalNode {
		return this.getToken(VeeParser.MULTI, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(VeeParser.DIV, 0);
	}
	public OTHERS(): TerminalNode {
		return this.getToken(VeeParser.OTHERS, 0);
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
	public MULTI(): TerminalNode {
		return this.getToken(VeeParser.MULTI, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(VeeParser.DIV, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(VeeParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(VeeParser.MINUS, 0);
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
