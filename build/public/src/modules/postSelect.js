"use strict";define("postSelect",["components"],function(t){var i={};i.pids=[];i.init=function(s){i.pids.length=0;t.get("topic").on("click","[data-pid]",function(){i.togglePostSelection($(this),s)});e()};i.disable=function(){i.pids.forEach(function(i){t.get("post","pid",i).toggleClass("bg-success",false)});t.get("topic").off("click","[data-pid]");n()};i.togglePostSelection=function(t,s){var e=t.attr("data-pid");if(parseInt(t.attr("data-index"),10)===0){return}if(e){var n=i.pids.indexOf(e);if(n===-1){i.pids.push(e);t.toggleClass("bg-success",true)}else{i.pids.splice(n,1);t.toggleClass("bg-success",false)}if(i.pids.length){i.pids.sort(function(t,i){return t-i})}s()}};function s(){return false}function e(){t.get("post").on("click","button,a",s)}function n(){t.get("post").off("click","button,a",s)}return i});
//# sourceMappingURL=public/src/modules/postSelect.js.map