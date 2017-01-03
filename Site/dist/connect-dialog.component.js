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
var resume_1 = require("./resume");
var ConnectDialog = (function () {
    function ConnectDialog(dialogRef) {
        this.dialogRef = dialogRef;
        this.data = new resume_1.Credentials();
    }
    return ConnectDialog;
}());
ConnectDialog = __decorate([
    core_1.Component({
        selector: 'connect-dialog',
        templateUrl: 'templates/connect-dialog.component.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], ConnectDialog);
exports.ConnectDialog = ConnectDialog;
//# sourceMappingURL=connect-dialog.component.js.map