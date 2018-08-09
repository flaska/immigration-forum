!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function l(t,n,a,i,e){var s=t.__escape;return'<div class="account">\n\t'+(a(n&&n.breadcrumbs&&n.breadcrumbs.length)?'\n<ol class="breadcrumb">\n\t'+l.blocks.breadcrumbs(t,n,a,i,e)+"\n</ol>\n":"")+'\n\n<div class="cover" component="account/cover" style="background-image: url('+s(a(n&&n["cover:url"]))+"); background-position: "+s(a(n&&n["cover:position"]))+';">\n\t<div class="avatar-wrapper" data-uid="'+s(a(n&&n.uid))+'">\n\t\t'+(a(n&&n.picture)?'\n\t\t<img src="'+s(a(n&&n.picture))+'" class="avatar avatar-xl avatar-rounded" />\n\t\t':'\n\t\t<div class="avatar avatar-xl avatar-rounded" style="background-color: '+s(a(n&&n["icon:bgColor"]))+';" title="'+s(a(n&&n.username))+'">'+s(a(n&&n["icon:text"]))+"</div>\n\t\t")+'\n\t\t<i component="user/status" class="fa fa-circle status '+s(a(n&&n.status))+'" title="[[global:'+s(a(n&&n.status))+']]"></i>\n\n\t\t'+(a(n&&n.loggedIn)?"\n\t\t"+(a(n&&n.isSelf)?"":'\n\t\t<button class="btn-morph fab '+(a(n&&n.isFollowing)?"heart":"plus")+(a(n&&n.banned)?" hide":"")+'" title="'+(a(n&&n.isFollowing)?"[[global:unfollow]]":"[[global:follow]]")+'">\n\t\t\t<span>\n\t\t\t\t<span class="s1"></span>\n\t\t\t\t<span class="s2"></span>\n\t\t\t\t<span class="s3"></span>\n\t\t\t</span>\n\t\t</button>\n\t\t')+"\n\t\t":"")+'\n\t</div>\n\n\t<div class="container">\n\t\t<div class="btn-group account-fab bottom-sheet">\n\t<button type="button" class="fab dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n\t\t<i class="fa fa-ellipsis-v"></i>\n\t</button>\n\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t'+(a(n&&n.isSelf)?"":"\n\t\t"+(a(n&&n.banned)?"":"\n\t\t"+(a(n&&n.config&&n.config.disableChat)?"":'\n\t\t<li class="'+(a(n&&n.hasPrivateChat)?"":"hidden")+'">\n\t\t\t<a component="account/chat" href="#">[[user:chat_with, '+s(a(n&&n.username))+']]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="account/new-chat" href="#">[[user:new_chat_with, '+s(a(n&&n.username))+"]]</a>\n\t\t</li>\n\t\t")+'\n\t\t<li>\n\t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="account/block" href="#">'+(a(n&&n.isBlocked)?"[[user:unblock_user]]":"[[user:block_user]]")+'</a>\n\t\t</li>\n\t\t<li class="divider"></li>\n\t\t')+"\n\t\t")+'\n\t\t<li>\n\t\t\t<a href="'+s(a(n&&n.config&&n.config.relative_path))+"/user/"+s(a(n&&n.userslug))+'" class="inline-block" id="profile">[[user:profile]]</a>\n\t\t</li>\n\t\t'+(a(n&&n.showHidden)?'\n\t\t<li><a href="'+s(a(n&&n.config&&n.config.relative_path))+"/user/"+s(a(n&&n.userslug))+'/edit">[[user:edit]]</a></li>\n\t\t<li><a href="'+s(a(n&&n.config&&n.config.relative_path))+"/user/"+s(a(n&&n.userslug))+'/settings">[[user:settings]]</a></li>\n\t\t':"")+"\n\n\t\t"+(a(n&&n.isSelf)?"":"\n\t\t"+(a(n&&n.canBan)?'\n\t\t<li class="'+(a(n&&n.banned)?"hide":"")+'">\n\t\t\t<a component="account/ban" href="#">[[user:ban_account]]</a>\n\t\t</li>\n\t\t<li class="'+(a(n&&n.banned)?"":"hide")+'">\n\t\t\t<a component="account/unban" href="#">[[user:unban_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t"+(a(n&&n.isAdmin)?'\n\t\t<li>\n\t\t\t<a component="account/delete" href="#" class="">[[user:delete_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t")+'\n\n\t\t<li class="divider"></li>\n\t\t<li><a href="'+s(a(n&&n.config&&n.config.relative_path))+"/user/"+s(a(n&&n.userslug))+'/following">[[user:following]]</a></li>\n\t\t<li><a href="'+s(a(n&&n.config&&n.config.relative_path))+"/user/"+s(a(n&&n.userslug))+'/followers">[[user:followers]]</a></li>\n\t\t'+(a(n&&n.showHidden)?'\n\t\t<li><a href="'+s(a(n&&n.config&&n.config.relative_path))+"/user/"+s(a(n&&n.userslug))+'/blocks">[[user:blocks]]</a></li>\n\t\t':"")+'\n\t\t<li class="divider"></li>\n\t\t<li><a href="'+s(a(n&&n.config&&n.config.relative_path))+"/user/"+s(a(n&&n.userslug))+'/topics">[[global:topics]]</a></li>\n\t\t<li><a href="'+s(a(n&&n.config&&n.config.relative_path))+"/user/"+s(a(n&&n.userslug))+'/posts">[[global:posts]]</a></li>\n\t\t'+(a(n&&n["reputation:disabled"])?"":'\n\t\t<li><a href="'+s(a(n&&n.config&&n.config.relative_path))+"/user/"+s(a(n&&n.userslug))+'/best">[[global:best]]</a></li>\n\t\t')+'\n\t\t<li><a href="'+s(a(n&&n.config&&n.config.relative_path))+"/user/"+s(a(n&&n.userslug))+'/groups">[[global:header.groups]]</a></li>\n\n\t\t'+(a(n&&n.showHidden)?'\n\t\t<li><a href="'+s(a(n&&n.config&&n.config.relative_path))+"/user/"+s(a(n&&n.userslug))+'/bookmarks">[[user:bookmarks]]</a></li>\n\t\t<li><a href="'+s(a(n&&n.config&&n.config.relative_path))+"/user/"+s(a(n&&n.userslug))+'/watched">[[user:watched]]</a></li>\n\t\t<li><a href="'+s(a(n&&n.config&&n.config.relative_path))+"/user/"+s(a(n&&n.userslug))+'/ignored">[[user:ignored]]</a></li>\n\t\t'+(a(n&&n["reputation:disabled"])?"":'\n\t\t<li><a href="'+s(a(n&&n.config&&n.config.relative_path))+"/user/"+s(a(n&&n.userslug))+'/upvoted">[[global:upvoted]]</a></li>\n\t\t'+(a(n&&n["downvote:disabled"])?"":'\n\t\t<li><a href="'+s(a(n&&n.config&&n.config.relative_path))+"/user/"+s(a(n&&n.userslug))+'/downvoted">[[global:downvoted]]</a></li>\n\t\t')+"\n\t\t")+'\n\t\t<li><a href="'+s(a(n&&n.config&&n.config.relative_path))+"/user/"+s(a(n&&n.userslug))+'/uploads">[[global:uploads]]</a></li>\n\t\t':"")+"\n\n\t\t"+l.blocks.profile_links(t,n,a,i,e)+"\n\t</ul>\n</div>\n\n\n\t\t"+(a(n&&n.allowCoverPicture)?'\n\t\t<div class="controls">\n\t\t\t<span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>\n\t\t\t<span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>\n\t\t\t<span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>\n\t\t</div>\n\t\t<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>\n\t\t<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>\n\t\t':"")+'\n\t</div>\n</div>\n\n\t<div class="row">\n\t\t<h1>'+s(a(n&&n.title))+"</h1>\n\n        "+(a(n&&n.privateUploads)?'\n        <div class="alert alert-info text-center">[[uploads:private-uploads-info]]</div>\n        ':'\n        <div class="alert alert-info text-center">[[uploads:public-uploads-info]]</div>\n        ')+"\n\n\t\t"+(a(n&&n.uploads&&n.uploads.length)?"":'\n\t\t\t<div class="alert alert-warning text-center">[[uploads:no-uploads-found]]</div>\n\t\t')+'\n\n\t\t<div class="col-xs-12">\n            <table class="table table-striped">\n                <thead>\n                    <tr>\n                        <th></th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    '+l.blocks.uploads(t,n,a,i,e)+'\n                </tbody>\n            </table>\n\n\t\t\t<div component="pagination" class="text-center pagination-container'+(a(n&&n.pagination&&n.pagination.pages&&n.pagination.pages.length)?"":" hidden")+'">\n\t<ul class="pagination hidden-xs">\n\t\t<li class="previous pull-left'+(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+s(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.qs))+'" data-page="'+s(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t'+l.blocks["pagination.pages"](t,n,a,i,e)+'\n\n\t\t<li class="next pull-right'+(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+s(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.qs))+'" data-page="'+s(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\t</ul>\n\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\n\t\t<li class="first'+(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\n\t\t</li>\n\n\t\t<li class="previous'+(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":" disabled")+'">\n\t\t\t<a href="?'+s(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.qs))+'" data-page="'+s(a(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\n\t\t</li>\n\n\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t<a href="#">'+s(a(n&&n.pagination&&n.pagination.currentPage))+" / "+s(a(n&&n.pagination&&n.pagination.pageCount))+'</a>\n\t\t</li>\n\n\t\t<li class="next'+(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?'+s(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.qs))+'" data-page="'+s(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\n\t\t</li>\n\n\t\t<li class="last'+(a(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":" disabled")+'">\n\t\t\t<a href="?page='+s(a(n&&n.pagination&&n.pagination.pageCount))+'" data-page="'+s(a(n&&n.pagination&&n.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\n\t\t</li>\n\t</ul>\n</div>\n\t\t</div>\n\t</div>\n</div>'}return l.blocks={breadcrumbs:function(t,e,s,n,a){var l=t.__escape;return n(s(e&&e.breadcrumbs),function(t,n,a,i){return"\n\t<li"+(n===a-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(n===a-1?'class="active"':"")+">\n\t\t"+(n===a-1?"":'<a href="'+l(s(e&&e.breadcrumbs&&e.breadcrumbs[t]&&e.breadcrumbs[t].url))+'" itemprop="url">')+'\n\t\t\t<span itemprop="title">\n\t\t\t\t'+l(s(e&&e.breadcrumbs&&e.breadcrumbs[t]&&e.breadcrumbs[t].text))+"\n\t\t\t\t"+(n===a-1?"\n\t\t\t\t"+(s(e&&e["feeds:disableRSS"])?"":"\n\t\t\t\t"+(s(e&&e.rssFeedUrl)?'<a target="_blank" href="'+l(s(e&&e.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(n===a-1?"":"</a>")+"\n\t</li>\n\t"},function(){return""})},profile_links:function(t,e,s,n,a){var l=t.__escape;return n(s(e&&e.profile_links),function(t,n,a,i){return"\n\t\t"+(0===n?'\n\t\t<li class="divider"></li>\n\t\t':"")+'\n\t\t<li id="'+l(s(e&&e.profile_links&&e.profile_links[t]&&e.profile_links[t].id))+'" class="plugin-link '+(s(e&&e.profile_links&&e.profile_links[t]&&e.profile_links[t].public)?"public":"private")+'"><a href="'+l(s(e&&e.config&&e.config.relative_path))+"/user/"+l(s(e&&e.userslug))+"/"+l(s(e&&e.profile_links&&e.profile_links[t]&&e.profile_links[t].route))+'">'+(s(e&&e.profile_links&&e.profile_links[t]&&e.profile_links[t].icon)?'<i class="fa fa-fw '+l(s(e&&e.profile_links&&e.profile_links[t]&&e.profile_links[t].icon))+'"></i> ':"")+l(s(e&&e.profile_links&&e.profile_links[t]&&e.profile_links[t].name))+"</a></li>\n\t\t"},function(){return""})},uploads:function(t,e,s,n,a){var l=t.__escape;return n(s(e&&e.uploads),function(t,n,a,i){return'\n                    <tr data-name="'+l(s(e&&e.uploads&&e.uploads[t]&&e.uploads[t].name))+'">\n                        <td>\n                            <a href="'+l(s(e&&e.config&&e.config.relative_path))+l(s(e&&e.uploads&&e.uploads[t]&&e.uploads[t].url))+'">'+l(s(e&&e.uploads&&e.uploads[t]&&e.uploads[t].url))+'</a>\n                        </td>\n                        <td>\n                            <div class="btn-group ">\n                                <button class="btn btn-danger btn-xs" data-action="delete"><i class="fa fa-trash"></i></button>\n                            </div>\n                        </td>\n                    </tr>\n                    '},function(){return""})},"pagination.pages":function(t,e,s,n,a){var l=t.__escape;return n(s(e&&e.pagination&&e.pagination.pages),function(t,n,a,i){return"\n\t\t\t"+(s(e&&e.pagination&&e.pagination.pages&&e.pagination.pages[t]&&e.pagination.pages[t].separator)?'\n\t\t\t<li component="pagination/select-page" class="page select-page">\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\n\t\t\t</li>\n\t\t\t':'\n\t\t\t<li class="page'+(s(e&&e.pagination&&e.pagination.pages&&e.pagination.pages[t]&&e.pagination.pages[t].active)?" active":"")+'" >\n\t\t\t\t<a href="?'+l(s(e&&e.pagination&&e.pagination.pages&&e.pagination.pages[t]&&e.pagination.pages[t].qs))+'" data-page="'+l(s(e&&e.pagination&&e.pagination.pages&&e.pagination.pages[t]&&e.pagination.pages[t].page))+'">'+l(s(e&&e.pagination&&e.pagination.pages&&e.pagination.pages[t]&&e.pagination.pages[t].page))+"</a>\n\t\t\t</li>\n\t\t\t")+"\n\t\t"},function(){return""})}},l});