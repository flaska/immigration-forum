!function(r){"object"==typeof module&&module.exports?module.exports=r():"function"==typeof define&&define.amd&&define(r)}(function(){function r(r,n,e,t,o){var i=r.__escape;return'<div class="alert alert-danger">\r\n\t<strong>[[global:400.title]]</strong>\r\n\t'+(e(n&&n.error)?"\r\n\t<p>"+i(e(n&&n.error))+"</p>\r\n\t":"\r\n\t<p>[[global:400.message, "+i(e(n&&n.config&&n.config.relative_path))+"]]</p>\r\n\t")+"\r\n\r\n\t"+(e(n&&n.returnLink)?"\r\n\t<p>[[error:goback]]</p>\r\n\t":"")+"\r\n</div>\r\n"}return r.blocks={},r});