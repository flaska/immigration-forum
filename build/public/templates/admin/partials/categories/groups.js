!function(r){"object"==typeof module&&module.exports?module.exports=r():"function"==typeof define&&define.amd&&define(r)}(function(){function p(r,e,s,t,o){r.__escape;return p.blocks.groups(r,e,s,t,o)+"\r\n"}return p.blocks={groups:function(r,o,p,e,s){var i=r.__escape;return e(p(o&&o.groups),function(r,e,s,t){return'\r\n<li data-name="'+i(p(o&&o.groups&&o.groups[r]&&o.groups[r].displayName))+'">\r\n\t<div class="btn-group pull-right">\r\n\t\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\r\n\t\t\tPrivileges <span class="caret"></span>\r\n\t\t</button>\r\n\t\t<ul class="dropdown-menu" role="menu">\r\n\t\t\t<li role="presentation"><a href="#" data-priv="groups:find" class="'+(p(o&&o.groups&&o.groups[r]&&o.groups[r].privileges&&o.groups[r].privileges["groups:find"])?"active":"")+'">Find Category</a></li>\r\n\t\t\t<li role="presentation"><a href="#" data-priv="groups:read" class="'+(p(o&&o.groups&&o.groups[r]&&o.groups[r].privileges&&o.groups[r].privileges["groups:read"])?"active":"")+'">Access Category</a></li>\r\n\t\t\t<li role="presentation"><a href="#" data-priv="groups:topics:read" class="'+(p(o&&o.groups&&o.groups[r]&&o.groups[r].privileges&&o.groups[r].privileges["groups:topics:read"])?"active":"")+'">Access Topics</a></li>\r\n\t\t\t<li role="presentation"><a href="#" data-priv="groups:topics:create" class="'+(p(o&&o.groups&&o.groups[r]&&o.groups[r].privileges&&o.groups[r].privileges["groups:topics:create"])?"active":"")+'">Create Topics</a></li>\r\n\t\t\t<li role="presentation"><a href="#" data-priv="groups:topics:reply" class="'+(p(o&&o.groups&&o.groups[r]&&o.groups[r].privileges&&o.groups[r].privileges["groups:topics:reply"])?"active":"")+'">Reply to Topics</a></li>\r\n\t\t\t<li role="presentation"><a href="#" data-priv="groups:posts:edit" class="'+(p(o&&o.groups&&o.groups[r]&&o.groups[r].privileges&&o.groups[r].privileges["groups:posts:edit"])?"active":"")+'">Edit Posts</a></li>\r\n\t\t\t<li role="presentation"><a href="#" data-priv="groups:posts:delete" class="'+(p(o&&o.groups&&o.groups[r]&&o.groups[r].privileges&&o.groups[r].privileges["groups:posts:delete"])?"active":"")+'">Delete Posts</a></li>\r\n\t\t\t<li role="presentation"><a href="#" data-priv="groups:topics:delete" class="'+(p(o&&o.groups&&o.groups[r]&&o.groups[r].privileges&&o.groups[r].privileges["groups:topics:delete"])?"active":"")+'">Delete Topics</a></li>\r\n\t\t</ul>\r\n\t</div>\r\n\t'+i(p(o&&o.groups&&o.groups[r]&&o.groups[r].displayName))+"\r\n</li>\r\n"},function(){return""})}},p});