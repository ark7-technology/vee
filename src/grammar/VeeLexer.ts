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
	public static readonly PLUS = 8;
	public static readonly MINUS = 9;
	public static readonly MULTI = 10;
	public static readonly DIV = 11;
	public static readonly SQ = 12;
	public static readonly LB = 13;
	public static readonly RB = 14;
	public static readonly NEWLINE = 15;
	public static readonly NUM = 16;
	public static readonly VAR = 17;
	public static readonly STR = 18;
	public static readonly OTHERS = 19;
	public static readonly UnterminatedStringLiteralSingleQuote = 20;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'{{'", 
                                                            "'}}'", "','", 
                                                            "':'", "'['", 
                                                            "']'", "'|'", 
                                                            "'+'", "'-'", 
                                                            "'*'", "'/'", 
                                                            "'''", "'('", 
                                                            "')'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "PLUS", "MINUS", 
                                                             "MULTI", "DIV", 
                                                             "SQ", "LB", 
                                                             "RB", "NEWLINE", 
                                                             "NUM", "VAR", 
                                                             "STR", "OTHERS", 
                                                             "UnterminatedStringLiteralSingleQuote" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "PLUS", "MINUS", 
		"MULTI", "DIV", "SQ", "LB", "RB", "NEWLINE", "NUM", "VAR", "STR", "OTHERS", 
		"UnterminatedStringLiteralSingleQuote",
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

	public static readonly _serializedATN: number[] = [4,0,20,125,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,3,1,
	3,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,
	12,1,12,1,13,1,13,1,14,4,14,73,8,14,11,14,12,14,74,1,14,1,14,1,15,4,15,
	80,8,15,11,15,12,15,81,1,16,1,16,5,16,86,8,16,10,16,12,16,89,9,16,1,17,
	1,17,1,17,1,17,1,17,3,17,96,8,17,5,17,98,8,17,10,17,12,17,101,9,17,1,17,
	1,17,1,17,1,17,3,17,107,8,17,1,18,4,18,110,8,18,11,18,12,18,111,1,19,1,
	19,1,19,1,19,1,19,3,19,119,8,19,5,19,121,8,19,10,19,12,19,124,9,19,0,0,
	20,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,
	29,15,31,16,33,17,35,18,37,19,39,20,1,0,7,2,0,10,10,13,13,2,0,46,46,48,
	57,2,0,65,90,97,122,4,0,46,46,48,57,65,90,97,122,4,0,10,10,13,13,34,34,
	92,92,6,0,34,34,39,41,48,58,65,91,93,93,97,125,4,0,10,10,13,13,39,39,92,
	92,135,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
	1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,
	0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,
	1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,1,41,1,0,0,0,3,44,1,0,0,
	0,5,47,1,0,0,0,7,49,1,0,0,0,9,51,1,0,0,0,11,53,1,0,0,0,13,55,1,0,0,0,15,
	57,1,0,0,0,17,59,1,0,0,0,19,61,1,0,0,0,21,63,1,0,0,0,23,65,1,0,0,0,25,67,
	1,0,0,0,27,69,1,0,0,0,29,72,1,0,0,0,31,79,1,0,0,0,33,83,1,0,0,0,35,106,
	1,0,0,0,37,109,1,0,0,0,39,113,1,0,0,0,41,42,5,123,0,0,42,43,5,123,0,0,43,
	2,1,0,0,0,44,45,5,125,0,0,45,46,5,125,0,0,46,4,1,0,0,0,47,48,5,44,0,0,48,
	6,1,0,0,0,49,50,5,58,0,0,50,8,1,0,0,0,51,52,5,91,0,0,52,10,1,0,0,0,53,54,
	5,93,0,0,54,12,1,0,0,0,55,56,5,124,0,0,56,14,1,0,0,0,57,58,5,43,0,0,58,
	16,1,0,0,0,59,60,5,45,0,0,60,18,1,0,0,0,61,62,5,42,0,0,62,20,1,0,0,0,63,
	64,5,47,0,0,64,22,1,0,0,0,65,66,5,39,0,0,66,24,1,0,0,0,67,68,5,40,0,0,68,
	26,1,0,0,0,69,70,5,41,0,0,70,28,1,0,0,0,71,73,7,0,0,0,72,71,1,0,0,0,73,
	74,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,76,1,0,0,0,76,77,6,14,0,0,77,
	30,1,0,0,0,78,80,7,1,0,0,79,78,1,0,0,0,80,81,1,0,0,0,81,79,1,0,0,0,81,82,
	1,0,0,0,82,32,1,0,0,0,83,87,7,2,0,0,84,86,7,3,0,0,85,84,1,0,0,0,86,89,1,
	0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,34,1,0,0,0,89,87,1,0,0,0,90,99,5,34,
	0,0,91,98,8,4,0,0,92,95,5,92,0,0,93,96,9,0,0,0,94,96,5,0,0,1,95,93,1,0,
	0,0,95,94,1,0,0,0,96,98,1,0,0,0,97,91,1,0,0,0,97,92,1,0,0,0,98,101,1,0,
	0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,102,1,0,0,0,101,99,1,0,0,0,102,107,
	5,34,0,0,103,104,3,39,19,0,104,105,5,39,0,0,105,107,1,0,0,0,106,90,1,0,
	0,0,106,103,1,0,0,0,107,36,1,0,0,0,108,110,8,5,0,0,109,108,1,0,0,0,110,
	111,1,0,0,0,111,109,1,0,0,0,111,112,1,0,0,0,112,38,1,0,0,0,113,122,5,39,
	0,0,114,121,8,6,0,0,115,118,5,92,0,0,116,119,9,0,0,0,117,119,5,0,0,1,118,
	116,1,0,0,0,118,117,1,0,0,0,119,121,1,0,0,0,120,114,1,0,0,0,120,115,1,0,
	0,0,121,124,1,0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,40,1,0,0,0,124,
	122,1,0,0,0,12,0,74,81,87,95,97,99,106,111,118,120,122,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!VeeLexer.__ATN) {
			VeeLexer.__ATN = new ATNDeserializer().deserialize(VeeLexer._serializedATN);
		}

		return VeeLexer.__ATN;
	}


	static DecisionsToDFA = VeeLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}