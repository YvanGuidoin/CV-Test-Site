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
var material_1 = require("@angular/material");
var core_1 = require("@angular/core");
var resume_service_1 = require("./resume.service");
var resume_1 = require("./resume");
var RegisterDialog = (function () {
    function RegisterDialog(dialogRef, resumeService) {
        this.dialogRef = dialogRef;
        this.resumeService = resumeService;
        this.data = new resume_1.Credentials();
        this.passwordDouble = "";
        this.usernameTaken = false;
    }
    RegisterDialog.prototype.onSubmit = function () {
        var _this = this;
        this.resumeService.register(this.data)
            .then(function (data) {
            if (data.usernameTaken)
                _this.usernameTaken = true;
            else {
                _this.usernameTaken = false;
                _this.dialogRef.close(_this.data);
            }
        });
    };
    return RegisterDialog;
}());
RegisterDialog = __decorate([
    core_1.Component({
        selector: 'register-dialog',
        templateUrl: 'templates/register-dialog.component.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef,
        resume_service_1.ResumeService])
], RegisterDialog);
exports.RegisterDialog = RegisterDialog;
//# sourceMappingURL=register-dialog.component.js.map