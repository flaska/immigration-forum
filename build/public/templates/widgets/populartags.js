!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function o(t,a,s,n,g){t.__escape;return'<div class="popular-tags">\r\n'+o.blocks.tags(t,a,s,n,g)+"\r\n</div>\r\n"}return o.blocks={tags:function(t,g,o,a,s){var e=t.__escape;return a(o(g&&g.tags),function(t,a,s,n){return'\r\n\t<span class="inline-block">\r\n\t<a href="'+e(o(g&&g.relative_path))+"/tags/"+e(o(g&&g.tags&&g.tags[t]&&g.tags[t].value))+'"><span class="tag-item tag-'+e(o(g&&g.tags&&g.tags[t]&&g.tags[t].value))+'" style="'+(o(g&&g.tags&&g.tags[t]&&g.tags[t].color)?"color: "+e(o(g&&g.tags&&g.tags[t]&&g.tags[t].color))+";":"")+(o(g&&g.tags&&g.tags[t]&&g.tags[t].bgColor)?"background-color: "+e(o(g&&g.tags&&g.tags[t]&&g.tags[t].bgColor))+";":"")+'">'+e(o(g&&g.tags&&g.tags[t]&&g.tags[t].value))+'</span><span class="tag-topic-count">'+e(o(g&&g.tags&&g.tags[t]&&g.tags[t].score))+"</span></a>\r\n\t</span>\r\n"},function(){return""})}},o});