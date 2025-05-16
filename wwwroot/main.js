"use strict";
(self["webpackChunkcurrency_converter"] = self["webpackChunkcurrency_converter"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _currency_converter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./currency-converter.service */ 9030);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




function AppComponent_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const currency_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", currency_r3.iso);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", currency_r3.iso, " - ", currency_r3.currencyName, " ");
  }
}
function AppComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const currency_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", currency_r4.iso);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", currency_r4.iso, " - ", currency_r4.currencyName, " ");
  }
}
function AppComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" 1 ", ctx_r2.fromCurrency, " = ", ctx_r2.fxRate, " ", ctx_r2.toCurrency, " ");
  }
}
class AppComponent {
  constructor(currencyService) {
    this.currencyService = currencyService;
    this.currencies = [];
    this.fromCurrency = '';
    this.toCurrency = '';
    this.amount = '';
    this.resultAmount = '';
    this.fxRate = '';
  }
  ngOnInit() {
    this.currencyService.getCurrencies().subscribe(data => {
      this.currencies = data;
    });
  }
  switchCurrencies() {
    const temp = this.fromCurrency;
    this.fromCurrency = this.toCurrency;
    this.toCurrency = temp;
  }
  onConvert() {
    if (!this.fromCurrency || !this.toCurrency || !this.amount) {
      alert('Please select both currencies and enter an amount.');
      return;
    }
    this.currencyService.convert(this.fromCurrency, this.toCurrency, this.amount).subscribe({
      next: result => {
        this.resultAmount = result.resultAmount.toString();
        this.fxRate = result.exchangeRate.toString();
      },
      error: () => {
        alert('Conversion failed. Please try again.');
      }
    });
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_currency_converter_service__WEBPACK_IMPORTED_MODULE_0__.CurrencyConverterService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 26,
      vars: 9,
      consts: [[1, "container"], [1, "pill-with-label"], ["type", "text", "placeholder", "Enter Amount", 1, "amounts", 3, "ngModel", "ngModelChange"], [1, "iso-label"], [1, "dropdown-row"], [1, "currency-dropdown", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "switch-btn", 3, "click"], [1, "button-row"], [1, "convert-btn", 3, "click"], ["class", "fx-pill", 4, "ngIf"], ["type", "text", "placeholder", "Result Amount", "readonly", "", 1, "amounts", 3, "value"], [3, "value"], [1, "fx-pill"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Currency Converter");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "input", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.amount = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_8_listener($event) {
            return ctx.fromCurrency = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Select Currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AppComponent_option_11_Template, 2, 3, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() {
            return ctx.switchCurrencies();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\u21C4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "select", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_14_listener($event) {
            return ctx.toCurrency = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Select Currency");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, AppComponent_option_17_Template, 2, 3, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9)(19, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_19_listener() {
            return ctx.onConvert();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Convert");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AppComponent_div_21_Template, 2, 3, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.amount);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.fromCurrency);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.fromCurrency);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currencies);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.toCurrency);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currencies);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fxRate);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.resultAmount);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.toCurrency);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
      styles: [".container[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  background-color: #f5f5dc; \r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  padding: 20px;\r\n  box-sizing: border-box;\r\n  text-align: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  margin-bottom: 30px;\r\n  font-size: 2rem;\r\n}\r\n\r\n.amounts[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 300px;\r\n  padding: 15px 20px;\r\n  border-radius: 50px;\r\n  border: 1px solid #ccc;\r\n  font-size: 1rem;\r\n  outline: none;\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.dropdown-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 15px;\r\n  margin-bottom: 30px;\r\n  width: 100%;\r\n}\r\n\r\n.currency-dropdown[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 260px;\r\n  padding: 12px 20px;\r\n  border-radius: 30px;\r\n  border: 1px solid #bbb;\r\n  font-size: 1rem;\r\n  background-color: #fff;\r\n  appearance: none;\r\n  padding-right: 40px;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);\r\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10'%3E%3Cpolygon fill='%23666' points='6,9 0,0 12,0'%3E%3C/polygon%3E%3C/svg%3E\");\r\n  background-repeat: no-repeat;\r\n  background-position: right 15px center;\r\n  background-size: 10px;\r\n  transition: border 0.3s ease, box-shadow 0.3s ease;\r\n  box-sizing: border-box;\r\n}\r\n\r\n  .currency-dropdown[_ngcontent-%COMP%]:focus {\r\n    border-color: #888;\r\n    box-shadow: 0 0 8px rgba(136, 136, 136, 0.2);\r\n    outline: none;\r\n  }\r\n\r\n.pill-with-label[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  max-width: 300px;\r\n  margin-bottom: 20px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  box-sizing: border-box;\r\n}\r\n\r\n  .pill-with-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 15px 20px;\r\n    padding-right: 70px;\r\n    border-radius: 50px;\r\n    border: 1px solid #ccc;\r\n    font-size: 1rem;\r\n    outline: none;\r\n    text-align: left;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n.result-input[_ngcontent-%COMP%] {\r\n  background-color: #f0f0e0;\r\n  color: #555;\r\n  cursor: default;\r\n}\r\n\r\n.iso-label[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 35%;\r\n  transform: translateY(-50%);\r\n  background-color: #b38b6d;\r\n  color: white;\r\n  font-weight: bold;\r\n  padding: 4px 12px;\r\n  border-radius: 20px;\r\n  font-size: 0.85rem;\r\n  pointer-events: none;\r\n  white-space: nowrap;\r\n}\r\n\r\n.button-row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.convert-btn[_ngcontent-%COMP%] {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  font-weight: bold;\r\n  border: none;\r\n  border-radius: 999px;\r\n  padding: 12px 30px;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n  .convert-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: #3e8e41;\r\n  }\r\n\r\n.switch-btn[_ngcontent-%COMP%] {\r\n  background-color: #e0d4c0;\r\n  color: #5a4632;\r\n  border: none;\r\n  border-radius: 50%;\r\n  width: 50px;\r\n  height: 50px;\r\n  font-size: 1.4rem;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease, transform 0.2s ease;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n  .switch-btn[_ngcontent-%COMP%]:hover {\r\n    background-color: #cfbba1;\r\n    transform: rotate(180deg);\r\n  }\r\n\r\n.fx-pill[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n  background-color: #d4e6d5;\r\n  color: #2f553c;\r\n  font-weight: bold;\r\n  border-radius: 999px;\r\n  padding: 12px 24px;\r\n  font-size: 0.95rem;\r\n  text-align: center;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 1.6rem;\r\n  }\r\n\r\n  .convert-btn[_ngcontent-%COMP%] {\r\n    padding: 10px 20px;\r\n    font-size: 0.9rem;\r\n  }\r\n\r\n  .switch-btn[_ngcontent-%COMP%] {\r\n    width: 45px;\r\n    height: 45px;\r\n    font-size: 1.2rem;\r\n  }\r\n\r\n  .amounts[_ngcontent-%COMP%], .currency-dropdown[_ngcontent-%COMP%], .pill-with-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    font-size: 0.95rem;\r\n  }\r\n\r\n  .dropdown-row[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 12px;\r\n  }\r\n\r\n  body[_ngcontent-%COMP%] {\r\n    padding: 0 10px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCLEVBQUUsdUJBQXVCO0VBQ2xELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiw0REFBNEQ7RUFDNUQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsU0FBUztFQUNULG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMsd0xBQXdMO0VBQ3hMLDRCQUE0QjtFQUM1QixzQ0FBc0M7RUFDdEMscUJBQXFCO0VBQ3JCLGtEQUFrRDtFQUNsRCxzQkFBc0I7QUFDeEI7O0VBRUU7SUFDRSxrQkFBa0I7SUFDbEIsNENBQTRDO0lBQzVDLGFBQWE7RUFDZjs7QUFFRjtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0VBRUU7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4Qjs7QUFFRjtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsd0NBQXdDO0FBQzFDOztFQUVFO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVGO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsMkRBQTJEO0VBQzNELHdDQUF3QztFQUN4QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7RUFFRTtJQUNFLHlCQUF5QjtJQUN6Qix5QkFBeUI7RUFDM0I7O0FBRUY7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjs7RUFFQTs7O0lBR0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWRjOyAvKiBwcm9mZXNzaW9uYWwgYmVpZ2UgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uYW1vdW50cyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jdXJyZW5jeS1kcm9wZG93biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAyNjBweDtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYmJiO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyJyBoZWlnaHQ9JzEwJyUzRSUzQ3BvbHlnb24gZmlsbD0nJTIzNjY2JyBwb2ludHM9JzYsOSAwLDAgMTIsMCclM0UlM0MvcG9seWdvbiUzRSUzQy9zdmclM0VcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxNXB4IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuICAuY3VycmVuY3ktZHJvcGRvd246Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODg4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDEzNiwgMTM2LCAxMzYsIDAuMik7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbi5waWxsLXdpdGgtbGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbiAgLnBpbGwtd2l0aC1sYWJlbCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4ucmVzdWx0LWlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGUwO1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLmlzby1sYWJlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIHRvcDogMzUlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjM4YjZkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiA0cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY29udmVydC1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICBwYWRkaW5nOiAxMnB4IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4gIC5jb252ZXJ0LWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO1xyXG4gIH1cclxuXHJcbi5zd2l0Y2gtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBkNGMwO1xyXG4gIGNvbG9yOiAjNWE0NjMyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuICAuc3dpdGNoLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZiYmExO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcblxyXG4uZngtcGlsbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlNmQ1O1xyXG4gIGNvbG9yOiAjMmY1NTNjO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIHBhZGRpbmc6IDEycHggMjRweDtcclxuICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICB9XHJcblxyXG4gIC5jb252ZXJ0LWJ0biB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcblxyXG4gIC5zd2l0Y2gtYnRuIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG5cclxuICAuYW1vdW50cyxcclxuICAuY3VycmVuY3ktZHJvcGRvd24sXHJcbiAgLnBpbGwtd2l0aC1sYWJlbCBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tcm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
  });
})();

/***/ }),

/***/ 9030:
/*!***********************************************!*\
  !*** ./src/app/currency-converter.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyConverterService": () => (/* binding */ CurrencyConverterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _environments_environment_development__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment.development */ 1261);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);




class CurrencyConverterService {
  constructor() {
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient);
    this.apiURL = _environments_environment_development__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + 'currencyconverter';
  }
  getCurrencies() {
    return this.http.get(`${this.apiURL}/currencies`);
  }
  convert(from, to, amount) {
    return this.http.get(`${this.apiURL}/convert?from=${from}&to=${to}&amount=${amount}`);
  }
  static {
    this.ɵfac = function CurrencyConverterService_Factory(t) {
      return new (t || CurrencyConverterService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CurrencyConverterService,
      factory: CurrencyConverterService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1261:
/*!*****************************************************!*\
  !*** ./src/environments/environment.development.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  apiURL: ''
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map