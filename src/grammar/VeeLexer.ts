// Generated from src/grammar/Vee.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class VeeLexer extends Lexer {
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
	public static readonly NEWLINE = 14;
	public static readonly NUM = 15;
	public static readonly VAR = 16;
	public static readonly STR = 17;
	public static readonly OTHERS = 18;
	public static readonly UnterminatedStringLiteral = 19;
	public static readonly UnterminatedStringLiteralSingleQuote = 20;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'{{'", 
                                                            "'}}'", "','", 
                                                            "':'", "'['", 
                                                            "']'", "'|'", 
                                                            "'('", "')'", 
                                                            "'+'", "'-'", 
                                                            "'*'", "'/'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "PLUS", "MINUS", 
                                                             "MULTI", "DIV", 
                                                             "NEWLINE", 
                                                             "NUM", "VAR", 
                                                             "STR", "OTHERS", 
                                                             "UnterminatedStringLiteral", 
                                                             "UnterminatedStringLiteralSingleQuote" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"PLUS", "MINUS", "MULTI", "DIV", "NEWLINE", "NUM", "VAR", "STR", "OTHERS", 
		"UnterminatedStringLiteral", "UnterminatedStringLiteralSingleQuote",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, VeeLexer._ATN, VeeLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Vee.g4"; }

	public get literalNames(): (string | null)[] { return VeeLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return VeeLexer.symbolicNames; }
	public get ruleNames(): string[] { return VeeLexer.ruleNames; }

	public get serializedATN(): number[] { return VeeLexer._serializedATN; }

	public get channelNames(): string[] { return VeeLexer.channelNames; }

	public get modeNames(): string[] { return VeeLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,20,124,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,3,1,
	3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,
	12,1,12,1,13,4,13,71,8,13,11,13,12,13,72,1,13,1,13,1,14,4,14,78,8,14,11,
	14,12,14,79,1,15,1,15,5,15,84,8,15,10,15,12,15,87,9,15,1,16,1,16,1,16,1,
	16,1,16,3,16,94,8,16,1,17,4,17,97,8,17,11,17,12,17,98,1,18,1,18,1,18,1,
	18,1,18,3,18,106,8,18,5,18,108,8,18,10,18,12,18,111,9,18,1,19,1,19,1,19,
	1,19,1,19,3,19,118,8,19,5,19,120,8,19,10,19,12,19,123,9,19,0,0,20,1,1,3,
	2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,
	16,33,17,35,18,37,19,39,20,1,0,7,2,0,10,10,13,13,2,0,46,46,48,57,2,0,65,
	90,97,122,4,0,46,46,48,57,65,90,97,122,6,0,34,34,39,41,48,58,65,91,93,93,
	97,125,4,0,10,10,13,13,34,34,92,92,4,0,10,10,13,13,39,39,92,92,134,0,1,
	1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,
	13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,
	0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,
	35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,1,41,1,0,0,0,3,44,1,0,0,0,5,47,1,0,
	0,0,7,49,1,0,0,0,9,51,1,0,0,0,11,53,1,0,0,0,13,55,1,0,0,0,15,57,1,0,0,0,
	17,59,1,0,0,0,19,61,1,0,0,0,21,63,1,0,0,0,23,65,1,0,0,0,25,67,1,0,0,0,27,
	70,1,0,0,0,29,77,1,0,0,0,31,81,1,0,0,0,33,93,1,0,0,0,35,96,1,0,0,0,37,100,
	1,0,0,0,39,112,1,0,0,0,41,42,5,123,0,0,42,43,5,123,0,0,43,2,1,0,0,0,44,
	45,5,125,0,0,45,46,5,125,0,0,46,4,1,0,0,0,47,48,5,44,0,0,48,6,1,0,0,0,49,
	50,5,58,0,0,50,8,1,0,0,0,51,52,5,91,0,0,52,10,1,0,0,0,53,54,5,93,0,0,54,
	12,1,0,0,0,55,56,5,124,0,0,56,14,1,0,0,0,57,58,5,40,0,0,58,16,1,0,0,0,59,
	60,5,41,0,0,60,18,1,0,0,0,61,62,5,43,0,0,62,20,1,0,0,0,63,64,5,45,0,0,64,
	22,1,0,0,0,65,66,5,42,0,0,66,24,1,0,0,0,67,68,5,47,0,0,68,26,1,0,0,0,69,
	71,7,0,0,0,70,69,1,0,0,0,71,72,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,74,
	1,0,0,0,74,75,6,13,0,0,75,28,1,0,0,0,76,78,7,1,0,0,77,76,1,0,0,0,78,79,
	1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,30,1,0,0,0,81,85,7,2,0,0,82,84,7,
	3,0,0,83,82,1,0,0,0,84,87,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,32,1,0,
	0,0,87,85,1,0,0,0,88,89,3,37,18,0,89,90,5,34,0,0,90,94,1,0,0,0,91,92,5,
	39,0,0,92,94,3,39,19,0,93,88,1,0,0,0,93,91,1,0,0,0,94,34,1,0,0,0,95,97,
	8,4,0,0,96,95,1,0,0,0,97,98,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,36,1,
	0,0,0,100,109,5,34,0,0,101,108,8,5,0,0,102,105,5,92,0,0,103,106,9,0,0,0,
	104,106,5,0,0,1,105,103,1,0,0,0,105,104,1,0,0,0,106,108,1,0,0,0,107,101,
	1,0,0,0,107,102,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,109,110,1,0,0,0,
	110,38,1,0,0,0,111,109,1,0,0,0,112,121,5,39,0,0,113,120,8,6,0,0,114,117,
	5,92,0,0,115,118,9,0,0,0,116,118,5,0,0,1,117,115,1,0,0,0,117,116,1,0,0,
	0,118,120,1,0,0,0,119,113,1,0,0,0,119,114,1,0,0,0,120,123,1,0,0,0,121,119,
	1,0,0,0,121,122,1,0,0,0,122,40,1,0,0,0,123,121,1,0,0,0,12,0,72,79,85,93,
	98,105,107,109,117,119,121,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!VeeLexer.__ATN) {
			VeeLexer.__ATN = new ATNDeserializer().deserialize(VeeLexer._serializedATN);
		}

		return VeeLexer.__ATN;
	}


	static DecisionsToDFA = VeeLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}