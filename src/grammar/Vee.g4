grammar Vee;

prog:	text EOF ;

text: textContent* ;

textContent : '{{' expr '}}'
            | VAR
            | NUM
            | STR
            | PLUS
            | MINUS
            | MULTI
            | DIV
            | OTHERS
            ;

args: expr ( ',' expr )*;
pargs: ( ':' expr )*;
expr:	expr ('*'|'/') expr
    |	expr ('+'|'-') expr
    | expr '[' expr ']'
    | expr '|' VAR pargs
    |	NUM
    |	VAR
    | STR
    | VAR '(' args? ')'
    |	'(' expr ')'
    ;

PLUS    : '+';
MINUS   : '-';
MULTI   : '*';
DIV     : '/';
NEWLINE : [\r\n]+ -> skip;
NUM     : [0-9.]+ ;
VAR     : [a-zA-Z][a-zA-Z0-9.]* ;
STR     : UnterminatedStringLiteral '"'
        | '\'' UnterminatedStringLiteralSingleQuote;
OTHERS  : ~[0-9a-zA-Z{}:|()[\]'"]+ ;


UnterminatedStringLiteral
  : '"' (~["\\\r\n] | '\\' (. | EOF))*
  ;

UnterminatedStringLiteralSingleQuote
  : '\'' (~['\\\r\n] | '\\' (. | EOF))*
  ;

