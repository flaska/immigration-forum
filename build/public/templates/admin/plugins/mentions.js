!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function l(t,s,n,o,e){t.__escape;return'<form role="form" class="mentions-settings">\n\t<div class="row">\n\t\t<div class="col-sm-2 col-xs-12 settings-header">General</div>\n\t\t<div class="col-sm-10 col-xs-12">\n\t\t\t<div class="form-group">\n\t\t\t\t<div class="checkbox">\n\t\t\t\t\t<label for="autofillGroups" class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\n\t\t\t\t\t\t<input type="checkbox" class="mdl-switch__input" id="autofillGroups" name="autofillGroups" />\n\t\t\t\t\t\t<span class="mdl-switch__label">Allow mentioning User Groups</span>\n\t\t\t\t\t</label>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="form-group">\n\t\t\t\t<label for="disableGroupMentions">Select groups you wish to disable mentions</label>\n\t\t\t\t<select class="form-control" id="disableGroupMentions" name="disableGroupMentions" multiple size="20">\n\t\t\t\t\t'+l.blocks.groups(t,s,n,o,e)+'\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</form>\n\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\n\t<i class="material-icons">save</i>\n</button>'}return l.blocks={groups:function(t,e,l,s,n){var i=t.__escape;return s(l(e&&e.groups),function(t,s,n,o){return'\n\t\t\t\t\t<option value="'+i(l(e&&e.groups&&e.groups[t]&&e.groups[t].displayName))+'">'+i(l(e&&e.groups&&e.groups[t]&&e.groups[t].displayName))+"</option>\n\t\t\t\t\t"},function(){return""})}},l});