grammar Vee;

prog:	text EOF ;

text: textContent* ;

textContent : '{{' expr '}}'
            | VAR
            | NUM
            | STR
            | WORDS;

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

NEWLINE : [\r\n]+ -> skip;
NUM     : [0-9.]+ ;
VAR     : [a-zA-Z][a-zA-Z0-9.]* ;
STR     : UnterminatedStringLiteral '"';
WORDS   : (~[{}])+ ;


UnterminatedStringLiteral
  : '"' (~["\\\r\n] | '\\' (. | EOF))*
  ;

