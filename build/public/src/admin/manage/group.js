"use strict";define("admin/manage/group",["forum/groups/memberlist","iconSelect","admin/modules/colorpicker"],function(e,a,r){var n={};n.init=function(){var n=$("#group-icon");var i=$("#change-group-user-title");var o=$("#change-group-label-color");var t=$("#group-label-preview");var s=ajaxify.data.group.name;$("#group-selector").on("change",function(){ajaxify.go("admin/manage/groups/"+$(this).val()+window.location.hash)});e.init("admin/manage/group");i.keyup(function(){t.text(i.val())});o.keyup(function(){t.css("background",o.val()||"#000000")});$('[component="groups/members"]').on("click","[data-action]",function(){var e=$(this);var a=e.parents("[data-uid]");var r=a.find(".member-name .user-owner-icon");var n=!r.hasClass("invisible");var i=a.attr("data-uid");var o=e.attr("data-action");switch(o){case"toggleOwnership":socket.emit("groups."+(n?"rescind":"grant"),{toUid:i,groupName:s},function(e){if(e){return app.alertError(e.message)}r.toggleClass("invisible")});break;case"kick":bootbox.confirm("[[admin/manage/groups:edit.confirm-remove-user]]",function(e){if(!e){return}socket.emit("admin.groups.leave",{uid:i,groupName:s},function(e){if(e){return app.alertError(e.message)}a.slideUp().remove()})});break;default:break}});$("#group-icon").on("click",function(){a.init(n)});r.enable(o,function(e,a){t.css("background-color","#"+a)});$("#save").on("click",function(){socket.emit("admin.groups.update",{groupName:s,values:{name:$("#change-group-name").val(),userTitle:i.val(),description:$("#change-group-desc").val(),icon:n.attr("value"),labelColor:o.val(),userTitleEnabled:$("#group-userTitleEnabled").is(":checked"),private:$("#group-private").is(":checked"),hidden:$("#group-hidden").is(":checked"),disableJoinRequests:$("#group-disableJoinRequests").is(":checked")}},function(e){if(e){return app.alertError(e.message)}var a=$("#change-group-name").val();if(s===a){app.alertSuccess("[[admin/manage/groups:edit.save-success]]")}else{ajaxify.go("admin/manage/groups/"+encodeURIComponent(a),undefined,true)}});return false})};return n});
//# sourceMappingURL=public/src/admin/manage/group.js.map