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
var connect_dialog_component_1 = require("./connect-dialog.component");
var register_dialog_component_1 = require("./register-dialog.component");
var material_1 = require("@angular/material");
var core_1 = require("@angular/core");
var DialogsService = (function () {
    function DialogsService(dialog) {
        this.dialog = dialog;
    }
    DialogsService.prototype.connect = function (viewContainerRef) {
        var dialogRef;
        var config = new material_1.MdDialogConfig();
        config.viewContainerRef = viewContainerRef;
        dialogRef = this.dialog.open(connect_dialog_component_1.ConnectDialog, config);
        return dialogRef.afterClosed();
    };
    DialogsService.prototype.register = function (viewContainerRef) {
        var dialogRef;
        var config = new material_1.MdDialogConfig();
        config.viewContainerRef = viewContainerRef;
        dialogRef = this.dialog.open(register_dialog_component_1.RegisterDialog, config);
        return dialogRef.afterClosed();
    };
    return DialogsService;
}());
DialogsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [material_1.MdDialog])
], DialogsService);
exports.DialogsService = DialogsService;
