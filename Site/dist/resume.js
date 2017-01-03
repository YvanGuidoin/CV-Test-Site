"use strict";
var Job = (function () {
    function Job() {
        this.keywords = [];
    }
    return Job;
}());
exports.Job = Job;
;
var Qualification = (function () {
    function Qualification() {
        this.keywords = [];
    }
    return Qualification;
}());
exports.Qualification = Qualification;
;
var Resume = (function () {
    function Resume() {
        this.qualifications = [];
        this.past_jobs = [];
        this.keywords = [];
    }
    return Resume;
}());
exports.Resume = Resume;
var Credentials = (function () {
    function Credentials() {
    }
    return Credentials;
}());
exports.Credentials = Credentials;
//# sourceMappingURL=resume.js.map