!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function e(t,a,o,s,i){var n=t.__escape;return(o(a&&a.breadcrumbs&&a.breadcrumbs.length)?'\n<ol class="breadcrumb">\n\t'+e.blocks.breadcrumbs(t,a,o,s,i)+"\n</ol>\n":"")+'\n<div widget-area="header">\n\t'+e.blocks["widgets.header"](t,a,o,s,i)+'\n</div>\n<div class="unread">\n\t<div class="btn-toolbar">\n\t\t<div class="pull-left">\n\t\t\t'+(o(a&&a.loggedIn)?'\n\t\t\t<button component="category/post" id="new_topic" class="btn btn-primary">[[category:new_topic_button]]</button>\n\t\t\t':'\n\t\t\t<a component="category/post/guest" href="'+n(o(a&&a.config&&a.config.relative_path))+'/login" class="btn btn-primary">[[category:guest-login-post]]</a>\n\t\t\t')+'\n\t\t</div>\n\t\t<div class="markread btn-group pull-right category-dropdown-container'+(o(a&&a.topics&&a.topics.length)?"":" hidden")+'">\n\t\t\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n\t\t\t\t[[unread:mark_as_read]] <span class="caret"></span>\n\t\t\t</button>\n\t\t\t<ul class="dropdown-menu category-dropdown-menu" role="menu">\n\n\t\t\t\t<li role="presentation">\n\t\t\t\t\t<a id="markSelectedRead" role="menuitem" tabindex="-1" href="#">[[unread:selected]]</a>\n\t\t\t\t</li>\n\n\t\t\t\t<li role="presentation">\n\t\t\t\t\t<a id="markAllRead" role="menuitem" tabindex="-1" href="#">[[unread:all]]</a>\n\t\t\t\t</li>\n\t\t\t\t<li class="divider"></li>\n\t\t\t\t'+e.blocks.categories(t,a,o,s,i)+'\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div component="category/dropdown" class="btn-group pull-right category-dropdown-container">\n\t\t\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n\t\t\t\t'+(o(a&&a.selectedCategory)?(o(a&&a.selectedCategory&&a.selectedCategory.icon)?'<span class="fa-stack"><i style="color: '+n(o(a&&a.selectedCategory&&a.selectedCategory.bgColor))+';" class="fa fa-circle fa-stack-2x"></i><i class="fa fa-fw fa-stack-1x '+n(o(a&&a.selectedCategory&&a.selectedCategory.icon))+'" style="color: '+n(o(a&&a.selectedCategory&&a.selectedCategory.color))+';"></i></span>':"")+" "+n(o(a&&a.selectedCategory&&a.selectedCategory.name)):"\n\t\t\t\t[[unread:all_categories]]")+' <span class="caret"></span>\n\t\t\t</button>\n\t\t\t<ul component="category/list" class="dropdown-menu category-dropdown-menu" role="menu">\n\t\t\t\t<li role="presentation" class="category">\n\t\t\t\t\t<a role="menu-item" href="'+n(o(a&&a.config&&a.config.relative_path))+"/"+n(o(a&&a.allCategoriesUrl))+'"><i class="fa fa-fw '+(o(a&&a.selectedCategory)?"":"fa-check")+'"></i> [[unread:all_categories]]</a>\n\t\t\t\t</li>\n\t\t\t\t'+s(o(a&&a.categories),function(t,s,i,e){return'\n\t\t\t\t<li role="presentation" class="category" data-cid="'+n(o(a&&a.categories&&a.categories[t]&&a.categories[t].cid))+'" data-parent-cid="'+n(o(a&&a.categories&&a.categories[t]&&a.categories[t].parentCid))+'">\n\t\t\t\t\t<a role="menu-item" href="#"><i component="category/select/icon" class="fa fa-fw '+(o(a&&a.categories&&a.categories[t]&&a.categories[t].selected)?"fa-check":"")+'"></i>'+n(o(a&&a.categories&&a.categories[t]&&a.categories[t].level))+(o(a&&a.categories&&a.categories[t]&&a.categories[t].icon)?'<span class="fa-stack"><i style="color: '+n(o(a&&a.categories&&a.categories[t]&&a.categories[t].bgColor))+';" class="fa fa-circle fa-stack-2x"></i><i class="fa fa-fw fa-stack-1x '+n(o(a&&a.categories&&a.categories[t]&&a.categories[t].icon))+'" style="color: '+n(o(a&&a.categories&&a.categories[t]&&a.categories[t].color))+';"></i></span>':"")+" "+n(o(a&&a.categories&&a.categories[t]&&a.categories[t].name))+"</a>\n\t\t\t\t</li>\n\t\t\t\t"},function(){return""})+'\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class="btn-group pull-right">\n\t\t\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\n\t\t\t'+n(o(a&&a.selectedFilter&&a.selectedFilter.name))+' <span class="caret"></span>\n\t\t\t</button>\n\t\t\t<ul class="dropdown-menu" role="menu">\n\t\t\t\t'+e.blocks.filters(t,a,o,s,i)+'\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<hr class="hidden-xs"/>\n\n\t<div class="category">\n\t\t<div id="category-no-topics" class="alert alert-warning '+(o(a&&a.topics&&a.topics.length)?"hidden":"")+'">[[unread:no_unread_topics]]</div>\n\n\t\t<a href="'+n(o(a&&a.config&&a.config.relative_path))+"/"+n(o(a&&a.selectedFilter&&a.selectedFilter.url))+n(o(a&&a.querystring))+'">\n\t\t\t<div class="alert alert-warning hide" id="new-topics-alert"></div>\n\t\t</a>\n\n\t\t<ul component="category" class="topic-list" itemscope itemtype="http://www.schema.org/ItemList" data-nextstart="'+n(o(a&&a.nextStart))+'" data-set="'+n(o(a&&a.set))+'">\n\t<meta itemprop="itemListOrder" content="descending">\n\t'+e.blocks.topics(t,a,o,s,i)+'\n</ul>\n\n\t\t<button id="load-more-btn" class="btn btn-primary hide">[[unread:load_more]]</button>\n\t\t'+(o(a&&a.config&&a.config.usePagination)?'\n\t\t\t<div component="pagination" class="text-center pagination-container'+(o(a&&a.pagination&&a.pagination.pages&&a.pagination.pages.length)?"":" hidden")+'">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left'+(o(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+n(o(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+n(o(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t'+e.blocks["pagination.pages"](t,a,o,s,i)+'\n\n\t\t<li class="next pull-right'+(o(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+n(o(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+n(o(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first'+(o(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous'+(o(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+n(o(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.qs))+'" data-page="'+n(o(a&&a.pagination&&a.pagination.prev&&a.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">'+n(o(a&&a.pagination&&a.pagination.currentPage))+" / "+n(o(a&&a.pagination&&a.pagination.pageCount))+'</a>\n\t\t</li>\n\n\t\t<li class="next'+(o(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+n(o(a&&a.pagination&&a.pagination.next&&a.pagination.next.qs))+'" data-page="'+n(o(a&&a.pagination&&a.pagination.next&&a.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last'+(o(a&&a.pagination&&a.pagination.next&&a.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?page='+n(o(a&&a.pagination&&a.pagination.pageCount))+'" data-page="'+n(o(a&&a.pagination&&a.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n\t\t':"")+"\n\t</div>\n</div>\n"}return e.blocks={breadcrumbs:function(t,a,o,s,i){var n=t.__escape;return s(o(a&&a.breadcrumbs),function(t,s,i,e){return"\n\t<li"+(s===i-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(s===i-1?'class="active"':"")+">\n\t\t"+(s===i-1?"":'<a href="'+n(o(a&&a.breadcrumbs&&a.breadcrumbs[t]&&a.breadcrumbs[t].url))+'" itemprop="url">')+'\n\t\t\t<span itemprop="title">\n\t\t\t\t'+n(o(a&&a.breadcrumbs&&a.breadcrumbs[t]&&a.breadcrumbs[t].text))+"\n\t\t\t\t"+(s===i-1?"\n\t\t\t\t"+(o(a&&a["feeds:disableRSS"])?"":"\n\t\t\t\t"+(o(a&&a.rssFeedUrl)?'<a target="_blank" href="'+n(o(a&&a.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(s===i-1?"":"</a>")+"\n\t</li>\n\t"},function(){return""})},"widgets.header":function(t,a,o,s,i){t.__escape;return s(o(a&&a.widgets&&a.widgets.header),function(t,s,i,e){return"\n\t"+o(a&&a.widgets&&a.widgets.header&&a.widgets.header[t]&&a.widgets.header[t].html)+"\n\t"},function(){return""})},categories:function(t,a,o,s,i){var n=t.__escape;return s(o(a&&a.categories),function(t,s,i,e){return'\n\t\t\t\t<li role="presentation" class="category" data-cid="'+n(o(a&&a.categories&&a.categories[t]&&a.categories[t].cid))+'">\n\t\t\t\t\t<a role="menu-item" href="#">'+n(o(a&&a.categories&&a.categories[t]&&a.categories[t].level))+(o(a&&a.categories&&a.categories[t]&&a.categories[t].icon)?'<span class="fa-stack"><i style="color: '+n(o(a&&a.categories&&a.categories[t]&&a.categories[t].bgColor))+';" class="fa fa-circle fa-stack-2x"></i><i class="fa fa-fw fa-stack-1x '+n(o(a&&a.categories&&a.categories[t]&&a.categories[t].icon))+'" style="color: '+n(o(a&&a.categories&&a.categories[t]&&a.categories[t].color))+';"></i></span>':"")+" "+n(o(a&&a.categories&&a.categories[t]&&a.categories[t].name))+"</a>\n\t\t\t\t</li>\n\t\t\t\t"},function(){return""})},filters:function(t,a,o,s,i){var n=t.__escape;return s(o(a&&a.filters),function(t,s,i,e){return'\n\t\t\t\t<li role="presentation" class="category">\n\t\t\t\t\t<a role="menu-item" href="'+n(o(a&&a.config&&a.config.relative_path))+"/"+n(o(a&&a.filters&&a.filters[t]&&a.filters[t].url))+'"><i class="fa fa-fw '+(o(a&&a.filters&&a.filters[t]&&a.filters[t].selected)?"fa-check":"")+'"></i>'+n(o(a&&a.filters&&a.filters[t]&&a.filters[t].name))+"</a>\n\t\t\t\t</li>\n\t\t\t\t"},function(){return""})},topics:function(e,o,n,c,p){var r=e.__escape;return c(n(o&&o.topics),function(a,t,s,i){return'\n\t<li component="category/topic" class="row clearfix category-item '+r(p(o,e,"generateTopicClass",[n(i)]))+'" data-tid="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].tid))+'" data-index="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].index))+'" data-cid="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].cid))+'" itemprop="itemListElement">\n\t\t<meta itemprop="name" content="'+r(p(o,e,"stripTags",[n(o&&o.title)]))+'">\n\n\t\t<div class="col-md-6 col-sm-9 col-xs-10 content">\n\t\t\t<div class="avatar pull-left" title="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].user&&o.topics[a].user.username))+'">\n\t\t\t\t'+(n(o&&o.showSelect)?'\n\t\t\t\t<div class="select" component="topic/select">\n\t\t\t\t\t'+(n(o&&o.topics&&o.topics[a]&&o.topics[a].thumb)?'\n\t\t\t\t\t<img src="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].thumb))+'" class="user-img" />\n\t\t\t\t\t':"\n\t\t\t\t\t"+(n(o&&o.topics&&o.topics[a]&&o.topics[a].user&&o.topics[a].user.picture)?'\n\t\t\t\t\t<img component="user/picture" data-uid="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].user&&o.topics[a].user.uid))+'" src="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].user&&o.topics[a].user.picture))+'" class="user-img" />\n\t\t\t\t\t':'\n\t\t\t\t\t<div class="user-icon" style="background-color: '+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].user&&o.topics[a].user["icon:bgColor"]))+';">'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].user&&o.topics[a].user["icon:text"]))+"</div>\n\t\t\t\t\t")+"\n\t\t\t\t\t")+'\n\t\t\t\t\t<i class="fa fa-check"></i>\n\t\t\t\t</div>\n\t\t\t\t':"")+"\n\n\t\t\t\t"+(n(o&&o.showSelect)?"":'\n\t\t\t\t<a href="'+(n(o&&o.topics&&o.topics[a]&&o.topics[a].user&&o.topics[a].user.userslug)?r(n(o&&o.config&&o.config.relative_path))+"/user/"+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].user&&o.topics[a].user.userslug)):"#")+'" class="pull-left">\n\t\t\t\t\t'+(n(o&&o.topics&&o.topics[a]&&o.topics[a].thumb)?'\n\t\t\t\t\t<img src="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].thumb))+'" class="user-img" />\n\t\t\t\t\t':"\n\t\t\t\t\t"+(n(o&&o.topics&&o.topics[a]&&o.topics[a].user&&o.topics[a].user.picture)?'\n\t\t\t\t\t<img component="user/picture" data-uid="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].user&&o.topics[a].user.uid))+'" src="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].user&&o.topics[a].user.picture))+'" class="user-img" />\n\t\t\t\t\t':'\n\t\t\t\t\t<div class="user-icon" style="background-color: '+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].user&&o.topics[a].user["icon:bgColor"]))+';">'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].user&&o.topics[a].user["icon:text"]))+"</div>\n\t\t\t\t\t")+"\n\t\t\t\t\t")+"\n\t\t\t\t</a>\n\t\t\t\t")+'\n\n\t\t\t</div>\n\n\t\t\t<h2 component="topic/header" class="title">\n\t\t\t\t<i component="topic/pinned" class="fa fa-thumb-tack '+(n(o&&o.topics&&o.topics[a]&&o.topics[a].pinned)?"":"hide")+'" title="[[topic:pinned]]"></i>\n\t\t\t\t<i component="topic/locked" class="fa fa-lock '+(n(o&&o.topics&&o.topics[a]&&o.topics[a].locked)?"":"hide")+'" title="[[topic:locked]]"></i>\n\t\t\t\t<i component="topic/moved" class="fa fa-arrow-circle-right '+(n(o&&o.topics&&o.topics[a]&&o.topics[a].oldCid)?"":"hide")+'" title="[[topic:moved]]"></i>\n\t\t\t\t'+(n(o&&o.topics&&o.topics[a]&&o.topics[a].icons)?c(n(o&&o.topics&&o.topics[a]&&o.topics[a].icons),function(t,s,i,e){return r(n(e))},function(){return""}):c(n(o&&o.icons),function(t,s,i,e){return r(n(e))},function(){return""}))+"\n\n\t\t\t\t"+(n(o&&o.topics&&o.topics[a]&&o.topics[a].noAnchor)?"\n\t\t\t\t<span>"+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].title))+"</span><br />\n\t\t\t\t":'\n\t\t\t\t<a href="'+r(n(o&&o.config&&o.config.relative_path))+"/topic/"+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].slug))+(n(o&&o.topics&&o.topics[a]&&o.topics[a].bookmark)?"/"+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].bookmark)):"")+'" itemprop="url">'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].title))+"</a><br />\n\t\t\t\t")+"\n\n\t\t\t\t"+(n(o&&o.template&&o.template.category)?"":'\n\t\t\t\t<small>\n\t\t\t\t\t<a href="'+r(n(o&&o.config&&o.config.relative_path))+"/category/"+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].category&&o.topics[a].category.slug))+'"><span class="fa-stack fa-lg"><i style="color:'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].category&&o.topics[a].category.bgColor))+';" class="fa fa-circle fa-stack-2x"></i><i style="color:'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].category&&o.topics[a].category.color))+';" class="fa '+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].category&&o.topics[a].category.icon))+' fa-stack-1x"></i></span> '+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].category&&o.topics[a].category.name))+"</a> &bull;\n\t\t\t\t</small>\n\t\t\t\t")+"\n\n\t\t\t\t"+(n(o&&o.topics&&o.topics[a]&&o.topics[a].tags&&o.topics[a].tags.length)?'\n\t\t\t\t<span class="tag-list hidden-xs">\n\t\t\t\t\t'+(n(o&&o.topics&&o.topics[a]&&o.topics[a].tags)?c(n(o&&o.topics&&o.topics[a]&&o.topics[a].tags),function(t,s,i,e){return'\n\t\t\t\t\t<a href="'+r(n(o&&o.config&&o.config.relative_path))+"/tags/"+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].tags&&o.topics[a].tags[t]&&o.topics[a].tags[t].value))+'"><span class="tag" style="'+(n(o&&o.topics&&o.topics[a]&&o.topics[a].tags&&o.topics[a].tags[t]&&o.topics[a].tags[t].color)?"color: "+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].tags&&o.topics[a].tags[t]&&o.topics[a].tags[t].color))+";":"")+(n(o&&o.topics&&o.topics[a]&&o.topics[a].tags&&o.topics[a].tags[t]&&o.topics[a].tags[t].bgColor)?"background-color: "+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].tags&&o.topics[a].tags[t]&&o.topics[a].tags[t].bgColor))+";":"")+'">'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].tags&&o.topics[a].tags[t]&&o.topics[a].tags[t].valueEscaped))+"</span></a>\n\t\t\t\t\t"},function(){return""}):c(n(o&&o.tags),function(t,s,i,e){return'\n\t\t\t\t\t<a href="'+r(n(o&&o.config&&o.config.relative_path))+"/tags/"+r(n(o&&o.topics&&o.topics.tags&&o.topics.tags.value))+'"><span class="tag" style="'+(n(o&&o.topics&&o.topics.tags&&o.topics.tags.color)?"color: "+r(n(o&&o.topics&&o.topics.tags&&o.topics.tags.color))+";":"")+(n(o&&o.topics&&o.topics.tags&&o.topics.tags.bgColor)?"background-color: "+r(n(o&&o.topics&&o.topics.tags&&o.topics.tags.bgColor))+";":"")+'">'+r(n(o&&o.topics&&o.topics.tags&&o.topics.tags.valueEscaped))+"</span></a>\n\t\t\t\t\t"},function(){return""}))+"\n\t\t\t\t\t<small>&bull;</small>\n\t\t\t\t</span>\n\t\t\t\t":"")+'\n\n\t\t\t\t<small class="hidden-xs"><span class="timeago" title="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].timestampISO))+'"></span> &bull; <a href="'+(n(o&&o.topics&&o.topics[a]&&o.topics[a].user&&o.topics[a].user.userslug)?r(n(o&&o.config&&o.config.relative_path))+"/user/"+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].user&&o.topics[a].user.userslug)):"#")+'">'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].user&&o.topics[a].user.username))+'</a></small>\n\t\t\t\t<small class="visible-xs-inline">\n\t\t\t\t\t'+(n(o&&o.topics&&o.topics[a]&&o.topics[a].teaser&&o.topics[a].teaser.timestamp)?'\n\t\t\t\t\t<span class="timeago" title="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].teaser&&o.topics[a].teaser.timestampISO))+'"></span>\n\t\t\t\t\t':'\n\t\t\t\t\t<span class="timeago" title="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].timestampISO))+'"></span>\n\t\t\t\t\t')+'\n\t\t\t\t</small>\n\t\t\t</h2>\n\t\t</div>\n\n\t\t<div class="mobile-stat col-xs-2 visible-xs text-right">\n\t\t\t<span class="human-readable-number">'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].postcount))+'</span> <a href="'+r(n(o&&o.config&&o.config.relative_path))+"/topic/"+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].slug))+"/"+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].teaser&&o.topics[a].teaser.index))+'"><i class="fa fa-arrow-circle-right"></i></a>\n\t\t</div>\n\n\t\t<div class="col-md-1 hidden-sm hidden-xs stats stats-votes">\n\t\t\t'+(n(o&&o["reputation:disabled"])?"":'\n\t\t\t<span class="human-readable-number" title="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].votes))+'">'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].votes))+"</span><br />\n\t\t\t<small>[[global:votes]]</small>\n\t\t\t")+'\n\t\t</div>\n\n\t\t<div class="col-md-1 hidden-sm hidden-xs stats stats-postcount">\n\t\t\t<span class="human-readable-number" title="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].postcount))+'">'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].postcount))+'</span><br />\n\t\t\t<small>[[global:posts]]</small>\n\t\t</div>\n\n\t\t<div class="col-md-1 hidden-sm hidden-xs stats stats-viewcount">\n\t\t\t<span class="human-readable-number" title="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].viewcount))+'">'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].viewcount))+'</span><br />\n\t\t\t<small>[[global:views]]</small>\n\t\t</div>\n\n\t\t<div class="col-md-3 col-sm-3 teaser hidden-xs" component="topic/teaser">\n\t\t\t<div class="card" style="border-color: '+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].category&&o.topics[a].category.bgColor))+'">\n\t\t\t\t'+(n(o&&o.topics&&o.topics[a]&&o.topics[a].unreplied)?"\n\t\t\t\t<p>\n\t\t\t\t\t[[category:no_replies]]\n\t\t\t\t</p>\n\t\t\t\t":"\n\t\t\t\t"+(n(o&&o.topics&&o.topics[a]&&o.topics[a].teaser&&o.topics[a].teaser.pid)?'\n\t\t\t\t<p>\n\t\t\t\t\t<a href="'+r(n(o&&o.config&&o.config.relative_path))+"/user/"+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].teaser&&o.topics[a].teaser.user&&o.topics[a].teaser.user.userslug))+'">\n\t\t\t\t\t\t'+(n(o&&o.topics&&o.topics[a]&&o.topics[a].teaser&&o.topics[a].teaser.user&&o.topics[a].teaser.user.picture)?'\n\t\t\t\t\t\t<img title="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].teaser&&o.topics[a].teaser.user&&o.topics[a].teaser.user.username))+'" class="user-img" src="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].teaser&&o.topics[a].teaser.user&&o.topics[a].teaser.user.picture))+'" />\n\t\t\t\t\t\t':'\n\t\t\t\t\t\t<span title="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].teaser&&o.topics[a].teaser.user&&o.topics[a].teaser.user.username))+'" class="user-icon user-img" style="background-color: '+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].teaser&&o.topics[a].teaser.user&&o.topics[a].teaser.user["icon:bgColor"]))+';">'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].teaser&&o.topics[a].teaser.user&&o.topics[a].teaser.user["icon:text"]))+"</span>\n\t\t\t\t\t\t")+'\n\t\t\t\t\t</a>\n\t\t\t\t\t<a class="permalink" href="'+r(n(o&&o.config&&o.config.relative_path))+"/topic/"+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].slug))+"/"+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].teaser&&o.topics[a].teaser.index))+'">\n\t\t\t\t\t\t<span class="timeago" title="'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].teaser&&o.topics[a].teaser.timestampISO))+'"></span>\n\t\t\t\t\t</a>\n\t\t\t\t</p>\n\t\t\t\t<div class="post-content">\n\t\t\t\t\t'+r(n(o&&o.topics&&o.topics[a]&&o.topics[a].teaser&&o.topics[a].teaser.content))+"\n\t\t\t\t</div>\n\t\t\t\t":"")+"\n\t\t\t\t")+"\n\t\t\t</div>\n\t\t</div>\n\t</li>\n\t"},function(){return""})},"pagination.pages":function(t,a,o,s,i){var n=t.__escape;return s(o(a&&a.pagination&&a.pagination.pages),function(t,s,i,e){return"\n\t\t\t"+(o(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].separator)?'\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t':'\n\t\t\t<li class="page'+(o(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].active)?" active":"")+'" >\n\t\t\t\t<a href="?'+n(o(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].qs))+'" data-page="'+n(o(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].page))+'">'+n(o(a&&a.pagination&&a.pagination.pages&&a.pagination.pages[t]&&a.pagination.pages[t].page))+"</a>\n\t\t\t</li>\n\t\t\t")+"\n\t\t"},function(){return""})}},e});