(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-tasks/add-tasks.component.css":
/*!***************************************************!*\
  !*** ./src/app/add-tasks/add-tasks.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".labelClass {\r\n    width: 15%;\r\n  }\r\n  \r\n  .textClass {\r\n    width: 40%;\r\n  }\r\n  \r\n  .form-group {\r\n    display: flex;\r\n  }\r\n  \r\n  .BottomMargin {\r\n    margin-bottom: 1%;\r\n  }\r\n  \r\n  .alertDanger {\r\n    color: #a94442;\r\n    padding-left: 15px;\r\n  }\r\n  \r\n  .slider {\r\n    margin-top: 8px;\r\n    -webkit-appearance: none;\r\n    width: 51%;\r\n    height: 5px;\r\n    border-radius: 5px;\r\n    margin-right: 1%;\r\n    background: #ddd;\r\n    outline: none;\r\n    opacity: 0.7;\r\n    transition: opacity .2s;\r\n  }\r\n  \r\n  .slider:hover {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .slider::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    width: 13px;\r\n    height: 13px;\r\n    border-radius: 50%;\r\n    background: gray;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .slider::-moz-range-thumb {\r\n    width: 13px;\r\n    height: 13px;\r\n    border-radius: 50%;\r\n    background: gray;\r\n    cursor: pointer;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/add-tasks/add-tasks.component.html":
/*!****************************************************!*\
  !*** ./src/app/add-tasks/add-tasks.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form #addTaskForm=\"ngForm\">\r\n    <h6 id=\"userMsg\"></h6>\r\n    <div class=\"form-group\">\r\n      <label class=\"labelClass\" for=\"txtProject\">Project:</label>\r\n      <input type=\"text\" disabled class=\"form-control textClass\" [(ngModel)]=\"Project\" id=\"txtProject\" name=\"txtProject\"\r\n        required #txtProject=\"ngModel\">\r\n      <button id=\"projDialogButton\" class=\"form-control\" style=\"margin-left: 1%; width: 10%;\" (click)=\"openProjectDialog()\">Search</button>\r\n      <div [hidden]=\"!projectError\" class=\"alertDanger\">\r\n        Project is required\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"labelClass\" for=\"txtTask\">Task:</label>\r\n      <input type=\"text\" style=\"width: 51%;\" class=\"form-control textClass\" [(ngModel)]=\"Task\" id=\"txtTask\" name=\"txtTask\"\r\n        required #txtTask=\"ngModel\">\r\n      <div [hidden]=\"!taskError\" class=\"alertDanger\">\r\n        Task is required\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"checkbox\" [disabled]=\"TaskID\" style=\"margin-right: 1%;margin-left: 15%; \" id=\"chkPTask\" name=\"chkPTask\"\r\n        (change)=\"TaskCheckBoxChange()\" [(ngModel)]=\"IsParentTask\"> Parent Task\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"labelClass\" for=\"txtPriority\">Priority:</label>\r\n      <input type=\"range\" [disabled]=\"IsParentTask\" class=\"slider\" id=\"txtPriority\" name=\"txtPriority\" [(ngModel)]=\"Priority\"\r\n        required min=\"0\" max=\"30\" step=\"1\" #txtPriority=\"ngModel\"> {{Priority}}\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"labelClass\" for=\"txtPTask\">Parent Task:</label>\r\n      <input type=\"text\" disabled class=\"form-control textClass\" [(ngModel)]=\"ParentTask\" id=\"txtPTask\" name=\"txtPTask\"\r\n        required #txtPTask=\"ngModel\">\r\n      <button id=\"parentTaskDialogButton\" class=\"form-control\" style=\"margin-left: 1%; width: 10%;\" (click)=\"openParentTaskDialog()\">Search</button>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"txtSDate\">Start Date:</label>\r\n      <input type=\"date\" [disabled]=\"IsParentTask\" id=\"txtSDate\" name=\"txtSDate\" style=\"margin-left: 1%; width: 23%;\"\r\n        [min]=\"startMinDate\" [(ngModel)]=\"StartDate\" required class=\"form-control\">\r\n      <label for=\"txtEDate\" style=\"margin-left: 3%;\">End Date:</label>\r\n      <input type=\"date\" [disabled]=\"IsParentTask\" id=\"txtEDate\" name=\"txtEDate\" style=\"margin-left: 1%; width: 23%;\"\r\n        [min]=\"endMinDate\" [(ngModel)]=\"EndDate\" required class=\"form-control\">\r\n      <div [hidden]=\"!startEndDateError\" class=\"alertDanger\">\r\n        Start and End Date is required\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"labelClass\" for=\"txtUser\">User:</label>\r\n      <input type=\"text\" disabled class=\"form-control textClass\" [(ngModel)]=\"UserName\" disabled id=\"txtUser\" name=\"txtUser\"\r\n        required #txtUser=\"ngModel\">\r\n      <button id=\"openUserDialogButton\" class=\"form-control\" style=\"margin-left: 1%; width: 10%;\" (click)=\"openUserDialog()\">Search</button>\r\n      <div [hidden]=\"!userError\" class=\"alertDanger\">\r\n        User is required\r\n      </div>\r\n    </div>\r\n    <div style=\"padding-left: 50%;\">\r\n      <button type=\"submit\" class=\"btn btn-default\" (click)=\"AddUpdateTask();\">{{addButtonText}}</button>\r\n      <button class=\"btn btn-default\" (click)=\"ResetTask();\" style=\"margin-left: 5px;\">Reset</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/add-tasks/add-tasks.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-tasks/add-tasks.component.ts ***!
  \**************************************************/
/*! exports provided: AddTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTasksComponent", function() { return AddTasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_task_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/task-model */ "./src/app/models/task-model.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api-service */ "./src/app/service/api-service.ts");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _model_popup_user_list_model_user_list_model_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model-popup/user-list-model/user-list-model.component */ "./src/app/model-popup/user-list-model/user-list-model.component.ts");
/* harmony import */ var _model_popup_project_list_model_project_list_model_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model-popup/project-list-model/project-list-model.component */ "./src/app/model-popup/project-list-model/project-list-model.component.ts");
/* harmony import */ var _model_popup_task_list_model_task_list_model_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model-popup/task-list-model/task-list-model.component */ "./src/app/model-popup/task-list-model/task-list-model.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddTasksComponent = /** @class */ (function () {
    function AddTasksComponent(apiService, dialogService, route, location) {
        this.apiService = apiService;
        this.dialogService = dialogService;
        this.route = route;
        this.location = location;
        this.startMinDate = new Date().toISOString().split('T')[0];
        var tmpDate = new Date();
        tmpDate.setDate(tmpDate.getDate() + 1);
        this.endMinDate = tmpDate.toISOString().split('T')[0];
        this.taskError = false;
        this.projectError = false;
        this.startEndDateError = false;
        this.userError = false;
        if (route.snapshot.params['task']) {
            var tModel = JSON.parse(route.snapshot.params['task']);
            this.TaskID = tModel.TaskID;
            this.Task = tModel.Task;
            this.ProjectID = tModel.ProjectID;
            this.ParentTaskID = tModel.ParentTaskID;
            this.Project = tModel.Project;
            this.Priority = tModel.Priority;
            this.StartDate = tModel.StartDate.split('T')[0];
            this.EndDate = tModel.EndDate.split('T')[0];
            this.UserID = tModel.UserID;
            this.ParentTask = tModel.ParentTask;
            this.UserName = tModel.UserName;
            this.addButtonText = "Update Task";
        }
        else {
            this.Priority = 0;
            this.StartDate = new Date().toISOString().split('T')[0];
            var tmpDate_1 = new Date();
            tmpDate_1.setDate(tmpDate_1.getDate() + 1);
            this.EndDate = tmpDate_1.toISOString().split('T')[0];
            this.addButtonText = "Add Task";
        }
    }
    AddTasksComponent.prototype.ngOnInit = function () {
    };
    AddTasksComponent.prototype.TaskCheckBoxChange = function () {
        if (this.IsParentTask) {
            document.getElementById('projDialogButton').style.display = 'none';
            document.getElementById('parentTaskDialogButton').style.display = 'none';
            document.getElementById('openUserDialogButton').style.display = 'none';
            this.StartDate = undefined;
            this.EndDate = undefined;
            this.ProjectID = undefined;
            this.Priority = 0;
            this.ParentTaskID = undefined;
            this.UserID = undefined;
            this.projectError = false;
            this.startEndDateError = false;
            this.userError = false;
        }
        else {
            document.getElementById('projDialogButton').style.display = 'block';
            document.getElementById('parentTaskDialogButton').style.display = 'block';
            document.getElementById('openUserDialogButton').style.display = 'block';
            this.StartDate = new Date().toISOString().split('T')[0];
            var tmpDate = new Date();
            tmpDate.setDate(tmpDate.getDate() + 1);
            this.EndDate = tmpDate.toISOString().split('T')[0];
        }
    };
    AddTasksComponent.prototype.AddUpdateTask = function () {
        document.getElementById('userMsg').innerText = "";
        document.getElementById('userMsg').style.color = "none";
        if (this.TaskID) {
            this.UpdateTask();
        }
        else {
            this.AddTask();
        }
    };
    AddTasksComponent.prototype.UpdateTask = function () {
        var _this = this;
        var error = false;
        if (!this.Task) {
            this.taskError = true;
            error = true;
        }
        else {
            this.taskError = false;
        }
        if (!this.ProjectID) {
            this.projectError = true;
            error = true;
        }
        else {
            this.projectError = false;
        }
        if (!this.UserID) {
            this.userError = true;
            error = true;
        }
        else {
            this.userError = false;
        }
        if (!this.StartDate || !this.EndDate) {
            this.startEndDateError = true;
            error = true;
        }
        else {
            this.startEndDateError = false;
        }
        if (!error) {
            this.taskModel = new _models_task_model__WEBPACK_IMPORTED_MODULE_1__["TaskModel"]();
            this.taskModel.TaskID = this.TaskID;
            this.taskModel.Task = this.Task;
            this.taskModel.ProjectID = this.ProjectID;
            this.taskModel.ParentTaskID = this.ParentTaskID;
            this.taskModel.Project = this.Project;
            this.taskModel.Priority = this.Priority;
            this.taskModel.StartDate = new Date(this.StartDate);
            this.taskModel.EndDate = new Date(this.EndDate);
            this.taskModel.UserID = this.UserID;
            this.apiService.UpdateTask(this.taskModel)
                .subscribe(function (data) {
                _this.ResetTask();
                document.getElementById('userMsg').innerText = "Task updated successfully...";
                document.getElementById('userMsg').style.color = "green";
            }, function (error) {
                console.log(error);
                document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
                document.getElementById('userMsg').style.color = "red";
            });
        }
    };
    AddTasksComponent.prototype.AddTask = function () {
        var _this = this;
        if (this.IsParentTask) {
            this.projectError = false;
            this.startEndDateError = false;
            this.userError = false;
            if (!this.Task) {
                this.taskError = true;
            }
            else {
                this.taskError = false;
            }
            if (!this.taskError) {
                this.parentTaskModel = new _models_task_model__WEBPACK_IMPORTED_MODULE_1__["ParentTaskModel"]();
                this.parentTaskModel.ParentTask = this.Task;
                this.apiService.AddParentTask(this.parentTaskModel)
                    .subscribe(function (data) {
                    _this.ResetTask();
                    document.getElementById('userMsg').innerText = "Task updated successfully...";
                    document.getElementById('userMsg').style.color = "green";
                }, function (error) {
                    console.log(error);
                    document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
                    document.getElementById('userMsg').style.color = "red";
                });
            }
        }
        else {
            var error = false;
            if (!this.Task) {
                this.taskError = true;
                error = true;
            }
            else {
                this.taskError = false;
            }
            if (!this.ProjectID) {
                this.projectError = true;
                error = true;
            }
            else {
                this.projectError = false;
            }
            if (!this.UserID) {
                this.userError = true;
                error = true;
            }
            else {
                this.userError = false;
            }
            if (!this.StartDate || !this.EndDate) {
                this.startEndDateError = true;
                error = true;
            }
            else {
                this.startEndDateError = false;
            }
            if (!error) {
                this.taskModel = new _models_task_model__WEBPACK_IMPORTED_MODULE_1__["TaskModel"]();
                this.taskModel.Task = this.Task;
                this.taskModel.ProjectID = this.ProjectID;
                this.taskModel.ParentTaskID = this.ParentTaskID;
                this.taskModel.Project = this.Project;
                this.taskModel.Priority = this.Priority;
                this.taskModel.StartDate = new Date(this.StartDate);
                this.taskModel.EndDate = new Date(this.EndDate);
                this.taskModel.UserID = this.UserID;
                this.apiService.AddTask(this.taskModel)
                    .subscribe(function (data) {
                    document.getElementById('userMsg').innerText = "Task added successfully...";
                    document.getElementById('userMsg').style.color = "green";
                }, function (error) {
                    console.log(error);
                    document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
                    document.getElementById('userMsg').style.color = "red";
                });
            }
        }
    };
    AddTasksComponent.prototype.ResetTask = function () {
        this.Priority = 0;
        this.StartDate = new Date().toISOString().split('T')[0];
        var tmpDate = new Date();
        tmpDate.setDate(tmpDate.getDate() + 1);
        this.EndDate = tmpDate.toISOString().split('T')[0];
        this.addButtonText = "Add Task";
        this.TaskID = undefined;
        this.Task = undefined;
        this.ProjectID = undefined;
        this.ParentTaskID = undefined;
        this.Project = undefined;
        this.UserID = undefined;
        this.ParentTask = undefined;
        this.UserName = undefined;
        this.taskError = false;
        this.projectError = false;
        this.startEndDateError = false;
        this.userError = false;
        document.getElementById('userMsg').innerText = "";
        document.getElementById('userMsg').style.color = "none";
    };
    AddTasksComponent.prototype.openProjectDialog = function () {
        var _this = this;
        var disposable = this.dialogService.addDialog(_model_popup_project_list_model_project_list_model_component__WEBPACK_IMPORTED_MODULE_5__["ProjectListModelComponent"], this.projectList)
            .subscribe(function (selectedProject) {
            if (selectedProject) {
                _this.ProjectID = selectedProject.ProjectID;
                _this.Project = selectedProject.Project;
            }
        });
        setTimeout(function () {
            disposable.unsubscribe();
        }, 10000);
    };
    AddTasksComponent.prototype.openParentTaskDialog = function () {
        var _this = this;
        var disposable = this.dialogService.addDialog(_model_popup_task_list_model_task_list_model_component__WEBPACK_IMPORTED_MODULE_6__["TaskListModelComponent"], this.parentTaskList)
            .subscribe(function (selectedTask) {
            if (selectedTask) {
                _this.ParentTaskID = selectedTask.ParentTaskID;
                _this.ParentTask = selectedTask.ParentTask;
            }
        });
        setTimeout(function () {
            disposable.unsubscribe();
        }, 10000);
    };
    AddTasksComponent.prototype.openUserDialog = function () {
        var _this = this;
        var disposable = this.dialogService.addDialog(_model_popup_user_list_model_user_list_model_component__WEBPACK_IMPORTED_MODULE_4__["UserListModelComponent"], this.UserList)
            .subscribe(function (selectedUser) {
            if (selectedUser) {
                _this.UserID = selectedUser.UserID;
                _this.UserName = selectedUser.FirstName + ' ' + selectedUser.LastName;
            }
        });
        setTimeout(function () {
            disposable.unsubscribe();
        }, 10000);
    };
    AddTasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-tasks',
            template: __webpack_require__(/*! ./add-tasks.component.html */ "./src/app/add-tasks/add-tasks.component.html"),
            styles: [__webpack_require__(/*! ./add-tasks.component.css */ "./src/app/add-tasks/add-tasks.component.css")]
        }),
        __metadata("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["DialogService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]])
    ], AddTasksComponent);
    return AddTasksComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-tasks/add-tasks.component */ "./src/app/add-tasks/add-tasks.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _view_tasks_view_tasks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-tasks/view-tasks.component */ "./src/app/view-tasks/view-tasks.component.ts");




var appRoutes = [
    { path: '', component: _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"] },
    { path: 'addTasks', component: _add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_0__["AddTasksComponent"] },
    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"] },
    { path: 'viewTasks', component: _view_tasks_view_tasks_component__WEBPACK_IMPORTED_MODULE_3__["ViewTasksComponent"] }
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".BottomMargin {\r\n    margin-bottom: 1%;\r\n}\r\n\r\n.inlineClass{\r\n    display: inline;\r\n    margin-left: -3%;\r\n    margin-right: 4%;\r\n    cursor: pointer;\r\n}\r\n\r\n.active{\r\n    color:goldenrod;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container BottomMargin\">\r\n  <h1>Project Manager</h1>\r\n  <br>\r\n  <ul id=\"grouplist\">\r\n    <li class=\"inlineClass\" [routerLink]=\"'/projects'\" [ngClass]=\"{'active': selectedItem == 'addProjects'}\" (click)=\"listClick('addProjects')\">\r\n      Add Project\r\n    </li>\r\n    <li class=\"inlineClass\" [routerLink]=\"'/addTasks'\" [ngClass]=\"{'active': selectedItem == 'addTasks'}\" (click)=\"listClick('addTasks')\">\r\n      Add Task\r\n    </li>\r\n    <li class=\"inlineClass\" [routerLink]=\"'/users'\" [ngClass]=\"{'active': selectedItem == 'addUsers'}\" (click)=\"listClick('addUsers')\">\r\n      Add User\r\n    </li>\r\n    <li class=\"inlineClass\" [routerLink]=\"'/viewTasks'\" [ngClass]=\"{'active': selectedItem == 'viewTasks'}\" (click)=\"listClick('viewTasks')\">\r\n      View Task\r\n    </li>\r\n  </ul>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ProjectManagerUI';
        this.selectedItem = 'addUsers';
    }
    AppComponent.prototype.listClick = function (newValue) {
        this.selectedItem = newValue;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-tasks/add-tasks.component */ "./src/app/add-tasks/add-tasks.component.ts");
/* harmony import */ var _view_tasks_view_tasks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-tasks/view-tasks.component */ "./src/app/view-tasks/view-tasks.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/api-service */ "./src/app/service/api-service.ts");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _model_popup_user_list_model_user_list_model_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./model-popup/user-list-model/user-list-model.component */ "./src/app/model-popup/user-list-model/user-list-model.component.ts");
/* harmony import */ var _model_popup_project_list_model_project_list_model_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./model-popup/project-list-model/project-list-model.component */ "./src/app/model-popup/project-list-model/project-list-model.component.ts");
/* harmony import */ var _model_popup_task_list_model_task_list_model_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./model-popup/task-list-model/task-list-model.component */ "./src/app/model-popup/task-list-model/task-list-model.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"],
                _add_tasks_add_tasks_component__WEBPACK_IMPORTED_MODULE_8__["AddTasksComponent"],
                _view_tasks_view_tasks_component__WEBPACK_IMPORTED_MODULE_9__["ViewTasksComponent"],
                _model_popup_user_list_model_user_list_model_component__WEBPACK_IMPORTED_MODULE_13__["UserListModelComponent"],
                _model_popup_project_list_model_project_list_model_component__WEBPACK_IMPORTED_MODULE_14__["ProjectListModelComponent"],
                _model_popup_task_list_model_task_list_model_component__WEBPACK_IMPORTED_MODULE_15__["TaskListModelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_10__["appRoutes"]),
                ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["BootstrapModalModule"].forRoot({ container: document.body })
            ],
            entryComponents: [
                _model_popup_user_list_model_user_list_model_component__WEBPACK_IMPORTED_MODULE_13__["UserListModelComponent"],
                _model_popup_project_list_model_project_list_model_component__WEBPACK_IMPORTED_MODULE_14__["ProjectListModelComponent"],
                _model_popup_task_list_model_task_list_model_component__WEBPACK_IMPORTED_MODULE_15__["TaskListModelComponent"]
            ],
            providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_11__["ApiService"], ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__["DialogService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model-popup/project-list-model/project-list-model.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/model-popup/project-list-model/project-list-model.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/model-popup/project-list-model/project-list-model.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/model-popup/project-list-model/project-list-model.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n      <h4 class=\"modal-title\">Project List:</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div>\r\n        <input type=\"text\" class=\"form-control\" (input)=\"filterItem()\" [(ngModel)]=\"searchText\" style=\"display: inline;\"\r\n          placeholder=\"Search...\">\r\n      </div>\r\n      <div *ngFor=\"let project of filteredList\">\r\n        <hr style=\"border-top: dotted 1px;\" />\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 25%; display: inline; margin-left: 1%;\" disabled value={{project.Project}}>\r\n\r\n        <button class=\"btn btn-default\" (click)=\"SelectProject(project)\" style=\"width: 15%; display: inline; margin-left: 1%;\">Select</button>\r\n      </div>\r\n\r\n      <div *ngIf=\"projectListCount==0\">\r\n        <label>There are no Projects</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/model-popup/project-list-model/project-list-model.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/model-popup/project-list-model/project-list-model.component.ts ***!
  \********************************************************************************/
/*! exports provided: ProjectListModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListModelComponent", function() { return ProjectListModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_project_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/project-model */ "./src/app/models/project-model.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api-service */ "./src/app/service/api-service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectListModelComponent = /** @class */ (function (_super) {
    __extends(ProjectListModelComponent, _super);
    function ProjectListModelComponent(dialogService, apiService) {
        var _this = _super.call(this, dialogService) || this;
        _this.apiService = apiService;
        return _this;
    }
    ProjectListModelComponent.prototype.ngOnInit = function () {
        this.GetProjects();
        this.assignCopy();
    };
    ProjectListModelComponent.prototype.GetProjects = function () {
        var _this = this;
        this.apiService.GetProjects()
            .subscribe(function (data) {
            console.log(data);
            _this.projectList = data;
            _this.assignCopy();
        }, function (error) {
            console.log(error);
        });
    };
    ProjectListModelComponent.prototype.SelectProject = function (project) {
        var projectModel = new _models_project_model__WEBPACK_IMPORTED_MODULE_2__["ProjectModel"]();
        projectModel.ProjectID = project.ProjectID;
        projectModel.Project = project.Project;
        this.result = projectModel;
        this.close();
    };
    ProjectListModelComponent.prototype.filterItem = function () {
        var _this = this;
        if (!this.searchText)
            this.assignCopy();
        this.filteredList = Object.assign([], this.projectList).filter(function (item) { return (item.Project != undefined ? item.Project.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1 : true); });
    };
    ProjectListModelComponent.prototype.assignCopy = function () {
        this.filteredList = Object.assign([], this.projectList);
        this.projectListCount = this.filteredList.length;
    };
    ProjectListModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-list-model',
            template: __webpack_require__(/*! ./project-list-model.component.html */ "./src/app/model-popup/project-list-model/project-list-model.component.html"),
            styles: [__webpack_require__(/*! ./project-list-model.component.css */ "./src/app/model-popup/project-list-model/project-list-model.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["DialogService"], _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ProjectListModelComponent);
    return ProjectListModelComponent;
}(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"]));



/***/ }),

/***/ "./src/app/model-popup/task-list-model/task-list-model.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/model-popup/task-list-model/task-list-model.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/model-popup/task-list-model/task-list-model.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/model-popup/task-list-model/task-list-model.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n      <h4 class=\"modal-title\">Parent Task List:</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div>\r\n        <input type=\"text\" class=\"form-control\" (input)=\"filterItem()\" [(ngModel)]=\"searchText\" style=\"display: inline;\"\r\n          placeholder=\"Search...\">\r\n      </div>\r\n      <div *ngFor=\"let task of filteredList\">\r\n        <hr style=\"border-top: dotted 1px;\" />\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 25%; display: inline; margin-left: 1%;\" disabled value={{task.ParentTask}}>\r\n\r\n        <button class=\"btn btn-default\" (click)=\"SelectTask(task)\" style=\"width: 15%; display: inline; margin-left: 1%;\">Select</button>\r\n      </div>\r\n\r\n      <div *ngIf=\"parentTaskListCount==0\">\r\n        <label>There are no Parent tasks</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/model-popup/task-list-model/task-list-model.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/model-popup/task-list-model/task-list-model.component.ts ***!
  \**************************************************************************/
/*! exports provided: TaskListModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListModelComponent", function() { return TaskListModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_task_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/task-model */ "./src/app/models/task-model.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api-service */ "./src/app/service/api-service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskListModelComponent = /** @class */ (function (_super) {
    __extends(TaskListModelComponent, _super);
    function TaskListModelComponent(dialogService, apiService) {
        var _this = _super.call(this, dialogService) || this;
        _this.apiService = apiService;
        return _this;
    }
    TaskListModelComponent.prototype.ngOnInit = function () {
        this.GetParentTasks();
        this.assignCopy();
    };
    TaskListModelComponent.prototype.GetParentTasks = function () {
        var _this = this;
        this.apiService.GetParentTasks()
            .subscribe(function (data) {
            console.log(data);
            _this.parentTaskList = data;
            _this.assignCopy();
        }, function (error) {
            console.log(error);
        });
    };
    TaskListModelComponent.prototype.SelectTask = function (task) {
        var taskModel = new _models_task_model__WEBPACK_IMPORTED_MODULE_2__["ParentTaskModel"]();
        taskModel.ParentTaskID = task.ParentTaskID;
        taskModel.ParentTask = task.ParentTask;
        this.result = taskModel;
        this.close();
    };
    TaskListModelComponent.prototype.filterItem = function () {
        var _this = this;
        if (!this.searchText)
            this.assignCopy();
        this.filteredList = Object.assign([], this.parentTaskList).filter(function (item) { return (item.ParentTask != undefined ? item.ParentTask.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1 : true); });
    };
    TaskListModelComponent.prototype.assignCopy = function () {
        this.filteredList = Object.assign([], this.parentTaskList);
        this.parentTaskListCount = this.filteredList.length;
    };
    TaskListModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-list-model',
            template: __webpack_require__(/*! ./task-list-model.component.html */ "./src/app/model-popup/task-list-model/task-list-model.component.html"),
            styles: [__webpack_require__(/*! ./task-list-model.component.css */ "./src/app/model-popup/task-list-model/task-list-model.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["DialogService"], _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], TaskListModelComponent);
    return TaskListModelComponent;
}(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"]));



/***/ }),

/***/ "./src/app/model-popup/user-list-model/user-list-model.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/model-popup/user-list-model/user-list-model.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/model-popup/user-list-model/user-list-model.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/model-popup/user-list-model/user-list-model.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n      <h4 class=\"modal-title\">Users List:</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div>\r\n        <input type=\"text\" class=\"form-control\" (input)=\"filterItem()\" [(ngModel)]=\"searchText\" style=\"display: inline;\"\r\n          placeholder=\"Search...\">\r\n      </div>\r\n      <div *ngFor=\"let user of filteredList\">\r\n        <hr style=\"border-top: dotted 1px;\" />\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 25%; display: inline; margin-left: 1%;\" disabled value={{user.FirstName}}>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 25%; display: inline; margin-left: 1%;\" disabled value={{user.LastName}}>\r\n        <input type=\"text\" class=\"form-control\" style=\"width: 25%; display: inline; margin-left: 1%;\" disabled value={{user.EmployeeID}}>\r\n\r\n        <button class=\"btn btn-default\" (click)=\"SelectUser(user)\" style=\"width: 15%; display: inline; margin-left: 1%;\">Select</button>\r\n      </div>\r\n\r\n      <div *ngIf=\"userListCount==0\">\r\n        <label>There are no users</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/model-popup/user-list-model/user-list-model.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/model-popup/user-list-model/user-list-model.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserListModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListModelComponent", function() { return UserListModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user-model */ "./src/app/models/user-model.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api-service */ "./src/app/service/api-service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserListModelComponent = /** @class */ (function (_super) {
    __extends(UserListModelComponent, _super);
    function UserListModelComponent(dialogService, apiService) {
        var _this = _super.call(this, dialogService) || this;
        _this.apiService = apiService;
        return _this;
    }
    UserListModelComponent.prototype.ngOnInit = function () {
        this.GetUsers();
        this.assignCopy();
    };
    UserListModelComponent.prototype.GetUsers = function () {
        var _this = this;
        this.apiService.GetUsers()
            .subscribe(function (data) {
            console.log(data);
            _this.UserList = data;
            _this.assignCopy();
        }, function (error) {
            console.log(error);
        });
    };
    UserListModelComponent.prototype.SelectUser = function (user) {
        var userModel = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["UserModel"]();
        userModel.FirstName = user.FirstName;
        userModel.LastName = user.LastName;
        userModel.EmployeeID = user.EmployeeID;
        userModel.UserID = user.UserID;
        this.result = userModel;
        this.close();
    };
    UserListModelComponent.prototype.filterItem = function () {
        var _this = this;
        if (!this.searchText)
            this.assignCopy();
        this.filteredList = Object.assign([], this.UserList).filter(function (item) { return (item.FirstName != undefined ? item.FirstName.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1 : true) ||
            (item.LastName != undefined ? item.LastName.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1 : true) ||
            (item.EmployeeID != undefined ? item.EmployeeID.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1 : true); });
    };
    UserListModelComponent.prototype.assignCopy = function () {
        this.filteredList = Object.assign([], this.UserList);
        this.userListCount = this.filteredList.length;
    };
    UserListModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list-model',
            template: __webpack_require__(/*! ./user-list-model.component.html */ "./src/app/model-popup/user-list-model/user-list-model.component.html"),
            styles: [__webpack_require__(/*! ./user-list-model.component.css */ "./src/app/model-popup/user-list-model/user-list-model.component.css")]
        }),
        __metadata("design:paramtypes", [ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["DialogService"], _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], UserListModelComponent);
    return UserListModelComponent;
}(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"]));



/***/ }),

/***/ "./src/app/models/project-model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/project-model.ts ***!
  \*****************************************/
/*! exports provided: ProjectModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModel", function() { return ProjectModel; });
var ProjectModel = /** @class */ (function () {
    function ProjectModel() {
    }
    return ProjectModel;
}());



/***/ }),

/***/ "./src/app/models/task-model.ts":
/*!**************************************!*\
  !*** ./src/app/models/task-model.ts ***!
  \**************************************/
/*! exports provided: TaskModel, ParentTaskModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModel", function() { return TaskModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentTaskModel", function() { return ParentTaskModel; });
var TaskModel = /** @class */ (function () {
    function TaskModel() {
    }
    return TaskModel;
}());

var ParentTaskModel = /** @class */ (function () {
    function ParentTaskModel() {
    }
    return ParentTaskModel;
}());



/***/ }),

/***/ "./src/app/models/user-model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user-model.ts ***!
  \**************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".labelClass {\r\n  width: 15%;\r\n}\r\n\r\n.textClass {\r\n  width: 40%;\r\n}\r\n\r\n.form-group {\r\n  display: flex;\r\n}\r\n\r\n.BottomMargin {\r\n  margin-bottom: 1%;\r\n}\r\n\r\n.alertDanger {\r\n  color: #a94442;\r\n  padding-left: 15px;\r\n}\r\n\r\n.slider {\r\n  margin-top: 8px;\r\n  -webkit-appearance: none;\r\n  width: 53%;\r\n  height: 5px;\r\n  border-radius: 5px;\r\n  margin-right: 1%;\r\n  background: #ddd;\r\n  outline: none;\r\n  opacity: 0.7;\r\n  transition: opacity .2s;\r\n}\r\n\r\n.slider:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.slider::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  appearance: none;\r\n  width: 13px;\r\n  height: 13px;\r\n  border-radius: 50%;\r\n  background: gray;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider::-moz-range-thumb {\r\n  width: 13px;\r\n  height: 13px;\r\n  border-radius: 50%;\r\n  background: gray;\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form #addProjectForm=\"ngForm\">\r\n    <h6 id=\"userMsg\"></h6>\r\n    <div class=\"form-group\">\r\n      <label class=\"labelClass\" for=\"txtProject\">Project:</label>\r\n      <input type=\"text\" style=\"width: 53%;\" maxlength=\"100\" class=\"form-control textClass\" [(ngModel)]=\"Project\" id=\"txtProject\"\r\n        name=\"txtProject\" required #txtProject=\"ngModel\">\r\n      <div [hidden]=\"!projectNameError\" class=\"alertDanger\">\r\n        Project is required\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\" style=\"margin-left: 15%\">\r\n      <input type=\"checkbox\" style=\"margin-right: 1%;\" id=\"chkDate\" name=\"chkDate\" (change)=\"DateCheckBoxChange()\"\r\n        [(ngModel)]=\"StartEndDateSelected\" #chkDate=\"ngModel\">\r\n      Set Start and End Date\r\n      <input type=\"date\" [disabled]=\"!StartEndDateSelected\" id=\"txtSDate\" name=\"txtSDate\" style=\"margin-left: 1%; width: 20%;\"\r\n        [min]=\"startMinDate\" [(ngModel)]=\"StartDate\" required class=\"form-control\" #txtSDate=\"ngModel\">\r\n      <input type=\"date\" [disabled]=\"!StartEndDateSelected\" id=\"txtEDate\" name=\"txtEDate\" style=\"margin-left: 1%; width: 20%;\"\r\n        [min]=\"endMinDate\" [(ngModel)]=\"EndDate\" required class=\"form-control\" #txtEDate=\"ngModel\">\r\n      <div [hidden]=\"!StartEndDateError\" class=\"alertDanger\">\r\n        Start and End Date is required\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"labelClass\" for=\"txtPriority\">Priority:</label>\r\n      <input type=\"range\" class=\"slider\" id=\"txtPriority\" name=\"txtPriority\" [(ngModel)]=\"Priority\" required min=\"0\"\r\n        max=\"30\" step=\"1\" #txtPriority=\"ngModel\"> {{Priority}}\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"labelClass\" for=\"txtManager\">Manager:</label>\r\n      <input type=\"text\" [hidden]=\"ManagerID\" style=\"width: 42%;\" class=\"form-control textClass\" [(ngModel)]=\"ManagerName\"\r\n        disabled id=\"txtManager\" name=\"txtManager\" required #txtManager=\"ngModel\">\r\n      <button id=\"openModalButton\" class=\"form-control\" style=\"margin-left: 1%; width: 10%;\" (click)=\"openDialog()\">Search</button>\r\n      <div [hidden]=\"!managerError\" class=\"alertDanger\">\r\n        Manager is required\r\n      </div>\r\n    </div>\r\n    <div style=\"padding-left: 50%;\">\r\n      <button type=\"submit\" class=\"btn btn-default\" (click)=\"AddUpdateProject();\" style=\"width: 20%;\">{{AddButtonText}}</button>\r\n      <button class=\"btn btn-default\" (click)=\"ResetData();\" style=\"margin-left: 5px; width: 15%;\">{{ResetButtonText}}</button>\r\n    </div>\r\n  </form>\r\n  <hr style=\"border-top: 1px solid #333;\" />\r\n  <div>\r\n    <input type=\"text\" class=\"form-control\" (input)=\"filterItem()\" [(ngModel)]=\"searchText\" style=\"display: inline;\"\r\n      placeholder=\"Search...\">\r\n    <div style=\"margin-top: 2%;\">\r\n      <b style=\"display: inline; width: 10%;\">Sort:</b>\r\n      <button class=\"form-control overFlow\" (click)=\"sortingProject('SDate')\" style=\"display: inline;margin-left: 2%; width: 15%;\">Start\r\n        Date</button>\r\n      <button class=\"form-control overFlow\" (click)=\"sortingProject('EDate')\" style=\"display: inline;margin-left: 2%; width: 15%;\">End\r\n        Date</button>\r\n      <button class=\"form-control overFlow\" (click)=\"sortingProject('Priority')\" style=\"display: inline;margin-left: 2%; width: 15%;\">Priority</button>\r\n      <button class=\"form-control overFlow\" (click)=\"sortingProject('Completed')\" style=\"display: inline;margin-left: 2%; width: 15%;\">Completed</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngFor=\"let proj of filteredList\">\r\n    <hr style=\"border-top: dotted 1px;\" />\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-8\">\r\n        <div class=\"row\" style=\" padding-left: 15px;\">\r\n          <label style=\"display: inline;\">Project: </label>\r\n          <input type=\"text\" style=\"display: inline; width: 80%;\" class=\"form-control\" disabled value={{proj.Project}}>\r\n        </div>\r\n        <div class=\"row\" style=\" margin-top: 2%;\">\r\n          <div class=\"col-xs-6\">\r\n            <label style=\"display: inline;\">No of Tasks: </label>\r\n            <span style=\"display: inline; width: 60%;\">{{proj.NoofTasks}}</span>\r\n          </div>\r\n          <div class=\"col-xs-6\">\r\n            <label style=\"display: inline;\">Completed: </label>\r\n            <span style=\"display: inline; width: 60%;\">{{proj.NoofCompletedTasks}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" style=\" margin-top: 2%;\">\r\n          <div class=\"col-xs-6\">\r\n            <label style=\"display: inline;\">Start Date: </label>\r\n            <span style=\"display: inline; width: 60%;\">{{proj.StartDate | date: 'dd-MM-yyyy'}}</span>\r\n          </div>\r\n          <div class=\"col-xs-6\">\r\n            <label style=\"display: inline;\">End Date: </label>\r\n            <span style=\"display: inline; width: 60%;\">{{proj.EndDate | date: 'dd-MM-yyyy'}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-2\" style=\"margin-top: 7%;\">\r\n        <label style=\"display: inline;\">Priority: </label>\r\n        <span style=\"display: inline; width: 60%;\">{{proj.Priority}}</span>\r\n      </div>\r\n      <div class=\"col-xs-2\">\r\n        <button class=\"btn btn-default\" style=\"width: 100%; height: 34px; margin-bottom: 10%;\" (click)=\"EditProject(proj)\">Update</button>\r\n        <button class=\"btn btn-default\" style=\"width: 100%; height: 34px;margin-bottom: 10%;\" (click)=\"SuspendProject(proj.ProjectID)\">Suspend</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"projListCount==0\">\r\n    <hr style=\"border-top: dotted 1px;\" />\r\n    <b>There are no projects</b>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_project_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/project-model */ "./src/app/models/project-model.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api-service */ "./src/app/service/api-service.ts");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _model_popup_user_list_model_user_list_model_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model-popup/user-list-model/user-list-model.component */ "./src/app/model-popup/user-list-model/user-list-model.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(apiService, dialogService) {
        this.apiService = apiService;
        this.dialogService = dialogService;
        this.projectNameError = false;
        this.StartEndDateError = false;
        this.managerError = false;
        this.StartEndDateSelected = false;
        this.Priority = 0;
        this.startMinDate = new Date().toISOString().split('T')[0];
        var tmpDate = new Date();
        tmpDate.setDate(tmpDate.getDate() + 1);
        this.endMinDate = tmpDate.toISOString().split('T')[0];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.AddButtonText = "Add Project";
        this.ResetButtonText = "Reset";
        this.GetProjects();
    };
    ProjectsComponent.prototype.GetProjects = function () {
        var _this = this;
        this.apiService.GetProjects()
            .subscribe(function (data) {
            _this.projectList = data;
            _this.assignCopy();
        }, function (error) {
            console.log(error);
        });
    };
    ProjectsComponent.prototype.AddUpdateProject = function () {
        document.getElementById('userMsg').innerText = "";
        document.getElementById('userMsg').style.color = "none";
        if (this.ProjectID) {
            this.UpdateProject();
        }
        else {
            this.AddProject();
        }
    };
    ProjectsComponent.prototype.AddProject = function () {
        var _this = this;
        var error = false;
        if (!this.Project) {
            this.projectNameError = true;
            error = true;
        }
        else {
            this.projectNameError = false;
        }
        if (this.StartEndDateSelected && (!this.StartDate || !this.EndDate)) {
            this.StartEndDateError = true;
            error = true;
        }
        else {
            this.StartEndDateError = false;
        }
        if (!this.ManagerID) {
            this.managerError = true;
            error = true;
        }
        else {
            this.managerError = false;
        }
        if (!error) {
            this.object = new _models_project_model__WEBPACK_IMPORTED_MODULE_1__["ProjectModel"]();
            this.object.Project = this.Project;
            this.object.Priority = this.Priority;
            if (this.StartEndDateSelected) {
                this.object.StartDate = new Date(this.StartDate);
                this.object.EndDate = new Date(this.EndDate);
            }
            this.object.ManagerID = this.ManagerID;
            this.apiService.AddProject(this.object)
                .subscribe(function (data) {
                _this.ResetData();
                _this.GetProjects();
                document.getElementById('userMsg').innerText = "Project added successfully...";
                document.getElementById('userMsg').style.color = "green";
            }, function (error) {
                console.log(error);
                document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
                document.getElementById('userMsg').style.color = "red";
            });
        }
    };
    ProjectsComponent.prototype.UpdateProject = function () {
        var _this = this;
        var error = false;
        if (!this.Project) {
            this.projectNameError = true;
            error = true;
        }
        else {
            this.projectNameError = false;
        }
        if (this.StartEndDateSelected && (!this.StartDate || !this.EndDate)) {
            this.StartEndDateError = true;
            error = true;
        }
        else {
            this.StartEndDateError = false;
        }
        if (!this.ManagerID) {
            this.managerError = true;
            error = true;
        }
        else {
            this.managerError = false;
        }
        if (!error) {
            this.object = new _models_project_model__WEBPACK_IMPORTED_MODULE_1__["ProjectModel"]();
            this.object.Project = this.Project;
            this.object.Priority = this.Priority;
            this.object.ProjectID = this.ProjectID;
            if (this.StartEndDateSelected) {
                this.object.StartDate = new Date(this.StartDate);
                this.object.EndDate = new Date(this.EndDate);
            }
            this.object.ManagerID = this.ManagerID;
            this.apiService.UpdateProject(this.object)
                .subscribe(function (data) {
                _this.ResetData();
                _this.GetProjects();
                document.getElementById('userMsg').innerText = "Project updated successfully...";
                document.getElementById('userMsg').style.color = "green";
            }, function (error) {
                console.log(error);
                document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
                document.getElementById('userMsg').style.color = "red";
            });
        }
    };
    ProjectsComponent.prototype.SuspendProject = function (projectID) {
        var _this = this;
        document.getElementById('userMsg').innerText = "";
        document.getElementById('userMsg').style.color = "none";
        this.apiService.SuspendProject(projectID)
            .subscribe(function (data) {
            _this.ResetData();
            _this.GetProjects();
            document.getElementById('userMsg').innerText = "Project suspended successfully...";
            document.getElementById('userMsg').style.color = "green";
        }, function (error) {
            console.log(error);
            document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
            document.getElementById('userMsg').style.color = "red";
        });
    };
    ProjectsComponent.prototype.EditProject = function (project) {
        this.AddButtonText = "Update";
        this.ResetButtonText = "Cancel";
        this.ProjectID = project.ProjectID;
        this.Project = project.Project;
        this.Priority = project.Priority;
        if (project.StartDate) {
            this.StartDate = project.StartDate.split('T')[0];
            this.EndDate = project.EndDate.split('T')[0];
            this.StartEndDateSelected = true;
        }
        else {
            this.StartEndDateSelected = false;
            this.StartDate = undefined;
            this.EndDate = undefined;
        }
        this.ManagerID = project.ManagerID;
        this.ManagerName = project.ManagerName;
    };
    ProjectsComponent.prototype.filterItem = function () {
        var _this = this;
        if (!this.searchText)
            this.assignCopy();
        this.filteredList = Object.assign([], this.projectList).filter(function (item) { return (item.Project != undefined ? item.Project.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1 : true); });
    };
    ProjectsComponent.prototype.sortingProject = function (sort) {
        if (sort == 'SDate') {
            this.filteredList.sort(function (a, b) {
                if (a.StartDate < b.StartDate)
                    return -1;
                else if (a.StartDate > b.StartDate)
                    return 1;
                else
                    return 0;
            });
        }
        else if (sort == 'EDate') {
            this.filteredList.sort(function (a, b) {
                if (a.EndDate < b.EndDate)
                    return -1;
                else if (a.EndDate > b.EndDate)
                    return 1;
                else
                    return 0;
            });
        }
        else if (sort == 'Priority') {
            this.filteredList.sort(function (a, b) {
                if (a.Priority < b.Priority)
                    return -1;
                else if (a.Priority > b.Priority)
                    return 1;
                else
                    return 0;
            });
        }
        else if (sort == 'Completed') {
            this.filteredList.sort(function (a, b) {
                if (a.NoofCompletedTasks < b.NoofCompletedTasks)
                    return -1;
                else if (a.NoofCompletedTasks > b.NoofCompletedTasks)
                    return 1;
                else
                    return 0;
            });
        }
    };
    ProjectsComponent.prototype.openDialog = function () {
        var _this = this;
        var disposable = this.dialogService.addDialog(_model_popup_user_list_model_user_list_model_component__WEBPACK_IMPORTED_MODULE_4__["UserListModelComponent"], this.UserList)
            .subscribe(function (selectedUser) {
            if (selectedUser) {
                _this.ManagerID = selectedUser.UserID;
                _this.ManagerName = selectedUser.FirstName + ' ' + selectedUser.LastName;
            }
        });
        setTimeout(function () {
            disposable.unsubscribe();
        }, 10000);
    };
    ProjectsComponent.prototype.assignCopy = function () {
        this.filteredList = Object.assign([], this.projectList);
        this.projListCount = this.filteredList.length;
    };
    ProjectsComponent.prototype.ResetData = function () {
        this.object = new _models_project_model__WEBPACK_IMPORTED_MODULE_1__["ProjectModel"]();
        this.Project = undefined;
        this.Priority = 0;
        this.StartEndDateSelected = false;
        this.StartDate = undefined;
        this.EndDate = undefined;
        this.ManagerID = undefined;
        this.ManagerName = undefined;
        this.projectNameError = false;
        this.StartEndDateError = false;
        this.managerError = false;
        this.AddButtonText = "Add Project";
        this.ResetButtonText = "Reset";
        document.getElementById('userMsg').innerText = "";
        document.getElementById('userMsg').style.color = "none";
    };
    ProjectsComponent.prototype.DateCheckBoxChange = function () {
        if (this.StartEndDateSelected) {
            this.StartDate = new Date().toISOString().split('T')[0];
            var tmpDate = new Date();
            tmpDate.setDate(tmpDate.getDate() + 1);
            this.EndDate = tmpDate.toISOString().split('T')[0];
            this.StartEndDateError = false;
        }
        else {
            this.StartDate = undefined;
            this.EndDate = undefined;
            this.StartEndDateError = false;
        }
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["DialogService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/service/api-service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api-service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ApiService = /** @class */ (function () {
    function ApiService(_http) {
        this._http = _http;
        this.userServiceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].origin + "/api/Users";
        this.projectServiceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].origin + "/api/Projects";
        this.taskServiceUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].origin + "/api/Tasks";
    }
    ApiService.prototype.GetUsers = function () {
        var getUrl = this.userServiceUrl + '/GetUsers';
        return this._http.get(getUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.json(); }))
            .catch(this.handleError);
    };
    ApiService.prototype.AddUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var addUrl = this.userServiceUrl + '/AddUser';
        return this._http.post(addUrl, body, options)
            .catch(this.handleError);
    };
    ApiService.prototype.UpdateUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var updateUrl = this.userServiceUrl + '/UpdateUser';
        return this._http.post(updateUrl, body, options)
            .catch(this.handleError);
    };
    ApiService.prototype.DeleteUser = function (user) {
        var body = JSON.stringify(user);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var updateUrl = this.userServiceUrl + '/DeleteUser';
        return this._http.post(updateUrl, body, options)
            .catch(this.handleError);
    };
    ApiService.prototype.GetProjects = function () {
        var getUrl = this.projectServiceUrl + '/GetProjects';
        return this._http.get(getUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.json(); }))
            .catch(this.handleError);
    };
    ApiService.prototype.AddProject = function (project) {
        var body = JSON.stringify(project);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var addUrl = this.projectServiceUrl + '/AddProject';
        return this._http.post(addUrl, body, options)
            .catch(this.handleError);
    };
    ApiService.prototype.UpdateProject = function (project) {
        var body = JSON.stringify(project);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var updateUrl = this.projectServiceUrl + '/UpdateProject';
        return this._http.post(updateUrl, body, options)
            .catch(this.handleError);
    };
    ApiService.prototype.SuspendProject = function (projectID) {
        var body = JSON.stringify(projectID);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var deleteUrl = this.projectServiceUrl + '/SuspendProject';
        return this._http.post(deleteUrl, body, options)
            .catch(this.handleError);
    };
    ApiService.prototype.AddTask = function (task) {
        var body = JSON.stringify(task);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var addUrl = this.taskServiceUrl + '/AddTask';
        return this._http.post(addUrl, body, options)
            .catch(this.handleError);
    };
    ApiService.prototype.UpdateTask = function (task) {
        var body = JSON.stringify(task);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var updateUrl = this.taskServiceUrl + '/UpdateTask';
        return this._http.post(updateUrl, body, options)
            .catch(this.handleError);
    };
    ApiService.prototype.AddParentTask = function (task) {
        var body = JSON.stringify(task);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var addUrl = this.taskServiceUrl + '/AddParentTask';
        return this._http.post(addUrl, body, options)
            .catch(this.handleError);
    };
    ApiService.prototype.GetParentTasks = function () {
        var getUrl = this.taskServiceUrl + '/GetParentTasks';
        return this._http.get(getUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.json(); }))
            .catch(this.handleError);
    };
    ApiService.prototype.GetTasks = function (projectID) {
        var getUrl = this.taskServiceUrl + '/GetTasks/' + projectID;
        return this._http.get(getUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) { return response.json(); }))
            .catch(this.handleError);
    };
    ApiService.prototype.EndTask = function (task) {
        var body = JSON.stringify(task);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var endUrl = this.taskServiceUrl + '/EndTask';
        return this._http.post(endUrl, body, options)
            .catch(this.handleError);
    };
    ApiService.prototype.handleError = function (error) {
        console.error('ApiService:handleError', error);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\r\n  width: 15%;\r\n}\r\n\r\ninput {\r\n  width: 40%;\r\n}\r\n\r\n.form-group {\r\n  display: flex;\r\n}\r\n\r\n.BottomMargin {\r\n  margin-bottom: 1%;\r\n}\r\n\r\n.alertDanger {\r\n  color: #a94442;\r\n  padding-left: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form #addUserForm=\"ngForm\">\r\n    <h6 id=\"userMsg\"></h6>\r\n    <div class=\"form-group\">\r\n      <label for=\"txtFName\">First Name:</label>\r\n      <input type=\"text\" maxlength=\"30\" class=\"form-control\" [(ngModel)]=\"FirstName\" id=\"txtFName\" name=\"txtFName\"\r\n        required #txtFName=\"ngModel\">\r\n      <div [hidden]=\"!firstNameError\" class=\"alertDanger\">\r\n        First Name is required\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"txtLName\">Last Name:</label>\r\n      <input type=\"text\" maxlength=\"30\" class=\"form-control\" [(ngModel)]=\"LastName\" id=\"txtLName\" name=\"txtLName\"\r\n        required #txtLName=\"ngModel\">\r\n      <div [hidden]=\"!lastNameError\" class=\"alertDanger\">\r\n        Last Name is required\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"txtEmpId\">Employee ID:</label>\r\n      <input type=\"text\" maxlength=\"6\" (keypress)=\"numberOnly($event)\" class=\"form-control\" [(ngModel)]=\"EmployeeID\" id=\"txtEmpId\"\r\n        name=\"txtEmpId\" required #txtEmpId=\"ngModel\">\r\n      <div [hidden]=\"!employeeIDError\" class=\"alertDanger\">\r\n        EmployeeID is required\r\n      </div>\r\n    </div>\r\n    <div style=\"padding-left: 30%;\">\r\n      <button type=\"submit\" class=\"btn btn-default\" style=\"width: 20%;\" (click)=\"AddUpdateUser();\">{{AddButtonText}}</button>\r\n      <button class=\"btn btn-default\" (click)=\"ResetData();\" style=\"margin-left: 5px; width: 15%;\">{{ResetButtonText}}</button>\r\n    </div>\r\n  </form>\r\n  <hr style=\"border-top: 1px solid #333;\" />\r\n  <div>\r\n    <input type=\"text\" class=\"form-control\" (input)=\"filterItem()\" [(ngModel)]=\"searchText\" style=\"display: inline; width: 43%;\"\r\n      placeholder=\"Search...\">\r\n    <b style=\"display: inline; margin-left: 2%; width: 10%;\">Sort:</b>\r\n    <button class=\"form-control overFlow\" (click)=\"sortingUser('FName')\" style=\"display: inline;margin-left: 2%; width: 15%;\">First\r\n      Name</button>\r\n    <button class=\"form-control overFlow\" (click)=\"sortingUser('LName')\" style=\"display: inline;margin-left: 2%; width: 15%;\">Last\r\n      Name</button>\r\n    <button class=\"form-control overFlow\" (click)=\"sortingUser('EId')\" style=\"display: inline;margin-left: 2%; width: 15%;\">Employee\r\n      Id</button>\r\n  </div>\r\n\r\n  <div *ngFor=\"let user of filteredList\">\r\n    <hr style=\"border-top: dotted 1px;\" />\r\n    <input type=\"text\" class=\"form-control\" style=\"width: 25%; display: inline; margin-left: 1%;\" disabled value={{user.FirstName}}>\r\n    <input type=\"text\" class=\"form-control\" style=\"width: 25%; display: inline; margin-left: 1%;\" disabled value={{user.LastName}}>\r\n    <input type=\"text\" class=\"form-control\" style=\"width: 25%; display: inline; margin-left: 1%;\" disabled value={{user.EmployeeID}}>\r\n\r\n    <button class=\"btn btn-default\" (click)=\"EditUser(user)\" style=\"width: 10%; display: inline; margin-left: 1%;\">Edit</button>\r\n    <button class=\"btn btn-default\" (click)=\"DeleteUser(user)\" style=\"width: 10%; display: inline; margin-left: 1%;\">Delete</button>\r\n  </div>\r\n\r\n  <div *ngIf=\"userListCount==0\">\r\n    <label>There are no users</label>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user-model */ "./src/app/models/user-model.ts");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api-service */ "./src/app/service/api-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(apiService) {
        this.apiService = apiService;
        this.firstNameError = false;
        this.lastNameError = false;
        this.employeeIDError = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.AddButtonText = "Add User";
        this.ResetButtonText = "Reset";
        this.GetUsers();
    };
    UsersComponent.prototype.sortingUser = function (sort) {
        if (sort == 'FName') {
            this.filteredList.sort(function (a, b) {
                if (a.FirstName < b.FirstName)
                    return -1;
                else if (a.FirstName > b.FirstName)
                    return 1;
                else
                    return 0;
            });
        }
        else if (sort == 'LName') {
            this.filteredList.sort(function (a, b) {
                if (a.LastName < b.LastName)
                    return -1;
                else if (a.LastName > b.LastName)
                    return 1;
                else
                    return 0;
            });
        }
        else if (sort == 'EId') {
            this.filteredList.sort(function (a, b) {
                if (a.EmployeeID < b.EmployeeID)
                    return -1;
                else if (a.EmployeeID > b.EmployeeID)
                    return 1;
                else
                    return 0;
            });
        }
    };
    UsersComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    UsersComponent.prototype.assignCopy = function () {
        this.filteredList = Object.assign([], this.UserList);
        this.userListCount = this.filteredList.length;
    };
    UsersComponent.prototype.filterItem = function () {
        var _this = this;
        if (!this.searchText)
            this.assignCopy();
        this.filteredList = Object.assign([], this.UserList).filter(function (item) { return (item.FirstName != undefined ? item.FirstName.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1 : true) ||
            (item.LastName != undefined ? item.LastName.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1 : true) ||
            (item.EmployeeID != undefined ? item.EmployeeID.toLowerCase().indexOf(_this.searchText.toLowerCase()) > -1 : true); });
    };
    UsersComponent.prototype.GetUsers = function () {
        var _this = this;
        this.apiService.GetUsers()
            .subscribe(function (data) {
            _this.UserList = data;
            _this.assignCopy();
        }, function (error) {
            console.log(error);
        });
    };
    UsersComponent.prototype.AddUpdateUser = function () {
        document.getElementById('userMsg').innerText = "";
        document.getElementById('userMsg').style.color = "none";
        if (this.UserID) {
            this.UpdateUser();
        }
        else {
            this.AddUser();
        }
    };
    UsersComponent.prototype.AddUser = function () {
        var _this = this;
        if (!this.FirstName) {
            this.firstNameError = true;
        }
        else {
            this.firstNameError = false;
        }
        if (!this.LastName) {
            this.lastNameError = true;
        }
        else {
            this.lastNameError = false;
        }
        if (!this.EmployeeID) {
            this.employeeIDError = true;
        }
        else {
            this.employeeIDError = false;
        }
        if (!this.firstNameError && !this.lastNameError && !this.employeeIDError) {
            this.object = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserModel"]();
            this.object.FirstName = this.FirstName;
            this.object.LastName = this.LastName;
            this.object.EmployeeID = this.EmployeeID;
            this.apiService.AddUser(this.object)
                .subscribe(function (data) {
                _this.ResetData();
                _this.GetUsers();
                document.getElementById('userMsg').innerText = "User added successfully...";
                document.getElementById('userMsg').style.color = "green";
            }, function (error) {
                console.log(error);
                document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
                document.getElementById('userMsg').style.color = "red";
            });
        }
    };
    UsersComponent.prototype.UpdateUser = function () {
        var _this = this;
        if (!this.FirstName) {
            this.firstNameError = true;
        }
        else {
            this.firstNameError = false;
        }
        if (!this.LastName) {
            this.lastNameError = true;
        }
        else {
            this.lastNameError = false;
        }
        if (!this.EmployeeID) {
            this.employeeIDError = true;
        }
        else {
            this.employeeIDError = false;
        }
        if (!this.firstNameError && !this.lastNameError && !this.employeeIDError) {
            this.object = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserModel"]();
            this.object.UserID = this.UserID;
            this.object.FirstName = this.FirstName;
            this.object.LastName = this.LastName;
            this.object.EmployeeID = this.EmployeeID;
            this.apiService.UpdateUser(this.object)
                .subscribe(function (data) {
                _this.ResetData();
                _this.GetUsers();
                document.getElementById('userMsg').innerText = "User updated successfully...";
                document.getElementById('userMsg').style.color = "green";
            }, function (error) {
                console.log(error);
                document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
                document.getElementById('userMsg').style.color = "red";
            });
        }
    };
    UsersComponent.prototype.DeleteUser = function (user) {
        var _this = this;
        var obj = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserModel"]();
        obj.UserID = user.UserID;
        obj.FirstName = user.FirstName;
        obj.LastName = user.LastName;
        obj.EmployeeID = user.EmployeeID;
        document.getElementById('userMsg').innerText = "";
        document.getElementById('userMsg').style.color = "none";
        this.apiService.DeleteUser(obj)
            .subscribe(function (data) {
            _this.ResetData();
            _this.GetUsers();
            document.getElementById('userMsg').innerText = "User deleted successfully...";
            document.getElementById('userMsg').style.color = "green";
        }, function (error) {
            console.log(error);
            document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
            document.getElementById('userMsg').style.color = "red";
        });
    };
    UsersComponent.prototype.EditUser = function (user) {
        this.AddButtonText = "Update";
        this.ResetButtonText = "Cancel";
        this.FirstName = user.FirstName;
        this.LastName = user.LastName;
        this.EmployeeID = user.EmployeeID;
        this.UserID = user.UserID;
    };
    UsersComponent.prototype.ResetData = function () {
        this.object = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["UserModel"]();
        this.FirstName = undefined;
        this.LastName = undefined;
        this.EmployeeID = undefined;
        this.UserID = undefined;
        this.firstNameError = false;
        this.lastNameError = false;
        this.employeeIDError = false;
        this.AddButtonText = "Add User";
        this.ResetButtonText = "Reset";
        document.getElementById('userMsg').innerText = "";
        document.getElementById('userMsg').style.color = "none";
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/view-tasks/view-tasks.component.css":
/*!*****************************************************!*\
  !*** ./src/app/view-tasks/view-tasks.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-tasks/view-tasks.component.html":
/*!******************************************************!*\
  !*** ./src/app/view-tasks/view-tasks.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h6 id=\"userMsg\"></h6>\r\n  <div>\r\n    <label style=\"display: inline;\">Project:</label>\r\n    <input type=\"text\" placeholder=\"Please select the project...\" [(ngModel)]=\"Project\" style=\"display: inline; width: 80%;\" class=\"form-control\" disabled>\r\n    <button id=\"openModalButton\" class=\"form-control\" style=\"display: inline;margin-left: 1%; width: 10%;\" (click)=\"openProjectDialog()\">Search</button>\r\n  </div>\r\n  <div style=\"margin-top: 1%;\">\r\n    <label style=\"display: inline;\">Sort Tasks by: </label>\r\n    <button class=\"form-control\" style=\"display: inline;margin-left: 1%; width: 15%;\" (click)=\"sortingTask('SDate')\">Start\r\n      Date</button>\r\n    <button class=\"form-control\" style=\"display: inline;margin-left: 1%; width: 15%;\" (click)=\"sortingTask('EDate')\">End\r\n      Date</button>\r\n    <button class=\"form-control\" style=\"display: inline;margin-left: 1%; width: 15%;\" (click)=\"sortingTask('Priority')\">Priority</button>\r\n    <button class=\"form-control\" style=\"display: inline;margin-left: 1%; width: 15%;\" (click)=\"sortingTask('Completed')\">Completed</button>\r\n  </div>\r\n  <div *ngFor=\"let task of filteredList\">\r\n    <hr style=\"border-top: dotted 1px;\" />\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-2\">\r\n        <label style=\"margin-right: 57%\">Task</label>\r\n        <span>{{task.Task}}</span>\r\n      </div>\r\n      <div class=\"col-xs-2\">\r\n        <label style=\"margin-right: 10%\">Parent Task</label>\r\n        <span>{{task.ParentTask}}</span>\r\n      </div>\r\n      <div class=\"col-xs-2\">\r\n        <label style=\"margin-right: 57%\">Priority</label>\r\n        <span>{{task.Priority}}</span>\r\n      </div>\r\n      <div class=\"col-xs-2\">\r\n        <label style=\"margin-right: 35%\">Start Date</label>\r\n        <span>{{task.StartDate | date: 'dd-MM-yyyy'}}</span>\r\n      </div>\r\n      <div class=\"col-xs-2\">\r\n        <label style=\"margin-right: 39%\">End Date</label>\r\n        <span>{{task.EndDate | date: 'dd-MM-yyyy'}}</span>\r\n      </div>\r\n      <div class=\"col-xs-2\">\r\n        <button class=\"btn btn-default\" [disabled]=\"task.Status\" style=\"width: 100%; height: 34px; margin-bottom: 10%;\"\r\n          (click)=\"EditTask(task)\">Edit</button>\r\n        <button class=\"btn btn-default\" [disabled]=\"task.Status\" style=\"width: 100%; height: 34px;margin-bottom: 1%;\"\r\n          (click)=\"EndTask(task)\">End\r\n          Task</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"taskListCount==0\">\r\n    <hr style=\"border-top: dotted 1px;\" />\r\n    <b>There are no Tasks</b>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/view-tasks/view-tasks.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view-tasks/view-tasks.component.ts ***!
  \****************************************************/
/*! exports provided: ViewTasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTasksComponent", function() { return ViewTasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/api-service */ "./src/app/service/api-service.ts");
/* harmony import */ var _model_popup_project_list_model_project_list_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model-popup/project-list-model/project-list-model.component */ "./src/app/model-popup/project-list-model/project-list-model.component.ts");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-bootstrap-modal */ "./node_modules/ng2-bootstrap-modal/index.js");
/* harmony import */ var ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewTasksComponent = /** @class */ (function () {
    function ViewTasksComponent(apiService, dialogService, router) {
        this.apiService = apiService;
        this.dialogService = dialogService;
        this.router = router;
    }
    ViewTasksComponent.prototype.ngOnInit = function () {
    };
    ViewTasksComponent.prototype.EndTask = function (task) {
        var _this = this;
        this.apiService.EndTask(task).subscribe(function (data) {
            _this.GetTasks(_this.ProjectID);
            document.getElementById('userMsg').innerText = "Task ended successfully...";
            document.getElementById('userMsg').style.color = "green";
        }, function (error) {
            console.log(error);
            document.getElementById('userMsg').innerText = "Error occurred. Please try again...";
            document.getElementById('userMsg').style.color = "red";
        });
    };
    ViewTasksComponent.prototype.EditTask = function (task) {
        this.router.navigate(['/addTasks', { task: JSON.stringify(task) }], { skipLocationChange: true });
    };
    ViewTasksComponent.prototype.openProjectDialog = function () {
        var _this = this;
        var disposable = this.dialogService.addDialog(_model_popup_project_list_model_project_list_model_component__WEBPACK_IMPORTED_MODULE_2__["ProjectListModelComponent"], this.projectList)
            .subscribe(function (selectedProject) {
            if (selectedProject) {
                _this.ProjectID = selectedProject.ProjectID;
                _this.Project = selectedProject.Project;
                _this.GetTasks(_this.ProjectID);
            }
        });
        setTimeout(function () {
            disposable.unsubscribe();
        }, 10000);
    };
    ViewTasksComponent.prototype.sortingTask = function (sort) {
        if (sort == 'SDate') {
            this.filteredList.sort(function (a, b) {
                if (a.StartDate < b.StartDate)
                    return -1;
                else if (a.StartDate > b.StartDate)
                    return 1;
                else
                    return 0;
            });
        }
        else if (sort == 'EDate') {
            this.filteredList.sort(function (a, b) {
                if (a.EndDate < b.EndDate)
                    return -1;
                else if (a.EndDate > b.EndDate)
                    return 1;
                else
                    return 0;
            });
        }
        else if (sort == 'Priority') {
            this.filteredList.sort(function (a, b) {
                if (a.Priority < b.Priority)
                    return -1;
                else if (a.Priority > b.Priority)
                    return 1;
                else
                    return 0;
            });
        }
        else if (sort == 'Completed') {
            this.filteredList.sort(function (a, b) {
                if (a.Status > b.Status)
                    return -1;
                else if (a.Status < b.Status)
                    return 1;
                else
                    return 0;
            });
        }
    };
    ViewTasksComponent.prototype.GetTasks = function (projectID) {
        var _this = this;
        this.apiService.GetTasks(projectID)
            .subscribe(function (data) {
            console.log(data);
            _this.taskList = data;
            _this.assignCopy();
        }, function (error) {
            console.log(error);
        });
    };
    ViewTasksComponent.prototype.assignCopy = function () {
        this.filteredList = Object.assign([], this.taskList);
        this.taskListCount = this.filteredList.length;
    };
    ViewTasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-tasks',
            template: __webpack_require__(/*! ./view-tasks.component.html */ "./src/app/view-tasks/view-tasks.component.html"),
            styles: [__webpack_require__(/*! ./view-tasks.component.css */ "./src/app/view-tasks/view-tasks.component.css")]
        }),
        __metadata("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["DialogService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ViewTasksComponent);
    return ViewTasksComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    origin: 'http://localhost:50329' //'http://localhost:50329'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Admin\GitHub\Web\ProjectManagerUI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map