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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var ResumeService = (function () {
    function ResumeService(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8080/";
    }
    ResumeService.prototype.getResumes = function () {
        return this.http.get(this.baseUrl + "users")
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ResumeService.prototype.getResume = function (userid) {
        return this.http.get(this.baseUrl + "users/" + userid)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ResumeService.prototype.login = function (username, password) {
        return this.http.post(this.baseUrl + "login", { username: username, password: password })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ResumeService.prototype.register = function (credentials) {
        return this.http.post(this.baseUrl + "users/", credentials)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ResumeService.prototype.sendModif = function (credentials, resume) {
        return this.http.put(this.baseUrl + "users/" + resume.userid, Object.assign({}, credentials, resume))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ResumeService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    return ResumeService;
}());
ResumeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ResumeService);
exports.ResumeService = ResumeService;
//# sourceMappingURL=resume.service.js.map