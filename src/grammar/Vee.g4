grammar Vee;		
prog:	text EOF ;
text: '{{' expr '}}'
    | (~'{')+ text
    | text (~'}')+
    | .*?
    ;
expr:	expr ('*'|'/') expr
    |	expr ('+'|'-') expr
    |	NUM
    |	'(' expr ')'
    ;
NEWLINE : [\r\n]+ -> skip;
NUM     : [0-9]+ ;

