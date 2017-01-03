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
var dialogs_service_1 = require("./dialogs.service");
var resume_service_1 = require("./resume.service");
var credentials_service_1 = require("./credentials.service");
var AppComponent = (function () {
    function AppComponent(dialogsService, resumeService, credentialsService, router, viewContainerRef) {
        var _this = this;
        this.dialogsService = dialogsService;
        this.resumeService = resumeService;
        this.credentialsService = credentialsService;
        this.router = router;
        this.viewContainerRef = viewContainerRef;
        this.title = 'CV Site Example';
        this.subscription = credentialsService.credentialsSource.subscribe(function (credentials) { return _this.credentials = credentials; });
    }
    AppComponent.prototype.openConnectDialog = function () {
        var _this = this;
        this.dialogsService
            .connect(this.viewContainerRef)
            .subscribe(function (data) {
            if (data) {
                _this.resumeService.login(data.username, data.password)
                    .then(function (credentials) { return _this.credentialsService.setCredentials(credentials); })
                    .catch(function (err) { return _this.credentialsService.setCredentials(null); });
            }
        });
    };
    AppComponent.prototype.openRegisterDialog = function () {
        var _this = this;
        this.dialogsService
            .register(this.viewContainerRef)
            .subscribe(function (data) {
            if (data) {
                _this.openConnectDialog();
            }
        });
    };
    AppComponent.prototype.disconnect = function () {
        this.credentialsService.setCredentials(null);
        this.router.navigate(['/resume']);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'templates/app.component.html',
        providers: [credentials_service_1.CredentialsService]
    }),
    __metadata("design:paramtypes", [dialogs_service_1.DialogsService,
        resume_service_1.ResumeService,
        credentials_service_1.CredentialsService,
        router_1.Router,
        core_1.ViewContainerRef])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map