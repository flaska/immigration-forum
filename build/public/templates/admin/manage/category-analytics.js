!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function t(t,a,n,i,e){var r=t.__escape;return'<a class="btn btn-primary" href="'+r(n(a&&a.config&&a.config.relative_path))+'/admin/manage/categories">\r\n\t<i class="fa fa-fw fa-chevron-left"></i> [[admin/manage/categories:analytics.back]]\r\n</a>\r\n\r\n<h3>[[admin/manage/categories:analytics.title, '+r(n(a&&a.name))+']]</h3>\r\n<hr />\r\n\r\n<div class="row">\r\n\t<div class="col-sm-6 text-center">\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<div><canvas id="pageviews:hourly" height="250"></canvas></div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="panel-footer"><small>[[admin/manage/categories:analytics.pageviews-hourly]]</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="col-sm-6 text-center">\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<div><canvas id="pageviews:daily" height="250"></canvas></div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="panel-footer"><small>[[admin/manage/categories:analytics.pageviews-daily]]</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class="row">\r\n\t<div class="col-sm-6 text-center">\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<div><canvas id="topics:daily" height="250"></canvas></div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="panel-footer"><small>[[admin/manage/categories:analytics.topics-daily]]</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="col-sm-6 text-center">\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<div><canvas id="posts:daily" height="250"></canvas></div>\r\n\t\t\t\t<p>\r\n\t\t\t\t\t\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="panel-footer"><small>[[admin/manage/categories:analytics.posts-daily]]</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>'}return t.blocks={},t});