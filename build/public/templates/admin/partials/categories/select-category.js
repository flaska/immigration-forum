!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function c(t,e,o,r,a){t.__escape;return'<form type="form">\r\n\t<div class="form-group">\r\n\t\t<div component="category-selector" class="btn-group">\r\n\t\t\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\r\n\t\t\t\t<span component="category-selector-selected">[[topic:thread_tools.select_category]]</span> <span class="caret"></span>\r\n\t\t\t</button>\r\n\t\t\t<ul class="dropdown-menu category-dropdown-menu" role="menu">\r\n\t\t\t\t'+c.blocks.categories(t,e,o,r,a)+"\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</form>"}return c.blocks={categories:function(t,a,c,e,o){var n=t.__escape;return e(c(a&&a.categories),function(t,e,o,r){return'\r\n\t\t\t\t<li role="presentation" class="category" data-cid="'+n(c(a&&a.categories&&a.categories[t]&&a.categories[t].cid))+'" data-name="'+n(c(a&&a.categories&&a.categories[t]&&a.categories[t].name))+'">\r\n\t\t\t\t\t<a role="menu-item">'+n(c(a&&a.categories&&a.categories[t]&&a.categories[t].level))+'<span component="category-markup">'+(c(a&&a.categories&&a.categories[t]&&a.categories[t].icon)?'<span class="fa-stack"><i style="color: '+n(c(a&&a.categories&&a.categories[t]&&a.categories[t].bgColor))+';" class="fa fa-circle fa-stack-2x"></i><i style="color: '+n(c(a&&a.categories&&a.categories[t]&&a.categories[t].color))+';" class="fa fa-stack-1x fa-fw '+n(c(a&&a.categories&&a.categories[t]&&a.categories[t].icon))+'"></i></span>':"")+" "+n(c(a&&a.categories&&a.categories[t]&&a.categories[t].name))+"</span></a>\r\n\t\t\t\t</li>\r\n\t\t\t\t"},function(){return""})}},c});