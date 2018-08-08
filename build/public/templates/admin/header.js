!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function e(t,i,r,n,a){var l=t.__escape;return"<!DOCTYPE html>\r\n<html>\r\n\t<head>\r\n\t\t<title>"+l(r(i&&i.title))+'</title>\r\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n\r\n\t\t<link rel="stylesheet" type="text/css" href="'+l(r(i&&i.relative_path))+"/assets/admin.css?"+l(r(i&&i["cache-buster"]))+'" />\r\n\t\t<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">\r\n\r\n\t\t<script>\r\n\t\t\tvar RELATIVE_PATH = "'+l(r(i&&i.relative_path))+"\";\r\n\t\t\tvar config = JSON.parse('"+r(i&&i.configJSON)+"');\r\n\t\t\tvar app = {\r\n\t\t\t\ttemplate: \""+l(r(i&&i.template&&i.template.name))+"\",\r\n\t\t\t\tuser: JSON.parse('"+r(i&&i.userJSON)+"'),\r\n\t\t\t\tconfig: JSON.parse(decodeURIComponent(\""+r(i&&i.adminConfigJSON)+'")),\r\n\t\t\t\tflags: {},\r\n\t\t\t\tinAdmin: true\r\n\t\t\t};\r\n\t\t<\/script>\r\n\r\n\t\t<script type="text/javascript" src="'+l(r(i&&i.relative_path))+"/assets/acp.min.js?"+l(r(i&&i["cache-buster"]))+'"><\/script>\r\n\r\n\t\t'+e.blocks.scripts(t,i,r,n,a)+'\r\n\t</head>\r\n\r\n\t<body class="admin '+l(r(i&&i.bodyClass))+'">\r\n\t\t<nav id="menu" class="hidden-md hidden-lg">\r\n\t<section class="menu-section quick-actions">\r\n\t\t<ul class="menu-section-list">\r\n\t\t\t<div class="button-group">\r\n\t\t\t\t<li component="logout">\r\n\t<a href="#" title="[[admin/menu:logout]]" data-placement="bottom" data-toggle="tooltip">\r\n\t\t<i class="fa fw-fw fa-sign-out"></i>\r\n\t</a>\r\n</li>\r\n<li>\r\n\t<a href="#" class="restart" data-toggle="tooltip" data-placement="bottom" title="[[admin/menu:restart-forum]]">\r\n\t\t<i class="fa fa-fw fa-repeat"></i>\r\n\t</a>\r\n</li>\r\n<li>\r\n\t<a href="#" class="rebuild-and-restart" data-toggle="tooltip" data-placement="bottom" title="[[admin/menu:rebuild-and-restart-forum]]">\r\n\t\t<i class="fa fa-fw fa-refresh"></i>\r\n\t</a>\r\n</li>\r\n\r\n<li>\r\n\t<a href="'+l(r(i&&i.config&&i.config.relative_path))+'/" data-toggle="tooltip" data-placement="bottom" title="[[admin/menu:view-forum]]">\r\n\t\t<i class="fa fa-fw fa-home"></i>\r\n\t</a>\r\n</li>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="alert '+(r(i&&i.upgradeAvailable)?"alert-warning":"alert-info")+' well-sm">\r\n\t<span>[[admin/menu:alerts.version, '+l(r(i&&i.version))+"]]</span>\r\n\t"+(r(i&&i.upgradeAvailable)?'\r\n\t<span style="margin-left: 10px">\r\n\t\t<a href="https://docs.nodebb.org/configuring/upgrade/" target="_blank">\r\n\t\t\t<u>[[admin/menu:alerts.upgrade, '+l(r(i&&i.latestVersion))+"]]</u>\r\n\t\t</a>\r\n\t</span>\r\n\t":"")+'\r\n</div>\r\n\t\t</ul>\r\n\t</section>\r\n\t\r\n\t<section class="menu-section">\r\n\t\t<h3 class="menu-section-title">[[admin/menu:section-general]]</h3>\r\n\t\t<ul class="menu-section-list">\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/general/dashboard">[[admin/menu:general/dashboard]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/general/homepage">[[admin/menu:general/homepage]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/general/navigation">[[admin/menu:general/navigation]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/general/languages">[[admin/menu:general/languages]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/general/sounds">[[admin/menu:general/sounds]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/general/social">[[admin/menu:general/social]]</a></li>\r\n\t\t</ul>\r\n\t</section>\r\n\r\n\t<section class="menu-section">\r\n\t\t<h3 class="menu-section-title">[[admin/menu:section-manage]]</h3>\r\n\t\t<ul class="menu-section-list">\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/manage/categories">[[admin/menu:manage/categories]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/manage/privileges">[[admin/menu:manage/privileges]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/manage/users">[[admin/menu:manage/users]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/manage/admins-mods">[[admin/menu:manage/admins-mods]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/manage/groups">[[admin/menu:manage/groups]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/manage/tags">[[admin/menu:manage/tags]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/manage/registration">[[admin/menu:manage/registration]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/manage/post-queue">[[admin/menu:manage/post-queue]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/manage/ip-blacklist">[[admin/menu:manage/ip-blacklist]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/manage/uploads">[[admin/menu:manage/uploads]]</a></li>\r\n\t\t</ul>\r\n\t</section>\r\n\r\n\t<section class="menu-section">\r\n\t\t<h3 class="menu-section-title">[[admin/menu:section-settings]]</h3>\r\n\t\t<ul class="menu-section-list">\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/general">[[admin/menu:section-general]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/user">[[admin/menu:settings/user]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/group">[[admin/menu:settings/group]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/tags">[[admin/menu:manage/tags]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/post">[[admin/menu:settings/post]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/email">[[admin/menu:settings/email]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/reputation">[[admin/menu:settings/reputation]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/guest">[[admin/menu:settings/guest]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/uploads">[[admin/menu:settings/uploads]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/chat">[[admin/menu:settings/chat]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/pagination">[[admin/menu:settings/pagination]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/notifications">[[admin/menu:settings/notifications]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/cookies">[[admin/menu:settings/cookies]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/web-crawler">[[admin/menu:settings/web-crawler]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/sockets">[[admin/menu:settings/sockets]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/advanced">[[admin/menu:settings/advanced]]</a></li>\r\n\t\t</ul>\r\n\t</section>\r\n\r\n\t<section class="menu-section">\r\n\t\t<h3 class="menu-section-title">[[admin/menu:section-appearance]]</h3>\r\n\t\t<ul class="menu-section-list">\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/appearance/themes">[[admin/menu:appearance/themes]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/appearance/skins">[[admin/menu:appearance/skins]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/appearance/customise">[[admin/menu:appearance/customise]]</a></li>\r\n\t\t</ul>\r\n\t</section>\r\n\r\n\t<section class="menu-section">\r\n\t\t<h3 class="menu-section-title">[[admin/menu:section-extend]]</h3>\r\n\t\t<ul class="menu-section-list">\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/extend/plugins">[[admin/menu:extend/plugins]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/extend/widgets">[[admin/menu:extend/widgets]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/extend/rewards">[[admin/menu:extend/rewards]]</a></li>\r\n\t\t</ul>\r\n\t</section>\r\n\r\n\t'+(r(i&&i.authentication&&i.authentication.length)?'\r\n\t<section class="menu-section">\r\n\t\t<h3 class="menu-section-title">[[admin/menu:section-social-auth]]</h3>\r\n\t\t<ul class="menu-section-list">\r\n\t\t\t'+e.blocks.authentication(t,i,r,n,a)+"\r\n\t\t</ul>\r\n\t</section>\r\n\t":"")+"\r\n\r\n\t"+(r(i&&i.plugins&&i.plugins.length)?'\r\n\t<section class="menu-section">\r\n\t\t<h3 class="menu-section-title">[[admin/menu:section-plugins]]</h3>\r\n\t\t<ul class="menu-section-list">\r\n\t\t\t'+e.blocks.plugins(t,i,r,n,a)+"\r\n\t\t</ul>\r\n\t</section>\r\n\t":"")+'\r\n\r\n\t<section class="menu-section">\r\n\t\t<h3 class="menu-section-title">[[admin/menu:section-advanced]]</h3>\r\n\t\t<ul class="menu-section-list">\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/advanced/database">[[admin/menu:advanced/database]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/advanced/events">[[admin/menu:advanced/events]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/advanced/cache">[[admin/menu:advanced/cache]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/advanced/errors">[[admin/menu:advanced/errors]]</a></li>\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/advanced/logs">[[admin/menu:advanced/logs]]</a></li>\r\n\t\t\t'+(r(i&&i.env)?'\r\n\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/development/logger">[[admin/menu:development/logger]]</a></li>\r\n\t\t\t':"")+'\r\n\t\t</ul>\r\n\t</section>\r\n</nav>\r\n\r\n<main id="panel">\r\n\t<nav class="header" id="header">\r\n\t\t<div class="pull-left">\r\n\t\t\t<div id="mobile-menu">\r\n\t\t\t\t<div class="bar"></div>\r\n\t\t\t\t<div class="bar"></div>\r\n\t\t\t\t<div class="bar"></div>\r\n\t\t\t</div>\r\n\t\t\t<h1 id="main-page-title"></h1>\r\n\t\t</div>\r\n\r\n\t\t<ul class="quick-actions hidden-xs hidden-sm">\r\n\t\t\t<li component="logout">\r\n\t<a href="#" title="[[admin/menu:logout]]" data-placement="bottom" data-toggle="tooltip">\r\n\t\t<i class="fa fw-fw fa-sign-out"></i>\r\n\t</a>\r\n</li>\r\n<li>\r\n\t<a href="#" class="restart" data-toggle="tooltip" data-placement="bottom" title="[[admin/menu:restart-forum]]">\r\n\t\t<i class="fa fa-fw fa-repeat"></i>\r\n\t</a>\r\n</li>\r\n<li>\r\n\t<a href="#" class="rebuild-and-restart" data-toggle="tooltip" data-placement="bottom" title="[[admin/menu:rebuild-and-restart-forum]]">\r\n\t\t<i class="fa fa-fw fa-refresh"></i>\r\n\t</a>\r\n</li>\r\n\r\n<li>\r\n\t<a href="'+l(r(i&&i.config&&i.config.relative_path))+'/" data-toggle="tooltip" data-placement="bottom" title="[[admin/menu:view-forum]]">\r\n\t\t<i class="fa fa-fw fa-home"></i>\r\n\t</a>\r\n</li>\r\n\t\t\t\r\n\t\t\t<form role="search">\r\n\t\t\t\t<div id="acp-search" >\r\n\t\t\t\t\t<div class="dropdown">\r\n\t\t\t\t\t\t<input type="text" autofocus data-toggle="dropdown" class="form-control" placeholder="[[admin/menu:search.placeholder]]">\r\n\t\t\t\t\t\t<ul class="dropdown-menu dropdown-menu-right state-start-typing" role="menu">\r\n\t\t\t\t\t\t\t<li role="presentation" class="no-results">\r\n\t\t\t\t\t\t\t\t<a>[[admin/menu:search.no-results]]</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li role="presentation" class="divider search-forum"></li>\r\n\t\t\t\t\t\t\t<li role="presentation" class="search-forum">\r\n\t\t\t\t\t\t\t\t<a role="menuitem" target="_top" href="#">\r\n\t\t\t\t\t\t\t\t\t[[admin/menu:search.search-forum]]\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li role="presentation" class="keep-typing">\r\n\t\t\t\t\t\t\t\t<a>[[admin/menu:search.keep-typing]]</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li role="presentation" class="start-typing">\r\n\t\t\t\t\t\t\t\t<a>[[admin/menu:search.start-typing]]</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\r\n\t\t\t<div class="alert '+(r(i&&i.upgradeAvailable)?"alert-warning":"alert-info")+' well-sm">\r\n\t<span>[[admin/menu:alerts.version, '+l(r(i&&i.version))+"]]</span>\r\n\t"+(r(i&&i.upgradeAvailable)?'\r\n\t<span style="margin-left: 10px">\r\n\t\t<a href="https://docs.nodebb.org/configuring/upgrade/" target="_blank">\r\n\t\t\t<u>[[admin/menu:alerts.upgrade, '+l(r(i&&i.latestVersion))+"]]</u>\r\n\t\t</a>\r\n\t</span>\r\n\t":"")+'\r\n</div>\r\n\r\n\t\t\t<li class="reconnect-spinner">\r\n\t\t\t\t<a href="#" id="reconnect" class="hide" title="[[admin/menu:connection-lost, '+l(r(i&&i.title))+']]">\r\n\t\t\t\t\t<i class="fa fa-check"></i>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\r\n\r\n\t\t<ul id="main-menu">\r\n\t\t\t<li class="menu-item">\r\n\t\t\t\t<a href="'+l(r(i&&i.relative_path))+'/admin/general/dashboard">[[admin/menu:general/dashboard]]</a>\r\n\t\t\t</li>\r\n\t\t\t<li class="dropdown menu-item">\r\n\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-general]]</a>\r\n\t\t\t\t<ul class="dropdown-menu" role="menu">\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/general/homepage">[[admin/menu:general/homepage]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/general/navigation">[[admin/menu:general/navigation]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/general/languages">[[admin/menu:general/languages]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/general/sounds">[[admin/menu:general/sounds]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/general/social">[[admin/menu:general/social]]</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t\t<li class="dropdown menu-item">\r\n\t\t\t\t<a id="manage-menu" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-manage]]</a>\r\n\t\t\t\t<ul class="dropdown-menu" role="menu">\r\n\t\t\t\t\t<li><a id="manage-categories" href="'+l(r(i&&i.relative_path))+'/admin/manage/categories">[[admin/menu:manage/categories]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/manage/privileges">[[admin/menu:manage/privileges]]</a></li>\r\n\t\t\t\t\t<li><a id="manage-users" href="'+l(r(i&&i.relative_path))+'/admin/manage/users">[[admin/menu:manage/users]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/manage/admins-mods">[[admin/menu:manage/admins-mods]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/manage/groups">[[admin/menu:manage/groups]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/manage/tags">[[admin/menu:manage/tags]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/manage/registration">[[admin/menu:manage/registration]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/manage/post-queue">[[admin/menu:manage/post-queue]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/manage/ip-blacklist">[[admin/menu:manage/ip-blacklist]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/manage/uploads">[[admin/menu:manage/uploads]]</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t\t<li class="dropdown menu-item">\r\n\t\t\t\t<a id="settings-menu" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-settings]]</a>\r\n\t\t\t\t<ul class="dropdown-menu" role="menu">\r\n\t\t\t\t\t<li><a id="settings-general" href="'+l(r(i&&i.relative_path))+'/admin/settings/general">[[admin/menu:section-general]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/user">[[admin/menu:settings/user]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/group">[[admin/menu:settings/group]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/tags">[[admin/menu:manage/tags]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/post">[[admin/menu:settings/post]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/email">[[admin/menu:settings/email]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/reputation">[[admin/menu:settings/reputation]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/guest">[[admin/menu:settings/guest]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/uploads">[[admin/menu:settings/uploads]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/chat">[[admin/menu:settings/chat]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/pagination">[[admin/menu:settings/pagination]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/notifications">[[admin/menu:settings/notifications]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/cookies">[[admin/menu:settings/cookies]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/web-crawler">[[admin/menu:settings/web-crawler]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/sockets">[[admin/menu:settings/sockets]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/settings/advanced">[[admin/menu:settings/advanced]]</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t\t<li class="dropdown menu-item">\r\n\t\t\t\t<a id="appearance-menu" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-appearance]]</a>\r\n\t\t\t\t<ul class="dropdown-menu" role="menu">\r\n\t\t\t\t\t<li><a id="appearance-themes" href="'+l(r(i&&i.relative_path))+'/admin/appearance/themes">[[admin/menu:appearance/themes]]</a></li>\r\n\t\t\t\t\t<li><a id="appearance-skins" href="'+l(r(i&&i.relative_path))+'/admin/appearance/skins">[[admin/menu:appearance/skins]]</a></li>\r\n\t\t\t\t\t<li><a id="appearance-customise" href="'+l(r(i&&i.relative_path))+'/admin/appearance/customise">[[admin/menu:appearance/customise]]</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t\t<li class="dropdown menu-item">\r\n\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-extend]]</a>\r\n\t\t\t\t<ul class="dropdown-menu" role="menu">\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/extend/plugins">[[admin/menu:extend/plugins]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/extend/widgets">[[admin/menu:extend/widgets]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/extend/rewards">[[admin/menu:extend/rewards]]</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t\t'+(r(i&&i.authentication&&i.authentication.length)?'\r\n\t\t\t<li class="dropdown menu-item">\r\n\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-social-auth]]</a>\r\n\t\t\t\t<ul class="dropdown-menu" role="menu">\r\n\t\t\t\t\t'+n(r(i&&i.authentication),function(t,n,a,e){return'\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="'+l(r(i&&i.relative_path))+"/admin"+l(r(i&&i.authentication&&i.authentication[t]&&i.authentication[t].route))+'">'+l(r(i&&i.authentication&&i.authentication[t]&&i.authentication[t].name))+"</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t"},function(){return""})+"\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t\t":"")+"\r\n\t\t\t"+(r(i&&i.plugins&&i.plugins.length)?'\r\n\t\t\t<li class="dropdown menu-item">\r\n\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-plugins]]</a>\r\n\t\t\t\t<ul class="dropdown-menu" role="menu">\r\n\t\t\t\t\t'+n(r(i&&i.plugins),function(t,n,a,e){return'\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href="'+l(r(i&&i.relative_path))+"/admin"+l(r(i&&i.plugins&&i.plugins[t]&&i.plugins[t].route))+'">'+l(r(i&&i.plugins&&i.plugins[t]&&i.plugins[t].name))+"</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t"},function(){return""})+'\r\n\t\t\t\t\t<li class="divider"></li>\r\n\t\t\t\t\t<li data-link="1">\r\n\t\t\t\t\t\t<a href="'+l(r(i&&i.relative_path))+'/admin/extend/plugins">[[admin/menu:extend/plugins.install]]</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t\t':"")+'\r\n\t\t\t<li class="dropdown menu-item">\r\n\t\t\t\t<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">[[admin/menu:section-advanced]]</a>\r\n\t\t\t\t<ul class="dropdown-menu" role="menu">\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/advanced/database">[[admin/menu:advanced/database]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/advanced/events">[[admin/menu:advanced/events]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/advanced/cache">[[admin/menu:advanced/cache]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/advanced/errors">[[admin/menu:advanced/errors]]</a></li>\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/advanced/logs">[[admin/menu:advanced/logs]]</a></li>\r\n\t\t\t\t\t'+(r(i&&i.env)?'\r\n\t\t\t\t\t<li><a href="'+l(r(i&&i.relative_path))+'/admin/development/logger">[[admin/menu:development/logger]]</a></li>\r\n\t\t\t\t\t':"")+'\r\n\t\t\t\t</ul>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</nav>\r\n\t\t<div class="container" id="content">'}return e.blocks={scripts:function(t,i,r,n,a){var l=t.__escape;return n(r(i&&i.scripts),function(t,n,a,e){return'\r\n\t\t<script type="text/javascript" src="'+l(r(i&&i.scripts&&i.scripts[t]&&i.scripts[t].src))+'"><\/script>\r\n\t\t'},function(){return""})},authentication:function(t,i,r,n,a){var l=t.__escape;return n(r(i&&i.authentication),function(t,n,a,e){return'\r\n\t\t\t<li>\r\n\t\t\t\t<a href="'+l(r(i&&i.relative_path))+"/admin"+l(r(i&&i.authentication&&i.authentication[t]&&i.authentication[t].route))+'">'+l(r(i&&i.authentication&&i.authentication[t]&&i.authentication[t].name))+"</a>\r\n\t\t\t</li>\r\n\t\t\t"},function(){return""})},plugins:function(t,i,r,n,a){var l=t.__escape;return n(r(i&&i.plugins),function(t,n,a,e){return'\r\n\t\t\t<li>\r\n\t\t\t\t<a href="'+l(r(i&&i.relative_path))+"/admin"+l(r(i&&i.plugins&&i.plugins[t]&&i.plugins[t].route))+'">'+l(r(i&&i.plugins&&i.plugins[t]&&i.plugins[t].name))+"</a>\r\n\t\t\t</li>\r\n\t\t\t"},function(){return""})}},e});