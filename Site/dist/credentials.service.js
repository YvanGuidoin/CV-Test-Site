"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var CredentialsService = (function () {
    function CredentialsService() {
        this.credentialsSource = new Subject_1.Subject();
    }
    CredentialsService.prototype.setCredentials = function (cred) {
        this.lastCredentials = cred;
        this.credentialsSource.next(cred);
    };
    CredentialsService.prototype.getLastCredentials = function () {
        return this.lastCredentials;
    };
    return CredentialsService;
}());
CredentialsService = __decorate([
    core_1.Injectable()
], CredentialsService);
exports.CredentialsService = CredentialsService;
