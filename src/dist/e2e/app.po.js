"use strict";
var protractor_1 = require("protractor");
var TodoAppPage = (function () {
    function TodoAppPage() {
    }
    TodoAppPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    TodoAppPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return TodoAppPage;
}());
exports.TodoAppPage = TodoAppPage;
//# sourceMappingURL=app.po.js.map