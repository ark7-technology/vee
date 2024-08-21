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
	public static readonly T__9 = 10;
	public static readonly NEWLINE = 11;
	public static readonly NUM = 12;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "NEWLINE", "NUM",
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

	public static readonly _serializedATN: number[] = [4,0,12,59,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,
	9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,
	5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,4,10,49,8,10,11,10,12,10,50,
	1,10,1,10,1,11,4,11,56,8,11,11,11,12,11,57,0,0,12,1,1,3,2,5,3,7,4,9,5,11,
	6,13,7,15,8,17,9,19,10,21,11,23,12,1,0,2,2,0,10,10,13,13,1,0,48,57,60,0,
	1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,
	0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,
	0,0,0,1,25,1,0,0,0,3,28,1,0,0,0,5,31,1,0,0,0,7,33,1,0,0,0,9,35,1,0,0,0,
	11,37,1,0,0,0,13,39,1,0,0,0,15,41,1,0,0,0,17,43,1,0,0,0,19,45,1,0,0,0,21,
	48,1,0,0,0,23,55,1,0,0,0,25,26,5,123,0,0,26,27,5,123,0,0,27,2,1,0,0,0,28,
	29,5,125,0,0,29,30,5,125,0,0,30,4,1,0,0,0,31,32,5,123,0,0,32,6,1,0,0,0,
	33,34,5,125,0,0,34,8,1,0,0,0,35,36,5,42,0,0,36,10,1,0,0,0,37,38,5,47,0,
	0,38,12,1,0,0,0,39,40,5,43,0,0,40,14,1,0,0,0,41,42,5,45,0,0,42,16,1,0,0,
	0,43,44,5,40,0,0,44,18,1,0,0,0,45,46,5,41,0,0,46,20,1,0,0,0,47,49,7,0,0,
	0,48,47,1,0,0,0,49,50,1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,52,1,0,0,0,
	52,53,6,10,0,0,53,22,1,0,0,0,54,56,7,1,0,0,55,54,1,0,0,0,56,57,1,0,0,0,
	57,55,1,0,0,0,57,58,1,0,0,0,58,24,1,0,0,0,3,0,50,57,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!VeeLexer.__ATN) {
			VeeLexer.__ATN = new ATNDeserializer().deserialize(VeeLexer._serializedATN);
		}

		return VeeLexer.__ATN;
	}


	static DecisionsToDFA = VeeLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}