"use strict";define("forum/topic/fork",["components","postSelect"],function(t,i){var o={};var n;var e;o.init=function(){$(".topic").on("click",'[component="topic/fork"]',c);$(window).on("action:ajaxify.start",a)};function a(){d();$(window).off("action:ajaxify.start",a)}function c(){app.parseAndTranslate("partials/fork_thread_modal",{},function(t){n=t;e=n.find("#fork_thread_commit");$(document.body).append(n);n.find(".close,#fork_thread_cancel").on("click",d);n.find("#fork-title").on("keyup",s);i.init(function(){s();f()});f();e.on("click",r)})}function r(){e.attr("disabled",true);socket.emit("topics.createTopicFromPosts",{title:n.find("#fork-title").val(),pids:i.pids,fromTid:ajaxify.data.tid},function(o,n){function a(i){t.get("post","pid",i).fadeOut(500,function(){$(this).remove()})}e.removeAttr("disabled");if(o){return app.alertError(o.message)}app.alert({timeout:5e3,title:"[[global:alert.success]]",message:"[[topic:fork_success]]",type:"success",clickfn:function(){ajaxify.go("topic/"+n.slug)}});i.pids.forEach(function(t){a(t)});d()})}function f(){if(i.pids.length){n.find("#fork-pids").translateHtml("[[topic:fork_pid_count, "+i.pids.length+"]]")}else{n.find("#fork-pids").translateHtml("[[topic:fork_no_pids]]")}}function s(){if(n.find("#fork-title").val().length&&i.pids.length){e.removeAttr("disabled")}else{e.attr("disabled",true)}}function d(){if(n){n.remove();n=null}i.disable()}return o});
//# sourceMappingURL=public/src/client/topic/fork.js.map