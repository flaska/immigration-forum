!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){function s(e,r,a,i,c){return'<ul data-cid="'+(0,e.__escape)(a(r&&r.cid))+'">\r\n'+s.blocks.categories(e,r,a,i,c)+'\r\n<li class="children-placeholder"></li>\r\n</ul>\r\n'}return s.blocks={categories:function(e,c,s,r,a){var n=e.__escape;return r(s(c&&c.categories),function(e,r,a,i){return'\r\n    <li data-cid="'+n(s(c&&c.categories&&c.categories[e]&&c.categories[e].cid))+'" '+(s(c&&c.categories&&c.categories[e]&&c.categories[e].disabled)?'class="disabled"':"")+'>\r\n        <div class="row">\r\n            <div class="col-md-9">\r\n                <div class="clearfix">\r\n                    <div class="toggle">\r\n                        <i class="fa fa-minus"></i>\r\n                    </div>\r\n                    <div class="icon" style="\r\n                        color: '+n(s(c&&c.categories&&c.categories[e]&&c.categories[e].color))+";\r\n                        background-color: "+n(s(c&&c.categories&&c.categories[e]&&c.categories[e].bgColor))+";\r\n                        "+(s(c&&c.categories&&c.categories[e]&&c.categories[e].backgroundImage)?"\r\n                        background-image: url('"+n(s(c&&c.categories&&c.categories[e]&&c.categories[e].backgroundImage))+"');\r\n                        ":"")+'\r\n                    ">\r\n                        <i data-name="icon" value="'+n(s(c&&c.categories&&c.categories[e]&&c.categories[e].icon))+'" class="fa '+n(s(c&&c.categories&&c.categories[e]&&c.categories[e].icon))+'"></i>\r\n                    </div>\r\n                    <div class="information">\r\n                        <h5 class="category-header">'+n(s(c&&c.categories&&c.categories[e]&&c.categories[e].name))+'</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="col-md-3">\r\n                <div class="clearfix pull-right text-right">\r\n                    <div class="btn-group">\r\n                        <button data-cid="'+n(s(c&&c.categories&&c.categories[e]&&c.categories[e].cid))+'" data-action="toggle" data-disabled="'+n(s(c&&c.categories&&c.categories[e]&&c.categories[e].disabled))+'" class="btn btn-sm '+(s(c&&c.categories&&c.categories[e]&&c.categories[e].disabled)?"btn-primary":"btn-danger")+'">\r\n                            '+(s(c&&c.categories&&c.categories[e]&&c.categories[e].disabled)?"\r\n                            [[admin/manage/categories:enable]]\r\n                            ":"\r\n                            [[admin/manage/categories:disable]]\r\n                            ")+'\r\n                        </button>\r\n                        <a href="./categories/'+n(s(c&&c.categories&&c.categories[e]&&c.categories[e].cid))+'/analytics" class="btn btn-default btn-sm">\r\n                            <i class="fa fa-line-chart"></i>\r\n                        </a>\r\n                        <a href="./categories/'+n(s(c&&c.categories&&c.categories[e]&&c.categories[e].cid))+'" class="btn btn-default btn-sm">\r\n                            [[admin/manage/categories:edit]]\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </li>\r\n'},function(){return""})}},s});