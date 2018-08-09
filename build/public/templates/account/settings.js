!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function s(t,n,e,o,i){var a=t.__escape;return'<div class="account">\n\t'+(e(n&&n.breadcrumbs&&n.breadcrumbs.length)?'\n<ol class="breadcrumb">\n\t'+s.blocks.breadcrumbs(t,n,e,o,i)+"\n</ol>\n":"")+'\n\n<div class="cover" component="account/cover" style="background-image: url('+a(e(n&&n["cover:url"]))+"); background-position: "+a(e(n&&n["cover:position"]))+';">\n\t<div class="avatar-wrapper" data-uid="'+a(e(n&&n.uid))+'">\n\t\t'+(e(n&&n.picture)?'\n\t\t<img src="'+a(e(n&&n.picture))+'" class="avatar avatar-xl avatar-rounded" />\n\t\t':'\n\t\t<div class="avatar avatar-xl avatar-rounded" style="background-color: '+a(e(n&&n["icon:bgColor"]))+';" title="'+a(e(n&&n.username))+'">'+a(e(n&&n["icon:text"]))+"</div>\n\t\t")+'\n\t\t<i component="user/status" class="fa fa-circle status '+a(e(n&&n.status))+'" title="[[global:'+a(e(n&&n.status))+']]"></i>\n\n\t\t'+(e(n&&n.loggedIn)?"\n\t\t"+(e(n&&n.isSelf)?"":'\n\t\t<button class="btn-morph fab '+(e(n&&n.isFollowing)?"heart":"plus")+(e(n&&n.banned)?" hide":"")+'" title="'+(e(n&&n.isFollowing)?"[[global:unfollow]]":"[[global:follow]]")+'">\n\t\t\t<span>\n\t\t\t\t<span class="s1"></span>\n\t\t\t\t<span class="s2"></span>\n\t\t\t\t<span class="s3"></span>\n\t\t\t</span>\n\t\t</button>\n\t\t')+"\n\t\t":"")+'\n\t</div>\n\n\t<div class="container">\n\t\t<div class="btn-group account-fab bottom-sheet">\n\t<button type="button" class="fab dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n\t\t<i class="fa fa-ellipsis-v"></i>\n\t</button>\n\t<ul class="dropdown-menu dropdown-menu-right">\n\t\t'+(e(n&&n.isSelf)?"":"\n\t\t"+(e(n&&n.banned)?"":"\n\t\t"+(e(n&&n.config&&n.config.disableChat)?"":'\n\t\t<li class="'+(e(n&&n.hasPrivateChat)?"":"hidden")+'">\n\t\t\t<a component="account/chat" href="#">[[user:chat_with, '+a(e(n&&n.username))+']]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="account/new-chat" href="#">[[user:new_chat_with, '+a(e(n&&n.username))+"]]</a>\n\t\t</li>\n\t\t")+'\n\t\t<li>\n\t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a component="account/block" href="#">'+(e(n&&n.isBlocked)?"[[user:unblock_user]]":"[[user:block_user]]")+'</a>\n\t\t</li>\n\t\t<li class="divider"></li>\n\t\t')+"\n\t\t")+'\n\t\t<li>\n\t\t\t<a href="'+a(e(n&&n.config&&n.config.relative_path))+"/user/"+a(e(n&&n.userslug))+'" class="inline-block" id="profile">[[user:profile]]</a>\n\t\t</li>\n\t\t'+(e(n&&n.showHidden)?'\n\t\t<li><a href="'+a(e(n&&n.config&&n.config.relative_path))+"/user/"+a(e(n&&n.userslug))+'/edit">[[user:edit]]</a></li>\n\t\t<li><a href="'+a(e(n&&n.config&&n.config.relative_path))+"/user/"+a(e(n&&n.userslug))+'/settings">[[user:settings]]</a></li>\n\t\t':"")+"\n\n\t\t"+(e(n&&n.isSelf)?"":"\n\t\t"+(e(n&&n.canBan)?'\n\t\t<li class="'+(e(n&&n.banned)?"hide":"")+'">\n\t\t\t<a component="account/ban" href="#">[[user:ban_account]]</a>\n\t\t</li>\n\t\t<li class="'+(e(n&&n.banned)?"":"hide")+'">\n\t\t\t<a component="account/unban" href="#">[[user:unban_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t"+(e(n&&n.isAdmin)?'\n\t\t<li>\n\t\t\t<a component="account/delete" href="#" class="">[[user:delete_account]]</a>\n\t\t</li>\n\t\t':"")+"\n\t\t")+'\n\n\t\t<li class="divider"></li>\n\t\t<li><a href="'+a(e(n&&n.config&&n.config.relative_path))+"/user/"+a(e(n&&n.userslug))+'/following">[[user:following]]</a></li>\n\t\t<li><a href="'+a(e(n&&n.config&&n.config.relative_path))+"/user/"+a(e(n&&n.userslug))+'/followers">[[user:followers]]</a></li>\n\t\t'+(e(n&&n.showHidden)?'\n\t\t<li><a href="'+a(e(n&&n.config&&n.config.relative_path))+"/user/"+a(e(n&&n.userslug))+'/blocks">[[user:blocks]]</a></li>\n\t\t':"")+'\n\t\t<li class="divider"></li>\n\t\t<li><a href="'+a(e(n&&n.config&&n.config.relative_path))+"/user/"+a(e(n&&n.userslug))+'/topics">[[global:topics]]</a></li>\n\t\t<li><a href="'+a(e(n&&n.config&&n.config.relative_path))+"/user/"+a(e(n&&n.userslug))+'/posts">[[global:posts]]</a></li>\n\t\t'+(e(n&&n["reputation:disabled"])?"":'\n\t\t<li><a href="'+a(e(n&&n.config&&n.config.relative_path))+"/user/"+a(e(n&&n.userslug))+'/best">[[global:best]]</a></li>\n\t\t')+'\n\t\t<li><a href="'+a(e(n&&n.config&&n.config.relative_path))+"/user/"+a(e(n&&n.userslug))+'/groups">[[global:header.groups]]</a></li>\n\n\t\t'+(e(n&&n.showHidden)?'\n\t\t<li><a href="'+a(e(n&&n.config&&n.config.relative_path))+"/user/"+a(e(n&&n.userslug))+'/bookmarks">[[user:bookmarks]]</a></li>\n\t\t<li><a href="'+a(e(n&&n.config&&n.config.relative_path))+"/user/"+a(e(n&&n.userslug))+'/watched">[[user:watched]]</a></li>\n\t\t<li><a href="'+a(e(n&&n.config&&n.config.relative_path))+"/user/"+a(e(n&&n.userslug))+'/ignored">[[user:ignored]]</a></li>\n\t\t'+(e(n&&n["reputation:disabled"])?"":'\n\t\t<li><a href="'+a(e(n&&n.config&&n.config.relative_path))+"/user/"+a(e(n&&n.userslug))+'/upvoted">[[global:upvoted]]</a></li>\n\t\t'+(e(n&&n["downvote:disabled"])?"":'\n\t\t<li><a href="'+a(e(n&&n.config&&n.config.relative_path))+"/user/"+a(e(n&&n.userslug))+'/downvoted">[[global:downvoted]]</a></li>\n\t\t')+"\n\t\t")+'\n\t\t<li><a href="'+a(e(n&&n.config&&n.config.relative_path))+"/user/"+a(e(n&&n.userslug))+'/uploads">[[global:uploads]]</a></li>\n\t\t':"")+"\n\n\t\t"+s.blocks.profile_links(t,n,e,o,i)+"\n\t</ul>\n</div>\n\n\n\t\t"+(e(n&&n.allowCoverPicture)?'\n\t\t<div class="controls">\n\t\t\t<span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>\n\t\t\t<span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>\n\t\t\t<span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>\n\t\t</div>\n\t\t<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>\n\t\t<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>\n\t\t':"")+'\n\t</div>\n</div>\n\n\n\t<div class="row">\n\t\t<div class="col-xs-12 col-md-6">\n\t\t\t'+(e(n&&n.disableCustomUserSkins)?"":'\n\t\t\t<h4>[[user:select-skin]]</h4>\n\t\t\t<div class="well">\n\t\t\t\t<select class="form-control" id="bootswatchSkin" data-property="bootswatchSkin">\n\t\t\t\t\t'+s.blocks.bootswatchSkinOptions(t,n,e,o,i)+"\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t")+"\n\n\t\t\t"+(e(n&&n.allowUserHomePage)?'\n\t\t\t<h4>[[user:select-homepage]]</h4>\n\t\t\t<div class="well">\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="dailyDigestFreq">[[user:homepage]]</label>\n\t\t\t\t\t<select class="form-control" data-property="homePageRoute">\n\t\t\t\t\t\t<option value="none">None</option>\n\t\t\t\t\t\t'+s.blocks.homePageRoutes(t,n,e,o,i)+'\n\t\t\t\t\t</select>\n\t\t\t\t\t<p class="help-block">[[user:homepage_description]]</p>\n\t\t\t\t</div>\n\t\t\t\t<div id="homePageCustom" class="form-group" style="display: none;">\n\t\t\t\t\t<label for="homePageCustom">[[user:custom_route]]</label>\n\t\t\t\t\t<input type="text" class="form-control" data-property="homePageCustom" id="homePageCustom" value="'+a(e(n&&n.settings&&n.settings.homePageRoute))+'"/>\n\t\t\t\t\t<p class="help-block">[[user:custom_route_help]]</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t':"")+'\n\n\t\t\t<h4>[[global:privacy]]</h4>\n\t\t\t<div class="well">\n\t\t\t\t'+(e(n&&n.hideEmail)?"":'\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="showemail" '+(e(n&&n.settings&&n.settings.showemail)?"checked ":"")+"/> <strong>[[user:show_email]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t")+"\n\n\t\t\t\t"+(e(n&&n.hideFullname)?"":'\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="showfullname" '+(e(n&&n.settings&&n.settings.showfullname)?"checked":"")+"/> <strong>[[user:show_fullname]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t")+'\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="restrictChat" '+(e(n&&n.settings&&n.settings.restrictChat)?"checked":"")+'/> <strong>[[user:restrict_chats]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<h4>[[user:browsing]]</h4>\n\t\t\t<div class="well">\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="openOutgoingLinksInNewTab" '+(e(n&&n.settings&&n.settings.openOutgoingLinksInNewTab)?"checked":"")+"/> <strong>[[user:open_links_in_new_tab]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t"+(e(n&&n.inTopicSearchAvailable)?'\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="topicSearchEnabled" '+(e(n&&n.settings&&n.settings.topicSearchEnabled)?"checked":"")+'/> <strong>[[user:enable_topic_searching]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<p class="help-block">[[user:topic_search_help]]</p>\n\t\t\t\t':"")+'\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="scrollToMyPost" '+(e(n&&n.settings&&n.settings.scrollToMyPost)?"checked":"")+'/> <strong>[[user:scroll_to_my_post]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="delayImageLoading" '+(e(n&&n.settings&&n.settings.delayImageLoading)?"checked":"")+'/> <strong>[[user:delay_image_loading]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<p class="help-block">[[user:image_load_delay_help]]</p>\n\t\t\t</div>\n\n\t\t\t<h4>[[global:pagination]]</h4>\n\t\t\t<div class="well">\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="usePagination" '+(e(n&&n.settings&&n.settings.usePagination)?"checked":"")+"> <strong>[[user:paginate_description]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\n\t\t\t\t<strong>[[user:topics_per_page]] ([[user:max_items_per_page, "+a(e(n&&n.maxTopicsPerPage))+']])</strong><br /> <input type="text" class="form-control" data-property="topicsPerPage" value="'+a(e(n&&n.settings&&n.settings.topicsPerPage))+'"><br />\n\t\t\t\t<strong>[[user:posts_per_page]] ([[user:max_items_per_page, '+a(e(n&&n.maxPostsPerPage))+']])</strong><br /> <input type="text" class="form-control" data-property="postsPerPage" value="'+a(e(n&&n.settings&&n.settings.postsPerPage))+'"><br />\n\t\t\t</div>\n\n\t\t\t'+(e(n&&n.disableEmailSubscriptions)?"":'\n\t\t\t<h4>[[global:email]]</h4>\n\t\t\t<div class="well">\n\t\t\t\t<div class="form-group">\n\t\t\t\t\t<label for="dailyDigestFreq">[[user:digest_label]]</label>\n\t\t\t\t\t<select class="form-control" id="dailyDigestFreq" data-property="dailyDigestFreq" autocomplete="off">\n\t\t\t\t\t\t'+s.blocks.dailyDigestFreqOptions(t,n,e,o,i)+'\n\t\t\t\t\t</select>\n\t\t\t\t\t<p class="help-block">[[user:digest_description]]</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t')+"\n\n\t\t\t"+s.blocks.customSettings(t,n,e,o,i)+'\n\n\t\t</div>\n\n\t\t<div class="col-xs-12 col-md-6">\n\t\t\t<h4>[[global:language]]</h4>\n\t\t\t<div class="well">\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-lg-12">\n\t\t\t\t\t\t<select data-property="userLang" class="form-control">\n\t\t\t\t\t\t\t'+s.blocks.languages(t,n,e,o,i)+"\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t"+(e(n&&n.isAdmin)?"\n\t\t\t\t"+(e(n&&n.isSelf)?'\n\t\t\t\t<label>[[user:acp_language]]</label>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-lg-12">\n\t\t\t\t\t\t<select data-property="acpLang" class="form-control">\n\t\t\t\t\t\t\t'+s.blocks.acpLanguages(t,n,e,o,i)+"\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t":"")+"\n\t\t\t\t":"")+'\n\t\t\t</div>\n\n\t\t\t<h4>[[topic:watch]]</h4>\n\t\t\t<div class="well">\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="followTopicsOnCreate" '+(e(n&&n.settings&&n.settings.followTopicsOnCreate)?"checked ":"")+'/> <strong>[[user:follow_topics_you_create]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" data-property="followTopicsOnReply" '+(e(n&&n.settings&&n.settings.followTopicsOnReply)?"checked":"")+'/> <strong>[[user:follow_topics_you_reply_to]]</strong>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<h4>[[user:notifications_and_sounds]]</h4>\n\t\t\t<div class="well">\n\n\t\t\t\t'+s.blocks.notificationSettings(t,n,e,o,i)+'\n\n\t\t\t\t<label for="upvote-notif-freq">[[user:upvote-notif-freq]]</label>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-xs-9">\n\t\t\t\t\t\t<select class="form-control" id="upvote-notif-freq" name="upvote-notif-freq" data-property="upvoteNotifFreq">\n\t\t\t\t\t\t\t'+s.blocks.upvoteNotifFreq(t,n,e,o,i)+'\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<label for="notification">[[user:notification-sound]]</label>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-xs-9">\n\t\t\t\t\t\t<select class="form-control" id="notification" name="notification" data-property="notificationSound">\n\t\t\t\t\t\t\t<option value="">[[user:no-sound]]</option>\n\t\t\t\t\t\t\t'+s.blocks.notificationSound(t,n,e,o,i)+'\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="btn-group col-xs-3">\n\t\t\t\t\t\t<button type="button" class="form-control btn btn-sm btn-default" data-action="play"><span class="hidden-xs">[[global:play]] </span><i class="fa fa-play"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<label for="chat-incoming">[[user:incoming-message-sound]]</label>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-xs-9">\n\t\t\t\t\t\t<select class="form-control" id="chat-incoming" name="chat-incoming" data-property="incomingChatSound">\n\t\t\t\t\t\t\t<option value="">[[user:no-sound]]</option>\n\t\t\t\t\t\t\t'+s.blocks.incomingChatSound(t,n,e,o,i)+'\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="btn-group col-xs-3">\n\t\t\t\t\t\t<button type="button" class="form-control btn btn-sm btn-default" data-action="play"><span class="hidden-xs">[[global:play]] </span><i class="fa fa-play"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<label for="chat-outgoing">[[user:outgoing-message-sound]]</label>\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-xs-9">\n\t\t\t\t\t\t<select class="form-control" id="chat-outgoing" name="chat-outgoing" data-property="outgoingChatSound">\n\t\t\t\t\t\t\t<option value="">[[user:no-sound]]</option>\n\t\t\t\t\t\t\t'+s.blocks.outgoingChatSound(t,n,e,o,i)+'\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="btn-group col-xs-3">\n\t\t\t\t\t\t<button type="button" class="form-control btn btn-sm btn-default" data-action="play"><span class="hidden-xs">[[global:play]] </span><i class="fa fa-play"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="form-actions">\n\t\t<a id="submitBtn" href="#" class="btn btn-primary">[[global:save_changes]]</a>\n\t</div>\n</div>\n\n'}return s.blocks={breadcrumbs:function(t,i,a,n,e){var s=t.__escape;return n(a(i&&i.breadcrumbs),function(t,n,e,o){return"\n\t<li"+(n===e-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(n===e-1?'class="active"':"")+">\n\t\t"+(n===e-1?"":'<a href="'+s(a(i&&i.breadcrumbs&&i.breadcrumbs[t]&&i.breadcrumbs[t].url))+'" itemprop="url">')+'\n\t\t\t<span itemprop="title">\n\t\t\t\t'+s(a(i&&i.breadcrumbs&&i.breadcrumbs[t]&&i.breadcrumbs[t].text))+"\n\t\t\t\t"+(n===e-1?"\n\t\t\t\t"+(a(i&&i["feeds:disableRSS"])?"":"\n\t\t\t\t"+(a(i&&i.rssFeedUrl)?'<a target="_blank" href="'+s(a(i&&i.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\n\t\t\t\t":"")+"\n\t\t\t</span>\n\t\t"+(n===e-1?"":"</a>")+"\n\t</li>\n\t"},function(){return""})},profile_links:function(t,i,a,n,e){var s=t.__escape;return n(a(i&&i.profile_links),function(t,n,e,o){return"\n\t\t"+(0===n?'\n\t\t<li class="divider"></li>\n\t\t':"")+'\n\t\t<li id="'+s(a(i&&i.profile_links&&i.profile_links[t]&&i.profile_links[t].id))+'" class="plugin-link '+(a(i&&i.profile_links&&i.profile_links[t]&&i.profile_links[t].public)?"public":"private")+'"><a href="'+s(a(i&&i.config&&i.config.relative_path))+"/user/"+s(a(i&&i.userslug))+"/"+s(a(i&&i.profile_links&&i.profile_links[t]&&i.profile_links[t].route))+'">'+(a(i&&i.profile_links&&i.profile_links[t]&&i.profile_links[t].icon)?'<i class="fa fa-fw '+s(a(i&&i.profile_links&&i.profile_links[t]&&i.profile_links[t].icon))+'"></i> ':"")+s(a(i&&i.profile_links&&i.profile_links[t]&&i.profile_links[t].name))+"</a></li>\n\t\t"},function(){return""})},bootswatchSkinOptions:function(t,i,a,n,e){var s=t.__escape;return n(a(i&&i.bootswatchSkinOptions),function(t,n,e,o){return'\n\t\t\t\t\t<option value="'+s(a(i&&i.bootswatchSkinOptions&&i.bootswatchSkinOptions[t]&&i.bootswatchSkinOptions[t].value))+'" '+(a(i&&i.bootswatchSkinOptions&&i.bootswatchSkinOptions[t]&&i.bootswatchSkinOptions[t].selected)?"selected":"")+">"+s(a(i&&i.bootswatchSkinOptions&&i.bootswatchSkinOptions[t]&&i.bootswatchSkinOptions[t].name))+"</option>\n\t\t\t\t\t"},function(){return""})},homePageRoutes:function(t,i,a,n,e){var s=t.__escape;return n(a(i&&i.homePageRoutes),function(t,n,e,o){return'\n\t\t\t\t\t\t<option value="'+s(a(i&&i.homePageRoutes&&i.homePageRoutes[t]&&i.homePageRoutes[t].route))+'" '+(a(i&&i.homePageRoutes&&i.homePageRoutes[t]&&i.homePageRoutes[t].selected)?'selected="1"':"")+">"+s(a(i&&i.homePageRoutes&&i.homePageRoutes[t]&&i.homePageRoutes[t].name))+"</option>\n\t\t\t\t\t\t"},function(){return""})},dailyDigestFreqOptions:function(t,i,a,n,e){var s=t.__escape;return n(a(i&&i.dailyDigestFreqOptions),function(t,n,e,o){return'\n\t\t\t\t\t\t<option value="'+s(a(i&&i.dailyDigestFreqOptions&&i.dailyDigestFreqOptions[t]&&i.dailyDigestFreqOptions[t].value))+'" '+(a(i&&i.dailyDigestFreqOptions&&i.dailyDigestFreqOptions[t]&&i.dailyDigestFreqOptions[t].selected)?'selected="1"':"")+">"+s(a(i&&i.dailyDigestFreqOptions&&i.dailyDigestFreqOptions[t]&&i.dailyDigestFreqOptions[t].name))+"</option>\n\t\t\t\t\t\t"},function(){return""})},customSettings:function(t,i,a,n,e){var s=t.__escape;return n(a(i&&i.customSettings),function(t,n,e,o){return"\n\t\t\t<h4>"+s(a(i&&i.customSettings&&i.customSettings[t]&&i.customSettings[t].title))+'</h4>\n\t\t\t<div class="well">\n\t\t\t\t'+s(a(i&&i.customSettings&&i.customSettings[t]&&i.customSettings[t].content))+"\n\t\t\t</div>\n\t\t\t"},function(){return""})},languages:function(t,i,a,n,e){var s=t.__escape;return n(a(i&&i.languages),function(t,n,e,o){return'\n\t\t\t\t\t\t\t<option value="'+s(a(i&&i.languages&&i.languages[t]&&i.languages[t].code))+'" '+(a(i&&i.languages&&i.languages[t]&&i.languages[t].selected)?"selected":"")+">"+s(a(i&&i.languages&&i.languages[t]&&i.languages[t].name))+" ("+s(a(i&&i.languages&&i.languages[t]&&i.languages[t].code))+")</option>\n\t\t\t\t\t\t\t"},function(){return""})},acpLanguages:function(t,i,a,n,e){var s=t.__escape;return n(a(i&&i.acpLanguages),function(t,n,e,o){return'\n\t\t\t\t\t\t\t<option value="'+s(a(i&&i.acpLanguages&&i.acpLanguages[t]&&i.acpLanguages[t].code))+'" '+(a(i&&i.acpLanguages&&i.acpLanguages[t]&&i.acpLanguages[t].selected)?"selected":"")+">"+s(a(i&&i.acpLanguages&&i.acpLanguages[t]&&i.acpLanguages[t].name))+" ("+s(a(i&&i.acpLanguages&&i.acpLanguages[t]&&i.acpLanguages[t].code))+")</option>\n\t\t\t\t\t\t\t"},function(){return""})},notificationSettings:function(t,i,a,n,e){var s=t.__escape;return n(a(i&&i.notificationSettings),function(t,n,e,o){return'\n\t\t\t\t<div class="row">\n\t\t\t\t\t<div class="form-group col-xs-7">\n\t\t\t\t\t\t<label>'+s(a(i&&i.notificationSettings&&i.notificationSettings[t]&&i.notificationSettings[t].label))+'</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="form-group col-xs-5">\n\t\t\t\t\t\t<select class="form-control" data-property="'+s(a(i&&i.notificationSettings&&i.notificationSettings[t]&&i.notificationSettings[t].name))+'">\n\t\t\t\t\t\t\t<option value="none" '+(a(i&&i.notificationSettings&&i.notificationSettings[t]&&i.notificationSettings[t].none)?"selected":"")+'>[[notifications:none]]</option>\n\t\t\t\t\t\t\t<option value="notification" '+(a(i&&i.notificationSettings&&i.notificationSettings[t]&&i.notificationSettings[t].notification)?"selected":"")+'>[[notifications:notification_only]]</option>\n\t\t\t\t\t\t\t<option value="email" '+(a(i&&i.notificationSettings&&i.notificationSettings[t]&&i.notificationSettings[t].email)?"selected":"")+'>[[notifications:email_only]]</option>\n\t\t\t\t\t\t\t<option value="notificationemail" '+(a(i&&i.notificationSettings&&i.notificationSettings[t]&&i.notificationSettings[t].notificationemail)?"selected":"")+">[[notifications:notification_and_email]]</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t"},function(){return""})},upvoteNotifFreq:function(t,i,a,n,e){var s=t.__escape;return n(a(i&&i.upvoteNotifFreq),function(t,n,e,o){return'\n\t\t\t\t\t\t\t<option value="'+s(a(i&&i.upvoteNotifFreq&&i.upvoteNotifFreq[t]&&i.upvoteNotifFreq[t].name))+'" '+(a(i&&i.upvoteNotifFreq&&i.upvoteNotifFreq[t]&&i.upvoteNotifFreq[t].selected)?"selected":"")+">\n\t\t\t\t\t\t\t\t[[user:upvote-notif-freq."+s(a(i&&i.upvoteNotifFreq&&i.upvoteNotifFreq[t]&&i.upvoteNotifFreq[t].name))+"]]\n\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t"},function(){return""})},notificationSound:function(t,i,a,n,e){var s=t.__escape;return n(a(i&&i.notificationSound),function(t,n,e,o){return'\n\t\t\t\t\t\t\t<option value="'+s(a(i&&i.notificationSound&&i.notificationSound[t]&&i.notificationSound[t].name))+'" '+(a(i&&i.notificationSound&&i.notificationSound[t]&&i.notificationSound[t].selected)?"selected":"")+">"+s(a(i&&i.notificationSound&&i.notificationSound[t]&&i.notificationSound[t].name))+"</option>\n\t\t\t\t\t\t\t"},function(){return""})},incomingChatSound:function(t,i,a,n,e){var s=t.__escape;return n(a(i&&i.incomingChatSound),function(t,n,e,o){return'\n\t\t\t\t\t\t\t<option value="'+s(a(i&&i.incomingChatSound&&i.incomingChatSound[t]&&i.incomingChatSound[t].name))+'" '+(a(i&&i.incomingChatSound&&i.incomingChatSound[t]&&i.incomingChatSound[t].selected)?"selected":"")+">"+s(a(i&&i.incomingChatSound&&i.incomingChatSound[t]&&i.incomingChatSound[t].name))+"</option>\n\t\t\t\t\t\t\t"},function(){return""})},outgoingChatSound:function(t,i,a,n,e){var s=t.__escape;return n(a(i&&i.outgoingChatSound),function(t,n,e,o){return'\n\t\t\t\t\t\t\t<option value="'+s(a(i&&i.outgoingChatSound&&i.outgoingChatSound[t]&&i.outgoingChatSound[t].name))+'" '+(a(i&&i.outgoingChatSound&&i.outgoingChatSound[t]&&i.outgoingChatSound[t].selected)?"selected":"")+">"+s(a(i&&i.outgoingChatSound&&i.outgoingChatSound[t]&&i.outgoingChatSound[t].name))+"</option>\n\t\t\t\t\t\t\t"},function(){return""})}},s});