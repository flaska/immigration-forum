!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function a(t,r,e,s,n){var o=t.__escape;return'<div class="row">\n\t'+(e(r&&r.group&&r.group.isOwner)?'\n\t<div class="col-lg-2">\n\t\t<button component="groups/members/add" type="button" class="btn btn-primary" title="[[groups:details.add-member]]"><i class="fa fa-user-plus"></i></button>\n\t</div>\n\t':"")+'\n\t<div class="'+(e(r&&r.group&&r.group.isOwner)?"col-lg-10":"col-lg-12")+'">\n\t\t<div class="input-group">\n\t\t\t<input class="form-control" type="text" component="groups/members/search" placeholder="[[global:search]]"/>\n\t\t\t<span class="input-group-addon search-button"><i class="fa fa-search"></i></span>\n\t\t</div>\n\t</div>\n</div>\n\n<table component="groups/members" class="table table-striped table-hover" data-nextstart="'+o(e(r&&r.group&&r.group.membersNextStart))+'">\n\t<tbody>\n\t'+a.blocks["group.members"](t,r,e,s,n)+"\n\t</tbody>\n</table>"}return a.blocks={"group.members":function(t,n,o,r,e){var a=t.__escape;return r(o(n&&n.group&&n.group.members),function(t,r,e,s){return'\n\t<tr data-uid="'+a(o(n&&n.group&&n.group.members&&n.group.members[t]&&n.group.members[t].uid))+'">\n\t\t<td>\n\t\t\t<a href="'+a(o(n&&n.config&&n.config.relative_path))+"/user/"+a(o(n&&n.group&&n.group.members&&n.group.members[t]&&n.group.members[t].userslug))+'">\n\t\t\t\t'+(o(n&&n.group&&n.group.members&&n.group.members[t]&&n.group.members[t].picture)?'\n\t\t\t\t<img class="avatar avatar-sm avatar-rounded" src="'+a(o(n&&n.group&&n.group.members&&n.group.members[t]&&n.group.members[t].picture))+'" />\n\t\t\t\t':'\n\t\t\t\t<div class="avatar avatar-sm avatar-rounded" style="background-color: '+a(o(n&&n.group&&n.group.members&&n.group.members[t]&&n.group.members[t]["icon:bgColor"]))+';">'+a(o(n&&n.group&&n.group.members&&n.group.members[t]&&n.group.members[t]["icon:text"]))+"</div>\n\t\t\t\t")+'\n\t\t\t</a>\n\t\t</td>\n\t\t<td class="member-name">\n\t\t\t<a href="'+a(o(n&&n.config&&n.config.relative_path))+"/user/"+a(o(n&&n.group&&n.group.members&&n.group.members[t]&&n.group.members[t].userslug))+'">'+a(o(n&&n.group&&n.group.members&&n.group.members[t]&&n.group.members[t].username))+'</a> <i title="[[groups:owner]]" class="fa fa-star text-warning '+(o(n&&n.group&&n.group.members&&n.group.members[t]&&n.group.members[t].isOwner)?"":"invisible")+'"></i>\n\n\t\t\t'+(o(n&&n.group&&n.group.isOwner)?'\n\t\t\t<div class="owner-controls btn-group pull-right">\n\t\t\t\t<a class="btn btn-sm" href="#" data-ajaxify="false" data-action="toggleOwnership" title="[[groups:details.grant]]">\n\t\t\t\t\t<i class="fa fa-star"></i>\n\t\t\t\t</a>\n\n\t\t\t\t<a class="btn btn-sm" href="#" data-ajaxify="false" data-action="kick" title="[[groups:details.kick]]">\n\t\t\t\t\t<i class="fa fa-ban"></i>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t':"")+"\n\t\t</td>\n\t</tr>\n\t"},function(){return""})}},a});