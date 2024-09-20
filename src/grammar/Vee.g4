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

PLUS    : '+' ;
MINUS   : '-' ;
MULTI   : '*' ;
DIV     : '/' ;
SQ      : '\'' ;
NEWLINE : [\r\n]+ -> skip ;
NUM     : [0-9.]+ ;
VAR     : [a-zA-Z][a-zA-Z0-9.]* ;
STR     : '"' (~["\\\r\n] | '\\' (. | EOF))* '"'
        | UnterminatedStringLiteralSingleQuote '\'' ;
OTHERS  : ~[0-9a-zA-Z{}:|()[\]'"]+ ;


UnterminatedStringLiteralSingleQuote
  : '\'' (~['\\\r\n] | '\\' (. | EOF))*
  ;

