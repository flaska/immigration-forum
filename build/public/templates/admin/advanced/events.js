!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function p(t,n,a,e,i){var s=t.__escape;return'<div class="row events">\r\n\t<div class="col-lg-9">\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-heading"><i class="fa fa-calendar-o"></i> [[admin/advanced/events:events]]</div>\r\n\t\t\t<div class="panel-body" data-next="'+s(a(n&&n.next))+'">\r\n\t\t\t\t'+(a(n&&n.events&&n.events.length)?"":'\r\n\t\t\t\t<div class="alert alert-info">[[admin/advanced/events:no-events]]</div>\r\n\t\t\t\t')+'\r\n\t\t\t\t<div class="events-list">\r\n\t\t\t\t'+p.blocks.events(t,n,a,e,i)+'\r\n\t\t\t\t<div component="pagination" class="text-center pagination-container'+(a(n&&n.pagination&&n.pagination.pages&&n.pagination.pages.length)?"":" hidden")+'">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left'+(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+s(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.qs))+'" data-page="'+s(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t'+p.blocks["pagination.pages"](t,n,a,e,i)+'\n\n\t\t<li class="next pull-right'+(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+s(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.qs))+'" data-page="'+s(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first'+(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous'+(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+s(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.qs))+'" data-page="'+s(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">'+s(a(n&&n.pagination&&n.pagination.currentPage))+" / "+s(a(n&&n.pagination&&n.pagination.pageCount))+'</a>\n\t\t</li>\n\n\t\t<li class="next'+(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+s(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.qs))+'" data-page="'+s(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last'+(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?page='+s(a(n&&n.pagination&&n.pagination.pageCount))+'" data-page="'+s(a(n&&n.pagination&&n.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="col-lg-3 acp-sidebar">\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-heading"></div>\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<button class="btn btn-warning" data-action="clear">\r\n\t\t\t\t\t<i class="fa fa-eraser"></i> [[admin/advanced/events:delete-events]]\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n'}return p.blocks={events:function(t,i,s,n,a){var p=t.__escape;return n(s(i&&i.events),function(t,n,a,e){return"\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<span>#"+p(s(i&&i.events&&i.events[t]&&i.events[t].eid))+' </span><span class="label label-info">'+p(s(i&&i.events&&i.events[t]&&i.events[t].type))+'</span>\r\n\t\t\t\t\t<a href="'+p(s(i&&i.config&&i.config.relative_path))+"/user/"+p(s(i&&i.events&&i.events[t]&&i.events[t].user&&i.events[t].user.userslug))+'" target="_blank">\r\n\t\t\t\t\t\t'+(s(i&&i.events&&i.events[t]&&i.events[t].user&&i.events[t].user.picture)?'\r\n\t\t\t\t\t\t<img class="avatar avatar-sm" src="'+p(s(i&&i.events&&i.events[t]&&i.events[t].user&&i.events[t].user.picture))+'" />\r\n\t\t\t\t\t\t':'\r\n\t\t\t\t\t\t<div class="avatar avatar-sm" style="background-color: '+p(s(i&&i.events&&i.events[t]&&i.events[t].user&&i.events[t].user["icon:bgColor"]))+';">'+p(s(i&&i.events&&i.events[t]&&i.events[t].user&&i.events[t].user["icon:text"]))+"</div>\r\n\t\t\t\t\t\t")+'\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<a href="'+p(s(i&&i.config&&i.config.relative_path))+"/user/"+p(s(i&&i.events&&i.events[t]&&i.events[t].user&&i.events[t].user.userslug))+'" target="_blank">'+p(s(i&&i.events&&i.events[t]&&i.events[t].user&&i.events[t].user.username))+"</a> (uid "+p(s(i&&i.events&&i.events[t]&&i.events[t].uid))+") (IP "+p(s(i&&i.events&&i.events[t]&&i.events[t].ip))+')\r\n\t\t\t\t\t<span class="pull-right">'+p(s(i&&i.events&&i.events[t]&&i.events[t].timestampISO))+"</span>\r\n\t\t\t\t\t<br /><br />\r\n\t\t\t\t\t<pre>"+p(s(i&&i.events&&i.events[t]&&i.events[t].jsonString))+"</pre>\r\n\t\t\t\t</div>\r\n\t\t\t\t"},function(){return""})},"pagination.pages":function(t,i,s,n,a){var p=t.__escape;return n(s(i&&i.pagination&&i.pagination.pages),function(t,n,a,e){return"\n\t\t\t"+(s(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].separator)?'\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t':'\n\t\t\t<li class="page'+(s(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].active)?" active":"")+'" >\n\t\t\t\t<a href="?'+p(s(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].qs))+'" data-page="'+p(s(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].page))+'">'+p(s(i&&i.pagination&&i.pagination.pages&&i.pagination.pages[t]&&i.pagination.pages[t].page))+"</a>\n\t\t\t</li>\n\t\t\t")+"\n\t\t"},function(){return""})}},p});