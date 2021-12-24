(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhub"] = self["webpackChunkhub"] || []).push([["src_app_pages_home_safety-menu_prestart_prestart-dashboard_prestart-dashboard_module_ts"], {
    /***/
    56675:
    /*!**********************************************************************!*\
      !*** ./node_modules/@mattlewis92/dom-autoscroller/dist/bundle.es.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      function getDef(f, d) {
        if (typeof f === 'undefined') {
          return typeof d === 'undefined' ? f : d;
        }

        return f;
      }

      function _boolean(func, def) {
        func = getDef(func, def);

        if (typeof func === 'function') {
          return function f() {
            var arguments$1 = arguments;

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments$1[_key];
            }

            return !!func.apply(this, args);
          };
        }

        return !!func ? function () {
          return true;
        } : function () {
          return false;
        };
      }

      var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      /**
       * Returns `true` if provided input is Element.
       * @name isElement
       * @param {*} [input]
       * @returns {boolean}
       */


      var isElement$1 = function isElement$1(input) {
        return input != null && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input.nodeType === 1 && _typeof(input.style) === 'object' && _typeof(input.ownerDocument) === 'object';
      };

      function indexOfElement(elements, element) {
        element = resolveElement(element, true);

        if (!isElement$1(element)) {
          return -1;
        }

        for (var i = 0; i < elements.length; i++) {
          if (elements[i] === element) {
            return i;
          }
        }

        return -1;
      }

      function hasElement(elements, element) {
        return -1 !== indexOfElement(elements, element);
      }

      function pushElements(elements, toAdd) {
        for (var i = 0; i < toAdd.length; i++) {
          if (!hasElement(elements, toAdd[i])) {
            elements.push(toAdd[i]);
          }
        }

        return toAdd;
      }

      function addElements(elements) {
        var arguments$1 = arguments;
        var toAdd = [],
            len = arguments.length - 1;

        while (len-- > 0) {
          toAdd[len] = arguments$1[len + 1];
        }

        toAdd = toAdd.map(resolveElement);
        return pushElements(elements, toAdd);
      }

      function removeElements(elements) {
        var arguments$1 = arguments;
        var toRemove = [],
            len = arguments.length - 1;

        while (len-- > 0) {
          toRemove[len] = arguments$1[len + 1];
        }

        return toRemove.map(resolveElement).reduce(function (last, e) {
          var index = indexOfElement(elements, e);

          if (index !== -1) {
            return last.concat(elements.splice(index, 1));
          }

          return last;
        }, []);
      }

      function resolveElement(element, noThrow) {
        if (typeof element === 'string') {
          try {
            return document.querySelector(element);
          } catch (e) {
            throw e;
          }
        }

        if (!isElement$1(element) && !noThrow) {
          throw new TypeError(element + " is not a DOM element.");
        }

        return element;
      }

      function createPointCB(object, options) {
        // A persistent object (as opposed to returned object) is used to save memory
        // This is good to prevent layout thrashing, or for games, and such
        // NOTE
        // This uses IE fixes which should be OK to remove some day. :)
        // Some speed will be gained by removal of these.
        // pointCB should be saved in a variable on return
        // This allows the usage of element.removeEventListener
        options = options || {};

        var allowUpdate = _boolean(options.allowUpdate, true);
        /*if(typeof options.allowUpdate === 'function'){
            allowUpdate = options.allowUpdate;
        }else{
            allowUpdate = function(){return true;};
        }*/


        return function pointCB(event) {
          event = event || window.event; // IE-ism

          object.target = event.target || event.srcElement || event.originalTarget;
          object.element = this;
          object.type = event.type;

          if (!allowUpdate(event)) {
            return;
          } // Support touch
          // http://www.creativebloq.com/javascript/make-your-site-work-touch-devices-51411644


          if (event.targetTouches) {
            object.x = event.targetTouches[0].clientX;
            object.y = event.targetTouches[0].clientY;
            object.pageX = event.targetTouches[0].pageX;
            object.pageY = event.targetTouches[0].pageY;
            object.screenX = event.targetTouches[0].screenX;
            object.screenY = event.targetTouches[0].screenY;
          } else {
            // If pageX/Y aren't available and clientX/Y are,
            // calculate pageX/Y - logic taken from jQuery.
            // (This is to support old IE)
            // NOTE Hopefully this can be removed soon.
            if (event.pageX === null && event.clientX !== null) {
              var eventDoc = event.target && event.target.ownerDocument || document;
              var doc = eventDoc.documentElement;
              var body = eventDoc.body;
              object.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
              object.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
            } else {
              object.pageX = event.pageX;
              object.pageY = event.pageY;
            } // pageX, and pageY change with page scroll
            // so we're not going to use those for x, and y.
            // NOTE Most browsers also alias clientX/Y with x/y
            // so that's something to consider down the road.


            object.x = event.clientX;
            object.y = event.clientY;
            object.screenX = event.screenX;
            object.screenY = event.screenY;
          }

          object.clientX = object.x;
          object.clientY = object.y;
        }; //NOTE Remember accessibility, Aria roles, and labels.
      }

      function createWindowRect() {
        var props = {
          top: {
            value: 0,
            enumerable: true
          },
          left: {
            value: 0,
            enumerable: true
          },
          right: {
            value: window.innerWidth,
            enumerable: true
          },
          bottom: {
            value: window.innerHeight,
            enumerable: true
          },
          width: {
            value: window.innerWidth,
            enumerable: true
          },
          height: {
            value: window.innerHeight,
            enumerable: true
          },
          x: {
            value: 0,
            enumerable: true
          },
          y: {
            value: 0,
            enumerable: true
          }
        };

        if (Object.create) {
          return Object.create({}, props);
        } else {
          var rect = {};
          Object.defineProperties(rect, props);
          return rect;
        }
      }

      function getClientRect(el) {
        if (el === window) {
          return createWindowRect();
        } else {
          try {
            var rect = el.getBoundingClientRect();

            if (rect.x === undefined) {
              rect.x = rect.left;
              rect.y = rect.top;
            }

            return rect;
          } catch (e) {
            throw new TypeError("Can't call getBoundingClientRect on " + el);
          }
        }
      }

      function pointInside(point, el) {
        var rect = getClientRect(el);
        return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
      }

      var objectCreate = void 0;

      if (typeof Object.create != 'function') {
        objectCreate = function (undefined$1) {
          var Temp = function Temp() {};

          return function (prototype, propertiesObject) {
            if (prototype !== Object(prototype) && prototype !== null) {
              throw TypeError('Argument must be an object, or null');
            }

            Temp.prototype = prototype || {};
            var result = new Temp();
            Temp.prototype = null;

            if (propertiesObject !== undefined$1) {
              Object.defineProperties(result, propertiesObject);
            } // to imitate the case of Object.create(null)


            if (prototype === null) {
              result.__proto__ = null;
            }

            return result;
          };
        }();
      } else {
        objectCreate = Object.create;
      }

      var objectCreate$1 = objectCreate;
      var mouseEventProps = ['altKey', 'button', 'buttons', 'clientX', 'clientY', 'ctrlKey', 'metaKey', 'movementX', 'movementY', 'offsetX', 'offsetY', 'pageX', 'pageY', 'region', 'relatedTarget', 'screenX', 'screenY', 'shiftKey', 'which', 'x', 'y'];

      function createDispatcher(element) {
        var defaultSettings = {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          ctrlKey: false,
          shiftKey: false,
          altKey: false,
          metaKey: false,
          button: 0,
          buttons: 1,
          relatedTarget: null,
          region: null
        };

        if (element !== undefined) {
          element.addEventListener('mousemove', onMove);
        }

        function onMove(e) {
          for (var i = 0; i < mouseEventProps.length; i++) {
            defaultSettings[mouseEventProps[i]] = e[mouseEventProps[i]];
          }
        }

        var dispatch = function () {
          if (MouseEvent) {
            return function m1(element, initMove, data) {
              var evt = new MouseEvent('mousemove', createMoveInit(defaultSettings, initMove)); //evt.dispatched = 'mousemove';

              setSpecial(evt, data);
              return element.dispatchEvent(evt);
            };
          } else if (typeof document.createEvent === 'function') {
            return function m2(element, initMove, data) {
              var settings = createMoveInit(defaultSettings, initMove);
              var evt = document.createEvent('MouseEvents');
              evt.initMouseEvent("mousemove", true, //can bubble
              true, //cancelable
              window, //view
              0, //detail
              settings.screenX, //0, //screenX
              settings.screenY, //0, //screenY
              settings.clientX, //80, //clientX
              settings.clientY, //20, //clientY
              settings.ctrlKey, //false, //ctrlKey
              settings.altKey, //false, //altKey
              settings.shiftKey, //false, //shiftKey
              settings.metaKey, //false, //metaKey
              settings.button, //0, //button
              settings.relatedTarget //null //relatedTarget
              ); //evt.dispatched = 'mousemove';

              setSpecial(evt, data);
              return element.dispatchEvent(evt);
            };
          } else if (typeof document.createEventObject === 'function') {
            return function m3(element, initMove, data) {
              var evt = document.createEventObject();
              var settings = createMoveInit(defaultSettings, initMove);

              for (var name in settings) {
                evt[name] = settings[name];
              } //evt.dispatched = 'mousemove';


              setSpecial(evt, data);
              return element.dispatchEvent(evt);
            };
          }
        }();

        function destroy() {
          if (element) {
            element.removeEventListener('mousemove', onMove, false);
          }

          defaultSettings = null;
        }

        return {
          destroy: destroy,
          dispatch: dispatch
        };
      }

      function createMoveInit(defaultSettings, initMove) {
        initMove = initMove || {};
        var settings = objectCreate$1(defaultSettings);

        for (var i = 0; i < mouseEventProps.length; i++) {
          if (initMove[mouseEventProps[i]] !== undefined) {
            settings[mouseEventProps[i]] = initMove[mouseEventProps[i]];
          }
        }

        return settings;
      }

      function setSpecial(e, data) {
        console.log('data ', data);
        e.data = data || {};
        e.dispatched = 'mousemove';
      }

      var prefix = ['webkit', 'moz', 'ms', 'o'];

      var requestFrame = function () {
        if (typeof window === "undefined") {
          return function () {};
        }

        for (var i = 0, limit = prefix.length; i < limit && !window.requestAnimationFrame; ++i) {
          window.requestAnimationFrame = window[prefix[i] + 'RequestAnimationFrame'];
        }

        if (!window.requestAnimationFrame) {
          var lastTime = 0;

          window.requestAnimationFrame = function (callback) {
            var now = new Date().getTime();
            var ttc = Math.max(0, 16 - now - lastTime);
            var timer = window.setTimeout(function () {
              return callback(now + ttc);
            }, ttc);
            lastTime = now + ttc;
            return timer;
          };
        }

        return window.requestAnimationFrame.bind(window);
      }();

      var cancelFrame = function () {
        if (typeof window === "undefined") {
          return function () {};
        }

        for (var i = 0, limit = prefix.length; i < limit && !window.cancelAnimationFrame; ++i) {
          window.cancelAnimationFrame = window[prefix[i] + 'CancelAnimationFrame'] || window[prefix[i] + 'CancelRequestAnimationFrame'];
        }

        if (!window.cancelAnimationFrame) {
          window.cancelAnimationFrame = function (timer) {
            window.clearTimeout(timer);
          };
        }

        return window.cancelAnimationFrame.bind(window);
      }();

      function AutoScroller(elements, options) {
        if (options === void 0) options = {};
        var self = this;
        var maxSpeed = 4,
            scrolling = false;

        if (typeof options.margin !== 'object') {
          var margin = options.margin || -1;
          this.margin = {
            left: margin,
            right: margin,
            top: margin,
            bottom: margin
          };
        } else {
          this.margin = options.margin;
        } //this.scrolling = false;


        this.scrollWhenOutside = options.scrollWhenOutside || false;
        var point = {},
            pointCB = createPointCB(point),
            dispatcher = createDispatcher(),
            down = false;
        window.addEventListener('mousemove', pointCB, false);
        window.addEventListener('touchmove', pointCB, false);

        if (!isNaN(options.maxSpeed)) {
          maxSpeed = options.maxSpeed;
        }

        if (typeof maxSpeed !== 'object') {
          maxSpeed = {
            left: maxSpeed,
            right: maxSpeed,
            top: maxSpeed,
            bottom: maxSpeed
          };
        }

        this.autoScroll = _boolean(options.autoScroll);
        this.syncMove = _boolean(options.syncMove, false);

        this.destroy = function (forceCleanAnimation) {
          window.removeEventListener('mousemove', pointCB, false);
          window.removeEventListener('touchmove', pointCB, false);
          window.removeEventListener('mousedown', onDown, false);
          window.removeEventListener('touchstart', onDown, false);
          window.removeEventListener('mouseup', onUp, false);
          window.removeEventListener('touchend', onUp, false);
          window.removeEventListener('pointerup', onUp, false);
          window.removeEventListener('mouseleave', onMouseOut, false);
          window.removeEventListener('mousemove', onMove, false);
          window.removeEventListener('touchmove', onMove, false);
          window.removeEventListener('scroll', setScroll, true);
          elements = [];

          if (forceCleanAnimation) {
            cleanAnimation();
          }
        };

        this.add = function () {
          var element = [],
              len = arguments.length;

          while (len--) {
            element[len] = arguments[len];
          }

          addElements.apply(void 0, [elements].concat(element));
          return this;
        };

        this.remove = function () {
          var element = [],
              len = arguments.length;

          while (len--) {
            element[len] = arguments[len];
          }

          return removeElements.apply(void 0, [elements].concat(element));
        };

        var hasWindow = null,
            windowAnimationFrame;

        if (Object.prototype.toString.call(elements) !== '[object Array]') {
          elements = [elements];
        }

        (function (temp) {
          elements = [];
          temp.forEach(function (element) {
            if (element === window) {
              hasWindow = window;
            } else {
              self.add(element);
            }
          });
        })(elements);

        Object.defineProperties(this, {
          down: {
            get: function get() {
              return down;
            }
          },
          maxSpeed: {
            get: function get() {
              return maxSpeed;
            }
          },
          point: {
            get: function get() {
              return point;
            }
          },
          scrolling: {
            get: function get() {
              return scrolling;
            }
          }
        });
        var current = null,
            animationFrame;
        window.addEventListener('mousedown', onDown, false);
        window.addEventListener('touchstart', onDown, false);
        window.addEventListener('mouseup', onUp, false);
        window.addEventListener('touchend', onUp, false);
        /*
        IE does not trigger mouseup event when scrolling.
        It is a known issue that Microsoft won't fix.
        https://connect.microsoft.com/IE/feedback/details/783058/scrollbar-trigger-mousedown-but-not-mouseup
        IE supports pointer events instead
        */

        window.addEventListener('pointerup', onUp, false);
        window.addEventListener('mousemove', onMove, false);
        window.addEventListener('touchmove', onMove, false);
        window.addEventListener('mouseleave', onMouseOut, false);
        window.addEventListener('scroll', setScroll, true);

        function setScroll(e) {
          for (var i = 0; i < elements.length; i++) {
            if (elements[i] === e.target) {
              scrolling = true;
              break;
            }
          }

          if (scrolling) {
            requestFrame(function () {
              return scrolling = false;
            });
          }
        }

        function onDown() {
          down = true;
        }

        function onUp() {
          down = false;
          cleanAnimation();
        }

        function cleanAnimation() {
          cancelFrame(animationFrame);
          cancelFrame(windowAnimationFrame);
        }

        function onMouseOut() {
          down = false;
        }

        function getTarget(target) {
          if (!target) {
            return null;
          }

          if (current === target) {
            return target;
          }

          if (hasElement(elements, target)) {
            return target;
          }

          while (target = target.parentNode) {
            if (hasElement(elements, target)) {
              return target;
            }
          }

          return null;
        }

        function getElementUnderPoint() {
          var underPoint = null;

          for (var i = 0; i < elements.length; i++) {
            if (inside(point, elements[i])) {
              underPoint = elements[i];
            }
          }

          return underPoint;
        }

        function onMove(event) {
          if (!self.autoScroll()) {
            return;
          }

          if (event['dispatched']) {
            return;
          }

          var target = event.target,
              body = document.body;

          if (current && !inside(point, current)) {
            if (!self.scrollWhenOutside) {
              current = null;
            }
          }

          if (target && target.parentNode === body) {
            //The special condition to improve speed.
            target = getElementUnderPoint();
          } else {
            target = getTarget(target);

            if (!target) {
              target = getElementUnderPoint();
            }
          }

          if (target && target !== current) {
            current = target;
          }

          if (hasWindow) {
            cancelFrame(windowAnimationFrame);
            windowAnimationFrame = requestFrame(scrollWindow);
          }

          if (!current) {
            return;
          }

          cancelFrame(animationFrame);
          animationFrame = requestFrame(scrollTick);
        }

        function scrollWindow() {
          autoScroll(hasWindow);
          cancelFrame(windowAnimationFrame);
          windowAnimationFrame = requestFrame(scrollWindow);
        }

        function scrollTick() {
          if (!current) {
            return;
          }

          autoScroll(current);
          cancelFrame(animationFrame);
          animationFrame = requestFrame(scrollTick);
        }

        function autoScroll(el) {
          var rect = getClientRect(el),
              scrollx,
              scrolly;

          if (point.x < rect.left + self.margin.left) {
            scrollx = Math.floor(Math.max(-1, (point.x - rect.left) / self.margin.left - 1) * self.maxSpeed.left);
          } else if (point.x > rect.right - self.margin.right) {
            scrollx = Math.ceil(Math.min(1, (point.x - rect.right) / self.margin.right + 1) * self.maxSpeed.right);
          } else {
            scrollx = 0;
          }

          if (point.y < rect.top + self.margin.top) {
            scrolly = Math.floor(Math.max(-1, (point.y - rect.top) / self.margin.top - 1) * self.maxSpeed.top);
          } else if (point.y > rect.bottom - self.margin.bottom) {
            scrolly = Math.ceil(Math.min(1, (point.y - rect.bottom) / self.margin.bottom + 1) * self.maxSpeed.bottom);
          } else {
            scrolly = 0;
          }

          if (self.syncMove()) {
            /*
            Notes about mousemove event dispatch.
            screen(X/Y) should need to be updated.
            Some other properties might need to be set.
            Keep the syncMove option default false until all inconsistencies are taken care of.
            */
            dispatcher.dispatch(el, {
              pageX: point.pageX + scrollx,
              pageY: point.pageY + scrolly,
              clientX: point.x + scrollx,
              clientY: point.y + scrolly
            });
          }

          setTimeout(function () {
            if (scrolly) {
              scrollY(el, scrolly);
            }

            if (scrollx) {
              scrollX(el, scrollx);
            }
          });
        }

        function scrollY(el, amount) {
          if (el === window) {
            window.scrollTo(el.pageXOffset, el.pageYOffset + amount);
          } else {
            el.scrollTop += amount;
          }
        }

        function scrollX(el, amount) {
          if (el === window) {
            window.scrollTo(el.pageXOffset + amount, el.pageYOffset);
          } else {
            el.scrollLeft += amount;
          }
        }
      }

      function AutoScrollerFactory(element, options) {
        return new AutoScroller(element, options);
      }

      function inside(point, el, rect) {
        if (!rect) {
          return pointInside(point, el);
        } else {
          return point.y > rect.top && point.y < rect.bottom && point.x > rect.left && point.x < rect.right;
        }
      }
      /*
      git remote add origin https://github.com/hollowdoor/dom_autoscroller.git
      git push -u origin master
      */

      /* harmony default export */


      __webpack_exports__["default"] = AutoScrollerFactory;
      /***/
    },

    /***/
    31369:
    /*!******************************************************************************************!*\
      !*** ./node_modules/angular-draggable-droppable/fesm2015/angular-draggable-droppable.js ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DragAndDropModule": function DragAndDropModule() {
          return (
            /* binding */
            _DragAndDropModule
          );
        },

        /* harmony export */
        "DraggableDirective": function DraggableDirective() {
          return (
            /* binding */
            _DraggableDirective
          );
        },

        /* harmony export */
        "DraggableScrollContainerDirective": function DraggableScrollContainerDirective() {
          return (
            /* binding */
            _DraggableScrollContainerDirective
          );
        },

        /* harmony export */
        "DroppableDirective": function DroppableDirective() {
          return (
            /* binding */
            _DroppableDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      69165);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      88229);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      66682);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs */
      9112);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs */
      22759);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      19773);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      39761);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      78345);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      15257);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      548);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs/operators */
      34150);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs/operators */
      59328);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! rxjs/operators */
      87519);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @mattlewis92/dom-autoscroller */
      56675);

      function addClass(renderer, element, classToAdd) {
        if (classToAdd) {
          classToAdd.split(' ').forEach(function (className) {
            return renderer.addClass(element.nativeElement, className);
          });
        }
      }

      function removeClass(renderer, element, classToRemove) {
        if (classToRemove) {
          classToRemove.split(' ').forEach(function (className) {
            return renderer.removeClass(element.nativeElement, className);
          });
        }
      }

      var DraggableHelper = function DraggableHelper() {
        _classCallCheck(this, DraggableHelper);

        this.currentDrag = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      };

      DraggableHelper.ɵfac = function DraggableHelper_Factory(t) {
        return new (t || DraggableHelper)();
      };

      DraggableHelper.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: DraggableHelper,
        factory: DraggableHelper.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](DraggableHelper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /**
       * If the window isn't scrollable, then place this on the scrollable container that draggable elements are inside. e.g.
       * ```html
        <div style="overflow: scroll" mwlDraggableScrollContainer>
          <div mwlDraggable>Drag me!</div>
        </div>
        ```
       */


      var _DraggableScrollContainerDirective =
      /**
       * @hidden
       */
      function _DraggableScrollContainerDirective(elementRef) {
        _classCallCheck(this, _DraggableScrollContainerDirective);

        this.elementRef = elementRef;
      };

      _DraggableScrollContainerDirective.ɵfac = function DraggableScrollContainerDirective_Factory(t) {
        return new (t || _DraggableScrollContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
      };

      _DraggableScrollContainerDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _DraggableScrollContainerDirective,
        selectors: [["", "mwlDraggableScrollContainer", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_DraggableScrollContainerDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: '[mwlDraggableScrollContainer]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }];
        }, null);
      })();

      var _DraggableDirective = /*#__PURE__*/function () {
        /**
         * @hidden
         */
        function _DraggableDirective(element, renderer, draggableHelper, zone, vcr, scrollContainer, document) {
          _classCallCheck(this, _DraggableDirective);

          this.element = element;
          this.renderer = renderer;
          this.draggableHelper = draggableHelper;
          this.zone = zone;
          this.vcr = vcr;
          this.scrollContainer = scrollContainer;
          this.document = document;
          /**
           * The axis along which the element is draggable
           */

          this.dragAxis = {
            x: true,
            y: true
          };
          /**
           * Snap all drags to an x / y grid
           */

          this.dragSnapGrid = {};
          /**
           * Show a ghost element that shows the drag when dragging
           */

          this.ghostDragEnabled = true;
          /**
           * Show the original element when ghostDragEnabled is true
           */

          this.showOriginalElementWhileDragging = false;
          /**
           * The cursor to use when hovering over a draggable element
           */

          this.dragCursor = '';
          /*
           * Options used to control the behaviour of auto scrolling: https://www.npmjs.com/package/dom-autoscroller
           */

          this.autoScroll = {
            margin: 20
          };
          /**
           * Called when the element can be dragged along one axis and has the mouse or pointer device pressed on it
           */

          this.dragPointerDown = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called when the element has started to be dragged.
           * Only called after at least one mouse or touch move event.
           * If you call $event.cancelDrag$.emit() it will cancel the current drag
           */

          this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called after the ghost element has been created
           */

          this.ghostElementCreated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called when the element is being dragged
           */

          this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called after the element is dragged
           */

          this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * @hidden
           */

          this.pointerDown$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /**
           * @hidden
           */

          this.pointerMove$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /**
           * @hidden
           */

          this.pointerUp$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.eventListenerSubscriptions = {};
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.timeLongPress = {
            timerBegin: 0,
            timerEnd: 0
          };
        }

        _createClass(_DraggableDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.checkEventListeners();
            var pointerDragged$ = this.pointerDown$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(function () {
              return _this.canDrag();
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(function (pointerDownEvent) {
              // fix for https://github.com/mattlewis92/angular-draggable-droppable/issues/61
              // stop mouse events propagating up the chain
              if (pointerDownEvent.event.stopPropagation && !_this.scrollContainer) {
                pointerDownEvent.event.stopPropagation();
              } // hack to prevent text getting selected in safari while dragging


              var globalDragStyle = _this.renderer.createElement('style');

              _this.renderer.setAttribute(globalDragStyle, 'type', 'text/css');

              _this.renderer.appendChild(globalDragStyle, _this.renderer.createText("\n          body * {\n           -moz-user-select: none;\n           -ms-user-select: none;\n           -webkit-user-select: none;\n           user-select: none;\n          }\n        "));

              requestAnimationFrame(function () {
                _this.document.head.appendChild(globalDragStyle);
              });

              var startScrollPosition = _this.getScrollPosition();

              var scrollContainerScroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(function (observer) {
                var scrollContainer = _this.scrollContainer ? _this.scrollContainer.elementRef.nativeElement : 'window';
                return _this.renderer.listen(scrollContainer, 'scroll', function (e) {
                  return observer.next(e);
                });
              }).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(startScrollPosition), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(function () {
                return _this.getScrollPosition();
              }));
              var currentDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
              var cancelDrag$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.ReplaySubject();

              _this.zone.run(function () {
                _this.dragPointerDown.next({
                  x: 0,
                  y: 0
                });
              });

              var dragComplete$ = (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(_this.pointerUp$, _this.pointerDown$, cancelDrag$, _this.destroy$).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
              var pointerMove = (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.combineLatest)([_this.pointerMove$, scrollContainerScroll$]).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    pointerMoveEvent = _ref2[0],
                    scroll = _ref2[1];

                return {
                  currentDrag$: currentDrag$,
                  transformX: pointerMoveEvent.clientX - pointerDownEvent.clientX,
                  transformY: pointerMoveEvent.clientY - pointerDownEvent.clientY,
                  clientX: pointerMoveEvent.clientX,
                  clientY: pointerMoveEvent.clientY,
                  scrollLeft: scroll.left,
                  scrollTop: scroll.top,
                  target: pointerMoveEvent.event.target
                };
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(function (moveData) {
                if (_this.dragSnapGrid.x) {
                  moveData.transformX = Math.round(moveData.transformX / _this.dragSnapGrid.x) * _this.dragSnapGrid.x;
                }

                if (_this.dragSnapGrid.y) {
                  moveData.transformY = Math.round(moveData.transformY / _this.dragSnapGrid.y) * _this.dragSnapGrid.y;
                }

                return moveData;
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(function (moveData) {
                if (!_this.dragAxis.x) {
                  moveData.transformX = 0;
                }

                if (!_this.dragAxis.y) {
                  moveData.transformY = 0;
                }

                return moveData;
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(function (moveData) {
                var scrollX = moveData.scrollLeft - startScrollPosition.left;
                var scrollY = moveData.scrollTop - startScrollPosition.top;
                return Object.assign(Object.assign({}, moveData), {
                  x: moveData.transformX + scrollX,
                  y: moveData.transformY + scrollY
                });
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(function (_ref3) {
                var x = _ref3.x,
                    y = _ref3.y,
                    transformX = _ref3.transformX,
                    transformY = _ref3.transformY;
                return !_this.validateDrag || _this.validateDrag({
                  x: x,
                  y: y,
                  transform: {
                    x: transformX,
                    y: transformY
                  }
                });
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.takeUntil)(dragComplete$), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
              var dragStarted$ = pointerMove.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
              var dragEnded$ = pointerMove.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeLast)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
              dragStarted$.subscribe(function (_ref4) {
                var clientX = _ref4.clientX,
                    clientY = _ref4.clientY,
                    x = _ref4.x,
                    y = _ref4.y;

                _this.zone.run(function () {
                  _this.dragStart.next({
                    cancelDrag$: cancelDrag$
                  });
                });

                _this.scroller = (0, _mattlewis92_dom_autoscroller__WEBPACK_IMPORTED_MODULE_0__["default"])([_this.scrollContainer ? _this.scrollContainer.elementRef.nativeElement : _this.document.defaultView], Object.assign(Object.assign({}, _this.autoScroll), {
                  autoScroll: function autoScroll() {
                    return true;
                  }
                }));
                addClass(_this.renderer, _this.element, _this.dragActiveClass);

                if (_this.ghostDragEnabled) {
                  var rect = _this.element.nativeElement.getBoundingClientRect();

                  var clone = _this.element.nativeElement.cloneNode(true);

                  if (!_this.showOriginalElementWhileDragging) {
                    _this.renderer.setStyle(_this.element.nativeElement, 'visibility', 'hidden');
                  }

                  if (_this.ghostElementAppendTo) {
                    _this.ghostElementAppendTo.appendChild(clone);
                  } else {
                    _this.element.nativeElement.parentNode.insertBefore(clone, _this.element.nativeElement.nextSibling);
                  }

                  _this.ghostElement = clone;
                  _this.document.body.style.cursor = _this.dragCursor;

                  _this.setElementStyles(clone, {
                    position: 'fixed',
                    top: "".concat(rect.top, "px"),
                    left: "".concat(rect.left, "px"),
                    width: "".concat(rect.width, "px"),
                    height: "".concat(rect.height, "px"),
                    cursor: _this.dragCursor,
                    margin: '0',
                    willChange: 'transform',
                    pointerEvents: 'none'
                  });

                  if (_this.ghostElementTemplate) {
                    var viewRef = _this.vcr.createEmbeddedView(_this.ghostElementTemplate);

                    clone.innerHTML = '';
                    viewRef.rootNodes.filter(function (node) {
                      return node instanceof Node;
                    }).forEach(function (node) {
                      clone.appendChild(node);
                    });
                    dragEnded$.subscribe(function () {
                      _this.vcr.remove(_this.vcr.indexOf(viewRef));
                    });
                  }

                  _this.zone.run(function () {
                    _this.ghostElementCreated.emit({
                      clientX: clientX - x,
                      clientY: clientY - y,
                      element: clone
                    });
                  });

                  dragEnded$.subscribe(function () {
                    clone.parentElement.removeChild(clone);
                    _this.ghostElement = null;

                    _this.renderer.setStyle(_this.element.nativeElement, 'visibility', '');
                  });
                }

                _this.draggableHelper.currentDrag.next(currentDrag$);
              });
              dragEnded$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(function (dragEndData) {
                var dragEndData$ = cancelDrag$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.count)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(function (calledCount) {
                  return Object.assign(Object.assign({}, dragEndData), {
                    dragCancelled: calledCount > 0
                  });
                }));
                cancelDrag$.complete();
                return dragEndData$;
              })).subscribe(function (_ref5) {
                var x = _ref5.x,
                    y = _ref5.y,
                    dragCancelled = _ref5.dragCancelled;

                _this.scroller.destroy();

                _this.zone.run(function () {
                  _this.dragEnd.next({
                    x: x,
                    y: y,
                    dragCancelled: dragCancelled
                  });
                });

                removeClass(_this.renderer, _this.element, _this.dragActiveClass);
                currentDrag$.complete();
              });
              (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(dragComplete$, dragEnded$).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1)).subscribe(function () {
                requestAnimationFrame(function () {
                  _this.document.head.removeChild(globalDragStyle);
                });
              });
              return pointerMove;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.share)());
            (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(pointerDragged$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(function (value) {
              return [, value];
            })), pointerDragged$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.pairwise)())).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(function (_ref6) {
              var _ref7 = _slicedToArray(_ref6, 2),
                  previous = _ref7[0],
                  next = _ref7[1];

              if (!previous) {
                return true;
              }

              return previous.x !== next.x || previous.y !== next.y;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(function (_ref8) {
              var _ref9 = _slicedToArray(_ref8, 2),
                  previous = _ref9[0],
                  next = _ref9[1];

              return next;
            })).subscribe(function (_ref10) {
              var x = _ref10.x,
                  y = _ref10.y,
                  currentDrag$ = _ref10.currentDrag$,
                  clientX = _ref10.clientX,
                  clientY = _ref10.clientY,
                  transformX = _ref10.transformX,
                  transformY = _ref10.transformY,
                  target = _ref10.target;

              _this.zone.run(function () {
                _this.dragging.next({
                  x: x,
                  y: y
                });
              });

              requestAnimationFrame(function () {
                if (_this.ghostElement) {
                  var transform = "translate3d(".concat(transformX, "px, ").concat(transformY, "px, 0px)");

                  _this.setElementStyles(_this.ghostElement, {
                    transform: transform,
                    '-webkit-transform': transform,
                    '-ms-transform': transform,
                    '-moz-transform': transform,
                    '-o-transform': transform
                  });
                }
              });
              currentDrag$.next({
                clientX: clientX,
                clientY: clientY,
                dropData: _this.dropData,
                target: target
              });
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.dragAxis) {
              this.checkEventListeners();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribeEventListeners();
            this.pointerDown$.complete();
            this.pointerMove$.complete();
            this.pointerUp$.complete();
            this.destroy$.next();
          }
        }, {
          key: "checkEventListeners",
          value: function checkEventListeners() {
            var _this2 = this;

            var canDrag = this.canDrag();
            var hasEventListeners = Object.keys(this.eventListenerSubscriptions).length > 0;

            if (canDrag && !hasEventListeners) {
              this.zone.runOutsideAngular(function () {
                _this2.eventListenerSubscriptions.mousedown = _this2.renderer.listen(_this2.element.nativeElement, 'mousedown', function (event) {
                  _this2.onMouseDown(event);
                });
                _this2.eventListenerSubscriptions.mouseup = _this2.renderer.listen('document', 'mouseup', function (event) {
                  _this2.onMouseUp(event);
                });
                _this2.eventListenerSubscriptions.touchstart = _this2.renderer.listen(_this2.element.nativeElement, 'touchstart', function (event) {
                  _this2.onTouchStart(event);
                });
                _this2.eventListenerSubscriptions.touchend = _this2.renderer.listen('document', 'touchend', function (event) {
                  _this2.onTouchEnd(event);
                });
                _this2.eventListenerSubscriptions.touchcancel = _this2.renderer.listen('document', 'touchcancel', function (event) {
                  _this2.onTouchEnd(event);
                });
                _this2.eventListenerSubscriptions.mouseenter = _this2.renderer.listen(_this2.element.nativeElement, 'mouseenter', function () {
                  _this2.onMouseEnter();
                });
                _this2.eventListenerSubscriptions.mouseleave = _this2.renderer.listen(_this2.element.nativeElement, 'mouseleave', function () {
                  _this2.onMouseLeave();
                });
              });
            } else if (!canDrag && hasEventListeners) {
              this.unsubscribeEventListeners();
            }
          }
        }, {
          key: "onMouseDown",
          value: function onMouseDown(event) {
            var _this3 = this;

            if (event.button === 0) {
              if (!this.eventListenerSubscriptions.mousemove) {
                this.eventListenerSubscriptions.mousemove = this.renderer.listen('document', 'mousemove', function (mouseMoveEvent) {
                  _this3.pointerMove$.next({
                    event: mouseMoveEvent,
                    clientX: mouseMoveEvent.clientX,
                    clientY: mouseMoveEvent.clientY
                  });
                });
              }

              this.pointerDown$.next({
                event: event,
                clientX: event.clientX,
                clientY: event.clientY
              });
            }
          }
        }, {
          key: "onMouseUp",
          value: function onMouseUp(event) {
            if (event.button === 0) {
              if (this.eventListenerSubscriptions.mousemove) {
                this.eventListenerSubscriptions.mousemove();
                delete this.eventListenerSubscriptions.mousemove;
              }

              this.pointerUp$.next({
                event: event,
                clientX: event.clientX,
                clientY: event.clientY
              });
            }
          }
        }, {
          key: "onTouchStart",
          value: function onTouchStart(event) {
            var _this4 = this;

            var startScrollPosition;
            var isDragActivated;
            var hasContainerScrollbar;

            if (this.touchStartLongPress) {
              this.timeLongPress.timerBegin = Date.now();
              isDragActivated = false;
              hasContainerScrollbar = this.hasScrollbar();
              startScrollPosition = this.getScrollPosition();
            }

            if (!this.eventListenerSubscriptions.touchmove) {
              var contextMenuListener = (0, rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this.document, 'contextmenu').subscribe(function (e) {
                e.preventDefault();
              });
              var touchMoveListener = (0, rxjs__WEBPACK_IMPORTED_MODULE_17__.fromEvent)(this.document, 'touchmove', {
                passive: false
              }).subscribe(function (touchMoveEvent) {
                if (_this4.touchStartLongPress && !isDragActivated && hasContainerScrollbar) {
                  isDragActivated = _this4.shouldBeginDrag(event, touchMoveEvent, startScrollPosition);
                }

                if (!_this4.touchStartLongPress || !hasContainerScrollbar || isDragActivated) {
                  touchMoveEvent.preventDefault();

                  _this4.pointerMove$.next({
                    event: touchMoveEvent,
                    clientX: touchMoveEvent.targetTouches[0].clientX,
                    clientY: touchMoveEvent.targetTouches[0].clientY
                  });
                }
              });

              this.eventListenerSubscriptions.touchmove = function () {
                contextMenuListener.unsubscribe();
                touchMoveListener.unsubscribe();
              };
            }

            this.pointerDown$.next({
              event: event,
              clientX: event.touches[0].clientX,
              clientY: event.touches[0].clientY
            });
          }
        }, {
          key: "onTouchEnd",
          value: function onTouchEnd(event) {
            if (this.eventListenerSubscriptions.touchmove) {
              this.eventListenerSubscriptions.touchmove();
              delete this.eventListenerSubscriptions.touchmove;

              if (this.touchStartLongPress) {
                this.enableScroll();
              }
            }

            this.pointerUp$.next({
              event: event,
              clientX: event.changedTouches[0].clientX,
              clientY: event.changedTouches[0].clientY
            });
          }
        }, {
          key: "onMouseEnter",
          value: function onMouseEnter() {
            this.setCursor(this.dragCursor);
          }
        }, {
          key: "onMouseLeave",
          value: function onMouseLeave() {
            this.setCursor('');
          }
        }, {
          key: "canDrag",
          value: function canDrag() {
            return this.dragAxis.x || this.dragAxis.y;
          }
        }, {
          key: "setCursor",
          value: function setCursor(value) {
            if (!this.eventListenerSubscriptions.mousemove) {
              this.renderer.setStyle(this.element.nativeElement, 'cursor', value);
            }
          }
        }, {
          key: "unsubscribeEventListeners",
          value: function unsubscribeEventListeners() {
            var _this5 = this;

            Object.keys(this.eventListenerSubscriptions).forEach(function (type) {
              _this5.eventListenerSubscriptions[type]();

              delete _this5.eventListenerSubscriptions[type];
            });
          }
        }, {
          key: "setElementStyles",
          value: function setElementStyles(element, styles) {
            var _this6 = this;

            Object.keys(styles).forEach(function (key) {
              _this6.renderer.setStyle(element, key, styles[key]);
            });
          }
        }, {
          key: "getScrollElement",
          value: function getScrollElement() {
            if (this.scrollContainer) {
              return this.scrollContainer.elementRef.nativeElement;
            } else {
              return this.document.body;
            }
          }
        }, {
          key: "getScrollPosition",
          value: function getScrollPosition() {
            if (this.scrollContainer) {
              return {
                top: this.scrollContainer.elementRef.nativeElement.scrollTop,
                left: this.scrollContainer.elementRef.nativeElement.scrollLeft
              };
            } else {
              return {
                top: window.pageYOffset || this.document.documentElement.scrollTop,
                left: window.pageXOffset || this.document.documentElement.scrollLeft
              };
            }
          }
        }, {
          key: "shouldBeginDrag",
          value: function shouldBeginDrag(event, touchMoveEvent, startScrollPosition) {
            var moveScrollPosition = this.getScrollPosition();
            var deltaScroll = {
              top: Math.abs(moveScrollPosition.top - startScrollPosition.top),
              left: Math.abs(moveScrollPosition.left - startScrollPosition.left)
            };
            var deltaX = Math.abs(touchMoveEvent.targetTouches[0].clientX - event.touches[0].clientX) - deltaScroll.left;
            var deltaY = Math.abs(touchMoveEvent.targetTouches[0].clientY - event.touches[0].clientY) - deltaScroll.top;
            var deltaTotal = deltaX + deltaY;
            var longPressConfig = this.touchStartLongPress;

            if (deltaTotal > longPressConfig.delta || deltaScroll.top > 0 || deltaScroll.left > 0) {
              this.timeLongPress.timerBegin = Date.now();
            }

            this.timeLongPress.timerEnd = Date.now();
            var duration = this.timeLongPress.timerEnd - this.timeLongPress.timerBegin;

            if (duration >= longPressConfig.delay) {
              this.disableScroll();
              return true;
            }

            return false;
          }
        }, {
          key: "enableScroll",
          value: function enableScroll() {
            if (this.scrollContainer) {
              this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', '');
            }

            this.renderer.setStyle(this.document.body, 'overflow', '');
          }
        }, {
          key: "disableScroll",
          value: function disableScroll() {
            /* istanbul ignore next */
            if (this.scrollContainer) {
              this.renderer.setStyle(this.scrollContainer.elementRef.nativeElement, 'overflow', 'hidden');
            }

            this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
          }
        }, {
          key: "hasScrollbar",
          value: function hasScrollbar() {
            var scrollContainer = this.getScrollElement();
            var containerHasHorizontalScroll = scrollContainer.scrollWidth > scrollContainer.clientWidth;
            var containerHasVerticalScroll = scrollContainer.scrollHeight > scrollContainer.clientHeight;
            return containerHasHorizontalScroll || containerHasVerticalScroll;
          }
        }]);

        return _DraggableDirective;
      }();

      _DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
        return new (t || _DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DraggableHelper), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_DraggableScrollContainerDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_18__.DOCUMENT));
      };

      _DraggableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _DraggableDirective,
        selectors: [["", "mwlDraggable", ""]],
        inputs: {
          dropData: "dropData",
          dragAxis: "dragAxis",
          dragSnapGrid: "dragSnapGrid",
          ghostDragEnabled: "ghostDragEnabled",
          showOriginalElementWhileDragging: "showOriginalElementWhileDragging",
          validateDrag: "validateDrag",
          dragCursor: "dragCursor",
          dragActiveClass: "dragActiveClass",
          ghostElementAppendTo: "ghostElementAppendTo",
          ghostElementTemplate: "ghostElementTemplate",
          touchStartLongPress: "touchStartLongPress",
          autoScroll: "autoScroll"
        },
        outputs: {
          dragPointerDown: "dragPointerDown",
          dragStart: "dragStart",
          ghostElementCreated: "ghostElementCreated",
          dragging: "dragging",
          dragEnd: "dragEnd"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_DraggableDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: '[mwlDraggable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
          }, {
            type: DraggableHelper
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef
          }, {
            type: _DraggableScrollContainerDirective,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.DOCUMENT]
            }]
          }];
        }, {
          dropData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dragAxis: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dragSnapGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          ghostDragEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          showOriginalElementWhileDragging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          validateDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dragCursor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dragActiveClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          ghostElementAppendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          ghostElementTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          touchStartLongPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          autoScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dragPointerDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          ghostElementCreated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          dragging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }]
        });
      })();

      function isCoordinateWithinRectangle(clientX, clientY, rect) {
        return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
      }

      var _DroppableDirective = /*#__PURE__*/function () {
        function _DroppableDirective(element, draggableHelper, zone, renderer, scrollContainer) {
          _classCallCheck(this, _DroppableDirective);

          this.element = element;
          this.draggableHelper = draggableHelper;
          this.zone = zone;
          this.renderer = renderer;
          this.scrollContainer = scrollContainer;
          /**
           * Called when a draggable element starts overlapping the element
           */

          this.dragEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called when a draggable element stops overlapping the element
           */

          this.dragLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called when a draggable element is moved over the element
           */

          this.dragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Called when a draggable element is dropped on this element
           */

          this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(); // eslint-disable-line  @angular-eslint/no-output-native
        }

        _createClass(_DroppableDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.currentDragSubscription = this.draggableHelper.currentDrag.subscribe(function (drag$) {
              addClass(_this7.renderer, _this7.element, _this7.dragActiveClass);
              var droppableElement = {
                updateCache: true
              };

              var deregisterScrollListener = _this7.renderer.listen(_this7.scrollContainer ? _this7.scrollContainer.elementRef.nativeElement : 'window', 'scroll', function () {
                droppableElement.updateCache = true;
              });

              var currentDragDropData;
              var overlaps$ = drag$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(function (_ref11) {
                var clientX = _ref11.clientX,
                    clientY = _ref11.clientY,
                    dropData = _ref11.dropData,
                    target = _ref11.target;
                currentDragDropData = dropData;

                if (droppableElement.updateCache) {
                  droppableElement.rect = _this7.element.nativeElement.getBoundingClientRect();

                  if (_this7.scrollContainer) {
                    droppableElement.scrollContainerRect = _this7.scrollContainer.elementRef.nativeElement.getBoundingClientRect();
                  }

                  droppableElement.updateCache = false;
                }

                var isWithinElement = isCoordinateWithinRectangle(clientX, clientY, droppableElement.rect);

                var isDropAllowed = !_this7.validateDrop || _this7.validateDrop({
                  clientX: clientX,
                  clientY: clientY,
                  target: target
                });

                if (droppableElement.scrollContainerRect) {
                  return isWithinElement && isDropAllowed && isCoordinateWithinRectangle(clientX, clientY, droppableElement.scrollContainerRect);
                } else {
                  return isWithinElement && isDropAllowed;
                }
              }));
              var overlapsChanged$ = overlaps$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)());
              var dragOverActive; // TODO - see if there's a way of doing this via rxjs

              overlapsChanged$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(function (overlapsNow) {
                return overlapsNow;
              })).subscribe(function () {
                dragOverActive = true;
                addClass(_this7.renderer, _this7.element, _this7.dragOverClass);

                _this7.zone.run(function () {
                  _this7.dragEnter.next({
                    dropData: currentDragDropData
                  });
                });
              });
              overlaps$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(function (overlapsNow) {
                return overlapsNow;
              })).subscribe(function () {
                _this7.zone.run(function () {
                  _this7.dragOver.next({
                    dropData: currentDragDropData
                  });
                });
              });
              overlapsChanged$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.pairwise)(), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(function (_ref12) {
                var _ref13 = _slicedToArray(_ref12, 2),
                    didOverlap = _ref13[0],
                    overlapsNow = _ref13[1];

                return didOverlap && !overlapsNow;
              })).subscribe(function () {
                dragOverActive = false;
                removeClass(_this7.renderer, _this7.element, _this7.dragOverClass);

                _this7.zone.run(function () {
                  _this7.dragLeave.next({
                    dropData: currentDragDropData
                  });
                });
              });
              drag$.subscribe({
                complete: function complete() {
                  deregisterScrollListener();
                  removeClass(_this7.renderer, _this7.element, _this7.dragActiveClass);

                  if (dragOverActive) {
                    removeClass(_this7.renderer, _this7.element, _this7.dragOverClass);

                    _this7.zone.run(function () {
                      _this7.drop.next({
                        dropData: currentDragDropData
                      });
                    });
                  }
                }
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.currentDragSubscription) {
              this.currentDragSubscription.unsubscribe();
            }
          }
        }]);

        return _DroppableDirective;
      }();

      _DroppableDirective.ɵfac = function DroppableDirective_Factory(t) {
        return new (t || _DroppableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](DraggableHelper), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_DraggableScrollContainerDirective, 8));
      };

      _DroppableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: _DroppableDirective,
        selectors: [["", "mwlDroppable", ""]],
        inputs: {
          dragOverClass: "dragOverClass",
          dragActiveClass: "dragActiveClass",
          validateDrop: "validateDrop"
        },
        outputs: {
          dragEnter: "dragEnter",
          dragLeave: "dragLeave",
          dragOver: "dragOver",
          drop: "drop"
        }
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_DroppableDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
          args: [{
            selector: '[mwlDroppable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }, {
            type: DraggableHelper
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2
          }, {
            type: _DraggableScrollContainerDirective,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }]
          }];
        }, {
          dragOverClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dragActiveClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          validateDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          dragEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          dragLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          dragOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          drop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }]
        });
      })();

      var _DragAndDropModule = function _DragAndDropModule() {
        _classCallCheck(this, _DragAndDropModule);
      };

      _DragAndDropModule.ɵfac = function DragAndDropModule_Factory(t) {
        return new (t || _DragAndDropModule)();
      };

      _DragAndDropModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _DragAndDropModule,
        declarations: [_DraggableDirective, _DroppableDirective, _DraggableScrollContainerDirective],
        exports: [_DraggableDirective, _DroppableDirective, _DraggableScrollContainerDirective]
      });
      _DragAndDropModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_DragAndDropModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            declarations: [_DraggableDirective, _DroppableDirective, _DraggableScrollContainerDirective],
            exports: [_DraggableDirective, _DroppableDirective, _DraggableScrollContainerDirective]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of angular-draggable-droppable
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=angular-draggable-droppable.js.map

      /***/

    },

    /***/
    23098:
    /*!*************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/Notification.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationKind": function NotificationKind() {
          return (
            /* binding */
            _NotificationKind
          );
        },

        /* harmony export */
        "Notification": function Notification() {
          return (
            /* binding */
            _Notification
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _observable_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./observable/empty */
      59193);
      /* harmony import */


      var _observable_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./observable/of */
      25917);
      /* harmony import */


      var _observable_throwError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./observable/throwError */
      40205);

      var _NotificationKind;

      (function (NotificationKind) {
        NotificationKind["NEXT"] = "N";
        NotificationKind["ERROR"] = "E";
        NotificationKind["COMPLETE"] = "C";
      })(_NotificationKind || (_NotificationKind = {}));

      var _Notification = /*#__PURE__*/function () {
        function _Notification(kind, value, error) {
          _classCallCheck(this, _Notification);

          this.kind = kind;
          this.value = value;
          this.error = error;
          this.hasValue = kind === 'N';
        }

        _createClass(_Notification, [{
          key: "observe",
          value: function observe(observer) {
            switch (this.kind) {
              case 'N':
                return observer.next && observer.next(this.value);

              case 'E':
                return observer.error && observer.error(this.error);

              case 'C':
                return observer.complete && observer.complete();
            }
          }
        }, {
          key: "do",
          value: function _do(next, error, complete) {
            var kind = this.kind;

            switch (kind) {
              case 'N':
                return next && next(this.value);

              case 'E':
                return error && error(this.error);

              case 'C':
                return complete && complete();
            }
          }
        }, {
          key: "accept",
          value: function accept(nextOrObserver, error, complete) {
            if (nextOrObserver && typeof nextOrObserver.next === 'function') {
              return this.observe(nextOrObserver);
            } else {
              return this["do"](nextOrObserver, error, complete);
            }
          }
        }, {
          key: "toObservable",
          value: function toObservable() {
            var kind = this.kind;

            switch (kind) {
              case 'N':
                return (0, _observable_of__WEBPACK_IMPORTED_MODULE_0__.of)(this.value);

              case 'E':
                return (0, _observable_throwError__WEBPACK_IMPORTED_MODULE_1__.throwError)(this.error);

              case 'C':
                return (0, _observable_empty__WEBPACK_IMPORTED_MODULE_2__.empty)();
            }

            throw new Error('unexpected notification kind value');
          }
        }], [{
          key: "createNext",
          value: function createNext(value) {
            if (typeof value !== 'undefined') {
              return new _Notification('N', value);
            }

            return _Notification.undefinedValueNotification;
          }
        }, {
          key: "createError",
          value: function createError(err) {
            return new _Notification('E', undefined, err);
          }
        }, {
          key: "createComplete",
          value: function createComplete() {
            return _Notification.completeNotification;
          }
        }]);

        return _Notification;
      }();

      _Notification.completeNotification = new _Notification('C');
      _Notification.undefinedValueNotification = new _Notification('N', undefined); //# sourceMappingURL=Notification.js.map

      /***/
    },

    /***/
    88229:
    /*!**************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/ReplaySubject.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReplaySubject": function ReplaySubject() {
          return (
            /* binding */
            _ReplaySubject
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Subject */
      79765);
      /* harmony import */


      var _scheduler_queue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./scheduler/queue */
      29661);
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Subscription */
      10826);
      /* harmony import */


      var _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./operators/observeOn */
      59746);
      /* harmony import */


      var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./util/ObjectUnsubscribedError */
      77971);
      /* harmony import */


      var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./SubjectSubscription */
      78858);

      var _ReplaySubject = /*#__PURE__*/function (_Subject__WEBPACK_IMP) {
        _inherits(_ReplaySubject, _Subject__WEBPACK_IMP);

        var _super = _createSuper(_ReplaySubject);

        function _ReplaySubject() {
          var _this8;

          var bufferSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.POSITIVE_INFINITY;
          var windowTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.POSITIVE_INFINITY;
          var scheduler = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, _ReplaySubject);

          _this8 = _super.call(this);
          _this8.scheduler = scheduler;
          _this8._events = [];
          _this8._infiniteTimeWindow = false;
          _this8._bufferSize = bufferSize < 1 ? 1 : bufferSize;
          _this8._windowTime = windowTime < 1 ? 1 : windowTime;

          if (windowTime === Number.POSITIVE_INFINITY) {
            _this8._infiniteTimeWindow = true;
            _this8.next = _this8.nextInfiniteTimeWindow;
          } else {
            _this8.next = _this8.nextTimeWindow;
          }

          return _this8;
        }

        _createClass(_ReplaySubject, [{
          key: "nextInfiniteTimeWindow",
          value: function nextInfiniteTimeWindow(value) {
            if (!this.isStopped) {
              var _events = this._events;

              _events.push(value);

              if (_events.length > this._bufferSize) {
                _events.shift();
              }
            }

            _get(_getPrototypeOf(_ReplaySubject.prototype), "next", this).call(this, value);
          }
        }, {
          key: "nextTimeWindow",
          value: function nextTimeWindow(value) {
            if (!this.isStopped) {
              this._events.push(new ReplayEvent(this._getNow(), value));

              this._trimBufferThenGetEvents();
            }

            _get(_getPrototypeOf(_ReplaySubject.prototype), "next", this).call(this, value);
          }
        }, {
          key: "_subscribe",
          value: function _subscribe(subscriber) {
            var _infiniteTimeWindow = this._infiniteTimeWindow;

            var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();

            var scheduler = this.scheduler;
            var len = _events.length;
            var subscription;

            if (this.closed) {
              throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__.ObjectUnsubscribedError();
            } else if (this.isStopped || this.hasError) {
              subscription = _Subscription__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
            } else {
              this.observers.push(subscriber);
              subscription = new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_3__.SubjectSubscription(this, subscriber);
            }

            if (scheduler) {
              subscriber.add(subscriber = new _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__.ObserveOnSubscriber(subscriber, scheduler));
            }

            if (_infiniteTimeWindow) {
              for (var i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
              }
            } else {
              for (var _i2 = 0; _i2 < len && !subscriber.closed; _i2++) {
                subscriber.next(_events[_i2].value);
              }
            }

            if (this.hasError) {
              subscriber.error(this.thrownError);
            } else if (this.isStopped) {
              subscriber.complete();
            }

            return subscription;
          }
        }, {
          key: "_getNow",
          value: function _getNow() {
            return (this.scheduler || _scheduler_queue__WEBPACK_IMPORTED_MODULE_5__.queue).now();
          }
        }, {
          key: "_trimBufferThenGetEvents",
          value: function _trimBufferThenGetEvents() {
            var now = this._getNow();

            var _bufferSize = this._bufferSize;
            var _windowTime = this._windowTime;
            var _events = this._events;
            var eventsCount = _events.length;
            var spliceCount = 0;

            while (spliceCount < eventsCount) {
              if (now - _events[spliceCount].time < _windowTime) {
                break;
              }

              spliceCount++;
            }

            if (eventsCount > _bufferSize) {
              spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
            }

            if (spliceCount > 0) {
              _events.splice(0, spliceCount);
            }

            return _events;
          }
        }]);

        return _ReplaySubject;
      }(_Subject__WEBPACK_IMPORTED_MODULE_0__.Subject);

      var ReplayEvent = function ReplayEvent(time, value) {
        _classCallCheck(this, ReplayEvent);

        this.time = time;
        this.value = value;
      }; //# sourceMappingURL=ReplaySubject.js.map

      /***/

    },

    /***/
    2217:
    /*!**********************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Scheduler": function Scheduler() {
          return (
            /* binding */
            _Scheduler
          );
        }
        /* harmony export */

      });

      var _Scheduler = /*#__PURE__*/function () {
        function _Scheduler(SchedulerAction) {
          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler.now;

          _classCallCheck(this, _Scheduler);

          this.SchedulerAction = SchedulerAction;
          this.now = now;
        }

        _createClass(_Scheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;
            return new this.SchedulerAction(this, work).schedule(state, delay);
          }
        }]);

        return _Scheduler;
      }();

      _Scheduler.now = function () {
        return Date.now();
      }; //# sourceMappingURL=Scheduler.js.map

      /***/

    },

    /***/
    40205:
    /*!**********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/observable/throwError.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "throwError": function throwError() {
          return (
            /* binding */
            _throwError
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      69165);

      function _throwError(error, scheduler) {
        if (!scheduler) {
          return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
            return subscriber.error(error);
          });
        } else {
          return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
            return scheduler.schedule(dispatch, 0, {
              error: error,
              subscriber: subscriber
            });
          });
        }
      }

      function dispatch(_ref14) {
        var error = _ref14.error,
            subscriber = _ref14.subscriber;
        subscriber.error(error);
      } //# sourceMappingURL=throwError.js.map

      /***/

    },

    /***/
    34150:
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/count.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "count": function count() {
          return (
            /* binding */
            _count
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscriber */
      77393);

      function _count(predicate) {
        return function (source) {
          return source.lift(new CountOperator(predicate, source));
        };
      }

      var CountOperator = /*#__PURE__*/function () {
        function CountOperator(predicate, source) {
          _classCallCheck(this, CountOperator);

          this.predicate = predicate;
          this.source = source;
        }

        _createClass(CountOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
          }
        }]);

        return CountOperator;
      }();

      var CountSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_) {
        _inherits(CountSubscriber, _Subscriber__WEBPACK_);

        var _super2 = _createSuper(CountSubscriber);

        function CountSubscriber(destination, predicate, source) {
          var _this9;

          _classCallCheck(this, CountSubscriber);

          _this9 = _super2.call(this, destination);
          _this9.predicate = predicate;
          _this9.source = source;
          _this9.count = 0;
          _this9.index = 0;
          return _this9;
        }

        _createClass(CountSubscriber, [{
          key: "_next",
          value: function _next(value) {
            if (this.predicate) {
              this._tryPredicate(value);
            } else {
              this.count++;
            }
          }
        }, {
          key: "_tryPredicate",
          value: function _tryPredicate(value) {
            var result;

            try {
              result = this.predicate(value, this.index++, this.source);
            } catch (err) {
              this.destination.error(err);
              return;
            }

            if (result) {
              this.count++;
            }
          }
        }, {
          key: "_complete",
          value: function _complete() {
            this.destination.next(this.count);
            this.destination.complete();
          }
        }]);

        return CountSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber); //# sourceMappingURL=count.js.map

      /***/

    },

    /***/
    59746:
    /*!********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/observeOn.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "observeOn": function observeOn() {
          return (
            /* binding */
            _observeOn
          );
        },

        /* harmony export */
        "ObserveOnOperator": function ObserveOnOperator() {
          return (
            /* binding */
            _ObserveOnOperator
          );
        },

        /* harmony export */
        "ObserveOnSubscriber": function ObserveOnSubscriber() {
          return (
            /* binding */
            _ObserveOnSubscriber
          );
        },

        /* harmony export */
        "ObserveOnMessage": function ObserveOnMessage() {
          return (
            /* binding */
            _ObserveOnMessage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscriber */
      77393);
      /* harmony import */


      var _Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Notification */
      23098);

      function _observeOn(scheduler) {
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return function observeOnOperatorFunction(source) {
          return source.lift(new _ObserveOnOperator(scheduler, delay));
        };
      }

      var _ObserveOnOperator = /*#__PURE__*/function () {
        function _ObserveOnOperator(scheduler) {
          var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          _classCallCheck(this, _ObserveOnOperator);

          this.scheduler = scheduler;
          this.delay = delay;
        }

        _createClass(_ObserveOnOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new _ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
          }
        }]);

        return _ObserveOnOperator;
      }();

      var _ObserveOnSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_2) {
        _inherits(_ObserveOnSubscriber, _Subscriber__WEBPACK_2);

        var _super3 = _createSuper(_ObserveOnSubscriber);

        function _ObserveOnSubscriber(destination, scheduler) {
          var _this10;

          var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

          _classCallCheck(this, _ObserveOnSubscriber);

          _this10 = _super3.call(this, destination);
          _this10.scheduler = scheduler;
          _this10.delay = delay;
          return _this10;
        }

        _createClass(_ObserveOnSubscriber, [{
          key: "scheduleMessage",
          value: function scheduleMessage(notification) {
            var destination = this.destination;
            destination.add(this.scheduler.schedule(_ObserveOnSubscriber.dispatch, this.delay, new _ObserveOnMessage(notification, this.destination)));
          }
        }, {
          key: "_next",
          value: function _next(value) {
            this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__.Notification.createNext(value));
          }
        }, {
          key: "_error",
          value: function _error(err) {
            this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__.Notification.createError(err));
            this.unsubscribe();
          }
        }, {
          key: "_complete",
          value: function _complete() {
            this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__.Notification.createComplete());
            this.unsubscribe();
          }
        }], [{
          key: "dispatch",
          value: function dispatch(arg) {
            var notification = arg.notification,
                destination = arg.destination;
            notification.observe(destination);
            this.unsubscribe();
          }
        }]);

        return _ObserveOnSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber);

      var _ObserveOnMessage = function _ObserveOnMessage(notification, destination) {
        _classCallCheck(this, _ObserveOnMessage);

        this.notification = notification;
        this.destination = destination;
      }; //# sourceMappingURL=observeOn.js.map

      /***/

    },

    /***/
    59328:
    /*!*******************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/pairwise.js ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "pairwise": function pairwise() {
          return (
            /* binding */
            _pairwise
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscriber */
      77393);

      function _pairwise() {
        return function (source) {
          return source.lift(new PairwiseOperator());
        };
      }

      var PairwiseOperator = /*#__PURE__*/function () {
        function PairwiseOperator() {
          _classCallCheck(this, PairwiseOperator);
        }

        _createClass(PairwiseOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            return source.subscribe(new PairwiseSubscriber(subscriber));
          }
        }]);

        return PairwiseOperator;
      }();

      var PairwiseSubscriber = /*#__PURE__*/function (_Subscriber__WEBPACK_3) {
        _inherits(PairwiseSubscriber, _Subscriber__WEBPACK_3);

        var _super4 = _createSuper(PairwiseSubscriber);

        function PairwiseSubscriber(destination) {
          var _this11;

          _classCallCheck(this, PairwiseSubscriber);

          _this11 = _super4.call(this, destination);
          _this11.hasPrev = false;
          return _this11;
        }

        _createClass(PairwiseSubscriber, [{
          key: "_next",
          value: function _next(value) {
            var pair;

            if (this.hasPrev) {
              pair = [this.prev, value];
            } else {
              this.hasPrev = true;
            }

            this.prev = value;

            if (pair) {
              this.destination.next(pair);
            }
          }
        }]);

        return PairwiseSubscriber;
      }(_Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber); //# sourceMappingURL=pairwise.js.map

      /***/

    },

    /***/
    46782:
    /*!********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "takeUntil": function takeUntil() {
          return (
            /* binding */
            _takeUntil
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../innerSubscribe */
      85345);

      function _takeUntil(notifier) {
        return function (source) {
          return source.lift(new TakeUntilOperator(notifier));
        };
      }

      var TakeUntilOperator = /*#__PURE__*/function () {
        function TakeUntilOperator(notifier) {
          _classCallCheck(this, TakeUntilOperator);

          this.notifier = notifier;
        }

        _createClass(TakeUntilOperator, [{
          key: "call",
          value: function call(subscriber, source) {
            var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
            var notifierSubscription = (0, _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(takeUntilSubscriber));

            if (notifierSubscription && !takeUntilSubscriber.seenValue) {
              takeUntilSubscriber.add(notifierSubscription);
              return source.subscribe(takeUntilSubscriber);
            }

            return takeUntilSubscriber;
          }
        }]);

        return TakeUntilOperator;
      }();

      var TakeUntilSubscriber = /*#__PURE__*/function (_innerSubscribe__WEBP) {
        _inherits(TakeUntilSubscriber, _innerSubscribe__WEBP);

        var _super5 = _createSuper(TakeUntilSubscriber);

        function TakeUntilSubscriber(destination) {
          var _this12;

          _classCallCheck(this, TakeUntilSubscriber);

          _this12 = _super5.call(this, destination);
          _this12.seenValue = false;
          return _this12;
        }

        _createClass(TakeUntilSubscriber, [{
          key: "notifyNext",
          value: function notifyNext() {
            this.seenValue = true;
            this.complete();
          }
        }, {
          key: "notifyComplete",
          value: function notifyComplete() {}
        }]);

        return TakeUntilSubscriber;
      }(_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber); //# sourceMappingURL=takeUntil.js.map

      /***/

    },

    /***/
    22901:
    /*!*****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Action": function Action() {
          return (
            /* binding */
            _Action
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscription */
      10826);

      var _Action = /*#__PURE__*/function (_Subscription__WEBPAC) {
        _inherits(_Action, _Subscription__WEBPAC);

        var _super6 = _createSuper(_Action);

        function _Action(scheduler, work) {
          _classCallCheck(this, _Action);

          return _super6.call(this);
        }

        _createClass(_Action, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this;
          }
        }]);

        return _Action;
      }(_Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription); //# sourceMappingURL=Action.js.map

      /***/

    },

    /***/
    401:
    /*!**********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsyncAction": function AsyncAction() {
          return (
            /* binding */
            _AsyncAction
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Action */
      22901);

      var _AsyncAction = /*#__PURE__*/function (_Action__WEBPACK_IMPO) {
        _inherits(_AsyncAction, _Action__WEBPACK_IMPO);

        var _super7 = _createSuper(_AsyncAction);

        function _AsyncAction(scheduler, work) {
          var _this13;

          _classCallCheck(this, _AsyncAction);

          _this13 = _super7.call(this, scheduler, work);
          _this13.scheduler = scheduler;
          _this13.work = work;
          _this13.pending = false;
          return _this13;
        }

        _createClass(_AsyncAction, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (this.closed) {
              return this;
            }

            this.state = state;
            var id = this.id;
            var scheduler = this.scheduler;

            if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, delay);
            }

            this.pending = true;
            this.delay = delay;
            this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
            return this;
          }
        }, {
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            return setInterval(scheduler.flush.bind(scheduler, this), delay);
          }
        }, {
          key: "recycleAsyncId",
          value: function recycleAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && this.delay === delay && this.pending === false) {
              return id;
            }

            clearInterval(id);
            return undefined;
          }
        }, {
          key: "execute",
          value: function execute(state, delay) {
            if (this.closed) {
              return new Error('executing a cancelled action');
            }

            this.pending = false;

            var error = this._execute(state, delay);

            if (error) {
              return error;
            } else if (this.pending === false && this.id != null) {
              this.id = this.recycleAsyncId(this.scheduler, this.id, null);
            }
          }
        }, {
          key: "_execute",
          value: function _execute(state, delay) {
            var errored = false;
            var errorValue = undefined;

            try {
              this.work(state);
            } catch (e) {
              errored = true;
              errorValue = !!e && e || new Error(e);
            }

            if (errored) {
              this.unsubscribe();
              return errorValue;
            }
          }
        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var id = this.id;
            var scheduler = this.scheduler;
            var actions = scheduler.actions;
            var index = actions.indexOf(this);
            this.work = null;
            this.state = null;
            this.pending = false;
            this.scheduler = null;

            if (index !== -1) {
              actions.splice(index, 1);
            }

            if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, null);
            }

            this.delay = null;
          }
        }]);

        return _AsyncAction;
      }(_Action__WEBPACK_IMPORTED_MODULE_0__.Action); //# sourceMappingURL=AsyncAction.js.map

      /***/

    },

    /***/
    4548:
    /*!*************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsyncScheduler": function AsyncScheduler() {
          return (
            /* binding */
            _AsyncScheduler
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Scheduler */
      2217);

      var _AsyncScheduler = /*#__PURE__*/function (_Scheduler__WEBPACK_I) {
        _inherits(_AsyncScheduler, _Scheduler__WEBPACK_I);

        var _super8 = _createSuper(_AsyncScheduler);

        function _AsyncScheduler(SchedulerAction) {
          var _this14;

          var now = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now;

          _classCallCheck(this, _AsyncScheduler);

          _this14 = _super8.call(this, SchedulerAction, function () {
            if (_AsyncScheduler.delegate && _AsyncScheduler.delegate !== _assertThisInitialized(_this14)) {
              return _AsyncScheduler.delegate.now();
            } else {
              return now();
            }
          });
          _this14.actions = [];
          _this14.active = false;
          _this14.scheduled = undefined;
          return _this14;
        }

        _createClass(_AsyncScheduler, [{
          key: "schedule",
          value: function schedule(work) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var state = arguments.length > 2 ? arguments[2] : undefined;

            if (_AsyncScheduler.delegate && _AsyncScheduler.delegate !== this) {
              return _AsyncScheduler.delegate.schedule(work, delay, state);
            } else {
              return _get(_getPrototypeOf(_AsyncScheduler.prototype), "schedule", this).call(this, work, delay, state);
            }
          }
        }, {
          key: "flush",
          value: function flush(action) {
            var actions = this.actions;

            if (this.active) {
              actions.push(action);
              return;
            }

            var error;
            this.active = true;

            do {
              if (error = action.execute(action.state, action.delay)) {
                break;
              }
            } while (action = actions.shift());

            this.active = false;

            if (error) {
              while (action = actions.shift()) {
                action.unsubscribe();
              }

              throw error;
            }
          }
        }]);

        return _AsyncScheduler;
      }(_Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler); //# sourceMappingURL=AsyncScheduler.js.map

      /***/

    },

    /***/
    99403:
    /*!**********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/QueueAction.js ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "QueueAction": function QueueAction() {
          return (
            /* binding */
            _QueueAction
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncAction */
      401);

      var _QueueAction = /*#__PURE__*/function (_AsyncAction__WEBPACK) {
        _inherits(_QueueAction, _AsyncAction__WEBPACK);

        var _super9 = _createSuper(_QueueAction);

        function _QueueAction(scheduler, work) {
          var _this15;

          _classCallCheck(this, _QueueAction);

          _this15 = _super9.call(this, scheduler, work);
          _this15.scheduler = scheduler;
          _this15.work = work;
          return _this15;
        }

        _createClass(_QueueAction, [{
          key: "schedule",
          value: function schedule(state) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (delay > 0) {
              return _get(_getPrototypeOf(_QueueAction.prototype), "schedule", this).call(this, state, delay);
            }

            this.delay = delay;
            this.state = state;
            this.scheduler.flush(this);
            return this;
          }
        }, {
          key: "execute",
          value: function execute(state, delay) {
            return delay > 0 || this.closed ? _get(_getPrototypeOf(_QueueAction.prototype), "execute", this).call(this, state, delay) : this._execute(state, delay);
          }
        }, {
          key: "requestAsyncId",
          value: function requestAsyncId(scheduler, id) {
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            if (delay !== null && delay > 0 || delay === null && this.delay > 0) {
              return _get(_getPrototypeOf(_QueueAction.prototype), "requestAsyncId", this).call(this, scheduler, id, delay);
            }

            return scheduler.flush(this);
          }
        }]);

        return _QueueAction;
      }(_AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction); //# sourceMappingURL=QueueAction.js.map

      /***/

    },

    /***/
    40099:
    /*!*************************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/QueueScheduler.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "QueueScheduler": function QueueScheduler() {
          return (
            /* binding */
            _QueueScheduler
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsyncScheduler */
      4548);

      var _QueueScheduler = /*#__PURE__*/function (_AsyncScheduler__WEBP) {
        _inherits(_QueueScheduler, _AsyncScheduler__WEBP);

        var _super10 = _createSuper(_QueueScheduler);

        function _QueueScheduler() {
          _classCallCheck(this, _QueueScheduler);

          return _super10.apply(this, arguments);
        }

        return _QueueScheduler;
      }(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler); //# sourceMappingURL=QueueScheduler.js.map

      /***/

    },

    /***/
    29661:
    /*!****************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/scheduler/queue.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "queueScheduler": function queueScheduler() {
          return (
            /* binding */
            _queueScheduler
          );
        },

        /* harmony export */
        "queue": function queue() {
          return (
            /* binding */
            _queue
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _QueueAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./QueueAction */
      99403);
      /* harmony import */


      var _QueueScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./QueueScheduler */
      40099);

      var _queueScheduler = new _QueueScheduler__WEBPACK_IMPORTED_MODULE_0__.QueueScheduler(_QueueAction__WEBPACK_IMPORTED_MODULE_1__.QueueAction);

      var _queue = _queueScheduler; //# sourceMappingURL=queue.js.map

      /***/
    },

    /***/
    50367:
    /*!*********************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/prestart-dashboard/prestart-dashboard-routing.module.ts ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrestartDashboardPageRoutingModule": function PrestartDashboardPageRoutingModule() {
          return (
            /* binding */
            _PrestartDashboardPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _prestart_dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./prestart-dashboard.page */
      15476);

      var routes = [{
        path: '',
        component: _prestart_dashboard_page__WEBPACK_IMPORTED_MODULE_0__.PrestartDashboardPage
      } // {
      //   path: 'telehandler',
      //   loadChildren: () => import('../../prestart/telehandler/telehandler.module').then(m => m.TelehandlerPageModule)
      // }
      ];

      var _PrestartDashboardPageRoutingModule = function PrestartDashboardPageRoutingModule() {
        _classCallCheck(this, PrestartDashboardPageRoutingModule);
      };

      _PrestartDashboardPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PrestartDashboardPageRoutingModule);
      /***/
    },

    /***/
    8492:
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/prestart-dashboard/prestart-dashboard.module.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrestartDashboardPageModule": function PrestartDashboardPageModule() {
          return (
            /* binding */
            _PrestartDashboardPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _prestart_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./prestart-dashboard-routing.module */
      50367);
      /* harmony import */


      var _prestart_dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prestart-dashboard.page */
      15476);
      /* harmony import */


      var src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared-module/shared-module.module */
      69270);
      /* harmony import */


      var angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-draggable-droppable */
      31369);

      var _PrestartDashboardPageModule = function PrestartDashboardPageModule() {
        _classCallCheck(this, PrestartDashboardPageModule);
      };

      _PrestartDashboardPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _prestart_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrestartDashboardPageRoutingModule, angular_draggable_droppable__WEBPACK_IMPORTED_MODULE_8__.DragAndDropModule, src_app_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_2__.SharedModuleModule],
        declarations: [_prestart_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.PrestartDashboardPage]
      })], _PrestartDashboardPageModule);
      /***/
    },

    /***/
    15476:
    /*!***********************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/prestart-dashboard/prestart-dashboard.page.ts ***!
      \***********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PrestartDashboardPage": function PrestartDashboardPage() {
          return (
            /* binding */
            _PrestartDashboardPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_prestart_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./prestart-dashboard.page.html */
      66767);
      /* harmony import */


      var _prestart_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./prestart-dashboard.page.scss */
      41209);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/global-service/global.service */
      89985);
      /* harmony import */


      var src_app_services_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/toast-service/toast.service */
      45311);

      var _PrestartDashboardPage = /*#__PURE__*/function () {
        function PrestartDashboardPage(globalService, toastService) {
          _classCallCheck(this, PrestartDashboardPage);

          this.globalService = globalService;
          this.toastService = toastService;
          this.pName = 'Prestart';
          this.loggedInUser = "";
          this.menuData = [];
          this.rowId = '';
        }

        _createClass(PrestartDashboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loggedInUser = JSON.parse(localStorage.getItem('userDetails'));
            this.loadFavoriteList();
          }
        }, {
          key: "loadFavoriteList",
          value: function loadFavoriteList() {
            var _this16 = this;

            this.globalService.getData('PrestartMenu/get_PrestartMenu').subscribe(function (result) {
              if (result['status']) {
                _this16.menuData = result['data']['menu'].sort(function (a, b) {
                  return (// console.log(a.original_postion, b.original_postion)
                    // console.log(a['original_position'], b['original_position'])
                    parseInt(a['original_postion']) - parseInt(b['original_postion'])
                  );
                });
                _this16.rowId = result['data']['id'];
              } else {
                _this16.menuData = [];
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "onFavorite",
          value: function onFavorite(tabname, val) {
            var _this17 = this;

            console.log('this.menuData 1', this.menuData);
            this.menuData.filter(function (ele) {
              if (ele.menuName == tabname) {
                ele.favorite = val;
              }
            });
            console.log('this.menuData 2', this.menuData);
            var data = {
              formData: {
                "id": this.rowId,
                "menu": this.menuData
              }
            };
            this.globalService.postData('PrestartMenu/submit', data).subscribe(function (result) {
              if (result['status']) {
                if (val == true) {
                  _this17.toastService.toast('This form is added in your favorite list.', 'success');
                } else if (val == false) {
                  _this17.toastService.toast('This form is removed from your favorite list.', 'success');
                }
              }
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return PrestartDashboardPage;
      }();

      _PrestartDashboardPage.ctorParameters = function () {
        return [{
          type: src_app_services_global_service_global_service__WEBPACK_IMPORTED_MODULE_2__.GlobalService
        }, {
          type: src_app_services_toast_service_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService
        }];
      };

      _PrestartDashboardPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-prestart-dashboard',
        template: _raw_loader_prestart_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_prestart_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PrestartDashboardPage);
      /***/
    },

    /***/
    41209:
    /*!*************************************************************************************************!*\
      !*** ./src/app/pages/home/safety-menu/prestart/prestart-dashboard/prestart-dashboard.page.scss ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ":host {\n  display: flex;\n}\n\n[mwlDraggable] {\n  background-color: red;\n  width: 200px;\n  height: 200px;\n  position: relative;\n  z-index: 2;\n  float: left;\n  margin-right: 10px;\n  cursor: move;\n}\n\n[mwlDroppable] {\n  background-color: green;\n  width: 400px;\n  height: 400px;\n  z-index: 1;\n  position: relative;\n  top: 50px;\n  left: 100px;\n}\n\n.validate-drop {\n  left: 150px;\n}\n\n[mwlDraggable],\n[mwlDroppable] {\n  color: white;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.drop-over-active {\n  border: dashed 1px black;\n  background-color: lightgreen;\n}\n\n.drag-active {\n  z-index: 3;\n}\n\n.floating-toolbar {\n  position: absolute;\n  top: 140px;\n  z-index: 2;\n  width: 250px;\n  height: 75px;\n  background: yellow;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.floating-toolbar-1 {\n  left: 600px;\n}\n\n.floating-toolbar-2 {\n  left: 1050px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXN0YXJ0LWRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0FBQ0o7O0FBRUU7O0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFRTtFQUNFLHdCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFRTtFQUNFLFVBQUE7QUFDSjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSiIsImZpbGUiOiJwcmVzdGFydC1kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgW213bERyYWdnYWJsZV0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGN1cnNvcjogbW92ZTtcclxuICB9XHJcbiAgXHJcbiAgW213bERyb3BwYWJsZV0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNTBweDtcclxuICAgIGxlZnQ6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICAudmFsaWRhdGUtZHJvcCB7XHJcbiAgICBsZWZ0OiAxNTBweDtcclxuICB9XHJcbiAgXHJcbiAgW213bERyYWdnYWJsZV0sXHJcbiAgW213bERyb3BwYWJsZV0ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Atb3Zlci1hY3RpdmUge1xyXG4gICAgYm9yZGVyOiBkYXNoZWQgMXB4IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICB9XHJcbiAgXHJcbiAgLmRyYWctYWN0aXZlIHtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbG9hdGluZy10b29sYmFyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTQwcHg7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgYmFja2dyb3VuZDogeWVsbG93O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmZsb2F0aW5nLXRvb2xiYXItMSB7XHJcbiAgICBsZWZ0OiA2MDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZsb2F0aW5nLXRvb2xiYXItMiB7XHJcbiAgICBsZWZ0OiAxMDUwcHg7XHJcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    66767:
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/safety-menu/prestart/prestart-dashboard/prestart-dashboard.page.html ***!
      \***************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <app-header [pageName]=\"pName\"></app-header>\n  <div class=\"container\">\n\n    <!-- <ion-button class=\"btn\" *ngFor=\"let tabVal of menuData\">\n      <ion-row>\n        <ion-col size-lg=\"10\" size-md=\"10\" size-sm=\"10\" size-xl=\"10\" size-xs=\"10\" [routerLink]=\"tabVal.route\">\n          {{tabVal.menuName}}\n        </ion-col>\n        <ion-col size-lg=\"2\" size-md=\"2\" size-sm=\"2\" size-xl=\"2\" size-xs=\"2\" title=\"Remove from favorite\"\n          class=\"favorite-parent\" *ngIf=\"tabVal.favorite == true || tabVal.favorite == 'true'\"\n          (click)=\"onFavorite(tabVal.menuName, false)\">\n          <ion-icon name=\"heart\" class=\"favorite\"></ion-icon>\n        </ion-col>\n        <ion-col size-lg=\"2\" size-md=\"2\" size-sm=\"2\" size-xl=\"2\" size-xs=\"2\" title=\"Add to favorite\"\n          class=\"favorite-parent\" *ngIf=\"tabVal.favorite == false || tabVal.favorite == 'false'\"\n          (click)=\"onFavorite(tabVal.menuName, true)\">\n          <ion-icon name=\"heart-outline\" class=\"favorite\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-button> -->\n\n\n    <ion-row>\n      <ion-col size-lg=\"3\" size-md=\"3\"></ion-col>\n      <ion-col size-lg=\"6\" size-md=\"6\" size-sm=\"12\" size-xl=\"6\" size-xs=\"12\">\n        <ion-button class=\"btn\" *ngFor=\"let tabVal of menuData\">\n          <ion-row>\n            <ion-col size-lg=\"10\" size-md=\"10\" size-sm=\"10\" size-xl=\"10\" size-xs=\"10\" [routerLink]=\"tabVal.route\">\n              {{tabVal.menuName}}\n            </ion-col>\n            <ion-col size-lg=\"2\" size-md=\"2\" size-sm=\"2\" size-xl=\"2\" size-xs=\"2\" title=\"Remove from favorite\"\n              class=\"favorite-parent\" *ngIf=\"tabVal.favorite == true || tabVal.favorite == 'true'\"\n              (click)=\"onFavorite(tabVal.menuName, false)\">\n              <ion-icon name=\"heart\" class=\"favorite\"></ion-icon>\n            </ion-col>\n            <ion-col size-lg=\"2\" size-md=\"2\" size-sm=\"2\" size-xl=\"2\" size-xs=\"2\" title=\"Add to favorite\"\n              class=\"favorite-parent\" *ngIf=\"tabVal.favorite == false || tabVal.favorite == 'false'\"\n              (click)=\"onFavorite(tabVal.menuName, true)\">\n              <ion-icon name=\"heart-outline\" class=\"favorite\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-button>\n      </ion-col>\n      <ion-col size-lg=\"3\" size-md=\"3\"></ion-col>\n    </ion-row>\n\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_home_safety-menu_prestart_prestart-dashboard_prestart-dashboard_module_ts-es5.js.map