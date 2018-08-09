!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function l(t,n,s,e,i){return'<div class="settings">\r\n\t<div class="row">\r\n\t\t<div class="col-sm-2 col-xs-12 content-header">\r\n\t\t\t[[admin/admin:settings-header-contents]]\r\n\t\t</div>\r\n\t\t<div class="col-sm-10 col-xs-12">\r\n\t\t\t<nav class="section-content">\r\n\t\t\t\t<ul></ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/user:authentication]]</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<form role="form">\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="allowLocalLogin" checked>\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/user:allow-local-login]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="requireEmailConfirmation">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/user:require-email-confirmation]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="form-group form-inline">\r\n\t\t\t\t<label for="emailConfirmInterval">[[admin/settings/user:email-confirm-interval]]</label>\r\n\t\t\t\t<input class="form-control" data-field="emailConfirmInterval" type="number" id="emailConfirmInterval" placeholder="Default: 10"\r\n\t\t\t\t\tvalue="10" />\r\n\t\t\t\t<label for="emailConfirmInterval">[[admin/settings/user:email-confirm-email2]]</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label>[[admin/settings/user:allow-login-with]]</label>\r\n\t\t\t\t<select class="form-control" data-field="allowLoginWith">\r\n\t\t\t\t\t<option value="username-email">[[admin/settings/user:allow-login-with.username-email]]</option>\r\n\t\t\t\t\t<option value="username">[[admin/settings/user:allow-login-with.username]]</option>\r\n\t\t\t\t\t<option value="email">[[admin/settings/user:allow-login-with.email]]</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/user:account-settings]]</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<form>\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="username:disableEdit">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/user:disable-username-changes]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="email:disableEdit">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/user:disable-email-changes]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="password:disableEdit">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/user:disable-password-changes]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="allowAccountDelete" checked>\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/user:allow-account-deletion]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="privateUserInfo">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/user:user-info-private]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="hideFullname">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/user:hide-fullname]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="hideEmail">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/user:hide-email]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/user:themes]]</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<form>\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="disableCustomUserSkins">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/user:disable-user-skins]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/user:account-protection]]</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<form>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label for="adminReloginDuration">[[admin/settings/user:admin-relogin-duration]]</label>\r\n\t\t\t\t<input id="adminReloginDuration" type="text" class="form-control" data-field="adminReloginDuration" placeholder="60" />\r\n\t\t\t\t<p class="help-block">\r\n\t\t\t\t\t[[admin/settings/user:admin-relogin-duration-help]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label for="loginAttempts">[[admin/settings/user:login-attempts]]</label>\r\n\t\t\t\t<input id="loginAttempts" type="text" class="form-control" data-field="loginAttempts" placeholder="5" />\r\n\t\t\t\t<p class="help-block">\r\n\t\t\t\t\t[[admin/settings/user:login-attempts-help]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label for="lockoutDuration">[[admin/settings/user:lockout-duration]]</label>\r\n\t\t\t\t<input id="lockoutDuration" type="text" class="form-control" data-field="lockoutDuration" placeholder="60" />\r\n\t\t\t</div>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label>[[admin/settings/user:password-expiry-days]]</label>\r\n\t\t\t\t<input type="text" class="form-control" data-field="passwordExpiryDays" placeholder="0" />\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">\r\n\t\tSession time\r\n\t</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<form>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label>Days: </label>\r\n\t\t\t\t<input type="text" class="form-control" data-field="loginDays" placeholder="Days" />\r\n\t\t\t\t<label>Seconds: </label>\r\n\t\t\t\t<input type="text" class="form-control" data-field="loginSeconds" placeholder="Seconds" />\r\n\t\t\t\t<p class="help-block">Note that only one of these values will be used. If there is no <i>seconds</i> value we fall back to <i>days</i>. If\r\n\t\t\t\t\tthere is no <i>days</i> value we default to <i>14 days</i>.</p>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/user:registration]]</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<form>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label>[[admin/settings/user:registration-type]]</label>\r\n\t\t\t\t<select class="form-control" data-field="registrationType">\r\n\t\t\t\t\t<option value="normal">[[admin/settings/user:registration-type.normal]]</option>\r\n\t\t\t\t\t<option value="admin-approval">[[admin/settings/user:registration-type.admin-approval]]</option>\r\n\t\t\t\t\t<option value="admin-approval-ip">[[admin/settings/user:registration-type.admin-approval-ip]]</option>\r\n\t\t\t\t\t<option value="invite-only">[[admin/settings/user:registration-type.invite-only]]</option>\r\n\t\t\t\t\t<option value="admin-invite-only">[[admin/settings/user:registration-type.admin-invite-only]]</option>\r\n\t\t\t\t\t<option value="disabled">[[admin/settings/user:registration-type.disabled]]</option>\r\n\t\t\t\t</select>\r\n\t\t\t\t<p class="help-block">\r\n\t\t\t\t\t[[admin/settings/user:registration-type.help, '+(0,t.__escape)(s(n&&n.config&&n.config.relative_path))+']]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label>[[admin/settings/user:max-invites]]</label>\r\n\t\t\t\t<input type="number" class="form-control" data-field="maximumInvites" placeholder="0">\r\n\t\t\t\t<p class="help-block">\r\n\t\t\t\t\t[[admin/settings/user:max-invites-help]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label>[[admin/settings/user:invite-expiration]]</label>\r\n\t\t\t\t<input type="number" class="form-control" data-field="inviteExpiration" placeholder="7">\r\n\t\t\t\t<p class="help-block">\r\n\t\t\t\t\t[[admin/settings/user:invite-expiration-help]]\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label>[[admin/settings/user:min-username-length]]</label>\r\n\t\t\t\t<input type="text" class="form-control" value="2" data-field="minimumUsernameLength">\r\n\t\t\t</div>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label>[[admin/settings/user:max-username-length]]</label>\r\n\t\t\t\t<input type="text" class="form-control" value="16" data-field="maximumUsernameLength">\r\n\t\t\t</div>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label>[[admin/settings/user:min-password-length]]</label>\r\n\t\t\t\t<input type="text" class="form-control" value="6" data-field="minimumPasswordLength">\r\n\t\t\t</div>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label>[[admin/settings/user:min-password-strength]]</label>\r\n\t\t\t\t<select class="form-control" data-field="minimumPasswordStrength">\r\n\t\t\t\t\t<option value="0">0 - too guessable: risky password</option>\r\n\t\t\t\t\t<option value="1">1 - very guessable</option>\r\n\t\t\t\t\t<option value="2">2 - somewhat guessable</option>\r\n\t\t\t\t\t<option value="3">3 - safely unguessable</option>\r\n\t\t\t\t\t<option value="4">4 - very unguessable</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label>[[admin/settings/user:max-about-me-length]]</label>\r\n\t\t\t\t<input type="text" class="form-control" value="500" data-field="maximumAboutMeLength">\r\n\t\t\t</div>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label>[[admin/settings/user:terms-of-use]]</label>\r\n\t\t\t\t<textarea class="form-control" data-field="termsOfUse"></textarea>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/user:user-search]]</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<form>\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label>[[admin/settings/user:user-search-results-per-page]]</label>\r\n\t\t\t\t<input type="text" class="form-control" value="24" data-field="userSearchResultsPerPage">\r\n\t\t\t</div>\r\n\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/user:default-user-settings]]</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<form>\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="showemail">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/user:show-email]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="showfullname">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/user:show-fullname]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="restrictChat">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/user:restrict-chat]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="openOutgoingLinksInNewTab">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/user:outgoing-new-tab]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="topicSearchEnabled">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/user:topic-search]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label>[[admin/settings/user:digest-freq]]</label>\r\n\t\t\t\t<select class="form-control" data-field="dailyDigestFreq">\r\n\t\t\t\t\t<option value="off">[[admin/settings/user:digest-freq.off]]</option>\r\n\t\t\t\t\t<option value="day">[[admin/settings/user:digest-freq.daily]]</option>\r\n\t\t\t\t\t<option value="week">[[admin/settings/user:digest-freq.weekly]]</option>\r\n\t\t\t\t\t<option value="month">[[admin/settings/user:digest-freq.monthly]]</option>\r\n\t\t\t\t</select>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="followTopicsOnCreate">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/user:follow-created-topics]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="followTopicsOnReply">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/user:follow-replied-topics]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<label>[[admin/settings/user:default-notification-settings]]</label>\r\n\r\n\t\t\t'+l.blocks.notificationSettings(t,n,s,e,i)+'\r\n\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n</div>\r\n\r\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\r\n\t<i class="material-icons">save</i>\r\n</button>\r\n\r\n<script>\r\n\trequire([\'admin/settings\'], function(Settings) {\r\n\t\tSettings.prepare();\r\n\t\tSettings.populateTOC();\r\n\t});\r\n<\/script>\r\n'}return l.blocks={notificationSettings:function(t,i,l,n,s){var r=t.__escape;return n(l(i&&i.notificationSettings),function(t,n,s,e){return'\r\n\t\t\t<div class="row">\r\n\t\t\t\t<div class="form-group col-xs-7">\r\n\t\t\t\t\t<label>'+r(l(i&&i.notificationSettings&&i.notificationSettings[t]&&i.notificationSettings[t].label))+'</label>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="form-group col-xs-5">\r\n\t\t\t\t\t<select class="form-control" data-field="'+r(l(i&&i.notificationSettings&&i.notificationSettings[t]&&i.notificationSettings[t].name))+'">\r\n\t\t\t\t\t\t<option value="none">[[notifications:none]]</option>\r\n\t\t\t\t\t\t<option value="notification">[[notifications:notification_only]]</option>\r\n\t\t\t\t\t\t<option value="email">[[notifications:email_only]]</option>\r\n\t\t\t\t\t\t<option value="notificationemail">[[notifications:notification_and_email]]</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t'},function(){return""})}},l});