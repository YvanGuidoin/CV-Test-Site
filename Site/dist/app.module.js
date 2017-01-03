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
var platform_browser_1 = require("@angular/platform-browser");
var material_1 = require("@angular/material");
var flex_layout_1 = require("@angular/flex-layout");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var about_component_1 = require("./about.component");
var base_component_1 = require("./base.component");
var resume_component_1 = require("./resume.component");
var job_component_1 = require("./job.component");
var keywords_component_1 = require("./keywords.component");
var qualif_component_1 = require("./qualif.component");
var datepretty_component_1 = require("./datepretty.component");
var modify_component_1 = require("./modify.component");
var connect_dialog_component_1 = require("./connect-dialog.component");
var register_dialog_component_1 = require("./register-dialog.component");
var resume_service_1 = require("./resume.service");
var dialogs_service_1 = require("./dialogs.service");
var routes = [
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'resume',
        component: base_component_1.BaseComponent
    },
    {
        path: '',
        redirectTo: 'resume',
        pathMatch: 'full'
    },
    {
        path: 'resume/:userid',
        component: resume_component_1.ResumeComponent
    },
    {
        path: 'modify/:userid',
        component: modify_component_1.ModifyComponent
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            material_1.MaterialModule.forRoot(),
            flex_layout_1.FlexLayoutModule.forRoot(),
            router_1.RouterModule.forRoot(routes)
        ],
        exports: [
            router_1.RouterModule,
            connect_dialog_component_1.ConnectDialog,
            register_dialog_component_1.RegisterDialog
        ],
        declarations: [
            app_component_1.AppComponent,
            about_component_1.AboutComponent,
            base_component_1.BaseComponent,
            resume_component_1.ResumeComponent,
            job_component_1.JobComponent,
            keywords_component_1.KeywordsComponent,
            qualif_component_1.QualificationComponent,
            datepretty_component_1.DatePrettyComponent,
            connect_dialog_component_1.ConnectDialog,
            register_dialog_component_1.RegisterDialog,
            modify_component_1.ModifyComponent
        ],
        entryComponents: [
            connect_dialog_component_1.ConnectDialog,
            register_dialog_component_1.RegisterDialog
        ],
        providers: [
            resume_service_1.ResumeService,
            dialogs_service_1.DialogsService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map