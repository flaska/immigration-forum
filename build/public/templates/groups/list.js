!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function u(t,r,s,e,n){var o=t.__escape;return(s(r&&r.breadcrumbs&&r.breadcrumbs.length)?'\n<ol class="breadcrumb">\n\t'+u.blocks.breadcrumbs(t,r,s,e,n)+"\n</ol>\n":"")+'\n<div widget-area="header">\n\t'+u.blocks["widgets.header"](t,r,s,e,n)+'\n</div>\n<div class="groups list">\n\t<div class="row">\n\t\t<div class="col-lg-4">\n\t\t\t'+(s(r&&r.allowGroupCreation)?'\n\t\t\t<button class="btn btn-primary" data-action="new"><i class="fa fa-plus"></i> [[groups:new_group]]</button>\n\t\t\t':"")+'\n\t\t</div>\n\t\t<div class="col-lg-8">\n\t\t\t<div class="row">\n\t\t\t\t<div class="col-xs-5 col-md-3 text-left pull-right">\n\t\t\t\t\t<select class="form-control" id="search-sort">\n\t\t\t\t\t\t<option value="alpha">[[groups:details.group_name]]</option>\n\t\t\t\t\t\t<option value="count">[[groups:details.member_count]]</option>\n\t\t\t\t\t\t<option value="date">[[groups:details.creation_date]]</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class="col-xs-7 col-md-5 text-left pull-right">\n\t\t\t\t\t<div class="input-group">\n\t\t\t\t\t\t<input type="text" class="form-control" placeholder="[[global:search]]" name="query" value="" id="search-text">\n\t\t\t\t\t\t<span id="search-button" class="input-group-addon search-button"><i class="fa fa-search"></i></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<hr />\n\n\t<div component="groups/container" class="row" id="groups-list" data-nextstart='+o(s(r&&r.nextStart))+">\n\t\t"+(s(r&&r.groups&&r.groups.length)?"\n\t\t\t"+u.blocks.groups(t,r,s,e,n)+"\n\t\t":'\n\t\t<div class="col-xs-12">\n\t\t\t<div class="alert alert-warning">\n\t\t\t[[groups:no_groups_found]]\n\t\t\t</div>\n\t\t</div>\n\t\t')+"\n\t</div>\n</div>"}return u.blocks={breadcrumbs:function(t,n,o,r,s){var u=t.__escape;return r(o(n&&n.breadcrumbs),function(t,r,s,e){return"\n\t<li"+(r===s-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(r===s-1?'class="active"':"")+">\n\t\t"+(r===s-1?"":'<a href="'+u(o(n&&n.breadcrumbs&&n.breadcrumbs[t]&&n.breadcrumbs[t].url))+'" itemprop="url">')+'\n\t\t\t<span itemprop="title">\n\t\t\t\t'+u(o(n&&n.breadcrumbs&&n.breadcrumbs[t]&&n.breadcrumbs[t].text))+"\n\t\t\t\t"+(r===s-1?"\n\t\t\t\t"+(o(n&&n["feeds:disableRSS"])?"":"\n\t\t\t\t"+(o(n&&n.rssFeedUrl)?'<a target="_blank" href="'+u(o(n&&n.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(r===s-1?"":"</a>")+"\n\t</li>\n\t"},function(){return""})},"widgets.header":function(t,n,o,r,s){t.__escape;return r(o(n&&n.widgets&&n.widgets.header),function(t,r,s,e){return"\n\t"+o(n&&n.widgets&&n.widgets.header&&n.widgets.header[t]&&n.widgets.header[t].html)+"\n\t"},function(){return""})},groups:function(t,o,u,e,r){var a=t.__escape;return e(u(o&&o.groups),function(n,t,r,s){return'\n\t<div class="col-lg-4 col-md-6 col-sm-12" component="groups/summary" data-slug="'+a(u(o&&o.groups&&o.groups[n]&&o.groups[n].slug))+'">\n\t\t<div class="panel panel-default">\n\t\t\t<a href="'+a(u(o&&o.config&&o.config.relative_path))+"/groups/"+a(u(o&&o.groups&&o.groups[n]&&o.groups[n].slug))+'" class="panel-heading list-cover" style="'+(u(o&&o.groups&&o.groups[n]&&o.groups[n]["cover:thumb:url"])?"background-image: url("+a(u(o&&o.groups&&o.groups[n]&&o.groups[n]["cover:thumb:url"]))+");":"")+'">\n\t\t\t\t<h3 class="panel-title">'+a(u(o&&o.groups&&o.groups[n]&&o.groups[n].displayName))+" <small>"+a(u(o&&o.groups&&o.groups[n]&&o.groups[n].memberCount))+'</small></h3>\n\t\t\t</a>\n\t\t\t<div class="panel-body">\n\t\t\t\t<ul class="members">\n\t\t\t\t\t'+(u(o&&o.groups&&o.groups[n]&&o.groups[n].members)?e(u(o&&o.groups&&o.groups[n]&&o.groups[n].members),function(t,r,s,e){return'\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+a(u(o&&o.config&&o.config.relative_path))+"/user/"+a(u(o&&o.groups&&o.groups[n]&&o.groups[n].members&&o.groups[n].members[t]&&o.groups[n].members[t].userslug))+'">\n\t\t\t\t\t\t\t'+(u(o&&o.groups&&o.groups[n]&&o.groups[n].members&&o.groups[n].members[t]&&o.groups[n].members[t].picture)?'\n\t\t\t\t\t\t\t<img class="avatar avatar-sm avatar-rounded" src="'+a(u(o&&o.groups&&o.groups[n]&&o.groups[n].members&&o.groups[n].members[t]&&o.groups[n].members[t].picture))+'" title="'+a(u(o&&o.groups&&o.groups[n]&&o.groups[n].members&&o.groups[n].members[t]&&o.groups[n].members[t].username))+'" />\n\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t<div class="avatar avatar-sm avatar-rounded" style="background-color: '+a(u(o&&o.groups&&o.groups[n]&&o.groups[n].members&&o.groups[n].members[t]&&o.groups[n].members[t]["icon:bgColor"]))+';" title="'+a(u(o&&o.groups&&o.groups[n]&&o.groups[n].members&&o.groups[n].members[t]&&o.groups[n].members[t].username))+'">'+a(u(o&&o.groups&&o.groups[n]&&o.groups[n].members&&o.groups[n].members[t]&&o.groups[n].members[t]["icon:text"]))+"</div>\n\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t"},function(){return""}):e(u(o&&o.members),function(t,r,s,e){return'\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href="'+a(u(o&&o.config&&o.config.relative_path))+"/user/"+a(u(o&&o.groups&&o.groups.members&&o.groups.members.userslug))+'">\n\t\t\t\t\t\t\t'+(u(o&&o.groups&&o.groups.members&&o.groups.members.picture)?'\n\t\t\t\t\t\t\t<img class="avatar avatar-sm avatar-rounded" src="'+a(u(o&&o.groups&&o.groups.members&&o.groups.members.picture))+'" title="'+a(u(o&&o.groups&&o.groups.members&&o.groups.members.username))+'" />\n\t\t\t\t\t\t\t':'\n\t\t\t\t\t\t\t<div class="avatar avatar-sm avatar-rounded" style="background-color: '+a(u(o&&o.groups&&o.groups.members&&o.groups.members["icon:bgColor"]))+';" title="'+a(u(o&&o.groups&&o.groups.members&&o.groups.members.username))+'">'+a(u(o&&o.groups&&o.groups.members&&o.groups.members["icon:text"]))+"</div>\n\t\t\t\t\t\t\t")+"\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t"},function(){return""}))+"\n\t\t\t\t\t"+(u(o&&o.groups&&o.groups[n]&&o.groups[n].truncated)?'\n\t\t\t\t\t<li class="truncated"><i class="fa fa-ellipsis-h"></i></li>\n\t\t\t\t\t':"")+"\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t"},function(){return""})}},u});