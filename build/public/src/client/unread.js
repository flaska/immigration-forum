"use strict";define("forum/unread",["forum/recent","topicSelect","forum/infinitescroll","components"],function(t,e,o,a){var n={};$(window).on("action:ajaxify.start",function(e,o){if(ajaxify.currentPage!==o.url){t.removeListeners()}});n.init=function(){app.enterRoom("unread_topics");$("#new-topics-alert").on("click",function(){$(this).addClass("hide")});t.watchForNewPosts();t.handleCategorySelection();$(window).trigger("action:topics.loaded",{topics:ajaxify.data.topics});$("#markSelectedRead").on("click",function(){var t=e.getSelectedTids();if(!t.length){return}socket.emit("topics.markAsRead",t,function(e){if(e){return app.alertError(e.message)}i(t)})});$("#markAllRead").on("click",function(){socket.emit("topics.markAllRead",function(t){if(t){return app.alertError(t.message)}app.alertSuccess("[[unread:topics_marked_as_read.success]]");$('[component="category"]').empty();$('[component="pagination"]').addClass("hidden");$("#category-no-topics").removeClass("hidden");$(".markread").addClass("hidden")})});$(".markread").on("click",".category",function(){function t(t){var e=[];a.get("category/topic","cid",t).each(function(){e.push($(this).attr("data-tid"))});return e}var e=$(this).attr("data-cid");var o=t(e);socket.emit("topics.markCategoryTopicsRead",e,function(t){if(t){return app.alertError(t.message)}i(o)})});e.init();if($("body").height()<=$(window).height()&&$('[component="category"]').children().length>=20){$("#load-more-btn").show()}$("#load-more-btn").on("click",function(){n()});if(!config.usePagination){o.init(n)}function n(e){if(e<0||!$('[component="category"]').length){return}o.loadMore("topics.loadMoreUnreadTopics",{after:$('[component="category"]').attr("data-nextstart"),count:config.topicsPerPage,cid:utils.params().cid,filter:ajaxify.data.selectedFilter.filter},function(o,a){if(o.topics&&o.topics.length){t.onTopicsLoaded("unread",o.topics,true,e,a);$('[component="category"]').attr("data-nextstart",o.nextStart)}else{a();$("#load-more-btn").hide()}})}};function i(t){r(t);app.alertSuccess("[[unread:topics_marked_as_read.success]]");if(!$('[component="category"]').children().length){$("#category-no-topics").removeClass("hidden");$(".markread").addClass("hidden")}}function r(t){for(var e=0;e<t.length;e+=1){a.get("category/topic","tid",t[e]).remove()}}return n});
//# sourceMappingURL=public/src/client/unread.js.map