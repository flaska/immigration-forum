!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function c(t,a,e,r,n){var o=t.__escape;return'<form role="form" class="category" data-cid="'+o(e(a&&a.category&&a.category.cid))+'">\r\n\t<div class="row">\r\n\t\t<div class="col-md-3 pull-right">\r\n\t\t\t<select id="category-selector" class="form-control">\r\n\t\t\t\t'+c.blocks.allCategories(t,a,e,r,n)+'\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<br/>\r\n\r\n\t<div class="row">\r\n\t\t<div class="col-md-9" id="category-settings">\r\n\t\t\t<div class="category-settings-form">\r\n\t\t\t\t<fieldset>\r\n\t\t\t\t\t<label for="cid-'+o(e(a&&a.category&&a.category.cid))+'-name">\r\n\t\t\t\t\t\t[[admin/manage/categories:name]]\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<input id="cid-'+o(e(a&&a.category&&a.category.cid))+'-name" type="text" class="form-control" placeholder="[[admin/manage/categories:name]]" data-name="name" value="'+o(e(a&&a.category&&a.category.name))+'" /><br />\r\n\r\n\t\t\t\t\t<label for="cid-'+o(e(a&&a.category&&a.category.cid))+'-description">\r\n\t\t\t\t\t\t[[admin/manage/categories:description]]\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<input id="cid-'+o(e(a&&a.category&&a.category.cid))+'-description" data-name="description" placeholder="[[admin/manage/categories:description]]" value="'+o(e(a&&a.category&&a.category.description))+'" class="form-control category_description description" /><br />\r\n\t\t\t\t</fieldset>\r\n\r\n\t\t\t\t<fieldset class="row">\r\n\t\t\t\t\t<div class="col-sm-4 col-xs-12">\r\n\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t<label for="cid-'+o(e(a&&a.category&&a.category.cid))+'-bgColor">\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:bg-color]]\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<input id="cid-'+o(e(a&&a.category&&a.category.cid))+'-bgColor" placeholder="#0059b2" data-name="bgColor" value="'+o(e(a&&a.category&&a.category.bgColor))+'" class="form-control category_bgColor" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="col-sm-4 col-xs-12">\r\n\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t<label for="cid-'+o(e(a&&a.category&&a.category.cid))+'-color">\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:text-color]]\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<input id="cid-'+o(e(a&&a.category&&a.category.cid))+'-color" placeholder="#fff" data-name="color" value="'+o(e(a&&a.category&&a.category.color))+'" class="form-control category_color" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="col-sm-4 col-xs-12">\r\n\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t<label for="cid-'+o(e(a&&a.category&&a.category.cid))+'-imageClass">\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:bg-image-size]]\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<select id="cid-'+o(e(a&&a.category&&a.category.cid))+'-imageClass" class="form-control" data-name="imageClass" data-value="'+o(e(a&&a.category&&a.category.imageClass))+'">\r\n\t\t\t\t\t\t\t\t<option value="auto">auto</option>\r\n\t\t\t\t\t\t\t\t<option value="cover">cover</option>\r\n\t\t\t\t\t\t\t\t<option value="contain">contain</option>\r\n\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div><br />\r\n\t\t\t\t\t<div class="col-sm-4 col-xs-12">\r\n\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t<label for="cid-'+o(e(a&&a.category&&a.category.cid))+'-class">\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:custom-class]]\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<input id="cid-'+o(e(a&&a.category&&a.category.cid))+'-class" type="text" class="form-control" placeholder="col-md-6 col-xs-6" data-name="class" value="'+o(e(a&&a.category&&a.category.class))+'" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="col-sm-4 col-xs-12">\r\n\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t<label for="cid-'+o(e(a&&a.category&&a.category.cid))+'-numRecentReplies">\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:num-recent-replies]]\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<input id="cid-'+o(e(a&&a.category&&a.category.cid))+'-numRecentReplies" type="text" class="form-control" placeholder="2" data-name="numRecentReplies" value="'+o(e(a&&a.category&&a.category.numRecentReplies))+'" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="col-sm-4 col-xs-12">\r\n\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t<label for="cid-'+o(e(a&&a.category&&a.category.cid))+'-link">\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:ext-link]]\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<input id="cid-'+o(e(a&&a.category&&a.category.cid))+'-link" type="text" class="form-control" placeholder="http://domain.com" data-name="link" value="'+o(e(a&&a.category&&a.category.link))+'" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="col-sm-6 col-xs-12">\r\n\t\t\t\t\t\t<div class="form-group">\r\n\t\t\t\t\t\t\t<div class="checkbox">\r\n\t\t\t\t\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t\t\t\t\t<input type="checkbox" class="mdl-switch__input" id="cid-'+o(e(a&&a.category&&a.category.cid))+'-isSection" data-name="isSection" '+(e(a&&a.category&&a.category.isSection)?"checked":"")+' />\r\n\t\t\t\t\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/manage/categories:is-section]]</strong></span>\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</fieldset>\r\n\t\t\t\t<fieldset>\r\n\t\t\t\t\t<label for="tag-whitelist">Tag Whitelist</label><br />\r\n\t\t\t\t\t<input id="tag-whitelist" type="text" class="form-control" placeholder="Enter category tags here" data-name="tagWhitelist" value="" />\r\n\t\t\t\t</fieldset>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="col-md-3 options acp-sidebar">\r\n\t\t\t<div class="panel panel-default">\r\n\t\t\t\t<div class="panel-body">\r\n\t\t\t\t\t<div class="category-preview" style="\r\n\t\t\t\t\t\t'+(e(a&&a.category&&a.category.backgroundImage)?"background-image: url("+o(e(a&&a.category&&a.category.backgroundImage))+");":"")+"\r\n\t\t\t\t\t\t"+(e(a&&a.category&&a.category.bgColor)?"background-color: "+o(e(a&&a.category&&a.category.bgColor))+";":"")+"\r\n\t\t\t\t\t\t"+(e(a&&a.category&&a.category.imageClass)?"background-size: "+o(e(a&&a.category&&a.category.imageClass))+";":"")+"\r\n\t\t\t\t\t\tcolor: "+o(e(a&&a.category&&a.category.color))+';\r\n\t\t\t\t\t">\r\n\t\t\t\t\t\t<div class="icon">\r\n\t\t\t\t\t\t\t<i data-name="icon" value="'+o(e(a&&a.category&&a.category.icon))+'" class="fa '+o(e(a&&a.category&&a.category.icon))+' fa-2x"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="btn-group btn-group-justified">\r\n\t\t\t\t\t\t<div class="btn-group">\r\n\t\t\t\t\t\t\t<button type="button" data-cid="'+o(e(a&&a.category&&a.category.cid))+'" class="btn btn-default upload-button">\r\n\t\t\t\t\t\t\t\t<i class="fa fa-upload"></i>\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:upload-image]]\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t'+(e(a&&a.category&&a.category.image)?'\r\n\t\t\t\t\t\t<div class="btn-group">\r\n\t\t\t\t\t\t\t<button class="btn btn-warning delete-image">\r\n\t\t\t\t\t\t\t\t<i data-name="icon" value="fa-times" class="fa fa-times"></i>\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:delete-image]]\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t':"")+'\r\n\t\t\t\t\t</div><br />\r\n\r\n\t\t\t\t\t<fieldset>\r\n\t\t\t\t\t\t<div class="form-group text-center">\r\n\t\t\t\t\t\t\t<label for="category-image">\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:category-image]]\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t\t<input id="category-image" type="text" class="form-control" placeholder="[[admin/manage/categories:category-image]]" data-name="image" value="'+o(e(a&&a.category&&a.category.image))+'" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</fieldset>\r\n\r\n\t\t\t\t\t<fieldset>\r\n\t\t\t\t\t\t<div class="form-group text-center">\r\n\t\t\t\t\t\t\t<label for="cid-'+o(e(a&&a.category&&a.category.cid))+'-parentCid">[[admin/manage/categories:parent-category]]</label>\r\n\t\t\t\t\t\t\t<br/>\r\n\t\t\t\t\t\t\t<div class="btn-group '+(e(a&&a.category&&a.category.parent&&a.category.parent.name)?"":"hide")+'">\r\n\t\t\t\t\t\t\t\t<button type="button" class="btn btn-default" data-action="changeParent" data-parentCid="'+o(e(a&&a.category&&a.category.parent&&a.category.parent.cid))+'"><i class="fa '+o(e(a&&a.category&&a.category.parent&&a.category.parent.icon))+'"></i> '+o(e(a&&a.category&&a.category.parent&&a.category.parent.name))+'</button>\r\n\t\t\t\t\t\t\t\t<button type="button" class="btn btn-warning" data-action="removeParent" data-parentCid="'+o(e(a&&a.category&&a.category.parent&&a.category.parent.cid))+'"><i class="fa fa-times"></i></button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<button type="button" class="btn btn-default btn-block '+(e(a&&a.category&&a.category.parent&&a.category.parent.name)?"hide":"")+'" data-action="setParent">\r\n\t\t\t\t\t\t\t\t<i class="fa fa-sitemap"></i>\r\n\t\t\t\t\t\t\t\t[[admin/manage/categories:parent-category-none]]\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</fieldset>\r\n\t\t\t\t\t<hr/>\r\n\t\t\t\t\t<button class="btn btn-info btn-block copy-settings">\r\n\t\t\t\t\t\t<i class="fa fa-files-o"></i> [[admin/manage/categories:copy-settings]]\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<hr />\r\n\t\t\t\t\t<button class="btn btn-danger btn-block purge">\r\n\t\t\t\t\t\t<i class="fa fa-eraser"></i> [[admin/manage/categories:purge]]\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n\r\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\r\n    <i class="material-icons">save</i>\r\n</button>\r\n'}return c.blocks={allCategories:function(t,n,o,a,e){var c=t.__escape;return a(o(n&&n.allCategories),function(t,a,e,r){return'\r\n\t\t\t\t<option value="'+c(o(n&&n.allCategories&&n.allCategories[t]&&n.allCategories[t].value))+'" '+(o(n&&n.allCategories&&n.allCategories[t]&&n.allCategories[t].selected)?"selected":"")+">"+c(o(n&&n.allCategories&&n.allCategories[t]&&n.allCategories[t].text))+"</option>\r\n\t\t\t\t"},function(){return""})}},c});