!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function e(t,n,f,i,s){var o=t.__escape;return"<p>\n\t"+(f(n&&n.numDiffs)?"\n\t[[topic:diffs.description, "+o(f(n&&n.numDiffs))+"]]\n\t":"\n\t[[topic:diffs.no-revisions-description, "+o(f(n&&n.numDiffs))+"]]\n\t")+"\n</p>\n"+(f(n&&n.numDiffs)?'\n<div class="form-group">\n\t<select class="form-control">\n\t\t'+e.blocks.diffs(t,n,f,i,s)+'\n\t</select>\n\n\t<hr />\n\n\t<ul class="posts-list diffs"></ul>\n</div>\n':"")}return e.blocks={diffs:function(t,s,o,n,f){var e=t.__escape;return n(o(s&&s.diffs),function(t,n,f,i){return'\n\t\t<option value="'+e(o(s&&s.diffs&&s.diffs[t]&&s.diffs[t].timestamp))+'">\n\t\t\t'+e(o(s&&s.diffs&&s.diffs[t]&&s.diffs[t].pretty))+"\n\t\t\t"+(0===n?"([[topic:diffs.current-revision]])":"")+"\n\t\t\t"+(n===f-1?"([[topic:diffs.original-revision]])":"")+"\n\t\t</option>\n\t\t"},function(){return""})}},e});