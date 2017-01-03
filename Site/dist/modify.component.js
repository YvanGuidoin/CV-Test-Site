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
var resume_1 = require("./resume");
var resume_service_1 = require("./resume.service");
require("rxjs/add/operator/switchMap");
var ModifyComponent = (function () {
    function ModifyComponent(resumeService, router, route) {
        this.resumeService = resumeService;
        this.router = router;
        this.route = route;
        this.genders = [
            { value: "M", title: "Male" },
            { value: "F", title: "Female" }
        ];
        this.newJob = new resume_1.Job();
        this.newQualif = new resume_1.Qualification();
    }
    ModifyComponent.prototype.printGender = function (gender) {
        return (gender == "M") ? ", Male" : (gender == "M") ? ", Female" : "";
    };
    ModifyComponent.prototype.deleteJob = function (job) {
        var index = this.resume.past_jobs.indexOf(job);
        if (index != -1)
            this.resume.past_jobs.splice(index, 1);
    };
    ModifyComponent.prototype.addNewJob = function () {
        this.resume.past_jobs.push(this.newJob);
        this.newJob = new resume_1.Job();
    };
    ModifyComponent.prototype.deleteQualif = function (qualif) {
        var index = this.resume.qualifications.indexOf(qualif);
        if (index != -1)
            this.resume.qualifications.splice(index, 1);
    };
    ModifyComponent.prototype.addNewQualif = function () {
        this.resume.qualifications.push(this.newQualif);
        this.newQualif = new resume_1.Qualification();
    };
    ModifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            return _this.resumeService.getResume(params['userid']);
        })
            .subscribe(function (resume) { return _this.resume = resume; });
    };
    ModifyComponent.prototype.save = function () {
        var _this = this;
        this.resumeService.sendModif(this.resume.userid, this.resume)
            .then(function (response) {
            console.log(response);
            _this.router.navigate(['/resume', _this.resume.userid]);
        }).catch(function (err) {
            console.log(err);
            _this.router.navigate(['/resume', _this.resume.userid]);
        });
    };
    ModifyComponent.prototype.cancel = function () {
        this.router.navigate(['/resume', this.resume.userid]);
    };
    return ModifyComponent;
}());
ModifyComponent = __decorate([
    core_1.Component({
        selector: 'modify',
        templateUrl: 'templates/modify.component.html'
    }),
    __metadata("design:paramtypes", [resume_service_1.ResumeService,
        router_1.Router,
        router_1.ActivatedRoute])
], ModifyComponent);
exports.ModifyComponent = ModifyComponent;
//# sourceMappingURL=modify.component.js.map