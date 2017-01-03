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
var router_1 = require("@angular/router");
var resume_service_1 = require("./resume.service");
var BaseComponent = (function () {
    function BaseComponent(resumeService, router) {
        this.resumeService = resumeService;
        this.router = router;
    }
    BaseComponent.prototype.getResumes = function () {
        var _this = this;
        this.resumeService.getResumes()
            .then(function (resumes) { return _this.resumes = resumes; });
    };
    BaseComponent.prototype.onSelect = function (resume) {
        this.router.navigate(['/resume', resume.userid]);
    };
    BaseComponent.prototype.ngOnInit = function () {
        this.getResumes();
    };
    return BaseComponent;
}());
BaseComponent = __decorate([
    core_1.Component({
        selector: 'base',
        templateUrl: 'templates/base.component.html'
    }),
    __metadata("design:paramtypes", [resume_service_1.ResumeService,
        router_1.Router])
], BaseComponent);
exports.BaseComponent = BaseComponent;
