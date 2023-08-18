/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/MyApp.js":
/*!**********************!*\
  !*** ./src/MyApp.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var _VersionComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VersionComponent.js */ "./src/VersionComponent.js");


function MyApp(_ref) {
  var children = _ref.children;
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h1", null, "Inferno Boilerplate", 16), children], 0);
}

/***/ }),

/***/ "./src/MyHome.js":
/*!***********************!*\
  !*** ./src/MyHome.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var _components_job_JobsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/job/JobsList */ "./src/components/job/JobsList.js");
/* harmony import */ var _components_ui_sec_home_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ui/sec_home_search */ "./src/components/ui/sec_home_search.js");
/* harmony import */ var _components_ui_sec_home_startup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ui/sec_home_startup */ "./src/components/ui/sec_home_startup.js");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var MyHome = /*#__PURE__*/function (_Component) {
  _inheritsLoose(MyHome, _Component);
  function MyHome(props) {
    return _Component.call(this, props) || this;
  }
  var _proto = MyHome.prototype;
  _proto.render = function render() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "main", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _components_ui_sec_home_search__WEBPACK_IMPORTED_MODULE_2__["default"]), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _components_ui_sec_home_startup__WEBPACK_IMPORTED_MODULE_3__["default"])], 4), 2);
  };
  return MyHome;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyHome);

/***/ }),

/***/ "./src/VersionComponent.js":
/*!*********************************!*\
  !*** ./src/VersionComponent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VersionComponent)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");


function showVersion() {
  alert("The version is: " + inferno__WEBPACK_IMPORTED_MODULE_0__.version + "!");
}
function VersionComponent() {
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "p", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("This is an Inferno Boilerplate example using "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "em", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Inferno "), inferno__WEBPACK_IMPORTED_MODULE_0__.version], 0), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(".")], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "button", null, "Show version", 16, {
    "onClick": showVersion
  })], 4);
}

/***/ }),

/***/ "./src/components/job/JobFormPage.js":
/*!*******************************************!*\
  !*** ./src/components/job/JobFormPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JobFormPage)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var _utils_FormComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/FormComponent */ "./src/components/utils/FormComponent.js");
/* harmony import */ var _api_api_jobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api_jobs */ "./src/api/api_jobs.ts");
/* harmony import */ var _ui_CategoriesSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../ui/CategoriesSelector */ "./src/components/ui/CategoriesSelector.js");
/* harmony import */ var _utils_Categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../utils/Categories */ "./src/components/utils/Categories.ts");

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var JobFormPage = /*#__PURE__*/function (_FormComponent) {
  _inheritsLoose(JobFormPage, _FormComponent);
  function JobFormPage(props) {
    var _this;
    _this = _FormComponent.call(this, props) || this;
    _this.state = {
      title: "",
      budget_range: "1000_3000xrp",
      description: "",
      categories: (0,_utils_Categories__WEBPACK_IMPORTED_MODULE_4__.categories_default)()
    };
    _this.handleUpdateCategories = _this.handleUpdateCategories.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = JobFormPage.prototype;
  _proto.onSubmit = function onSubmit(formData) {
    console.log(formData);
    var job = {
      title: formData.title,
      description: formData.description,
      budget_range: formData.budget_range,
      categories: formData.categories
    };
    (0,_api_api_jobs__WEBPACK_IMPORTED_MODULE_2__.register_new_job)(job).then(function (result) {
      var new_job_id = result.id;
      window.location.href = "/job/" + new_job_id;
    });
  };
  _proto.handleUpdateCategories = function handleUpdateCategories(categories) {
    this.state.categories = categories;
  };
  _proto.render = function render() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "myform custom_bisque_bg", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "sub_header_in sticky_header", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h1", null, "Listing new job", 16), 2), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "row justify-content-center", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-xl-7 col-lg-8 col-md-10 mt-5", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "box_account", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h3", "new_client", "Information", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "small", "float-end pt-2", "* Required Fields", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form_container custom_gradient_border", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", "form-control", null, 1, {
      "type": "text",
      "name": "title",
      "value": this.state.title || '',
      "onInput": this.handleInputChange,
      "placeholder": "Title*"
    }), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", null, "Budget", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(256, "select", "form-control", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "less 1000 XRP", 16, {
      "value": "less_1000xrp"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "1000 - 3000 XRP", 16, {
      "value": "1000_3000xrp"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "3000 - 6000 XRP", 16, {
      "value": "3000_6000xrp"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "+ 10000 XRP", 16, {
      "value": "more_10000xrp"
    })], 4, {
      "name": "budget_range",
      "value": this.state.budget_range || '',
      "onChange": this.handleInputChange,
      "id": "job_bugdet_range"
    })], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", null, "Categories", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _ui_CategoriesSelector__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "handleUpdateCategories": this.handleUpdateCategories
    })], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "hr"), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group mb-3", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", "form-label", "Description", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(128, "textarea", "form-control", null, 1, {
      "name": "description",
      "value": this.state.description || '',
      "onInput": this.handleInputChange,
      "rows": "25",
      "style": "min-height: 200px !important;"
    })], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", "container_check", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Accept "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "a", null, "Terms and conditions", 16, {
      "href": "#0"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", null, null, 1, {
      "type": "checkbox"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "span", "checkmark")], 4), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "text-center", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "button", "btn_1 full-width", "Publish now!", 16, {
      "type": "submit",
      "onsubmit": this.handleSubmit,
      "onclick": this.handleSubmit
    }), 2)], 4)], 4), 2), 2)], 4);
  };
  return JobFormPage;
}(_utils_FormComponent__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/components/job/JobPage.js":
/*!***************************************!*\
  !*** ./src/components/job/JobPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var _api_api_jobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../api/api_jobs */ "./src/api/api_jobs.ts");
/* harmony import */ var _JobRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JobRow */ "./src/components/job/JobRow.js");
/* harmony import */ var _quotation_QuotationsListForAdmin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../quotation/QuotationsListForAdmin */ "./src/components/quotation/QuotationsListForAdmin.js");
/* harmony import */ var _quotation_QuotationAsideContactForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quotation/QuotationAsideContactForm */ "./src/components/quotation/QuotationAsideContactForm.js");
/* harmony import */ var _quotation_QuotationJobForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../quotation/QuotationJobForm */ "./src/components/quotation/QuotationJobForm.js");
/* harmony import */ var _quotation_QuotationApprovedPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../quotation/QuotationApprovedPanel */ "./src/components/quotation/QuotationApprovedPanel.js");
/* harmony import */ var _components_utils_AuthRouting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../components/utils/AuthRouting */ "./src/components/utils/AuthRouting.ts");
/* harmony import */ var _utils_Categories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../utils/Categories */ "./src/components/utils/Categories.ts");
/* harmony import */ var _ui_CategoriesSelector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../ui/CategoriesSelector */ "./src/components/ui/CategoriesSelector.js");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



//import QuotationForm  from "./../quotation/QuotationForm";







var JobPage = /*#__PURE__*/function (_Component) {
  _inheritsLoose(JobPage, _Component);
  function JobPage(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    var params = props.match.params;
    _this.state = {
      job: "NOT_LOADED",
      job_id: params.job_id
    };
    return _this;
  }
  var _proto = JobPage.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;
    (0,_api_api_jobs__WEBPACK_IMPORTED_MODULE_1__.get_job)(this.state.job_id).then(function (job) {
      //
      console.log(job);
      job.categories = JSON.parse(job.categories);
      console.log(job);
      _this2.setState({
        job: job
      });
    });
  };
  _proto._render_job_bottom_by_user = function _render_job_bottom_by_user() {
    var have_approved_quotation = this.state.job.approved_quotation != undefined;
    if (have_approved_quotation) {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _quotation_QuotationApprovedPanel__WEBPACK_IMPORTED_MODULE_6__["default"], {
        "quotation_id": this.state.job.approved_quotation.id
      });
    }
    var is_owner = _components_utils_AuthRouting__WEBPACK_IMPORTED_MODULE_7__["default"].is_owner(this.state.job.payer.id);
    var is_freelance = !is_owner;
    if (is_freelance) {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _quotation_QuotationJobForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
        "job_id": this.state.job.id
      });
    }
    if (is_owner) {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _quotation_QuotationsListForAdmin__WEBPACK_IMPORTED_MODULE_3__["default"], {
        "job_id": this.state.job.id,
        "payer_id": this.state.job.payer.id
      });
    }
  };
  _proto._render_budget = function _render_budget() {
    var budget = "less 1000";
    if (this.state.job.budget_range == "1000_3000xrp") {
      budget = "1000 - 3000";
    } else if (this.state.job.budget_range == "3000_6000xrp") {
      budget = "3000 - 6000";
    } else if (this.state.job.budget_range == "more_10000xrp") {
      budget = "+10000";
    }
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "p", "h2 text-right", [budget, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "small", "text-muted", "$XRP", 16)], 0, {
      "id": "budget"
    });
  };
  _proto._render_job = function _render_job() {
    if (this.state.job == "NOT_LOADED") {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "spinner-border text-primary", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "span", "sr-only", "Loading...", 16), 2, {
        "role": "status"
      });
    } else {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "nav", "secondary_nav sticky_horizontal_2 mysubnav", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "ul", "clearfix", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "a", "active", "Description", 16, {
        "href": "#description"
      }), 2), 2), 2), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container margin_60_35", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "row", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-lg-8", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "section", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "detail_title_1", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h1", null, this.state.job.title, 0), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "p", "p3", this.state.job.payer.name, 0)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "p", null, this.state.job.description, 0), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h5", "add_bottom_15", "Budget", 16), this._render_budget(), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h5", "add_bottom_15", "Categories", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "row add_bottom_30", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _ui_CategoriesSelector__WEBPACK_IMPORTED_MODULE_9__["default"], {
        "initial_categories": this.state.job.categories
      }), 2)], 0, {
        "id": "description"
      }), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _quotation_QuotationAsideContactForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
        "job_id": this.state.job.id
      })], 4), 2), this._render_job_bottom_by_user()], 0);
    }
  }

  /** <JobRow data={this.state.job}></JobRow>
         <QuotationForm job_id={this.state.job.id}></QuotationForm>
         <QuotationsListForAdmin job_id={this.state.job.id} payer_id={this.state.job.payer.id}></QuotationsListForAdmin> 
  */;
  _proto.render = function render() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, this._render_job(), 0);
  };
  return JobPage;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JobPage);

/***/ }),

/***/ "./src/components/job/JobRow.js":
/*!**************************************!*\
  !*** ./src/components/job/JobRow.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JobRow)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var inferno_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inferno-router */ "./node_modules/inferno-router/dist/index.esm.js");
/* harmony import */ var _api_api_with_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../api/api_with_auth */ "./src/api/api_with_auth.ts");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var JobRow = /*#__PURE__*/function (_Component) {
  _inheritsLoose(JobRow, _Component);
  function JobRow(props) {
    return _Component.call(this, props) || this;
  }
  var _proto = JobRow.prototype;
  _proto.render = function render() {
    var data = this.props.data; // Recibimos el objeto Job como prop
    var url_job = "/job/" + data.id;
    var text_owner = (0,_api_api_with_auth__WEBPACK_IMPORTED_MODULE_2__.session_is_owner)(data.payer.id) ? "(OWNER)" : "";
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "card text-center", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "card-header custom-background", [data.title, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" "), text_owner], 0), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "card-body", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "p", "card-text", data.description, 0), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "card-footer text-muted custom-background", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("2 days ago "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
      "to": url_job,
      children: " See more "
    })], 4)], 4);
  };
  return JobRow;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/job/JobSearchPage.js":
/*!*********************************************!*\
  !*** ./src/components/job/JobSearchPage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JobSearchPage)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var _api_api_jobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../api/api_jobs */ "./src/api/api_jobs.ts");
/* harmony import */ var inferno_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inferno-router */ "./node_modules/inferno-router/dist/index.esm.js");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var JobSearchPage = /*#__PURE__*/function (_Component) {
  _inheritsLoose(JobSearchPage, _Component);
  function JobSearchPage(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    var params = props.match.params;
    _this.state = {
      is_loading: true,
      data: [],
      search_text: params.search
    };
    return _this;
  }
  var _proto = JobSearchPage.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;
    (0,_api_api_jobs__WEBPACK_IMPORTED_MODULE_1__.get_list_jobs)().then(function (list_jobs) {
      _this2.setState({
        data: list_jobs,
        is_loading: false
      });
    })["catch"](function (error) {
      console.error('Error fetching data:', error);
      _this2.setState({
        is_loading: false
      });
    });
  };
  _proto._render_list = function _render_list() {
    if (this.state.is_loading) {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-xl-4 col-lg-6 col-md-6", "Loading...", 16);
    }
    var jobs = this.state.data;
    var jobElements = [];
    for (var index = 0; index < jobs.length; index++) {
      var job = jobs[index];
      //<JobRow key={job.id} data={job}/>
      jobElements.push(this._render_item(job));
    }
    return jobElements;
  };
  _proto._render_budget = function _render_budget(job) {
    var budget = "less 1000";
    if (job.budget_range == "1000_3000xrp") {
      budget = "1000 - 3000";
    } else if (job.budget_range == "3000_6000xrp") {
      budget = "3000 - 6000";
    } else if (job.budget_range == "more_10000xrp") {
      budget = "+10000";
    }
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "em", null, [budget, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "small", "text-muted", "$XRP", 16)], 0);
  };
  _proto._render_item = function _render_item(job) {
    var title = job.title;
    var short_description = job.description.slice(0, 45) + "...";
    var url_detail = "/job/" + job.id;
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-xl-4 col-lg-6 col-md-6 search-item", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "strip grid", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "wrapper", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h3", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
      "to": url_detail,
      children: title
    }), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "small", "name-company", job.payer.name, 0), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "p", "short-description", short_description, 0)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "ul", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "span", "loc_open budget_on_list", this._render_budget(job), 0), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "score", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "span", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Superb"), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "em", null, "10 Quotes", 16)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "strong", null, "8.9", 16)], 4), 2)], 4)], 4), 2);
  };
  _proto.render = function render() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "row", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-lg-3 col-md-4 col-10", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h4", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "strong", null, "145", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" result for All listing")], 4), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-lg-9 col-md-8 col-2", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "a", "search_mob btn_search_mobile", null, 1, {
      "href": "#0"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "row g-0 custom-search-input-2 inner", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-lg-4", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", "form-control", null, 1, {
      "type": "text",
      "placeholder": "What are you looking for..."
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon_search")], 4), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-lg-4", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", "form-control", null, 1, {
      "type": "text",
      "placeholder": "Where"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon_pin_alt")], 4), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-lg-3", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(256, "select", "wide", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "All Categories", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Shops", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Hotels", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Restaurants", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Bars", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Events", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Fitness", 16)], 4), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-lg-1", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", null, null, 1, {
      "type": "submit"
    }), 2)], 4)], 4)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "search_mob_wp", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "custom-search-input-2", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", "form-control", null, 1, {
      "type": "text",
      "placeholder": "What are you looking for..."
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon_search")], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", "form-control", null, 1, {
      "type": "text",
      "placeholder": "Where"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon_pin_alt")], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(256, "select", "wide", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "All Categories", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Shops", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Hotels", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Restaurants", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Bars", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Events", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Fitness", 16)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", null, null, 1, {
      "type": "submit"
    })], 4), 2)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "filters_listing sticky_horizontal", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "ul", "clearfix", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "switch-field", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", null, null, 1, {
      "type": "radio",
      "id": "all",
      "name": "listing_filter",
      "value": "all",
      "checked": true
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", null, "All", 16, {
      "for": "all"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", null, null, 1, {
      "type": "radio",
      "id": "popular",
      "name": "listing_filter",
      "value": "popular"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", null, "Popular", 16, {
      "for": "popular"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", null, null, 1, {
      "type": "radio",
      "id": "latest",
      "name": "listing_filter",
      "value": "latest"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", null, "Latest", 16, {
      "for": "latest"
    })], 4), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "a", "btn_filt", "More filters", 16, {
      "data-bs-toggle": "collapse",
      "href": "#filters",
      "aria-expanded": "false",
      "aria-controls": "filters",
      "data-text-swap": "Less filters",
      "data-text-original": "More filters"
    }), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "layout_view", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "a", "active", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon-th"), 2, {
      "href": "#0"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "a", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon-th-list"), 2, {
      "href": "#0"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "a", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon-map"), 2, {
      "href": "#0"
    })], 4), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "a", "btn_map", "View on map", 16, {
      "data-bs-toggle": "collapse",
      "href": "#collapseMap",
      "aria-expanded": "false",
      "aria-controls": "collapseMap",
      "data-text-swap": "Hide map",
      "data-text-original": "View on map"
    }), 2)], 4), 2), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "collapse", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "map", null, 1, {
      "id": "map"
    }), 2, {
      "id": "collapseMap"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "collapse", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container margin_30_5", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "row", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-md-4", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h6", null, "Rating", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "ul", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", "container_check", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Superb 9+ "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "small", null, "67", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", null, null, 1, {
      "type": "checkbox"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "span", "checkmark")], 4), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", "container_check", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Very Good 8+ "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "small", null, "89", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", null, null, 1, {
      "type": "checkbox"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "span", "checkmark")], 4), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", "container_check", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Good 7+ "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "small", null, "45", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", null, null, 1, {
      "type": "checkbox"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "span", "checkmark")], 4), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", "container_check", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Pleasant 6+ "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "small", null, "78", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", null, null, 1, {
      "type": "checkbox"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "span", "checkmark")], 4), 2)], 4)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-md-4", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h6", null, "Tags", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "ul", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", "container_check", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Wireless Internet "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "small", null, "12", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", null, null, 1, {
      "type": "checkbox"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "span", "checkmark")], 4), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", "container_check", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Smoking Allowed "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "small", null, "11", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", null, null, 1, {
      "type": "checkbox"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "span", "checkmark")], 4), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", "container_check", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Wheelchair Accesible "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "small", null, "23", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", null, null, 1, {
      "type": "checkbox"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "span", "checkmark")], 4), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", "container_check", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Parking "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "small", null, "56", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", null, null, 1, {
      "type": "checkbox"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "span", "checkmark")], 4), 2)], 4)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-md-4", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "add_bottom_30", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h6", null, "Distance", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "distance", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Radius around selected destination "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "span"), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" km")], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", null, null, 1, {
      "type": "range",
      "min": "10",
      "max": "100",
      "step": "10",
      "value": "30",
      "data-orientation": "horizontal"
    })], 4), 2)], 4), 2), 2, {
      "id": "filters"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container margin_60_35", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "row", this._render_list(), 0), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "p", "text-center", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "a", "btn_1 rounded add_top_30", "Load more", 16, {
      "href": "#0"
    }), 2)], 4)], 4, {
      "id": "results"
    });
  };
  return JobSearchPage;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/job/JobsList.js":
/*!****************************************!*\
  !*** ./src/components/job/JobsList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JobsList)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var inferno_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inferno-router */ "./node_modules/inferno-router/dist/index.esm.js");
/* harmony import */ var _api_api_jobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../api/api_jobs */ "./src/api/api_jobs.ts");
/* harmony import */ var _JobRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JobRow */ "./src/components/job/JobRow.js");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var JobsList = /*#__PURE__*/function (_Component) {
  _inheritsLoose(JobsList, _Component);
  function JobsList(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.state = {
      data: []
    };
    return _this;
  }
  var _proto = JobsList.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;
    (0,_api_api_jobs__WEBPACK_IMPORTED_MODULE_2__.get_list_jobs)().then(function (list_jobs) {
      _this2.setState({
        data: list_jobs
      });
    })["catch"](function (error) {
      console.error('Error fetching data:', error);
    });
  };
  _proto._render_jobs = function _render_jobs() {
    var jobs = this.state.data;
    var jobElements = [];
    for (var index = 0; index < jobs.length; index++) {
      var job = jobs[index];
      jobElements.push((0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _JobRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
        "data": job
      }, job.id));
    }
    return jobElements;
  };
  _proto.render = function render() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "m-5", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h1", null, "Jobs list", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
      "to": "/job/new",
      "class": "btn btn-outline-primary",
      children: "New Job"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, this._render_jobs(), 0, {
      "id": "list"
    })], 4);
  };
  return JobsList;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/quotation/QuotationApprovedDetail.js":
/*!*************************************************************!*\
  !*** ./src/components/quotation/QuotationApprovedDetail.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuotationApprovedDetail)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var _components_utils_AuthRouting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/utils/AuthRouting */ "./src/components/utils/AuthRouting.ts");
/* harmony import */ var _api_api_quotations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api_quotations */ "./src/api/api_quotations.ts");
/* harmony import */ var _api_api_escrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/api_escrow */ "./src/api/api_escrow.ts");
/* harmony import */ var _QuotationApprovedWaitingFinished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QuotationApprovedWaitingFinished */ "./src/components/quotation/QuotationApprovedWaitingFinished.js");
/* harmony import */ var _QuotationDirectTrasfer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./QuotationDirectTrasfer */ "./src/components/quotation/QuotationDirectTrasfer.js");

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var QuotationApprovedDetail = /*#__PURE__*/function (_Component) {
  _inheritsLoose(QuotationApprovedDetail, _Component);
  function QuotationApprovedDetail(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    var quotation = _this.props.quotation;
    var is_payer = _components_utils_AuthRouting__WEBPACK_IMPORTED_MODULE_1__["default"].is_owner(quotation.job.payer.id);
    var is_destine = _components_utils_AuthRouting__WEBPACK_IMPORTED_MODULE_1__["default"].is_owner(quotation.destine.id);
    _this.state = {
      quotation: quotation,
      is_payer: is_payer,
      is_destine: is_destine,
      waiting_finish_escrow: _this._is_waiting_finish_escrow(quotation)
    };
    _this.handleDone = _this.handleDone.bind(_assertThisInitialized(_this));
    _this.handleConfirm = _this.handleConfirm.bind(_assertThisInitialized(_this));
    _this.handle_submit_finish_escrow = _this.handle_submit_finish_escrow.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = QuotationApprovedDetail.prototype;
  _proto._is_waiting_finish_escrow = function _is_waiting_finish_escrow(quotation) {
    return quotation.state == "CONFIRMED" && quotation.escrow_state == "WAITING_XUMM_SIGN_FINISH";
  };
  _proto.handle_submit_finish_escrow = function handle_submit_finish_escrow() {
    this.setState({
      waiting_finish_escrow: true
    });
    (0,_api_api_escrow__WEBPACK_IMPORTED_MODULE_3__.sumbit_finish_escrow)(this.state.quotation.id);
  };
  _proto.handleDone = function handleDone(event) {
    var _this2 = this;
    (0,_api_api_quotations__WEBPACK_IMPORTED_MODULE_2__.make_quotation_done)(this.state.quotation.id).then(function (_res) {
      _this2.refresh();
    });
  };
  _proto.handleConfirm = function handleConfirm(event) {
    var _this3 = this;
    (0,_api_api_quotations__WEBPACK_IMPORTED_MODULE_2__.make_quotation_confirm)(this.state.quotation.id).then(function (_res) {
      _this3.refresh();
    });
  };
  _proto.refresh = function refresh() {
    window.location = "/job/" + this.state.quotation.job.id;
  };
  _proto._render_options = function _render_options() {
    if (this.state.is_destine) {
      if (this.state.quotation.state == "APPROVED") {
        return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "text-center", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "button", "btn_1 full-width", "I have finished!", 16, {
          "onclick": this.handleDone
        }), 2);
      } else if (this.state.quotation.state == "CONFIRMED") {
        return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "text-center", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "button", "btn_1 full-width", "Finish escrow, Gets your earning now!", 16, {
          "onclick": this.handle_submit_finish_escrow
        }), 2);
      } else {
        return [];
      }
    }
    if (this.state.is_payer) {
      if (this.state.quotation.state == "DONE") {
        return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "text-center", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "button", "btn_1 full-width", "Confirm!", 16, {
          "onclick": this.handleConfirm
        }), 2);
      }
      /*else{
          return (<div>OPTIONS: Is payer</div>);
      }*/
    }
  };
  _proto.render = function render() {
    if (this.state.waiting_finish_escrow && this.state.is_destine) {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _QuotationApprovedWaitingFinished__WEBPACK_IMPORTED_MODULE_4__["default"], {
        "quotation": this.state.quotation
      });
    }
    return this.render_content();
  };
  _proto._render_txs = function _render_txs() {
    var txs = this.state.quotation.txs;
    var txsElements = [];
    for (var index = 0; index < txs.length; index++) {
      var tx = txs[index];
      var ledger_txid = tx.ledger_txid;
      var ledger_txid_shorted = ledger_txid.slice(0, 7) + "......." + ledger_txid.slice(ledger_txid.length - 7, ledger_txid.length);
      var url = "https://test.bithomp.com/explorer/" + tx.ledger_txid;
      var html = (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon-link-ext-alt"), tx.tx_type, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" - "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "a", null, ledger_txid_shorted, 0, {
        "href": url,
        "target": "_blank"
      })], 0);
      txsElements.push(html);
    }
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group mb-3", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h4", null, "Transactions", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container", txsElements, 0)], 4, {
      "id": "trasfers"
    });
  };
  _proto.render_content = function render_content() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "myform custom_bg startup", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "sub_header_in sticky_header custom_subheader startup", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h3", null, "Quotation", 16), 2), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "row justify-content-center", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-xl-7 col-lg-8 col-md-10 mt-5", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "box_account", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h3", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon-tasks-1"), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Quotation ")], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form_container custom_gradient_border startup", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", null, "Destine", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, this.state.quotation.destine.name, 0)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", null, "Total amount", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, [this.state.quotation.total_amount, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" XRP")], 0)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group mb-3", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", "form-label", "Description", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "p", null, this.state.quotation.description, 0)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group mb-3", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", "form-label", "Escrow Cheched Time", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "p", null, this.state.quotation.escrow_checked_at, 0)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", null, "Deadline/Escrow expiration days", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, this.state.quotation.delta_days, 0)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group mb-3", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", "form-label", "Escrow Status", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "p", null, this.state.quotation.escrow_state, 0)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group mb-3", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", "form-label", "State", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "p", null, this.state.quotation.state, 0)], 4), this._render_options(), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _QuotationDirectTrasfer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      "quotation": this.state.quotation
    }), this._render_txs()], 0)], 0)], 4), 2), 2)], 4);
  };
  return QuotationApprovedDetail;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/quotation/QuotationApprovedEscrow.js":
/*!*************************************************************!*\
  !*** ./src/components/quotation/QuotationApprovedEscrow.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuotationApprovedEscrow)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var _api_api_escrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../api/api_escrow */ "./src/api/api_escrow.ts");
/* harmony import */ var _api_api_quotations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api_quotations */ "./src/api/api_quotations.ts");

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(typeof iterable + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var QuotationApprovedEscrow = /*#__PURE__*/function (_Component) {
  _inheritsLoose(QuotationApprovedEscrow, _Component);
  function QuotationApprovedEscrow(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    var quotation = props.quotation;
    _this.state = {
      quotation: quotation,
      is_checking: quotation.escrow_state != "NONE",
      is_checked_success: false
    };
    _this.handleSign = _this.handleSign.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = QuotationApprovedEscrow.prototype;
  _proto.handleSign = function handleSign(event) {
    var _this2 = this;
    this.setState({
      is_checking: true
    });
    this.checkEscrow(true);
    (0,_api_api_escrow__WEBPACK_IMPORTED_MODULE_1__.submit_create_escrow)(this.state.quotation.job.id, this.state.quotation.id, function (payload) {
      _this2.setState({
        is_checking: true
      });
    });
  };
  _proto.componentDidMount = function componentDidMount() {
    this.checkEscrow(false);
  };
  _proto.checkEscrow = function checkEscrow(force) {
    var _this3 = this;
    if (this.state.is_checking || force) {
      console.log("checkEscrow...");
      setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_api_api_quotations__WEBPACK_IMPORTED_MODULE_2__.checks_escrow)(_this3.state.quotation.id);
            case 2:
              result = _context.sent;
              console.log(result);
              if (result._action == "SuccessCheck" || result._action == "Checked") {
                _this3.setState({
                  is_checked_success: true
                });
                _this3.cron_reload();
              } else {
                _this3.checkEscrow(true);
              }
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      })), 2000);
    }
  };
  _proto.cron_reload = function cron_reload() {
    var _this4 = this;
    setTimeout(function () {
      window.location = "/job/" + _this4.state.quotation.job.id;
    }, 750);
  };
  _proto.render = function render() {
    if (this.state.is_checking) {
      return this._render_check();
    } else {
      return this._render_sign_form();
    }
  };
  _proto._render_loader = function _render_loader() {
    if (this.state.is_checked_success) {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "d-flex align-items-center me-3", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "strong", null, "Checked escrow... [OK]", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "spinner-border ms-auto text-secondary", null, 1, {
        "role": "status",
        "aria-hidden": "true"
      })], 4);
    }
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "d-flex align-items-center me-3", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "strong", null, "Checking escrow...", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "spinner-border ms-auto text-secondary", null, 1, {
      "role": "status",
      "aria-hidden": "true"
    })], 4);
  };
  _proto._render_check = function _render_check() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "myform custom_bg startup", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "sub_header_in sticky_header custom_subheader startup", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h3", null, "Quotation", 16), 2), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "row justify-content-center", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-xl-7 col-lg-8 col-md-10 mt-5", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "box_account", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h3", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon-tasks-1"), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Escrow for Quotation")], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "small", "float-end pt-2", "* Required Deposit", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form_container custom_gradient_border startup", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, [this._render_loader(), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "img", "bordered-image img-fluid", null, 1, {
      "src": "/static/videos/close_box.webp",
      "type": "video/webp",
      "loop": "loop"
    })], 0), 2)], 4), 2), 2)], 4);
  };
  _proto._render_sign_form = function _render_sign_form() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "myform custom_bg startup", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "sub_header_in sticky_header custom_subheader startup", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h3", null, "Quotation", 16), 2), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "row justify-content-center", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-xl-7 col-lg-8 col-md-10 mt-5", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "box_account", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h3", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon-tasks-1"), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Escrow for Quotation")], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "small", "float-end pt-2", "* Required Deposit", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form_container custom_gradient_border startup", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", null, "Destine", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, this.state.quotation.destine.name, 0)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", null, "Total amount", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, [this.state.quotation.total_amount, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" XRP")], 0)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", null, "Days", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, this.state.quotation.delta_days, 0)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group mb-3", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", "form-label", "Description", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "p", null, this.state.quotation.description, 0)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "text-center", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "button", "btn_1 full-width", "Sign escrow now!", 16, {
      "onclick": this.handleSign
    }), 2)], 4)], 4), 2), 2)], 4);
  };
  return QuotationApprovedEscrow;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/quotation/QuotationApprovedPanel.js":
/*!************************************************************!*\
  !*** ./src/components/quotation/QuotationApprovedPanel.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuotationApprovedPanel)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var _api_api_quotations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/api_quotations */ "./src/api/api_quotations.ts");
/* harmony import */ var _QuotationApprovedEscrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuotationApprovedEscrow */ "./src/components/quotation/QuotationApprovedEscrow.js");
/* harmony import */ var _QuotationApprovedDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuotationApprovedDetail */ "./src/components/quotation/QuotationApprovedDetail.js");
/* harmony import */ var _utils_AuthRouting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/AuthRouting */ "./src/components/utils/AuthRouting.ts");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var QuotationApprovedPanel = /*#__PURE__*/function (_Component) {
  _inheritsLoose(QuotationApprovedPanel, _Component);
  function QuotationApprovedPanel(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.state = {
      quotation_id: _this.props.quotation_id,
      quotation: "LOADING",
      is_payer: false,
      is_destine: false
    };
    return _this;
  }
  var _proto = QuotationApprovedPanel.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;
    (0,_api_api_quotations__WEBPACK_IMPORTED_MODULE_1__.get_quotation)(this.state.quotation_id).then(function (quotation) {
      var is_payer = _utils_AuthRouting__WEBPACK_IMPORTED_MODULE_4__["default"].is_owner(quotation.job.payer.id);
      var is_destine = _utils_AuthRouting__WEBPACK_IMPORTED_MODULE_4__["default"].is_owner(quotation.destine.id);
      console.log(quotation);
      _this2.setState({
        quotation: quotation,
        is_payer: is_payer,
        is_destine: is_destine
      });
    });
  };
  _proto._render_payer_by_escrow_state = function _render_payer_by_escrow_state() {
    var need_sign_and_check = ["NONE", "BUILED", "WAITING_XUMM_SIGN"].indexOf(this.state.quotation.escrow_state) != -1;
    if (need_sign_and_check) {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _QuotationApprovedEscrow__WEBPACK_IMPORTED_MODULE_2__["default"], {
        "quotation": this.state.quotation
      });
    } else {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _QuotationApprovedDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
        "quotation": this.state.quotation
      });
    }
  };
  _proto._render_by_user = function _render_by_user() {
    if (this.state.is_payer) {
      return this._render_payer_by_escrow_state();
    } else if (this.state.is_destine) {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _QuotationApprovedDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
        "quotation": this.state.quotation
      });
    }
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, "Job was assigned already!", 16);
  };
  _proto.render = function render() {
    if (this.state.quotation == "LOADING") {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "spinner-border text-primary", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "span", "sr-only", "Loading...", 16), 2, {
        "role": "status"
      });
    } else {
      return this._render_by_user();
    }
  };
  return QuotationApprovedPanel;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/quotation/QuotationApprovedWaitingFinished.js":
/*!**********************************************************************!*\
  !*** ./src/components/quotation/QuotationApprovedWaitingFinished.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuotationApprovedWaitingFinished)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var _api_api_quotations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/api_quotations */ "./src/api/api_quotations.ts");

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(typeof iterable + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var QuotationApprovedWaitingFinished = /*#__PURE__*/function (_Component) {
  _inheritsLoose(QuotationApprovedWaitingFinished, _Component);
  function QuotationApprovedWaitingFinished(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    var quotation = _this.props.quotation;
    _this.state = {
      quotation: quotation,
      is_checking: true,
      iters: 0
    };
    return _this;
  }
  var _proto = QuotationApprovedWaitingFinished.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.checkEscrow();
  };
  _proto.checkEscrow = function checkEscrow() {
    var _this2 = this;
    if (this.state.is_checking) {
      console.log("checkEscrow...");
      setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_api_api_quotations__WEBPACK_IMPORTED_MODULE_1__.checks_escrow_finished)(_this2.state.quotation.id);
            case 2:
              result = _context.sent;
              console.log(result);
              if (result._action == "SuccessCheck" || result._action == "Checked") {
                _this2.setState({
                  is_checked_success: true
                });
                _this2.cron_reload();
              } else {
                _this2.setState({
                  iters: _this2.state.iters += 1
                });
                _this2.checkEscrow();
              }
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      })), 1000);
    }
  };
  _proto.cron_reload = function cron_reload() {
    var _this3 = this;
    setTimeout(function () {
      window.location = "/job/" + _this3.state.quotation.job.id;
    }, 750);
  };
  _proto.render_video = function render_video() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "myform custom_bg freelance", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "sub_header_in sticky_header custom_subheader freelance", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h3", null, "Closing quotation", 16), 2), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "row justify-content-center", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-xl-7 col-lg-8 col-md-10 mt-5", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "box_account", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h3", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon-tasks-1"), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Escrow ")], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form_container custom_gradient_border startup", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "d-flex align-items-center me-3", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "strong", null, "Checking escrow...", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "spinner-border ms-auto text-secondary", null, 1, {
      "role": "status",
      "aria-hidden": "true"
    })], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "img", "bordered-image img-fluid", null, 1, {
      "src": "/static/videos/open_box.webp",
      "type": "video/webp",
      "loop": "loop"
    })], 4), 2)], 4), 2), 2)], 4);
  };
  _proto.render = function render() {
    return this.render_video();
  };
  return QuotationApprovedWaitingFinished;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/quotation/QuotationAsideContactForm.js":
/*!***************************************************************!*\
  !*** ./src/components/quotation/QuotationAsideContactForm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuotationAsideContactForm)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var _utils_FormComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/FormComponent */ "./src/components/utils/FormComponent.js");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var QuotationAsideContactForm = /*#__PURE__*/function (_FormComponent) {
  _inheritsLoose(QuotationAsideContactForm, _FormComponent);
  function QuotationAsideContactForm(props) {
    var _this;
    _this = _FormComponent.call(this, props) || this;
    var job_id = _this.props.job_id;
    console.log("QuotationForm JobId: " + job_id);
    _this.state = {
      title: "Title2"
    };
    return _this;
  }
  var _proto = QuotationAsideContactForm.prototype;
  _proto.onSubmit = function onSubmit(formData) {
    console.log(formData);
    var job = {
      title: formData.title,
      description: formData.description,
      budget_range: formData.budget_range
    };
  };
  _proto.render = function render() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "aside", "col-lg-4", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "box_detail booking", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "price", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h5", "d-inline", "Chat", 16), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, null, 1, {
      "id": "message-contact-detail"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, "... here last messages...", 16, {
      "id": "messages"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "form", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(128, "textarea", "form-control", null, 1, {
      "placeholder": "Your message",
      "name": "message_detail",
      "id": "message_detail"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "ti-pencil")], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", "add_top_30 btn_1 full-width purchase", null, 1, {
      "type": "submit",
      "value": "Contact us",
      "id": "submit-contact-detail"
    }), 2)], 4, {
      "method": "post",
      "action": "assets/contact_detail.php",
      "id": "contact_detail",
      "autocomplete": "off"
    })], 4), 2, {
      "id": "sidebar"
    });
  };
  return QuotationAsideContactForm;
}(_utils_FormComponent__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/components/quotation/QuotationDirectTrasfer.js":
/*!************************************************************!*\
  !*** ./src/components/quotation/QuotationDirectTrasfer.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuotationDirectTransfer)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var _utils_XRPInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/XRPInput */ "./src/components/utils/XRPInput.js");
/* harmony import */ var _components_utils_AuthRouting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/utils/AuthRouting */ "./src/components/utils/AuthRouting.ts");
/* harmony import */ var _api_api_transfer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../api/api_transfer */ "./src/api/api_transfer.ts");

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(typeof iterable + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var QuotationDirectTransfer = /*#__PURE__*/function (_Component) {
  _inheritsLoose(QuotationDirectTransfer, _Component);
  function QuotationDirectTransfer(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    var quotation = props.quotation;
    var is_payer = _components_utils_AuthRouting__WEBPACK_IMPORTED_MODULE_2__["default"].is_owner(quotation.job.payer.id);
    var is_destine = _components_utils_AuthRouting__WEBPACK_IMPORTED_MODULE_2__["default"].is_owner(quotation.destine.id);
    _this.state = {
      quotation: quotation,
      total_amount: 0.0,
      is_payer: is_payer,
      is_destine: is_destine,
      is_checking: false,
      is_success: false
    };
    _this.handleUpdateTotalAmount = _this.handleUpdateTotalAmount.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = QuotationDirectTransfer.prototype;
  _proto.handleUpdateTotalAmount = function handleUpdateTotalAmount(amount) {
    //console.log("updateAmount: "+ amount.data.value);
    // Without propague update!
    this.state.total_amount = amount.data.value;
    // this.setState({total_amount: amount.data.value});
    //this.state.quotation.setTotalAmount(amount.data.value);
  };
  _proto.handleSubmit = function handleSubmit(_event) {
    var _this2 = this;
    console.log(this.state);
    this.setState({
      is_checking: true
    });
    (0,_api_api_transfer__WEBPACK_IMPORTED_MODULE_3__.sumbit_direct_transfer)(this.state.quotation.id, this.state.total_amount, function (data) {
      _this2.checkDirectTranfer(data.xumm_payload_uuid, data.direct_transfer_id);
    });
    event.preventDefault();
  };
  _proto.checkDirectTranfer = function checkDirectTranfer(xumm_payload_uuid, direct_transfer_id) {
    var _this3 = this;
    if (this.state.is_checking) {
      console.log("checkDirectTranfer...");
      setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,_api_api_transfer__WEBPACK_IMPORTED_MODULE_3__.checks_direct_transfer)(xumm_payload_uuid, direct_transfer_id);
            case 2:
              result = _context.sent;
              if (result == true) {
                _this3.setState({
                  is_success: true
                });
                _this3.cron_reload();
              } else {
                _this3.checkDirectTranfer(xumm_payload_uuid, direct_transfer_id);
              }
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      })), 1000);
    }
  };
  _proto.cron_reload = function cron_reload() {
    var _this4 = this;
    setTimeout(function () {
      window.location = "/job/" + _this4.state.quotation.job.id;
    }, 750);
  };
  _proto._render_btn = function _render_btn() {
    var text_btn = "";
    if (this.state.is_payer) {
      text_btn += "Send XRP to " + this.state.quotation.destine.name + " now!";
    } else if (this.state.is_destine) {
      text_btn += "Send XRP to " + this.state.quotation.job.payer.name + " now!";
    }
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "button", "btn_1 full-width", text_btn, 0, {
      "type": "submit",
      "onsubmit": this.handleSubmit,
      "onclick": this.handleSubmit
    });
  };
  _proto.render = function render() {
    if (this.state.is_checking) {
      var message = "";
      if (this.state.is_success) {
        message = "[OK]";
      }
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group mb-3  text-center", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "d-flex align-items-center me-3", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "strong", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Checking Direct Transfer..."), message], 0), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "spinner-border ms-auto text-secondary", null, 1, {
        "role": "status",
        "aria-hidden": "true"
      })], 4), 2, {
        "id": "direct_tx"
      });
    } else {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group mb-3  text-center", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h4", null, "Direct Transfer:", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _utils_XRPInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
        "afterUpdate": this.handleUpdateTotalAmount,
        "initial": 0
      }), this._render_btn()], 0, {
        "id": "direct_tx"
      });
    }
  };
  return QuotationDirectTransfer;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/quotation/QuotationJobForm.js":
/*!******************************************************!*\
  !*** ./src/components/quotation/QuotationJobForm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuotationJobForm)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var _models_quotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/quotation */ "./src/models/quotation.ts");
/* harmony import */ var _api_api_quotations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../api/api_quotations */ "./src/api/api_quotations.ts");
/* harmony import */ var _utils_XRPInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../utils/XRPInput */ "./src/components/utils/XRPInput.js");
/* harmony import */ var _utils_DeltaDaysInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../utils/DeltaDaysInput */ "./src/components/utils/DeltaDaysInput.js");

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var QuotationJobForm = /*#__PURE__*/function (_Component) {
  _inheritsLoose(QuotationJobForm, _Component);
  function QuotationJobForm(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    var job_id = _this.props.job_id;
    console.log("QuotationJobForm JobId: " + job_id);
    _this.state = {
      job_id: job_id,
      quotation_id: null,
      quotation: _models_quotation__WEBPACK_IMPORTED_MODULE_1__.Quotation["default"](job_id),
      is_loading: true
    };
    _this.handleChangeDescription = _this.handleChangeDescription.bind(_assertThisInitialized(_this));
    _this.handleUpdateTotalAmount = _this.handleUpdateTotalAmount.bind(_assertThisInitialized(_this));
    _this.handleUpdateDeadline = _this.handleUpdateDeadline.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = QuotationJobForm.prototype;
  _proto.have_quotation = function have_quotation() {
    return this.state.quotation_id != null;
  };
  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;
    (0,_api_api_quotations__WEBPACK_IMPORTED_MODULE_2__.get_quotation_by_job)(this.state.job_id).then(function (quotation) {
      console.log(quotation);
      var have_quote = quotation != null;
      if (have_quote) {
        var new_quotation = _this2.state.quotation.clone();
        new_quotation.setDescription(quotation.description);
        new_quotation.setTotalAmount(quotation.total_amount);
        _this2.setState({
          quotation_id: quotation.id,
          quotation: new_quotation,
          is_loading: false
        });
      } else {
        _this2.setState({
          quotation_id: null,
          is_loading: false
        });
      }
      console.log(_this2.state);
    })["catch"](function (err) {
      console.log(err);
    });
  };
  _proto.handleChangeDescription = function handleChangeDescription(event) {
    var new_quotation = this.state.quotation.clone();
    new_quotation.setDescription(event.target.value);
    this.setState({
      quotation: new_quotation
    });
  };
  _proto.handleUpdateTotalAmount = function handleUpdateTotalAmount(amount) {
    //Not propague update
    this.state.quotation.setTotalAmount(amount.data.value);
  };
  _proto.handleUpdateDeadline = function handleUpdateDeadline(delta_days) {
    //Not propague update
    this.state.quotation.setDeltaDays(delta_days);
    console.log(this.state.quotation);
  };
  _proto.handleSubmit = function handleSubmit(event) {
    var quotation = this.state.quotation.raw();
    (0,_api_api_quotations__WEBPACK_IMPORTED_MODULE_2__.register_new_quotation)(this.state.quotation.raw()).then(function (result) {
      var redirect_url = "/job/" + quotation.job_id;
      // Make refresh... automatic detects that have a quotation.
      window.location.href = redirect_url;
    });
    event.preventDefault();
  };
  _proto._render_title_form = function _render_title_form() {
    if (this.have_quotation()) {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "sub_header_in sticky_header custom_subheader freelance", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h3", null, "Improve your quote!", 16), 2), 2), 2);
    } else {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "sub_header_in sticky_header custom_subheader freelance", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h3", null, "Quote now!", 16), 2), 2);
    }
  };
  _proto._render_form = function _render_form() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "myform custom_bg freelance", [this._render_title_form(), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "row justify-content-center", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-xl-7 col-lg-8 col-md-10 mt-5", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "box_account", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h3", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon-tasks-1"), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Quotation ")], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "small", "float-end pt-2", "* Required Fields", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form_container custom_gradient_border freelance", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", null, "Total amount", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _utils_XRPInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "afterUpdate": this.handleUpdateTotalAmount,
      "initial": this.state.quotation.data.total_amount
    })], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", null, "Deadline/Escrow expiration days", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _utils_DeltaDaysInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
      "afterUpdate": this.handleUpdateDeadline,
      "initial": this.state.quotation.delta_days
    })], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group mb-3", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", "form-label", "Description", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(128, "textarea", "form-control", null, 1, {
      "name": "description",
      "value": this.state.quotation.data.description,
      "onInput": this.handleChangeDescription,
      "rows": "25",
      "style": "min-height: 200px !important;"
    })], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "text-center", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "button", "btn_1 full-width", "Send your quote now!", 16, {
      "type": "submit",
      "onsubmit": this.handleSubmit,
      "onclick": this.handleSubmit
    }), 2)], 4)], 4), 2), 2)], 0);
  };
  _proto.render = function render() {
    if (this.state.is_loading) {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "spinner-border text-primary", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "span", "sr-only", "Loading...", 16), 2, {
        "role": "status"
      });
    } else {
      return this._render_form();
    }
  };
  return QuotationJobForm;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/quotation/QuotationRow.js":
/*!**************************************************!*\
  !*** ./src/components/quotation/QuotationRow.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuotationRow)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var inferno_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inferno-router */ "./node_modules/inferno-router/dist/index.esm.js");
/* harmony import */ var _api_api_quotations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api_quotations */ "./src/api/api_quotations.ts");

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


//import { session_is_owner } from "./../../api/api_with_auth";

var QuotationRow = /*#__PURE__*/function (_Component) {
  _inheritsLoose(QuotationRow, _Component);
  function QuotationRow(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.handleApprove = _this.handleApprove.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = QuotationRow.prototype;
  _proto.handleApprove = function handleApprove(event) {
    var data = this.props.data;
    console.log(data);
    var job_id = data.job.id;
    var quotation_id = data.id;
    (0,_api_api_quotations__WEBPACK_IMPORTED_MODULE_2__.make_quotation_approved)(quotation_id).then(function (result) {
      if (result == "Approved!") {
        window.location = "/job/" + job_id;
      } else {
        console.error("Internal Error!! Ouhj");
      }
    })["catch"](function (err) {
      console.error(err);
    });
  };
  _proto.render = function render() {
    var data = this.props.data;
    var url_quotation = "/job/" + data.job.id + "/quote/" + data.id;

    /*            <div className="card text-center">
            <div className="card-header custom-background">
                {data.destine.name} <div>TOTAL: {data.total_amount} XRP</div>
            </div>
            <div className="card-body">
                <p className="card-text">{data.description}</p> 
            </div>
            <div className="card-footer text-muted custom-background">
                2 days ago <Link to={url_quotation}> CHAT </Link>
                <button onclick={this.handleApprove}>Approve</button>
            </div>
        </div>*/
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-xl-4 col-lg-6 col-md-6 search-item", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "strip grid", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "wrapper", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h4", null, [data.total_amount, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "em", null, "XRP", 16)], 0), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "small", "name-company", data.destine.name, 0), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "p", "short-description", data.description, 0)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "ul", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "button", "btn btn-success", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Approve "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon-check-1")], 4, {
      "onclick": this.handleApprove
    }), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "span", "loc_open", "Open", 16), 2)], 4)], 4), 2);
  };
  return QuotationRow;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/quotation/QuotationsListForAdmin.js":
/*!************************************************************!*\
  !*** ./src/components/quotation/QuotationsListForAdmin.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuotationsListForAdmin)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var _api_api_with_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../api/api_with_auth */ "./src/api/api_with_auth.ts");
/* harmony import */ var _api_api_quotations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../api/api_quotations */ "./src/api/api_quotations.ts");
/* harmony import */ var _QuotationRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuotationRow */ "./src/components/quotation/QuotationRow.js");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var QuotationsListForAdmin = /*#__PURE__*/function (_Component) {
  _inheritsLoose(QuotationsListForAdmin, _Component);
  function QuotationsListForAdmin(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    var _this$props = _this.props,
      job_id = _this$props.job_id,
      payer_id = _this$props.payer_id;
    _this.state = {
      quotations: [],
      job_id: job_id,
      payer_id: payer_id
    };
    if ((0,_api_api_with_auth__WEBPACK_IMPORTED_MODULE_1__.session_is_owner)(payer_id)) {
      console.log("QuotationList JobId: " + job_id + "OWNER");
    } else {
      console.log("QuotationList JobId: " + job_id + "NOT OWNER");
    }
    return _this;
  }
  var _proto = QuotationsListForAdmin.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;
    (0,_api_api_quotations__WEBPACK_IMPORTED_MODULE_2__.list_quotation_by_job)(this.state.job_id).then(function (quotations) {
      _this2.setState({
        quotations: quotations
      });
    });
  };
  _proto._render_quotes = function _render_quotes() {
    var quotes = this.state.quotations;
    var quotesElements = [];
    for (var index = 0; index < quotes.length; index++) {
      var quote = quotes[index];
      var html = (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _QuotationRow__WEBPACK_IMPORTED_MODULE_3__["default"], {
        "data": quote
      });
      quotesElements.push(html);
    }
    return quotesElements;
  };
  _proto.render = function render() {
    var _this$props2 = this.props,
      job_id = _this$props2.job_id,
      payer_id = _this$props2.payer_id;
    if ((0,_api_api_with_auth__WEBPACK_IMPORTED_MODULE_1__.session_is_owner)(payer_id)) {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "myform custom_bg startup", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "sub_header_in sticky_header custom_subheader startup", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h3", null, "Open quotations", 16), 2), 2), this._render_quotes()], 0), 2, {
        "id": "admin_quotations_list"
      });
    } else {
      return [];
    }
  };
  return QuotationsListForAdmin;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/ui/CategoriesSelector.js":
/*!*************************************************!*\
  !*** ./src/components/ui/CategoriesSelector.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategoriesSelector)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var _utils_Categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../utils/Categories */ "./src/components/utils/Categories.ts");

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var CategoriesSelector = /*#__PURE__*/function (_Component) {
  _inheritsLoose(CategoriesSelector, _Component);
  function CategoriesSelector(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    var handleUpdateCategories = props.handleUpdateCategories;
    var initial_categories = props.initial_categories;
    if (initial_categories == undefined) {
      initial_categories = (0,_utils_Categories__WEBPACK_IMPORTED_MODULE_1__.categories_default)();
    }
    _this.state = {
      is_editable: handleUpdateCategories != undefined,
      categories: initial_categories,
      handleUpdateCategories: handleUpdateCategories
    };
    _this.handleClickCategory = _this.handleClickCategory.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = CategoriesSelector.prototype;
  _proto.handleClickCategory = function handleClickCategory(category) {
    if (this.state.is_editable) {
      var new_state = this.state;
      new_state.categories[category] = !this.state.categories[category];
      this.setState(new_state);
      this.state.handleUpdateCategories(this.state.categories);
    }
  };
  _proto.render = function render() {
    var _this2 = this;
    var categoriesElements = [];
    var _loop = function _loop() {
      var category = _utils_Categories__WEBPACK_IMPORTED_MODULE_1__.JOB_CATEGORIES[index];
      var url = "/static/theme/myimg/categories/" + category + ".svg";
      var is_active = _this2.state.categories[category];
      var class_active = is_active ? "category-item-active" : "";
      var classes = "category-item p-2 flex-fill " + class_active;
      categoriesElements.push((0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", classes, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, category, 0), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "img", "category-icon", null, 1, {
        "src": url,
        "alt": category
      }), 2)], 4, {
        "onclick": function onclick() {
          return _this2.handleClickCategory(category);
        }
      }));
    };
    for (var index = 0; index < _utils_Categories__WEBPACK_IMPORTED_MODULE_1__.JOB_CATEGORIES.length; index++) {
      _loop();
    }
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container categories-container", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "d-flex flex-wrap", categoriesElements, 0), 2);
  };
  return CategoriesSelector;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/ui/btn_login.js":
/*!****************************************!*\
  !*** ./src/components/ui/btn_login.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BtnLogin)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var _utils_nav_authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/nav_authorization */ "./src/components/utils/nav_authorization.js");

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var BtnLogin = /*#__PURE__*/function (_Component) {
  _inheritsLoose(BtnLogin, _Component);
  function BtnLogin(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    var afterUpdateAuth = props.afterUpdateAuth;
    _this.state = {
      is_login: (0,_utils_nav_authorization__WEBPACK_IMPORTED_MODULE_1__.is_login)(),
      afterUpdateAuth: afterUpdateAuth
    };
    _this.handle_login = _this.handle_login.bind(_assertThisInitialized(_this));
    _this.handle_logout = _this.handle_logout.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = BtnLogin.prototype;
  _proto._check_login = function _check_login() {
    var _this2 = this;
    if (!this.state.is_login) {
      setTimeout(function () {
        if ((0,_utils_nav_authorization__WEBPACK_IMPORTED_MODULE_1__.is_login)()) {
          _this2.setState({
            is_login: true
          });
        } else {
          _this2._check_login();
        }
      }, 1000);
    }
  };
  _proto.handle_login = function handle_login() {
    this._check_login();
    xumm.authorize();
    this.state.afterUpdateAuth(this.state.is_login);
  };
  _proto.handle_logout = function handle_logout() {
    xumm.logout();
    this.setState({
      is_login: false
    });
    this.state.afterUpdateAuth(this.state.is_login);
  };
  _proto.render = function render() {
    if (this.state.is_login) {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "a", "btn btn-light", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon-logout-1"), 2, {
        "id": "logoutbutton",
        "onclick": this.handle_logout
      });
    } else {
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "a", "btn btn-primary", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Login "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon-login-1")], 4, {
        "id": "signinbutton",
        "onclick": this.handle_login
      });
    }
  };
  return BtnLogin;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/ui/header_menu.js":
/*!******************************************!*\
  !*** ./src/components/ui/header_menu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderMenu)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var _btn_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./btn_login */ "./src/components/ui/btn_login.js");
/* harmony import */ var inferno_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inferno-router */ "./node_modules/inferno-router/dist/index.esm.js");
/* harmony import */ var _utils_nav_authorization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/nav_authorization */ "./src/components/utils/nav_authorization.js");

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var HeaderMenu = /*#__PURE__*/function (_Component) {
  _inheritsLoose(HeaderMenu, _Component);
  function HeaderMenu(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.state = {
      is_login: (0,_utils_nav_authorization__WEBPACK_IMPORTED_MODULE_3__.is_login)()
    };
    _this.handleAfterUpdateAuth = _this.handleAfterUpdateAuth.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = HeaderMenu.prototype;
  _proto.handleAfterUpdateAuth = function handleAfterUpdateAuth(_) {
    var _this2 = this;
    setTimeout(function () {
      console.log("UPDATE..");
      _this2.setState({
        is_login: (0,_utils_nav_authorization__WEBPACK_IMPORTED_MODULE_3__.is_login)()
      });
    }, 10000);
  };
  _proto.user_menu = function user_menu() {
    if (this.state.is_login) {
      return [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", "list-inline-item", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
        "to": "/job/new",
        "class": "btn btn-light",
        "id": "menu-job",
        children: ["Job ", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon-plus")]
      }), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", "list-inline-item", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
        "to": "/profile",
        "class": "btn btn-light",
        "id": "menu-profile",
        children: ["Profile ", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon-user")]
      }), 2)];
    }
    return [];
  };
  _proto.render = function render() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "header", "header menu_fixed", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
      "to": "/",
      children: "xAppFreelancer"
    }), 2, {
      "id": "header_logo"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container d-flex align-items-center justify-content-center", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "ul", "list-inline", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", "list-inline-item", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_2__.Link, {
      "to": "/job/search/",
      "class": "btn btn-light",
      "id": "menu-search",
      children: ["Search ", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon-search")]
    }), 2), this.user_menu(), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", "list-inline-item")], 0, {
      "id": "top_menu_2"
    }), 2), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _btn_login__WEBPACK_IMPORTED_MODULE_1__["default"], {
      "afterUpdateAuth": this.handleAfterUpdateAuth
    }), 2, {
      "id": "header_login"
    })], 4, {
      "id": "myheader"
    });
  };
  return HeaderMenu;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/ui/sec_home_search.js":
/*!**********************************************!*\
  !*** ./src/components/ui/sec_home_search.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SecHomeSearch)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var inferno_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inferno-router */ "./node_modules/inferno-router/dist/index.esm.js");

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var SecHomeSearch = /*#__PURE__*/function (_Component) {
  _inheritsLoose(SecHomeSearch, _Component);
  function SecHomeSearch(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.state = {
      text: ""
    };
    _this.handleText = _this.handleText.bind(_assertThisInitialized(_this));
    //this.handleSubmit = this.handleSubmit.bind(this);
    return _this;
  }
  var _proto = SecHomeSearch.prototype;
  _proto.handleText = function handleText(event) {
    console.log(event);
    var text = event.target.value;
    this.setState({
      text: text
    });
    console.log(this.text);
    if (text.length > 6) {
      var url = "/job/search/" + text;
      window.location = url;
    }
  }
  /*
  handleSubmit(event){
      //onSubmit={this.handleSubmit} onclick={this.handleSubmit}
      event.preventDefault();
      
      let url = "/job/search/" + this.state.text;
      window.location = url;
  }*/;
  _proto.render = function render() {
    var search_url = "/job/search/" + this.state.text;
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "section", "hero_single version_4", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "wrapper", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h3", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Your work, your rules, your earnings: "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "br"), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" No commissions!")], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "p", null, "Experience instant and secure payments, and transparent interactions. Our blockchain-powered platform ensures rapid, reliable transactions and eliminates unnecessary intermediaries. Join us for a boundaryless freelance journey.", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "form", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "row g-0 custom-search-input-2", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-lg-7", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", "form-control", null, 1, {
      "id": "text_search",
      "name": "text_search",
      "type": "text",
      "placeholder": "What are you looking for...",
      "onInput": this.handleText,
      "value": this.state.text
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "i", "icon_search")], 4), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-lg-3", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(256, "select", "wide", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "All Categories", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Website Design", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Speed", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Smartphone", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Research", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Prototype", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Maerketing", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Design", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Contract", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Coding", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Branding", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Apps Development", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "Analysis", 16)], 4), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-lg-2", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Link, {
      "to": search_url,
      children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", null, null, 1, {
        "type": "submit",
        "value": "Search",
        "onSubmit": function onSubmit(e) {
          return e.preventDefault();
        }
      })
    }), 2)], 4), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "ul", "counter", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "strong", null, "256,020", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Projects")], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "strong", null, "150,543", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" User")], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "li", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "strong", null, "150,543", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" $ save on commisions")], 4)], 4)], 4), 2), 2);
  };
  return SecHomeSearch;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/ui/sec_home_startup.js":
/*!***********************************************!*\
  !*** ./src/components/ui/sec_home_startup.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SecHomeStartUp)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SecHomeStartUp = /*#__PURE__*/function (_Component) {
  _inheritsLoose(SecHomeStartUp, _Component);
  function SecHomeStartUp(props) {
    return _Component.call(this, props) || this;
  }
  var _proto = SecHomeStartUp.prototype;
  _proto.render = function render() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container-fluid margin_80_55", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-lg-8 mx-auto startup_bg", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "main_title_2", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "span", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "em"), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h2", null, "You lead, you earn: No commissions on your path to success! ", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "p", null, "Launch your new project, using blockchain technology and Save up 20%!", 16)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "d-grid gap-2 d-sm-flex justify-content-sm-center", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "a", "btn btn-primary btn-lg px-4 gap-3 startup_button", "Start Now", 16, {
      "type": "button",
      "href": "/job/new"
    }), 2)], 4), 2, {
      "id": "startup_container"
    });
  };
  return SecHomeStartUp;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/user/UserProfileFormPage.js":
/*!****************************************************!*\
  !*** ./src/components/user/UserProfileFormPage.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserProfileFormPage)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var _utils_FormComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/FormComponent */ "./src/components/utils/FormComponent.js");
/* harmony import */ var _api_api_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../api/api_profile */ "./src/api/api_profile.ts");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var DEFAULT_VALUES = {
  email: "",
  name: "",
  last_name: "",
  full_address: "",
  city: "",
  postal_code: "",
  country: "",
  phone: "",
  bio: ""
};
var UserProfileFormPage = /*#__PURE__*/function (_FormComponent) {
  _inheritsLoose(UserProfileFormPage, _FormComponent);
  function UserProfileFormPage(props) {
    var _this;
    _this = _FormComponent.call(this, props) || this;
    _this.state = {
      email: "",
      name: "",
      last_name: "",
      full_address: "",
      city: "",
      postal_code: "",
      country: "",
      phone: "",
      bio: ""
    };
    return _this;
  }
  var _proto = UserProfileFormPage.prototype;
  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;
    console.log("load profile...");
    (0,_api_api_profile__WEBPACK_IMPORTED_MODULE_2__.get_profile_priv)().then(function (profile) {
      console.log(profile);
      _this2.setState(profile);
    });
  };
  _proto.onSubmit = function onSubmit(formData) {
    formData = this._swarp_undef_values_by_default(formData);
    console.log(formData);
    (0,_api_api_profile__WEBPACK_IMPORTED_MODULE_2__.post_update_profile_priv)(formData).then(function (result) {
      console.log(result);
      window.location.href = "/profile";
    });
  };
  _proto._swarp_undef_values_by_default = function _swarp_undef_values_by_default(formData) {
    var mergedValues = {};
    for (var key in DEFAULT_VALUES) {
      if (formData[key] == undefined) {
        mergedValues[key] = DEFAULT_VALUES[key];
      } else {
        mergedValues[key] = formData[key];
      }
    }
    return mergedValues;
  };
  _proto.render = function render() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "myform custom_bisque_bg", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "sub_header_in sticky_header", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "container", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h1", null, "Profile", 16), 2), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "row justify-content-center", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-xl-7 col-lg-8 col-md-10 mt-5", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "box_account", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h3", "new_client", "Information", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" "), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "small", "float-end pt-2", "* Required Fields", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form_container custom_gradient_border", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form_container", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", "form-control", null, 1, {
      "type": "text",
      "name": "public_address",
      "value": this.state.public_address,
      "disabled": true
    }), 2), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", "form-control", null, 1, {
      "type": "email",
      "name": "email",
      "value": this.state.email || '',
      "onInput": this.handleInputChange,
      "id": "email",
      "placeholder": "Email"
    }), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "hr"), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "private box", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "row g-0", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-6 pe-1", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", "form-control", null, 1, {
      "type": "text",
      "name": "name",
      "value": this.state.name || '',
      "onInput": this.handleInputChange,
      "placeholder": "Name*"
    }), 2), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-6 ps-1", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", "form-control", null, 1, {
      "type": "text",
      "name": "last_name",
      "value": this.state.last_name || '',
      "onInput": this.handleInputChange,
      "placeholder": "Last Name"
    }), 2), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-12", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", "form-control", null, 1, {
      "type": "text",
      "name": "full_address",
      "value": this.state.full_address || '',
      "onInput": this.handleInputChange,
      "placeholder": "Full Address"
    }), 2), 2)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "row g-0", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-6 pe-1", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", "form-control", null, 1, {
      "type": "text",
      "name": "city",
      "value": this.state.city || '',
      "onInput": this.handleInputChange,
      "placeholder": "City"
    }), 2), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-6 ps-1", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", "form-control", null, 1, {
      "type": "text",
      "name": "postal_code",
      "value": this.state.postal_code || '',
      "onInput": this.handleInputChange,
      "placeholder": "Postal Code"
    }), 2), 2), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-12", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", "form-control", null, 1, {
      "type": "text",
      "name": "country",
      "value": this.state.country || '',
      "onInput": this.handleInputChange,
      "placeholder": "Country"
    }), 2), 2)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "row", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "col-md-12", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", "form-control", null, 1, {
      "type": "text",
      "name": "phone",
      "value": this.state.phone || '',
      "onInput": this.handleInputChange,
      "placeholder": "Telephone "
    }), 2), 2), 2)], 4)], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "form-group mb-3", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "label", "form-label", "Bio", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(128, "textarea", "form-control", null, 1, {
      "name": "bio",
      "value": this.state.bio || '',
      "onInput": this.handleInputChange,
      "rows": "25",
      "style": "min-height: 200px !important;"
    })], 4), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "text-center", (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "button", "btn_1 full-width", "Update profile", 16, {
      "type": "submit",
      "onsubmit": this.handleSubmit,
      "onclick": this.handleSubmit
    }), 2)], 4)], 4), 2), 2)], 4);
  };
  return UserProfileFormPage;
}(_utils_FormComponent__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/components/utils/DeltaDaysInput.js":
/*!************************************************!*\
  !*** ./src/components/utils/DeltaDaysInput.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeltaDaysInput)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DeltaDaysInput = /*#__PURE__*/function (_Component) {
  _inheritsLoose(DeltaDaysInput, _Component);
  function DeltaDaysInput(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    var afterUpdate = props.afterUpdate,
      initial = props.initial;
    _this.state = {
      value: initial,
      afterUpdate: afterUpdate
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = DeltaDaysInput.prototype;
  _proto.handleChange = function handleChange(event) {
    var delta_days = event.target.value;
    this.setState({
      value: delta_days
    });
    this.state.afterUpdate(this.state.value);
  };
  _proto.render = function render() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(256, "select", "form-control", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "3 Days", 16, {
      "value": "3"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "7 Days", 16, {
      "value": "7"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "14 Days", 16, {
      "value": "14"
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "option", null, "21 Days", 16, {
      "value": "21"
    })], 4, {
      "name": "delta_days",
      "value": this.state.value || '',
      "onChange": this.handleChange,
      "id": "delta_days"
    });
  };
  return DeltaDaysInput;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/utils/FormComponent.js":
/*!***********************************************!*\
  !*** ./src/components/utils/FormComponent.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormComponent)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FormComponent = /*#__PURE__*/function (_Component) {
  _inheritsLoose(FormComponent, _Component);
  function FormComponent(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = FormComponent.prototype;
  _proto.handleInputChange = function handleInputChange(event) {
    var _this$setState;
    //console.log("... InputChange");
    //console.log(this.state);
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    this.setState((_this$setState = {}, _this$setState[name] = value, _this$setState));
  };
  _proto.handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    this.onSubmit(this.state);
  };
  return FormComponent;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/utils/XRPInput.js":
/*!******************************************!*\
  !*** ./src/components/utils/XRPInput.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ XRPInput)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var _models_xrp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/xrp */ "./src/models/xrp.ts");

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var XRPInput = /*#__PURE__*/function (_Component) {
  _inheritsLoose(XRPInput, _Component);
  function XRPInput(props) {
    var _this;
    _this = _Component.call(this, props) || this;
    var label = props.label,
      afterUpdate = props.afterUpdate,
      initial = props.initial;
    _this.state = {
      label: label,
      amount: _models_xrp__WEBPACK_IMPORTED_MODULE_1__.XRPValue["default"]("" + initial),
      afterUpdate: afterUpdate
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = XRPInput.prototype;
  _proto.handleChange = function handleChange(event) {
    var new_amount = this.state.amount.clone();
    new_amount.trySetValueFromStr(event.target.value);
    this.setState({
      amount: new_amount
    });
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    this.state.afterUpdate(this.state.amount);
  };
  _proto.render = function render() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", "xrp-input", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(64, "input", null, null, 1, {
      "type": "text",
      "placeholder": "0.1",
      "value": this.state.amount.data.value_txt,
      "onInput": this.handleChange
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "em", "xrp-input-tag", "XRP", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "em", "xrp-input-dolars", [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("estimation "), this.state.amount.data.on_dolars, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" $")], 0)], 4);
  };
  return XRPInput;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ }),

/***/ "./src/components/utils/nav_authorization.js":
/*!***************************************************!*\
  !*** ./src/components/utils/nav_authorization.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   is_login: () => (/* binding */ is_login)
/* harmony export */ });
function is_login() {
  return window.jwt_xapp != undefined;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var inferno_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inferno-router */ "./node_modules/inferno-router/dist/index.esm.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");
/* harmony import */ var _MyApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyApp */ "./src/MyApp.js");
/* harmony import */ var _MyHome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyHome */ "./src/MyHome.js");
/* harmony import */ var _components_job_JobFormPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/job/JobFormPage */ "./src/components/job/JobFormPage.js");
/* harmony import */ var _components_job_JobPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/job/JobPage */ "./src/components/job/JobPage.js");
/* harmony import */ var _components_ui_header_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ui/header_menu */ "./src/components/ui/header_menu.js");
/* harmony import */ var _components_job_JobSearchPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/job/JobSearchPage */ "./src/components/job/JobSearchPage.js");
/* harmony import */ var _components_user_UserProfileFormPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/UserProfileFormPage */ "./src/components/user/UserProfileFormPage.js");

// inferno module


// routing modules




//import JobForm from './components/job/JobForm';


//import QuotationPage  from './components/quotation/QuotationPage';



//import { xumm_main } from './xumm_app';

var browserHistory = (0,history__WEBPACK_IMPORTED_MODULE_9__.createBrowserHistory)();
function App(_ref) {
  var children = _ref.children;
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h1", null, "Application", 16), children], 0);
}
function NoMatch(_ref2) {
  var children = _ref2.children,
    params = _ref2.params;
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, "no match", 16);
}
function Home(_ref3) {
  var children = _ref3.children;
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, "home", 16);
}

// `children` in this case will be the `User` component
function Users(_ref4) {
  var match = _ref4.match;
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h2", null, "user list", 16), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Route, {
    "path": match.url + '/user/:username',
    "component": User
  })], 4);
}
function JobRouter(_ref5) {
  var match = _ref5.match;
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Switch, {
    children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Route, {
      "path": match.url + '/new',
      "component": _components_job_JobFormPage__WEBPACK_IMPORTED_MODULE_4__["default"]
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Route, {
      "path": match.url + '/search',
      "component": _components_job_JobSearchPage__WEBPACK_IMPORTED_MODULE_7__["default"]
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Route, {
      "path": match.url + '/search/:text',
      "component": _components_job_JobSearchPage__WEBPACK_IMPORTED_MODULE_7__["default"]
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Route, {
      "path": match.url + '/:job_id',
      "component": _components_job_JobPage__WEBPACK_IMPORTED_MODULE_5__["default"]
    })]
  }), 2, {
    "id": "job_router"
  });
}
function User(_ref6) {
  var match = _ref6.match;
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "h1", null, JSON.stringify(match.params), 0);
}
var routes = (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, {
  "history": browserHistory,
  children: (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, _components_ui_header_menu__WEBPACK_IMPORTED_MODULE_6__["default"]), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1, "div", null, null, 1, {
    "id": "space",
    "style": ""
  }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Switch, {
    children: [(0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Route, {
      "exact": true,
      "path": "/",
      "component": _MyHome__WEBPACK_IMPORTED_MODULE_3__["default"]
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Route, {
      "path": "/job",
      "component": JobRouter
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Route, {
      "path": "/profile",
      "component": _components_user_UserProfileFormPage__WEBPACK_IMPORTED_MODULE_8__["default"]
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Route, {
      "path": "/users",
      "component": Users
    }), (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2, inferno_router__WEBPACK_IMPORTED_MODULE_1__.Route, {
      "path": "*",
      "component": NoMatch
    })]
  })], 4, {
    "id": "page"
  })
});
function main() {
  console.log("ready inferno... APP");
  (0,inferno__WEBPACK_IMPORTED_MODULE_0__.render)(routes, document.body);
}
window.main_inferno = function () {
  main();
};

/***/ }),

/***/ "./node_modules/history/index.js":
/*!***************************************!*\
  !*** ./node_modules/history/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action),
/* harmony export */   createBrowserHistory: () => (/* binding */ createBrowserHistory),
/* harmony export */   createHashHistory: () => (/* binding */ createHashHistory),
/* harmony export */   createMemoryHistory: () => (/* binding */ createMemoryHistory),
/* harmony export */   createPath: () => (/* binding */ createPath),
/* harmony export */   parsePath: () => (/* binding */ parsePath)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");


/**
 * Actions represent the type of change to a location value.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#action
 */
var Action;

(function (Action) {
  /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */
  Action["Pop"] = "POP";
  /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */

  Action["Push"] = "PUSH";
  /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */

  Action["Replace"] = "REPLACE";
})(Action || (Action = {}));

var readOnly =  true ? function (obj) {
  return Object.freeze(obj);
} : 0;

function warning(cond, message) {
  if (!cond) {
    // eslint-disable-next-line no-console
    if (typeof console !== 'undefined') console.warn(message);

    try {
      // Welcome to debugging history!
      //
      // This error is thrown as a convenience so you can more easily
      // find the source for a warning that appears in the console by
      // enabling "pause on exceptions" in your JavaScript debugger.
      throw new Error(message); // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

var BeforeUnloadEventType = 'beforeunload';
var HashChangeEventType = 'hashchange';
var PopStateEventType = 'popstate';
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */

function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$window = _options.window,
      window = _options$window === void 0 ? document.defaultView : _options$window;
  var globalHistory = window.history;

  function getIndexAndLocation() {
    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var state = globalHistory.state || {};
    return [state.idx, readOnly({
      pathname: pathname,
      search: search,
      hash: hash,
      state: state.usr || null,
      key: state.key || 'default'
    })];
  }

  var blockedPopTx = null;

  function handlePop() {
    if (blockedPopTx) {
      blockers.call(blockedPopTx);
      blockedPopTx = null;
    } else {
      var nextAction = Action.Pop;

      var _getIndexAndLocation = getIndexAndLocation(),
          nextIndex = _getIndexAndLocation[0],
          nextLocation = _getIndexAndLocation[1];

      if (blockers.length) {
        if (nextIndex != null) {
          var delta = index - nextIndex;

          if (delta) {
            // Revert the POP
            blockedPopTx = {
              action: nextAction,
              location: nextLocation,
              retry: function retry() {
                go(delta * -1);
              }
            };
            go(delta);
          }
        } else {
          // Trying to POP to a location with no index. We did not create
          // this location, so we can't effectively block the navigation.
           true ? warning(false, // TODO: Write up a doc that explains our blocking strategy in
          // detail and link to it here so people can understand better what
          // is going on and how to avoid it.
          "You are trying to block a POP navigation to a location that was not " + "created by the history library. The block will fail silently in " + "production, but in general you should do all navigation with the " + "history library (instead of using window.history.pushState directly) " + "to avoid this situation.") : 0;
        }
      } else {
        applyTx(nextAction);
      }
    }
  }

  window.addEventListener(PopStateEventType, handlePop);
  var action = Action.Pop;

  var _getIndexAndLocation2 = getIndexAndLocation(),
      index = _getIndexAndLocation2[0],
      location = _getIndexAndLocation2[1];

  var listeners = createEvents();
  var blockers = createEvents();

  if (index == null) {
    index = 0;
    globalHistory.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, globalHistory.state, {
      idx: index
    }), '');
  }

  function createHref(to) {
    return typeof to === 'string' ? to : createPath(to);
  } // state defaults to `null` because `window.history.state` does


  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }

    return readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      pathname: location.pathname,
      hash: '',
      search: ''
    }, typeof to === 'string' ? parsePath(to) : to, {
      state: state,
      key: createKey()
    }));
  }

  function getHistoryStateAndUrl(nextLocation, index) {
    return [{
      usr: nextLocation.state,
      key: nextLocation.key,
      idx: index
    }, createHref(nextLocation)];
  }

  function allowTx(action, location, retry) {
    return !blockers.length || (blockers.call({
      action: action,
      location: location,
      retry: retry
    }), false);
  }

  function applyTx(nextAction) {
    action = nextAction;

    var _getIndexAndLocation3 = getIndexAndLocation();

    index = _getIndexAndLocation3[0];
    location = _getIndexAndLocation3[1];
    listeners.call({
      action: action,
      location: location
    });
  }

  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      push(to, state);
    }

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index + 1),
          historyState = _getHistoryStateAndUr[0],
          url = _getHistoryStateAndUr[1]; // TODO: Support forced reloading
      // try...catch because iOS limits us to 100 pushState calls :/


      try {
        globalHistory.pushState(historyState, '', url);
      } catch (error) {
        // They are going to lose state here, but there is no real
        // way to warn them about it since the page will refresh...
        window.location.assign(url);
      }

      applyTx(nextAction);
    }
  }

  function replace(to, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      replace(to, state);
    }

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index),
          historyState = _getHistoryStateAndUr2[0],
          url = _getHistoryStateAndUr2[1]; // TODO: Support forced reloading


      globalHistory.replaceState(historyState, '', url);
      applyTx(nextAction);
    }
  }

  function go(delta) {
    globalHistory.go(delta);
  }

  var history = {
    get action() {
      return action;
    },

    get location() {
      return location;
    },

    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      var unblock = blockers.push(blocker);

      if (blockers.length === 1) {
        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }

      return function () {
        unblock(); // Remove the beforeunload listener so the document may
        // still be salvageable in the pagehide event.
        // See https://html.spec.whatwg.org/#unloading-documents

        if (!blockers.length) {
          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
      };
    }
  };
  return history;
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */

function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }

  var _options2 = options,
      _options2$window = _options2.window,
      window = _options2$window === void 0 ? document.defaultView : _options2$window;
  var globalHistory = window.history;

  function getIndexAndLocation() {
    var _parsePath = parsePath(window.location.hash.substr(1)),
        _parsePath$pathname = _parsePath.pathname,
        pathname = _parsePath$pathname === void 0 ? '/' : _parsePath$pathname,
        _parsePath$search = _parsePath.search,
        search = _parsePath$search === void 0 ? '' : _parsePath$search,
        _parsePath$hash = _parsePath.hash,
        hash = _parsePath$hash === void 0 ? '' : _parsePath$hash;

    var state = globalHistory.state || {};
    return [state.idx, readOnly({
      pathname: pathname,
      search: search,
      hash: hash,
      state: state.usr || null,
      key: state.key || 'default'
    })];
  }

  var blockedPopTx = null;

  function handlePop() {
    if (blockedPopTx) {
      blockers.call(blockedPopTx);
      blockedPopTx = null;
    } else {
      var nextAction = Action.Pop;

      var _getIndexAndLocation4 = getIndexAndLocation(),
          nextIndex = _getIndexAndLocation4[0],
          nextLocation = _getIndexAndLocation4[1];

      if (blockers.length) {
        if (nextIndex != null) {
          var delta = index - nextIndex;

          if (delta) {
            // Revert the POP
            blockedPopTx = {
              action: nextAction,
              location: nextLocation,
              retry: function retry() {
                go(delta * -1);
              }
            };
            go(delta);
          }
        } else {
          // Trying to POP to a location with no index. We did not create
          // this location, so we can't effectively block the navigation.
           true ? warning(false, // TODO: Write up a doc that explains our blocking strategy in
          // detail and link to it here so people can understand better
          // what is going on and how to avoid it.
          "You are trying to block a POP navigation to a location that was not " + "created by the history library. The block will fail silently in " + "production, but in general you should do all navigation with the " + "history library (instead of using window.history.pushState directly) " + "to avoid this situation.") : 0;
        }
      } else {
        applyTx(nextAction);
      }
    }
  }

  window.addEventListener(PopStateEventType, handlePop); // popstate does not fire on hashchange in IE 11 and old (trident) Edge
  // https://developer.mozilla.org/de/docs/Web/API/Window/popstate_event

  window.addEventListener(HashChangeEventType, function () {
    var _getIndexAndLocation5 = getIndexAndLocation(),
        nextLocation = _getIndexAndLocation5[1]; // Ignore extraneous hashchange events.


    if (createPath(nextLocation) !== createPath(location)) {
      handlePop();
    }
  });
  var action = Action.Pop;

  var _getIndexAndLocation6 = getIndexAndLocation(),
      index = _getIndexAndLocation6[0],
      location = _getIndexAndLocation6[1];

  var listeners = createEvents();
  var blockers = createEvents();

  if (index == null) {
    index = 0;
    globalHistory.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, globalHistory.state, {
      idx: index
    }), '');
  }

  function getBaseHref() {
    var base = document.querySelector('base');
    var href = '';

    if (base && base.getAttribute('href')) {
      var url = window.location.href;
      var hashIndex = url.indexOf('#');
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }

    return href;
  }

  function createHref(to) {
    return getBaseHref() + '#' + (typeof to === 'string' ? to : createPath(to));
  }

  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }

    return readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      pathname: location.pathname,
      hash: '',
      search: ''
    }, typeof to === 'string' ? parsePath(to) : to, {
      state: state,
      key: createKey()
    }));
  }

  function getHistoryStateAndUrl(nextLocation, index) {
    return [{
      usr: nextLocation.state,
      key: nextLocation.key,
      idx: index
    }, createHref(nextLocation)];
  }

  function allowTx(action, location, retry) {
    return !blockers.length || (blockers.call({
      action: action,
      location: location,
      retry: retry
    }), false);
  }

  function applyTx(nextAction) {
    action = nextAction;

    var _getIndexAndLocation7 = getIndexAndLocation();

    index = _getIndexAndLocation7[0];
    location = _getIndexAndLocation7[1];
    listeners.call({
      action: action,
      location: location
    });
  }

  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      push(to, state);
    }

     true ? warning(nextLocation.pathname.charAt(0) === '/', "Relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")") : 0;

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr3 = getHistoryStateAndUrl(nextLocation, index + 1),
          historyState = _getHistoryStateAndUr3[0],
          url = _getHistoryStateAndUr3[1]; // TODO: Support forced reloading
      // try...catch because iOS limits us to 100 pushState calls :/


      try {
        globalHistory.pushState(historyState, '', url);
      } catch (error) {
        // They are going to lose state here, but there is no real
        // way to warn them about it since the page will refresh...
        window.location.assign(url);
      }

      applyTx(nextAction);
    }
  }

  function replace(to, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      replace(to, state);
    }

     true ? warning(nextLocation.pathname.charAt(0) === '/', "Relative pathnames are not supported in hash history.replace(" + JSON.stringify(to) + ")") : 0;

    if (allowTx(nextAction, nextLocation, retry)) {
      var _getHistoryStateAndUr4 = getHistoryStateAndUrl(nextLocation, index),
          historyState = _getHistoryStateAndUr4[0],
          url = _getHistoryStateAndUr4[1]; // TODO: Support forced reloading


      globalHistory.replaceState(historyState, '', url);
      applyTx(nextAction);
    }
  }

  function go(delta) {
    globalHistory.go(delta);
  }

  var history = {
    get action() {
      return action;
    },

    get location() {
      return location;
    },

    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      var unblock = blockers.push(blocker);

      if (blockers.length === 1) {
        window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
      }

      return function () {
        unblock(); // Remove the beforeunload listener so the document may
        // still be salvageable in the pagehide event.
        // See https://html.spec.whatwg.org/#unloading-documents

        if (!blockers.length) {
          window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
        }
      };
    }
  };
  return history;
}
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#creatememoryhistory
 */

function createMemoryHistory(options) {
  if (options === void 0) {
    options = {};
  }

  var _options3 = options,
      _options3$initialEntr = _options3.initialEntries,
      initialEntries = _options3$initialEntr === void 0 ? ['/'] : _options3$initialEntr,
      initialIndex = _options3.initialIndex;
  var entries = initialEntries.map(function (entry) {
    var location = readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      key: createKey()
    }, typeof entry === 'string' ? parsePath(entry) : entry));
     true ? warning(location.pathname.charAt(0) === '/', "Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: " + JSON.stringify(entry) + ")") : 0;
    return location;
  });
  var index = clamp(initialIndex == null ? entries.length - 1 : initialIndex, 0, entries.length - 1);
  var action = Action.Pop;
  var location = entries[index];
  var listeners = createEvents();
  var blockers = createEvents();

  function createHref(to) {
    return typeof to === 'string' ? to : createPath(to);
  }

  function getNextLocation(to, state) {
    if (state === void 0) {
      state = null;
    }

    return readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      pathname: location.pathname,
      search: '',
      hash: ''
    }, typeof to === 'string' ? parsePath(to) : to, {
      state: state,
      key: createKey()
    }));
  }

  function allowTx(action, location, retry) {
    return !blockers.length || (blockers.call({
      action: action,
      location: location,
      retry: retry
    }), false);
  }

  function applyTx(nextAction, nextLocation) {
    action = nextAction;
    location = nextLocation;
    listeners.call({
      action: action,
      location: location
    });
  }

  function push(to, state) {
    var nextAction = Action.Push;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      push(to, state);
    }

     true ? warning(location.pathname.charAt(0) === '/', "Relative pathnames are not supported in memory history.push(" + JSON.stringify(to) + ")") : 0;

    if (allowTx(nextAction, nextLocation, retry)) {
      index += 1;
      entries.splice(index, entries.length, nextLocation);
      applyTx(nextAction, nextLocation);
    }
  }

  function replace(to, state) {
    var nextAction = Action.Replace;
    var nextLocation = getNextLocation(to, state);

    function retry() {
      replace(to, state);
    }

     true ? warning(location.pathname.charAt(0) === '/', "Relative pathnames are not supported in memory history.replace(" + JSON.stringify(to) + ")") : 0;

    if (allowTx(nextAction, nextLocation, retry)) {
      entries[index] = nextLocation;
      applyTx(nextAction, nextLocation);
    }
  }

  function go(delta) {
    var nextIndex = clamp(index + delta, 0, entries.length - 1);
    var nextAction = Action.Pop;
    var nextLocation = entries[nextIndex];

    function retry() {
      go(delta);
    }

    if (allowTx(nextAction, nextLocation, retry)) {
      index = nextIndex;
      applyTx(nextAction, nextLocation);
    }
  }

  var history = {
    get index() {
      return index;
    },

    get action() {
      return action;
    },

    get location() {
      return location;
    },

    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    back: function back() {
      go(-1);
    },
    forward: function forward() {
      go(1);
    },
    listen: function listen(listener) {
      return listeners.push(listener);
    },
    block: function block(blocker) {
      return blockers.push(blocker);
    }
  };
  return history;
} ////////////////////////////////////////////////////////////////////////////////
// UTILS
////////////////////////////////////////////////////////////////////////////////

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}

function promptBeforeUnload(event) {
  // Cancel the event.
  event.preventDefault(); // Chrome (and legacy IE) requires returnValue to be set.

  event.returnValue = '';
}

function createEvents() {
  var handlers = [];
  return {
    get length() {
      return handlers.length;
    },

    push: function push(fn) {
      handlers.push(fn);
      return function () {
        handlers = handlers.filter(function (handler) {
          return handler !== fn;
        });
      };
    },
    call: function call(arg) {
      handlers.forEach(function (fn) {
        return fn && fn(arg);
      });
    }
  };
}

function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createpath
 */


function createPath(_ref) {
  var _ref$pathname = _ref.pathname,
      pathname = _ref$pathname === void 0 ? '/' : _ref$pathname,
      _ref$search = _ref.search,
      search = _ref$search === void 0 ? '' : _ref$search,
      _ref$hash = _ref.hash,
      hash = _ref$hash === void 0 ? '' : _ref$hash;
  if (search && search !== '?') pathname += search.charAt(0) === '?' ? search : '?' + search;
  if (hash && hash !== '#') pathname += hash.charAt(0) === '#' ? hash : '#' + hash;
  return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#parsepath
 */

function parsePath(path) {
  var parsedPath = {};

  if (path) {
    var hashIndex = path.indexOf('#');

    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }

    var searchIndex = path.indexOf('?');

    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }

    if (path) {
      parsedPath.pathname = path;
    }
  }

  return parsedPath;
}


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/hoist-non-inferno-statics/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/hoist-non-inferno-statics/index.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


var INFERNO_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!INFERNO_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};

module.exports = hoistNonReactStatics;
module.exports["default"] = module.exports;


/***/ }),

/***/ "./node_modules/inferno-router/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/inferno-router/dist/index.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserRouter: () => (/* binding */ BrowserRouter),
/* harmony export */   HashRouter: () => (/* binding */ HashRouter),
/* harmony export */   Link: () => (/* binding */ Link),
/* harmony export */   MemoryRouter: () => (/* binding */ MemoryRouter),
/* harmony export */   NavLink: () => (/* binding */ NavLink),
/* harmony export */   Prompt: () => (/* binding */ Prompt),
/* harmony export */   Redirect: () => (/* binding */ Redirect),
/* harmony export */   Route: () => (/* binding */ Route),
/* harmony export */   Router: () => (/* binding */ Router),
/* harmony export */   StaticRouter: () => (/* binding */ StaticRouter),
/* harmony export */   Switch: () => (/* binding */ Switch),
/* harmony export */   createClientSideURL: () => (/* binding */ createClientSideURL),
/* harmony export */   matchPath: () => (/* binding */ matchPath),
/* harmony export */   resolveLoaders: () => (/* binding */ resolveLoaders),
/* harmony export */   traverseLoaders: () => (/* binding */ traverseLoaders),
/* harmony export */   useLoaderData: () => (/* binding */ useLoaderData),
/* harmony export */   useLoaderError: () => (/* binding */ useLoaderError),
/* harmony export */   withRouter: () => (/* binding */ withRouter)
/* harmony export */ });
/* harmony import */ var inferno__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inferno */ "./node_modules/inferno/index.esm.js");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! history */ "./node_modules/history/index.js");
/* harmony import */ var path_to_regexp_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path-to-regexp-es6 */ "./node_modules/path-to-regexp-es6/index.js");
/* harmony import */ var path_to_regexp_es6__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp_es6__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hoist_non_inferno_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-inferno-statics */ "./node_modules/hoist-non-inferno-statics/index.js");
/* harmony import */ var hoist_non_inferno_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_inferno_statics__WEBPACK_IMPORTED_MODULE_2__);





var isArray = Array.isArray;
function isNullOrUndef(o) {
  return o === void 0 || o === null;
}
function isInvalid(o) {
  return o === null || o === false || o === true || o === void 0;
}
function isString(o) {
  return typeof o === 'string';
}
function isUndefined(o) {
  return o === void 0;
}
function combineFrom(first, second) {
  var out = {};
  if (first) {
    for (var key in first) {
      out[key] = first[key];
    }
  }
  if (second) {
    for (var _key in second) {
      out[_key] = second[_key];
    }
  }
  return out;
}

function combinePath(_ref) {
  var _ref$pathname = _ref.pathname,
    pathname = _ref$pathname === void 0 ? '/' : _ref$pathname,
    _ref$search = _ref.search,
    search = _ref$search === void 0 ? '' : _ref$search,
    _ref$hash = _ref.hash,
    hash = _ref$hash === void 0 ? '' : _ref$hash;
  return pathname + search + hash;
}
function invariant(condition, format, a, b, c, d, e, f) {
  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }
    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;
var compilePath = function compilePath(pattern, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
  if (cache[pattern]) {
    return cache[pattern];
  }
  var keys = [];
  var re = path_to_regexp_es6__WEBPACK_IMPORTED_MODULE_1___default()(pattern, keys, options);
  var compiledPattern = {
    re: re,
    keys: keys
  };
  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }
  return compiledPattern;
};
/**
 * Public API for matching a URL pathname to a path pattern.
 */
function matchPath(pathname, options) {
  if (typeof options === 'string') {
    options = {
      path: options
    };
  }
  var _options = options,
    _options$path = _options.path,
    path = _options$path === void 0 ? '/' : _options$path,
    _options$exact = _options.exact,
    exact = _options$exact === void 0 ? false : _options$exact,
    _options$strict = _options.strict,
    strict = _options$strict === void 0 ? false : _options$strict,
    _options$sensitive = _options.sensitive,
    sensitive = _options$sensitive === void 0 ? false : _options$sensitive,
    loader = _options.loader,
    _options$initialData = _options.initialData,
    initialData = _options$initialData === void 0 ? {} : _options$initialData;
  var _compilePath = compilePath(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
    re = _compilePath.re,
    keys = _compilePath.keys;
  var match = re.exec(pathname);
  if (!match) {
    return null;
  }
  var loaderData = initialData[path];
  var url = match[0],
    values = match.slice(1);
  var isExact = pathname === url;
  if (exact && !isExact) {
    return null;
  }
  return {
    isExact: isExact,
    loader: loader,
    loaderData: loaderData,
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {}),
    path: path,
    url: path === '/' && url === '' ? '/' : url // the matched portion of the URL
  };
}

function _inheritsLoose$8(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf$8(subClass, superClass); }
function _setPrototypeOf$8(o, p) { _setPrototypeOf$8 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$8(o, p); }
function getMatch(pathname, _ref, router) {
  var _path;
  var path = _ref.path,
    exact = _ref.exact,
    strict = _ref.strict,
    sensitive = _ref.sensitive,
    loader = _ref.loader,
    from = _ref.from;
  (_path = path) != null ? _path : path = from;
  var initialData = router.initialData,
    route = router.route; // This is the parent route
  return path ? matchPath(pathname, {
    path: path,
    exact: exact,
    strict: strict,
    sensitive: sensitive,
    loader: loader,
    initialData: initialData
  }) : route.match;
}
function extractFirstMatchFromChildren(pathname, children, router) {
  if (isArray(children)) {
    for (var i = 0; i < children.length; ++i) {
      var nestedMatch = extractFirstMatchFromChildren(pathname, children[i], router);
      if (nestedMatch.match) return nestedMatch;
    }
    return {};
  }
  return {
    _child: children,
    match: getMatch(pathname, children.props, router)
  };
}
var Switch = /*#__PURE__*/function (_Component) {
  _inheritsLoose$8(Switch, _Component);
  function Switch(props, context) {
    var _this;
    _this = _Component.call(this, props, context) || this;
    var router = context.router;
    var location = props.location,
      children = props.children;
    var pathname = (location || router.route.location).pathname;
    var _extractFirstMatchFro = extractFirstMatchFromChildren(pathname, children, router),
      match = _extractFirstMatchFro.match,
      _child = _extractFirstMatchFro._child;
    _this.state = {
      _child: _child,
      match: match
    };
    return _this;
  }
  var _proto = Switch.prototype;
  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    var router = nextContext.router;
    var location = nextProps.location,
      children = nextProps.children;
    var pathname = (location || router.route.location).pathname;
    var _extractFirstMatchFro2 = extractFirstMatchFromChildren(pathname, children, router),
      match = _extractFirstMatchFro2.match,
      _child = _extractFirstMatchFro2._child;
    this.setState({
      match: match,
      _child: _child
    });
  };
  _proto.render = function render(_ref2, _ref3, context) {
    var children = _ref2.children,
      location = _ref2.location;
    var match = _ref3.match,
      _child = _ref3._child;
    if (isInvalid(children)) {
      return null;
    }
    if (match) {
      var _location;
      (_location = location) != null ? _location : location = context.router.route.location;
      return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(_child.flags, _child.type, combineFrom(_child.props, {
        location: location,
        computedMatch: match
      }));
    }
    return null;
  };
  return Switch;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);

function resolveLoaders(loaderEntries) {
  var promises = loaderEntries.map(function (_ref) {
    var path = _ref.path,
      params = _ref.params,
      request = _ref.request,
      loader = _ref.loader;
    return resolveEntry(path, params, request, loader);
  });
  return Promise.all(promises).then(function (result) {
    return Object.fromEntries(result);
  });
}
function traverseLoaders(location, tree, base) {
  return _traverseLoaders(location, tree, base, false);
}
// Optionally pass base param during SSR to get fully qualified request URI passed to loader in request param
function _traverseLoaders(location, tree, base, parentIsSwitch) {
  var _tree$props4, _tree$type;
  if (parentIsSwitch === void 0) {
    parentIsSwitch = false;
  }
  // Make sure tree isn't null
  if (isNullOrUndef(tree)) return [];
  if (Array.isArray(tree)) {
    var hasMatch = false;
    var entriesOfArr = tree.reduce(function (res, node) {
      var _node$type;
      if (parentIsSwitch && hasMatch) return res;
      var outpArr = _traverseLoaders(location, node, base, (node == null ? void 0 : (_node$type = node.type) == null ? void 0 : _node$type.prototype) instanceof Switch);
      if (parentIsSwitch && outpArr.length > 0) {
        hasMatch = true;
      }
      return [].concat(res, outpArr);
    }, []);
    return entriesOfArr;
  }
  var outp = [];
  var isRouteButNotMatch = false;
  if (tree.props) {
    var _tree$props2, _tree$props3;
    // TODO: If we traverse a switch, only the first match should be returned
    // TODO: Should we check if we are in Router? It is defensive and could save a bit of time, but is it worth it?
    var _tree$props = tree.props,
      path = _tree$props.path,
      _tree$props$exact = _tree$props.exact,
      exact = _tree$props$exact === void 0 ? false : _tree$props$exact,
      _tree$props$strict = _tree$props.strict,
      strict = _tree$props$strict === void 0 ? false : _tree$props$strict,
      _tree$props$sensitive = _tree$props.sensitive,
      sensitive = _tree$props$sensitive === void 0 ? false : _tree$props$sensitive;
    var match = matchPath(location, {
      exact: exact,
      path: path,
      sensitive: sensitive,
      strict: strict
    });
    // So we can bail out of recursion it this was a Route which didn't match
    isRouteButNotMatch = !match;
    // Add any loader on this node (but only on the VNode)
    if (match && !tree.context && (_tree$props2 = tree.props) != null && _tree$props2.loader && (_tree$props3 = tree.props) != null && _tree$props3.path) {
      var params = match.params;
      var controller = new AbortController();
      var request = createClientSideRequest(location, controller.signal, base);
      outp.push({
        controller: controller,
        loader: tree.props.loader,
        params: params,
        path: path,
        request: request
      });
    }
  }
  // Traverse ends here
  if (isRouteButNotMatch) return outp;
  // Traverse children
  var entries = _traverseLoaders(location, tree.children || ((_tree$props4 = tree.props) == null ? void 0 : _tree$props4.children), base, ((_tree$type = tree.type) == null ? void 0 : _tree$type.prototype) instanceof Switch);
  return [].concat(outp, entries);
}
function resolveEntry(path, params, request, loader) {
  return loader({
    params: params,
    request: request
  }).then(function (res) {
    // This implementation is based on:
    // https://github.com/remix-run/react-router/blob/4f3ad7b96e6e0228cc952cd7eafe2c265c7393c7/packages/router/router.ts#L2787-L2879
    // Check if regular data object (from tests or initialData)
    if (typeof res.json !== 'function') {
      return [path, {
        res: res
      }];
    }
    var contentType = res.headers.get('Content-Type');
    var dataPromise;
    // Check between word boundaries instead of startsWith() due to the last
    // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type
    if (contentType && /\bapplication\/json\b/.test(contentType)) {
      dataPromise = res.json();
    } else {
      dataPromise = res.text();
    }
    return dataPromise.then(function (body) {
      // We got a JSON error
      if (!res.ok) {
        return [path, {
          err: body
        }];
      }
      // We got JSON response
      return [path, {
        res: body
      }];
    })
    // Could not parse JSON
    ["catch"](function (err) {
      return [path, {
        err: err
      }];
    });
  })
  // Could not fetch data
  ["catch"](function (err) {
    return [path, {
      err: err
    }];
  });
}
var inBrowser = typeof window === 'undefined';
function createClientSideRequest(location, signal,
// submission?: Submission
base) {
  var url = inBrowser || !isUndefined(base) ? createClientSideURL(location, base) : location.toString();
  var init = {
    signal: signal
  };
  // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
  return new Request(url, init);
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */
function createClientSideURL(location, base) {
  if (base === undefined && typeof window !== 'undefined') {
    var _window, _window$location;
    // window.location.origin is "null" (the literal string value) in Firefox
    // under certain conditions, notably when serving from a local HTML file
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
    base = ((_window = window) == null ? void 0 : (_window$location = _window.location) == null ? void 0 : _window$location.origin) !== 'null' ? window.location.origin : window.location.href;
  }
  var url = new URL(location.toString(), base);
  url.hash = '';
  return url;
}
// TODO: react-router supports submitting forms with loaders, this is related to that
// function isMutationMethod(method?: string): method is MutationFormMethod {
//   return validMutationMethods.has(method as MutationFormMethod);
// }
// function convertFormDataToSearchParams(formData: FormData): URLSearchParams {
//   let searchParams = new URLSearchParams();
//   for (let [key, value] of formData.entries()) {
//     // invariant(
//     //   typeof value === "string",
//     //   'File inputs are not supported with encType "application/x-www-form-urlencoded", ' +
//     //     'please use "multipart/form-data" instead.'
//     // );
//     if (typeof value === "string") {
//       searchParams.append(key, value);
//     }
//   }
//   return searchParams;
// }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _inheritsLoose$7(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf$7(subClass, superClass); }
function _setPrototypeOf$7(o, p) { _setPrototypeOf$7 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$7(o, p); }
/**
 * The public API for putting history on context.
 */
var Router = /*#__PURE__*/function (_Component) {
  _inheritsLoose$7(Router, _Component);
  function Router(props, context) {
    var _this;
    _this = _Component.call(this, props, context) || this;
    _this.unlisten = void 0;
    _this._loaderFetchControllers = [];
    _this._loaderIteration = 0;
    var match = _this.computeMatch(props.history.location.pathname);
    _this.state = {
      initialData: _this.props.initialData,
      match: match
    };
    return _this;
  }
  var _proto = Router.prototype;
  _proto.getChildContext = function getChildContext() {
    var _this$state, _this$state2;
    var parentRouter = this.context.router;
    var router = combineFrom(parentRouter, null);
    router.history = this.props.history;
    router.route = {
      location: router.history.location,
      match: (_this$state = this.state) == null ? void 0 : _this$state.match // Why are we sending this? it appears useless.
    };

    router.initialData = (_this$state2 = this.state) == null ? void 0 : _this$state2.initialData; // this is a dictionary of all data available
    return {
      router: router
    };
  };
  _proto.computeMatch = function computeMatch(pathname) {
    return {
      isExact: pathname === '/',
      loader: undefined,
      params: {},
      path: '/',
      url: '/'
    };
  };
  _proto.componentWillMount = function componentWillMount() {
    var _this2 = this;
    var history = this.props.history;
    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      var match = _this2.computeMatch(history.location.pathname);
      _this2._matchAndResolveLoaders(match);
    });
    // First execution of loaders
    if (isUndefined(this.props.initialData)) {
      var _this$state3;
      this._matchAndResolveLoaders((_this$state3 = this.state) == null ? void 0 : _this$state3.match);
    }
  };
  _proto._matchAndResolveLoaders = function _matchAndResolveLoaders(match) {
    var _this3 = this;
    // Keep track of invokation order
    // Bumping the counter needs to be done first because calling abort
    // triggers promise to resolve with "aborted"
    this._loaderIteration = (this._loaderIteration + 1) % 10000;
    var currentIteration = this._loaderIteration;
    for (var _iterator = _createForOfIteratorHelperLoose(this._loaderFetchControllers), _step; !(_step = _iterator()).done;) {
      var controller = _step.value;
      controller.abort();
    }
    this._loaderFetchControllers = [];
    var _this$props = this.props,
      history = _this$props.history,
      children = _this$props.children;
    var loaderEntries = traverseLoaders(history.location.pathname, children);
    if (loaderEntries.length === 0) {
      this.setState({
        match: match
      });
      return;
    }
    // Store AbortController instances for each matched loader
    this._loaderFetchControllers = loaderEntries.map(function (e) {
      return e.controller;
    });
    resolveLoaders(loaderEntries).then(function (initialData) {
      // On multiple pending navigations, only update interface with last
      // in case they resolve out of order
      if (currentIteration === _this3._loaderIteration) {
        _this3.setState({
          initialData: initialData,
          match: match
        });
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };
  _proto.render = function render(props) {
    return props.children;
  };
  return Router;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);

var _excluded$5 = ["basename", "context", "location"];
function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _inheritsLoose$6(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf$6(subClass, superClass); }
function _setPrototypeOf$6(o, p) { _setPrototypeOf$6 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$6(o, p); }
function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
// tslint:disable-next-line:no-empty
var noop = function noop() {};
var StaticRouter = /*#__PURE__*/function (_Component) {
  _inheritsLoose$6(StaticRouter, _Component);
  function StaticRouter() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.createHref = function (path) {
      return addLeadingSlash((_this.props.basename || '') + createURL(path));
    };
    _this.handlePush = function (location) {
      var _this$props = _this.props,
        basename = _this$props.basename,
        context = _this$props.context;
      context.action = 'PUSH';
      context.location = addBasename(basename, isString(location) ? (0,history__WEBPACK_IMPORTED_MODULE_3__.parsePath)(location) : location);
      context.url = createURL(context.location);
    };
    _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
        basename = _this$props2.basename,
        context = _this$props2.context;
      context.action = 'REPLACE';
      context.location = addBasename(basename, isString(location) ? (0,history__WEBPACK_IMPORTED_MODULE_3__.parsePath)(location) : location);
      context.url = createURL(context.location);
    };
    // tslint:disable-next-line:no-empty
    _this.handleListen = function () {
      return noop;
    };
    // tslint:disable-next-line:no-empty
    _this.handleBlock = function () {
      return noop;
    };
    return _this;
  }
  var _proto = StaticRouter.prototype;
  _proto.getChildContext = function getChildContext() {
    return {
      router: {
        initialData: this.props.initialData,
        staticContext: this.props.context
      }
    };
  };
  _proto.render = function render(_ref) {
    var basename = _ref.basename;
      _ref.context;
      var location = _ref.location,
      props = _objectWithoutPropertiesLoose$5(_ref, _excluded$5);
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(4 /* VNodeFlags.ComponentClass */, Router, combineFrom(props, {
      history: {
        action: 'POP',
        block: this.handleBlock,
        createHref: this.createHref,
        go: staticHandler('go'),
        goBack: staticHandler('goBack'),
        goForward: staticHandler('goForward'),
        listen: this.handleListen,
        location: stripBasename(basename, createLocation(location)),
        push: this.handlePush,
        replace: this.handleReplace
      }
    }));
  };
  return StaticRouter;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);
StaticRouter.defaultProps = {
  basename: '',
  location: '/'
};
function normalizeLocation(_ref2) {
  var _ref2$pathname = _ref2.pathname,
    pathname = _ref2$pathname === void 0 ? '/' : _ref2$pathname,
    search = _ref2.search,
    hash = _ref2.hash;
  return {
    hash: (hash || '') === '#' ? '' : hash,
    pathname: pathname,
    search: (search || '') === '?' ? '' : search
  };
}
function addBasename(basename, location) {
  if (!basename) {
    return location;
  }
  return combineFrom(location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}
function stripBasename(basename, location) {
  if (!basename) {
    return location;
  }
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) {
    return location;
  }
  return combineFrom(location, {
    pathname: location.pathname.substring(base.length)
  });
}
function createLocation(location) {
  return typeof location === 'string' ? (0,history__WEBPACK_IMPORTED_MODULE_3__.parsePath)(location) : normalizeLocation(location);
}
function createURL(location) {
  return typeof location === 'string' ? location : combinePath(location);
}
function staticHandler(methodName) {
  return function () {
    invariant(false, 'You cannot %s with <StaticRouter>', methodName);
  };
}

function _inheritsLoose$5(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf$5(subClass, superClass); }
function _setPrototypeOf$5(o, p) { _setPrototypeOf$5 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$5(o, p); }
var BrowserRouter = /*#__PURE__*/function (_Component) {
  _inheritsLoose$5(BrowserRouter, _Component);
  function BrowserRouter(props, context) {
    var _this;
    _this = _Component.call(this, props, context) || this;
    _this.history = void 0;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_3__.createBrowserHistory)();
    return _this;
  }
  var _proto = BrowserRouter.prototype;
  _proto.render = function render() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(4 /* VNodeFlags.ComponentClass */, Router, {
      children: this.props.children,
      history: this.history,
      initialData: this.props.initialData
    });
  };
  return BrowserRouter;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);

function _inheritsLoose$4(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf$4(subClass, superClass); }
function _setPrototypeOf$4(o, p) { _setPrototypeOf$4 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$4(o, p); }
var HashRouter = /*#__PURE__*/function (_Component) {
  _inheritsLoose$4(HashRouter, _Component);
  function HashRouter(props, context) {
    var _this;
    _this = _Component.call(this, props, context) || this;
    _this.history = void 0;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_3__.createHashHistory)();
    return _this;
  }
  var _proto = HashRouter.prototype;
  _proto.render = function render() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(4 /* VNodeFlags.ComponentClass */, Router, {
      children: this.props.children,
      history: this.history
    });
  };
  return HashRouter;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);

function _inheritsLoose$3(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf$3(subClass, superClass); }
function _setPrototypeOf$3(o, p) { _setPrototypeOf$3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$3(o, p); }
var MemoryRouter = /*#__PURE__*/function (_Component) {
  _inheritsLoose$3(MemoryRouter, _Component);
  function MemoryRouter(props, context) {
    var _this;
    _this = _Component.call(this, props, context) || this;
    _this.history = void 0;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_3__.createMemoryHistory)(props);
    return _this;
  }
  var _proto = MemoryRouter.prototype;
  _proto.render = function render() {
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(4 /* VNodeFlags.ComponentClass */, Router, {
      children: this.props.children,
      history: this.history,
      initialData: this.props.initialData
    });
  };
  return MemoryRouter;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);

var _excluded$4 = ["computedMatch"];
function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _inheritsLoose$2(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf$2(subClass, superClass); }
function _setPrototypeOf$2(o, p) { _setPrototypeOf$2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$2(o, p); }
var Route = /*#__PURE__*/function (_Component) {
  _inheritsLoose$2(Route, _Component);
  function Route(props, context) {
    var _this;
    _this = _Component.call(this, props, context) || this;
    var match = _this.computeMatch(props, context.router);
    _this.state = {
      __loaderData__: match == null ? void 0 : match.loaderData,
      match: match
    };
    return _this;
  }
  var _proto = Route.prototype;
  _proto.getChildContext = function getChildContext() {
    var parentRouter = this.context.router;
    var router = combineFrom(parentRouter, null);
    router.route = {
      location: this.props.location || parentRouter.route.location,
      match: this.state.match
    };
    return {
      router: router
    };
  };
  _proto.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
      props = _objectWithoutPropertiesLoose$4(_ref, _excluded$4);
    if (!isNullOrUndef(computedMatch)) {
      // <Switch> already computed the match for us
      return computedMatch;
    }
    var path = props.path,
      strict = props.strict,
      exact = props.exact,
      sensitive = props.sensitive,
      loader = props.loader;
    var route = router.route,
      initialData = router.initialData; // This is the parent route
    var pathname = (props.location || route.location).pathname;
    return path ? matchPath(pathname, {
      path: path,
      strict: strict,
      exact: exact,
      sensitive: sensitive,
      loader: loader,
      initialData: initialData
    }) : route.match;
  };
  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    var match = this.computeMatch(nextProps, nextContext.router);
    this.setState({
      __loaderData__: match == null ? void 0 : match.loaderData,
      match: match
    });
  };
  _proto.render = function render(props, state, context) {
    var match = state.match,
      __loaderData__ = state.__loaderData__;
    var children = props.children,
      component = props.component,
      render = props.render,
      loader = props.loader;
    var _context$router = context.router,
      history = _context$router.history,
      route = _context$router.route,
      staticContext = _context$router.staticContext;
    var location = props.location || route.location;
    var renderProps = {
      match: match,
      location: location,
      history: history,
      staticContext: staticContext,
      component: component,
      render: render,
      loader: loader,
      __loaderData__: __loaderData__
    };
    // If we have a loader we don't render until it has been resolved
    if (!isUndefined(loader) && isUndefined(__loaderData__)) {
      return null;
    }
    if (component) {
      return match ? (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2 /* VNodeFlags.ComponentUnknown */, component, renderProps) : null;
    }
    if (render) {
      // @ts-ignore
      return match ? render(renderProps, this.context) : null;
    }
    if (typeof children === 'function') {
      return children(renderProps);
    }
    return children;
  };
  return Route;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);

var _excluded$3 = ["key", "state"];
function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var normalizeToLocation = function normalizeToLocation(to) {
  return isString(to) ? (0,history__WEBPACK_IMPORTED_MODULE_3__.parsePath)(to) : to;
};
var splitLocation = function splitLocation(location) {
  location.key;
    var state = location.state,
    to = _objectWithoutPropertiesLoose$3(location, _excluded$3);
  return {
    to: to,
    state: state
  };
};

var _excluded$2 = ["replace", "children", "className", "to", "innerRef"];
function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var isModifiedEvent = function isModifiedEvent(event) {
  return Boolean(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};
function handleClick(_ref, event) {
  var props = _ref.props,
    context = _ref.context;
  if (props.onClick) {
    props.onClick(event);
  }
  if (!event.defaultPrevented &&
  // onClick prevented default
  event.button === 0 &&
  // ignore everything but left clicks
  !props.target &&
  // let browser handle "target=_blank" etc.
  !isModifiedEvent(event) // ignore clicks with modifier keys
  ) {
    event.preventDefault();
    var history = context.router.history;
    var _props$replace = props.replace,
      replace = _props$replace === void 0 ? false : _props$replace,
      toPropIn = props.to;
    var _splitLocation = splitLocation(normalizeToLocation(toPropIn)),
      to = _splitLocation.to,
      state = _splitLocation.state;
    if (replace) {
      history.replace(to, state);
    } else {
      history.push(to, state);
    }
  }
}
/**
 * The public API for rendering a history-aware <a>.
 */
function Link(props, context) {
  props.replace;
    var children = props.children,
    className = props.className,
    _props$to = props.to,
    to = _props$to === void 0 ? '' : _props$to,
    innerRef = props.innerRef,
    rest = _objectWithoutPropertiesLoose$2(props, _excluded$2);
  invariant(context.router, 'You should not use <Link> outside a <Router>');
  var href = context.router.history.createHref(isString(to) ? (0,history__WEBPACK_IMPORTED_MODULE_3__.parsePath)(to) : to);
  var newProps = combineFrom(rest, null);
  newProps.href = href;
  newProps.onClick = (0,inferno__WEBPACK_IMPORTED_MODULE_0__.linkEvent)({
    context: context,
    props: props
  }, handleClick);
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createVNode)(1 /* VNodeFlags.HtmlElement */, 'a', className, children, 0 /* ChildFlags.UnknownChildren */, newProps, null, innerRef);
}

var _excluded$1 = ["to", "exact", "strict", "onClick", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "ariaCurrent"];
function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function filter(i) {
  return i;
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
function NavLink(_ref) {
  var to = _ref.to,
    exact = _ref.exact,
    strict = _ref.strict,
    onClick = _ref.onClick,
    linkLocation = _ref.location,
    _ref$activeClassName = _ref.activeClassName,
    activeClassName = _ref$activeClassName === void 0 ? 'active' : _ref$activeClassName,
    classNameProp = _ref.className,
    activeStyle = _ref.activeStyle,
    styleProp = _ref.style,
    getIsActive = _ref.isActive,
    _ref$ariaCurrent = _ref.ariaCurrent,
    ariaCurrent = _ref$ariaCurrent === void 0 ? 'true' : _ref$ariaCurrent,
    rest = _objectWithoutPropertiesLoose$1(_ref, _excluded$1);
  function linkComponent(_ref2) {
    var location = _ref2.location,
      match = _ref2.match;
    var isActive = Boolean(getIsActive ? getIsActive(match, location) : match);
    var className = typeof classNameProp === 'function' ? classNameProp(isActive) : classNameProp;
    var style = typeof styleProp === 'function' ? styleProp(isActive) : styleProp;
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(8 /* VNodeFlags.ComponentFunction */, Link, combineFrom({
      'aria-current': isActive && ariaCurrent || null,
      className: isActive ? [className, activeClassName].filter(filter).join(' ') : className,
      onClick: onClick,
      style: isActive ? combineFrom(style, activeStyle) : style,
      to: to
    }, rest));
  }
  return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(4 /* VNodeFlags.ComponentClass */, Route, {
    children: linkComponent,
    exact: exact,
    location: linkLocation,
    path: typeof to === 'object' ? to.pathname : to,
    strict: strict
  });
}

function _inheritsLoose$1(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf$1(subClass, superClass); }
function _setPrototypeOf$1(o, p) { _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf$1(o, p); }
/**
 * The public API for matching a single path and rendering.
 */
var Prompt = /*#__PURE__*/function (_Component) {
  _inheritsLoose$1(Prompt, _Component);
  function Prompt() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.unblock = void 0;
    return _this;
  }
  var _proto = Prompt.prototype;
  _proto.enable = function enable(message) {
    var _this2 = this;
    if (this.unblock) {
      this.unblock();
    }
    this.unblock = this.context.router.history.block(function (tx) {
      if (message && window.confirm(message)) {
        _this2.unblock();
        tx.retry();
      }
    });
  };
  _proto.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };
  _proto.componentWillMount = function componentWillMount() {
    invariant(this.context.router, 'You should not use <Prompt> outside a <Router>');
    if (this.props.when) {
      this.enable(this.props.message);
    }
  };
  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) {
        this.enable(nextProps.message);
      }
    } else {
      this.disable();
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };
  _proto.render = function render() {
    return null;
  };
  return Prompt;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function getLocationTarget(to) {
  if (!isString(to)) {
    to = combinePath(to);
  }
  return (0,history__WEBPACK_IMPORTED_MODULE_3__.parsePath)(to);
}
var Redirect = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Redirect, _Component);
  function Redirect() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto = Redirect.prototype;
  _proto.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };
  _proto.componentWillMount = function componentWillMount() {
    invariant(this.context.router, 'You should not use <Redirect> outside a <Router>');
    if (this.isStatic()) {
      this.perform();
    }
  };
  _proto.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) {
      this.perform();
    }
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = getLocationTarget(prevProps.to);
    var nextTo = getLocationTarget(this.props.to);
    if (prevTo.pathname === nextTo.pathname && prevTo.search === nextTo.search) {
      // tslint:disable-next-line:no-console
      console.error("You tried to redirect to the same route you're currently on: \"" + nextTo.pathname + nextTo.search + "\"");
      return;
    }
    this.perform();
  };
  _proto.perform = function perform() {
    var history = this.context.router.history;
    var _this$props = this.props,
      _this$props$push = _this$props.push,
      push = _this$props$push === void 0 ? false : _this$props$push,
      to = _this$props.to;
    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };
  _proto.render = function render() {
    return null;
  };
  return Redirect;
}(inferno__WEBPACK_IMPORTED_MODULE_0__.Component);

var _excluded = ["wrappedComponentRef"];
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * A public higher-order component to access the imperative API
 */
function withRouter(Com) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
      remainingProps = _objectWithoutPropertiesLoose(props, _excluded);
    return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(4 /* VNodeFlags.ComponentClass */, Route, {
      render: function render(routeComponentProps) {
        return (0,inferno__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode)(2 /* VNodeFlags.ComponentUnknown */, Com, combineFrom(remainingProps, routeComponentProps), null, wrappedComponentRef);
      }
    });
  };
  C.displayName = "withRouter(" + (Com.displayName || Com.name) + ")";
  C.WrappedComponent = Com;
  return hoist_non_inferno_statics__WEBPACK_IMPORTED_MODULE_2___default()(C, Com);
}

function useLoaderData(props) {
  var _props$__loaderData__;
  return (_props$__loaderData__ = props.__loaderData__) == null ? void 0 : _props$__loaderData__.res;
}
function useLoaderError(props) {
  var _props$__loaderData__2;
  return (_props$__loaderData__2 = props.__loaderData__) == null ? void 0 : _props$__loaderData__2.err;
}




/***/ }),

/***/ "./node_modules/inferno/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/inferno/dist/index.esm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationQueues: () => (/* binding */ AnimationQueues),
/* harmony export */   Component: () => (/* binding */ Component),
/* harmony export */   EMPTY_OBJ: () => (/* binding */ EMPTY_OBJ),
/* harmony export */   Fragment: () => (/* binding */ Fragment),
/* harmony export */   _CI: () => (/* binding */ createClassComponentInstance),
/* harmony export */   _HI: () => (/* binding */ normalizeRoot),
/* harmony export */   _M: () => (/* binding */ mount),
/* harmony export */   _MCCC: () => (/* binding */ mountClassComponentCallbacks),
/* harmony export */   _ME: () => (/* binding */ mountElement),
/* harmony export */   _MFCC: () => (/* binding */ mountFunctionalComponentCallbacks),
/* harmony export */   _MP: () => (/* binding */ mountProps),
/* harmony export */   _MR: () => (/* binding */ mountRef),
/* harmony export */   _RFC: () => (/* binding */ renderFunctionalComponent),
/* harmony export */   __render: () => (/* binding */ __render),
/* harmony export */   createComponentVNode: () => (/* binding */ createComponentVNode),
/* harmony export */   createFragment: () => (/* binding */ createFragment),
/* harmony export */   createPortal: () => (/* binding */ createPortal),
/* harmony export */   createRef: () => (/* binding */ createRef),
/* harmony export */   createRenderer: () => (/* binding */ createRenderer),
/* harmony export */   createTextVNode: () => (/* binding */ createTextVNode),
/* harmony export */   createVNode: () => (/* binding */ createVNode),
/* harmony export */   directClone: () => (/* binding */ directClone),
/* harmony export */   findDOMFromVNode: () => (/* binding */ findDOMFromVNode),
/* harmony export */   forwardRef: () => (/* binding */ forwardRef),
/* harmony export */   getFlagsForElementVnode: () => (/* binding */ getFlagsForElementVnode),
/* harmony export */   linkEvent: () => (/* binding */ linkEvent),
/* harmony export */   normalizeProps: () => (/* binding */ normalizeProps),
/* harmony export */   options: () => (/* binding */ options),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   rerender: () => (/* binding */ rerender),
/* harmony export */   version: () => (/* binding */ version)
/* harmony export */ });
var isArray = Array.isArray;
function isStringOrNumber(o) {
  var type = typeof o;
  return type === 'string' || type === 'number';
}
function isNullOrUndef(o) {
  return o === void 0 || o === null;
}
function isInvalid(o) {
  return o === null || o === false || o === true || o === void 0;
}
function isFunction(o) {
  return typeof o === 'function';
}
function isString(o) {
  return typeof o === 'string';
}
function isNumber(o) {
  return typeof o === 'number';
}
function isNull(o) {
  return o === null;
}
function isUndefined(o) {
  return o === void 0;
}
function combineFrom(first, second) {
  var out = {};
  if (first) {
    for (var key in first) {
      out[key] = first[key];
    }
  }
  if (second) {
    for (var _key in second) {
      out[_key] = second[_key];
    }
  }
  return out;
}

/**
 * Links given data to event as first parameter
 * @param {*} data data to be linked, it will be available in function as first parameter
 * @param {Function} event Function to be called when event occurs
 * @returns {{data: *, event: Function}}
 */
function linkEvent(data, event) {
  if (isFunction(event)) {
    return {
      data: data,
      event: event
    };
  }
  return null; // Return null when event is invalid, to avoid creating unnecessary event handlers
}
// object.event should always be function, otherwise its badly created object.
function isLinkEventObject(o) {
  return !isNull(o) && typeof o === 'object';
}

// We need EMPTY_OBJ defined in one place.
// It's used for comparison, so we can't inline it into shared
var EMPTY_OBJ = {};
// @ts-ignore
var Fragment = '$F';
var AnimationQueues = function AnimationQueues() {
  this.componentDidAppear = [];
  this.componentWillDisappear = [];
  this.componentWillMove = [];
};
function normalizeEventName(name) {
  return name.substring(2).toLowerCase();
}
function appendChild(parentDOM, dom) {
  parentDOM.appendChild(dom);
}
function insertOrAppend(parentDOM, newNode, nextNode) {
  if (isNull(nextNode)) {
    appendChild(parentDOM, newNode);
  } else {
    parentDOM.insertBefore(newNode, nextNode);
  }
}
function documentCreateElement(tag, isSVG) {
  if (isSVG) {
    return document.createElementNS('http://www.w3.org/2000/svg', tag);
  }
  return document.createElement(tag);
}
function replaceChild(parentDOM, newDom, lastDom) {
  parentDOM.replaceChild(newDom, lastDom);
}
function removeChild(parentDOM, childNode) {
  parentDOM.removeChild(childNode);
}
function callAll(arrayFn) {
  for (var i = 0; i < arrayFn.length; i++) {
    arrayFn[i]();
  }
}
function findChildVNode(vNode, startEdge, flags) {
  var children = vNode.children;
  if (flags & 4 /* VNodeFlags.ComponentClass */) {
    return children.$LI;
  }
  if (flags & 8192 /* VNodeFlags.Fragment */) {
    return vNode.childFlags === 2 /* ChildFlags.HasVNodeChildren */ ? children : children[startEdge ? 0 : children.length - 1];
  }
  return children;
}
function findDOMFromVNode(vNode, startEdge) {
  var flags;
  while (vNode) {
    flags = vNode.flags;
    if (flags & 1521 /* VNodeFlags.DOMRef */) {
      return vNode.dom;
    }
    vNode = findChildVNode(vNode, startEdge, flags);
  }
  return null;
}
function callAllAnimationHooks(animationQueue, callback) {
  var animationsLeft = animationQueue.length;
  // Picking from the top because it is faster, invocation order should be irrelevant
  // since all animations are to be run and we can't predict the order in which they complete.
  var fn;
  while ((fn = animationQueue.pop()) !== undefined) {
    fn(function () {
      if (--animationsLeft <= 0 && isFunction(callback)) {
        callback();
      }
    });
  }
}
function callAllMoveAnimationHooks(animationQueue) {
  // Start the animations.
  for (var i = 0; i < animationQueue.length; i++) {
    animationQueue[i].fn();
  }
  // Perform the actual DOM moves when all measurements of initial
  // position have been performed. The rest of the animations are done
  // async.
  for (var _i = 0; _i < animationQueue.length; _i++) {
    var tmp = animationQueue[_i];
    insertOrAppend(tmp.parent, tmp.dom, tmp.next);
  }
  animationQueue.splice(0, animationQueue.length);
}
function clearVNodeDOM(vNode, parentDOM, deferredRemoval) {
  do {
    var flags = vNode.flags;
    if (flags & 1521 /* VNodeFlags.DOMRef */) {
      // On deferred removals the node might disappear because of later operations
      if (!deferredRemoval || vNode.dom.parentNode === parentDOM) {
        removeChild(parentDOM, vNode.dom);
      }
      return;
    }
    var children = vNode.children;
    if (flags & 4 /* VNodeFlags.ComponentClass */) {
      vNode = children.$LI;
    }
    if (flags & 8 /* VNodeFlags.ComponentFunction */) {
      vNode = children;
    }
    if (flags & 8192 /* VNodeFlags.Fragment */) {
      if (vNode.childFlags === 2 /* ChildFlags.HasVNodeChildren */) {
        vNode = children;
      } else {
        for (var i = 0, len = children.length; i < len; ++i) {
          clearVNodeDOM(children[i], parentDOM, false);
        }
        return;
      }
    }
  } while (vNode);
}
function createDeferComponentClassRemovalCallback(vNode, parentDOM) {
  return function () {
    // Mark removal as deferred to trigger check that node still exists
    clearVNodeDOM(vNode, parentDOM, true);
  };
}
function removeVNodeDOM(vNode, parentDOM, animations) {
  if (animations.componentWillDisappear.length > 0) {
    // Wait until animations are finished before removing actual dom nodes
    callAllAnimationHooks(animations.componentWillDisappear, createDeferComponentClassRemovalCallback(vNode, parentDOM));
  } else {
    clearVNodeDOM(vNode, parentDOM, false);
  }
}
function addMoveAnimationHook(animations, parentVNode, refOrInstance, dom, parentDOM, nextNode, flags, props) {
  animations.componentWillMove.push({
    dom: dom,
    fn: function fn() {
      if (flags & 4 /* VNodeFlags.ComponentClass */) {
        refOrInstance.componentWillMove(parentVNode, parentDOM, dom);
      } else if (flags & 8 /* VNodeFlags.ComponentFunction */) {
        refOrInstance.onComponentWillMove(parentVNode, parentDOM, dom, props);
      }
    },
    next: nextNode,
    parent: parentDOM
  });
}
function moveVNodeDOM(parentVNode, vNode, parentDOM, nextNode, animations) {
  var refOrInstance;
  var instanceProps;
  var instanceFlags = vNode.flags;
  do {
    var flags = vNode.flags;
    if (flags & 1521 /* VNodeFlags.DOMRef */) {
      if (!isNullOrUndef(refOrInstance) && (isFunction(refOrInstance.componentWillMove) || isFunction(refOrInstance.onComponentWillMove))) {
        addMoveAnimationHook(animations, parentVNode, refOrInstance, vNode.dom, parentDOM, nextNode, instanceFlags, instanceProps);
      } else {
        // TODO: Should we delay this too to support mixing animated moves with regular?
        insertOrAppend(parentDOM, vNode.dom, nextNode);
      }
      return;
    }
    var children = vNode.children;
    if (flags & 4 /* VNodeFlags.ComponentClass */) {
      refOrInstance = vNode.children;
      // TODO: We should probably deprecate this in V9 since it is inconsitent with other class component hooks
      instanceProps = vNode.props;
      vNode = children.$LI;
    } else if (flags & 8 /* VNodeFlags.ComponentFunction */) {
      refOrInstance = vNode.ref;
      instanceProps = vNode.props;
      vNode = children;
    } else if (flags & 8192 /* VNodeFlags.Fragment */) {
      if (vNode.childFlags === 2 /* ChildFlags.HasVNodeChildren */) {
        vNode = children;
      } else {
        for (var i = 0, len = children.length; i < len; ++i) {
          moveVNodeDOM(parentVNode, children[i], parentDOM, nextNode, animations);
        }
        return;
      }
    }
  } while (vNode);
}
function createDerivedState(instance, nextProps, state) {
  if (instance.constructor.getDerivedStateFromProps) {
    return combineFrom(state, instance.constructor.getDerivedStateFromProps(nextProps, state));
  }
  return state;
}
var renderCheck = {
  v: false
};
var options = {
  componentComparator: null,
  createVNode: null,
  renderComplete: null
};
function setTextContent(dom, children) {
  dom.textContent = children;
}
// Calling this function assumes, nextValue is linkEvent
function isLastValueSameLinkEvent(lastValue, nextValue) {
  return isLinkEventObject(lastValue) && lastValue.event === nextValue.event && lastValue.data === nextValue.data;
}
function mergeUnsetProperties(to, from) {
  for (var propName in from) {
    if (isUndefined(to[propName])) {
      to[propName] = from[propName];
    }
  }
  return to;
}
function safeCall1(method, arg1) {
  return !!isFunction(method) && (method(arg1), true);
}

var keyPrefix = '$';
function V(childFlags, children, className, flags, key, props, ref, type) {
  this.childFlags = childFlags;
  this.children = children;
  this.className = className;
  this.dom = null;
  this.flags = flags;
  this.key = key === void 0 ? null : key;
  this.props = props === void 0 ? null : props;
  this.ref = ref === void 0 ? null : ref;
  this.type = type;
}
function createVNode(flags, type, className, children, childFlags, props, key, ref) {
  var childFlag = childFlags === void 0 ? 1 /* ChildFlags.HasInvalidChildren */ : childFlags;
  var vNode = new V(childFlag, children, className, flags, key, props, ref, type);
  if (options.createVNode) {
    options.createVNode(vNode);
  }
  if (childFlag === 0 /* ChildFlags.UnknownChildren */) {
    normalizeChildren(vNode, vNode.children);
  }
  return vNode;
}
function mergeDefaultHooks(flags, type, ref) {
  if (flags & 4 /* VNodeFlags.ComponentClass */) {
    return ref;
  }
  var defaultHooks = (flags & 32768 /* VNodeFlags.ForwardRef */ ? type.render : type).defaultHooks;
  if (isNullOrUndef(defaultHooks)) {
    return ref;
  }
  if (isNullOrUndef(ref)) {
    return defaultHooks;
  }
  return mergeUnsetProperties(ref, defaultHooks);
}
function mergeDefaultProps(flags, type, props) {
  // set default props
  var defaultProps = (flags & 32768 /* VNodeFlags.ForwardRef */ ? type.render : type).defaultProps;
  if (isNullOrUndef(defaultProps)) {
    return props;
  }
  if (isNullOrUndef(props)) {
    return combineFrom(defaultProps, null);
  }
  return mergeUnsetProperties(props, defaultProps);
}
function resolveComponentFlags(flags, type) {
  if (flags & 12 /* VNodeFlags.ComponentKnown */) {
    return flags;
  }
  if (type.prototype && type.prototype.render) {
    return 4 /* VNodeFlags.ComponentClass */;
  }

  if (type.render) {
    return 32776 /* VNodeFlags.ForwardRefComponent */;
  }

  return 8 /* VNodeFlags.ComponentFunction */;
}

function createComponentVNode(flags, type, props, key, ref) {
  flags = resolveComponentFlags(flags, type);
  var vNode = new V(1 /* ChildFlags.HasInvalidChildren */, null, null, flags, key, mergeDefaultProps(flags, type, props), mergeDefaultHooks(flags, type, ref), type);
  if (options.createVNode) {
    options.createVNode(vNode);
  }
  return vNode;
}
function createTextVNode(text, key) {
  return new V(1 /* ChildFlags.HasInvalidChildren */, isNullOrUndef(text) || text === true || text === false ? '' : text, null, 16 /* VNodeFlags.Text */, key, null, null, null);
}
function createFragment(children, childFlags, key) {
  var fragment = createVNode(8192 /* VNodeFlags.Fragment */, 8192 /* VNodeFlags.Fragment */, null, children, childFlags, null, key, null);
  switch (fragment.childFlags) {
    case 1 /* ChildFlags.HasInvalidChildren */:
      fragment.children = createVoidVNode();
      fragment.childFlags = 2 /* ChildFlags.HasVNodeChildren */;
      break;
    case 16 /* ChildFlags.HasTextChildren */:
      fragment.children = [createTextVNode(children)];
      fragment.childFlags = 4 /* ChildFlags.HasNonKeyedChildren */;
      break;
  }
  return fragment;
}
function normalizeProps(vNode) {
  var props = vNode.props;
  if (props) {
    var flags = vNode.flags;
    if (flags & 481 /* VNodeFlags.Element */) {
      if (props.children !== void 0 && isNullOrUndef(vNode.children)) {
        normalizeChildren(vNode, props.children);
      }
      if (props.className !== void 0) {
        if (isNullOrUndef(vNode.className)) {
          vNode.className = props.className || null;
        }
        props.className = undefined;
      }
    }
    if (props.key !== void 0) {
      vNode.key = props.key;
      props.key = undefined;
    }
    if (props.ref !== void 0) {
      if (flags & 8 /* VNodeFlags.ComponentFunction */) {
        vNode.ref = combineFrom(vNode.ref, props.ref);
      } else {
        vNode.ref = props.ref;
      }
      props.ref = undefined;
    }
  }
  return vNode;
}
/*
 * Fragment is different from normal vNode,
 * because when it needs to be cloned we need to clone its children too
 * But not normalize, because otherwise those possibly get KEY and re-mount
 */
function cloneFragment(vNodeToClone) {
  var oldChildren = vNodeToClone.children;
  var childFlags = vNodeToClone.childFlags;
  return createFragment(childFlags === 2 /* ChildFlags.HasVNodeChildren */ ? directClone(oldChildren) : oldChildren.map(directClone), childFlags, vNodeToClone.key);
}
function directClone(vNodeToClone) {
  var flags = vNodeToClone.flags & -16385 /* VNodeFlags.ClearInUse */;
  var props = vNodeToClone.props;
  if (flags & 14 /* VNodeFlags.Component */) {
    if (!isNull(props)) {
      var propsToClone = props;
      props = {};
      for (var key in propsToClone) {
        props[key] = propsToClone[key];
      }
    }
  }
  if ((flags & 8192 /* VNodeFlags.Fragment */) === 0) {
    return new V(vNodeToClone.childFlags, vNodeToClone.children, vNodeToClone.className, flags, vNodeToClone.key, props, vNodeToClone.ref, vNodeToClone.type);
  }
  return cloneFragment(vNodeToClone);
}
function createVoidVNode() {
  return createTextVNode('', null);
}
function createPortal(children, container) {
  var normalizedRoot = normalizeRoot(children);
  return createVNode(1024 /* VNodeFlags.Portal */, 1024 /* VNodeFlags.Portal */, null, normalizedRoot, 0 /* ChildFlags.UnknownChildren */, null, normalizedRoot.key, container);
}
function _normalizeVNodes(nodes, result, index, currentKey) {
  for (var len = nodes.length; index < len; index++) {
    var n = nodes[index];
    if (!isInvalid(n)) {
      var newKey = currentKey + keyPrefix + index;
      if (isArray(n)) {
        _normalizeVNodes(n, result, 0, newKey);
      } else {
        if (isStringOrNumber(n)) {
          n = createTextVNode(n, newKey);
        } else {
          var oldKey = n.key;
          var isPrefixedKey = isString(oldKey) && oldKey[0] === keyPrefix;
          if (n.flags & 81920 /* VNodeFlags.InUseOrNormalized */ || isPrefixedKey) {
            n = directClone(n);
          }
          n.flags |= 65536 /* VNodeFlags.Normalized */;
          if (!isPrefixedKey) {
            if (isNull(oldKey)) {
              n.key = newKey;
            } else {
              n.key = currentKey + oldKey;
            }
          } else if (oldKey.substring(0, currentKey.length) !== currentKey) {
            n.key = currentKey + oldKey;
          }
        }
        result.push(n);
      }
    }
  }
}
function getFlagsForElementVnode(type) {
  switch (type) {
    case 'svg':
      return 32 /* VNodeFlags.SvgElement */;
    case 'input':
      return 64 /* VNodeFlags.InputElement */;
    case 'select':
      return 256 /* VNodeFlags.SelectElement */;
    case 'textarea':
      return 128 /* VNodeFlags.TextareaElement */;
    // @ts-ignore
    case Fragment:
      return 8192 /* VNodeFlags.Fragment */;
    default:
      return 1 /* VNodeFlags.HtmlElement */;
  }
}

function normalizeChildren(vNode, children) {
  var newChildren;
  var newChildFlags = 1 /* ChildFlags.HasInvalidChildren */;
  // Don't change children to match strict equal (===) true in patching
  if (isInvalid(children)) {
    newChildren = children;
  } else if (isStringOrNumber(children)) {
    newChildFlags = 16 /* ChildFlags.HasTextChildren */;
    newChildren = children;
  } else if (isArray(children)) {
    var len = children.length;
    for (var i = 0; i < len; ++i) {
      var n = children[i];
      if (isInvalid(n) || isArray(n)) {
        newChildren = newChildren || children.slice(0, i);
        _normalizeVNodes(children, newChildren, i, '');
        break;
      } else if (isStringOrNumber(n)) {
        newChildren = newChildren || children.slice(0, i);
        newChildren.push(createTextVNode(n, keyPrefix + i));
      } else {
        var key = n.key;
        var needsCloning = (n.flags & 81920 /* VNodeFlags.InUseOrNormalized */) > 0;
        var isNullKey = isNull(key);
        var isPrefixed = isString(key) && key[0] === keyPrefix;
        if (needsCloning || isNullKey || isPrefixed) {
          newChildren = newChildren || children.slice(0, i);
          if (needsCloning || isPrefixed) {
            n = directClone(n);
          }
          if (isNullKey || isPrefixed) {
            n.key = keyPrefix + i;
          }
          newChildren.push(n);
        } else if (newChildren) {
          newChildren.push(n);
        }
        n.flags |= 65536 /* VNodeFlags.Normalized */;
      }
    }

    newChildren = newChildren || children;
    if (newChildren.length === 0) {
      newChildFlags = 1 /* ChildFlags.HasInvalidChildren */;
    } else {
      newChildFlags = 8 /* ChildFlags.HasKeyedChildren */;
    }
  } else {
    newChildren = children;
    newChildren.flags |= 65536 /* VNodeFlags.Normalized */;
    if (children.flags & 81920 /* VNodeFlags.InUseOrNormalized */) {
      newChildren = directClone(children);
    }
    newChildFlags = 2 /* ChildFlags.HasVNodeChildren */;
  }

  vNode.children = newChildren;
  vNode.childFlags = newChildFlags;
  return vNode;
}
function normalizeRoot(input) {
  if (isInvalid(input) || isStringOrNumber(input)) {
    return createTextVNode(input, null);
  }
  if (isArray(input)) {
    return createFragment(input, 0 /* ChildFlags.UnknownChildren */, null);
  }
  return input.flags & 16384 /* VNodeFlags.InUse */ ? directClone(input) : input;
}

var xlinkNS = 'http://www.w3.org/1999/xlink';
var xmlNS = 'http://www.w3.org/XML/1998/namespace';
var namespaces = {
  'xlink:actuate': xlinkNS,
  'xlink:arcrole': xlinkNS,
  'xlink:href': xlinkNS,
  'xlink:role': xlinkNS,
  'xlink:show': xlinkNS,
  'xlink:title': xlinkNS,
  'xlink:type': xlinkNS,
  'xml:base': xmlNS,
  'xml:lang': xmlNS,
  'xml:space': xmlNS
};

function getDelegatedEventObject(v) {
  return {
    onClick: v,
    onDblClick: v,
    onFocusIn: v,
    onFocusOut: v,
    onKeyDown: v,
    onKeyPress: v,
    onKeyUp: v,
    onMouseDown: v,
    onMouseMove: v,
    onMouseUp: v,
    onTouchEnd: v,
    onTouchMove: v,
    onTouchStart: v
  };
}
var attachedEventCounts = getDelegatedEventObject(0);
var attachedEvents = getDelegatedEventObject(null);
var syntheticEvents = getDelegatedEventObject(true);
function updateOrAddSyntheticEvent(name, dom) {
  var eventsObject = dom.$EV;
  if (!eventsObject) {
    eventsObject = dom.$EV = getDelegatedEventObject(null);
  }
  if (!eventsObject[name]) {
    if (++attachedEventCounts[name] === 1) {
      attachedEvents[name] = attachEventToDocument(name);
    }
  }
  return eventsObject;
}
function unmountSyntheticEvent(name, dom) {
  var eventsObject = dom.$EV;
  if (eventsObject && eventsObject[name]) {
    if (--attachedEventCounts[name] === 0) {
      document.removeEventListener(normalizeEventName(name), attachedEvents[name]);
      attachedEvents[name] = null;
    }
    eventsObject[name] = null;
  }
}
function handleSyntheticEvent(name, lastEvent, nextEvent, dom) {
  if (isFunction(nextEvent)) {
    updateOrAddSyntheticEvent(name, dom)[name] = nextEvent;
  } else if (isLinkEventObject(nextEvent)) {
    if (isLastValueSameLinkEvent(lastEvent, nextEvent)) {
      return;
    }
    updateOrAddSyntheticEvent(name, dom)[name] = nextEvent;
  } else {
    unmountSyntheticEvent(name, dom);
  }
}
// When browsers fully support event.composedPath we could loop it through instead of using parentNode property
function getTargetNode(event) {
  return isFunction(event.composedPath) ? event.composedPath()[0] : event.target;
}
function dispatchEvents(event, isClick, name, eventData) {
  var dom = getTargetNode(event);
  do {
    // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
    // because the event listener is on document.body
    // Don't process clicks on disabled elements
    if (isClick && dom.disabled) {
      return;
    }
    var eventsObject = dom.$EV;
    if (eventsObject) {
      var currentEvent = eventsObject[name];
      if (currentEvent) {
        // linkEvent object
        eventData.dom = dom;
        currentEvent.event ? currentEvent.event(currentEvent.data, event) : currentEvent(event);
        if (event.cancelBubble) {
          return;
        }
      }
    }
    dom = dom.parentNode;
  } while (!isNull(dom));
}
function stopPropagation() {
  this.cancelBubble = true;
  if (!this.immediatePropagationStopped) {
    this.stopImmediatePropagation();
  }
}
function isDefaultPrevented() {
  return this.defaultPrevented;
}
function isPropagationStopped() {
  return this.cancelBubble;
}
function extendEventProperties(event) {
  // Event data needs to be object to save reference to currentTarget getter
  var eventData = {
    dom: document
  };
  event.isDefaultPrevented = isDefaultPrevented;
  event.isPropagationStopped = isPropagationStopped;
  event.stopPropagation = stopPropagation;
  Object.defineProperty(event, 'currentTarget', {
    configurable: true,
    get: function get() {
      return eventData.dom;
    }
  });
  return eventData;
}
function rootClickEvent(name) {
  return function (event) {
    if (event.button !== 0) {
      // Firefox incorrectly triggers click event for mid/right mouse buttons.
      // This bug has been active for 17 years.
      // https://bugzilla.mozilla.org/show_bug.cgi?id=184051
      event.stopPropagation();
      return;
    }
    dispatchEvents(event, true, name, extendEventProperties(event));
  };
}
function rootEvent(name) {
  return function (event) {
    dispatchEvents(event, false, name, extendEventProperties(event));
  };
}
function attachEventToDocument(name) {
  var attachedEvent = name === 'onClick' || name === 'onDblClick' ? rootClickEvent(name) : rootEvent(name);
  document.addEventListener(normalizeEventName(name), attachedEvent);
  return attachedEvent;
}

function isSameInnerHTML(dom, innerHTML) {
  var tempdom = document.createElement('i');
  tempdom.innerHTML = innerHTML;
  return tempdom.innerHTML === dom.innerHTML;
}

function triggerEventListener(props, methodName, e) {
  if (props[methodName]) {
    var listener = props[methodName];
    if (listener.event) {
      listener.event(listener.data, e);
    } else {
      listener(e);
    }
  } else {
    var nativeListenerName = methodName.toLowerCase();
    if (props[nativeListenerName]) {
      props[nativeListenerName](e);
    }
  }
}
function createWrappedFunction(methodName, applyValue) {
  var fnMethod = function fnMethod(e) {
    var vNode = this.$V;
    // If vNode is gone by the time event fires, no-op
    if (!vNode) {
      return;
    }
    var props = vNode.props || EMPTY_OBJ;
    var dom = vNode.dom;
    if (isString(methodName)) {
      triggerEventListener(props, methodName, e);
    } else {
      for (var i = 0; i < methodName.length; ++i) {
        triggerEventListener(props, methodName[i], e);
      }
    }
    if (isFunction(applyValue)) {
      var newVNode = this.$V;
      var newProps = newVNode.props || EMPTY_OBJ;
      applyValue(newProps, dom, false, newVNode);
    }
  };
  Object.defineProperty(fnMethod, 'wrapped', {
    configurable: false,
    enumerable: false,
    value: true,
    writable: false
  });
  return fnMethod;
}

function attachEvent(dom, eventName, handler) {
  var previousKey = "$" + eventName;
  var previousArgs = dom[previousKey];
  if (previousArgs) {
    if (previousArgs[1].wrapped) {
      return;
    }
    dom.removeEventListener(previousArgs[0], previousArgs[1]);
    dom[previousKey] = null;
  }
  if (isFunction(handler)) {
    dom.addEventListener(eventName, handler);
    dom[previousKey] = [eventName, handler];
  }
}

function isCheckedType(type) {
  return type === 'checkbox' || type === 'radio';
}
var onTextInputChange = createWrappedFunction('onInput', applyValueInput);
var wrappedOnChange$1 = createWrappedFunction(['onClick', 'onChange'], applyValueInput);
/* tslint:disable-next-line:no-empty */
function emptywrapper(event) {
  event.stopPropagation();
}
emptywrapper.wrapped = true;
function inputEvents(dom, nextPropsOrEmpty) {
  if (isCheckedType(nextPropsOrEmpty.type)) {
    attachEvent(dom, 'change', wrappedOnChange$1);
    attachEvent(dom, 'click', emptywrapper);
  } else {
    attachEvent(dom, 'input', onTextInputChange);
  }
}
function applyValueInput(nextPropsOrEmpty, dom) {
  var type = nextPropsOrEmpty.type;
  var value = nextPropsOrEmpty.value;
  var checked = nextPropsOrEmpty.checked;
  var multiple = nextPropsOrEmpty.multiple;
  var defaultValue = nextPropsOrEmpty.defaultValue;
  var hasValue = !isNullOrUndef(value);
  if (type && type !== dom.type) {
    dom.setAttribute('type', type);
  }
  if (!isNullOrUndef(multiple) && multiple !== dom.multiple) {
    dom.multiple = multiple;
  }
  if (!isNullOrUndef(defaultValue) && !hasValue) {
    dom.defaultValue = defaultValue + '';
  }
  if (isCheckedType(type)) {
    if (hasValue) {
      dom.value = value;
    }
    if (!isNullOrUndef(checked)) {
      dom.checked = checked;
    }
  } else {
    if (hasValue && dom.value !== value) {
      dom.defaultValue = value;
      dom.value = value;
    } else if (!isNullOrUndef(checked)) {
      dom.checked = checked;
    }
  }
}

function updateChildOptions(vNode, value) {
  if (vNode.type === 'option') {
    updateChildOption(vNode, value);
  } else {
    var children = vNode.children;
    var flags = vNode.flags;
    if (flags & 4 /* VNodeFlags.ComponentClass */) {
      updateChildOptions(children.$LI, value);
    } else if (flags & 8 /* VNodeFlags.ComponentFunction */) {
      updateChildOptions(children, value);
    } else if (vNode.childFlags === 2 /* ChildFlags.HasVNodeChildren */) {
      updateChildOptions(children, value);
    } else if (vNode.childFlags & 12 /* ChildFlags.MultipleChildren */) {
      for (var i = 0, len = children.length; i < len; ++i) {
        updateChildOptions(children[i], value);
      }
    }
  }
}
function updateChildOption(vNode, value) {
  var props = vNode.props || EMPTY_OBJ;
  var dom = vNode.dom;
  // we do this as multiple may have changed
  dom.value = props.value;
  if (props.value === value || isArray(value) && value.indexOf(props.value) !== -1) {
    dom.selected = true;
  } else if (!isNullOrUndef(value) || !isNullOrUndef(props.selected)) {
    dom.selected = props.selected || false;
  }
}
var onSelectChange = createWrappedFunction('onChange', applyValueSelect);
function selectEvents(dom) {
  attachEvent(dom, 'change', onSelectChange);
}
function applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode) {
  var multiplePropInBoolean = Boolean(nextPropsOrEmpty.multiple);
  if (!isNullOrUndef(nextPropsOrEmpty.multiple) && multiplePropInBoolean !== dom.multiple) {
    dom.multiple = multiplePropInBoolean;
  }
  var index = nextPropsOrEmpty.selectedIndex;
  if (index === -1) {
    dom.selectedIndex = -1;
  }
  var childFlags = vNode.childFlags;
  if (childFlags !== 1 /* ChildFlags.HasInvalidChildren */) {
    var value = nextPropsOrEmpty.value;
    if (isNumber(index) && index > -1 && dom.options[index]) {
      value = dom.options[index].value;
    }
    if (mounting && isNullOrUndef(value)) {
      value = nextPropsOrEmpty.defaultValue;
    }
    updateChildOptions(vNode, value);
  }
}

var onTextareaInputChange = createWrappedFunction('onInput', applyValueTextArea);
var wrappedOnChange = createWrappedFunction('onChange');
function textAreaEvents(dom, nextPropsOrEmpty) {
  attachEvent(dom, 'input', onTextareaInputChange);
  if (nextPropsOrEmpty.onChange) {
    attachEvent(dom, 'change', wrappedOnChange);
  }
}
function applyValueTextArea(nextPropsOrEmpty, dom, mounting) {
  var value = nextPropsOrEmpty.value;
  var domValue = dom.value;
  if (isNullOrUndef(value)) {
    if (mounting) {
      var defaultValue = nextPropsOrEmpty.defaultValue;
      if (!isNullOrUndef(defaultValue) && defaultValue !== domValue) {
        dom.defaultValue = defaultValue;
        dom.value = defaultValue;
      }
    }
  } else if (domValue !== value) {
    /* There is value so keep it controlled */
    dom.defaultValue = value;
    dom.value = value;
  }
}

function processElement(flags, vNode, dom, nextPropsOrEmpty, mounting, isControlled) {
  if (flags & 64 /* VNodeFlags.InputElement */) {
    applyValueInput(nextPropsOrEmpty, dom);
  } else if (flags & 256 /* VNodeFlags.SelectElement */) {
    applyValueSelect(nextPropsOrEmpty, dom, mounting, vNode);
  } else if (flags & 128 /* VNodeFlags.TextareaElement */) {
    applyValueTextArea(nextPropsOrEmpty, dom, mounting);
  }
  if (isControlled) {
    dom.$V = vNode;
  }
}
function addFormElementEventHandlers(flags, dom, nextPropsOrEmpty) {
  if (flags & 64 /* VNodeFlags.InputElement */) {
    inputEvents(dom, nextPropsOrEmpty);
  } else if (flags & 256 /* VNodeFlags.SelectElement */) {
    selectEvents(dom);
  } else if (flags & 128 /* VNodeFlags.TextareaElement */) {
    textAreaEvents(dom, nextPropsOrEmpty);
  }
}
function isControlledFormElement(nextPropsOrEmpty) {
  return nextPropsOrEmpty.type && isCheckedType(nextPropsOrEmpty.type) ? !isNullOrUndef(nextPropsOrEmpty.checked) : !isNullOrUndef(nextPropsOrEmpty.value);
}

function createRef() {
  return {
    current: null
  };
}
// TODO: Make this return value typed
function forwardRef(render) {
  var ref = {
    render: render
  };
  // @ts-ignore
  return ref;
}
function unmountRef(ref) {
  if (ref) {
    if (!safeCall1(ref, null) && ref.current) {
      ref.current = null;
    }
  }
}
function mountRef(ref, value, lifecycle) {
  if (ref && (isFunction(ref) || ref.current !== void 0)) {
    lifecycle.push(function () {
      if (!safeCall1(ref, value) && ref.current !== void 0) {
        ref.current = value;
      }
    });
  }
}

function remove(vNode, parentDOM, animations) {
  unmount(vNode, animations);
  removeVNodeDOM(vNode, parentDOM, animations);
}
function unmount(vNode, animations) {
  var flags = vNode.flags;
  var children = vNode.children;
  var ref;
  if (flags & 481 /* VNodeFlags.Element */) {
    ref = vNode.ref;
    var props = vNode.props;
    unmountRef(ref);
    var childFlags = vNode.childFlags;
    if (!isNull(props)) {
      var keys = Object.keys(props);
      for (var i = 0, len = keys.length; i < len; i++) {
        var key = keys[i];
        if (syntheticEvents[key]) {
          unmountSyntheticEvent(key, vNode.dom);
        }
      }
    }
    if (childFlags & 12 /* ChildFlags.MultipleChildren */) {
      unmountAllChildren(children, animations);
    } else if (childFlags === 2 /* ChildFlags.HasVNodeChildren */) {
      unmount(children, animations);
    }
  } else if (children) {
    if (flags & 4 /* VNodeFlags.ComponentClass */) {
      if (isFunction(children.componentWillUnmount)) {
        // TODO: Possible entrypoint
        children.componentWillUnmount();
      }
      // If we have a componentWillDisappear on this component, block children from animating
      var childAnimations = animations;
      if (isFunction(children.componentWillDisappear)) {
        childAnimations = new AnimationQueues();
        addDisappearAnimationHook(animations, children, children.$LI.dom, flags, undefined);
      }
      unmountRef(vNode.ref);
      children.$UN = true;
      unmount(children.$LI, childAnimations);
    } else if (flags & 8 /* VNodeFlags.ComponentFunction */) {
      // If we have a onComponentWillDisappear on this component, block children from animating
      var _childAnimations = animations;
      ref = vNode.ref;
      if (!isNullOrUndef(ref)) {
        var domEl = null;
        if (isFunction(ref.onComponentWillUnmount)) {
          domEl = findDOMFromVNode(vNode, true);
          ref.onComponentWillUnmount(domEl, vNode.props || EMPTY_OBJ);
        }
        if (isFunction(ref.onComponentWillDisappear)) {
          _childAnimations = new AnimationQueues();
          domEl = domEl || findDOMFromVNode(vNode, true);
          addDisappearAnimationHook(animations, ref, domEl, flags, vNode.props);
        }
      }
      unmount(children, _childAnimations);
    } else if (flags & 1024 /* VNodeFlags.Portal */) {
      remove(children, vNode.ref, animations);
    } else if (flags & 8192 /* VNodeFlags.Fragment */) {
      if (vNode.childFlags & 12 /* ChildFlags.MultipleChildren */) {
        unmountAllChildren(children, animations);
      }
    }
  }
}
function unmountAllChildren(children, animations) {
  for (var i = 0, len = children.length; i < len; ++i) {
    unmount(children[i], animations);
  }
}
function createClearAllCallback(children, parentDOM) {
  return function () {
    // We need to remove children one by one because elements can be added during animation
    if (parentDOM) {
      for (var i = 0; i < children.length; i++) {
        var vNode = children[i];
        clearVNodeDOM(vNode, parentDOM, false);
      }
    }
  };
}
function clearDOM(parentDOM, children, animations) {
  if (animations.componentWillDisappear.length > 0) {
    // Wait until animations are finished before removing actual dom nodes
    // Be aware that the element could be removed by a later operation
    callAllAnimationHooks(animations.componentWillDisappear, createClearAllCallback(children, parentDOM));
  } else {
    // Optimization for clearing dom
    parentDOM.textContent = '';
  }
}
function removeAllChildren(dom, vNode, children, animations) {
  unmountAllChildren(children, animations);
  if (vNode.flags & 8192 /* VNodeFlags.Fragment */) {
    removeVNodeDOM(vNode, dom, animations);
  } else {
    clearDOM(dom, children, animations);
  }
}
// Only add animations to queue in browser
function addDisappearAnimationHook(animations, instanceOrRef, dom, flags, props) {
  animations.componentWillDisappear.push(function (callback) {
    if (flags & 4 /* VNodeFlags.ComponentClass */) {
      instanceOrRef.componentWillDisappear(dom, callback);
    } else if (flags & 8 /* VNodeFlags.ComponentFunction */) {
      instanceOrRef.onComponentWillDisappear(dom, props, callback);
    }
  });
}

function wrapLinkEvent(nextValue) {
  // This variable makes sure there is no "this" context in callback
  var ev = nextValue.event;
  return function (e) {
    ev(nextValue.data, e);
  };
}
function patchEvent(name, lastValue, nextValue, dom) {
  if (isLinkEventObject(nextValue)) {
    if (isLastValueSameLinkEvent(lastValue, nextValue)) {
      return;
    }
    nextValue = wrapLinkEvent(nextValue);
  }
  attachEvent(dom, normalizeEventName(name), nextValue);
}
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
  if (isNullOrUndef(nextAttrValue)) {
    dom.removeAttribute('style');
    return;
  }
  var domStyle = dom.style;
  var style;
  var value;
  if (isString(nextAttrValue)) {
    domStyle.cssText = nextAttrValue;
    return;
  }
  if (!isNullOrUndef(lastAttrValue) && !isString(lastAttrValue)) {
    for (style in nextAttrValue) {
      // do not add a hasOwnProperty check here, it affects performance
      value = nextAttrValue[style];
      if (value !== lastAttrValue[style]) {
        domStyle.setProperty(style, value);
      }
    }
    for (style in lastAttrValue) {
      if (isNullOrUndef(nextAttrValue[style])) {
        domStyle.removeProperty(style);
      }
    }
  } else {
    for (style in nextAttrValue) {
      value = nextAttrValue[style];
      domStyle.setProperty(style, value);
    }
  }
}
function patchDangerInnerHTML(lastValue, nextValue, lastVNode, dom, animations) {
  var lastHtml = lastValue && lastValue.__html || '';
  var nextHtml = nextValue && nextValue.__html || '';
  if (lastHtml !== nextHtml) {
    if (!isNullOrUndef(nextHtml) && !isSameInnerHTML(dom, nextHtml)) {
      if (!isNull(lastVNode)) {
        if (lastVNode.childFlags & 12 /* ChildFlags.MultipleChildren */) {
          unmountAllChildren(lastVNode.children, animations);
        } else if (lastVNode.childFlags === 2 /* ChildFlags.HasVNodeChildren */) {
          unmount(lastVNode.children, animations);
        }
        lastVNode.children = null;
        lastVNode.childFlags = 1 /* ChildFlags.HasInvalidChildren */;
      }

      dom.innerHTML = nextHtml;
    }
  }
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode, animations) {
  switch (prop) {
    case 'children':
    case 'childrenType':
    case 'className':
    case 'defaultValue':
    case 'key':
    case 'multiple':
    case 'ref':
    case 'selectedIndex':
      break;
    case 'autoFocus':
      dom.autofocus = !!nextValue;
      break;
    case 'allowfullscreen':
    case 'autoplay':
    case 'capture':
    case 'checked':
    case 'controls':
    case 'default':
    case 'disabled':
    case 'hidden':
    case 'indeterminate':
    case 'loop':
    case 'muted':
    case 'novalidate':
    case 'open':
    case 'readOnly':
    case 'required':
    case 'reversed':
    case 'scoped':
    case 'seamless':
    case 'selected':
      dom[prop] = !!nextValue;
      break;
    case 'defaultChecked':
    case 'value':
    case 'volume':
      if (hasControlledValue && prop === 'value') {
        break;
      }
      var value = isNullOrUndef(nextValue) ? '' : nextValue;
      if (dom[prop] !== value) {
        dom[prop] = value;
      }
      break;
    case 'style':
      patchStyle(lastValue, nextValue, dom);
      break;
    case 'dangerouslySetInnerHTML':
      patchDangerInnerHTML(lastValue, nextValue, lastVNode, dom, animations);
      break;
    default:
      if (syntheticEvents[prop]) {
        handleSyntheticEvent(prop, lastValue, nextValue, dom);
      } else if (prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110) {
        patchEvent(prop, lastValue, nextValue, dom);
      } else if (isNullOrUndef(nextValue)) {
        dom.removeAttribute(prop);
      } else if (isSVG && namespaces[prop]) {
        // We optimize for isSVG being false
        // If we end up in this path we can read property again
        dom.setAttributeNS(namespaces[prop], prop, nextValue);
      } else {
        dom.setAttribute(prop, nextValue);
      }
      break;
  }
}
function mountProps(vNode, flags, props, dom, isSVG, animations) {
  var hasControlledValue = false;
  var isFormElement = (flags & 448 /* VNodeFlags.FormElement */) > 0;
  if (isFormElement) {
    hasControlledValue = isControlledFormElement(props);
    if (hasControlledValue) {
      addFormElementEventHandlers(flags, dom, props);
    }
  }
  for (var prop in props) {
    // do not add a hasOwnProperty check here, it affects performance
    patchProp(prop, null, props[prop], dom, isSVG, hasControlledValue, null, animations);
  }
  if (isFormElement) {
    processElement(flags, vNode, dom, props, true, hasControlledValue);
  }
}

function renderNewInput(instance, props, context) {
  var nextInput = normalizeRoot(instance.render(props, instance.state, context));
  var childContext = context;
  if (isFunction(instance.getChildContext)) {
    childContext = combineFrom(context, instance.getChildContext());
  }
  instance.$CX = childContext;
  return nextInput;
}
function createClassComponentInstance(vNode, Component, props, context, isSVG, lifecycle) {
  var instance = new Component(props, context);
  var usesNewAPI = instance.$N = Boolean(Component.getDerivedStateFromProps || instance.getSnapshotBeforeUpdate);
  instance.$SVG = isSVG;
  instance.$L = lifecycle;
  vNode.children = instance;
  instance.$BS = false;
  instance.context = context;
  if (instance.props === EMPTY_OBJ) {
    instance.props = props;
  }
  if (!usesNewAPI) {
    if (isFunction(instance.componentWillMount)) {
      instance.$BR = true;
      instance.componentWillMount();
      var pending = instance.$PS;
      if (!isNull(pending)) {
        var state = instance.state;
        if (isNull(state)) {
          instance.state = pending;
        } else {
          for (var key in pending) {
            state[key] = pending[key];
          }
        }
        instance.$PS = null;
      }
      instance.$BR = false;
    }
  } else {
    instance.state = createDerivedState(instance, props, instance.state);
  }
  instance.$LI = renderNewInput(instance, props, context);
  return instance;
}
function renderFunctionalComponent(vNode, context) {
  var props = vNode.props || EMPTY_OBJ;
  return vNode.flags & 32768 /* VNodeFlags.ForwardRef */ ? vNode.type.render(props, vNode.ref, context) : vNode.type(props, context);
}

function mount(vNode, parentDOM, context, isSVG, nextNode, lifecycle, animations) {
  var flags = vNode.flags |= 16384 /* VNodeFlags.InUse */;
  if (flags & 481 /* VNodeFlags.Element */) {
    mountElement(vNode, parentDOM, context, isSVG, nextNode, lifecycle, animations);
  } else if (flags & 4 /* VNodeFlags.ComponentClass */) {
    mountClassComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle, animations);
  } else if (flags & 8 /* VNodeFlags.ComponentFunction */) {
    mountFunctionalComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle, animations);
  } else if (flags & 16 /* VNodeFlags.Text */) {
    mountText(vNode, parentDOM, nextNode);
  } else if (flags & 8192 /* VNodeFlags.Fragment */) {
    mountFragment(vNode, context, parentDOM, isSVG, nextNode, lifecycle, animations);
  } else if (flags & 1024 /* VNodeFlags.Portal */) {
    mountPortal(vNode, context, parentDOM, nextNode, lifecycle, animations);
  } else ;
}
function mountPortal(vNode, context, parentDOM, nextNode, lifecycle, animations) {
  mount(vNode.children, vNode.ref, context, false, null, lifecycle, animations);
  var placeHolderVNode = createVoidVNode();
  mountText(placeHolderVNode, parentDOM, nextNode);
  vNode.dom = placeHolderVNode.dom;
}
function mountFragment(vNode, context, parentDOM, isSVG, nextNode, lifecycle, animations) {
  var children = vNode.children;
  var childFlags = vNode.childFlags;
  // When fragment is optimized for multiple children, check if there is no children and change flag to invalid
  // This is the only normalization always done, to keep optimization flags API same for fragments and regular elements
  if (childFlags & 12 /* ChildFlags.MultipleChildren */ && children.length === 0) {
    childFlags = vNode.childFlags = 2 /* ChildFlags.HasVNodeChildren */;
    children = vNode.children = createVoidVNode();
  }
  if (childFlags === 2 /* ChildFlags.HasVNodeChildren */) {
    mount(children, parentDOM, context, isSVG, nextNode, lifecycle, animations);
  } else {
    mountArrayChildren(children, parentDOM, context, isSVG, nextNode, lifecycle, animations);
  }
}
function mountText(vNode, parentDOM, nextNode) {
  var dom = vNode.dom = document.createTextNode(vNode.children);
  if (!isNull(parentDOM)) {
    insertOrAppend(parentDOM, dom, nextNode);
  }
}
function mountElement(vNode, parentDOM, context, isSVG, nextNode, lifecycle, animations) {
  var flags = vNode.flags;
  var props = vNode.props;
  var className = vNode.className;
  var childFlags = vNode.childFlags;
  var dom = vNode.dom = documentCreateElement(vNode.type, isSVG = isSVG || (flags & 32 /* VNodeFlags.SvgElement */) > 0);
  var children = vNode.children;
  if (!isNullOrUndef(className) && className !== '') {
    if (isSVG) {
      dom.setAttribute('class', className);
    } else {
      dom.className = className;
    }
  }
  if (childFlags === 16 /* ChildFlags.HasTextChildren */) {
    setTextContent(dom, children);
  } else if (childFlags !== 1 /* ChildFlags.HasInvalidChildren */) {
    var childrenIsSVG = isSVG && vNode.type !== 'foreignObject';
    if (childFlags === 2 /* ChildFlags.HasVNodeChildren */) {
      if (children.flags & 16384 /* VNodeFlags.InUse */) {
        vNode.children = children = directClone(children);
      }
      mount(children, dom, context, childrenIsSVG, null, lifecycle, animations);
    } else if (childFlags === 8 /* ChildFlags.HasKeyedChildren */ || childFlags === 4 /* ChildFlags.HasNonKeyedChildren */) {
      mountArrayChildren(children, dom, context, childrenIsSVG, null, lifecycle, animations);
    }
  }
  if (!isNull(parentDOM)) {
    insertOrAppend(parentDOM, dom, nextNode);
  }
  if (!isNull(props)) {
    mountProps(vNode, flags, props, dom, isSVG, animations);
  }
  mountRef(vNode.ref, dom, lifecycle);
}
function mountArrayChildren(children, dom, context, isSVG, nextNode, lifecycle, animations) {
  for (var i = 0; i < children.length; ++i) {
    var child = children[i];
    if (child.flags & 16384 /* VNodeFlags.InUse */) {
      children[i] = child = directClone(child);
    }
    mount(child, dom, context, isSVG, nextNode, lifecycle, animations);
  }
}
function mountClassComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle, animations) {
  var instance = createClassComponentInstance(vNode, vNode.type, vNode.props || EMPTY_OBJ, context, isSVG, lifecycle);
  // If we have a componentDidAppear on this component, we shouldn't allow children to animate so we're passing an dummy animations queue
  var childAnimations = animations;
  if (isFunction(instance.componentDidAppear)) {
    childAnimations = new AnimationQueues();
  }
  mount(instance.$LI, parentDOM, instance.$CX, isSVG, nextNode, lifecycle, childAnimations);
  mountClassComponentCallbacks(vNode.ref, instance, lifecycle, animations);
}
function mountFunctionalComponent(vNode, parentDOM, context, isSVG, nextNode, lifecycle, animations) {
  var ref = vNode.ref;
  // If we have a componentDidAppear on this component, we shouldn't allow children to animate so we're passing an dummy animations queue
  var childAnimations = animations;
  if (!isNullOrUndef(ref) && isFunction(ref.onComponentDidAppear)) {
    childAnimations = new AnimationQueues();
  }
  mount(vNode.children = normalizeRoot(renderFunctionalComponent(vNode, context)), parentDOM, context, isSVG, nextNode, lifecycle, childAnimations);
  mountFunctionalComponentCallbacks(vNode, lifecycle, animations);
}
function createClassMountCallback(instance) {
  return function () {
    instance.componentDidMount();
  };
}
function addAppearAnimationHook(animations, instanceOrRef, dom, flags, props) {
  animations.componentDidAppear.push(function () {
    if (flags & 4 /* VNodeFlags.ComponentClass */) {
      instanceOrRef.componentDidAppear(dom);
    } else if (flags & 8 /* VNodeFlags.ComponentFunction */) {
      instanceOrRef.onComponentDidAppear(dom, props);
    }
  });
}
function mountClassComponentCallbacks(ref, instance, lifecycle, animations) {
  mountRef(ref, instance, lifecycle);
  if (isFunction(instance.componentDidMount)) {
    lifecycle.push(createClassMountCallback(instance));
  }
  if (isFunction(instance.componentDidAppear)) {
    addAppearAnimationHook(animations, instance, instance.$LI.dom, 4 /* VNodeFlags.ComponentClass */, undefined);
  }
}
function createOnMountCallback(ref, vNode) {
  return function () {
    ref.onComponentDidMount(findDOMFromVNode(vNode, true), vNode.props || EMPTY_OBJ);
  };
}
function mountFunctionalComponentCallbacks(vNode, lifecycle, animations) {
  var ref = vNode.ref;
  if (!isNullOrUndef(ref)) {
    safeCall1(ref.onComponentWillMount, vNode.props || EMPTY_OBJ);
    if (isFunction(ref.onComponentDidMount)) {
      lifecycle.push(createOnMountCallback(ref, vNode));
    }
    if (isFunction(ref.onComponentDidAppear)) {
      addAppearAnimationHook(animations, ref, findDOMFromVNode(vNode, true), 8 /* VNodeFlags.ComponentFunction */, vNode.props);
    }
  }
}

function replaceWithNewNode(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle, animations) {
  unmount(lastVNode, animations);
  if ((nextVNode.flags & lastVNode.flags & 1521 /* VNodeFlags.DOMRef */) !== 0) {
    mount(nextVNode, null, context, isSVG, null, lifecycle, animations);
    // Single DOM operation, when we have dom references available
    replaceChild(parentDOM, nextVNode.dom, lastVNode.dom);
  } else {
    mount(nextVNode, parentDOM, context, isSVG, findDOMFromVNode(lastVNode, true), lifecycle, animations);
    removeVNodeDOM(lastVNode, parentDOM, animations);
  }
}
function patch(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle, animations) {
  var nextFlags = nextVNode.flags |= 16384 /* VNodeFlags.InUse */;
  if (lastVNode.flags !== nextFlags || lastVNode.type !== nextVNode.type || lastVNode.key !== nextVNode.key || nextFlags & 2048 /* VNodeFlags.ReCreate */) {
    if (lastVNode.flags & 16384 /* VNodeFlags.InUse */) {
      replaceWithNewNode(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle, animations);
    } else {
      // Last vNode is not in use, it has crashed at application level. Just mount nextVNode and ignore last one
      mount(nextVNode, parentDOM, context, isSVG, nextNode, lifecycle, animations);
    }
  } else if (nextFlags & 481 /* VNodeFlags.Element */) {
    patchElement(lastVNode, nextVNode, context, isSVG, nextFlags, lifecycle, animations);
  } else if (nextFlags & 4 /* VNodeFlags.ComponentClass */) {
    patchClassComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle, animations);
  } else if (nextFlags & 8 /* VNodeFlags.ComponentFunction */) {
    patchFunctionalComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle, animations);
  } else if (nextFlags & 16 /* VNodeFlags.Text */) {
    patchText(lastVNode, nextVNode);
  } else if (nextFlags & 8192 /* VNodeFlags.Fragment */) {
    patchFragment(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle, animations);
  } else {
    patchPortal(lastVNode, nextVNode, context, lifecycle, animations);
  }
}
function patchSingleTextChild(lastChildren, nextChildren, parentDOM) {
  if (lastChildren !== nextChildren) {
    if (lastChildren !== '') {
      parentDOM.firstChild.nodeValue = nextChildren;
    } else {
      setTextContent(parentDOM, nextChildren);
    }
  }
}
function patchContentEditableChildren(dom, nextChildren) {
  if (dom.textContent !== nextChildren) {
    dom.textContent = nextChildren;
  }
}
function patchFragment(lastVNode, nextVNode, parentDOM, context, isSVG, lifecycle, animations) {
  var lastChildren = lastVNode.children;
  var nextChildren = nextVNode.children;
  var lastChildFlags = lastVNode.childFlags;
  var nextChildFlags = nextVNode.childFlags;
  var nextNode = null;
  // When fragment is optimized for multiple children, check if there is no children and change flag to invalid
  // This is the only normalization always done, to keep optimization flags API same for fragments and regular elements
  if (nextChildFlags & 12 /* ChildFlags.MultipleChildren */ && nextChildren.length === 0) {
    nextChildFlags = nextVNode.childFlags = 2 /* ChildFlags.HasVNodeChildren */;
    nextChildren = nextVNode.children = createVoidVNode();
  }
  var nextIsSingle = (nextChildFlags & 2 /* ChildFlags.HasVNodeChildren */) !== 0;
  if (lastChildFlags & 12 /* ChildFlags.MultipleChildren */) {
    var lastLen = lastChildren.length;
    // We need to know Fragment's edge node when
    if (
    // It uses keyed algorithm
    lastChildFlags & 8 /* ChildFlags.HasKeyedChildren */ && nextChildFlags & 8 /* ChildFlags.HasKeyedChildren */ ||
    // It transforms from many to single
    nextIsSingle ||
    // It will append more nodes
    !nextIsSingle && nextChildren.length > lastLen) {
      // When fragment has multiple children there is always at least one vNode
      nextNode = findDOMFromVNode(lastChildren[lastLen - 1], false).nextSibling;
    }
  }
  patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, lastVNode, lifecycle, animations);
}
function patchPortal(lastVNode, nextVNode, context, lifecycle, animations) {
  var lastContainer = lastVNode.ref;
  var nextContainer = nextVNode.ref;
  var nextChildren = nextVNode.children;
  patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, lastContainer, context, false, null, lastVNode, lifecycle, animations);
  nextVNode.dom = lastVNode.dom;
  if (lastContainer !== nextContainer && !isInvalid(nextChildren)) {
    var node = nextChildren.dom;
    removeChild(lastContainer, node);
    appendChild(nextContainer, node);
  }
}
function patchElement(lastVNode, nextVNode, context, isSVG, nextFlags, lifecycle, animations) {
  var dom = nextVNode.dom = lastVNode.dom;
  var lastProps = lastVNode.props;
  var nextProps = nextVNode.props;
  var isFormElement = false;
  var hasControlledValue = false;
  var nextPropsOrEmpty;
  isSVG = isSVG || (nextFlags & 32 /* VNodeFlags.SvgElement */) > 0;
  // inlined patchProps  -- starts --
  if (lastProps !== nextProps) {
    var lastPropsOrEmpty = lastProps || EMPTY_OBJ;
    nextPropsOrEmpty = nextProps || EMPTY_OBJ;
    if (nextPropsOrEmpty !== EMPTY_OBJ) {
      isFormElement = (nextFlags & 448 /* VNodeFlags.FormElement */) > 0;
      if (isFormElement) {
        hasControlledValue = isControlledFormElement(nextPropsOrEmpty);
      }
      for (var prop in nextPropsOrEmpty) {
        var lastValue = lastPropsOrEmpty[prop];
        var nextValue = nextPropsOrEmpty[prop];
        if (lastValue !== nextValue) {
          patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue, lastVNode, animations);
        }
      }
    }
    if (lastPropsOrEmpty !== EMPTY_OBJ) {
      for (var _prop in lastPropsOrEmpty) {
        if (isNullOrUndef(nextPropsOrEmpty[_prop]) && !isNullOrUndef(lastPropsOrEmpty[_prop])) {
          patchProp(_prop, lastPropsOrEmpty[_prop], null, dom, isSVG, hasControlledValue, lastVNode, animations);
        }
      }
    }
  }
  var nextChildren = nextVNode.children;
  var nextClassName = nextVNode.className;
  // inlined patchProps  -- ends --
  if (lastVNode.className !== nextClassName) {
    if (isNullOrUndef(nextClassName)) {
      dom.removeAttribute('class');
    } else if (isSVG) {
      dom.setAttribute('class', nextClassName);
    } else {
      dom.className = nextClassName;
    }
  }
  if (nextFlags & 4096 /* VNodeFlags.ContentEditable */) {
    patchContentEditableChildren(dom, nextChildren);
  } else {
    patchChildren(lastVNode.childFlags, nextVNode.childFlags, lastVNode.children, nextChildren, dom, context, isSVG && nextVNode.type !== 'foreignObject', null, lastVNode, lifecycle, animations);
  }
  if (isFormElement) {
    processElement(nextFlags, nextVNode, dom, nextPropsOrEmpty, false, hasControlledValue);
  }
  var nextRef = nextVNode.ref;
  var lastRef = lastVNode.ref;
  if (lastRef !== nextRef) {
    unmountRef(lastRef);
    mountRef(nextRef, dom, lifecycle);
  }
}
function replaceOneVNodeWithMultipleVNodes(lastChildren, nextChildren, parentDOM, context, isSVG, lifecycle, animations) {
  unmount(lastChildren, animations);
  mountArrayChildren(nextChildren, parentDOM, context, isSVG, findDOMFromVNode(lastChildren, true), lifecycle, animations);
  removeVNodeDOM(lastChildren, parentDOM, animations);
}
function patchChildren(lastChildFlags, nextChildFlags, lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, parentVNode, lifecycle, animations) {
  switch (lastChildFlags) {
    case 2 /* ChildFlags.HasVNodeChildren */:
      switch (nextChildFlags) {
        case 2 /* ChildFlags.HasVNodeChildren */:
          patch(lastChildren, nextChildren, parentDOM, context, isSVG, nextNode, lifecycle, animations);
          break;
        case 1 /* ChildFlags.HasInvalidChildren */:
          remove(lastChildren, parentDOM, animations);
          break;
        case 16 /* ChildFlags.HasTextChildren */:
          unmount(lastChildren, animations);
          setTextContent(parentDOM, nextChildren);
          break;
        default:
          replaceOneVNodeWithMultipleVNodes(lastChildren, nextChildren, parentDOM, context, isSVG, lifecycle, animations);
          break;
      }
      break;
    case 1 /* ChildFlags.HasInvalidChildren */:
      switch (nextChildFlags) {
        case 2 /* ChildFlags.HasVNodeChildren */:
          mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle, animations);
          break;
        case 1 /* ChildFlags.HasInvalidChildren */:
          break;
        case 16 /* ChildFlags.HasTextChildren */:
          setTextContent(parentDOM, nextChildren);
          break;
        default:
          mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle, animations);
          break;
      }
      break;
    case 16 /* ChildFlags.HasTextChildren */:
      switch (nextChildFlags) {
        case 16 /* ChildFlags.HasTextChildren */:
          patchSingleTextChild(lastChildren, nextChildren, parentDOM);
          break;
        case 2 /* ChildFlags.HasVNodeChildren */:
          clearDOM(parentDOM, lastChildren, animations);
          mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle, animations);
          break;
        case 1 /* ChildFlags.HasInvalidChildren */:
          clearDOM(parentDOM, lastChildren, animations);
          break;
        default:
          clearDOM(parentDOM, lastChildren, animations);
          mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle, animations);
          break;
      }
      break;
    default:
      switch (nextChildFlags) {
        case 16 /* ChildFlags.HasTextChildren */:
          unmountAllChildren(lastChildren, animations);
          setTextContent(parentDOM, nextChildren);
          break;
        case 2 /* ChildFlags.HasVNodeChildren */:
          removeAllChildren(parentDOM, parentVNode, lastChildren, animations);
          mount(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle, animations);
          break;
        case 1 /* ChildFlags.HasInvalidChildren */:
          removeAllChildren(parentDOM, parentVNode, lastChildren, animations);
          break;
        default:
          var lastLength = lastChildren.length | 0;
          var nextLength = nextChildren.length | 0;
          // Fast path's for both algorithms
          if (lastLength === 0) {
            if (nextLength > 0) {
              mountArrayChildren(nextChildren, parentDOM, context, isSVG, nextNode, lifecycle, animations);
            }
          } else if (nextLength === 0) {
            removeAllChildren(parentDOM, parentVNode, lastChildren, animations);
          } else if (nextChildFlags === 8 /* ChildFlags.HasKeyedChildren */ && lastChildFlags === 8 /* ChildFlags.HasKeyedChildren */) {
            patchKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength, nextNode, parentVNode, lifecycle, animations);
          } else {
            patchNonKeyedChildren(lastChildren, nextChildren, parentDOM, context, isSVG, lastLength, nextLength, nextNode, lifecycle, animations);
          }
          break;
      }
      break;
  }
}
function createDidUpdate(instance, lastProps, lastState, snapshot, lifecycle) {
  lifecycle.push(function () {
    instance.componentDidUpdate(lastProps, lastState, snapshot);
  });
}
function updateClassComponent(instance, nextState, nextProps, parentDOM, context, isSVG, force, nextNode, lifecycle, animations) {
  var lastState = instance.state;
  var lastProps = instance.props;
  var usesNewAPI = Boolean(instance.$N);
  var hasSCU = isFunction(instance.shouldComponentUpdate);
  if (usesNewAPI) {
    nextState = createDerivedState(instance, nextProps, nextState !== lastState ? combineFrom(lastState, nextState) : nextState);
  }
  if (force || !hasSCU || hasSCU && instance.shouldComponentUpdate(nextProps, nextState, context)) {
    if (!usesNewAPI && isFunction(instance.componentWillUpdate)) {
      instance.componentWillUpdate(nextProps, nextState, context);
    }
    instance.props = nextProps;
    instance.state = nextState;
    instance.context = context;
    var snapshot = null;
    var nextInput = renderNewInput(instance, nextProps, context);
    if (usesNewAPI && isFunction(instance.getSnapshotBeforeUpdate)) {
      snapshot = instance.getSnapshotBeforeUpdate(lastProps, lastState);
    }
    patch(instance.$LI, nextInput, parentDOM, instance.$CX, isSVG, nextNode, lifecycle, animations);
    // Don't update Last input, until patch has been successfully executed
    instance.$LI = nextInput;
    if (isFunction(instance.componentDidUpdate)) {
      createDidUpdate(instance, lastProps, lastState, snapshot, lifecycle);
    }
  } else {
    instance.props = nextProps;
    instance.state = nextState;
    instance.context = context;
  }
}
function patchClassComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle, animations) {
  var instance = nextVNode.children = lastVNode.children;
  // If Component has crashed, ignore it to stay functional
  if (isNull(instance)) {
    return;
  }
  instance.$L = lifecycle;
  var nextProps = nextVNode.props || EMPTY_OBJ;
  var nextRef = nextVNode.ref;
  var lastRef = lastVNode.ref;
  var nextState = instance.state;
  if (!instance.$N) {
    if (isFunction(instance.componentWillReceiveProps)) {
      instance.$BR = true;
      instance.componentWillReceiveProps(nextProps, context);
      // If instance component was removed during its own update do nothing.
      if (instance.$UN) {
        return;
      }
      instance.$BR = false;
    }
    if (!isNull(instance.$PS)) {
      nextState = combineFrom(nextState, instance.$PS);
      instance.$PS = null;
    }
  }
  updateClassComponent(instance, nextState, nextProps, parentDOM, context, isSVG, false, nextNode, lifecycle, animations);
  if (lastRef !== nextRef) {
    unmountRef(lastRef);
    mountRef(nextRef, instance, lifecycle);
  }
}
function patchFunctionalComponent(lastVNode, nextVNode, parentDOM, context, isSVG, nextNode, lifecycle, animations) {
  var shouldUpdate = true;
  var nextProps = nextVNode.props || EMPTY_OBJ;
  var nextRef = nextVNode.ref;
  var lastProps = lastVNode.props;
  var nextHooksDefined = !isNullOrUndef(nextRef);
  var lastInput = lastVNode.children;
  if (nextHooksDefined && isFunction(nextRef.onComponentShouldUpdate)) {
    shouldUpdate = nextRef.onComponentShouldUpdate(lastProps, nextProps);
  }
  if (shouldUpdate !== false) {
    if (nextHooksDefined && isFunction(nextRef.onComponentWillUpdate)) {
      nextRef.onComponentWillUpdate(lastProps, nextProps);
    }
    var nextInput = normalizeRoot(renderFunctionalComponent(nextVNode, context));
    patch(lastInput, nextInput, parentDOM, context, isSVG, nextNode, lifecycle, animations);
    nextVNode.children = nextInput;
    if (nextHooksDefined && isFunction(nextRef.onComponentDidUpdate)) {
      nextRef.onComponentDidUpdate(lastProps, nextProps);
    }
  } else {
    nextVNode.children = lastInput;
  }
}
function patchText(lastVNode, nextVNode) {
  var nextText = nextVNode.children;
  var dom = nextVNode.dom = lastVNode.dom;
  if (nextText !== lastVNode.children) {
    dom.nodeValue = nextText;
  }
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, context, isSVG, lastChildrenLength, nextChildrenLength, nextNode, lifecycle, animations) {
  var commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
  var i = 0;
  var nextChild;
  var lastChild;
  for (; i < commonLength; ++i) {
    nextChild = nextChildren[i];
    lastChild = lastChildren[i];
    if (nextChild.flags & 16384 /* VNodeFlags.InUse */) {
      nextChild = nextChildren[i] = directClone(nextChild);
    }
    patch(lastChild, nextChild, dom, context, isSVG, nextNode, lifecycle, animations);
    lastChildren[i] = nextChild;
  }
  if (lastChildrenLength < nextChildrenLength) {
    for (i = commonLength; i < nextChildrenLength; ++i) {
      nextChild = nextChildren[i];
      if (nextChild.flags & 16384 /* VNodeFlags.InUse */) {
        nextChild = nextChildren[i] = directClone(nextChild);
      }
      mount(nextChild, dom, context, isSVG, nextNode, lifecycle, animations);
    }
  } else if (lastChildrenLength > nextChildrenLength) {
    for (i = commonLength; i < lastChildrenLength; ++i) {
      remove(lastChildren[i], dom, animations);
    }
  }
}
function patchKeyedChildren(a, b, dom, context, isSVG, aLength, bLength, outerEdge, parentVNode, lifecycle, animations) {
  var aEnd = aLength - 1;
  var bEnd = bLength - 1;
  var j = 0;
  var aNode = a[j];
  var bNode = b[j];
  var nextPos;
  var nextNode;
  // Step 1
  // tslint:disable-next-line
  outer: {
    // Sync nodes with the same key at the beginning.
    while (aNode.key === bNode.key) {
      if (bNode.flags & 16384 /* VNodeFlags.InUse */) {
        b[j] = bNode = directClone(bNode);
      }
      patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle, animations);
      a[j] = bNode;
      ++j;
      if (j > aEnd || j > bEnd) {
        break outer;
      }
      aNode = a[j];
      bNode = b[j];
    }
    aNode = a[aEnd];
    bNode = b[bEnd];
    // Sync nodes with the same key at the end.
    while (aNode.key === bNode.key) {
      if (bNode.flags & 16384 /* VNodeFlags.InUse */) {
        b[bEnd] = bNode = directClone(bNode);
      }
      patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle, animations);
      a[aEnd] = bNode;
      aEnd--;
      bEnd--;
      if (j > aEnd || j > bEnd) {
        break outer;
      }
      aNode = a[aEnd];
      bNode = b[bEnd];
    }
  }
  if (j > aEnd) {
    if (j <= bEnd) {
      nextPos = bEnd + 1;
      nextNode = nextPos < bLength ? findDOMFromVNode(b[nextPos], true) : outerEdge;
      while (j <= bEnd) {
        bNode = b[j];
        if (bNode.flags & 16384 /* VNodeFlags.InUse */) {
          b[j] = bNode = directClone(bNode);
        }
        ++j;
        mount(bNode, dom, context, isSVG, nextNode, lifecycle, animations);
      }
    }
  } else if (j > bEnd) {
    while (j <= aEnd) {
      remove(a[j++], dom, animations);
    }
  } else {
    patchKeyedChildrenComplex(a, b, context, aLength, bLength, aEnd, bEnd, j, dom, isSVG, outerEdge, parentVNode, lifecycle, animations);
  }
}
function patchKeyedChildrenComplex(a, b, context, aLength, bLength, aEnd, bEnd, j, dom, isSVG, outerEdge, parentVNode, lifecycle, animations) {
  var aNode;
  var bNode;
  var nextPos = 0;
  var i = 0;
  var aStart = j;
  var bStart = j;
  var aLeft = aEnd - j + 1;
  var bLeft = bEnd - j + 1;
  var sources = new Int32Array(bLeft + 1);
  // Keep track if its possible to remove whole DOM using textContent = '';
  var canRemoveWholeContent = aLeft === aLength;
  var moved = false;
  var pos = 0;
  var patched = 0;
  // When sizes are small, just loop them through
  if (bLength < 4 || (aLeft | bLeft) < 32) {
    for (i = aStart; i <= aEnd; ++i) {
      aNode = a[i];
      if (patched < bLeft) {
        for (j = bStart; j <= bEnd; j++) {
          bNode = b[j];
          if (aNode.key === bNode.key) {
            sources[j - bStart] = i + 1;
            if (canRemoveWholeContent) {
              canRemoveWholeContent = false;
              while (aStart < i) {
                remove(a[aStart++], dom, animations);
              }
            }
            if (pos > j) {
              moved = true;
            } else {
              pos = j;
            }
            if (bNode.flags & 16384 /* VNodeFlags.InUse */) {
              b[j] = bNode = directClone(bNode);
            }
            patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle, animations);
            ++patched;
            break;
          }
        }
        if (!canRemoveWholeContent && j > bEnd) {
          remove(aNode, dom, animations);
        }
      } else if (!canRemoveWholeContent) {
        remove(aNode, dom, animations);
      }
    }
  } else {
    var keyIndex = {};
    // Map keys by their index
    for (i = bStart; i <= bEnd; ++i) {
      keyIndex[b[i].key] = i;
    }
    // Try to patch same keys
    for (i = aStart; i <= aEnd; ++i) {
      aNode = a[i];
      if (patched < bLeft) {
        j = keyIndex[aNode.key];
        if (j !== void 0) {
          if (canRemoveWholeContent) {
            canRemoveWholeContent = false;
            while (i > aStart) {
              remove(a[aStart++], dom, animations);
            }
          }
          sources[j - bStart] = i + 1;
          if (pos > j) {
            moved = true;
          } else {
            pos = j;
          }
          bNode = b[j];
          if (bNode.flags & 16384 /* VNodeFlags.InUse */) {
            b[j] = bNode = directClone(bNode);
          }
          patch(aNode, bNode, dom, context, isSVG, outerEdge, lifecycle, animations);
          ++patched;
        } else if (!canRemoveWholeContent) {
          remove(aNode, dom, animations);
        }
      } else if (!canRemoveWholeContent) {
        remove(aNode, dom, animations);
      }
    }
  }
  // fast-path: if nothing patched remove all old and add all new
  if (canRemoveWholeContent) {
    removeAllChildren(dom, parentVNode, a, animations);
    mountArrayChildren(b, dom, context, isSVG, outerEdge, lifecycle, animations);
  } else if (moved) {
    var seq = lis_algorithm(sources);
    j = seq.length - 1;
    for (i = bLeft - 1; i >= 0; i--) {
      if (sources[i] === 0) {
        pos = i + bStart;
        bNode = b[pos];
        if (bNode.flags & 16384 /* VNodeFlags.InUse */) {
          b[pos] = bNode = directClone(bNode);
        }
        nextPos = pos + 1;
        mount(bNode, dom, context, isSVG, nextPos < bLength ? findDOMFromVNode(b[nextPos], true) : outerEdge, lifecycle, animations);
      } else if (j < 0 || i !== seq[j]) {
        pos = i + bStart;
        bNode = b[pos];
        nextPos = pos + 1;
        // --- the DOM-node is moved by a call to insertAppend
        moveVNodeDOM(parentVNode, bNode, dom, nextPos < bLength ? findDOMFromVNode(b[nextPos], true) : outerEdge, animations);
      } else {
        j--;
      }
    }
    // Invoke move animations when all moves have been calculated
    if (animations.componentWillMove.length > 0) {
      callAllMoveAnimationHooks(animations.componentWillMove);
    }
  } else if (patched !== bLeft) {
    // when patched count doesn't match b length we need to insert those new ones
    // loop backwards so we can use insertBefore
    for (i = bLeft - 1; i >= 0; i--) {
      if (sources[i] === 0) {
        pos = i + bStart;
        bNode = b[pos];
        if (bNode.flags & 16384 /* VNodeFlags.InUse */) {
          b[pos] = bNode = directClone(bNode);
        }
        nextPos = pos + 1;
        mount(bNode, dom, context, isSVG, nextPos < bLength ? findDOMFromVNode(b[nextPos], true) : outerEdge, lifecycle, animations);
      }
    }
  }
}
var result;
var p;
var maxLen = 0;
// https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
  var arrI = 0;
  var i = 0;
  var j = 0;
  var k = 0;
  var u = 0;
  var v = 0;
  var c = 0;
  var len = arr.length;
  if (len > maxLen) {
    maxLen = len;
    result = new Int32Array(len);
    p = new Int32Array(len);
  }
  for (; i < len; ++i) {
    arrI = arr[i];
    if (arrI !== 0) {
      j = result[k];
      if (arr[j] < arrI) {
        p[i] = j;
        result[++k] = i;
        continue;
      }
      u = 0;
      v = k;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = k + 1;
  var seq = new Int32Array(u);
  v = result[u - 1];
  while (u-- > 0) {
    seq[u] = v;
    v = p[v];
    result[u] = 0;
  }
  return seq;
}

var hasDocumentAvailable = typeof document !== 'undefined';
if (hasDocumentAvailable) {
  /*
   * Defining $EV and $V properties on Node.prototype
   * fixes v8 "wrong map" de-optimization
   */
  if (window.Node) {
    Node.prototype.$EV = null;
    Node.prototype.$V = null;
  }
}
function __render(input, parentDOM, callback, context) {
  var lifecycle = [];
  var animations = new AnimationQueues();
  var rootInput = parentDOM.$V;
  renderCheck.v = true;
  if (isNullOrUndef(rootInput)) {
    if (!isNullOrUndef(input)) {
      if (input.flags & 16384 /* VNodeFlags.InUse */) {
        input = directClone(input);
      }
      mount(input, parentDOM, context, false, null, lifecycle, animations);
      parentDOM.$V = input;
      rootInput = input;
    }
  } else {
    if (isNullOrUndef(input)) {
      remove(rootInput, parentDOM, animations);
      parentDOM.$V = null;
    } else {
      if (input.flags & 16384 /* VNodeFlags.InUse */) {
        input = directClone(input);
      }
      patch(rootInput, input, parentDOM, context, false, null, lifecycle, animations);
      rootInput = parentDOM.$V = input;
    }
  }
  callAll(lifecycle);
  callAllAnimationHooks(animations.componentDidAppear);
  renderCheck.v = false;
  if (isFunction(callback)) {
    callback();
  }
  if (isFunction(options.renderComplete)) {
    options.renderComplete(rootInput, parentDOM);
  }
}
function render(input, parentDOM, callback, context) {
  if (callback === void 0) {
    callback = null;
  }
  if (context === void 0) {
    context = EMPTY_OBJ;
  }
  __render(input, parentDOM, callback, context);
}
function createRenderer(parentDOM) {
  return function renderer(lastInput, nextInput, callback, context) {
    if (!parentDOM) {
      parentDOM = lastInput;
    }
    render(nextInput, parentDOM, callback, context);
  };
}

var COMPONENTS_QUEUE = [];
var nextTick = typeof Promise !== 'undefined' ? Promise.resolve().then.bind(Promise.resolve()) : function (a) {
  window.setTimeout(a, 0);
};
var microTaskPending = false;
function queueStateChanges(component, newState, callback, force) {
  var pending = component.$PS;
  if (isFunction(newState)) {
    newState = newState(pending ? combineFrom(component.state, pending) : component.state, component.props, component.context);
  }
  if (isNullOrUndef(pending)) {
    component.$PS = newState;
  } else {
    for (var stateKey in newState) {
      pending[stateKey] = newState[stateKey];
    }
  }
  if (!component.$BR) {
    if (!renderCheck.v) {
      if (COMPONENTS_QUEUE.length === 0) {
        applyState(component, force);
        if (isFunction(callback)) {
          callback.call(component);
        }
        return;
      }
    }
    if (COMPONENTS_QUEUE.indexOf(component) === -1) {
      COMPONENTS_QUEUE.push(component);
    }
    if (force) {
      component.$F = true;
    }
    if (!microTaskPending) {
      microTaskPending = true;
      nextTick(rerender);
    }
    if (isFunction(callback)) {
      var QU = component.$QU;
      if (!QU) {
        QU = component.$QU = [];
      }
      QU.push(callback);
    }
  } else if (isFunction(callback)) {
    component.$L.push(callback.bind(component));
  }
}
function callSetStateCallbacks(component) {
  var queue = component.$QU;
  for (var i = 0; i < queue.length; ++i) {
    queue[i].call(component);
  }
  component.$QU = null;
}
function rerender() {
  var component;
  microTaskPending = false;
  while (component = COMPONENTS_QUEUE.shift()) {
    if (!component.$UN) {
      var force = component.$F;
      component.$F = false;
      applyState(component, force);
      if (component.$QU) {
        callSetStateCallbacks(component);
      }
    }
  }
}
function applyState(component, force) {
  if (force || !component.$BR) {
    var pendingState = component.$PS;
    component.$PS = null;
    var lifecycle = [];
    var animations = new AnimationQueues();
    renderCheck.v = true;
    updateClassComponent(component, combineFrom(component.state, pendingState), component.props, findDOMFromVNode(component.$LI, true).parentNode, component.context, component.$SVG, force, null, lifecycle, animations);
    callAll(lifecycle);
    callAllAnimationHooks(animations.componentDidAppear);
    renderCheck.v = false;
  } else {
    component.state = component.$PS;
    component.$PS = null;
  }
}
var Component = /*#__PURE__*/function () {
  // Force update flag
  function Component(props, context) {
    // Public
    this.state = null;
    this.props = void 0;
    this.context = void 0;
    this.displayName = void 0;
    // Internal properties
    this.$BR = false;
    // BLOCK RENDER
    this.$BS = true;
    // BLOCK STATE
    this.$PS = null;
    // PENDING STATE (PARTIAL or FULL)
    this.$LI = null;
    // LAST INPUT
    this.$UN = false;
    // UNMOUNTED
    this.$CX = null;
    // CHILDCONTEXT
    this.$QU = null;
    // QUEUE
    this.$N = false;
    // Uses new lifecycle API Flag
    this.$SSR = void 0;
    // Server side rendering flag, true when rendering on server, non existent on client
    this.$L = null;
    // Current lifecycle of this component
    this.$SVG = false;
    // Flag to keep track if component is inside SVG tree
    this.$F = false;
    this.props = props || EMPTY_OBJ;
    this.context = context || EMPTY_OBJ; // context should not be mutable
  }
  var _proto = Component.prototype;
  _proto.forceUpdate = function forceUpdate(callback) {
    if (this.$UN) {
      return;
    }
    // Do not allow double render during force update
    queueStateChanges(this, {}, callback, true);
  };
  _proto.setState = function setState(newState, callback) {
    if (this.$UN) {
      return;
    }
    if (!this.$BS) {
      queueStateChanges(this, newState, callback, false);
    }
  };
  // @ts-expect-error TS6133
  _proto.render = function render(props, state, context) {
    return null;
  };
  return Component;
}();
Component.defaultProps = null;

var version = "8.2.2";




/***/ }),

/***/ "./node_modules/inferno/index.esm.js":
/*!*******************************************!*\
  !*** ./node_modules/inferno/index.esm.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationQueues: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.AnimationQueues),
/* harmony export */   Component: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.Component),
/* harmony export */   EMPTY_OBJ: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.EMPTY_OBJ),
/* harmony export */   Fragment: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.Fragment),
/* harmony export */   _CI: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__._CI),
/* harmony export */   _HI: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__._HI),
/* harmony export */   _M: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__._M),
/* harmony export */   _MCCC: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__._MCCC),
/* harmony export */   _ME: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__._ME),
/* harmony export */   _MFCC: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__._MFCC),
/* harmony export */   _MP: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__._MP),
/* harmony export */   _MR: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__._MR),
/* harmony export */   _RFC: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__._RFC),
/* harmony export */   __render: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.__render),
/* harmony export */   createComponentVNode: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.createComponentVNode),
/* harmony export */   createFragment: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.createFragment),
/* harmony export */   createPortal: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.createPortal),
/* harmony export */   createRef: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.createRef),
/* harmony export */   createRenderer: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.createRenderer),
/* harmony export */   createTextVNode: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.createTextVNode),
/* harmony export */   createVNode: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.createVNode),
/* harmony export */   directClone: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.directClone),
/* harmony export */   findDOMFromVNode: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.findDOMFromVNode),
/* harmony export */   forwardRef: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.forwardRef),
/* harmony export */   getFlagsForElementVnode: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.getFlagsForElementVnode),
/* harmony export */   linkEvent: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.linkEvent),
/* harmony export */   normalizeProps: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.normalizeProps),
/* harmony export */   options: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.options),
/* harmony export */   render: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   rerender: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.rerender),
/* harmony export */   version: () => (/* reexport safe */ _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__.version)
/* harmony export */ });
/* harmony import */ var _dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dist/index.esm.js */ "./node_modules/inferno/dist/index.esm.js");


if (true) {
  console.warn('You are running production build of Inferno in development mode. Use dev:module entry point.');
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/***/ ((module) => {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/path-to-regexp-es6/index.js":
/*!**************************************************!*\
  !*** ./node_modules/path-to-regexp-es6/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pathToRegExp = __webpack_require__(/*! path-to-regexp */ "./node_modules/path-to-regexp/index.js")

/**
 * Expose `pathToRegexp` as ES6 module
 */
module.exports = pathToRegExp;
module.exports.parse = pathToRegExp.parse
module.exports.compile = pathToRegExp.compile
module.exports.tokensToFunction = pathToRegExp.tokensToFunction
module.exports.tokensToRegExp = pathToRegExp.tokensToRegExp
module.exports["default"] = module.exports;


/***/ }),

/***/ "./node_modules/path-to-regexp/index.js":
/*!**********************************************!*\
  !*** ./node_modules/path-to-regexp/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isarray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ "./src/api/api_escrow.ts":
/*!*******************************!*\
  !*** ./src/api/api_escrow.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   submit_create_escrow: () => (/* binding */ submit_create_escrow),
/* harmony export */   sumbit_finish_escrow: () => (/* binding */ sumbit_finish_escrow)
/* harmony export */ });
/* harmony import */ var _models_once_execution__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/once_execution */ "./src/models/once_execution.ts");
/* harmony import */ var _api_quotations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api_quotations */ "./src/api/api_quotations.ts");


let CREATE_ESCROW_TX_GUARD = new _models_once_execution__WEBPACK_IMPORTED_MODULE_0__["default"]();
let FINISH_ESCROW_TX_GUARD = new _models_once_execution__WEBPACK_IMPORTED_MODULE_0__["default"]();
function submit_create_escrow(job_id, quotation_id, callback = (_) => { }) {
    let promise_tx = (0,_api_quotations__WEBPACK_IMPORTED_MODULE_1__.build_payload_create_escrow)(job_id, quotation_id);
    if (CREATE_ESCROW_TX_GUARD.run()) {
        promise_tx.then(async (result) => {
            console.log(result);
            xumm_run_tx(result.tx, (payload) => {
                console.log(payload);
                (0,_api_quotations__WEBPACK_IMPORTED_MODULE_1__.send_xumm_uuid)(quotation_id, payload.uuid)
                    .then(callback)
                    .catch((err) => console.error(err));
            });
        });
    }
    else {
        console.error("Inferno conflict, handlers was overwrite... try execute more than one time the escrow action.");
    }
}
function sumbit_finish_escrow(quotation_id, callback = (_) => { }) {
    let promise_tx = (0,_api_quotations__WEBPACK_IMPORTED_MODULE_1__.build_payload_finish_escrow)(quotation_id);
    if (FINISH_ESCROW_TX_GUARD.run()) {
        promise_tx.then((result) => {
            console.log(result);
            xumm_run_tx(result, (payload) => {
                console.log(payload);
                (0,_api_quotations__WEBPACK_IMPORTED_MODULE_1__.send_xumm_uuid_finished)(quotation_id, payload.uuid).then(callback);
            });
        });
    }
    else {
        console.error("Inferno conflict, handlers was overwrite... try execute more than one time the escrow action.");
    }
}
function xumm_run_tx(tx, callback = (_) => { }) {
    if ("xumm" in window) {
        let xumm = window["xumm"];
        xumm.payload.create({
            "txjson": tx,
            "options": {
                "expire": 5
            }
        }).then(callback);
    }
}


/***/ }),

/***/ "./src/api/api_jobs.ts":
/*!*****************************!*\
  !*** ./src/api/api_jobs.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get_job: () => (/* binding */ get_job),
/* harmony export */   get_list_jobs: () => (/* binding */ get_list_jobs),
/* harmony export */   register_new_job: () => (/* binding */ register_new_job)
/* harmony export */ });
/* harmony import */ var _api_with_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_with_auth */ "./src/api/api_with_auth.ts");

async function get_list_jobs() {
    let url = "/api/jobs";
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_get)(url);
    return data.result;
}
async function get_job(job_id) {
    let url = `/api/job/${job_id}`;
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_get)(url);
    return data.result;
}
async function register_new_job(job) {
    let url = "/api/job/create";
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_post)(url, job);
    return data.result;
}


/***/ }),

/***/ "./src/api/api_profile.ts":
/*!********************************!*\
  !*** ./src/api/api_profile.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   get_profile_priv: () => (/* binding */ get_profile_priv),
/* harmony export */   post_update_profile_priv: () => (/* binding */ post_update_profile_priv)
/* harmony export */ });
/* harmony import */ var _api_with_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_with_auth */ "./src/api/api_with_auth.ts");

async function get_profile_priv() {
    let url = "/api/user/profile/priv";
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_get)(url);
    return data.result;
}
async function post_update_profile_priv(req_body) {
    let url = `/api/user/profile/priv`;
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_post)(url, req_body);
    return data.result;
}


/***/ }),

/***/ "./src/api/api_quotations.ts":
/*!***********************************!*\
  !*** ./src/api/api_quotations.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   build_payload_create_escrow: () => (/* binding */ build_payload_create_escrow),
/* harmony export */   build_payload_direct_transfer: () => (/* binding */ build_payload_direct_transfer),
/* harmony export */   build_payload_finish_escrow: () => (/* binding */ build_payload_finish_escrow),
/* harmony export */   checks_escrow: () => (/* binding */ checks_escrow),
/* harmony export */   checks_escrow_finished: () => (/* binding */ checks_escrow_finished),
/* harmony export */   get_quotation: () => (/* binding */ get_quotation),
/* harmony export */   get_quotation_by_job: () => (/* binding */ get_quotation_by_job),
/* harmony export */   list_quotation_by_job: () => (/* binding */ list_quotation_by_job),
/* harmony export */   make_quotation_approved: () => (/* binding */ make_quotation_approved),
/* harmony export */   make_quotation_confirm: () => (/* binding */ make_quotation_confirm),
/* harmony export */   make_quotation_done: () => (/* binding */ make_quotation_done),
/* harmony export */   register_new_quotation: () => (/* binding */ register_new_quotation),
/* harmony export */   send_xumm_uuid: () => (/* binding */ send_xumm_uuid),
/* harmony export */   send_xumm_uuid_finished: () => (/* binding */ send_xumm_uuid_finished)
/* harmony export */ });
/* harmony import */ var _api_with_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_with_auth */ "./src/api/api_with_auth.ts");

async function get_quotation(quotation_id) {
    let url = "/api/quotation/" + quotation_id;
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_get)(url);
    return data.result;
}
async function get_quotation_by_job(job_id) {
    let url = "/api/quotation/get_by_job/" + job_id;
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_get)(url);
    return data.result;
}
async function list_quotation_by_job(job_id) {
    let url = "/api/quotations";
    let search_criteria = {
        "job_id": job_id
    };
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_post)(url, search_criteria);
    return data.result;
}
async function register_new_quotation(quotation) {
    let url = "/api/quotation/create";
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_post)(url, quotation);
    return data.result;
}
async function build_payload_direct_transfer(quotation_id, amount) {
    let url = `/api/quotation/direct_transfer`;
    let req_body = {
        "quotation_id": quotation_id,
        "amount": amount
    };
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_post)(url, req_body);
    return data.result;
}
async function build_payload_create_escrow(job_id, quotation_id) {
    let url = `/api/quotation/create_escrow`;
    let req_body = {
        "quotation_id": quotation_id,
        "job_id": job_id,
        "delta_days": "@todo"
    };
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_post)(url, req_body);
    return data.result;
}
async function build_payload_finish_escrow(quotation_id) {
    let url = `/api/quotation/finish_escrow`;
    let req_body = {
        "quotation_id": quotation_id
    };
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_post)(url, req_body);
    return data.result;
}
async function send_xumm_uuid(quotation_id, xumm_payload_uuid) {
    let url = `/api/quotation/create_escrow/save_xumm_payload`;
    let req_body = {
        "quotation_id": quotation_id,
        "xumm_payload_uuid": xumm_payload_uuid
    };
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_post)(url, req_body);
    return data.result;
}
async function send_xumm_uuid_finished(quotation_id, xumm_payload_uuid) {
    let url = `/api/quotation/finished_escrow/save_xumm_payload`;
    let req_body = {
        "quotation_id": quotation_id,
        "finished_xumm_payload_uuid": xumm_payload_uuid
    };
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_post)(url, req_body);
    return data.result;
}
async function checks_escrow(quotation_id) {
    let url = `/api/quotation/escrow/checks`;
    let req_body = {
        "quotation_id": quotation_id
    };
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_post)(url, req_body);
    return data.result;
}
async function checks_escrow_finished(quotation_id) {
    let url = `/api/quotation/escrow/checks_finished`;
    let req_body = {
        "quotation_id": quotation_id
    };
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_post)(url, req_body);
    return data.result;
}
async function make_quotation_approved(quotation_id) {
    let url = "/api/quotation/approved";
    let req_body = {
        "quotation_id": quotation_id
    };
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_post)(url, req_body);
    return data.result;
}
async function make_quotation_done(quotation_id) {
    let url = "/api/quotation/done";
    let req_body = {
        "quotation_id": quotation_id
    };
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_post)(url, req_body);
    return data.result;
}
async function make_quotation_confirm(quotation_id) {
    let url = "/api/quotation/confirm";
    let req_body = {
        "quotation_id": quotation_id
    };
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_0__.fetch_auth_post)(url, req_body);
    return data.result;
}


/***/ }),

/***/ "./src/api/api_transfer.ts":
/*!*********************************!*\
  !*** ./src/api/api_transfer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checks_direct_transfer: () => (/* binding */ checks_direct_transfer),
/* harmony export */   sumbit_direct_transfer: () => (/* binding */ sumbit_direct_transfer)
/* harmony export */ });
/* harmony import */ var _models_once_execution__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/once_execution */ "./src/models/once_execution.ts");
/* harmony import */ var _api_quotations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api_quotations */ "./src/api/api_quotations.ts");
/* harmony import */ var _api_with_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api_with_auth */ "./src/api/api_with_auth.ts");



let TRANSFER_TX_GUARD = new _models_once_execution__WEBPACK_IMPORTED_MODULE_0__["default"]();
function sumbit_direct_transfer(quotation_id, amount, callback = (_) => { }) {
    let promise_tx = (0,_api_quotations__WEBPACK_IMPORTED_MODULE_1__.build_payload_direct_transfer)(quotation_id, amount);
    if (TRANSFER_TX_GUARD.run()) {
        promise_tx.then((result) => {
            console.log(result);
            let payload_tx = result.payload;
            let direct_transfer_id = result.direct_transfer_id;
            transfer_xumm_run_tx(payload_tx, (payload) => {
                callback({
                    xumm_payload_uuid: payload.uuid,
                    direct_transfer_id: direct_transfer_id
                });
            });
        });
    }
    else {
        console.error("Inferno conflict, handlers was overwrite... try execute more than one time the escrow action.");
    }
}
async function checks_direct_transfer(xumm_payload_uuid, direct_transfer_id) {
    let url = `/api/quotation/direct_transfer/checks`;
    let req_body = {
        "xumm_payload_uuid": xumm_payload_uuid,
        "direct_transfer_id": direct_transfer_id
    };
    let data = await (0,_api_with_auth__WEBPACK_IMPORTED_MODULE_2__.fetch_auth_post)(url, req_body);
    return data.result;
}
function transfer_xumm_run_tx(tx, callback = (_) => { }) {
    if ("xumm" in window) {
        let xumm = window["xumm"];
        xumm.payload.create({
            "txjson": tx,
            "options": {
                "expire": 5
            }
        }).then(callback);
    }
}


/***/ }),

/***/ "./src/api/api_with_auth.ts":
/*!**********************************!*\
  !*** ./src/api/api_with_auth.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetch_auth_get: () => (/* binding */ fetch_auth_get),
/* harmony export */   fetch_auth_post: () => (/* binding */ fetch_auth_post),
/* harmony export */   if_login_inject_authorization_header: () => (/* binding */ if_login_inject_authorization_header),
/* harmony export */   is_login: () => (/* binding */ is_login),
/* harmony export */   session_is_owner: () => (/* binding */ session_is_owner)
/* harmony export */ });
const DEFAULT_HEADERS = { 'Accept': 'application/json', 'Content-Type': 'application/json' };
function is_login() {
    return 'jwt_xapp' in window && window['jwt_xapp'] != undefined;
}
function session_is_owner(user_id) {
    if (is_login()) {
        return 'jwt_xapp_user_id' in window && window['jwt_xapp_user_id'] == user_id;
    }
    else {
        return false;
    }
}
function if_login_inject_authorization_header(headers) {
    if (is_login() && 'jwt_xapp' in window) {
        let jwt_xapp = window['jwt_xapp'];
        headers['Authorization'] = 'Bearer ' + jwt_xapp;
    }
    return headers;
}
async function fetch_auth_post(url, body, headers = DEFAULT_HEADERS) {
    headers = if_login_inject_authorization_header(headers);
    let response = await fetch(url, {
        headers: headers,
        method: "POST",
        body: JSON.stringify(body)
    });
    return await response.json();
}
async function fetch_auth_get(url, headers = DEFAULT_HEADERS) {
    headers = if_login_inject_authorization_header(headers);
    let response = await fetch(url, {
        headers: headers,
        method: "GET"
    });
    return await response.json();
}


/***/ }),

/***/ "./src/components/utils/AuthRouting.ts":
/*!*********************************************!*\
  !*** ./src/components/utils/AuthRouting.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AuthRouting)
/* harmony export */ });
class AuthRouting {
    static is_login() {
        return "jwt_xapp" in window;
    }
    static get_user_id() {
        if ("jwt_xapp_user_id" in window) {
            return window.jwt_xapp_user_id;
        }
        else {
            return null;
        }
    }
    static is_owner(owner_id) {
        return AuthRouting.get_user_id() == owner_id;
    }
}


/***/ }),

/***/ "./src/components/utils/Categories.ts":
/*!********************************************!*\
  !*** ./src/components/utils/Categories.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JOB_CATEGORIES: () => (/* binding */ JOB_CATEGORIES),
/* harmony export */   categories_default: () => (/* binding */ categories_default)
/* harmony export */ });
const JOB_CATEGORIES = [
    "Coding",
    "Design",
    "Apps Development",
    "Website Design",
    "Prototype",
    "Marketing",
    "Research",
    "Analysis",
    "Branding",
    "Startup",
    "Contract",
    "Speed",
    "Short Term Goals",
    "Schedule",
    "Team"
];
function categories_default() {
    let categories = {};
    for (let index = 0; index < JOB_CATEGORIES.length; index++) {
        const category = JOB_CATEGORIES[index];
        categories[category] = false;
    }
    return categories;
}


/***/ }),

/***/ "./src/models/inmmutable_model.ts":
/*!****************************************!*\
  !*** ./src/models/inmmutable_model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InmmutableModel: () => (/* binding */ InmmutableModel)
/* harmony export */ });
class InmmutableModel {
    data;
    constructor(data) {
        this.data = data;
    }
    clone_data() {
        return JSON.parse(JSON.stringify(this.data));
    }
    raw() {
        return this.data;
    }
}


/***/ }),

/***/ "./src/models/once_execution.ts":
/*!**************************************!*\
  !*** ./src/models/once_execution.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnlyOneExecutionGuard)
/* harmony export */ });
class OnlyOneExecutionGuard {
    was_execute;
    constructor() {
        this.was_execute = false;
    }
    try_run() {
        return !this.was_execute;
    }
    run() {
        if (this.try_run()) {
            this.was_execute = true;
            return true;
        }
        return false;
    }
}


/***/ }),

/***/ "./src/models/quotation.ts":
/*!*********************************!*\
  !*** ./src/models/quotation.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Quotation: () => (/* binding */ Quotation)
/* harmony export */ });
/* harmony import */ var _inmmutable_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inmmutable_model */ "./src/models/inmmutable_model.ts");

class Quotation extends _inmmutable_model__WEBPACK_IMPORTED_MODULE_0__.InmmutableModel {
    constructor(quote) {
        super(quote);
    }
    static default(job_id) {
        let data = {
            job_id: job_id,
            description: "",
            total_amount: 0.0,
            delta_days: 7
        };
        return new Quotation(data);
    }
    clone() {
        return new Quotation(this.clone_data());
    }
    setTotalAmount(total_amount) {
        this.data.total_amount = parseFloat(total_amount);
    }
    setDescription(description) {
        this.data.description = description;
    }
    setDeltaDays(delta_days) {
        let new_value = parseInt(delta_days);
        if (new_value >= 0) {
            this.data.delta_days = new_value;
        }
        else {
            throw "DeltaDays At least one day.";
        }
    }
}


/***/ }),

/***/ "./src/models/xrp.ts":
/*!***************************!*\
  !*** ./src/models/xrp.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XRPValue: () => (/* binding */ XRPValue)
/* harmony export */ });
/* harmony import */ var _inmmutable_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inmmutable_model */ "./src/models/inmmutable_model.ts");

// This should be take from API.
const XRP_TO_DOLARS = 0.71;
class XRPValue extends _inmmutable_model__WEBPACK_IMPORTED_MODULE_0__.InmmutableModel {
    static default(value_txt) {
        let data = {
            value: 0.0,
            value_txt: "0.0",
            drops: "0",
            on_dolars: "0.00"
        };
        let xrp = new XRPValue(data);
        xrp.trySetValueFromStr(value_txt);
        return xrp;
    }
    clone() {
        return new XRPValue(this.clone_data());
    }
    calc_dolars() {
        this.data.on_dolars = (this.data.value * XRP_TO_DOLARS).toFixed(2);
    }
    trySetValueFromStr(value_txt) {
        let is_empty = value_txt == "";
        if (is_empty) {
            value_txt = "0";
        }
        let is_last_char_is_dot = value_txt.slice(-1) == '.';
        if (is_last_char_is_dot) {
            value_txt += "0";
        }
        const regex = /^(?:\d{1,8}(?:\.\d{1,6})?|\.\d{1,6})$/;
        let new_canditate_value = parseFloat(value_txt);
        if (!Number.isNaN(new_canditate_value) && regex.test(value_txt)) {
            if (new_canditate_value >= 0) {
                let havent_dot = value_txt.indexOf(".") == -1;
                if (havent_dot) {
                    value_txt += ".0";
                }
                this.data.value = new_canditate_value;
                this.data.value_txt = value_txt;
                let drops = (new_canditate_value / 0.000001).toFixed(0);
                this.data.drops = drops;
                this.calc_dolars();
            }
        }
    }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("905784e5c3ca1c46462b")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "inferno-boilerplate:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "http://localhost:8080/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateinferno_boilerplate"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map