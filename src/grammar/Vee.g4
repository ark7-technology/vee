grammar Vee;		
prog:	text EOF ;
text: '{{' expr '}}'
    | (~'{')+ text
    | text (~'}')+
    | .*?
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

NEWLINE : [\r\n]+ -> skip;
NUM     : [0-9]+ ;
VAR     : [a-zA-Z][a-zA-Z0-9.]+ ;
STR     : UnterminatedStringLiteral '"';

UnterminatedStringLiteral
  : '"' (~["\\\r\n] | '\\' (. | EOF))*
  ;
