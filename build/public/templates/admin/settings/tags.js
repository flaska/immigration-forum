!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function t(t,n,s,i,r){return'<div class="settings">\r\n\t<div class="row">\r\n\t\t<div class="col-sm-2 col-xs-12 content-header">\r\n\t\t\t[[admin/admin:settings-header-contents]]\r\n\t\t</div>\r\n\t\t<div class="col-sm-10 col-xs-12">\r\n\t\t\t<nav class="section-content">\r\n\t\t\t\t<ul></ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/tags:tag]]</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<form>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label for="minimumTagsPerTopics">[[admin/settings/tags:min-per-topic]]</label>\r\n\t\t\t\t<input id="minimumTagsPerTopics" type="text" class="form-control" value="0" data-field="minimumTagsPerTopic">\r\n\t\t\t</div>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label for="maximumTagsPerTopics">[[admin/settings/tags:max-per-topic]]</label>\r\n\t\t\t\t<input id="maximumTagsPerTopics" type="text" class="form-control" value="5" data-field="maximumTagsPerTopic">\r\n\t\t\t</div>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label for="minimumTagLength">[[admin/settings/tags:min-length]]</label>\r\n\t\t\t\t<input id="minimumTagLength" type="text" class="form-control" value="3" data-field="minimumTagLength">\r\n\t\t\t</div>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label for="maximumTagLength">[[admin/settings/tags:max-length]]</label>\r\n\t\t\t\t<input id="maximumTagLength" type="text" class="form-control" value="15" data-field="maximumTagLength">\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t\t<a href="'+(0,t.__escape)(s(n&&n.config&&n.config.relative_path))+'/admin/manage/tags">[[admin/settings/tags:goto-manage]]</a>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/tags:privacy]]</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<form>\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="privateTagListing">\r\n\t\t\t\t\t<span class="mdl-switch__label">[[admin/settings/tags:list-private]]</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/tags:related-topics]]</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<form>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label for="maximumRelatedTopics">[[admin/settings/tags:max-related-topics]]</label>\r\n\t\t\t\t<input id="maximumRelatedTopics" type="text" class="form-control" value="5" data-field="maximumRelatedTopics">\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n</div>\r\n\r\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\r\n\t<i class="material-icons">save</i>\r\n</button>\r\n\r\n<script>\r\n\trequire([\'admin/settings\'], function(Settings) {\r\n\t\tSettings.prepare();\r\n\t\tSettings.populateTOC();\r\n\t});\r\n<\/script>\r\n'}return t.blocks={},t});