self.webpackChunk(["mode/mllike"],{23:function(a,b,c){(function(a){a(c(0))})(function(a){"use strict";a.defineMode("mllike",function(a,b){function c(a,c){var h=a.next();if("\""===h)return c.tokenize=d,c.tokenize(a,c);if("{"===h&&a.eat("|"))return c.longString=!0,c.tokenize=f,c.tokenize(a,c);if("("===h&&a.eat("*"))return c.commentLevel++,c.tokenize=e,c.tokenize(a,c);if("~"===h)return a.eatWhile(/\w/),"variable-2";if("`"===h)return a.eatWhile(/\w/),"quote";if("/"===h&&b.slashComments&&a.eat("/"))return a.skipToEnd(),"comment";if(/\d/.test(h))return"0"===h&&a.eat(/[bB]/)&&a.eatWhile(/[01]/),"0"===h&&a.eat(/[xX]/)&&a.eatWhile(/[0-9a-fA-F]/),"0"===h&&a.eat(/[oO]/)?a.eatWhile(/[0-7]/):(a.eatWhile(/[\d_]/),a.eat(".")&&a.eatWhile(/[\d]/),a.eat(/[eE]/)&&a.eatWhile(/[\d\-+]/)),"number";if(/[+\-*&%=<>!?|@]/.test(h))return"operator";if(/[\w\xa1-\uffff]/.test(h)){a.eatWhile(/[\w\xa1-\uffff]/);var i=a.current();return g.hasOwnProperty(i)?g[i]:"variable"}return null}function d(a,b){for(var d,e=!1,f=!1;null!=(d=a.next());){if("\""===d&&!f){e=!0;break}f=!f&&"\\"===d}return e&&!f&&(b.tokenize=c),"string"}function e(a,b){for(var d,e;0<b.commentLevel&&null!=(e=a.next());)"("===d&&"*"===e&&b.commentLevel++,"*"===d&&")"===e&&b.commentLevel--,d=e;return 0>=b.commentLevel&&(b.tokenize=c),"comment"}function f(a,b){for(var d,e;b.longString&&null!=(e=a.next());)"|"===d&&"}"===e&&(b.longString=!1),d=e;return b.longString||(b.tokenize=c),"string"}var g={let:"keyword",rec:"keyword",in:"keyword",of:"keyword",and:"keyword",if:"keyword",then:"keyword",else:"keyword",for:"keyword",to:"keyword",while:"keyword",do:"keyword",done:"keyword",fun:"keyword",function:"keyword",val:"keyword",type:"keyword",mutable:"keyword",match:"keyword",with:"keyword",try:"keyword",open:"builtin",ignore:"builtin",begin:"keyword",end:"keyword"},h=b.extraWords||{};for(var i in h)h.hasOwnProperty(i)&&(g[i]=b.extraWords[i]);return{startState:function(){return{tokenize:c,commentLevel:0,longString:!1}},token:function(a,b){return a.eatSpace()?null:b.tokenize(a,b)},blockCommentStart:"(*",blockCommentEnd:"*)",lineComment:b.slashComments?"//":null}}),a.defineMIME("text/x-ocaml",{name:"mllike",extraWords:{succ:"keyword",trace:"builtin",exit:"builtin",print_string:"builtin",print_endline:"builtin",true:"atom",false:"atom",raise:"keyword",module:"keyword",sig:"keyword"}}),a.defineMIME("text/x-fsharp",{name:"mllike",extraWords:{abstract:"keyword",as:"keyword",assert:"keyword",base:"keyword",class:"keyword",default:"keyword",delegate:"keyword",downcast:"keyword",downto:"keyword",elif:"keyword",exception:"keyword",extern:"keyword",finally:"keyword",global:"keyword",inherit:"keyword",inline:"keyword",interface:"keyword",internal:"keyword",lazy:"keyword","let!":"keyword",member:"keyword",module:"keyword",namespace:"keyword",new:"keyword",null:"keyword",override:"keyword",private:"keyword",public:"keyword",return:"keyword","return!":"keyword",select:"keyword",static:"keyword",struct:"keyword",upcast:"keyword",use:"keyword","use!":"keyword",val:"keyword",when:"keyword",yield:"keyword","yield!":"keyword",List:"builtin",Seq:"builtin",Map:"builtin",Set:"builtin",int:"builtin",string:"builtin",raise:"builtin",failwith:"builtin",not:"builtin",true:"builtin",false:"builtin"},slashComments:!0})})}});
//# sourceMappingURL=mllike.js.map