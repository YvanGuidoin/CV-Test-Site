"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var KeywordsComponent = (function () {
    function KeywordsComponent() {
        this.editable = false;
        this.modify = new core_1.EventEmitter();
        this.newKeyword = "";
    }
    KeywordsComponent.prototype.deleteKeywork = function (keyword) {
        var index = this.keywords.indexOf(keyword);
        if (index != -1)
            this.keywords.splice(index, 1);
        this.modify.emit(this.keywords);
    };
    KeywordsComponent.prototype.addKeyword = function () {
        if (this.newKeyword.length > 0) {
            this.keywords.push(this.newKeyword);
            this.newKeyword = "";
            this.modify.emit(this.keywords);
        }
    };
    return KeywordsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], KeywordsComponent.prototype, "keywords", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], KeywordsComponent.prototype, "editable", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], KeywordsComponent.prototype, "modify", void 0);
KeywordsComponent = __decorate([
    core_1.Component({
        selector: 'keywords',
        templateUrl: 'templates/keywords.component.html'
    }),
    __metadata("design:paramtypes", [])
], KeywordsComponent);
exports.KeywordsComponent = KeywordsComponent;
