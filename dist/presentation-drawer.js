(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("presentation-drawer", [], factory);
	else if(typeof exports === 'object')
		exports["presentation-drawer"] = factory();
	else
		root["presentation-drawer"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash.bind/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.bind/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_BOUND_FLAG = 4,
    CURRY_FLAG = 8,
    CURRY_RIGHT_FLAG = 16,
    PARTIAL_FLAG = 32,
    PARTIAL_RIGHT_FLAG = 64,
    ARY_FLAG = 128,
    REARG_FLAG = 256,
    FLIP_FLAG = 512;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [['ary', ARY_FLAG], ['bind', BIND_FLAG], ['bindKey', BIND_KEY_FLAG], ['curry', CURRY_FLAG], ['curryRight', CURRY_RIGHT_FLAG], ['flip', FLIP_FLAG], ['partial', PARTIAL_FLAG], ['partialRight', PARTIAL_RIGHT_FLAG], ['rearg', REARG_FLAG]];

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
    reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      result++;
    }
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var objectCreate = Object.create;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/* Used to set `toString` methods. */
var defineProperty = function () {
  var func = getNative(Object, 'defineProperty'),
      name = getNative.name;

  return name && name.length > 2 ? func : undefined;
}();

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function () {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0:
        return new Ctor();
      case 1:
        return new Ctor(args[0]);
      case 2:
        return new Ctor(args[0], args[1]);
      case 3:
        return new Ctor(args[0], args[1], args[2]);
      case 4:
        return new Ctor(args[0], args[1], args[2], args[3]);
      case 5:
        return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7:
        return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
    }
    var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & ARY_FLAG,
      isBind = bitmask & BIND_FLAG,
      isBindKey = bitmask & BIND_KEY_FLAG,
      isCurried = bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG),
      isFlip = bitmask & FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = this && this !== root && this instanceof wrapper ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG;
  bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

  if (!(bitmask & CURRY_BOUND_FLAG)) {
    bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
  }

  var result = wrapFunc(func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity);
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *  The bitmask may be composed of the following flags:
 *     1 - `_.bind`
 *     2 - `_.bindKey`
 *     4 - `_.curry` or `_.curryRight` of a bound function
 *     8 - `_.curry`
 *    16 - `_.curryRight`
 *    32 - `_.partial`
 *    64 - `_.partialRight`
 *   128 - `_.rearg`
 *   256 - `_.ary`
 *   512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }

  var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] == null ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (CURRY_FLAG | CURRY_RIGHT_FLAG)) {
    bitmask &= ~(CURRY_FLAG | CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == CURRY_FLAG || bitmask == CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  return setWrapToString(result, func, bitmask);
}

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length,
      lastIndex = length - 1;

  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
var setWrapToString = !defineProperty ? identity : function (wrapper, reference, bitmask) {
  var source = reference + '';
  return defineProperty(wrapper, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)))
  });
};

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function (pair) {
    var value = '_.' + pair[0];
    if (bitmask & pair[1] && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = baseRest(function (func, thisArg, partials) {
  var bitmask = BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= PARTIAL_FLAG;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? remainder ? result - remainder : result : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function () {
    return value;
  };
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.clone/index.js":
/*!********************************************!*\
  !*** ./node_modules/lodash.clone/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor());
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor());
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function (value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag:case float64Tag:
    case int8Tag:case int16Tag:case int32Tag:
    case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, false, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = clone;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.defaults/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.defaults/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Used by `_.defaults` to customize its `_.assignIn` use.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function assignInDefaults(objValue, srcValue, key, object) {
  if (objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
    return srcValue;
  }
  return objValue;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    object[key] = value;
  }
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function (object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function (args) {
  args.push(undefined, assignInDefaults);
  return apply(assignInWith, undefined, args);
});

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = defaults;

/***/ }),

/***/ "./node_modules/lodash.defer/index.js":
/*!********************************************!*\
  !*** ./node_modules/lodash.defer/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number} Returns the timer id.
 */
function baseDelay(func, wait, args) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return setTimeout(function () {
    func.apply(undefined, args);
  }, wait);
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Defers invoking the `func` until the current call stack has cleared. Any
 * additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to defer.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.defer(function(text) {
 *   console.log(text);
 * }, 'deferred');
 * // => Logs 'deferred' after one or more milliseconds.
 */
var defer = baseRest(function (func, args) {
  return baseDelay(func, 1, args);
});

module.exports = defer;

/***/ }),

/***/ "./node_modules/lodash.escape/index.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash.escape/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match HTML entities and HTML characters. */
var reUnescapedHtml = /[&<>"'`]/g,
    reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

/** Used to map characters to HTML entities. */
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '`': '&#96;'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function (key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.escape` to convert characters to HTML entities.
 *
 * @private
 * @param {string} chr The matched character to escape.
 * @returns {string} Returns the escaped character.
 */
var escapeHtmlChar = basePropertyOf(htmlEscapes);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Converts the characters "&", "<", ">", '"', "'", and "\`" in `string` to
 * their corresponding HTML entities.
 *
 * **Note:** No other characters are escaped. To escape additional
 * characters use a third-party library like [_he_](https://mths.be/he).
 *
 * Though the ">" character is escaped for symmetry, characters like
 * ">" and "/" don't need escaping in HTML and have no special meaning
 * unless they're part of a tag or unquoted attribute value. See
 * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
 * (under "semi-related fun fact") for more details.
 *
 * Backticks are escaped because in IE < 9, they can break out of
 * attribute values or HTML comments. See [#59](https://html5sec.org/#59),
 * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
 * [#133](https://html5sec.org/#133) of the
 * [HTML5 Security Cheatsheet](https://html5sec.org/) for more details.
 *
 * When working with HTML you should always
 * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
 * XSS vectors.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 * @example
 *
 * _.escape('fred, barney, & pebbles');
 * // => 'fred, barney, &amp; pebbles'
 */
function escape(string) {
  string = toString(string);
  return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
}

module.exports = escape;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.has/index.js":
/*!******************************************!*\
  !*** ./node_modules/lodash.has/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function (string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function () {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash.isempty/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.isempty/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap');

/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function (value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (isArrayLike(value) && (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' || isBuffer(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (nonEnumShadows || isPrototype(value)) {
    return !nativeKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEmpty;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.iteratee/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.iteratee/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}();

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : undefined;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {boolean} [bitmask] The bitmask of comparison flags.
 *  The bitmask may be composed of the following flags:
 *     1 - Unordered comparison
 *     2 - Partial comparison
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !isHostObject(object),
      othIsObj = othTag == objectTag && !isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function (object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function (object) {
    var objValue = get(object, path);
    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function (object) {
    return baseGet(object, path);
  };
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor());
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor());
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache() : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!seen.has(othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
          return seen.add(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
      objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
  getTag = function (value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag:case float64Tag:
    case int8Tag:case int16Tag:case int32Tag:
    case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function (string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function () {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that invokes `func` with the arguments of the created
 * function. If `func` is a property name, the created function returns the
 * property value for a given element. If `func` is an array or object, the
 * created function returns `true` for elements that contain the equivalent
 * source properties, otherwise it returns `false`.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Util
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @returns {Function} Returns the callback.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, _.iteratee(['user', 'fred']));
 * // => [{ 'user': 'fred', 'age': 40 }]
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, _.iteratee('user'));
 * // => ['barney', 'fred']
 *
 * // Create custom iteratee shorthands.
 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
 *     return func.test(string);
 *   };
 * });
 *
 * _.filter(['abc', 'def'], /ef/);
 * // => ['def']
 */
function iteratee(func) {
  return baseIteratee(typeof func == 'function' ? func : baseClone(func, true));
}

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = iteratee;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash.result/index.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash.result/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/** Built-in value references. */
var Symbol = root.Symbol,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function (string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function () {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * This method is like `_.get` except that if the resolved value is a
 * function it's invoked with the `this` binding of its parent object and
 * its result is returned.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to resolve.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
 *
 * _.result(object, 'a[0].b.c1');
 * // => 3
 *
 * _.result(object, 'a[0].b.c2');
 * // => 4
 *
 * _.result(object, 'a[0].b.c3', 'default');
 * // => 'default'
 *
 * _.result(object, 'a[0].b.c3', _.constant('default'));
 * // => 'default'
 */
function result(object, path, defaultValue) {
  path = isKey(path, object) ? [path] : castPath(path);

  var index = -1,
      length = path.length;

  // Ensure the loop is entered when path is empty.
  if (!length) {
    object = undefined;
    length = 1;
  }
  while (++index < length) {
    var value = object == null ? undefined : object[toKey(path[index])];
    if (value === undefined) {
      index = length;
      value = defaultValue;
    }
    object = isFunction(value) ? value.call(object) : value;
  }
  return object;
}

module.exports = result;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/next-core-model/dist/core-next-model.js":
/*!**************************************************************!*\
  !*** ./node_modules/next-core-model/dist/core-next-model.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function (e, t) {
   true ? module.exports = t(__webpack_require__(/*! lodash.clone */ "./node_modules/lodash.clone/index.js"), __webpack_require__(/*! lodash.result */ "./node_modules/lodash.result/index.js"), __webpack_require__(/*! lodash.isempty */ "./node_modules/lodash.isempty/index.js"), __webpack_require__(/*! lodash.has */ "./node_modules/lodash.has/index.js"), __webpack_require__(/*! lodash.defaults */ "./node_modules/lodash.defaults/index.js"), __webpack_require__(/*! lodash.iteratee */ "./node_modules/lodash.iteratee/index.js"), __webpack_require__(/*! lodash.defer */ "./node_modules/lodash.defer/index.js"), __webpack_require__(/*! lodash.escape */ "./node_modules/lodash.escape/index.js")) : undefined;
}(undefined, function (e, t, r, i, n, s, o, l) {
  return function (e) {
    var t = {};function r(i) {
      if (t[i]) return t[i].exports;var n = t[i] = { i: i, l: !1, exports: {} };return e[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
    }return r.m = e, r.c = t, r.d = function (e, t, i) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var i = Object.create(null);if (r.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var n in e) r.d(i, n, function (t) {
        return e[t];
      }.bind(null, n));return i;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "/dist/", r(r.s = 6);
  }([function (t, r) {
    t.exports = e;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = r(2),
        n = r(3),
        s = r(4);const o = r(0),
          l = r(9),
          a = r(10),
          u = r(11),
          c = r(0),
          h = r(12),
          d = r(13),
          f = r(14),
          p = r(15),
          m = (e, t) => {
      if (e) {
        const r = t.error;t.error = i => {
          r && r.call(t.context, e, i, t), e.trigger("error", e, i, t);
        };
      }
    };t.default = class extends i.AugmentedObject {
      constructor(e, t, ...r) {
        let i;super(t), this.id = 0, this.idAttribute = "id", this.cidPrefix = "c", this.defaults = {}, this.validationError = null, this.urlRoot = "", this._pending = !1, this._changing = !1, this._previousAttributes = null, this._attributes = e || {}, t || (t = {}), this.schema = null, this.validationMessages = { valid: !0 }, t && t.schema && (this.schema = t.schema), this.preinitialize(r), this.cid = (0, n.uniqueId)(this.cidPrefix), t && t.collection && (this.collection = t.collection), t && t.parse && (i = this.parse(i, t) || {}), this.defaults = l(this, "defaults"), i = h((0, n.extend)({}, this.defaults, i), this.defaults), this.set(i, t), this.changed = {}, this.initialize(r);
      }preinitialize(...e) {}initialize(...e) {}get(e) {
        return this._attributes[e];
      }set(e, t, r) {
        if (null === e) return this;let i;if ("object" == typeof e ? (i = e, r = t) : (i = {})[e] = t, r || (r = {}), !this._validate(i, r)) return console.warn("Model did not validate"), !1;const n = r.unset,
              s = r.silent,
              l = [];let a = this._changing;this._changing = !0, a || (this._previousAttributes = o(this._attributes), this.changed = {});let u = this._attributes,
            h = this.changed;const d = this._previousAttributes;let f;for (f in i) t = i[f], c(u[f], t) || l.push(f), c(d[f], t) ? delete h[f] : h[f] = t, n ? delete u[f] : u[f] = t;if (this.idAttribute in i && (this.id = this.get(this.idAttribute)), !s) {
          l.length && (this._pending = r);let e = 0;for (e = 0; e < l.length; e++) this.trigger("change:" + l[e], this, u[l[e]], r);
        }if (a) return this;if (!s) for (; this._pending;) r = this._pending, this._pending = !1, this.trigger("change", this, r);return this._pending = !1, this._changing = !1, this;
      }escape(e) {
        return p(this.get(attr));
      }has(e) {
        return null !== this.get(attr);
      }matches(e) {
        return !!d(e, this)(this._attributes);
      }unset(e, t) {
        return this.set(e, void 0, (0, n.extend)({}, t, { unset: !0 }));
      }clear(e) {
        let t = {};for (let e in this._attributes) t[e] = void 0;return this.set(t, (0, n.extend)({}, e, { unset: !0 }));
      }toJSON() {
        return o(this._attributes);
      }fetch(e) {
        let t = this,
            r = (e = (0, n.extend)({ parse: !0 }, e)).success;return e.success = i => {
          let n = e.parse ? t.parse(i, e) : i;if (!t.set(n, e)) return !1;r && r.call(e.context, t, i, e), t.trigger("sync", t, i, e);
        }, m(this, e), this.sync("read", this, e);
      }save(e, t, r) {
        let i;null == e || "object" == typeof e ? (i = e, r = t) : (i = {})[e] = t;let s = (r = (0, n.extend)({ validate: !0, parse: !0 }, r)).wait;if (i && !s) {
          if (!this.set(i, r)) return !1;
        } else if (!this._validate(i, r)) return !1;let o = this,
            l = r.success,
            a = this._attributes;r.success = e => {
          o.attributes = a;let t = r.parse ? o.parse(e, r) : e;if (s && (t = (0, n.extend)({}, i, t)), t && !o.set(t, r)) return !1;l && l.call(r.context, o, e, r), o.trigger("sync", o, e, r);
        }, m(this, r), i && s && (this._attributes = (0, n.extend)({}, a, i));let u = this.isNew() ? "create" : r.patch ? "patch" : "update";"patch" !== u || r.attrs || (r.attrs = i);let c = this.sync(u, this, r);return this._attributes = a, c;
      }destroy(e) {
        let t = this,
            r = (e = e ? o(e) : {}).success,
            i = e.wait,
            n = () => {
          t.stopListening(), t.trigger("destroy", t, t.collection, e);
        };e.success = s => {
          i && n(), r && r.call(e.context, t, s, e), t.isNew() || t.trigger("sync", t, s, e);
        };let s = !1;return this.isNew() ? f(e.success) : (m(this, e), s = this.sync("delete", this, e)), i || n(), s;
      }url() {
        let e = l(this, "urlRoot") || l(this.collection, "url") || urlError();if (this.isNew()) return e;let t = this.get(this.idAttribute);return e.replace(/[^\/]$/, "$&/") + encodeURIComponent(t);
      }keys() {
        return Object.keys(this._attributes);
      }values() {
        return Object.values(this._attributes);
      }parse(e, t) {
        return e;
      }clone() {
        return new this.constructor(this._attributes);
      }isNew() {
        return !this.has(this.idAttribute);
      }hasChanged(e) {
        return null == e ? !a(this.changed) : u(this.changed, e);
      }changedAttributes(e) {
        if (!e) return !!this.hasChanged() && o(this.changed);let t,
            r = this._changing ? this._previousAttributes : this._attributes,
            i = {};for (let n in e) {
          let s = e[n];c(r[n], s) || (i[n] = s, t = !0);
        }return !!t && i;
      }previous(e) {
        return null != e && this._previousAttributes ? this._previousAttributes[e] : null;
      }previousAttributes() {
        return o(this._previousAttributes);
      }supportsValidation() {
        return null !== this.schema;
      }isValid(e) {
        const t = this._validate({}, (0, n.extend)({}, e, { validate: !0 }));return t ? (this.validate(), this.validationMessages.valid) : t;
      }validate() {
        this._validationFramework || (this._validationFramework = new s.ValidationFramework());const e = this._validationFramework;return this.supportsValidation() && e.supportsValidation() ? this.validationMessages = e.validate(this.toJSON(), this.schema) : this.validationMessages.valid = !0, this.validationMessages;
      }getValidationMessages() {
        const e = [];if (this.validationMessages && this.validationMessages.errors) {
          const r = this.validationMessages.errors.length;var t = 0;for (t = 0; t < r; t++) e.push(this.validationMessages.errors[t].message + " from " + this.validationMessages.errors[t].dataPath);
        }return e;
      }sync(e, t, r) {}reset(e) {
        this.clear(), e && this.set(e);
      }isEmpty() {
        return !this._attributes || 0 === Object.keys(this._attributes).length;
      }toString() {
        return JSON.stringify(this.toJSON());
      }fetch(e) {
        this.sync("read", this, e);
      }save(e) {
        this.sync("create", this, e);
      }update(e) {
        this.sync("update", this, e);
      }destroy(e) {
        this.sync("delete", this, e);
      }_validate(e, t) {
        if (t && (!t.validate || !this.validate)) return !0;const r = this.validate();return !!r.valid || (this.trigger("invalid", this, r, (0, n.extend)(t, { validationError: r })), !1);
      }
    };
  }, function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return function (e) {
        var t = {};function r(i) {
          if (t[i]) return t[i].exports;var n = t[i] = { i: i, l: !1, exports: {} };return e[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
        }return r.m = e, r.c = t, r.d = function (e, t, i) {
          r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
        }, r.r = function (e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }, r.t = function (e, t) {
          if (1 & t && (e = r(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var i = Object.create(null);if (r.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var n in e) r.d(i, n, function (t) {
            return e[t];
          }.bind(null, n));return i;
        }, r.n = function (e) {
          var t = e && e.__esModule ? function () {
            return e.default;
          } : function () {
            return e;
          };return r.d(t, "a", t), t;
        }, r.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }, r.p = "/dist/", r(r.s = 1);
      }([function (e, t, r) {
        Object.defineProperty(t, "__esModule", { value: !0 });const i = t.EVENT_SPLITTER = /\s+/,
              n = t.eventsApi = (e, t, r, s, o) => {
          let l,
              a = 0;if (r && "object" == typeof r) {
            void 0 !== s && "context" in o && void 0 === o.context && (o.context = s);for (l = Object.keys(r); a < l.length; a++) t = n(e, t, l[a], r[l[a]], o);
          } else if (r && i.test(r)) for (l = r.split(i); a < l.length; a++) t = e(t, l[a], s, o);else t = e(t, r, s, o);return t;
        },
              s = (t.internalOn = (e, t, r, i, o) => (e._events = n(s, e._events || {}, t, r, { context: i, ctx: e, listening: o }), o && ((e._listeners || (e._listeners = {}))[o.id] = o), e), t.onApi = (e, t, r, i) => {
          if (r) {
            const n = e[t] || (e[t] = []),
                  s = i.context,
                  o = i.ctx,
                  l = i.listening;l && l.count++, n.push({ callback: r, context: s, ctx: s || o, listening: l });
          }return e;
        }),
              o = (t.offApi = (e, t, r, i) => {
          if (!e) return;let n,
              s = 0;const o = i.context,
                l = i.listeners;if (!t && !r && !o) {
            const e = Object.keys(l);for (; s < e.length; s++) delete l[(n = l[e[s]]).id], delete n.listeningTo[n.objId];return;
          }let a = t ? [t] : Object.keys(e);for (; s < a.length; s++) {
            const i = e[t = a[s]];if (!i) break;const u = [];let c = 0;for (c = 0; c < i.length; c++) {
              const e = i[c];r && r !== e.callback && r !== e.callback._callback || o && o !== e.context ? u.push(e) : (n = e.listening) && 0 == --n.count && (delete l[n.id], delete n.listeningTo[n.objId]);
            }u.length ? e[t] = u : delete e[t];
          }return e;
        }, t.triggerApi = (e, t, r, i) => {
          if (e) {
            const r = e[t];let n = e.all;r && n && (n = n.slice()), r && o(r, i), n && o(n, [t].concat(i));
          }return e;
        }, t.triggerEvents = (e, t) => {
          let r,
              i = -1;const n = e.length,
                s = t[0],
                o = t[1],
                l = t[2];switch (t.length) {case 0:
              for (; ++i < n;) (r = e[i]).callback.call(r.ctx);return;case 1:
              for (; ++i < n;) (r = e[i]).callback.call(r.ctx, s);return;case 2:
              for (; ++i < n;) (r = e[i]).callback.call(r.ctx, s, o);return;case 3:
              for (; ++i < n;) (r = e[i]).callback.call(r.ctx, s, o, l);return;default:
              for (; ++i < n;) (r = e[i]).callback.apply(r.ctx, t);return;}
        });
      }, function (e, t, r) {
        var i = o(r(2)),
            n = o(r(5)),
            s = r(0);function o(e) {
          return e && e.__esModule ? e : { default: e };
        }e.exports.AugmentedObject = i.default, e.exports.Configuration = n.default, e.exports.eventsApi = s.eventsApi, e.exports.eventsApi = s.internalOn, e.exports.eventsApi = s.offApi, e.exports.eventsApi = s.triggerApi;
      }, function (e, t, r) {
        Object.defineProperty(t, "__esModule", { value: !0 });var i = r(3),
            n = r(0);const s = r(4);t.default = class {
          constructor(e) {
            e || (e = {}), this._options || (this._options = {}), Object.assign(this._options, e), e && e.events ? this._events = e.events : this._events = {}, this._listeningTo = {}, this._listenId = {}, this._listeners = {};
          }initialize(...e) {
            return this;
          }get options() {
            return this._options;
          }set options(e) {
            this._options = e;
          }get events() {
            return this._events;
          }set events(e) {
            this._events = e;
          }trigger(e, ...t) {
            if (this._events) {
              const r = Array.isArray(t) ? t : Array.from(t);(0, n.eventsApi)(n.triggerApi, this._events, e, void 0, r);
            }return this;
          }once(e, t, r) {
            const i = (0, n.eventsApi)(this._onceMap, {}, e, t, s(this.off, this));return "string" == typeof e && null == r && (t = void 0), this.on(i, t, r);
          }off(e, t, r) {
            return this._events && (this._events = (0, n.eventsApi)(n.offApi, this._events, e, t, { context: r, listeners: this._listeners })), this;
          }stopListening(e, t, r) {
            const i = this._listeningTo;if (i) {
              const n = e ? [e._listenId] : Object.keys(i);let s = 0;for (s = 0; s < n.length; s++) {
                const e = i[n[s]];if (!e) break;e.obj.off(t, r, this);
              }
            }return this;
          }on(e, t, r) {
            return (0, n.internalOn)(this, e, t, r);
          }listenTo(e, t, r) {
            if (e) {
              const s = e._listenId || (e._listenId = (0, i.uniqueId)("l")),
                    o = this._listeningTo || (this._listeningTo = {});let l = o[s];if (!l) {
                const t = this._listenId || (this._listenId = (0, i.uniqueId)("l"));l = o[s] = { obj: e, objId: s, id: t, listeningTo: o, count: 0 };
              }(0, n.internalOn)(e, t, r, this, l);
            }return this;
          }listenToOnce(e, t, r) {
            const i = (0, n.eventsApi)(this._onceMap, {}, t, r, s(this.stopListening, this, e));return this.listenTo(e, i);
          }_onceMap(e, t, r, n) {
            if (r) {
              const s = e[t] = (0, i.once)(() => {
                n(t, s), r.apply(this, arguments);
              });s._callback = r;
            }return e;
          }
        };
      }, function (e, t, r) {
        e.exports = function (e) {
          var t = {};function r(i) {
            if (t[i]) return t[i].exports;var n = t[i] = { i: i, l: !1, exports: {} };return e[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
          }return r.m = e, r.c = t, r.d = function (e, t, i) {
            r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
          }, r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
          }, r.t = function (e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var i = Object.create(null);if (r.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var n in e) r.d(i, n, function (t) {
              return e[t];
            }.bind(null, n));return i;
          }, r.n = function (e) {
            var t = e && e.__esModule ? function () {
              return e.default;
            } : function () {
              return e;
            };return r.d(t, "a", t), t;
          }, r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }, r.p = "/dist/", r(r.s = 3);
        }([function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => {
            const t = typeof e;return "function" === t || "object" === t && !!e;
          };
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => "[object Function]" == Object.prototype.toString.call(e);
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 });var i = arguments;t.default = (e, t) => {
            let r, n;if ("function" != typeof t) throw new TypeError(FUNC_ERROR_TEXT);return n = Number.parseInt(e), () => (--n > 0 && (r = t.apply(void 0, i)), n <= 1 && (t = void 0), r);
          };
        }, function (e, t, r) {
          var i = S(r(4)),
              n = S(r(1)),
              s = S(r(5)),
              o = S(r(6)),
              l = S(r(7)),
              a = S(r(8)),
              u = S(r(0)),
              c = S(r(9)),
              h = S(r(10)),
              d = S(r(11)),
              f = S(r(12)),
              p = S(r(13)),
              m = S(r(14)),
              g = S(r(15)),
              y = S(r(16)),
              v = S(r(2)),
              _ = S(r(17)),
              b = r(18),
              O = r(19),
              E = r(20),
              R = S(r(21)),
              M = S(r(22));function S(e) {
            return e && e.__esModule ? e : { default: e };
          }e.exports.shuffle = O.shuffle, e.exports.prettyPrint = O.prettyPrint, e.exports.binarySearch = O.binarySearch, e.exports.TransformerType = O.TransformerType, e.exports.Transformer = O.Transformer, e.exports.wrap = O.wrap, e.exports.filterObject = O.filterObject, e.exports.findByMatchingProperties = O.findByMatchingProperties, e.exports.sortObjects = E.sortObjects, e.exports.mergeSort = E.mergeSort, e.exports.quickSort = E.quickSort, e.exports.insertionSort = E.insertionSort, e.exports.bubbleSort = E.bubbleSort, e.exports.formatDate = R.default, e.exports.formatBinary = M.default, e.exports.isString = i.default, e.exports.isFunction = n.default, e.exports.extend = s.default, e.exports.pad = o.default, e.exports.uniqueId = l.default, e.exports.has = a.default, e.exports.isObject = u.default, e.exports.allKeys = c.default, e.exports.create = h.default, e.exports.result = d.default, e.exports.arrayHas = f.default, e.exports.exec = p.default, e.exports.isDefined = m.default, e.exports.some = g.default, e.exports.splice = y.default, e.exports.before = v.default, e.exports.once = _.default, e.exports.fibonacci = b.fibonacci, e.exports.fibonacciSequence = b.fibonacciSequence;
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => "string" == typeof e || !!e && "object" == typeof e && "[object String]" === Object.prototype.toString.call(e);
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (...e) => {
            let t = 0;const r = e.length;for (t = 1; t < r; t++) {
              let r;for (r in e[t]) e[t].hasOwnProperty(r) && (e[0][r] = e[t][r]);
            }return e[0];
          };
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t, r) => void 0 === t ? e : r ? `${e}${t}` : `${t}${e}`;
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 });let i = 0;t.default = e => `${e}${++i}`;
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t) => null !== e && hasOwnProperty.call(e, t);
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 });var i = function (e) {
            return e && e.__esModule ? e : { default: e };
          }(r(0));t.default = e => (0, i.default)(e) ? Object.getOwnPropertyNames(e) : [];
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 });var i = function (e) {
            return e && e.__esModule ? e : { default: e };
          }(r(0));t.default = (e, t) => {
            const r = (e => (0, i.default)(e) ? Object.create(e) : {})(e);return t && Object.assign(r, t), r;
          };
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 });var i = function (e) {
            return e && e.__esModule ? e : { default: e };
          }(r(1));t.default = (e, t) => {
            if (null === e) return;const r = e[t];return (0, i.default)(r) ? r.call(e) : r;
          };
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t) => -1 !== e.indexOf(t);
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t, ...r) => {
            const i = e.split("."),
                  n = i.pop(),
                  s = i.length;let o = 0;for (o = 0; o < s; o++) t = t[i[o]];return t[n].apply(t, r);
          };
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => void 0 !== e;
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t) => !!Array.isArray(e) && e.some(t);
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t, r) => {
            r = Math.min(Math.max(r, 0), e.length);let i = Array(e.length - r);const n = t.length;let s;for (s = 0; s < i.length; s++) i[s] = e[s + r];for (s = 0; s < n; s++) e[s + r] = t[s];for (s = 0; s < i.length; s++) e[s + n + r] = i[s];
          };
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 });var i = function (e) {
            return e && e.__esModule ? e : { default: e };
          }(r(2));t.default = e => (0, i.default)(2, e);
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 });const i = t.fibonacci = e => {
            const t = (1 + Math.sqrt(5)) / 2,
                  r = Math.pow(t, e) / Math.sqrt(5);return Math.round(r);
          };t.fibonacciSequence = e => {
            const t = [];let r = 0;for (r = 0; r < e; r++) t.push(i(r));return t;
          };
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 });var i = arguments;t.shuffle = e => {
            const t = e.slice(0);let r,
                i,
                n = 0;for (n = e.length - 1; n > 0; n--) i = Math.floor(Math.random() * (n + 1)), r = t[n], t[n] = t[i], t[i] = r;return t;
          }, t.prettyPrint = (e, t, r) => {
            let i = "\t";return t && (i = " ".repeat(r)), JSON.stringify(e, null, i);
          }, t.binarySearch = (e, t, r) => {
            let i,
                n,
                s = 0,
                o = e.length - 1;for (; s <= o;) if ((n = r(e[i = Math.floor((s + o) / 2)], t)) < 0) s = i + 1;else {
              if (!(n > 0)) return i;o = i - 1;
            }return null;
          };const n = t.TransformerType = {};n.STRING = Symbol("String"), n.INTEGER = Symbol("Integer"), n.NUMBER = Symbol("Number"), n.BOOLEAN = Symbol("Boolean"), n.ARRAY = Symbol("Array"), n.OBJECT = Symbol("Object"), n.NULL = Symbol("Null"), t.Transformer = class {
            constructor() {
              this.type = n;
            }static transform(e, t) {
              let r = null;switch (t) {case n.STRING:
                  r = "object" == typeof e ? JSON.stringify(e) : String(e);break;case n.INTEGER:
                  r = parseInt(e);break;case n.NUMBER:
                  r = Number(e);break;case n.BOOLEAN:
                  r = Boolean(e);break;case n.ARRAY:
                  Array.isArray(e) ? r = e : (r = [])[0] = e;break;case n.OBJECT:
                  "object" != typeof e ? (r = {})[e] = e : r = e;}return r;
            }static isType(e) {
              return null === e ? n.NULL : "string" == typeof e ? n.STRING : "number" == typeof e ? n.NUMBER : "boolean" == typeof e ? n.BOOLEAN : Array.isArray(e) ? n.ARRAY : "object" == typeof e ? n.OBJECT : void 0;
            }
          }, t.wrap = (e, t) => () => t.apply(void 0, [e].concat(Array.prototype.slice.call(i))), t.filterObject = (e, t) => {
            const r = {};if (e && t) {
              const i = t.length;let n = 0;for (n = 0; n < i; n++) r[t[n]] = e[t[n]];
            }return r;
          }, t.findByMatchingProperties = (e, t) => e.filter(e => Object.keys(t).every(r => e[r] === t[r]));
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.sortObjects = (e, t) => e.sort((e, r) => {
            const i = e[t],
                  n = r[t];return i < n ? -1 : i > n ? 1 : 0;
          });const i = t.mergeSort = e => {
            if (1 === e.length) return e;const t = Math.floor(e.length / 2),
                  r = e.slice(0, t),
                  s = e.slice(t);return n(i(r), i(s));
          },
                n = (e, t) => {
            let r = [],
                i = 0,
                n = 0;for (; i < e.length && n < t.length;) e[i] < t[n] ? (r.push(e[i]), i++) : (r.push(t[n]), n++);return r.concat(e.slice(i)).concat(t.slice(n));
          },
                s = t.quickSort = e => {
            if (0 === e.length) return [];let t = 1;const r = e.length,
                  i = [],
                  n = [],
                  o = e[0];for (t = 1; t < r; t++) e[t] < o ? i.push(e[t]) : n.push(e[t]);return s(i).concat(o, s(n));
          };t.insertionSort = e => {
            let t = [];if (e) {
              const r = (t = e.slice()).length;let i, n, s;for (i = 1; i < r; i++) {
                for (s = t[i], n = i - 1; n >= 0 && t[n] > s; n--) t[n + 1] = t[n];t[n + 1] = s;
              }
            }return t;
          }, t.bubbleSort = e => {
            let t = [];if (e) {
              let r, i, n;const s = (t = e.slice()).length - 1;do {
                for (r = !1, i = 0; i < s; i++) t[i] > t[i + 1] && (n = t[i], t[i] = t[i + 1], t[i + 1] = n, r = !0);
              } while (r);
            }return t;
          };
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => {
            const t = e.getFullYear(),
                  r = e.getMonth() + 1,
                  i = e.getDate(),
                  n = e.getHours(),
                  s = e.getMinutes();return e.getSeconds(), `${r}/${i}/${t} ${n % 12 || 12}:${s < 10 ? "0" + s : s}${n < 12 ? "am" : "pm"}`;
          };
        }, function (e, t, r) {
          Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t) => (e => {
            let t = 0,
                r = e,
                i = "";for (t = 0; t < 32; t++, i += String(r >>> 31), r <<= 1);return i;
          })(e).split("").reverse().join("").substring(0, t);
        }]);
      }, function (t, r) {
        t.exports = e;
      }, function (e, t, r) {
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { LoggerLevel: "error", MessageBundle: "Messages", AsynchronousQueueTimeout: 2e3, ApplicationInitProcessTimeout: 1e3 };
      }]);
    }(r(7));
  }, function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      var t = {};function r(i) {
        if (t[i]) return t[i].exports;var n = t[i] = { i: i, l: !1, exports: {} };return e[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
      }return r.m = e, r.c = t, r.d = function (e, t, i) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
      }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
      }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var i = Object.create(null);if (r.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var n in e) r.d(i, n, function (t) {
          return e[t];
        }.bind(null, n));return i;
      }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };return r.d(t, "a", t), t;
      }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, r.p = "/dist/", r(r.s = 3);
    }([function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => {
        const t = typeof e;return "function" === t || "object" === t && !!e;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => "[object Function]" == Object.prototype.toString.call(e);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var i = arguments;t.default = (e, t) => {
        let r, n;if ("function" != typeof t) throw new TypeError(FUNC_ERROR_TEXT);return n = Number.parseInt(e), () => (--n > 0 && (r = t.apply(void 0, i)), n <= 1 && (t = void 0), r);
      };
    }, function (e, t, r) {
      var i = S(r(4)),
          n = S(r(1)),
          s = S(r(5)),
          o = S(r(6)),
          l = S(r(7)),
          a = S(r(8)),
          u = S(r(0)),
          c = S(r(9)),
          h = S(r(10)),
          d = S(r(11)),
          f = S(r(12)),
          p = S(r(13)),
          m = S(r(14)),
          g = S(r(15)),
          y = S(r(16)),
          v = S(r(2)),
          _ = S(r(17)),
          b = r(18),
          O = r(19),
          E = r(20),
          R = S(r(21)),
          M = S(r(22));function S(e) {
        return e && e.__esModule ? e : { default: e };
      }e.exports.shuffle = O.shuffle, e.exports.prettyPrint = O.prettyPrint, e.exports.binarySearch = O.binarySearch, e.exports.TransformerType = O.TransformerType, e.exports.Transformer = O.Transformer, e.exports.wrap = O.wrap, e.exports.filterObject = O.filterObject, e.exports.findByMatchingProperties = O.findByMatchingProperties, e.exports.sortObjects = E.sortObjects, e.exports.mergeSort = E.mergeSort, e.exports.quickSort = E.quickSort, e.exports.insertionSort = E.insertionSort, e.exports.bubbleSort = E.bubbleSort, e.exports.formatDate = R.default, e.exports.formatBinary = M.default, e.exports.isString = i.default, e.exports.isFunction = n.default, e.exports.extend = s.default, e.exports.pad = o.default, e.exports.uniqueId = l.default, e.exports.has = a.default, e.exports.isObject = u.default, e.exports.allKeys = c.default, e.exports.create = h.default, e.exports.result = d.default, e.exports.arrayHas = f.default, e.exports.exec = p.default, e.exports.isDefined = m.default, e.exports.some = g.default, e.exports.splice = y.default, e.exports.before = v.default, e.exports.once = _.default, e.exports.fibonacci = b.fibonacci, e.exports.fibonacciSequence = b.fibonacciSequence;
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => "string" == typeof e || !!e && "object" == typeof e && "[object String]" === Object.prototype.toString.call(e);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (...e) => {
        let t = 0;const r = e.length;for (t = 1; t < r; t++) {
          let r;for (r in e[t]) e[t].hasOwnProperty(r) && (e[0][r] = e[t][r]);
        }return e[0];
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t, r) => void 0 === t ? e : r ? `${e}${t}` : `${t}${e}`;
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });let i = 0;t.default = e => `${e}${++i}`;
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t) => null !== e && hasOwnProperty.call(e, t);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var i = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(r(0));t.default = e => (0, i.default)(e) ? Object.getOwnPropertyNames(e) : [];
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var i = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(r(0));t.default = (e, t) => {
        const r = (e => (0, i.default)(e) ? Object.create(e) : {})(e);return t && Object.assign(r, t), r;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var i = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(r(1));t.default = (e, t) => {
        if (null === e) return;const r = e[t];return (0, i.default)(r) ? r.call(e) : r;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t) => -1 !== e.indexOf(t);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t, ...r) => {
        const i = e.split("."),
              n = i.pop(),
              s = i.length;let o = 0;for (o = 0; o < s; o++) t = t[i[o]];return t[n].apply(t, r);
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => void 0 !== e;
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t) => !!Array.isArray(e) && e.some(t);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t, r) => {
        r = Math.min(Math.max(r, 0), e.length);let i = Array(e.length - r);const n = t.length;let s;for (s = 0; s < i.length; s++) i[s] = e[s + r];for (s = 0; s < n; s++) e[s + r] = t[s];for (s = 0; s < i.length; s++) e[s + n + r] = i[s];
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var i = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(r(2));t.default = e => (0, i.default)(2, e);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });const i = t.fibonacci = e => {
        const t = (1 + Math.sqrt(5)) / 2,
              r = Math.pow(t, e) / Math.sqrt(5);return Math.round(r);
      };t.fibonacciSequence = e => {
        const t = [];let r = 0;for (r = 0; r < e; r++) t.push(i(r));return t;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var i = arguments;t.shuffle = e => {
        const t = e.slice(0);let r,
            i,
            n = 0;for (n = e.length - 1; n > 0; n--) i = Math.floor(Math.random() * (n + 1)), r = t[n], t[n] = t[i], t[i] = r;return t;
      }, t.prettyPrint = (e, t, r) => {
        let i = "\t";return t && (i = " ".repeat(r)), JSON.stringify(e, null, i);
      }, t.binarySearch = (e, t, r) => {
        let i,
            n,
            s = 0,
            o = e.length - 1;for (; s <= o;) if ((n = r(e[i = Math.floor((s + o) / 2)], t)) < 0) s = i + 1;else {
          if (!(n > 0)) return i;o = i - 1;
        }return null;
      };const n = t.TransformerType = {};n.STRING = Symbol("String"), n.INTEGER = Symbol("Integer"), n.NUMBER = Symbol("Number"), n.BOOLEAN = Symbol("Boolean"), n.ARRAY = Symbol("Array"), n.OBJECT = Symbol("Object"), n.NULL = Symbol("Null"), t.Transformer = class {
        constructor() {
          this.type = n;
        }static transform(e, t) {
          let r = null;switch (t) {case n.STRING:
              r = "object" == typeof e ? JSON.stringify(e) : String(e);break;case n.INTEGER:
              r = parseInt(e);break;case n.NUMBER:
              r = Number(e);break;case n.BOOLEAN:
              r = Boolean(e);break;case n.ARRAY:
              Array.isArray(e) ? r = e : (r = [])[0] = e;break;case n.OBJECT:
              "object" != typeof e ? (r = {})[e] = e : r = e;}return r;
        }static isType(e) {
          return null === e ? n.NULL : "string" == typeof e ? n.STRING : "number" == typeof e ? n.NUMBER : "boolean" == typeof e ? n.BOOLEAN : Array.isArray(e) ? n.ARRAY : "object" == typeof e ? n.OBJECT : void 0;
        }
      }, t.wrap = (e, t) => () => t.apply(void 0, [e].concat(Array.prototype.slice.call(i))), t.filterObject = (e, t) => {
        const r = {};if (e && t) {
          const i = t.length;let n = 0;for (n = 0; n < i; n++) r[t[n]] = e[t[n]];
        }return r;
      }, t.findByMatchingProperties = (e, t) => e.filter(e => Object.keys(t).every(r => e[r] === t[r]));
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.sortObjects = (e, t) => e.sort((e, r) => {
        const i = e[t],
              n = r[t];return i < n ? -1 : i > n ? 1 : 0;
      });const i = t.mergeSort = e => {
        if (1 === e.length) return e;const t = Math.floor(e.length / 2),
              r = e.slice(0, t),
              s = e.slice(t);return n(i(r), i(s));
      },
            n = (e, t) => {
        let r = [],
            i = 0,
            n = 0;for (; i < e.length && n < t.length;) e[i] < t[n] ? (r.push(e[i]), i++) : (r.push(t[n]), n++);return r.concat(e.slice(i)).concat(t.slice(n));
      },
            s = t.quickSort = e => {
        if (0 === e.length) return [];let t = 1;const r = e.length,
              i = [],
              n = [],
              o = e[0];for (t = 1; t < r; t++) e[t] < o ? i.push(e[t]) : n.push(e[t]);return s(i).concat(o, s(n));
      };t.insertionSort = e => {
        let t = [];if (e) {
          const r = (t = e.slice()).length;let i, n, s;for (i = 1; i < r; i++) {
            for (s = t[i], n = i - 1; n >= 0 && t[n] > s; n--) t[n + 1] = t[n];t[n + 1] = s;
          }
        }return t;
      }, t.bubbleSort = e => {
        let t = [];if (e) {
          let r, i, n;const s = (t = e.slice()).length - 1;do {
            for (r = !1, i = 0; i < s; i++) t[i] > t[i + 1] && (n = t[i], t[i] = t[i + 1], t[i + 1] = n, r = !0);
          } while (r);
        }return t;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => {
        const t = e.getFullYear(),
              r = e.getMonth() + 1,
              i = e.getDate(),
              n = e.getHours(),
              s = e.getMinutes();return e.getSeconds(), `${r}/${i}/${t} ${n % 12 || 12}:${s < 10 ? "0" + s : s}${n < 12 ? "am" : "pm"}`;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t) => (e => {
        let t = 0,
            r = e,
            i = "";for (t = 0; t < 32; t++, i += String(r >>> 31), r <<= 1);return i;
      })(e).split("").reverse().join("").substring(0, t);
    }]);
  }, function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      var t = {};function r(i) {
        if (t[i]) return t[i].exports;var n = t[i] = { i: i, l: !1, exports: {} };return e[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
      }return r.m = e, r.c = t, r.d = function (e, t, i) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
      }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
      }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var i = Object.create(null);if (r.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var n in e) r.d(i, n, function (t) {
          return e[t];
        }.bind(null, n));return i;
      }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };return r.d(t, "a", t), t;
      }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, r.p = "/dist/", r(r.s = 3);
    }([function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });const i = { INVALID_TYPE: 0, ENUM_MISMATCH: 1, ANY_OF_MISSING: 10, ONE_OF_MISSING: 11, ONE_OF_MULTIPLE: 12, NOT_PASSED: 13, NUMBER_MULTIPLE_OF: 100, NUMBER_MINIMUM: 101, NUMBER_MINIMUM_EXCLUSIVE: 102, NUMBER_MAXIMUM: 103, NUMBER_MAXIMUM_EXCLUSIVE: 104, NUMBER_NOT_A_NUMBER: 105, STRING_LENGTH_SHORT: 200, STRING_LENGTH_LONG: 201, STRING_PATTERN: 202, OBJECT_PROPERTIES_MINIMUM: 300, OBJECT_PROPERTIES_MAXIMUM: 301, OBJECT_REQUIRED: 302, OBJECT_ADDITIONAL_PROPERTIES: 303, OBJECT_DEPENDENCY_KEY: 304, ARRAY_LENGTH_SHORT: 400, ARRAY_LENGTH_LONG: 401, ARRAY_UNIQUE: 402, ARRAY_ADDITIONAL_ITEMS: 403, FORMAT_CUSTOM: 500, KEYWORD_CUSTOM: 501, CIRCULAR_REFERENCE: 600, UNKNOWN_PROPERTY: 1e3 };let n,
          s = {};for (n in i) s[i[n]] = n;t.ERROR_CODES = i, t.ERROR_MESSAGES_DEFAULT = { INVALID_TYPE: "Invalid type: {type} (expected {expected})", ENUM_MISMATCH: "No enum match for: {value}", ANY_OF_MISSING: 'Data does not match any schemas from "anyOf"', ONE_OF_MISSING: 'Data does not match any schemas from "oneOf"', ONE_OF_MULTIPLE: 'Data is valid against more than one schema from "oneOf": indices {index1} and {index2}', NOT_PASSED: 'Data matches schema from "not"', NUMBER_MULTIPLE_OF: "Value {value} is not a multiple of {multipleOf}", NUMBER_MINIMUM: "Value {value} is less than minimum {minimum}", NUMBER_MINIMUM_EXCLUSIVE: "Value {value} is equal to exclusive minimum {minimum}", NUMBER_MAXIMUM: "Value {value} is greater than maximum {maximum}", NUMBER_MAXIMUM_EXCLUSIVE: "Value {value} is equal to exclusive maximum {maximum}", NUMBER_NOT_A_NUMBER: "Value {value} is not a valid number", STRING_LENGTH_SHORT: "String is too short ({length} chars), minimum {minimum}", STRING_LENGTH_LONG: "String is too long ({length} chars), maximum {maximum}", STRING_PATTERN: "String does not match pattern: {pattern}", OBJECT_PROPERTIES_MINIMUM: "Too few properties defined ({propertyCount}), minimum {minimum}", OBJECT_PROPERTIES_MAXIMUM: "Too many properties defined ({propertyCount}), maximum {maximum}", OBJECT_REQUIRED: "Missing required property: {key}", OBJECT_ADDITIONAL_PROPERTIES: "Additional properties not allowed", OBJECT_DEPENDENCY_KEY: "Dependency failed - key must exist: {missing} (due to key: {key})", ARRAY_LENGTH_SHORT: "Array is too short ({length}), minimum {minimum}", ARRAY_LENGTH_LONG: "Array is too long ({length}), maximum {maximum}", ARRAY_UNIQUE: "Array items are not unique (indices {match1} and {match2})", ARRAY_ADDITIONAL_ITEMS: "Additional items not allowed", FORMAT_CUSTOM: "Format validation failed ({message})", KEYWORD_CUSTOM: "Keyword failed: {key} ({message})", CIRCULAR_REFERENCE: "Circular $refs: {urls}", UNKNOWN_PROPERTY: "Unknown property (not in schema)" }, t.ValidationError = class {
        constructor(e, t, r, i, n, s) {
          if (void 0 === e) throw new Error("No code supplied for error: " + t);this.message = t, this.params = r, this.code = e, this.dataPath = i || "", this.schemaPath = n || "", this.subErrors = s || null;const o = new Error(this.message);if (this.stack = o.stack || o.stacktrace, !this.stack) try {
            throw o;
          } catch (e) {
            this.stack = e.stack || e.stacktrace;
          }this.name = "ValidationError";
        }prefixWith(e, t) {
          if (null !== e && (e = e.replace(/~/g, "~0").replace(/\//g, "~1"), this.dataPath = "/" + e + this.dataPath), null !== t && (t = t.replace(/~/g, "~0").replace(/\//g, "~1"), this.schemaPath = "/" + t + this.schemaPath), null !== this.subErrors) {
            let r = 0,
                i = this.subErrors.length;for (r = 0; r < i; r++) this.subErrors[r].prefixWith(e, t);
          }return this;
        }
      }, t.ErrorCodeLookup = s;
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });const i = { $schema: "http://json-schema.org/draft-04/schema#", title: "model", description: "Generated Schema", type: "object", properties: {} };t.default = e => {
        let t,
            r,
            n,
            s,
            o = i,
            l = Object.keys(e),
            a = l.length;for (t = 0; t < a; t++) for (n in r = l[t]) if (r.hasOwnProperty(n)) {
          s = o.properties[r] = {};let t = typeof e[r];"object" === t ? t = Array.isArray(e[r]) ? "array" : "object" : "number" === t && (t = Number.isInteger(e[r]) ? "integer" : "number"), s.type = t, s.description = String(r);
        }return o;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.URI_TEMPLATE_GLOBAL_MODIFIERS = { "+": !0, "#": !0, ".": !0, "/": !0, ";": !0, "?": !0, "&": !0 }, t.URI_TEMPLATE_SUFFICES = { "*": !0 };const i = t.parseURI = e => {
        const t = String(e).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(\/\/(?:[^:@]*(?::[^:@]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return t ? { href: t[0] || "", protocol: t[1] || "", authority: t[2] || "", host: t[3] || "", hostname: t[4] || "", port: t[5] || "", pathname: t[6] || "", search: t[7] || "", hash: t[8] || "" } : null;
      },
            n = t.removeDotSegments = e => {
        let t = [];return e.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function (e) {
          "/.." === e ? t.pop() : t.push(e);
        }), t.join("").replace(/^\//, "/" === e.charAt(0) ? "/" : "");
      },
            s = t.resolveUrl = (e, t) => (t = i(t || ""), e = i(e || ""), t && e ? (t.protocol || e.protocol) + (t.protocol || t.authority ? t.authority : e.authority) + n(t.protocol || t.authority || "/" === t.pathname.charAt(0) ? t.pathname : t.pathname ? (e.authority && !e.pathname ? "/" : "") + e.pathname.slice(0, e.pathname.lastIndexOf("/") + 1) + t.pathname : e.pathname) + (t.protocol || t.authority || t.pathname ? t.search : t.search || e.search) + t.hash : null),
            o = (t.getDocumentUri = e => e.split("#")[0], t.isTrustedUrl = (e, t) => {
        if (t.substring(0, e.length) === e) {
          let r = t.substring(e.length);if (t.length > 0 && "/" === t.charAt(e.length - 1) || "#" === r.charAt(0) || "?" === r.charAt(0)) return !0;
        }return !1;
      }, t.normSchema = (e, t) => {
        if (e && "object" == typeof e) if (void 0 === t ? t = e.id : "string" == typeof e.id && (t = s(t, e.id), e.id = t), Array.isArray(e)) {
          let r = 0,
              i = e.length;for (r = 0; r < i; r++) o(e[r], t);
        } else {
          "string" == typeof e.$ref && (e.$ref = s(t, e.$ref));for (let r in e) "enum" !== r && o(e[r], t);
        }
      });
    }, function (e, t, r) {
      var i = s(r(4)),
          n = s(r(1));function s(e) {
        return e && e.__esModule ? e : { default: e };
      }e.exports.ValidationFramework = i.default, e.exports.SchemaGenerator = n.default;
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var i = o(r(1)),
          n = o(r(5)),
          s = r(0);function o(e) {
        return e && e.__esModule ? e : { default: e };
      }t.default = class {
        constructor() {
          this._myValidator = (0, n.default)(), this._myValidator && this._myValidator.addLanguage("en-us", s.ERROR_MESSAGES_DEFAULT);
        }supportsValidation() {
          return null !== this._myValidator;
        }registerSchema(e, t) {
          return this._myValidator.addSchema(e, t);
        }getSchema(e) {
          return this._myValidator.getSchema(e);
        }getSchemas() {
          return this._myValidator.getSchemaMap();
        }clearSchemas() {
          this._myValidator.dropSchemas();
        }validate(e, t) {
          return this._myValidator.validateMultiple(e, t);
        }getValidationMessages() {
          return this._myValidator.error;
        }generateSchema(e) {
          let t = e;return (0, i.default)(t);
        }
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var i = arguments,
          n = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(r(6)),
          s = r(0),
          o = r(2);let l = {};const a = e => {
        const t = new n.default();let r = e || "en";return { addFormat: (e, r) => {
            t.addFormat(e, r);
          }, language: e => e ? (l[e] || (e = e.split("-")[0]), !!l[e] && (r = e, e)) : r, addLanguage: (e, t) => {
            let r;for (r in s.ERROR_CODES) t[r] && !t[s.ERROR_CODES[r]] && (t[s.ERROR_CODES[r]] = t[r]);let i = e.split("-")[0];if (l[i]) for (r in l[e] = Object.create(l[i]), t) void 0 === l[i][r] && (l[i][r] = t[r]), l[e][r] = t[r];else l[e] = t, l[i] = t;
          }, freshApi: e => {
            const t = a();return e && t.language(e), t;
          }, validate: (e, i, s, o) => {
            const a = new n.default(t, !1, l[r], s, o);"string" == typeof i && (i = { $ref: i }), a.addSchema("", i);let u = a.validateAll(e, i, null, null, "");return !u && o && (u = a.banUnknownProperties()), (void 0).error = u, (void 0).missing = a.missing, (void 0).valid = null === u, (void 0).valid;
          }, validateResult: () => {
            let e = {};return (void 0).validate.apply(e, i), e;
          }, validateMultiple: (e, i, s, o) => {
            const a = new n.default(t, !0, l[r], s, o);"string" == typeof i && (i = { $ref: i }), a.addSchema("", i), a.validateAll(e, i, null, null, ""), o && a.banUnknownProperties();let u = {};return u.errors = a.errors, u.missing = a.missing, u.valid = 0 === u.errors.length, u;
          }, addSchema: (e, r) => t.addSchema(e, r), getSchema: (e, r) => t.getSchema(e, r), getSchemaMap: () => t.getSchemaMap.apply(t, i), getSchemaUris: () => t.getSchemaUris.apply(t, i), getMissingUris: () => t.getMissingUris.apply(t, i), dropSchemas: () => {
            t.dropSchemas.apply(t, i);
          }, defineKeyword: () => {
            t.defineKeyword.apply(t, i);
          }, defineError: (e, t, r) => {
            if ("string" != typeof e || !/^[A-Z]+(_[A-Z]+)*$/.test(e)) throw new Error("Code name must be a string in UPPER_CASE_WITH_UNDERSCORES");if ("number" != typeof t || t % 1 != 0 || t < 1e4) throw new Error("Code number must be an integer > 10000");if (void 0 !== s.ERROR_CODES[e]) throw new Error("Error already defined: " + e + " as " + s.ERROR_CODES[e]);if (void 0 !== s.ErrorCodeLookup[t]) throw new Error("Error code already used: " + s.ErrorCodeLookup[t] + " as " + t);s.ERROR_CODES[e] = t, s.ErrorCodeLookup[t] = e, s.ERROR_MESSAGES_DEFAULT[e] = s.ERROR_MESSAGES_DEFAULT[t] = r;for (let r in l) {
              let i = l[r];i[e] && (i[t] = i[t] || i[e]);
            }
          }, reset: () => {
            t.reset(), (void 0).error = null, (void 0).missing = [], (void 0).valid = !0;
          }, missing: [], error: null, valid: !0, normSchema: o.normSchema, resolveUrl: o.resolveUrl, getDocumentUri: o.getDocumentUri, errorCodes: s.ERROR_CODES };
      };t.default = a;
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var i = r(0),
          n = r(2);let s = Math.pow(2, -51),
          o = 1 - s;class l {
        constructor(e, t, r, i, n) {
          if (this.missing = [], this.missingMap = {}, this.formatValidators = e ? Object.create(e.formatValidators) : {}, this.schemas = e ? Object.create(e.schemas) : {}, this.collectMultiple = t, this.errors = [], this.handleError = t ? this.collectError : this.returnError, i && (this.checkRecursive = !0, this.scanned = [], this.scannedFrozen = [], this.scannedFrozenSchemas = [], this.scannedFrozenValidationErrors = [], this.validatedSchemasKey = "tv4_validation_id", this.validationErrorsKey = "tv4_validation_errors_id"), n && (this.trackUnknownProperties = !0, this.knownPropertyPaths = {}, this.unknownPropertyPaths = {}), this.errorMessages = r, this.definedKeywords = {}, e) for (let t in e.definedKeywords) this.definedKeywords[t] = e.definedKeywords[t].slice(0);
        }notReallyPercentEncode(e) {
          return encodeURI(e).replace(/%25[0-9][0-9]/g, e => "%" + e.substring(3));
        }uriTemplateSubstitution(e) {
          let t = "";URI_TEMPLATE_GLOBAL_MODIFIERS[e.charAt(0)] && (t = e.charAt(0), e = e.substring(1));let r = "",
              i = "",
              n = !0,
              s = !1,
              o = !1;"+" === t ? n = !1 : "." === t ? (i = ".", r = ".") : "/" === t ? (i = "/", r = "/") : "#" === t ? (i = "#", n = !1) : ";" === t ? (i = ";", r = ";", s = !0, o = !0) : "?" === t ? (i = "?", r = "&", s = !0) : "&" === t && (i = "&", r = "&", s = !0);let l = [],
              a = e.split(","),
              u = [],
              c = {},
              h = 0,
              d = a.length;for (h = 0; h < d; h++) {
            let e = a[h],
                t = null;if (-1 !== e.indexOf(":")) {
              let r = e.split(":");e = r[0], t = parseInt(r[1], 10);
            }let r = {};for (; URI_TEMPLATE_SUFFICES[e.charAt(e.length - 1)];) r[e.charAt(e.length - 1)] = !0, e = e.substring(0, e.length - 1);let i = { truncate: t, name: e, suffices: r };u.push(i), c[e] = i, l.push(e);
          }const f = e => {
            let t = "",
                l = 0,
                a = 0,
                c = u.length;for (a = 0; a < c; a++) {
              let h = u[a];if (!e && !isFunction(e)) throw new Error("Problem qith value function.");let d = e(h.name);if (null === d || void 0 === d || Array.isArray(d) && 0 === d.length || "object" == typeof d && 0 === Object.keys(d).length) l++;else if (t += a === l ? i : r || ",", Array.isArray(d)) {
                s && (t += h.name + "=");let e = 0;for (c = d.length, e = 0; e < c; e++) e > 0 && (t += h.suffices["*"] && r || ",", h.suffices["*"] && s && (t += h.name + "=")), t += n ? encodeURIComponent(d[e]).replace(/!/g, "%21") : this.notReallyPercentEncode(d[e]);
              } else if ("object" == typeof d) {
                s && !h.suffices["*"] && (t += h.name + "=");let e = !0;for (let i in d) e || (t += h.suffices["*"] && r || ","), e = !1, t += n ? encodeURIComponent(i).replace(/!/g, "%21") : this.notReallyPercentEncode(i), t += h.suffices["*"] ? "=" : ",", t += n ? encodeURIComponent(d[i]).replace(/!/g, "%21") : this.notReallyPercentEncode(d[i]);
              } else s && (t += h.name, o && "" === d || (t += "=")), null !== h.truncate && (d = d.substring(0, h.truncate)), t += n ? encodeURIComponent(d).replace(/!/g, "%21") : this.notReallyPercentEncode(d);
            }return t;
          };return f.varNames = l, { prefix: i, substitution: f };
        }recursiveCompare(e, t) {
          if (e === t) return !0;if ("object" == typeof e && "object" == typeof t) {
            if (Array.isArray(e) !== Array.isArray(t)) return !1;if (Array.isArray(e)) {
              if (e.length !== t.length) return !1;let r = 0,
                  i = e.length;for (r = 0; r < i; r++) if (!this.recursiveCompare(e[r], t[r])) return !1;
            } else {
              let r;for (r in e) if (void 0 === t[r] && void 0 !== e[r]) return !1;for (r in t) if (void 0 === e[r] && void 0 !== t[r]) return !1;for (r in e) if (!this.recursiveCompare(e[r], t[r])) return !1;
            }return !0;
          }return !1;
        }defineKeyword(e, t) {
          this.definedKeywords[e] = this.definedKeywords[e] || [], this.definedKeywords[e].push(t);
        }createError(e, t, r, n, s) {
          let o = this.errorMessages[e] || i.ERROR_MESSAGES_DEFAULT[e];if ("string" != typeof o) return new i.ValidationError(e, "Unknown error code " + e + ": " + JSON.stringify(t), t, r, n, s);let l = o.replace(/\{([^{}]*)\}/g, function (e, r) {
            let i = t[r];return "string" == typeof i || "number" == typeof i ? i : e;
          });return new i.ValidationError(e, l, t, r, n, s);
        }returnError(e) {
          return e;
        }collectError(e) {
          return e && this.errors.push(e), null;
        }prefixErrors(e, t, r) {
          let i = 0,
              n = this.errors.length;for (i = e; i < n; i++) this.errors[i] = this.errors[i].prefixWith(t, r);return this;
        }banUnknownProperties() {
          for (let e in this.unknownPropertyPaths) {
            let t = this.createError(i.ERROR_CODES.UNKNOWN_PROPERTY, { path: e }, e, ""),
                r = this.handleError(t);if (r) return r;
          }return null;
        }addFormat(e, t) {
          if ("object" == typeof e) {
            for (let t in e) this.addFormat(t, e[t]);return this;
          }this.formatValidators[e] = t;
        }resolveRefs(e, t) {
          if (void 0 !== e.$ref) {
            if ((t = t || {})[e.$ref]) return this.createError(i.ERROR_CODES.CIRCULAR_REFERENCE, { urls: Object.keys(t).join(", ") }, "", "");t[e.$ref] = !0, e = this.getSchema(e.$ref, t);
          }return e;
        }getSchema(e, t) {
          let r;if (void 0 !== this.schemas[e]) return r = this.schemas[e], this.resolveRefs(r, t);let i = e,
              n = "";if (-1 !== e.indexOf("#") && (n = e.substring(e.indexOf("#") + 1), i = e.substring(0, e.indexOf("#"))), "object" == typeof this.schemas[i]) {
            r = this.schemas[i];let e = decodeURIComponent(n);if ("" === e) return this.resolveRefs(r, t);if ("/" !== e.charAt(0)) return;let s = e.split("/").slice(1),
                o = 0,
                l = s.length;for (o = 0; o < l; o++) {
              let e = s[o].replace(/~1/g, "/").replace(/~0/g, "~");if (void 0 === r[e]) {
                r = void 0;break;
              }r = r[e];
            }if (void 0 !== r) return this.resolveRefs(r, t);
          }void 0 === this.missing[i] && (this.missing.push(i), this.missing[i] = i, this.missingMap[i] = i);
        }searchSchemas(e, t) {
          if (Array.isArray(e)) {
            let r = 0,
                i = e.length;for (r = 0; r < i; r++) this.searchSchemas(e[r], t);
          } else if (e && "object" == typeof e) {
            "string" == typeof e.id && isTrustedUrl(t, e.id) && void 0 === this.schemas[e.id] && (this.schemas[e.id] = e);for (let r in e) if ("enum" !== r) if ("object" == typeof e[r]) this.searchSchemas(e[r], t);else if ("$ref" === r) {
              let t = (0, n.getDocumentUri)(e[r]);t && void 0 === this.schemas[t] && void 0 === this.missingMap[t] && (this.missingMap[t] = t);
            }
          }
        }addSchema(e, t) {
          if ("string" != typeof e || void 0 === t) {
            if ("object" != typeof e || "string" != typeof e.id) return;e = (t = e).id;
          }e === (0, n.getDocumentUri)(e) + "#" && (e = (0, n.getDocumentUri)(e)), this.schemas[e] = t, delete this.missingMap[e], (0, n.normSchema)(t, e), this.searchSchemas(t, e);
        }getSchemaMap() {
          let e = {};for (let t in this.schemas) e[t] = this.schemas[t];return e;
        }getSchemaUris(e) {
          let t = [];for (let r in this.schemas) e && !e.test(r) || t.push(r);return t;
        }getMissingUris(e) {
          let t = [];for (let r in this.missingMap) e && !e.test(r) || t.push(r);return t;
        }dropSchemas() {
          this.schemas = {}, this.reset();
        }reset() {
          this.missing = [], this.missingMap = {}, this.errors = [];
        }validateAll(e, t, r, n, s) {
          let o;if (!(t = this.resolveRefs(t))) return null;if (t instanceof i.ValidationError) return this.errors.push(t), t;let l,
              a = this.errors.length,
              u = null,
              c = null;if (this.checkRecursive && e && "object" == typeof e) {
            if (o = !this.scanned.length, e[this.validatedSchemasKey]) {
              let r = e[this.validatedSchemasKey].indexOf(t);if (-1 !== r) return this.errors = this.errors.concat(e[this.validationErrorsKey][r]), null;
            }if (Object.isFrozen(e) && -1 !== (l = this.scannedFrozen.indexOf(e))) {
              let e = this.scannedFrozenSchemas[l].indexOf(t);if (-1 !== e) return this.errors = this.errors.concat(this.scannedFrozenValidationErrors[l][e]), null;
            }if (this.scanned.push(e), Object.isFrozen(e)) -1 === l && (l = this.scannedFrozen.length, this.scannedFrozen.push(e), this.scannedFrozenSchemas.push([])), u = this.scannedFrozenSchemas[l].length, this.scannedFrozenSchemas[l][u] = t, this.scannedFrozenValidationErrors[l][u] = [];else {
              if (!e[this.validatedSchemasKey]) try {
                Object.defineProperty(e, this.validatedSchemasKey, { value: [], configurable: !0 }), Object.defineProperty(e, this.validationErrorsKey, { value: [], configurable: !0 });
              } catch (t) {
                e[this.validatedSchemasKey] = [], e[this.validationErrorsKey] = [];
              }c = e[this.validatedSchemasKey].length, e[this.validatedSchemasKey][c] = t, e[this.validationErrorsKey][c] = [];
            }
          }let h = this.errors.length,
              d = this.validateBasic(e, t, s) || this.validateNumeric(e, t, s) || this.validateString(e, t, s) || this.validateArray(e, t, s) || this.validateObject(e, t, s) || this.validateCombinations(e, t, s) || this.validateHypermedia(e, t, s) || this.validateFormat(e, t, s) || this.validateDefinedKeywords(e, t, s) || null;if (o) {
            for (; this.scanned.length;) delete this.scanned.pop()[this.validatedSchemasKey];this.scannedFrozen = [], this.scannedFrozenSchemas = [];
          }if (d || h !== this.errors.length) for (; r && r.length || n && n.length;) {
            let e = r && r.length ? "" + r.pop() : null,
                t = n && n.length ? "" + n.pop() : null;d && (d = d.prefixWith(e, t)), this.prefixErrors(h, e, t);
          }return null !== u ? this.scannedFrozenValidationErrors[l][u] = this.errors.slice(a) : null !== c && (e[this.validationErrorsKey][c] = this.errors.slice(a)), this.handleError(d);
        }validateFormat(e, t) {
          if ("string" != typeof t.format || !this.formatValidators[t.format]) return null;let r = this.formatValidators[t.format].call(null, e, t);return "string" == typeof r || "number" == typeof r ? this.createError(i.ERROR_CODES.FORMAT_CUSTOM, { message: r }).prefixWith(null, "format") : r && "object" == typeof r ? this.createError(i.ERROR_CODES.FORMAT_CUSTOM, { message: r.message || "?" }, r.dataPath || null, r.schemaPath || "/format") : null;
        }validateDefinedKeywords(e, t, r) {
          for (let n in this.definedKeywords) {
            if (void 0 === t[n]) continue;let s = this.definedKeywords[n],
                o = 0,
                l = s.length;for (o = 0; o < l; o++) {
              let l = (0, s[o])(e, t[n], t, r);if ("string" == typeof l || "number" == typeof l) return this.createError(i.ERROR_CODES.KEYWORD_CUSTOM, { key: n, message: l }).prefixWith(null, "format");if (l && "object" == typeof l) {
                let e = l.code;if ("string" == typeof e) {
                  if (!i.ERROR_CODES[e]) throw new Error("Undefined error code (use defineError): " + e);e = i.ERROR_CODES[e];
                } else "number" != typeof e && (e = i.ERROR_CODES.KEYWORD_CUSTOM);let t = "object" == typeof l.message ? l.message : { key: n, message: l.message || "?" },
                    r = l.schemaPath || "/" + n.replace(/~/g, "~0").replace(/\//g, "~1");return this.createError(e, t, l.dataPath || null, r);
              }
            }
          }return null;
        }validateBasic(e, t, r) {
          let i = this.validateType(e, t, r);return i ? i.prefixWith(null, "type") : null;
        }validateType(e, t) {
          if (void 0 === t.type) return null;let r = typeof e;null === e ? r = "null" : Array.isArray(e) && (r = "array");let n = t.type;"object" != typeof n && (n = [n]);let s = 0,
              o = n.length;for (s = 0; s < o; s++) {
            let t = n[s];if (t === r || "integer" === t && "number" === r && e % 1 == 0) return null;
          }return this.createError(i.ERROR_CODES.INVALID_TYPE, { type: r, expected: n.join("/") });
        }validateEnum(e, t) {
          if (void 0 === t.enum) return null;let r = 0,
              n = t.enum.length;for (r = 0; r < n; r++) {
            let i = t.enum[r];if (this.recursiveCompare(e, i)) return null;
          }return this.createError(i.ERROR_CODES.ENUM_MISMATCH, { value: "undefined" != typeof JSON ? JSON.stringify(e) : e });
        }validateNumeric(e, t, r) {
          return this.validateMultipleOf(e, t, r) || this.validateMinMax(e, t, r) || this.validateNaN(e, t, r) || null;
        }validateMultipleOf(e, t) {
          let r = t.multipleOf || t.divisibleBy;if (void 0 === r) return null;if ("number" == typeof e) {
            let t = e / r % 1;if (t >= s && t < o) return this.createError(i.ERROR_CODES.NUMBER_MULTIPLE_OF, { value: e, multipleOf: r });
          }return null;
        }validateMinMax(e, t) {
          if ("number" != typeof e) return null;if (void 0 !== t.minimum) {
            if (e < t.minimum) return this.createError(i.ERROR_CODES.NUMBER_MINIMUM, { value: e, minimum: t.minimum }).prefixWith(null, "minimum");if (t.exclusiveMinimum && e === t.minimum) return this.createError(i.ERROR_CODES.NUMBER_MINIMUM_EXCLUSIVE, { value: e, minimum: t.minimum }).prefixWith(null, "exclusiveMinimum");
          }if (void 0 !== t.maximum) {
            if (e > t.maximum) return this.createError(i.ERROR_CODES.NUMBER_MAXIMUM, { value: e, maximum: t.maximum }).prefixWith(null, "maximum");if (t.exclusiveMaximum && e === t.maximum) return this.createError(i.ERROR_CODES.NUMBER_MAXIMUM_EXCLUSIVE, { value: e, maximum: t.maximum }).prefixWith(null, "exclusiveMaximum");
          }return null;
        }validateNaN(e) {
          return "number" != typeof e ? null : !0 === isNaN(e) || e === 1 / 0 || e === -1 / 0 ? this.createError(i.ERROR_CODES.NUMBER_NOT_A_NUMBER, { value: e }).prefixWith(null, "type") : null;
        }validateString(e, t, r) {
          return this.validateStringLength(e, t, r) || this.validateStringPattern(e, t, r) || null;
        }validateStringLength(e, t) {
          return "string" != typeof e ? null : void 0 !== t.minLength && e.length < t.minLength ? this.createError(i.ERROR_CODES.STRING_LENGTH_SHORT, { length: e.length, minimum: t.minLength }).prefixWith(null, "minLength") : void 0 !== t.maxLength && e.length > t.maxLength ? this.createError(i.ERROR_CODES.STRING_LENGTH_LONG, { length: e.length, maximum: t.maxLength }).prefixWith(null, "maxLength") : null;
        }validateStringPattern(e, t) {
          return "string" != typeof e || void 0 === t.pattern ? null : new RegExp(t.pattern).test(e) ? null : this.createError(i.ERROR_CODES.STRING_PATTERN, { pattern: t.pattern }).prefixWith(null, "pattern");
        }validateArray(e, t, r) {
          return Array.isArray(e) && (this.validateArrayLength(e, t, r) || this.validateArrayUniqueItems(e, t, r) || this.validateArrayItems(e, t, r)) || null;
        }validateArrayLength(e, t) {
          let r;return void 0 !== t.minItems && e.length < t.minItems && (r = this.createError(i.ERROR_CODES.ARRAY_LENGTH_SHORT, { length: e.length, minimum: t.minItems }).prefixWith(null, "minItems"), this.handleError(r)) ? r : void 0 !== t.maxItems && e.length > t.maxItems && (r = this.createError(i.ERROR_CODES.ARRAY_LENGTH_LONG, { length: e.length, maximum: t.maxItems }).prefixWith(null, "maxItems"), this.handleError(r)) ? r : null;
        }validateArrayUniqueItems(e, t) {
          if (t.uniqueItems) {
            let t = 0,
                r = e.length;for (t = 0; t < r; t++) {
              let n = 0;for (n = t + 1; n < r; n++) if (recursiveCompare(e[t], e[n])) {
                let e = this.createError(i.ERROR_CODES.ARRAY_UNIQUE, { match1: t, match2: n }).prefixWith(null, "uniqueItems");if (this.handleError(e)) return e;
              }
            }
          }return null;
        }validateArrayItems(e, t, r) {
          if (void 0 === t.items) return null;let n, s;if (Array.isArray(t.items)) {
            let o = e.length;for (s = 0; s < o; s++) if (s < t.items.length) {
              if (n = this.validateAll(e[s], t.items[s], [s], ["items", s], r + "/" + s)) return n;
            } else if (void 0 !== t.additionalItems) if ("boolean" == typeof t.additionalItems) {
              if (!t.additionalItems && (n = this.createError(i.ERROR_CODES.ARRAY_ADDITIONAL_ITEMS, {}).prefixWith("" + s, "additionalItems"), this.handleError(n))) return n;
            } else if (n = this.validateAll(e[s], t.additionalItems, [s], ["additionalItems"], r + "/" + s)) return n;
          } else {
            let i = e.length;for (s = 0; s < i; s++) if (n = this.validateAll(e[s], t.items, [s], ["items"], r + "/" + s)) return n;
          }return null;
        }validateObject(e, t, r) {
          return "object" != typeof e || null === e || Array.isArray(e) ? null : this.validateObjectMinMaxProperties(e, t, r) || this.validateObjectRequiredProperties(e, t, r) || this.validateObjectProperties(e, t, r) || this.validateObjectDependencies(e, t, r) || null;
        }validateObjectMinMaxProperties(e, t) {
          let r,
              n = Object.keys(e);return void 0 !== t.minProperties && n.length < t.minProperties && (r = this.createError(i.ERROR_CODES.OBJECT_PROPERTIES_MINIMUM, { propertyCount: n.length, minimum: t.minProperties }).prefixWith(null, "minProperties"), this.handleError(r)) ? r : void 0 !== t.maxProperties && n.length > t.maxProperties && (r = this.createError(i.ERROR_CODES.OBJECT_PROPERTIES_MAXIMUM, { propertyCount: n.length, maximum: t.maxProperties }).prefixWith(null, "maxProperties"), this.handleError(r)) ? r : null;
        }validateObjectRequiredProperties(e, t) {
          if (void 0 !== t.required) {
            let r = 0,
                n = t.required.length;for (r = 0; r < n; r++) {
              let n = t.required[r];if (void 0 === e[n]) {
                let e = this.createError(i.ERROR_CODES.OBJECT_REQUIRED, { key: n }).prefixWith(null, "" + r).prefixWith(null, "required");if (this.handleError(e)) return e;
              }
            }
          }return null;
        }validateObjectProperties(e, t, r) {
          let n;for (let s in e) {
            let o = r + "/" + s.replace(/~/g, "~0").replace(/\//g, "~1"),
                l = !1;if (void 0 !== t.properties && void 0 !== t.properties[s] && (l = !0, n = this.validateAll(e[s], t.properties[s], [s], ["properties", s], o))) return n;if (void 0 !== t.patternProperties) for (let r in t.patternProperties) if (new RegExp(r).test(s) && (l = !0, n = this.validateAll(e[s], t.patternProperties[r], [s], ["patternProperties", r], o))) return n;if (l) this.trackUnknownProperties && (this.knownPropertyPaths[o] = !0, delete this.unknownPropertyPaths[o]);else if (void 0 !== t.additionalProperties) {
              if (this.trackUnknownProperties && (this.knownPropertyPaths[o] = !0, delete this.unknownPropertyPaths[o]), "boolean" == typeof t.additionalProperties) {
                if (!t.additionalProperties && (n = this.createError(i.ERROR_CODES.OBJECT_ADDITIONAL_PROPERTIES, {}).prefixWith(s, "additionalProperties"), this.handleError(n))) return n;
              } else if (n = this.validateAll(e[s], t.additionalProperties, [s], ["additionalProperties"], o)) return n;
            } else this.trackUnknownProperties && !this.knownPropertyPaths[o] && (this.unknownPropertyPaths[o] = !0);
          }return null;
        }validateObjectDependencies(e, t, r) {
          let n;if (void 0 !== t.dependencies) for (let s in t.dependencies) if (void 0 !== e[s]) {
            let o = t.dependencies[s];if ("string" == typeof o) {
              if (void 0 === e[o] && (n = this.createError(i.ERROR_CODES.OBJECT_DEPENDENCY_KEY, { key: s, missing: o }).prefixWith(null, s).prefixWith(null, "dependencies"), this.handleError(n))) return n;
            } else if (Array.isArray(o)) {
              let t = 0,
                  r = o.lenth;for (t = 0; t < r; t++) {
                let r = o[t];if (void 0 === e[r] && (n = this.createError(i.ERROR_CODES.OBJECT_DEPENDENCY_KEY, { key: s, missing: r }).prefixWith(null, "" + t).prefixWith(null, s).prefixWith(null, "dependencies"), this.handleError(n))) return n;
              }
            } else if (n = this.validateAll(e, o, [], ["dependencies", s], r)) return n;
          }return null;
        }validateCombinations(e, t, r) {
          return this.validateAllOf(e, t, r) || this.validateAnyOf(e, t, r) || this.validateOneOf(e, t, r) || this.validateNot(e, t, r) || null;
        }validateAllOf(e, t, r) {
          if (void 0 === t.allOf) return null;let i,
              n = 0,
              s = t.allOf.length;for (n = 0; n < s; n++) {
            let s = t.allOf[n];if (i = this.validateAll(e, s, [], ["allOf", n], r)) return i;
          }return null;
        }validateAnyOf(e, t, r) {
          if (void 0 === t.anyOf) return null;let n,
              s,
              o = [],
              l = this.errors.length;this.trackUnknownProperties && (n = this.unknownPropertyPaths, s = this.knownPropertyPaths);let a = !0,
              u = 0,
              c = t.anyOf.length;for (u = 0; u < c; u++) {
            this.trackUnknownProperties && (this.unknownPropertyPaths = {}, this.knownPropertyPaths = {});let i = t.anyOf[u],
                c = this.errors.length,
                h = this.validateAll(e, i, [], ["anyOf", u], r);if (null === h && c === this.errors.length) {
              if (this.errors = this.errors.slice(0, l), this.trackUnknownProperties) {
                for (let e in this.knownPropertyPaths) s[e] = !0, delete n[e];for (let e in this.unknownPropertyPaths) s[e] || (n[e] = !0);a = !1;continue;
              }return null;
            }h && o.push(h.prefixWith(null, "" + u).prefixWith(null, "anyOf"));
          }return this.trackUnknownProperties && (this.unknownPropertyPaths = n, this.knownPropertyPaths = s), a ? (o = o.concat(this.errors.slice(l)), this.errors = this.errors.slice(0, l), this.createError(i.ERROR_CODES.ANY_OF_MISSING, {}, "", "/anyOf", o)) : void 0;
        }validateOneOf(e, t, r) {
          if (void 0 === t.oneOf) return null;let n,
              s,
              o = null,
              l = [],
              a = this.errors.length;this.trackUnknownProperties && (n = this.unknownPropertyPaths, s = this.knownPropertyPaths);let u = 0,
              c = t.oneOf.length;for (u = 0; u < c; u++) {
            this.trackUnknownProperties && (this.unknownPropertyPaths = {}, this.knownPropertyPaths = {});let c = t.oneOf[u],
                h = this.errors.length,
                d = this.validateAll(e, c, [], ["oneOf", u], r);if (null === d && h === this.errors.length) {
              if (null !== o) return this.errors = this.errors.slice(0, a), this.createError(i.ERROR_CODES.ONE_OF_MULTIPLE, { index1: o, index2: u }, "", "/oneOf");if (o = u, this.trackUnknownProperties) {
                for (let e in this.knownPropertyPaths) s[e] = !0, delete n[e];for (let e in this.unknownPropertyPaths) s[e] || (n[e] = !0);
              }
            } else d && l.push(d);
          }return this.trackUnknownProperties && (this.unknownPropertyPaths = n, this.knownPropertyPaths = s), null === o ? (l = l.concat(this.errors.slice(a)), this.errors = this.errors.slice(0, a), this.createError(i.ERROR_CODES.ONE_OF_MISSING, {}, "", "/oneOf", l)) : (this.errors = this.errors.slice(0, a), null);
        }validateNot(e, t, r) {
          if (void 0 === t.not) return null;let n,
              s,
              o = this.errors.length;this.trackUnknownProperties && (n = this.unknownPropertyPaths, s = this.knownPropertyPaths, this.unknownPropertyPaths = {}, this.knownPropertyPaths = {});let l = this.validateAll(e, t.not, null, null, r),
              a = this.errors.slice(o);return this.errors = this.errors.slice(0, o), this.trackUnknownProperties && (this.unknownPropertyPaths = n, this.knownPropertyPaths = s), null === l && 0 === a.length ? this.createError(i.ERROR_CODES.NOT_PASSED, {}, "", "/not") : null;
        }validateHypermedia(e, t, r) {
          if (!t.links) return null;let i,
              n = 0,
              s = t.links.length;for (n = 0; n < s; n++) {
            let s = t.links[n];if ("describedby" === s.rel) {
              let t = new UriTemplate(s.href),
                  o = !0,
                  l = 0,
                  a = t.varNames.length;for (l = 0; l < a; l++) if (!(t.varNames[l] in e)) {
                o = !1;break;
              }if (o) {
                let s = { $ref: t.fillFromObject(e) };if (i = this.validateAll(e, s, [], ["links", n], r)) return i;
              }
            }
          }
        }
      }t.default = l = l;
    }]);
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });const i = 1,
          n = 2;t.default = class {
      constructor(e, t) {
        this._collection = e, this._kind = t, this._index = 0;
      }next() {
        if (this._collection) {
          if (this._index < this._collection.length) {
            const e = this._collection.at(this._index);let t;if (this._index++, this._kind === i) t = e;else {
              const r = this._collection.modelId(e.attributes);t = this._kind === n ? r : [r, e];
            }return { value: t, done: !1 };
          }this._collection = void 0;
        }return { value: void 0, done: !0 };
      }
    };
  }, function (e, t, r) {
    "use strict";
    var i = o(r(1)),
        n = o(r(16)),
        s = o(r(5));function o(e) {
      return e && e.__esModule ? e : { default: e };
    }e.exports.AbstractModel = i.default, e.exports.AbstractCollection = n.default, e.exports.CollectionIterator = s.default;
  }, function (e, t, r) {
    "use strict";
    (function (t) {
      var r = "Expected a function",
          i = "__lodash_placeholder__",
          n = 1,
          s = 2,
          o = 4,
          l = 8,
          a = 16,
          u = 32,
          c = 64,
          h = 128,
          d = 512,
          f = 1 / 0,
          p = 9007199254740991,
          m = 1.7976931348623157e308,
          g = NaN,
          y = [["ary", h], ["bind", n], ["bindKey", s], ["curry", l], ["curryRight", a], ["flip", d], ["partial", u], ["partialRight", c], ["rearg", 256]],
          v = "[object Function]",
          _ = "[object GeneratorFunction]",
          b = "[object Symbol]",
          O = /^\s+|\s+$/g,
          E = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
          R = /\{\n\/\* \[wrapped with (.+)\] \*/,
          M = /,? & /,
          S = /^[-+]0x[0-9a-f]+$/i,
          x = /^0b[01]+$/i,
          P = /^\[object .+?Constructor\]$/,
          A = /^0o[0-7]+$/i,
          j = /^(?:0|[1-9]\d*)$/,
          I = parseInt,
          N = "object" == typeof t && t && t.Object === Object && t,
          T = "object" == typeof self && self && self.Object === Object && self,
          w = N || T || Function("return this")();function U(e, t, r) {
        switch (r.length) {case 0:
            return e.call(t);case 1:
            return e.call(t, r[0]);case 2:
            return e.call(t, r[0], r[1]);case 3:
            return e.call(t, r[0], r[1], r[2]);}return e.apply(t, r);
      }function k(e, t) {
        return !!(e ? e.length : 0) && function (e, t, r) {
          if (t != t) return function (e, t, r, i) {
            var n = e.length,
                s = r + (i ? 1 : -1);for (; i ? s-- : ++s < n;) if (t(e[s], s, e)) return s;return -1;
          }(e, C, r);var i = r - 1,
              n = e.length;for (; ++i < n;) if (e[i] === t) return i;return -1;
        }(e, t, 0) > -1;
      }function C(e) {
        return e != e;
      }function D(e, t) {
        for (var r = -1, n = e.length, s = 0, o = []; ++r < n;) {
          var l = e[r];l !== t && l !== i || (e[r] = i, o[s++] = r);
        }return o;
      }var L = Function.prototype,
          F = Object.prototype,
          B = w["__core-js_shared__"],
          V = function () {
        var e = /[^.]+$/.exec(B && B.keys && B.keys.IE_PROTO || "");return e ? "Symbol(src)_1." + e : "";
      }(),
          $ = L.toString,
          G = F.hasOwnProperty,
          q = F.toString,
          K = RegExp("^" + $.call(G).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          Y = Object.create,
          J = Math.max,
          W = Math.min,
          H = function () {
        var e = re(Object, "defineProperty"),
            t = re.name;return t && t.length > 2 ? e : void 0;
      }();function z(e) {
        return !(!oe(e) || function (e) {
          return !!V && V in e;
        }(e)) && (function (e) {
          var t = oe(e) ? q.call(e) : "";return t == v || t == _;
        }(e) || function (e) {
          var t = !1;if (null != e && "function" != typeof e.toString) try {
            t = !!(e + "");
          } catch (e) {}return t;
        }(e) ? K : P).test(function (e) {
          if (null != e) {
            try {
              return $.call(e);
            } catch (e) {}try {
              return e + "";
            } catch (e) {}
          }return "";
        }(e));
      }function X(e) {
        return function () {
          var t = arguments;switch (t.length) {case 0:
              return new e();case 1:
              return new e(t[0]);case 2:
              return new e(t[0], t[1]);case 3:
              return new e(t[0], t[1], t[2]);case 4:
              return new e(t[0], t[1], t[2], t[3]);case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);}var r = function (e) {
            return oe(e) ? Y(e) : {};
          }(e.prototype),
              i = e.apply(r, t);return oe(i) ? i : r;
        };
      }function Q(e, t, r, i, o, u, c, f, p, m) {
        var g = t & h,
            y = t & n,
            v = t & s,
            _ = t & (l | a),
            b = t & d,
            O = v ? void 0 : X(e);return function n() {
          for (var s = arguments.length, l = Array(s), a = s; a--;) l[a] = arguments[a];if (_) var h = te(n),
              d = function (e, t) {
            for (var r = e.length, i = 0; r--;) e[r] === t && i++;return i;
          }(l, h);if (i && (l = function (e, t, r, i) {
            for (var n = -1, s = e.length, o = r.length, l = -1, a = t.length, u = J(s - o, 0), c = Array(a + u), h = !i; ++l < a;) c[l] = t[l];for (; ++n < o;) (h || n < s) && (c[r[n]] = e[n]);for (; u--;) c[l++] = e[n++];return c;
          }(l, i, o, _)), u && (l = function (e, t, r, i) {
            for (var n = -1, s = e.length, o = -1, l = r.length, a = -1, u = t.length, c = J(s - l, 0), h = Array(c + u), d = !i; ++n < c;) h[n] = e[n];for (var f = n; ++a < u;) h[f + a] = t[a];for (; ++o < l;) (d || n < s) && (h[f + r[o]] = e[n++]);return h;
          }(l, u, c, _)), s -= d, _ && s < m) {
            var E = D(l, h);return Z(e, t, Q, n.placeholder, r, l, E, f, p, m - s);
          }var R = y ? r : this,
              M = v ? R[e] : e;return s = l.length, f ? l = function (e, t) {
            for (var r = e.length, i = W(t.length, r), n = function (e, t) {
              var r = -1,
                  i = e.length;for (t || (t = Array(i)); ++r < i;) t[r] = e[r];return t;
            }(e); i--;) {
              var s = t[i];e[i] = ie(s, r) ? n[s] : void 0;
            }return e;
          }(l, f) : b && s > 1 && l.reverse(), g && p < s && (l.length = p), this && this !== w && this instanceof n && (M = O || X(M)), M.apply(R, l);
        };
      }function Z(e, t, r, i, a, h, d, f, p, m) {
        var g = t & l;t |= g ? u : c, (t &= ~(g ? c : u)) & o || (t &= ~(n | s));var y = r(e, t, a, g ? h : void 0, g ? d : void 0, g ? void 0 : h, g ? void 0 : d, f, p, m);return y.placeholder = i, ne(y, e, t);
      }function ee(e, t, i, o, h, d, f, p) {
        var m = t & s;if (!m && "function" != typeof e) throw new TypeError(r);var g = o ? o.length : 0;if (g || (t &= ~(u | c), o = h = void 0), f = void 0 === f ? f : J(ae(f), 0), p = void 0 === p ? p : ae(p), g -= h ? h.length : 0, t & c) {
          var y = o,
              v = h;o = h = void 0;
        }var _ = [e, t, i, o, h, y, v, d, f, p];if (e = _[0], t = _[1], i = _[2], o = _[3], h = _[4], !(p = _[9] = null == _[9] ? m ? 0 : e.length : J(_[9] - g, 0)) && t & (l | a) && (t &= ~(l | a)), t && t != n) b = t == l || t == a ? function (e, t, r) {
          var i = X(e);return function n() {
            for (var s = arguments.length, o = Array(s), l = s, a = te(n); l--;) o[l] = arguments[l];var u = s < 3 && o[0] !== a && o[s - 1] !== a ? [] : D(o, a);return (s -= u.length) < r ? Z(e, t, Q, n.placeholder, void 0, o, u, void 0, void 0, r - s) : U(this && this !== w && this instanceof n ? i : e, this, o);
          };
        }(e, t, p) : t != u && t != (n | u) || h.length ? Q.apply(void 0, _) : function (e, t, r, i) {
          var s = t & n,
              o = X(e);return function t() {
            for (var n = -1, l = arguments.length, a = -1, u = i.length, c = Array(u + l), h = this && this !== w && this instanceof t ? o : e; ++a < u;) c[a] = i[a];for (; l--;) c[a++] = arguments[++n];return U(h, s ? r : this, c);
          };
        }(e, t, i, o);else var b = function (e, t, r) {
          var i = t & n,
              s = X(e);return function t() {
            return (this && this !== w && this instanceof t ? s : e).apply(i ? r : this, arguments);
          };
        }(e, t, i);return ne(b, e, t);
      }function te(e) {
        return e.placeholder;
      }function re(e, t) {
        var r = function (e, t) {
          return null == e ? void 0 : e[t];
        }(e, t);return z(r) ? r : void 0;
      }function ie(e, t) {
        return !!(t = null == t ? p : t) && ("number" == typeof e || j.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }var ne = H ? function (e, t, r) {
        var i = t + "";return H(e, "toString", { configurable: !0, enumerable: !1, value: function (e) {
            return function () {
              return e;
            };
          }(function (e, t) {
            var r = t.length,
                i = r - 1;return t[i] = (r > 1 ? "& " : "") + t[i], t = t.join(r > 2 ? ", " : " "), e.replace(E, "{\n/* [wrapped with " + t + "] */\n");
          }(i, function (e, t) {
            return function (e, t) {
              for (var r = -1, i = e ? e.length : 0; ++r < i && !1 !== t(e[r], r, e););
            }(y, function (r) {
              var i = "_." + r[0];t & r[1] && !k(e, i) && e.push(i);
            }), e.sort();
          }(function (e) {
            var t = e.match(R);return t ? t[1].split(M) : [];
          }(i), r))) });
      } : function (e) {
        return e;
      };var se = function (e, t) {
        return t = J(void 0 === t ? e.length - 1 : t, 0), function () {
          for (var r = arguments, i = -1, n = J(r.length - t, 0), s = Array(n); ++i < n;) s[i] = r[t + i];i = -1;for (var o = Array(t + 1); ++i < t;) o[i] = r[i];return o[t] = s, U(e, this, o);
        };
      }(function (e, t, r) {
        var i = n;if (r.length) {
          var s = D(r, te(se));i |= u;
        }return ee(e, i, t, r, s);
      });function oe(e) {
        var t = typeof e;return !!e && ("object" == t || "function" == t);
      }function le(e) {
        return e ? (e = function (e) {
          if ("number" == typeof e) return e;if (function (e) {
            return "symbol" == typeof e || function (e) {
              return !!e && "object" == typeof e;
            }(e) && q.call(e) == b;
          }(e)) return g;if (oe(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;e = oe(t) ? t + "" : t;
          }if ("string" != typeof e) return 0 === e ? e : +e;e = e.replace(O, "");var r = x.test(e);return r || A.test(e) ? I(e.slice(2), r ? 2 : 8) : S.test(e) ? g : +e;
        }(e)) === f || e === -f ? (e < 0 ? -1 : 1) * m : e == e ? e : 0 : 0 === e ? e : 0;
      }function ae(e) {
        var t = le(e),
            r = t % 1;return t == t ? r ? t - r : t : 0;
      }se.placeholder = {}, e.exports = se;
    }).call(this, r(8));
  }, function (e, t, r) {
    "use strict";
    var i;i = function () {
      return this;
    }();try {
      i = i || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (i = window);
    }e.exports = i;
  }, function (e, r) {
    e.exports = t;
  }, function (e, t) {
    e.exports = r;
  }, function (e, t) {
    e.exports = i;
  }, function (e, t) {
    e.exports = n;
  }, function (e, t) {
    e.exports = s;
  }, function (e, t) {
    e.exports = o;
  }, function (e, t) {
    e.exports = l;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = r(2),
        n = r(3),
        s = a(r(1)),
        o = r(4),
        l = a(r(5));function a(e) {
      return e && e.__esModule ? e : { default: e };
    }const u = (e, t) => e.filter(e => Object.keys(t).every(r => e._attributes[r] === t[r])),
          c = r(0),
          h = { add: !0, remove: !0, merge: !0 },
          d = { add: !0, remove: !1 };t.default = class extends i.AugmentedObject {
      constructor(e, t) {
        super(t), this.length = 0, this.models = [], this._byId = {}, this.schema = null, this.validationMessages = { valid: !0 }, t || (t = {}), this.preinitialize(e, t), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize(e, t), e && this.reset(e, (0, n.extend)({ silent: !0 }, t)), this.model || (this.model = new s.default());
      }preinitialize(e, t) {}initialize(e, t) {}toJSON() {
        let e = 0;const t = [],
              r = this.models.length;for (e = 0; e < r; e++) t[e] = this.models[e].toJSON();return t;
      }add(e, t) {
        return this.set(e, (0, n.extend)({ merge: !1 }, t, d));
      }remove(e, t) {
        t = (0, n.extend)({}, t);const r = Array.isArray(e);e = r ? [e] : e.slice();let i = this._removeModels(e, t);return !t.silent && i.length && (t.changes = { added: [], merged: [], removed: i }, this.trigger("update", this, t)), r ? i[0] : i;
      }set(e, t) {
        if (null === e) return;(t = (0, n.extend)({}, h, t)).parse && !this._isModel(e) && (e = this.parse(e, t) || []);let r = !Array.isArray(e);e = r ? [e] : e.slice();let i = t.at;null != i && (i = +i), i > this.length && (i = this.length), i < 0 && (i += this.length + 1);let s,
            o,
            l = [],
            a = [],
            u = [],
            c = [],
            d = {},
            f = t.add,
            p = t.merge,
            m = t.remove,
            g = !1,
            y = this.comparator && null == i && !1 !== t.sort,
            v = (0, n.isString)(this.comparator) ? this.comparator : null;const _ = e.length;for (o = 0; o < _; o++) {
          s = e[o];let r = this.get(s);if (r) {
            if (p && s !== r) {
              let e = this._isModel(s) ? s.attributes : s;t.parse && (e = r.parse(e, t)), r.set(e, t), u.push(r), y && !g && (g = r.hasChanged(v));
            }d[r.cid] || (d[r.cid] = !0, l.push(r)), e[o] = r;
          } else f && (s = e[o] = this._prepareModel(s, t)) && (a.push(s), this._addReference(s, t), d[s.cid] = !0, l.push(s));
        }if (m) {
          for (o = 0; o < this.length; o++) d[(s = this.models[o]).cid] || c.push(s);c.length && this._removeModels(c, t);
        }let b = !1,
            O = !y && f && m;if (l.length && O ? (b = this.length !== l.length || (0, n.some)(this.models, (e, t) => e !== l[t]), this.models.length = 0, (0, n.splice)(this.models, l, 0), this.length = this.models.length) : a.length && (y && (g = !0), (0, n.splice)(this.models, a, null == i ? this.length : i), this.length = this.models.length), g && this.sort({ silent: !0 }), !t.silent) {
          for (o = 0; o < a.length; o++) null != i && (t.index = i + o), (s = a[o]).trigger("add", s, this, t);(g || b) && this.trigger("sort", this, t), (a.length || c.length || u.length) && (t.changes = { added: a, removed: c, merged: u }, this.trigger("update", this, t));
        }return r ? e[0] : e;
      }reset(e, t) {
        t = t ? c(t) : {};for (let e = 0; e < this.models.length; e++) this._removeReference(this.models[e], t);return t.previousModels = this.models, this._reset(), e = this.add(e, (0, n.extend)({ silent: !0 }, t)), t.silent || this.trigger("reset", this, t), e;
      }push(e, t) {
        return this.add(e, (0, n.extend)({ at: this.length }, t));
      }pop(e) {
        const t = this.at(this.length - 1);return this.remove(t, e);
      }unshift(e, t) {
        return this.add(e, (0, n.extend)({ at: 0 }, t));
      }shift(e) {
        const t = this.at(0);return this.remove(t, e);
      }slice(...e) {
        return this.models.slice(e);
      }get(e) {
        if (null != e) return this._byId[e] || this._byId[this.modelId(this._isModel(e) ? e.attributes : e)] || e.cid && this._byId[e.cid];
      }has(e) {
        return null !== this.get(e);
      }at(e) {
        return e < 0 && (e += this.length), this.models[e];
      }find(e) {
        const t = u(this.models, e);return t && t.length > 0 ? t[0] : null;
      }filter(e) {
        return u(this.models, e);
      }where(e, t) {
        return t ? this.find(e) : this.filter(e);
      }findWhere(e) {
        return this.where(e, !0);
      }sort(e) {
        let t = this.comparator;if (!t) throw new Error("Cannot sort a set without a comparator");e || (e = {});let r = t.length;return (0, n.isFunction)(t) && (t = t.bind(this)), 1 === r || (0, n.isString)(t) ? this.models = this.sortBy(t) : this.models.sort(t), e.silent || this.trigger("sort", this, e), this;
      }pluck(e) {
        let t = 0;const r = [],
              i = this.models.length;for (t = 0; t < i; t++) r[t] = this.models[t].toJSON()[e];return r;
      }fetch(e) {}create(e, t) {
        let r = (t = t ? c(t) : {}).wait;if (!(e = this._prepareModel(e, t))) return !1;r || this.add(e, t);let i = this,
            n = t.success;return t.success = (e, t, s) => {
          r && i.add(e, s), n && n.call(s.context, e, t, s);
        }, e.save(null, t), e;
      }parse(e, t) {
        return e;
      }clone() {
        return new this.constructor(this.models, { model: this.model, comparator: this.comparator });
      }modelId(e) {
        return e && this.model && this.model.idAttribute ? e[this.model.idAttribute || "id"] : "id";
      }values() {
        return new l.default(this, ITERATOR_VALUES);
      }keys() {
        return new l.default(this, ITERATOR_KEYS);
      }entries() {
        return new l.default(this, ITERATOR_KEYSVALUES);
      }supportsValidation() {
        return !(!this.schema || null === this.schema || this.schema === {});
      }isValid() {
        return !this.validationMessages || this.validationMessages.valid;
      }getValidationMessages() {
        return this.validationMessages && this.validationMessages.messages ? this.validationMessages.messages : [];
      }validate() {
        if (this.supportsValidation()) {
          let e = [];this.validationMessages.messages = e, this.validationMessages.valid = !0;const t = this.toJSON(),
                r = t && Array.isArray(t) ? t.length : 0;let i = 0;this._validationFramework || (this._validationFramework = new o.ValidationFramework());const n = this._validationFramework;for (i = 0; i < r; i++) e[i] = n.validate(t[i], this.schema), e[i].valid || (this.validationMessages.valid = !1);
        } else this.validationMessages.valid = !0;return this.validationMessages;
      }sync(e, t, r) {}save(e) {
        this.sync("create", this, e);
      }update(e) {
        this.sync("update", this, e);
      }remove(e) {
        this.sync("delete", this, e);
      }sortByKey(e) {
        if (e) {
          const t = this.toJSON();if (t) {
            const r = (0, n.sortObjects)(t, e);this.reset(r);
          }
        }
      }isEmpty() {
        return 0 === this.length;
      }size() {
        return this.length;
      }toString() {
        let e = {};try {
          e = JSON.stringify(this.toJSON());
        } catch (e) {
          console.error(e);
        }return e;
      }_reset() {
        this.length = 0, this.models = [], this._byId = {};
      }_prepareModel(e, t) {
        if (this._isModel(e)) return e.collection || (e.collection = this), e;(t = t ? c(t) : {}).collection = this;const r = new s.default(e, t);return r.validationError ? (this.trigger("invalid", this, r.validationError, t), !1) : r;
      }_removeModels(e, t) {
        let r = [];for (let i = 0; i < e.length; i++) {
          let n = this.get(e[i]);if (!n) continue;let s = this.at(n);this.models.splice(s, 1), this.length--, delete this._byId[n.cid];let o = this.modelId(n.attributes);null != o && delete this._byId[o], t.silent || (t.index = s, n.trigger("remove", n, this, t)), r.push(n), this._removeReference(n, t);
        }return r;
      }_isModel(e) {
        return e instanceof s.default;
      }_addReference(e, t) {
        this._byId[e.cid] = e;let r = this.modelId(e.attributes);null != r && (this._byId[r] = e), e.on("all", this._onModelEvent, this);
      }_removeReference(e, t) {
        delete this._byId[e.cid];let r = this.modelId(e.attributes);null != r && delete this._byId[r], this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this);
      }_onModelEvent(e, t, r, i) {
        if (t) {
          if (("add" === e || "remove" === e) && r !== this) return;if ("destroy" === e && this.remove(t, i), "change" === e) {
            let e = this.modelId(t.previousAttributes()),
                r = this.modelId(t.attributes);e !== r && (null != e && delete this._byId[e], null != r && (this._byId[r] = t));
          }
        }this.trigger.apply(this, arguments);
      }
    };
  }]);
});
//# sourceMappingURL=core-next-model.js.map

/***/ }),

/***/ "./node_modules/next-core-object/dist/next-core-object.js":
/*!****************************************************************!*\
  !*** ./node_modules/next-core-object/dist/next-core-object.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function (e, t) {
   true ? module.exports = t(__webpack_require__(/*! lodash.bind */ "./node_modules/lodash.bind/index.js")) : undefined;
}(undefined, function (e) {
  return function (e) {
    var t = {};function r(n) {
      if (t[n]) return t[n].exports;var o = t[n] = { i: n, l: !1, exports: {} };return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }return r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var n = Object.create(null);if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));return n;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "/dist/", r(r.s = 1);
  }([function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });const n = t.EVENT_SPLITTER = /\s+/,
          o = t.eventsApi = (e, t, r, i, s) => {
      let l,
          u = 0;if (r && "object" == typeof r) {
        void 0 !== i && "context" in s && void 0 === s.context && (s.context = i);for (l = Object.keys(r); u < l.length; u++) t = o(e, t, l[u], r[l[u]], s);
      } else if (r && n.test(r)) for (l = r.split(n); u < l.length; u++) t = e(t, l[u], i, s);else t = e(t, r, i, s);return t;
    },
          i = (t.internalOn = (e, t, r, n, s) => {
      if (e._events = o(i, e._events || {}, t, r, { context: n, ctx: e, listening: s }), s) {
        (e._listeners || (e._listeners = {}))[s.id] = s;
      }return e;
    }, t.onApi = (e, t, r, n) => {
      if (r) {
        const o = e[t] || (e[t] = []),
              i = n.context,
              s = n.ctx,
              l = n.listening;l && l.count++, o.push({ callback: r, context: i, ctx: i || s, listening: l });
      }return e;
    }),
          s = (t.offApi = (e, t, r, n) => {
      if (!e) return;let o,
          i = 0;const s = n.context,
            l = n.listeners;if (!t && !r && !s) {
        const e = Object.keys(l);for (; i < e.length; i++) delete l[(o = l[e[i]]).id], delete o.listeningTo[o.objId];return;
      }let u = t ? [t] : Object.keys(e);for (; i < u.length; i++) {
        const n = e[t = u[i]];if (!n) break;const c = [];let f = 0;for (f = 0; f < n.length; f++) {
          const e = n[f];r && r !== e.callback && r !== e.callback._callback || s && s !== e.context ? c.push(e) : (o = e.listening) && 0 == --o.count && (delete l[o.id], delete o.listeningTo[o.objId]);
        }c.length ? e[t] = c : delete e[t];
      }return e;
    }, t.triggerApi = (e, t, r, n) => {
      if (e) {
        const r = e[t];let o = e.all;r && o && (o = o.slice()), r && s(r, n), o && s(o, [t].concat(n));
      }return e;
    }, t.triggerEvents = (e, t) => {
      let r,
          n = -1;const o = e.length,
            i = t[0],
            s = t[1],
            l = t[2];switch (t.length) {case 0:
          for (; ++n < o;) (r = e[n]).callback.call(r.ctx);return;case 1:
          for (; ++n < o;) (r = e[n]).callback.call(r.ctx, i);return;case 2:
          for (; ++n < o;) (r = e[n]).callback.call(r.ctx, i, s);return;case 3:
          for (; ++n < o;) (r = e[n]).callback.call(r.ctx, i, s, l);return;default:
          for (; ++n < o;) (r = e[n]).callback.apply(r.ctx, t);return;}
    });
  }, function (e, t, r) {
    "use strict";
    var n = s(r(2)),
        o = s(r(5)),
        i = r(0);function s(e) {
      return e && e.__esModule ? e : { default: e };
    }e.exports.AugmentedObject = n.default, e.exports.Configuration = o.default, e.exports.eventsApi = i.eventsApi, e.exports.eventsApi = i.internalOn, e.exports.eventsApi = i.offApi, e.exports.eventsApi = i.triggerApi;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(3),
        o = r(0);const i = r(4);t.default = class {
      constructor(e) {
        e || (e = {}), this._options || (this._options = {}), Object.assign(this._options, e), e && e.events ? this._events = e.events : this._events = {}, this._listeningTo = {}, this._listenId = {}, this._listeners = {};
      }initialize(...e) {
        return this;
      }get options() {
        return this._options;
      }set options(e) {
        this._options = e;
      }get events() {
        return this._events;
      }set events(e) {
        this._events = e;
      }trigger(e, ...t) {
        if (this._events) {
          const r = Array.isArray(t) ? t : Array.from(t);(0, o.eventsApi)(o.triggerApi, this._events, e, void 0, r);
        }return this;
      }once(e, t, r) {
        const n = (0, o.eventsApi)(this._onceMap, {}, e, t, i(this.off, this));return "string" == typeof e && null == r && (t = void 0), this.on(n, t, r);
      }off(e, t, r) {
        return this._events && (this._events = (0, o.eventsApi)(o.offApi, this._events, e, t, { context: r, listeners: this._listeners })), this;
      }stopListening(e, t, r) {
        const n = this._listeningTo;if (n) {
          const o = e ? [e._listenId] : Object.keys(n);let i = 0;for (i = 0; i < o.length; i++) {
            const e = n[o[i]];if (!e) break;e.obj.off(t, r, this);
          }
        }return this;
      }on(e, t, r) {
        return (0, o.internalOn)(this, e, t, r);
      }listenTo(e, t, r) {
        if (e) {
          const i = e._listenId || (e._listenId = (0, n.uniqueId)("l")),
                s = this._listeningTo || (this._listeningTo = {});let l = s[i];if (!l) {
            const t = this._listenId || (this._listenId = (0, n.uniqueId)("l"));l = s[i] = { obj: e, objId: i, id: t, listeningTo: s, count: 0 };
          }(0, o.internalOn)(e, t, r, this, l);
        }return this;
      }listenToOnce(e, t, r) {
        const n = (0, o.eventsApi)(this._onceMap, {}, t, r, i(this.stopListening, this, e));return this.listenTo(e, n);
      }_onceMap(e, t, r, o) {
        if (r) {
          const i = e[t] = (0, n.once)(() => {
            o(t, i), r.apply(this, arguments);
          });i._callback = r;
        }return e;
      }
    };
  }, function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      var t = {};function r(n) {
        if (t[n]) return t[n].exports;var o = t[n] = { i: n, l: !1, exports: {} };return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
      }return r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
      }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var n = Object.create(null);if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
          return e[t];
        }.bind(null, o));return n;
      }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };return r.d(t, "a", t), t;
      }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, r.p = "/dist/", r(r.s = 3);
    }([function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => {
        const t = typeof e;return "function" === t || "object" === t && !!e;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => "[object Function]" == Object.prototype.toString.call(e);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var n = arguments;t.default = (e, t) => {
        let r, o;if ("function" != typeof t) throw new TypeError(FUNC_ERROR_TEXT);return o = Number.parseInt(e), () => (--o > 0 && (r = t.apply(void 0, n)), o <= 1 && (t = void 0), r);
      };
    }, function (e, t, r) {
      var n = S(r(4)),
          o = S(r(1)),
          i = S(r(5)),
          s = S(r(6)),
          l = S(r(7)),
          u = S(r(8)),
          c = S(r(0)),
          f = S(r(9)),
          a = S(r(10)),
          p = S(r(11)),
          d = S(r(12)),
          b = S(r(13)),
          y = S(r(14)),
          _ = S(r(15)),
          h = S(r(16)),
          g = S(r(2)),
          v = S(r(17)),
          x = r(18),
          O = r(19),
          j = r(20),
          M = S(r(21)),
          m = S(r(22));function S(e) {
        return e && e.__esModule ? e : { default: e };
      }e.exports.shuffle = O.shuffle, e.exports.prettyPrint = O.prettyPrint, e.exports.binarySearch = O.binarySearch, e.exports.TransformerType = O.TransformerType, e.exports.Transformer = O.Transformer, e.exports.wrap = O.wrap, e.exports.filterObject = O.filterObject, e.exports.findByMatchingProperties = O.findByMatchingProperties, e.exports.sortObjects = j.sortObjects, e.exports.mergeSort = j.mergeSort, e.exports.quickSort = j.quickSort, e.exports.insertionSort = j.insertionSort, e.exports.bubbleSort = j.bubbleSort, e.exports.formatDate = M.default, e.exports.formatBinary = m.default, e.exports.isString = n.default, e.exports.isFunction = o.default, e.exports.extend = i.default, e.exports.pad = s.default, e.exports.uniqueId = l.default, e.exports.has = u.default, e.exports.isObject = c.default, e.exports.allKeys = f.default, e.exports.create = a.default, e.exports.result = p.default, e.exports.arrayHas = d.default, e.exports.exec = b.default, e.exports.isDefined = y.default, e.exports.some = _.default, e.exports.splice = h.default, e.exports.before = g.default, e.exports.once = v.default, e.exports.fibonacci = x.fibonacci, e.exports.fibonacciSequence = x.fibonacciSequence;
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => "string" == typeof e || !!e && "object" == typeof e && "[object String]" === Object.prototype.toString.call(e);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (...e) => {
        let t = 0;const r = e.length;for (t = 1; t < r; t++) {
          let r;for (r in e[t]) e[t].hasOwnProperty(r) && (e[0][r] = e[t][r]);
        }return e[0];
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t, r) => void 0 === t ? e : r ? `${e}${t}` : `${t}${e}`;
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });let n = 0;t.default = e => `${e}${++n}`;
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t) => null !== e && hasOwnProperty.call(e, t);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var n = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(r(0));t.default = e => (0, n.default)(e) ? Object.getOwnPropertyNames(e) : [];
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var n = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(r(0));t.default = (e, t) => {
        const r = (e => (0, n.default)(e) ? Object.create(e) : {})(e);return t && Object.assign(r, t), r;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var n = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(r(1));t.default = (e, t) => {
        if (null === e) return;const r = e[t];return (0, n.default)(r) ? r.call(e) : r;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t) => -1 !== e.indexOf(t);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t, ...r) => {
        const n = e.split("."),
              o = n.pop(),
              i = n.length;let s = 0;for (s = 0; s < i; s++) t = t[n[s]];return t[o].apply(t, r);
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => void 0 !== e;
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t) => !!Array.isArray(e) && e.some(t);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t, r) => {
        r = Math.min(Math.max(r, 0), e.length);let n = Array(e.length - r);const o = t.length;let i;for (i = 0; i < n.length; i++) n[i] = e[i + r];for (i = 0; i < o; i++) e[i + r] = t[i];for (i = 0; i < n.length; i++) e[i + o + r] = n[i];
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var n = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(r(2));t.default = e => (0, n.default)(2, e);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });const n = t.fibonacci = e => {
        const t = (1 + Math.sqrt(5)) / 2,
              r = Math.pow(t, e) / Math.sqrt(5);return Math.round(r);
      };t.fibonacciSequence = e => {
        const t = [];let r = 0;for (r = 0; r < e; r++) t.push(n(r));return t;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var n = arguments;t.shuffle = e => {
        const t = e.slice(0);let r,
            n,
            o = 0;for (o = e.length - 1; o > 0; o--) n = Math.floor(Math.random() * (o + 1)), r = t[o], t[o] = t[n], t[n] = r;return t;
      }, t.prettyPrint = (e, t, r) => {
        let n = "\t";return t && (n = " ".repeat(r)), JSON.stringify(e, null, n);
      }, t.binarySearch = (e, t, r) => {
        let n,
            o,
            i = 0,
            s = e.length - 1;for (; i <= s;) if ((o = r(e[n = Math.floor((i + s) / 2)], t)) < 0) i = n + 1;else {
          if (!(o > 0)) return n;s = n - 1;
        }return null;
      };const o = t.TransformerType = {};o.STRING = Symbol("String"), o.INTEGER = Symbol("Integer"), o.NUMBER = Symbol("Number"), o.BOOLEAN = Symbol("Boolean"), o.ARRAY = Symbol("Array"), o.OBJECT = Symbol("Object"), o.NULL = Symbol("Null"), t.Transformer = class {
        constructor() {
          this.type = o;
        }static transform(e, t) {
          let r = null;switch (t) {case o.STRING:
              r = "object" == typeof e ? JSON.stringify(e) : String(e);break;case o.INTEGER:
              r = parseInt(e);break;case o.NUMBER:
              r = Number(e);break;case o.BOOLEAN:
              r = Boolean(e);break;case o.ARRAY:
              Array.isArray(e) ? r = e : (r = [])[0] = e;break;case o.OBJECT:
              "object" != typeof e ? (r = {})[e] = e : r = e;}return r;
        }static isType(e) {
          return null === e ? o.NULL : "string" == typeof e ? o.STRING : "number" == typeof e ? o.NUMBER : "boolean" == typeof e ? o.BOOLEAN : Array.isArray(e) ? o.ARRAY : "object" == typeof e ? o.OBJECT : void 0;
        }
      }, t.wrap = (e, t) => () => t.apply(void 0, [e].concat(Array.prototype.slice.call(n))), t.filterObject = (e, t) => {
        const r = {};if (e && t) {
          const n = t.length;let o = 0;for (o = 0; o < n; o++) r[t[o]] = e[t[o]];
        }return r;
      }, t.findByMatchingProperties = (e, t) => e.filter(e => Object.keys(t).every(r => e[r] === t[r]));
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.sortObjects = (e, t) => e.sort((e, r) => {
        const n = e[t],
              o = r[t];return n < o ? -1 : n > o ? 1 : 0;
      });const n = t.mergeSort = e => {
        if (1 === e.length) return e;const t = Math.floor(e.length / 2),
              r = e.slice(0, t),
              i = e.slice(t);return o(n(r), n(i));
      },
            o = (e, t) => {
        let r = [],
            n = 0,
            o = 0;for (; n < e.length && o < t.length;) e[n] < t[o] ? (r.push(e[n]), n++) : (r.push(t[o]), o++);return r.concat(e.slice(n)).concat(t.slice(o));
      },
            i = t.quickSort = e => {
        if (0 === e.length) return [];let t = 1;const r = e.length,
              n = [],
              o = [],
              s = e[0];for (t = 1; t < r; t++) e[t] < s ? n.push(e[t]) : o.push(e[t]);return i(n).concat(s, i(o));
      };t.insertionSort = e => {
        let t = [];if (e) {
          const r = (t = e.slice()).length;let n, o, i;for (n = 1; n < r; n++) {
            for (i = t[n], o = n - 1; o >= 0 && t[o] > i; o--) t[o + 1] = t[o];t[o + 1] = i;
          }
        }return t;
      }, t.bubbleSort = e => {
        let t = [];if (e) {
          let r, n, o;const i = (t = e.slice()).length - 1;do {
            for (r = !1, n = 0; n < i; n++) t[n] > t[n + 1] && (o = t[n], t[n] = t[n + 1], t[n + 1] = o, r = !0);
          } while (r);
        }return t;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => {
        const t = e.getFullYear(),
              r = e.getMonth() + 1,
              n = e.getDate(),
              o = e.getHours(),
              i = e.getMinutes();return e.getSeconds(), `${r}/${n}/${t} ${o % 12 || 12}:${i < 10 ? "0" + i : i}${o < 12 ? "am" : "pm"}`;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t) => (e => {
        let t = 0,
            r = e,
            n = "";for (t = 0; t < 32; t++, n += String(r >>> 31), r <<= 1);return n;
      })(e).split("").reverse().join("").substring(0, t);
    }]);
  }, function (t, r) {
    t.exports = e;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = { LoggerLevel: "error", MessageBundle: "Messages", AsynchronousQueueTimeout: 2e3, ApplicationInitProcessTimeout: 1e3 };
  }]);
});
//# sourceMappingURL=next-core-object.js.map

/***/ }),

/***/ "./node_modules/next-core-structures/dist/next-core-structures.js":
/*!************************************************************************!*\
  !*** ./node_modules/next-core-structures/dist/next-core-structures.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function (e, t) {
   true ? module.exports = t() : undefined;
}(undefined, function () {
  return function (e) {
    var t = {};function r(n) {
      if (t[n]) return t[n].exports;var o = t[n] = { i: n, l: !1, exports: {} };return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }return r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var n = Object.create(null);if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));return n;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "/dist/", r(r.s = 1);
  }([function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      var t = {};function r(n) {
        if (t[n]) return t[n].exports;var o = t[n] = { i: n, l: !1, exports: {} };return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
      }return r.m = e, r.c = t, r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }, r.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
      }, r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var n = Object.create(null);if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
          return e[t];
        }.bind(null, o));return n;
      }, r.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };return r.d(t, "a", t), t;
      }, r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, r.p = "/dist/", r(r.s = 3);
    }([function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => {
        const t = typeof e;return "function" === t || "object" === t && !!e;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => "[object Function]" == Object.prototype.toString.call(e);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var n = arguments;t.default = (e, t) => {
        let r, o;if ("function" != typeof t) throw new TypeError(FUNC_ERROR_TEXT);return o = Number.parseInt(e), () => (--o > 0 && (r = t.apply(void 0, n)), o <= 1 && (t = void 0), r);
      };
    }, function (e, t, r) {
      var n = S(r(4)),
          o = S(r(1)),
          u = S(r(5)),
          s = S(r(6)),
          l = S(r(7)),
          i = S(r(8)),
          a = S(r(0)),
          c = S(r(9)),
          f = S(r(10)),
          d = S(r(11)),
          p = S(r(12)),
          y = S(r(13)),
          h = S(r(14)),
          _ = S(r(15)),
          b = S(r(16)),
          O = S(r(2)),
          g = S(r(17)),
          j = r(18),
          x = r(19),
          v = r(20),
          M = S(r(21)),
          m = S(r(22));function S(e) {
        return e && e.__esModule ? e : { default: e };
      }e.exports.shuffle = x.shuffle, e.exports.prettyPrint = x.prettyPrint, e.exports.binarySearch = x.binarySearch, e.exports.TransformerType = x.TransformerType, e.exports.Transformer = x.Transformer, e.exports.wrap = x.wrap, e.exports.filterObject = x.filterObject, e.exports.findByMatchingProperties = x.findByMatchingProperties, e.exports.sortObjects = v.sortObjects, e.exports.mergeSort = v.mergeSort, e.exports.quickSort = v.quickSort, e.exports.insertionSort = v.insertionSort, e.exports.bubbleSort = v.bubbleSort, e.exports.formatDate = M.default, e.exports.formatBinary = m.default, e.exports.isString = n.default, e.exports.isFunction = o.default, e.exports.extend = u.default, e.exports.pad = s.default, e.exports.uniqueId = l.default, e.exports.has = i.default, e.exports.isObject = a.default, e.exports.allKeys = c.default, e.exports.create = f.default, e.exports.result = d.default, e.exports.arrayHas = p.default, e.exports.exec = y.default, e.exports.isDefined = h.default, e.exports.some = _.default, e.exports.splice = b.default, e.exports.before = O.default, e.exports.once = g.default, e.exports.fibonacci = j.fibonacci, e.exports.fibonacciSequence = j.fibonacciSequence;
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => "string" == typeof e || !!e && "object" == typeof e && "[object String]" === Object.prototype.toString.call(e);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (...e) => {
        let t = 0;const r = e.length;for (t = 1; t < r; t++) {
          let r;for (r in e[t]) e[t].hasOwnProperty(r) && (e[0][r] = e[t][r]);
        }return e[0];
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t, r) => void 0 === t ? e : r ? `${e}${t}` : `${t}${e}`;
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });let n = 0;t.default = e => `${e}${++n}`;
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t) => null !== e && hasOwnProperty.call(e, t);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var n = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(r(0));t.default = e => (0, n.default)(e) ? Object.getOwnPropertyNames(e) : [];
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var n = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(r(0));t.default = (e, t) => {
        const r = (e => (0, n.default)(e) ? Object.create(e) : {})(e);return t && Object.assign(r, t), r;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var n = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(r(1));t.default = (e, t) => {
        if (null === e) return;const r = e[t];return (0, n.default)(r) ? r.call(e) : r;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t) => -1 !== e.indexOf(t);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t, ...r) => {
        const n = e.split("."),
              o = n.pop(),
              u = n.length;let s = 0;for (s = 0; s < u; s++) t = t[n[s]];return t[o].apply(t, r);
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => void 0 !== e;
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t) => !!Array.isArray(e) && e.some(t);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t, r) => {
        r = Math.min(Math.max(r, 0), e.length);let n = Array(e.length - r);const o = t.length;let u;for (u = 0; u < n.length; u++) n[u] = e[u + r];for (u = 0; u < o; u++) e[u + r] = t[u];for (u = 0; u < n.length; u++) e[u + o + r] = n[u];
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var n = function (e) {
        return e && e.__esModule ? e : { default: e };
      }(r(2));t.default = e => (0, n.default)(2, e);
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });const n = t.fibonacci = e => {
        const t = (1 + Math.sqrt(5)) / 2,
              r = Math.pow(t, e) / Math.sqrt(5);return Math.round(r);
      };t.fibonacciSequence = e => {
        const t = [];let r = 0;for (r = 0; r < e; r++) t.push(n(r));return t;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 });var n = arguments;t.shuffle = e => {
        const t = e.slice(0);let r,
            n,
            o = 0;for (o = e.length - 1; o > 0; o--) n = Math.floor(Math.random() * (o + 1)), r = t[o], t[o] = t[n], t[n] = r;return t;
      }, t.prettyPrint = (e, t, r) => {
        let n = "\t";return t && (n = " ".repeat(r)), JSON.stringify(e, null, n);
      }, t.binarySearch = (e, t, r) => {
        let n,
            o,
            u = 0,
            s = e.length - 1;for (; u <= s;) if ((o = r(e[n = Math.floor((u + s) / 2)], t)) < 0) u = n + 1;else {
          if (!(o > 0)) return n;s = n - 1;
        }return null;
      };const o = t.TransformerType = {};o.STRING = Symbol("String"), o.INTEGER = Symbol("Integer"), o.NUMBER = Symbol("Number"), o.BOOLEAN = Symbol("Boolean"), o.ARRAY = Symbol("Array"), o.OBJECT = Symbol("Object"), o.NULL = Symbol("Null"), t.Transformer = class {
        constructor() {
          this.type = o;
        }static transform(e, t) {
          let r = null;switch (t) {case o.STRING:
              r = "object" == typeof e ? JSON.stringify(e) : String(e);break;case o.INTEGER:
              r = parseInt(e);break;case o.NUMBER:
              r = Number(e);break;case o.BOOLEAN:
              r = Boolean(e);break;case o.ARRAY:
              Array.isArray(e) ? r = e : (r = [])[0] = e;break;case o.OBJECT:
              "object" != typeof e ? (r = {})[e] = e : r = e;}return r;
        }static isType(e) {
          return null === e ? o.NULL : "string" == typeof e ? o.STRING : "number" == typeof e ? o.NUMBER : "boolean" == typeof e ? o.BOOLEAN : Array.isArray(e) ? o.ARRAY : "object" == typeof e ? o.OBJECT : void 0;
        }
      }, t.wrap = (e, t) => () => t.apply(void 0, [e].concat(Array.prototype.slice.call(n))), t.filterObject = (e, t) => {
        const r = {};if (e && t) {
          const n = t.length;let o = 0;for (o = 0; o < n; o++) r[t[o]] = e[t[o]];
        }return r;
      }, t.findByMatchingProperties = (e, t) => e.filter(e => Object.keys(t).every(r => e[r] === t[r]));
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.sortObjects = (e, t) => e.sort((e, r) => {
        const n = e[t],
              o = r[t];return n < o ? -1 : n > o ? 1 : 0;
      });const n = t.mergeSort = e => {
        if (1 === e.length) return e;const t = Math.floor(e.length / 2),
              r = e.slice(0, t),
              u = e.slice(t);return o(n(r), n(u));
      },
            o = (e, t) => {
        let r = [],
            n = 0,
            o = 0;for (; n < e.length && o < t.length;) e[n] < t[o] ? (r.push(e[n]), n++) : (r.push(t[o]), o++);return r.concat(e.slice(n)).concat(t.slice(o));
      },
            u = t.quickSort = e => {
        if (0 === e.length) return [];let t = 1;const r = e.length,
              n = [],
              o = [],
              s = e[0];for (t = 1; t < r; t++) e[t] < s ? n.push(e[t]) : o.push(e[t]);return u(n).concat(s, u(o));
      };t.insertionSort = e => {
        let t = [];if (e) {
          const r = (t = e.slice()).length;let n, o, u;for (n = 1; n < r; n++) {
            for (u = t[n], o = n - 1; o >= 0 && t[o] > u; o--) t[o + 1] = t[o];t[o + 1] = u;
          }
        }return t;
      }, t.bubbleSort = e => {
        let t = [];if (e) {
          let r, n, o;const u = (t = e.slice()).length - 1;do {
            for (r = !1, n = 0; n < u; n++) t[n] > t[n + 1] && (o = t[n], t[n] = t[n + 1], t[n + 1] = o, r = !0);
          } while (r);
        }return t;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = e => {
        const t = e.getFullYear(),
              r = e.getMonth() + 1,
              n = e.getDate(),
              o = e.getHours(),
              u = e.getMinutes();return e.getSeconds(), `${r}/${n}/${t} ${o % 12 || 12}:${u < 10 ? "0" + u : u}${o < 12 ? "am" : "pm"}`;
      };
    }, function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.default = (e, t) => (e => {
        let t = 0,
            r = e,
            n = "";for (t = 0; t < 32; t++, n += String(r >>> 31), r <<= 1);return n;
      })(e).split("").reverse().join("").substring(0, t);
    }]);
  }, function (e, t, r) {
    "use strict";
    var n = s(r(2)),
        o = s(r(3)),
        u = s(r(4));function s(e) {
      return e && e.__esModule ? e : { default: e };
    }e.exports.Stack = n.default, e.exports.AugmentedMap = o.default, e.exports.AsynchronousQueue = u.default;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = class {
      constructor(e) {
        e || (e = {}), e.stack ? this._stack = e.stack : this._stack = [];
      }empty() {
        return 0 === this._stack.length;
      }peek() {
        return this._stack[0];
      }pop() {
        return this._stack.pop();
      }push(e) {
        this._stack.push(e);
      }search(e) {
        return this._stack.indexOf(e);
      }size() {
        return this._stack.length;
      }clear() {
        this._stack.splice(0, this._stack.length);
      }toArray() {
        return this._stack;
      }toString() {
        return this._stack.toString();
      }
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(0);class o {
      constructor(e) {
        this._keys = [], this._data = {}, e && this.marshall(e);
      }set(e, t) {
        null !== e && null !== t && (this._data[e] || this._keys.push(e), this._data[e] = t);
      }get(e) {
        return this._data[e];
      }indexOf(e) {
        return this._keys.indexOf(e);
      }remove(e) {
        const t = this.indexOf(e);this._keys.splice(t, 1), delete this._data[e];
      }has(e) {
        return -1 !== this.indexOf(e);
      }forEach(e) {
        if ("function" != typeof e) return null;const t = this._keys.length;let r,
            n = 0;for (n = 0; n < t; n++) e(r = this._keys[n], this._data[r], n);
      }key(e) {
        return this._keys[e];
      }entries() {
        let e = 0;const t = this._keys.length,
              r = new Array(t);for (e = 0; e < t; e++) r[e] = { key: this._keys[e], value: this._data[e] };return r;
      }values() {
        const e = this._keys.length,
              t = new Array(e);let r,
            n = 0;for (n = 0; n < e; n++) r = this._keys[n], t[n] = this._data[r];return t;
      }clear() {
        this._keys = [], this._data = {};
      }size() {
        return this._keys.length;
      }toJSON() {
        return this._data;
      }toString() {
        return JSON.stringify(this._data);
      }isEmpty() {
        return 0 === this._keys.length;
      }marshall(e) {
        let t;if (e && e instanceof o) t = e.toJSON();else if (e && e instanceof Object && Object.keys(e).length > 0) t = e;else {
          if (!e || !(0, n.isString)(e)) return console.warn("Map: Could not marshall data."), !1;try {
            t = JSON.parse(e);
          } catch (e) {
            return console.warn("Map: Could not marshall data."), !1;
          }
        }const r = Object.keys(t);r.length;return this._keys = r, this._data = t, !0;
      }
    }t.default = o;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var n = r(0);const o = 2e3;t.default = class {
      constructor(e) {
        this._timeout = e || o, this._queue = {};
      }add(...e) {
        return !!(e && e.length > 0) && ((0, n.extend)(this._queue, e), !0);
      }clear() {
        this._queue.length > 0 && this._queue.splice(0, this._queue.length);
      }process(...e) {
        e && (0, n.extend)(this._queue, e);const t = this._queue,
              r = Object.keys(t).length;let o = this._timeout;if (r <= 0) return !1;const u = e => {
          if (e >= r || "function" != typeof t[e]) return !1;setTimeout(() => {
            t[e](), u(e + 1);
          }, o);
        };return u(0), !0;
      }get timeout() {
        return this._timeout;
      }get queue() {
        return this._queue;
      }
    };
  }]);
});
//# sourceMappingURL=next-core-structures.js.map

/***/ }),

/***/ "./node_modules/next-core-utilities/dist/next-core-utilities.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next-core-utilities/dist/next-core-utilities.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function (e, t) {
   true ? module.exports = t() : undefined;
}(undefined, function () {
  return function (e) {
    var t = {};function r(o) {
      if (t[o]) return t[o].exports;var n = t[o] = { i: o, l: !1, exports: {} };return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
    }return r.m = e, r.c = t, r.d = function (e, t, o) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var o = Object.create(null);if (r.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var n in e) r.d(o, n, function (t) {
        return e[t];
      }.bind(null, n));return o;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "/dist/", r(r.s = 3);
  }([function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = e => {
      const t = typeof e;return "function" === t || "object" === t && !!e;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = e => "[object Function]" == Object.prototype.toString.call(e);
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var o = arguments;t.default = (e, t) => {
      let r, n;if ("function" != typeof t) throw new TypeError(FUNC_ERROR_TEXT);return n = Number.parseInt(e), () => (--n > 0 && (r = t.apply(void 0, o)), n <= 1 && (t = void 0), r);
    };
  }, function (e, t, r) {
    "use strict";
    var o = P(r(4)),
        n = P(r(1)),
        u = P(r(5)),
        l = P(r(6)),
        s = P(r(7)),
        i = P(r(8)),
        c = P(r(0)),
        f = P(r(9)),
        a = P(r(10)),
        d = P(r(11)),
        p = P(r(12)),
        b = P(r(13)),
        y = P(r(14)),
        _ = P(r(15)),
        O = P(r(16)),
        j = P(r(2)),
        h = P(r(17)),
        g = r(18),
        x = r(19),
        M = r(20),
        v = P(r(21)),
        S = P(r(22)),
        m = P(r(23));function P(e) {
      return e && e.__esModule ? e : { default: e };
    }e.exports.shuffle = x.shuffle, e.exports.prettyPrint = x.prettyPrint, e.exports.binarySearch = x.binarySearch, e.exports.TransformerType = x.TransformerType, e.exports.Transformer = x.Transformer, e.exports.wrap = x.wrap, e.exports.filterObject = x.filterObject, e.exports.findByMatchingProperties = x.findByMatchingProperties, e.exports.sortObjects = M.sortObjects, e.exports.mergeSort = M.mergeSort, e.exports.quickSort = M.quickSort, e.exports.insertionSort = M.insertionSort, e.exports.bubbleSort = M.bubbleSort, e.exports.formatDate = v.default, e.exports.formatBinary = S.default, e.exports.isString = o.default, e.exports.isFunction = n.default, e.exports.extend = u.default, e.exports.pad = l.default, e.exports.uniqueId = s.default, e.exports.has = i.default, e.exports.isObject = c.default, e.exports.allKeys = f.default, e.exports.create = a.default, e.exports.result = d.default, e.exports.arrayHas = p.default, e.exports.exec = b.default, e.exports.isDefined = y.default, e.exports.some = _.default, e.exports.splice = O.default, e.exports.before = j.default, e.exports.once = h.default, e.exports.filter = m.default, e.exports.fibonacci = g.fibonacci, e.exports.fibonacciSequence = g.fibonacciSequence;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = e => "string" == typeof e || !!e && "object" == typeof e && "[object String]" === Object.prototype.toString.call(e);
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (...e) => {
      let t = 0;const r = e.length;for (t = 1; t < r; t++) {
        let r;for (r in e[t]) e[t].hasOwnProperty(r) && (e[0][r] = e[t][r]);
      }return e[0];
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (e, t, r) => void 0 === t ? e : r ? `${e}${t}` : `${t}${e}`;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });let o = 0;t.default = e => {
      return `${e}${++o}`;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (e, t) => null !== e && hasOwnProperty.call(e, t);
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var o = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(r(0));t.default = e => (0, o.default)(e) ? Object.getOwnPropertyNames(e) : [];
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var o = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(r(0));t.default = (e, t) => {
      const r = (e => (0, o.default)(e) ? Object.create(e) : {})(e);return t && Object.assign(r, t), r;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var o = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(r(1));t.default = (e, t) => {
      if (null === e) return;const r = e[t];return (0, o.default)(r) ? r.call(e) : r;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (e, t) => -1 !== e.indexOf(t);
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (e, t, ...r) => {
      const o = e.split("."),
            n = o.pop(),
            u = o.length;let l = 0;for (l = 0; l < u; l++) t = t[o[l]];return t[n].apply(t, r);
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = e => void 0 !== e;
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (e, t) => !!Array.isArray(e) && e.some(t);
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (e, t, r) => {
      r = Math.min(Math.max(r, 0), e.length);let o = Array(e.length - r);const n = t.length;let u;for (u = 0; u < o.length; u++) o[u] = e[u + r];for (u = 0; u < n; u++) e[u + r] = t[u];for (u = 0; u < o.length; u++) e[u + n + r] = o[u];
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var o = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(r(2));t.default = e => (0, o.default)(2, e);
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });const o = t.fibonacci = e => {
      const t = (1 + Math.sqrt(5)) / 2,
            r = Math.pow(t, e) / Math.sqrt(5);return Math.round(r);
    };t.fibonacciSequence = e => {
      const t = [];let r = 0;for (r = 0; r < e; r++) t.push(o(r));return t;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var o = arguments;t.shuffle = e => {
      const t = e.slice(0);let r,
          o,
          n = 0;for (n = e.length - 1; n > 0; n--) o = Math.floor(Math.random() * (n + 1)), r = t[n], t[n] = t[o], t[o] = r;return t;
    }, t.prettyPrint = (e, t, r) => {
      let o = "\t";return t && (o = " ".repeat(r)), JSON.stringify(e, null, o);
    }, t.binarySearch = (e, t, r) => {
      let o,
          n,
          u = 0,
          l = e.length - 1;for (; u <= l;) if ((n = r(e[o = Math.floor((u + l) / 2)], t)) < 0) u = o + 1;else {
        if (!(n > 0)) return o;l = o - 1;
      }return null;
    };const n = t.TransformerType = {};n.STRING = Symbol("String"), n.INTEGER = Symbol("Integer"), n.NUMBER = Symbol("Number"), n.BOOLEAN = Symbol("Boolean"), n.ARRAY = Symbol("Array"), n.OBJECT = Symbol("Object"), n.NULL = Symbol("Null");t.Transformer = class {
      constructor() {
        this.type = n;
      }static transform(e, t) {
        let r = null;switch (t) {case n.STRING:
            r = "object" == typeof e ? JSON.stringify(e) : String(e);break;case n.INTEGER:
            r = parseInt(e);break;case n.NUMBER:
            r = Number(e);break;case n.BOOLEAN:
            r = Boolean(e);break;case n.ARRAY:
            Array.isArray(e) ? r = e : (r = [])[0] = e;break;case n.OBJECT:
            "object" != typeof e ? (r = {})[e] = e : r = e;}return r;
      }static isType(e) {
        return null === e ? n.NULL : "string" == typeof e ? n.STRING : "number" == typeof e ? n.NUMBER : "boolean" == typeof e ? n.BOOLEAN : Array.isArray(e) ? n.ARRAY : "object" == typeof e ? n.OBJECT : void 0;
      }
    };t.wrap = (e, t) => () => t.apply(void 0, [e].concat(Array.prototype.slice.call(o))), t.filterObject = (e, t) => {
      const r = {};if (e && t) {
        const o = t.length;let n = 0;for (n = 0; n < o; n++) r[t[n]] = e[t[n]];
      }return r;
    }, t.findByMatchingProperties = (e, t) => e.filter(e => Object.keys(t).every(r => e[r] === t[r]));
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.sortObjects = (e, t) => e.sort((e, r) => {
      const o = e[t],
            n = r[t];return o < n ? -1 : o > n ? 1 : 0;
    });const o = t.mergeSort = e => {
      if (1 === e.length) return e;const t = Math.floor(e.length / 2),
            r = e.slice(0, t),
            u = e.slice(t);return n(o(r), o(u));
    },
          n = (e, t) => {
      let r = [],
          o = 0,
          n = 0;for (; o < e.length && n < t.length;) e[o] < t[n] ? (r.push(e[o]), o++) : (r.push(t[n]), n++);return r.concat(e.slice(o)).concat(t.slice(n));
    },
          u = t.quickSort = e => {
      if (0 === e.length) return [];let t = 1;const r = e.length,
            o = [],
            n = [],
            l = e[0];for (t = 1; t < r; t++) e[t] < l ? o.push(e[t]) : n.push(e[t]);return u(o).concat(l, u(n));
    };t.insertionSort = e => {
      let t = [];if (e) {
        const r = (t = e.slice()).length;let o, n, u;for (o = 1; o < r; o++) {
          for (u = t[o], n = o - 1; n >= 0 && t[n] > u; n--) t[n + 1] = t[n];t[n + 1] = u;
        }
      }return t;
    }, t.bubbleSort = e => {
      let t = [];if (e) {
        let r, o, n;const u = (t = e.slice()).length - 1;do {
          for (r = !1, o = 0; o < u; o++) t[o] > t[o + 1] && (n = t[o], t[o] = t[o + 1], t[o + 1] = n, r = !0);
        } while (r);
      }return t;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (e, t) => {
      const r = e.getFullYear(),
            o = e.getMonth() + 1,
            n = e.getDate(),
            u = e.getHours(),
            l = e.getMinutes();e.getSeconds();return t ? `${o}/${n}/${r}` : `${o}/${n}/${r} ${u % 12 || 12}:${l < 10 ? "0" + l : l}${u < 12 ? "am" : "pm"}`;
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (e, t) => (e => {
      let t = 0,
          r = e,
          o = "";for (t = 0; t < 32; t++, o += String(r >>> 31), r <<= 1);return o;
    })(e).split("").reverse().join("").substring(0, t);
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });t.default = (e, t) => e && t ? [].filter.call(e, e => e != t).join("") : null;
  }]);
});
//# sourceMappingURL=next-core-utilities.js.map

/***/ }),

/***/ "./node_modules/presentation-decorator/dist/presentation-decorator.js":
/*!****************************************************************************!*\
  !*** ./node_modules/presentation-decorator/dist/presentation-decorator.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function (e, t) {
   true ? module.exports = t(__webpack_require__(/*! next-core-utilities */ "./node_modules/next-core-utilities/dist/next-core-utilities.js"), __webpack_require__(/*! presentation-mediator */ "./node_modules/presentation-mediator/dist/presentation-mediator.js"), __webpack_require__(/*! presentation-models */ "./node_modules/presentation-models/dist/presentation-models.js"), __webpack_require__(/*! presentation-dom */ "./node_modules/presentation-dom/dist/presentation-dom.js"), __webpack_require__(/*! presentation-widget */ "./node_modules/presentation-widget/dist/presentation-widget.js")) : undefined;
}(undefined, function (e, t, n, i, r) {
  return function (e) {
    var t = {};function n(i) {
      if (t[i]) return t[i].exports;var r = t[i] = { i: i, l: !1, exports: {} };return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }return n.m = e, n.c = t, n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var i = Object.create(null);if (n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var r in e) n.d(i, r, function (t) {
        return e[t];
      }.bind(null, r));return i;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "/dist/", n(n.s = 1);
  }([function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(3),
        r = n(4),
        o = n(5),
        s = l(n(6));l(n(7));function l(e) {
      return e && e.__esModule ? e : { default: e };
    }const u = { CLICK: "data-click", FUNCTION: "data-function", STYLE: "data-style", APPEND_TEMPLATE: "data-append-template", PREPEND_TEMPLATE: "data-prepend-template" };t.default = class extends r.Colleague {
      constructor(e) {
        super(e), this.customEvents = {};
      }events() {
        const e = this.customEvents ? this.customEvents : {};return this.name && (e[`change input[${this.bindingAttribute()}]`] = "_changed", e[`change textarea[${this.bindingAttribute()}]`] = "_changed", e[`change select[${this.bindingAttribute()}]`] = "_changed", e[`click *[${this.bindingAttribute()}][${u.CLICK}]`] = "_click"), e;
      }_changed(e) {
        if (e) {
          let t = e.currentTarget.getAttribute(this.bindingAttribute()),
              n = e.currentTarget.value;"checkbox" === e.currentTarget.type && (n = !!e.currentTarget.checked), this.model.set(t || e.currentTarget.name, n), this._func(e);
        }
      }_click(e) {
        if (e) {
          let t = e.currentTarget.getAttribute(u.CLICK);t && this[t] && this._executeFunctionByName(t, this, e), this._func(e);
        }
      }_func(e) {
        if (e) {
          let t = e.currentTarget.getAttribute(u.FUNCTION);t && this[t] && this._executeFunctionByName(t, this, e);
        }
      }initialize(e) {
        this.init(e), this.model || (this.model = new o.Model());
      }remove() {
        return this.undelegateEvents(), this.off(), this.stopListening(), this;
      }_executeFunctionByName(e, t, ...n) {
        const i = e.split("."),
              r = i.pop();if (i && r) {
          let e = 0;const o = i.length;for (e = 0; e < o; e++) t = t[i[e]];return t[r].apply(t, n);
        }return null;
      }bindingAttribute() {
        return "data-" + this.name;
      }injectTemplate(e, t) {
        if (t || (t = this.el), (0, i.isString)(t)) {
          const e = document.querySelector(t);if (!e) return;t = e;
        }if ((0, i.isString)(e)) {
          const n = t.innerHTML;t.innerHTML = `${n}${e}`;
        } else e.nodeType && e.nodeName && e.nodeType > 0 && "template" !== e.nodeName && "TEMPLATE" !== e.nodeName ? t.appendChild(e) : (e instanceof DocumentFragment || "template" === e.nodeName || "TEMPLATE" === e.nodeName) && s.default.injectTemplate(e, t);this.delegateEvents();
      }removeTemplate(e, t) {
        if (e) {
          let n;if (n = (0, i.isString)(e) ? s.default.selector(e) : e) {
            for (; n.firstChild;) n.removeChild(n.firstChild);if (!t) {
              const e = n.parentNode;e && e.removeChild(n);
            }this.delegateEvents();
          } else console.warn(`template not removed from ${e}`);
        }
      }boundElement(e) {
        if (this.el && e) {
          let t = this.el;if ((0, i.isString)(this.el) && (t = document.querySelector(this.el)), t) return t.querySelector("[" + this.bindingAttribute() + "=" + e + "]");
        }return null;
      }syncBoundElement(e) {
        if (e) {
          let t = new UIEvent("change", { view: window, bubbles: !0, cancelable: !0 }),
              n = this.boundElement(e);n && n.dispatchEvent(t);
        }
      }syncAllBoundElements() {
        const e = this.bindingAttribute();if (this.el && e) {
          const t = document.querySelectorAll(`${this.el}[${e}]`);if (t && t.length > 0) {
            let e = 0,
                n = t.length,
                i = new UIEvent("change", { view: window, bubbles: !0, cancelable: !0 });for (e = 0; e < n; e++) t[e].dispatchEvent(i);
          }
        }
      }addClass(e, t) {
        const n = this.boundElement(e);n && n.classList.add(t);
      }removeClass(e, t) {
        const n = this.boundElement(e);n && n.classList.remove(t);
      }bindModelChange(e) {
        this.model || (this.model = new o.Model()), this.model.on("change", e, this);
      }syncModelChange(e) {
        this.model || (this.model = new o.Model()), e ? this.model.on("change:" + e, this._syncData.bind(this, e), this) : this.model.on("change", this._syncAllData.bind(this, e), this);
      }_syncData(e) {
        let t = this.boundElement(e);if (t) {
          let n,
              i,
              r = this.model.get(e),
              o = t.getAttribute(u.STYLE),
              l = t.getAttribute(u.PREPEND_TEMPLATE),
              a = t.getAttribute(u.APPEND_TEMPLATE);if (l && (n = document.createElement("div"), i = s.default.selector("#" + l), t.appendChild(n), this.injectTemplate(i, n)), o) {
            let e;"list" === o || "unordered-list" === o ? (e = Presentation.Widget.List(null, r, !1), s.default.empty(t), t.appendChild(e)) : "ordered-list" === o ? (e = Presentation.Widget.List(null, r, !0), s.default.empty(t), t.appendChild(e)) : "description-list" === o && (e = Presentation.Widget.DescriptionList(null, r), s.default.empty(t), t.appendChild(e));
          } else s.default.setValue(t, r || "");a && (n = document.createElement("div"), i = s.default.selector("#" + a), t.appendChild(n), this.injectTemplate(i, n));
        }
      }_syncAllData() {
        const e = this.model.attributes;if (e) {
          let t = 0;const n = Object.keys(e),
                i = n.length;for (t = 0; t < i; t++) this._syncData(n[t]);
        }
      }unbindModelChange(e) {
        this.model.unBind("change", e, this);
      }unbindModelSync(e) {
        this.model.unBind("change:" + e, this._syncData, this);
      }
    };
  }, function (e, t, n) {
    "use strict";
    var i = o(n(2)),
        r = o(n(0));function o(e) {
      return e && e.__esModule ? e : { default: e };
    }e.exports.DecoratorView = r.default, e.exports.DirectiveView = i.default;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(n(0));t.default = class extends i.default {
      constructor(e) {
        super(e);
      }render() {
        return super.render();
      }remove() {
        return this.removeTemplate(this.el, !0), super.remove();
      }
    };
  }, function (t, n) {
    t.exports = e;
  }, function (e, n) {
    e.exports = t;
  }, function (e, t) {
    e.exports = n;
  }, function (e, t) {
    e.exports = i;
  }, function (e, t) {
    e.exports = r;
  }]);
});
//# sourceMappingURL=presentation-decorator.js.map

/***/ }),

/***/ "./node_modules/presentation-dom/dist/presentation-dom.js":
/*!****************************************************************!*\
  !*** ./node_modules/presentation-dom/dist/presentation-dom.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function (e, t) {
   true ? module.exports = t() : undefined;
}(undefined, function () {
  return function (e) {
    var t = {};function n(r) {
      if (t[r]) return t[r].exports;var o = t[r] = { i: r, l: !1, exports: {} };return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var r = Object.create(null);if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "/dist/", n(n.s = 0);
  }([function (e, t, n) {
    "use strict";
    var r = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(n(1));const o = r.default.query;e.exports = r.default, e.exports.$ = o;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });const r = e => "string" == typeof e || !!e && "object" == typeof e && "[object String]" === Object.prototype.toString.call(e);class o {
      constructor() {}static getViewportHeight() {
        return window.innerHeight;
      }static getViewportWidth() {
        return window.innerWidth;
      }static setValue(e, t, n) {
        if (e) {
          t = t || "";const r = this.selector(e);return (!r || 1 !== r.nodeType || "select" !== r.nodeName && "SELECT" !== r.nodeName) && (!r || 1 !== r.nodeType || "input" !== r.nodeName && "INPUT" !== r.nodeName && "textarea" !== r.nodeName && "TEXTAREA" !== r.nodeName ? r && 1 === r.nodeType && (n ? r.innerText = t : r.innerHTML = t) : r.value = t), r;
        }return null;
      }static getValue(e) {
        if (e) {
          const t = this.selector(e);if (t && 1 === t.nodeType && ("input" === t.nodeName || "INPUT" === t.nodeName || "textarea" === t.nodeName || "TEXTAREA" === t.nodeName || "select" === t.nodeName || "SELECT" === t.nodeName)) return t.value;if (t && 1 === t.nodeType) return t.innerHTML;
        }return null;
      }static selector(e) {
        return e ? r(e) ? document.querySelector(e) : e : null;
      }static selectors(e) {
        return e ? r(e) ? document.querySelectorAll(e) : e : null;
      }static query(e, t) {
        if (e) {
          let n = document;t && (n = o.selector(t));const s = r(e) ? n.querySelectorAll(e) : e;return 1 === s.length ? s[0] : s;
        }return null;
      }static hide(e) {
        const t = this.selector(e);return t && (t.style.display = "none", t.style.visibility = "hidden"), t;
      }static show(e, t) {
        const n = this.selector(e);return n && (n.style.display = t || "block", n.style.visibility = "visible"), n;
      }static setClass(e, t) {
        const n = this.selector(e);return n && n.setAttribute("class", t), n;
      }static addClass(e, t) {
        const n = this.selector(e);return n && n.classList.add(t), n;
      }static removeClass(e, t) {
        const n = this.selector(e);return n && n.classList.remove(t), n;
      }static replaceClass(e, t, n) {
        const r = this.selector(e);return r && r.classList.replace(t, n), r;
      }static containsClass(e, t) {
        const n = this.selector(e);return !(!n || !n.classList) && n.classList.contains(t);
      }static toggleClass(e, t) {
        const n = this.selector(e);return n && n.classList.toggle(t), n;
      }static empty(e) {
        return this.setValue(e, "", !1), e;
      }static injectTemplate(e, t) {
        const n = this.selector(e),
              r = this.selector(t);if (n && r) {
          const e = document.importNode(n.content, !0);r.appendChild(e);
        }return r;
      }
    }t.default = o;
  }]);
});
//# sourceMappingURL=presentation-dom.js.map

/***/ }),

/***/ "./node_modules/presentation-mediator/dist/presentation-mediator.js":
/*!**************************************************************************!*\
  !*** ./node_modules/presentation-mediator/dist/presentation-mediator.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function (e, t) {
   true ? module.exports = t(__webpack_require__(/*! next-core-utilities */ "./node_modules/next-core-utilities/dist/next-core-utilities.js"), __webpack_require__(/*! presentation-view */ "./node_modules/presentation-view/dist/presentation-view.js")) : undefined;
}(undefined, function (e, t) {
  return function (e) {
    var t = {};function n(i) {
      if (t[i]) return t[i].exports;var s = t[i] = { i: i, l: !1, exports: {} };return e[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
    }return n.m = e, n.c = t, n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var i = Object.create(null);if (n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var s in e) n.d(i, s, function (t) {
        return e[t];
      }.bind(null, s));return i;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "/dist/", n(n.s = 1);
  }([function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(4);t.default = class extends i.View {
      constructor(e) {
        super(e), e && e.mediator ? this._mediator = mediator : this._mediator = null;
      }sendMessage(e, t) {
        return this._mediator ? this._mediator.trigger(e, t) : console.warn(`sendMessage: No mediator is available for ${this.name}, talking to myself.`), e;
      }setMediatorMessageQueue(e) {
        return e && (this._mediator && this._mediator._dismissMe(this), this._mediator = e), e;
      }removeMediatorMessageQueue() {
        return this._mediator = null, !0;
      }get mediator() {
        return this._mediator;
      }set mediator(e) {
        return setMediatorMessageQueue(e);
      }
    };
  }, function (e, t, n) {
    "use strict";
    var i = r(n(2)),
        s = r(n(0));function r(e) {
      return e && e.__esModule ? e : { default: e };
    }e.exports.Mediator = i.default, e.exports.Colleague = s.default;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var i = n(3),
        s = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(n(0));const r = "augmentedChannel",
          u = "augmentedIdentifier";t.default = class extends s.default {
      constructor(e) {
        e || (e = {}), e.el || (e.noEL = !0), super(e), this._defaultChannel = r, this._defaultIdentifier = u, this._channels = {}, this._colleagueMap = {}, this._subscriptions = {};
      }_dismissMe(e) {
        if (e instanceof s.default) {
          let t = this._colleagueMap[e],
              n = this._channels[t];return this.unsubscribe(t, n.fn, e, n.identifier);
        }return null;
      }delegateEvents(e) {
        return super.delegateEvents(e), this.subscriptions = {}, e;
      }undelegateEvents(e) {
        return super.undelegateEvents(e), this.unsetSubscriptions(), e;
      }get subscriptions() {
        return this._subscriptions;
      }set subscriptions(e) {
        if (e && (0, i.extend)(this._subscriptions || {}, e), !(e = e || this._subscriptions) || 0 === e.length) return;this.unsetSubscriptions(e);let t = 0,
            n = e.length;for (t = 0; t < n; t++) {
          let n = e[t],
              i = !1;n.$once && (n = n.$once, i = !0), "string" == typeof n && (n = this[n]), this.subscribe(n.channel, n, this, i);
        }return e;
      }unsetSubscriptions(e) {
        if (!(e = e || this._subscriptions) || 0 === e.length) return;let t = 0;const n = e.length;for (t = 0; t < n; t++) {
          let n = e[t],
              i = !1;n.$once && (n = n.$once, i = !0), "string" == typeof n && (n = this[n]), this.unsubscribe(n.channel, n.$once || n, this);
        }return e;
      }observeColleague(e, t, n, i) {
        return e instanceof s.default && (n || (n = this._defaultChannel), e.setMediatorMessageQueue(this), this.subscribe(n, t, e, !1, i || this._defaultIdentifier)), i;
      }observeColleagueAndTrigger(e, t, n) {
        return this.observeColleague(e, (...n) => {
          e.trigger(t, n[0]);
        }, t, n || this._defaultIdentifier), n;
      }dismissColleague(e, t, n, i) {
        return e instanceof s.default && (n || (n = this._defaultChannel), e.removeMediatorMessageQueue(), this.unsubscribe(n, t, e, i)), i;
      }dismissColleagueTrigger(e, t, n) {
        const i = n || this._defaultIdentifier;return this.dismissColleague(e, (...t) => {
          e.trigger(t[0], t[1]);
        }, t, i), n;
      }subscribe(e, t, n, i, s) {
        this._channels[e] || (this._channels[e] = []);const r = { fn: t, context: n || this, once: i, identifier: s || this._defaultIdentifier };return this._channels[e].push(r), this._colleagueMap[n] = e, this.on(e, this.publish, n), s;
      }publish(e, ...t) {
        if (!e || !this._channels || !this._channels[e]) return console.warn(`Mediator ${this.name}: channel ${e} doest exist.`), void (this._channels = {});const n = Array.from(t);let i,
            s = 0;const r = this._channels[e].length;for (s = 0; s < r; s++) (i = this._channels[e][s]) && (i.fn && (console.log("calling subscription.fn with ", n), i.fn.apply(i.context, n)), i.once && (this.unsubscribe(e, i.fn, i.context, i.identifier), s--));return e;
      }unsubscribe(e, t, n, i) {
        if (!this._channels[e]) return;let s,
            r = i || this._defaultIdentifier,
            u = 0;for (u = 0; u < this._channels[e].length; u++) (s = this._channels[e][u]) && s.identifier === r && s.context === n && (this._channels[e].splice(u, 1), u--, delete this._colleagueMap[s.context]);return e;
      }subscribeOnce(e, t, n, i) {
        return this.subscribe(e, t, n, !0, i), i;
      }getColleagues(e) {
        const t = this.getChannel(e);return t ? t.context : null;
      }get channels() {
        return this._channels;
      }getChannel(e) {
        return e || (e = this._defaultChannel), this._channels[e] ? this._channels[e] : null;
      }get defaultChannel() {
        return this.getChannel(this._defaultChannel);
      }get defaultIdentifier() {
        return this._defaultIdentifier;
      }
    };
  }, function (t, n) {
    t.exports = e;
  }, function (e, n) {
    e.exports = t;
  }]);
});
//# sourceMappingURL=presentation-mediator.js.map

/***/ }),

/***/ "./node_modules/presentation-models/dist/presentation-models.js":
/*!**********************************************************************!*\
  !*** ./node_modules/presentation-models/dist/presentation-models.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function (t, e) {
   true ? module.exports = e(__webpack_require__(/*! next-core-model */ "./node_modules/next-core-model/dist/core-next-model.js"), __webpack_require__(/*! presentation-request */ "./node_modules/presentation-request/dist/presentation-request.js"), __webpack_require__(/*! presentation-storage */ "./node_modules/presentation-storage/dist/presentation-storage.js")) : undefined;
}(undefined, function (t, e, r) {
  return function (t) {
    var e = {};function r(n) {
      if (e[n]) return e[n].exports;var i = e[n] = { i: n, l: !1, exports: {} };return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
    }return r.m = t, r.c = e, r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }, r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
    }, r.t = function (t, e) {
      if (1 & e && (t = r(t)), 8 & e) return t;if (4 & e && "object" == typeof t && t && t.__esModule) return t;var n = Object.create(null);if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var i in t) r.d(n, i, function (e) {
        return t[e];
      }.bind(null, i));return n;
    }, r.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return r.d(e, "a", e), e;
    }, r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, r.p = "/dist/", r(r.s = 42);
  }([function (t, e, r) {
    "use strict";
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = n);
  }, function (t, e, r) {
    "use strict";
    var n = r(29)("wks"),
        i = r(30),
        o = r(0).Symbol,
        s = "function" == typeof o;(t.exports = function (t) {
      return n[t] || (n[t] = s && o[t] || (s ? o : i)("Symbol." + t));
    }).store = n;
  }, function (t, e, r) {
    "use strict";
    var n = t.exports = { version: "2.5.7" };"number" == typeof __e && (__e = n);
  }, function (t, e, r) {
    "use strict";
    var n = r(5);t.exports = function (t) {
      if (!n(t)) throw TypeError(t + " is not an object!");return t;
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(11),
        i = r(27);t.exports = r(6) ? function (t, e, r) {
      return n.f(t, e, i(1, r));
    } : function (t, e, r) {
      return t[e] = r, t;
    };
  }, function (t, e, r) {
    "use strict";
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    };
  }, function (t, e, r) {
    "use strict";
    t.exports = !r(26)(function () {
      return 7 != Object.defineProperty({}, "a", { get: function () {
          return 7;
        } }).a;
    });
  }, function (t, e, r) {
    "use strict";
    t.exports = {};
  }, function (t, e, r) {
    "use strict";
    var n = r(0),
        i = r(2),
        o = r(9),
        s = r(4),
        u = r(12),
        c = function (t, e, r) {
      var a,
          f,
          l,
          h = t & c.F,
          p = t & c.G,
          d = t & c.S,
          v = t & c.P,
          y = t & c.B,
          g = t & c.W,
          m = p ? i : i[e] || (i[e] = {}),
          _ = m.prototype,
          x = p ? n : d ? n[e] : (n[e] || {}).prototype;for (a in p && (r = e), r) (f = !h && x && void 0 !== x[a]) && u(m, a) || (l = f ? x[a] : r[a], m[a] = p && "function" != typeof x[a] ? r[a] : y && f ? o(l, n) : g && x[a] == l ? function (t) {
        var e = function (e, r, n) {
          if (this instanceof t) {
            switch (arguments.length) {case 0:
                return new t();case 1:
                return new t(e);case 2:
                return new t(e, r);}return new t(e, r, n);
          }return t.apply(this, arguments);
        };return e.prototype = t.prototype, e;
      }(l) : v && "function" == typeof l ? o(Function.call, l) : l, v && ((m.virtual || (m.virtual = {}))[a] = l, t & c.R && _ && !_[a] && s(_, a, l)));
    };c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c;
  }, function (t, e, r) {
    "use strict";
    var n = r(10);t.exports = function (t, e, r) {
      if (n(t), void 0 === e) return t;switch (r) {case 1:
          return function (r) {
            return t.call(e, r);
          };case 2:
          return function (r, n) {
            return t.call(e, r, n);
          };case 3:
          return function (r, n, i) {
            return t.call(e, r, n, i);
          };}return function () {
        return t.apply(e, arguments);
      };
    };
  }, function (t, e, r) {
    "use strict";
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");return t;
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(3),
        i = r(51),
        o = r(52),
        s = Object.defineProperty;e.f = r(6) ? Object.defineProperty : function (t, e, r) {
      if (n(t), e = o(e, !0), n(r), i) try {
        return s(t, e, r);
      } catch (t) {}if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");return "value" in r && (t[e] = r.value), t;
    };
  }, function (t, e, r) {
    "use strict";
    var n = {}.hasOwnProperty;t.exports = function (t, e) {
      return n.call(t, e);
    };
  }, function (t, e, r) {
    "use strict";
    var n = {}.toString;t.exports = function (t) {
      return n.call(t).slice(8, -1);
    };
  }, function (t, e, r) {
    "use strict";
    var n = Math.ceil,
        i = Math.floor;t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? i : n)(t);
    };
  }, function (t, e, r) {
    "use strict";
    t.exports = function (t) {
      if (void 0 == t) throw TypeError("Can't call method on  " + t);return t;
    };
  }, function (t, e, r) {
    "use strict";
    t.exports = !0;
  }, function (t, e, r) {
    "use strict";
    var n = r(5),
        i = r(0).document,
        o = n(i) && n(i.createElement);t.exports = function (t) {
      return o ? i.createElement(t) : {};
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(59),
        i = r(15);t.exports = function (t) {
      return n(i(t));
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(29)("keys"),
        i = r(30);t.exports = function (t) {
      return n[t] || (n[t] = i(t));
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(11).f,
        i = r(12),
        o = r(1)("toStringTag");t.exports = function (t, e, r) {
      t && !i(t = r ? t : t.prototype, o) && n(t, o, { configurable: !0, value: e });
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(10);t.exports.f = function (t) {
      return new function (t) {
        var e, r;this.promise = new t(function (t, n) {
          if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");e = t, r = n;
        }), this.resolve = n(e), this.reject = n(r);
      }(t);
    };
  }, function (e, r) {
    e.exports = t;
  }, function (t, e, r) {
    "use strict";
    t.exports = r(44);
  }, function (t, e, r) {
    "use strict";
    e.__esModule = !0;var n = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(r(46));e.default = function (t) {
      return function () {
        var e = t.apply(this, arguments);return new n.default(function (t, r) {
          return function i(o, s) {
            try {
              var u = e[o](s),
                  c = u.value;
            } catch (t) {
              return void r(t);
            }if (!u.done) return n.default.resolve(c).then(function (t) {
              i("next", t);
            }, function (t) {
              i("throw", t);
            });t(c);
          }("next");
        });
      };
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(16),
        i = r(8),
        o = r(53),
        s = r(4),
        u = r(7),
        c = r(54),
        a = r(20),
        f = r(62),
        l = r(1)("iterator"),
        h = !([].keys && "next" in [].keys()),
        p = function () {
      return this;
    };t.exports = function (t, e, r, d, v, y, g) {
      c(r, e, d);var m,
          _,
          x,
          w = function (t) {
        if (!h && t in O) return O[t];switch (t) {case "keys":case "values":
            return function () {
              return new r(this, t);
            };}return function () {
          return new r(this, t);
        };
      },
          P = e + " Iterator",
          b = "values" == v,
          S = !1,
          O = t.prototype,
          j = O[l] || O["@@iterator"] || v && O[v],
          L = j || w(v),
          E = v ? b ? w("entries") : L : void 0,
          k = "Array" == e && O.entries || j;if (k && (x = f(k.call(new t()))) !== Object.prototype && x.next && (a(x, P, !0), n || "function" == typeof x[l] || s(x, l, p)), b && j && "values" !== j.name && (S = !0, L = function () {
        return j.call(this);
      }), n && !g || !h && !S && O[l] || s(O, l, L), u[e] = L, u[P] = p, v) if (m = { values: b ? L : w("values"), keys: y ? L : w("keys"), entries: E }, g) for (_ in m) _ in O || o(O, _, m[_]);else i(i.P + i.F * (h || S), e, m);return m;
    };
  }, function (t, e, r) {
    "use strict";
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  }, function (t, e, r) {
    "use strict";
    t.exports = function (t, e) {
      return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(14),
        i = Math.min;t.exports = function (t) {
      return t > 0 ? i(n(t), 9007199254740991) : 0;
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(2),
        i = r(0),
        o = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});(t.exports = function (t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })("versions", []).push({ version: n.version, mode: r(16) ? "pure" : "global", copyright: "© 2018 Denis Pushkarev (zloirock.ru)" });
  }, function (t, e, r) {
    "use strict";
    var n = 0,
        i = Math.random();t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36));
    };
  }, function (t, e, r) {
    "use strict";
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }, function (t, e, r) {
    "use strict";
    var n = r(0).document;t.exports = n && n.documentElement;
  }, function (t, e, r) {
    "use strict";
    var n = r(13),
        i = r(1)("toStringTag"),
        o = "Arguments" == n(function () {
      return arguments;
    }());t.exports = function (t) {
      var e, r, s;return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, e) {
        try {
          return t[e];
        } catch (t) {}
      }(e = Object(t), i)) ? r : o ? n(e) : "Object" == (s = n(e)) && "function" == typeof e.callee ? "Arguments" : s;
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(3),
        i = r(10),
        o = r(1)("species");t.exports = function (t, e) {
      var r,
          s = n(t).constructor;return void 0 === s || void 0 == (r = n(s)[o]) ? e : i(r);
    };
  }, function (t, e, r) {
    "use strict";
    var n,
        i,
        o,
        s = r(9),
        u = r(74),
        c = r(32),
        a = r(17),
        f = r(0),
        l = f.process,
        h = f.setImmediate,
        p = f.clearImmediate,
        d = f.MessageChannel,
        v = f.Dispatch,
        y = 0,
        g = {},
        m = function () {
      var t = +this;if (g.hasOwnProperty(t)) {
        var e = g[t];delete g[t], e();
      }
    },
        _ = function (t) {
      m.call(t.data);
    };h && p || (h = function (t) {
      for (var e = [], r = 1; arguments.length > r;) e.push(arguments[r++]);return g[++y] = function () {
        u("function" == typeof t ? t : Function(t), e);
      }, n(y), y;
    }, p = function (t) {
      delete g[t];
    }, "process" == r(13)(l) ? n = function (t) {
      l.nextTick(s(m, t, 1));
    } : v && v.now ? n = function (t) {
      v.now(s(m, t, 1));
    } : d ? (o = (i = new d()).port2, i.port1.onmessage = _, n = s(o.postMessage, o, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (n = function (t) {
      f.postMessage(t + "", "*");
    }, f.addEventListener("message", _, !1)) : n = "onreadystatechange" in a("script") ? function (t) {
      c.appendChild(a("script")).onreadystatechange = function () {
        c.removeChild(this), m.call(t);
      };
    } : function (t) {
      setTimeout(s(m, t, 1), 0);
    }), t.exports = { set: h, clear: p };
  }, function (t, e, r) {
    "use strict";
    t.exports = function (t) {
      try {
        return { e: !1, v: t() };
      } catch (t) {
        return { e: !0, v: t };
      }
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(3),
        i = r(5),
        o = r(21);t.exports = function (t, e) {
      if (n(t), i(e) && e.constructor === t) return e;var r = o.f(t);return (0, r.resolve)(e), r.promise;
    };
  }, function (t, r) {
    t.exports = e;
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = u(r(23)),
        i = u(r(24)),
        o = r(22),
        s = r(38);function u(t) {
      return t && t.__esModule ? t : { default: t };
    }e.default = class extends o.AbstractCollection {
      constructor(t, e) {
        super(t, e), this._uri = null, e && e.url && (console.warn("passing url is deprecated, use uri."), this._uri = e.url), e && e.uri && (this._uri = e.uri);
      }get url() {
        return console.warn("using url is deprecated, use uri."), this._uri;
      }set url(t) {
        console.warn("using url is deprecated, use uri."), this._uri = t;
      }get uri() {
        return this._uri;
      }set uri(t) {
        this._uri = t;
      }sync(t, e, r) {
        var o = this;return (0, i.default)(n.default.mark(function i() {
          var u;return n.default.wrap(function (n) {
            for (;;) switch (n.prev = n.next) {case 0:
                return r || (r = {}), o._uri ? r.uri = o._uri : console.warn("no uri?! :/"), !0 === o.crossOrigin && (r.crossDomain = !0), r.xhrFields || (r.xhrFields = { withCredentials: !0 }), o.mock && (r.mock = o.mock), n.next = 7, (0, s.sync)(t, e, r);case 7:
                return u = n.sent, n.abrupt("return", u);case 9:case "end":
                return n.stop();}
          }, i, o);
        }))();
      }fetch(t) {
        return this.sync("read", this, t);
      }save(t) {
        return this.sync("create", this, t);
      }update(t) {
        return this.sync("update", this, t);
      }destroy(t) {
        return this.sync("delete", this, t);
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = function (t) {
      return t && t.__esModule ? t : { default: t };
    }(r(39));e.default = class extends n.default {
      constructor(t, e) {
        super(t, e), e && e.paginationConfiguration ? this.paginationConfiguration = e.paginationConfiguration : this.paginationConfiguration = { currentPageParam: "page", pageSizeParam: "per_page" }, e && e.pageSize ? this.pageSize = e.pageSize : this.pageSize = 20, e && e.currentPage ? this.currentPage = e.currentPage : this.currentPage = 1, this.totalPages = 1;
      }setPageSize(t) {
        t && (this.pageSize = t), this.refresh();
      }setCurrentPage(t) {
        t || (t = 1), this.currentPage = t, this.refresh();
      }setPaginationConfiguration(t) {
        this.paginationConfiguration = t;
      }fetch(t) {
        t = t || {};const e = this.paginationConfiguration,
              r = {};return r[e.currentPageParam] = this.currentPage, r[e.pageSizeParam] = this.pageSize, t.data = r, super.fetch(t);
      }nextPage() {
        this.currentPage < this.totalPages && (this.currentPage = this.currentPage + 1, this.refresh());
      }previousPage() {
        this.currentPage > 0 && (this.currentPage = this.currentPage - 1, this.refresh());
      }goToPage(t) {
        t && t < this.totalPages && t > 0 && (this.currentPage = t, this.refresh());
      }firstPage() {
        this.currentPage = 1, this.refresh();
      }lastPage() {
        this.currentPage = this.totalPages, this.refresh();
      }refresh() {
        this.fetch();
      }
    };
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });const n = {};n.GITHUB = Symbol("github"), n.SOLR = Symbol("solr"), n.DATABASE = Symbol("database"), e.default = n;
  }, function (t, e, r) {
    "use strict";
    var n = a(r(43)),
        i = a(r(39)),
        o = a(r(82)),
        s = a(r(40)),
        u = a(r(84)),
        c = a(r(41));function a(t) {
      return t && t.__esModule ? t : { default: t };
    }t.exports.Model = n.default, t.exports.Collection = i.default, t.exports.LocalStorageCollection = o.default, t.exports.PaginatedCollection = s.default, t.exports.PaginationFactory = u.default, t.exports.PAGINATION_API_TYPE = c.default;
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = u(r(23)),
        i = u(r(24)),
        o = r(22),
        s = r(38);function u(t) {
      return t && t.__esModule ? t : { default: t };
    }e.default = class extends o.AbstractModel {
      constructor(t, e, ...r) {
        super(t, e, r), this.mock = !1, this.crossOrigin = !1, this._uri = null, e && e.url && (console.warn("passing url is deprecated, use uri."), this._uri = e.url), e && e.uri && (this._uri = e.uri);
      }get url() {
        return console.warn("using url is deprecated, use uri."), this._uri;
      }set url(t) {
        console.warn("using url is deprecated, use uri."), this._uri = t;
      }get uri() {
        return this._uri;
      }set uri(t) {
        this._uri = t;
      }sync(t, e, r) {
        var o = this;return (0, i.default)(n.default.mark(function i() {
          var u;return n.default.wrap(function (n) {
            for (;;) switch (n.prev = n.next) {case 0:
                return r || (r = {}), o._uri ? r.uri = o._uri : console.warn("no uri?! :/"), !0 === o.crossOrigin && (r.crossDomain = !0), r.xhrFields || (r.xhrFields = { withCredentials: !0 }), o.mock && (r.mock = o.mock), n.next = 7, (0, s.sync)(t, e, r);case 7:
                return u = n.sent, n.abrupt("return", u);case 9:case "end":
                return n.stop();}
          }, i, o);
        }))();
      }fetch(t) {
        return this.sync("read", this, t);
      }save(t) {
        return this.sync("create", this, t);
      }update(t) {
        return this.sync("update", this, t);
      }destroy(t) {
        return this.sync("delete", this, t);
      }
    };
  }, function (t, e, r) {
    "use strict";
    var n = function () {
      return this;
    }() || Function("return this")(),
        i = n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0,
        o = i && n.regeneratorRuntime;if (n.regeneratorRuntime = void 0, t.exports = r(45), i) n.regeneratorRuntime = o;else try {
      delete n.regeneratorRuntime;
    } catch (t) {
      n.regeneratorRuntime = void 0;
    }
  }, function (t, e, r) {
    "use strict";
    !function (e) {
      var r,
          n = Object.prototype,
          i = n.hasOwnProperty,
          o = "function" == typeof Symbol ? Symbol : {},
          s = o.iterator || "@@iterator",
          u = o.asyncIterator || "@@asyncIterator",
          c = o.toStringTag || "@@toStringTag",
          a = "object" == typeof t,
          f = e.regeneratorRuntime;if (f) a && (t.exports = f);else {
        (f = e.regeneratorRuntime = a ? t.exports : {}).wrap = x;var l = "suspendedStart",
            h = "suspendedYield",
            p = "executing",
            d = "completed",
            v = {},
            y = {};y[s] = function () {
          return this;
        };var g = Object.getPrototypeOf,
            m = g && g(g(M([])));m && m !== n && i.call(m, s) && (y = m);var _ = S.prototype = P.prototype = Object.create(y);b.prototype = _.constructor = S, S.constructor = b, S[c] = b.displayName = "GeneratorFunction", f.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name));
        }, f.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, S) : (t.__proto__ = S, c in t || (t[c] = "GeneratorFunction")), t.prototype = Object.create(_), t;
        }, f.awrap = function (t) {
          return { __await: t };
        }, O(j.prototype), j.prototype[u] = function () {
          return this;
        }, f.AsyncIterator = j, f.async = function (t, e, r, n) {
          var i = new j(x(t, e, r, n));return f.isGeneratorFunction(e) ? i : i.next().then(function (t) {
            return t.done ? t.value : i.next();
          });
        }, O(_), _[c] = "Generator", _[s] = function () {
          return this;
        }, _.toString = function () {
          return "[object Generator]";
        }, f.keys = function (t) {
          var e = [];for (var r in t) e.push(r);return e.reverse(), function r() {
            for (; e.length;) {
              var n = e.pop();if (n in t) return r.value = n, r.done = !1, r;
            }return r.done = !0, r;
          };
        }, f.values = M, T.prototype = { constructor: T, reset: function (t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(k), !t) for (var e in this) "t" === e.charAt(0) && i.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = r);
          }, stop: function () {
            this.done = !0;var t = this.tryEntries[0].completion;if ("throw" === t.type) throw t.arg;return this.rval;
          }, dispatchException: function (t) {
            if (this.done) throw t;var e = this;function n(n, i) {
              return u.type = "throw", u.arg = t, e.next = n, i && (e.method = "next", e.arg = r), !!i;
            }for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var s = this.tryEntries[o],
                  u = s.completion;if ("root" === s.tryLoc) return n("end");if (s.tryLoc <= this.prev) {
                var c = i.call(s, "catchLoc"),
                    a = i.call(s, "finallyLoc");if (c && a) {
                  if (this.prev < s.catchLoc) return n(s.catchLoc, !0);if (this.prev < s.finallyLoc) return n(s.finallyLoc);
                } else if (c) {
                  if (this.prev < s.catchLoc) return n(s.catchLoc, !0);
                } else {
                  if (!a) throw new Error("try statement without catch or finally");if (this.prev < s.finallyLoc) return n(s.finallyLoc);
                }
              }
            }
          }, abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var n = this.tryEntries[r];if (n.tryLoc <= this.prev && i.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                var o = n;break;
              }
            }o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);var s = o ? o.completion : {};return s.type = t, s.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, v) : this.complete(s);
          }, complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v;
          }, finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), v;
            }
          }, catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];if (r.tryLoc === t) {
                var n = r.completion;if ("throw" === n.type) {
                  var i = n.arg;k(r);
                }return i;
              }
            }throw new Error("illegal catch attempt");
          }, delegateYield: function (t, e, n) {
            return this.delegate = { iterator: M(t), resultName: e, nextLoc: n }, "next" === this.method && (this.arg = r), v;
          } };
      }function x(t, e, r, n) {
        var i = e && e.prototype instanceof P ? e : P,
            o = Object.create(i.prototype),
            s = new T(n || []);return o._invoke = function (t, e, r) {
          var n = l;return function (i, o) {
            if (n === p) throw new Error("Generator is already running");if (n === d) {
              if ("throw" === i) throw o;return C();
            }for (r.method = i, r.arg = o;;) {
              var s = r.delegate;if (s) {
                var u = L(s, r);if (u) {
                  if (u === v) continue;return u;
                }
              }if ("next" === r.method) r.sent = r._sent = r.arg;else if ("throw" === r.method) {
                if (n === l) throw n = d, r.arg;r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);n = p;var c = w(t, e, r);if ("normal" === c.type) {
                if (n = r.done ? d : h, c.arg === v) continue;return { value: c.arg, done: r.done };
              }"throw" === c.type && (n = d, r.method = "throw", r.arg = c.arg);
            }
          };
        }(t, r, s), o;
      }function w(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }function P() {}function b() {}function S() {}function O(t) {
        ["next", "throw", "return"].forEach(function (e) {
          t[e] = function (t) {
            return this._invoke(e, t);
          };
        });
      }function j(t) {
        var e;this._invoke = function (r, n) {
          function o() {
            return new Promise(function (e, o) {
              !function e(r, n, o, s) {
                var u = w(t[r], t, n);if ("throw" !== u.type) {
                  var c = u.arg,
                      a = c.value;return a && "object" == typeof a && i.call(a, "__await") ? Promise.resolve(a.__await).then(function (t) {
                    e("next", t, o, s);
                  }, function (t) {
                    e("throw", t, o, s);
                  }) : Promise.resolve(a).then(function (t) {
                    c.value = t, o(c);
                  }, s);
                }s(u.arg);
              }(r, n, e, o);
            });
          }return e = e ? e.then(o, o) : o();
        };
      }function L(t, e) {
        var n = t.iterator[e.method];if (n === r) {
          if (e.delegate = null, "throw" === e.method) {
            if (t.iterator.return && (e.method = "return", e.arg = r, L(t, e), "throw" === e.method)) return v;e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method");
          }return v;
        }var i = w(n, t.iterator, e.arg);if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, v;var o = i.arg;return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = r), e.delegate = null, v) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, v);
      }function E(t) {
        var e = { tryLoc: t[0] };1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
      }function k(t) {
        var e = t.completion || {};e.type = "normal", delete e.arg, t.completion = e;
      }function T(t) {
        this.tryEntries = [{ tryLoc: "root" }], t.forEach(E, this), this.reset(!0);
      }function M(t) {
        if (t) {
          var e = t[s];if (e) return e.call(t);if ("function" == typeof t.next) return t;if (!isNaN(t.length)) {
            var n = -1,
                o = function e() {
              for (; ++n < t.length;) if (i.call(t, n)) return e.value = t[n], e.done = !1, e;return e.value = r, e.done = !0, e;
            };return o.next = o;
          }
        }return { next: C };
      }function C() {
        return { value: r, done: !0 };
      }
    }(function () {
      return this;
    }() || Function("return this")());
  }, function (t, e, r) {
    "use strict";
    t.exports = { default: r(47), __esModule: !0 };
  }, function (t, e, r) {
    "use strict";
    r(48), r(49), r(64), r(68), r(80), r(81), t.exports = r(2).Promise;
  }, function (t, e, r) {
    "use strict";
  }, function (t, e, r) {
    "use strict";
    var n = r(50)(!0);r(25)(String, "String", function (t) {
      this._t = String(t), this._i = 0;
    }, function () {
      var t,
          e = this._t,
          r = this._i;return r >= e.length ? { value: void 0, done: !0 } : (t = n(e, r), this._i += t.length, { value: t, done: !1 });
    });
  }, function (t, e, r) {
    "use strict";
    var n = r(14),
        i = r(15);t.exports = function (t) {
      return function (e, r) {
        var o,
            s,
            u = String(i(e)),
            c = n(r),
            a = u.length;return c < 0 || c >= a ? t ? "" : void 0 : (o = u.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === a || (s = u.charCodeAt(c + 1)) < 56320 || s > 57343 ? t ? u.charAt(c) : o : t ? u.slice(c, c + 2) : s - 56320 + (o - 55296 << 10) + 65536;
      };
    };
  }, function (t, e, r) {
    "use strict";
    t.exports = !r(6) && !r(26)(function () {
      return 7 != Object.defineProperty(r(17)("div"), "a", { get: function () {
          return 7;
        } }).a;
    });
  }, function (t, e, r) {
    "use strict";
    var n = r(5);t.exports = function (t, e) {
      if (!n(t)) return t;var r, i;if (e && "function" == typeof (r = t.toString) && !n(i = r.call(t))) return i;if ("function" == typeof (r = t.valueOf) && !n(i = r.call(t))) return i;if (!e && "function" == typeof (r = t.toString) && !n(i = r.call(t))) return i;throw TypeError("Can't convert object to primitive value");
    };
  }, function (t, e, r) {
    "use strict";
    t.exports = r(4);
  }, function (t, e, r) {
    "use strict";
    var n = r(55),
        i = r(27),
        o = r(20),
        s = {};r(4)(s, r(1)("iterator"), function () {
      return this;
    }), t.exports = function (t, e, r) {
      t.prototype = n(s, { next: i(1, r) }), o(t, e + " Iterator");
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(3),
        i = r(56),
        o = r(31),
        s = r(19)("IE_PROTO"),
        u = function () {},
        c = function () {
      var t,
          e = r(17)("iframe"),
          n = o.length;for (e.style.display = "none", r(32).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; n--;) delete c.prototype[o[n]];return c();
    };t.exports = Object.create || function (t, e) {
      var r;return null !== t ? (u.prototype = n(t), r = new u(), u.prototype = null, r[s] = t) : r = c(), void 0 === e ? r : i(r, e);
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(11),
        i = r(3),
        o = r(57);t.exports = r(6) ? Object.defineProperties : function (t, e) {
      i(t);for (var r, s = o(e), u = s.length, c = 0; u > c;) n.f(t, r = s[c++], e[r]);return t;
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(58),
        i = r(31);t.exports = Object.keys || function (t) {
      return n(t, i);
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(12),
        i = r(18),
        o = r(60)(!1),
        s = r(19)("IE_PROTO");t.exports = function (t, e) {
      var r,
          u = i(t),
          c = 0,
          a = [];for (r in u) r != s && n(u, r) && a.push(r);for (; e.length > c;) n(u, r = e[c++]) && (~o(a, r) || a.push(r));return a;
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(13);t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
      return "String" == n(t) ? t.split("") : Object(t);
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(18),
        i = r(28),
        o = r(61);t.exports = function (t) {
      return function (e, r, s) {
        var u,
            c = n(e),
            a = i(c.length),
            f = o(s, a);if (t && r != r) {
          for (; a > f;) if ((u = c[f++]) != u) return !0;
        } else for (; a > f; f++) if ((t || f in c) && c[f] === r) return t || f || 0;return !t && -1;
      };
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(14),
        i = Math.max,
        o = Math.min;t.exports = function (t, e) {
      return (t = n(t)) < 0 ? i(t + e, 0) : o(t, e);
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(12),
        i = r(63),
        o = r(19)("IE_PROTO"),
        s = Object.prototype;t.exports = Object.getPrototypeOf || function (t) {
      return t = i(t), n(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null;
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(15);t.exports = function (t) {
      return Object(n(t));
    };
  }, function (t, e, r) {
    "use strict";
    r(65);for (var n = r(0), i = r(4), o = r(7), s = r(1)("toStringTag"), u = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), c = 0; c < u.length; c++) {
      var a = u[c],
          f = n[a],
          l = f && f.prototype;l && !l[s] && i(l, s, a), o[a] = o.Array;
    }
  }, function (t, e, r) {
    "use strict";
    var n = r(66),
        i = r(67),
        o = r(7),
        s = r(18);t.exports = r(25)(Array, "Array", function (t, e) {
      this._t = s(t), this._i = 0, this._k = e;
    }, function () {
      var t = this._t,
          e = this._k,
          r = this._i++;return !t || r >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? r : "values" == e ? t[r] : [r, t[r]]);
    }, "values"), o.Arguments = o.Array, n("keys"), n("values"), n("entries");
  }, function (t, e, r) {
    "use strict";
    t.exports = function () {};
  }, function (t, e, r) {
    "use strict";
    t.exports = function (t, e) {
      return { value: e, done: !!t };
    };
  }, function (t, e, r) {
    "use strict";
    var n,
        i,
        o,
        s,
        u = r(16),
        c = r(0),
        a = r(9),
        f = r(33),
        l = r(8),
        h = r(5),
        p = r(10),
        d = r(69),
        v = r(70),
        y = r(34),
        g = r(35).set,
        m = r(75)(),
        _ = r(21),
        x = r(36),
        w = r(76),
        P = r(37),
        b = c.TypeError,
        S = c.process,
        O = S && S.versions,
        j = O && O.v8 || "",
        L = c.Promise,
        E = "process" == f(S),
        k = function () {},
        T = i = _.f,
        M = !!function () {
      try {
        var t = L.resolve(1),
            e = (t.constructor = {})[r(1)("species")] = function (t) {
          t(k, k);
        };return (E || "function" == typeof PromiseRejectionEvent) && t.then(k) instanceof e && 0 !== j.indexOf("6.6") && -1 === w.indexOf("Chrome/66");
      } catch (t) {}
    }(),
        C = function (t) {
      var e;return !(!h(t) || "function" != typeof (e = t.then)) && e;
    },
        A = function (t, e) {
      if (!t._n) {
        t._n = !0;var r = t._c;m(function () {
          for (var n = t._v, i = 1 == t._s, o = 0, s = function (e) {
            var r,
                o,
                s,
                u = i ? e.ok : e.fail,
                c = e.resolve,
                a = e.reject,
                f = e.domain;try {
              u ? (i || (2 == t._h && I(t), t._h = 1), !0 === u ? r = n : (f && f.enter(), r = u(n), f && (f.exit(), s = !0)), r === e.promise ? a(b("Promise-chain cycle")) : (o = C(r)) ? o.call(r, c, a) : c(r)) : a(n);
            } catch (t) {
              f && !s && f.exit(), a(t);
            }
          }; r.length > o;) s(r[o++]);t._c = [], t._n = !1, e && !t._h && F(t);
        });
      }
    },
        F = function (t) {
      g.call(c, function () {
        var e,
            r,
            n,
            i = t._v,
            o = R(t);if (o && (e = x(function () {
          E ? S.emit("unhandledRejection", i, t) : (r = c.onunhandledrejection) ? r({ promise: t, reason: i }) : (n = c.console) && n.error && n.error("Unhandled promise rejection", i);
        }), t._h = E || R(t) ? 2 : 1), t._a = void 0, o && e.e) throw e.v;
      });
    },
        R = function (t) {
      return 1 !== t._h && 0 === (t._a || t._c).length;
    },
        I = function (t) {
      g.call(c, function () {
        var e;E ? S.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({ promise: t, reason: t._v });
      });
    },
        G = function (t) {
      var e = this;e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), A(e, !0));
    },
        N = function (t) {
      var e,
          r = this;if (!r._d) {
        r._d = !0, r = r._w || r;try {
          if (r === t) throw b("Promise can't be resolved itself");(e = C(t)) ? m(function () {
            var n = { _w: r, _d: !1 };try {
              e.call(t, a(N, n, 1), a(G, n, 1));
            } catch (t) {
              G.call(n, t);
            }
          }) : (r._v = t, r._s = 1, A(r, !1));
        } catch (t) {
          G.call({ _w: r, _d: !1 }, t);
        }
      }
    };M || (L = function (t) {
      d(this, L, "Promise", "_h"), p(t), n.call(this);try {
        t(a(N, this, 1), a(G, this, 1));
      } catch (t) {
        G.call(this, t);
      }
    }, (n = function (t) {
      this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
    }).prototype = r(77)(L.prototype, { then: function (t, e) {
        var r = T(y(this, L));return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = E ? S.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && A(this, !1), r.promise;
      }, catch: function (t) {
        return this.then(void 0, t);
      } }), o = function () {
      var t = new n();this.promise = t, this.resolve = a(N, t, 1), this.reject = a(G, t, 1);
    }, _.f = T = function (t) {
      return t === L || t === s ? new o(t) : i(t);
    }), l(l.G + l.W + l.F * !M, { Promise: L }), r(20)(L, "Promise"), r(78)("Promise"), s = r(2).Promise, l(l.S + l.F * !M, "Promise", { reject: function (t) {
        var e = T(this);return (0, e.reject)(t), e.promise;
      } }), l(l.S + l.F * (u || !M), "Promise", { resolve: function (t) {
        return P(u && this === s ? L : this, t);
      } }), l(l.S + l.F * !(M && r(79)(function (t) {
      L.all(t).catch(k);
    })), "Promise", { all: function (t) {
        var e = this,
            r = T(e),
            n = r.resolve,
            i = r.reject,
            o = x(function () {
          var r = [],
              o = 0,
              s = 1;v(t, !1, function (t) {
            var u = o++,
                c = !1;r.push(void 0), s++, e.resolve(t).then(function (t) {
              c || (c = !0, r[u] = t, --s || n(r));
            }, i);
          }), --s || n(r);
        });return o.e && i(o.v), r.promise;
      }, race: function (t) {
        var e = this,
            r = T(e),
            n = r.reject,
            i = x(function () {
          v(t, !1, function (t) {
            e.resolve(t).then(r.resolve, n);
          });
        });return i.e && n(i.v), r.promise;
      } });
  }, function (t, e, r) {
    "use strict";
    t.exports = function (t, e, r, n) {
      if (!(t instanceof e) || void 0 !== n && n in t) throw TypeError(r + ": incorrect invocation!");return t;
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(9),
        i = r(71),
        o = r(72),
        s = r(3),
        u = r(28),
        c = r(73),
        a = {},
        f = {},
        l = t.exports = function (t, e, r, l, h) {
      var p,
          d,
          v,
          y,
          g = h ? function () {
        return t;
      } : c(t),
          m = n(r, l, e ? 2 : 1),
          _ = 0;if ("function" != typeof g) throw TypeError(t + " is not iterable!");if (o(g)) {
        for (p = u(t.length); p > _; _++) if ((y = e ? m(s(d = t[_])[0], d[1]) : m(t[_])) === a || y === f) return y;
      } else for (v = g.call(t); !(d = v.next()).done;) if ((y = i(v, m, d.value, e)) === a || y === f) return y;
    };l.BREAK = a, l.RETURN = f;
  }, function (t, e, r) {
    "use strict";
    var n = r(3);t.exports = function (t, e, r, i) {
      try {
        return i ? e(n(r)[0], r[1]) : e(r);
      } catch (e) {
        var o = t.return;throw void 0 !== o && n(o.call(t)), e;
      }
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(7),
        i = r(1)("iterator"),
        o = Array.prototype;t.exports = function (t) {
      return void 0 !== t && (n.Array === t || o[i] === t);
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(33),
        i = r(1)("iterator"),
        o = r(7);t.exports = r(2).getIteratorMethod = function (t) {
      if (void 0 != t) return t[i] || t["@@iterator"] || o[n(t)];
    };
  }, function (t, e, r) {
    "use strict";
    t.exports = function (t, e, r) {
      var n = void 0 === r;switch (e.length) {case 0:
          return n ? t() : t.call(r);case 1:
          return n ? t(e[0]) : t.call(r, e[0]);case 2:
          return n ? t(e[0], e[1]) : t.call(r, e[0], e[1]);case 3:
          return n ? t(e[0], e[1], e[2]) : t.call(r, e[0], e[1], e[2]);case 4:
          return n ? t(e[0], e[1], e[2], e[3]) : t.call(r, e[0], e[1], e[2], e[3]);}return t.apply(r, e);
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(0),
        i = r(35).set,
        o = n.MutationObserver || n.WebKitMutationObserver,
        s = n.process,
        u = n.Promise,
        c = "process" == r(13)(s);t.exports = function () {
      var t,
          e,
          r,
          a = function () {
        var n, i;for (c && (n = s.domain) && n.exit(); t;) {
          i = t.fn, t = t.next;try {
            i();
          } catch (n) {
            throw t ? r() : e = void 0, n;
          }
        }e = void 0, n && n.enter();
      };if (c) r = function () {
        s.nextTick(a);
      };else if (!o || n.navigator && n.navigator.standalone) {
        if (u && u.resolve) {
          var f = u.resolve(void 0);r = function () {
            f.then(a);
          };
        } else r = function () {
          i.call(n, a);
        };
      } else {
        var l = !0,
            h = document.createTextNode("");new o(a).observe(h, { characterData: !0 }), r = function () {
          h.data = l = !l;
        };
      }return function (n) {
        var i = { fn: n, next: void 0 };e && (e.next = i), t || (t = i, r()), e = i;
      };
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(0).navigator;t.exports = n && n.userAgent || "";
  }, function (t, e, r) {
    "use strict";
    var n = r(4);t.exports = function (t, e, r) {
      for (var i in e) r && t[i] ? t[i] = e[i] : n(t, i, e[i]);return t;
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(0),
        i = r(2),
        o = r(11),
        s = r(6),
        u = r(1)("species");t.exports = function (t) {
      var e = "function" == typeof i[t] ? i[t] : n[t];s && e && !e[u] && o.f(e, u, { configurable: !0, get: function () {
          return this;
        } });
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(1)("iterator"),
        i = !1;try {
      var o = [7][n]();o.return = function () {
        i = !0;
      }, Array.from(o, function () {
        throw 2;
      });
    } catch (t) {}t.exports = function (t, e) {
      if (!e && !i) return !1;var r = !1;try {
        var o = [7],
            s = o[n]();s.next = function () {
          return { done: r = !0 };
        }, o[n] = function () {
          return s;
        }, t(o);
      } catch (t) {}return r;
    };
  }, function (t, e, r) {
    "use strict";
    var n = r(8),
        i = r(2),
        o = r(0),
        s = r(34),
        u = r(37);n(n.P + n.R, "Promise", { finally: function (t) {
        var e = s(this, i.Promise || o.Promise),
            r = "function" == typeof t;return this.then(r ? function (r) {
          return u(e, t()).then(function () {
            return r;
          });
        } : t, r ? function (r) {
          return u(e, t()).then(function () {
            throw r;
          });
        } : t);
      } });
  }, function (t, e, r) {
    "use strict";
    var n = r(8),
        i = r(21),
        o = r(36);n(n.S, "Promise", { try: function (t) {
        var e = i.f(this),
            r = o(t);return (r.e ? e.reject : e.resolve)(r.v), e.promise;
      } });
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = r(22),
        i = r(83);const o = "augmented.localstorage.collection",
          s = `${o}.key`;e.default = class extends n.AbstractCollection {
      constructor(t, e) {
        e || (e = {}), super(t, e), e.persist ? this._persist = e.persist : this._persist = !1, e.key ? this._key = e.key : this._key = s, e.namespace ? this._namespace = e.namespace : this._namespace = o, this._storage = i.LocalStorageFactory.getStorage(this._persist, this._namespace);
      }get key() {
        return this._key;
      }get persist() {
        return this._persist;
      }get namespace() {
        return this._namespace;
      }initialize(t) {}init(t) {}fetch(t) {
        return this.sync("read", this, t);
      }save(t) {
        return this.sync("create", this, t);
      }update(t) {
        return this.sync("update", this, t);
      }destroy(t) {
        return this.sync("delete", this, t);
      }sync(t, e, r) {
        let n = {};try {
          r || (r = {}), "create" === t || "update" === t ? (n = this.toJSON(), this._storage.setItem(this._key, n)) : "delete" === t ? this._storage.removeItem(this._key) : (n = this._storage.getItem(this._key), this.reset(n));
        } catch (t) {
          throw console.error(t), t;
        }return n;
      }
    };
  }, function (t, e) {
    t.exports = r;
  }, function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });var n = o(r(41)),
        i = o(r(40));function o(t) {
      return t && t.__esModule ? t : { default: t };
    }e.default = class {
      constructor() {
        this.type = n.default;
      }static getPaginatedCollection(t, e, r) {
        const o = e || {};let s = null;return t || (t = n.default.GITHUB), t === n.default.GITHUB ? (s = new i.default(o, r)).setPaginationConfiguration({ currentPageParam: "page", pageSizeParam: "per_page" }) : t === n.default.SOLR ? (s = new i.default(o, r)).setPaginationConfiguration({ currentPageParam: "start", pageSizeParam: "rows" }) : t === n.default.DATABASE && (s = new i.default(o, r)).setPaginationConfiguration({ currentPageParam: "offset", pageSizeParam: "limit" }), s;
      }
    };
  }]);
});
//# sourceMappingURL=presentation-models.js.map

/***/ }),

/***/ "./node_modules/presentation-request/dist/presentation-request.js":
/*!************************************************************************!*\
  !*** ./node_modules/presentation-request/dist/presentation-request.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
          /******/
        }
        /******/
      };
      /******/
      /******/ // define __esModule on exports
      /******/__webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
          /******/
        }
        /******/Object.defineProperty(exports, '__esModule', { value: true });
        /******/
      };
      /******/
      /******/ // create a fake namespace object
      /******/ // mode & 1: value is a module id, require it
      /******/ // mode & 2: merge all properties of value into the ns
      /******/ // mode & 4: return value when already ns object
      /******/ // mode & 8|1: behave like require
      /******/__webpack_require__.t = function (value, mode) {
        /******/if (mode & 1) value = __webpack_require__(value);
        /******/if (mode & 8) return value;
        /******/if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/var ns = Object.create(null);
        /******/__webpack_require__.r(ns);
        /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/return ns;
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "/dist/";
      /******/
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = "./src/index.js");
      /******/
    }(
    /************************************************************************/
    /******/{

      /***/"./node_modules/babel-runtime/core-js/promise.js":
      /*!*******************************************************!*\
        !*** ./node_modules/babel-runtime/core-js/promise.js ***!
        \*******************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = { "default": __webpack_require__( /*! core-js/library/fn/promise */"./node_modules/core-js/library/fn/promise.js"), __esModule: true };

        /***/
      },

      /***/"./node_modules/babel-runtime/helpers/asyncToGenerator.js":
      /*!****************************************************************!*\
        !*** ./node_modules/babel-runtime/helpers/asyncToGenerator.js ***!
        \****************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        exports.__esModule = true;

        var _promise = __webpack_require__( /*! ../core-js/promise */"./node_modules/babel-runtime/core-js/promise.js");

        var _promise2 = _interopRequireDefault(_promise);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = function (fn) {
          return function () {
            var gen = fn.apply(this, arguments);
            return new _promise2.default(function (resolve, reject) {
              function step(key, arg) {
                try {
                  var info = gen[key](arg);
                  var value = info.value;
                } catch (error) {
                  reject(error);
                  return;
                }

                if (info.done) {
                  resolve(value);
                } else {
                  return _promise2.default.resolve(value).then(function (value) {
                    step("next", value);
                  }, function (err) {
                    step("throw", err);
                  });
                }
              }

              return step("next");
            });
          };
        };

        /***/
      },

      /***/"./node_modules/babel-runtime/regenerator/index.js":
      /*!*********************************************************!*\
        !*** ./node_modules/babel-runtime/regenerator/index.js ***!
        \*********************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = __webpack_require__( /*! regenerator-runtime */"./node_modules/regenerator-runtime/runtime-module.js");

        /***/
      },

      /***/"./node_modules/core-js/library/fn/promise.js":
      /*!****************************************************!*\
        !*** ./node_modules/core-js/library/fn/promise.js ***!
        \****************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        __webpack_require__( /*! ../modules/es6.object.to-string */"./node_modules/core-js/library/modules/es6.object.to-string.js");
        __webpack_require__( /*! ../modules/es6.string.iterator */"./node_modules/core-js/library/modules/es6.string.iterator.js");
        __webpack_require__( /*! ../modules/web.dom.iterable */"./node_modules/core-js/library/modules/web.dom.iterable.js");
        __webpack_require__( /*! ../modules/es6.promise */"./node_modules/core-js/library/modules/es6.promise.js");
        __webpack_require__( /*! ../modules/es7.promise.finally */"./node_modules/core-js/library/modules/es7.promise.finally.js");
        __webpack_require__( /*! ../modules/es7.promise.try */"./node_modules/core-js/library/modules/es7.promise.try.js");
        module.exports = __webpack_require__( /*! ../modules/_core */"./node_modules/core-js/library/modules/_core.js").Promise;

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_a-function.js":
      /*!*************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_a-function.js ***!
        \*************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = function (it) {
          if (typeof it != 'function') throw TypeError(it + ' is not a function!');
          return it;
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_add-to-unscopables.js":
      /*!*********************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_add-to-unscopables.js ***!
        \*********************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = function () {/* empty */};

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_an-instance.js":
      /*!**************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_an-instance.js ***!
        \**************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = function (it, Constructor, name, forbiddenField) {
          if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
            throw TypeError(name + ': incorrect invocation!');
          }return it;
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_an-object.js":
      /*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_an-object.js ***!
        \************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var isObject = __webpack_require__( /*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js");
        module.exports = function (it) {
          if (!isObject(it)) throw TypeError(it + ' is not an object!');
          return it;
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_array-includes.js":
      /*!*****************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_array-includes.js ***!
        \*****************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // false -> Array#indexOf
        // true  -> Array#includes

        var toIObject = __webpack_require__( /*! ./_to-iobject */"./node_modules/core-js/library/modules/_to-iobject.js");
        var toLength = __webpack_require__( /*! ./_to-length */"./node_modules/core-js/library/modules/_to-length.js");
        var toAbsoluteIndex = __webpack_require__( /*! ./_to-absolute-index */"./node_modules/core-js/library/modules/_to-absolute-index.js");
        module.exports = function (IS_INCLUDES) {
          return function ($this, el, fromIndex) {
            var O = toIObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (IS_INCLUDES && el != el) while (length > index) {
              value = O[index++];
              // eslint-disable-next-line no-self-compare
              if (value != value) return true;
              // Array#indexOf ignores holes, Array#includes - not
            } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
              if (O[index] === el) return IS_INCLUDES || index || 0;
            }return !IS_INCLUDES && -1;
          };
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_classof.js":
      /*!**********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_classof.js ***!
        \**********************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // getting tag from 19.1.3.6 Object.prototype.toString()

        var cof = __webpack_require__( /*! ./_cof */"./node_modules/core-js/library/modules/_cof.js");
        var TAG = __webpack_require__( /*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")('toStringTag');
        // ES3 wrong here
        var ARG = cof(function () {
          return arguments;
        }()) == 'Arguments';

        // fallback for IE11 Script Access Denied error
        var tryGet = function (it, key) {
          try {
            return it[key];
          } catch (e) {/* empty */}
        };

        module.exports = function (it) {
          var O, T, B;
          return it === undefined ? 'Undefined' : it === null ? 'Null'
          // @@toStringTag case
          : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
          // builtinTag case
          : ARG ? cof(O)
          // ES3 arguments fallback
          : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_cof.js":
      /*!******************************************************!*\
        !*** ./node_modules/core-js/library/modules/_cof.js ***!
        \******************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var toString = {}.toString;

        module.exports = function (it) {
          return toString.call(it).slice(8, -1);
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_core.js":
      /*!*******************************************************!*\
        !*** ./node_modules/core-js/library/modules/_core.js ***!
        \*******************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var core = module.exports = { version: '2.5.7' };
        if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_ctx.js":
      /*!******************************************************!*\
        !*** ./node_modules/core-js/library/modules/_ctx.js ***!
        \******************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // optional / simple context binding

        var aFunction = __webpack_require__( /*! ./_a-function */"./node_modules/core-js/library/modules/_a-function.js");
        module.exports = function (fn, that, length) {
          aFunction(fn);
          if (that === undefined) return fn;
          switch (length) {
            case 1:
              return function (a) {
                return fn.call(that, a);
              };
            case 2:
              return function (a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function (a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function () /* ...args */{
            return fn.apply(that, arguments);
          };
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_defined.js":
      /*!**********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_defined.js ***!
        \**********************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // 7.2.1 RequireObjectCoercible(argument)

        module.exports = function (it) {
          if (it == undefined) throw TypeError("Can't call method on  " + it);
          return it;
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_descriptors.js":
      /*!**************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_descriptors.js ***!
        \**************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // Thank's IE8 for his funny defineProperty

        module.exports = !__webpack_require__( /*! ./_fails */"./node_modules/core-js/library/modules/_fails.js")(function () {
          return Object.defineProperty({}, 'a', { get: function () {
              return 7;
            } }).a != 7;
        });

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_dom-create.js":
      /*!*************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_dom-create.js ***!
        \*************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var isObject = __webpack_require__( /*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js");
        var document = __webpack_require__( /*! ./_global */"./node_modules/core-js/library/modules/_global.js").document;
        // typeof document.createElement is 'object' in old IE
        var is = isObject(document) && isObject(document.createElement);
        module.exports = function (it) {
          return is ? document.createElement(it) : {};
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_enum-bug-keys.js":
      /*!****************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_enum-bug-keys.js ***!
        \****************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // IE 8- don't enum bug keys

        module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_export.js":
      /*!*********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_export.js ***!
        \*********************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var global = __webpack_require__( /*! ./_global */"./node_modules/core-js/library/modules/_global.js");
        var core = __webpack_require__( /*! ./_core */"./node_modules/core-js/library/modules/_core.js");
        var ctx = __webpack_require__( /*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js");
        var hide = __webpack_require__( /*! ./_hide */"./node_modules/core-js/library/modules/_hide.js");
        var has = __webpack_require__( /*! ./_has */"./node_modules/core-js/library/modules/_has.js");
        var PROTOTYPE = 'prototype';

        var $export = function (type, name, source) {
          var IS_FORCED = type & $export.F;
          var IS_GLOBAL = type & $export.G;
          var IS_STATIC = type & $export.S;
          var IS_PROTO = type & $export.P;
          var IS_BIND = type & $export.B;
          var IS_WRAP = type & $export.W;
          var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
          var expProto = exports[PROTOTYPE];
          var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
          var key, own, out;
          if (IS_GLOBAL) source = name;
          for (key in source) {
            // contains in native
            own = !IS_FORCED && target && target[key] !== undefined;
            if (own && has(exports, key)) continue;
            // export native or passed
            out = own ? target[key] : source[key];
            // prevent global pollution for namespaces
            exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
            // bind timers to global for call from export context
            : IS_BIND && own ? ctx(out, global)
            // wrap global constructors for prevent change them in library
            : IS_WRAP && target[key] == out ? function (C) {
              var F = function (a, b, c) {
                if (this instanceof C) {
                  switch (arguments.length) {
                    case 0:
                      return new C();
                    case 1:
                      return new C(a);
                    case 2:
                      return new C(a, b);
                  }return new C(a, b, c);
                }return C.apply(this, arguments);
              };
              F[PROTOTYPE] = C[PROTOTYPE];
              return F;
              // make static versions for prototype methods
            }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
            // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
            if (IS_PROTO) {
              (exports.virtual || (exports.virtual = {}))[key] = out;
              // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
              if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
            }
          }
        };
        // type bitmap
        $export.F = 1; // forced
        $export.G = 2; // global
        $export.S = 4; // static
        $export.P = 8; // proto
        $export.B = 16; // bind
        $export.W = 32; // wrap
        $export.U = 64; // safe
        $export.R = 128; // real proto method for `library`
        module.exports = $export;

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_fails.js":
      /*!********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_fails.js ***!
        \********************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = function (exec) {
          try {
            return !!exec();
          } catch (e) {
            return true;
          }
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_for-of.js":
      /*!*********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_for-of.js ***!
        \*********************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var ctx = __webpack_require__( /*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js");
        var call = __webpack_require__( /*! ./_iter-call */"./node_modules/core-js/library/modules/_iter-call.js");
        var isArrayIter = __webpack_require__( /*! ./_is-array-iter */"./node_modules/core-js/library/modules/_is-array-iter.js");
        var anObject = __webpack_require__( /*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js");
        var toLength = __webpack_require__( /*! ./_to-length */"./node_modules/core-js/library/modules/_to-length.js");
        var getIterFn = __webpack_require__( /*! ./core.get-iterator-method */"./node_modules/core-js/library/modules/core.get-iterator-method.js");
        var BREAK = {};
        var RETURN = {};
        var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
          var iterFn = ITERATOR ? function () {
            return iterable;
          } : getIterFn(iterable);
          var f = ctx(fn, that, entries ? 2 : 1);
          var index = 0;
          var length, step, iterator, result;
          if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
          // fast case for arrays with default iterator
          if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
            result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
            if (result === BREAK || result === RETURN) return result;
          } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
            result = call(iterator, f, step.value, entries);
            if (result === BREAK || result === RETURN) return result;
          }
        };
        _exports.BREAK = BREAK;
        _exports.RETURN = RETURN;

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_global.js":
      /*!*********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_global.js ***!
        \*********************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028

        var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
        // eslint-disable-next-line no-new-func
        : Function('return this')();
        if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_has.js":
      /*!******************************************************!*\
        !*** ./node_modules/core-js/library/modules/_has.js ***!
        \******************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function (it, key) {
          return hasOwnProperty.call(it, key);
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_hide.js":
      /*!*******************************************************!*\
        !*** ./node_modules/core-js/library/modules/_hide.js ***!
        \*******************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var dP = __webpack_require__( /*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js");
        var createDesc = __webpack_require__( /*! ./_property-desc */"./node_modules/core-js/library/modules/_property-desc.js");
        module.exports = __webpack_require__( /*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
          return dP.f(object, key, createDesc(1, value));
        } : function (object, key, value) {
          object[key] = value;
          return object;
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_html.js":
      /*!*******************************************************!*\
        !*** ./node_modules/core-js/library/modules/_html.js ***!
        \*******************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var document = __webpack_require__( /*! ./_global */"./node_modules/core-js/library/modules/_global.js").document;
        module.exports = document && document.documentElement;

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_ie8-dom-define.js":
      /*!*****************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_ie8-dom-define.js ***!
        \*****************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = !__webpack_require__( /*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__( /*! ./_fails */"./node_modules/core-js/library/modules/_fails.js")(function () {
          return Object.defineProperty(__webpack_require__( /*! ./_dom-create */"./node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () {
              return 7;
            } }).a != 7;
        });

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_invoke.js":
      /*!*********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_invoke.js ***!
        \*********************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // fast apply, http://jsperf.lnkit.com/fast-apply/5

        module.exports = function (fn, args, that) {
          var un = that === undefined;
          switch (args.length) {
            case 0:
              return un ? fn() : fn.call(that);
            case 1:
              return un ? fn(args[0]) : fn.call(that, args[0]);
            case 2:
              return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
            case 3:
              return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
            case 4:
              return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
          }return fn.apply(that, args);
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_iobject.js":
      /*!**********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_iobject.js ***!
        \**********************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // fallback for non-array-like ES3 and non-enumerable old V8 strings

        var cof = __webpack_require__( /*! ./_cof */"./node_modules/core-js/library/modules/_cof.js");
        // eslint-disable-next-line no-prototype-builtins
        module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
          return cof(it) == 'String' ? it.split('') : Object(it);
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_is-array-iter.js":
      /*!****************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_is-array-iter.js ***!
        \****************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // check on default Array iterator

        var Iterators = __webpack_require__( /*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js");
        var ITERATOR = __webpack_require__( /*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")('iterator');
        var ArrayProto = Array.prototype;

        module.exports = function (it) {
          return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_is-object.js":
      /*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_is-object.js ***!
        \************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = function (it) {
          return typeof it === 'object' ? it !== null : typeof it === 'function';
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_iter-call.js":
      /*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_iter-call.js ***!
        \************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // call something on iterator step with safe closing on error

        var anObject = __webpack_require__( /*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js");
        module.exports = function (iterator, fn, value, entries) {
          try {
            return entries ? fn(anObject(value)[0], value[1]) : fn(value);
            // 7.4.6 IteratorClose(iterator, completion)
          } catch (e) {
            var ret = iterator['return'];
            if (ret !== undefined) anObject(ret.call(iterator));
            throw e;
          }
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_iter-create.js":
      /*!**************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_iter-create.js ***!
        \**************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var create = __webpack_require__( /*! ./_object-create */"./node_modules/core-js/library/modules/_object-create.js");
        var descriptor = __webpack_require__( /*! ./_property-desc */"./node_modules/core-js/library/modules/_property-desc.js");
        var setToStringTag = __webpack_require__( /*! ./_set-to-string-tag */"./node_modules/core-js/library/modules/_set-to-string-tag.js");
        var IteratorPrototype = {};

        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        __webpack_require__( /*! ./_hide */"./node_modules/core-js/library/modules/_hide.js")(IteratorPrototype, __webpack_require__( /*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")('iterator'), function () {
          return this;
        });

        module.exports = function (Constructor, NAME, next) {
          Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
          setToStringTag(Constructor, NAME + ' Iterator');
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_iter-define.js":
      /*!**************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_iter-define.js ***!
        \**************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var LIBRARY = __webpack_require__( /*! ./_library */"./node_modules/core-js/library/modules/_library.js");
        var $export = __webpack_require__( /*! ./_export */"./node_modules/core-js/library/modules/_export.js");
        var redefine = __webpack_require__( /*! ./_redefine */"./node_modules/core-js/library/modules/_redefine.js");
        var hide = __webpack_require__( /*! ./_hide */"./node_modules/core-js/library/modules/_hide.js");
        var Iterators = __webpack_require__( /*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js");
        var $iterCreate = __webpack_require__( /*! ./_iter-create */"./node_modules/core-js/library/modules/_iter-create.js");
        var setToStringTag = __webpack_require__( /*! ./_set-to-string-tag */"./node_modules/core-js/library/modules/_set-to-string-tag.js");
        var getPrototypeOf = __webpack_require__( /*! ./_object-gpo */"./node_modules/core-js/library/modules/_object-gpo.js");
        var ITERATOR = __webpack_require__( /*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")('iterator');
        var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
        var FF_ITERATOR = '@@iterator';
        var KEYS = 'keys';
        var VALUES = 'values';

        var returnThis = function () {
          return this;
        };

        module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
          $iterCreate(Constructor, NAME, next);
          var getMethod = function (kind) {
            if (!BUGGY && kind in proto) return proto[kind];
            switch (kind) {
              case KEYS:
                return function keys() {
                  return new Constructor(this, kind);
                };
              case VALUES:
                return function values() {
                  return new Constructor(this, kind);
                };
            }return function entries() {
              return new Constructor(this, kind);
            };
          };
          var TAG = NAME + ' Iterator';
          var DEF_VALUES = DEFAULT == VALUES;
          var VALUES_BUG = false;
          var proto = Base.prototype;
          var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
          var $default = $native || getMethod(DEFAULT);
          var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
          var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
          var methods, key, IteratorPrototype;
          // Fix native
          if ($anyNative) {
            IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
            if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
              // Set @@toStringTag to native iterators
              setToStringTag(IteratorPrototype, TAG, true);
              // fix for some old engines
              if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
            }
          }
          // fix Array#{values, @@iterator}.name in V8 / FF
          if (DEF_VALUES && $native && $native.name !== VALUES) {
            VALUES_BUG = true;
            $default = function values() {
              return $native.call(this);
            };
          }
          // Define iterator
          if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
            hide(proto, ITERATOR, $default);
          }
          // Plug for library
          Iterators[NAME] = $default;
          Iterators[TAG] = returnThis;
          if (DEFAULT) {
            methods = {
              values: DEF_VALUES ? $default : getMethod(VALUES),
              keys: IS_SET ? $default : getMethod(KEYS),
              entries: $entries
            };
            if (FORCED) for (key in methods) {
              if (!(key in proto)) redefine(proto, key, methods[key]);
            } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
          }
          return methods;
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_iter-detect.js":
      /*!**************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_iter-detect.js ***!
        \**************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var ITERATOR = __webpack_require__( /*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")('iterator');
        var SAFE_CLOSING = false;

        try {
          var riter = [7][ITERATOR]();
          riter['return'] = function () {
            SAFE_CLOSING = true;
          };
          // eslint-disable-next-line no-throw-literal
          Array.from(riter, function () {
            throw 2;
          });
        } catch (e) {/* empty */}

        module.exports = function (exec, skipClosing) {
          if (!skipClosing && !SAFE_CLOSING) return false;
          var safe = false;
          try {
            var arr = [7];
            var iter = arr[ITERATOR]();
            iter.next = function () {
              return { done: safe = true };
            };
            arr[ITERATOR] = function () {
              return iter;
            };
            exec(arr);
          } catch (e) {/* empty */}
          return safe;
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_iter-step.js":
      /*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_iter-step.js ***!
        \************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = function (done, value) {
          return { value: value, done: !!done };
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_iterators.js":
      /*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_iterators.js ***!
        \************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = {};

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_library.js":
      /*!**********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_library.js ***!
        \**********************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = true;

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_microtask.js":
      /*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_microtask.js ***!
        \************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var global = __webpack_require__( /*! ./_global */"./node_modules/core-js/library/modules/_global.js");
        var macrotask = __webpack_require__( /*! ./_task */"./node_modules/core-js/library/modules/_task.js").set;
        var Observer = global.MutationObserver || global.WebKitMutationObserver;
        var process = global.process;
        var Promise = global.Promise;
        var isNode = __webpack_require__( /*! ./_cof */"./node_modules/core-js/library/modules/_cof.js")(process) == 'process';

        module.exports = function () {
          var head, last, notify;

          var flush = function () {
            var parent, fn;
            if (isNode && (parent = process.domain)) parent.exit();
            while (head) {
              fn = head.fn;
              head = head.next;
              try {
                fn();
              } catch (e) {
                if (head) notify();else last = undefined;
                throw e;
              }
            }last = undefined;
            if (parent) parent.enter();
          };

          // Node.js
          if (isNode) {
            notify = function () {
              process.nextTick(flush);
            };
            // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
          } else if (Observer && !(global.navigator && global.navigator.standalone)) {
            var toggle = true;
            var node = document.createTextNode('');
            new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
            notify = function () {
              node.data = toggle = !toggle;
            };
            // environments with maybe non-completely correct, but existent Promise
          } else if (Promise && Promise.resolve) {
            // Promise.resolve without an argument throws an error in LG WebOS 2
            var promise = Promise.resolve(undefined);
            notify = function () {
              promise.then(flush);
            };
            // for other environments - macrotask based on:
            // - setImmediate
            // - MessageChannel
            // - window.postMessag
            // - onreadystatechange
            // - setTimeout
          } else {
            notify = function () {
              // strange IE + webpack dev server bug - use .call(global)
              macrotask.call(global, flush);
            };
          }

          return function (fn) {
            var task = { fn: fn, next: undefined };
            if (last) last.next = task;
            if (!head) {
              head = task;
              notify();
            }last = task;
          };
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_new-promise-capability.js":
      /*!*************************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_new-promise-capability.js ***!
        \*************************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // 25.4.1.5 NewPromiseCapability(C)

        var aFunction = __webpack_require__( /*! ./_a-function */"./node_modules/core-js/library/modules/_a-function.js");

        function PromiseCapability(C) {
          var resolve, reject;
          this.promise = new C(function ($$resolve, $$reject) {
            if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
            resolve = $$resolve;
            reject = $$reject;
          });
          this.resolve = aFunction(resolve);
          this.reject = aFunction(reject);
        }

        module.exports.f = function (C) {
          return new PromiseCapability(C);
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_object-create.js":
      /*!****************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_object-create.js ***!
        \****************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])

        var anObject = __webpack_require__( /*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js");
        var dPs = __webpack_require__( /*! ./_object-dps */"./node_modules/core-js/library/modules/_object-dps.js");
        var enumBugKeys = __webpack_require__( /*! ./_enum-bug-keys */"./node_modules/core-js/library/modules/_enum-bug-keys.js");
        var IE_PROTO = __webpack_require__( /*! ./_shared-key */"./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
        var Empty = function () {/* empty */};
        var PROTOTYPE = 'prototype';

        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var createDict = function () {
          // Thrash, waste and sodomy: IE GC bug
          var iframe = __webpack_require__( /*! ./_dom-create */"./node_modules/core-js/library/modules/_dom-create.js")('iframe');
          var i = enumBugKeys.length;
          var lt = '<';
          var gt = '>';
          var iframeDocument;
          iframe.style.display = 'none';
          __webpack_require__( /*! ./_html */"./node_modules/core-js/library/modules/_html.js").appendChild(iframe);
          iframe.src = 'javascript:'; // eslint-disable-line no-script-url
          // createDict = iframe.contentWindow.Object;
          // html.removeChild(iframe);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
          iframeDocument.close();
          createDict = iframeDocument.F;
          while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
          return createDict();
        };

        module.exports = Object.create || function create(O, Properties) {
          var result;
          if (O !== null) {
            Empty[PROTOTYPE] = anObject(O);
            result = new Empty();
            Empty[PROTOTYPE] = null;
            // add "__proto__" for Object.getPrototypeOf polyfill
            result[IE_PROTO] = O;
          } else result = createDict();
          return Properties === undefined ? result : dPs(result, Properties);
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_object-dp.js":
      /*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_object-dp.js ***!
        \************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var anObject = __webpack_require__( /*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js");
        var IE8_DOM_DEFINE = __webpack_require__( /*! ./_ie8-dom-define */"./node_modules/core-js/library/modules/_ie8-dom-define.js");
        var toPrimitive = __webpack_require__( /*! ./_to-primitive */"./node_modules/core-js/library/modules/_to-primitive.js");
        var dP = Object.defineProperty;

        exports.f = __webpack_require__( /*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
          anObject(O);
          P = toPrimitive(P, true);
          anObject(Attributes);
          if (IE8_DOM_DEFINE) try {
            return dP(O, P, Attributes);
          } catch (e) {/* empty */}
          if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
          if ('value' in Attributes) O[P] = Attributes.value;
          return O;
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_object-dps.js":
      /*!*************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_object-dps.js ***!
        \*************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var dP = __webpack_require__( /*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js");
        var anObject = __webpack_require__( /*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js");
        var getKeys = __webpack_require__( /*! ./_object-keys */"./node_modules/core-js/library/modules/_object-keys.js");

        module.exports = __webpack_require__( /*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
          anObject(O);
          var keys = getKeys(Properties);
          var length = keys.length;
          var i = 0;
          var P;
          while (length > i) dP.f(O, P = keys[i++], Properties[P]);
          return O;
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_object-gpo.js":
      /*!*************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_object-gpo.js ***!
        \*************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)

        var has = __webpack_require__( /*! ./_has */"./node_modules/core-js/library/modules/_has.js");
        var toObject = __webpack_require__( /*! ./_to-object */"./node_modules/core-js/library/modules/_to-object.js");
        var IE_PROTO = __webpack_require__( /*! ./_shared-key */"./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');
        var ObjectProto = Object.prototype;

        module.exports = Object.getPrototypeOf || function (O) {
          O = toObject(O);
          if (has(O, IE_PROTO)) return O[IE_PROTO];
          if (typeof O.constructor == 'function' && O instanceof O.constructor) {
            return O.constructor.prototype;
          }return O instanceof Object ? ObjectProto : null;
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_object-keys-internal.js":
      /*!***********************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_object-keys-internal.js ***!
        \***********************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var has = __webpack_require__( /*! ./_has */"./node_modules/core-js/library/modules/_has.js");
        var toIObject = __webpack_require__( /*! ./_to-iobject */"./node_modules/core-js/library/modules/_to-iobject.js");
        var arrayIndexOf = __webpack_require__( /*! ./_array-includes */"./node_modules/core-js/library/modules/_array-includes.js")(false);
        var IE_PROTO = __webpack_require__( /*! ./_shared-key */"./node_modules/core-js/library/modules/_shared-key.js")('IE_PROTO');

        module.exports = function (object, names) {
          var O = toIObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
          // Don't enum bug & hidden keys
          while (names.length > i) if (has(O, key = names[i++])) {
            ~arrayIndexOf(result, key) || result.push(key);
          }
          return result;
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_object-keys.js":
      /*!**************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_object-keys.js ***!
        \**************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // 19.1.2.14 / 15.2.3.14 Object.keys(O)

        var $keys = __webpack_require__( /*! ./_object-keys-internal */"./node_modules/core-js/library/modules/_object-keys-internal.js");
        var enumBugKeys = __webpack_require__( /*! ./_enum-bug-keys */"./node_modules/core-js/library/modules/_enum-bug-keys.js");

        module.exports = Object.keys || function keys(O) {
          return $keys(O, enumBugKeys);
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_perform.js":
      /*!**********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_perform.js ***!
        \**********************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = function (exec) {
          try {
            return { e: false, v: exec() };
          } catch (e) {
            return { e: true, v: e };
          }
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_promise-resolve.js":
      /*!******************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_promise-resolve.js ***!
        \******************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var anObject = __webpack_require__( /*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js");
        var isObject = __webpack_require__( /*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js");
        var newPromiseCapability = __webpack_require__( /*! ./_new-promise-capability */"./node_modules/core-js/library/modules/_new-promise-capability.js");

        module.exports = function (C, x) {
          anObject(C);
          if (isObject(x) && x.constructor === C) return x;
          var promiseCapability = newPromiseCapability.f(C);
          var resolve = promiseCapability.resolve;
          resolve(x);
          return promiseCapability.promise;
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_property-desc.js":
      /*!****************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_property-desc.js ***!
        \****************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = function (bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value
          };
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_redefine-all.js":
      /*!***************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_redefine-all.js ***!
        \***************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var hide = __webpack_require__( /*! ./_hide */"./node_modules/core-js/library/modules/_hide.js");
        module.exports = function (target, src, safe) {
          for (var key in src) {
            if (safe && target[key]) target[key] = src[key];else hide(target, key, src[key]);
          }return target;
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_redefine.js":
      /*!***********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_redefine.js ***!
        \***********************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        module.exports = __webpack_require__( /*! ./_hide */"./node_modules/core-js/library/modules/_hide.js");

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_set-species.js":
      /*!**************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_set-species.js ***!
        \**************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var global = __webpack_require__( /*! ./_global */"./node_modules/core-js/library/modules/_global.js");
        var core = __webpack_require__( /*! ./_core */"./node_modules/core-js/library/modules/_core.js");
        var dP = __webpack_require__( /*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js");
        var DESCRIPTORS = __webpack_require__( /*! ./_descriptors */"./node_modules/core-js/library/modules/_descriptors.js");
        var SPECIES = __webpack_require__( /*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")('species');

        module.exports = function (KEY) {
          var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
          if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
            configurable: true,
            get: function () {
              return this;
            }
          });
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_set-to-string-tag.js":
      /*!********************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_set-to-string-tag.js ***!
        \********************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var def = __webpack_require__( /*! ./_object-dp */"./node_modules/core-js/library/modules/_object-dp.js").f;
        var has = __webpack_require__( /*! ./_has */"./node_modules/core-js/library/modules/_has.js");
        var TAG = __webpack_require__( /*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")('toStringTag');

        module.exports = function (it, tag, stat) {
          if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_shared-key.js":
      /*!*************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_shared-key.js ***!
        \*************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var shared = __webpack_require__( /*! ./_shared */"./node_modules/core-js/library/modules/_shared.js")('keys');
        var uid = __webpack_require__( /*! ./_uid */"./node_modules/core-js/library/modules/_uid.js");
        module.exports = function (key) {
          return shared[key] || (shared[key] = uid(key));
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_shared.js":
      /*!*********************************************************!*\
        !*** ./node_modules/core-js/library/modules/_shared.js ***!
        \*********************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var core = __webpack_require__( /*! ./_core */"./node_modules/core-js/library/modules/_core.js");
        var global = __webpack_require__( /*! ./_global */"./node_modules/core-js/library/modules/_global.js");
        var SHARED = '__core-js_shared__';
        var store = global[SHARED] || (global[SHARED] = {});

        (module.exports = function (key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })('versions', []).push({
          version: core.version,
          mode: __webpack_require__( /*! ./_library */"./node_modules/core-js/library/modules/_library.js") ? 'pure' : 'global',
          copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
        });

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_species-constructor.js":
      /*!**********************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_species-constructor.js ***!
        \**********************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // 7.3.20 SpeciesConstructor(O, defaultConstructor)

        var anObject = __webpack_require__( /*! ./_an-object */"./node_modules/core-js/library/modules/_an-object.js");
        var aFunction = __webpack_require__( /*! ./_a-function */"./node_modules/core-js/library/modules/_a-function.js");
        var SPECIES = __webpack_require__( /*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")('species');
        module.exports = function (O, D) {
          var C = anObject(O).constructor;
          var S;
          return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_string-at.js":
      /*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_string-at.js ***!
        \************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var toInteger = __webpack_require__( /*! ./_to-integer */"./node_modules/core-js/library/modules/_to-integer.js");
        var defined = __webpack_require__( /*! ./_defined */"./node_modules/core-js/library/modules/_defined.js");
        // true  -> String#at
        // false -> String#codePointAt
        module.exports = function (TO_STRING) {
          return function (that, pos) {
            var s = String(defined(that));
            var i = toInteger(pos);
            var l = s.length;
            var a, b;
            if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
            a = s.charCodeAt(i);
            return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
          };
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_task.js":
      /*!*******************************************************!*\
        !*** ./node_modules/core-js/library/modules/_task.js ***!
        \*******************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var ctx = __webpack_require__( /*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js");
        var invoke = __webpack_require__( /*! ./_invoke */"./node_modules/core-js/library/modules/_invoke.js");
        var html = __webpack_require__( /*! ./_html */"./node_modules/core-js/library/modules/_html.js");
        var cel = __webpack_require__( /*! ./_dom-create */"./node_modules/core-js/library/modules/_dom-create.js");
        var global = __webpack_require__( /*! ./_global */"./node_modules/core-js/library/modules/_global.js");
        var process = global.process;
        var setTask = global.setImmediate;
        var clearTask = global.clearImmediate;
        var MessageChannel = global.MessageChannel;
        var Dispatch = global.Dispatch;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = 'onreadystatechange';
        var defer, channel, port;
        var run = function () {
          var id = +this;
          // eslint-disable-next-line no-prototype-builtins
          if (queue.hasOwnProperty(id)) {
            var fn = queue[id];
            delete queue[id];
            fn();
          }
        };
        var listener = function (event) {
          run.call(event.data);
        };
        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
        if (!setTask || !clearTask) {
          setTask = function setImmediate(fn) {
            var args = [];
            var i = 1;
            while (arguments.length > i) args.push(arguments[i++]);
            queue[++counter] = function () {
              // eslint-disable-next-line no-new-func
              invoke(typeof fn == 'function' ? fn : Function(fn), args);
            };
            defer(counter);
            return counter;
          };
          clearTask = function clearImmediate(id) {
            delete queue[id];
          };
          // Node.js 0.8-
          if (__webpack_require__( /*! ./_cof */"./node_modules/core-js/library/modules/_cof.js")(process) == 'process') {
            defer = function (id) {
              process.nextTick(ctx(run, id, 1));
            };
            // Sphere (JS game engine) Dispatch API
          } else if (Dispatch && Dispatch.now) {
            defer = function (id) {
              Dispatch.now(ctx(run, id, 1));
            };
            // Browsers with MessageChannel, includes WebWorkers
          } else if (MessageChannel) {
            channel = new MessageChannel();
            port = channel.port2;
            channel.port1.onmessage = listener;
            defer = ctx(port.postMessage, port, 1);
            // Browsers with postMessage, skip WebWorkers
            // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
          } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
            defer = function (id) {
              global.postMessage(id + '', '*');
            };
            global.addEventListener('message', listener, false);
            // IE8-
          } else if (ONREADYSTATECHANGE in cel('script')) {
            defer = function (id) {
              html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
                html.removeChild(this);
                run.call(id);
              };
            };
            // Rest old browsers
          } else {
            defer = function (id) {
              setTimeout(ctx(run, id, 1), 0);
            };
          }
        }
        module.exports = {
          set: setTask,
          clear: clearTask
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_to-absolute-index.js":
      /*!********************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_to-absolute-index.js ***!
        \********************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var toInteger = __webpack_require__( /*! ./_to-integer */"./node_modules/core-js/library/modules/_to-integer.js");
        var max = Math.max;
        var min = Math.min;
        module.exports = function (index, length) {
          index = toInteger(index);
          return index < 0 ? max(index + length, 0) : min(index, length);
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_to-integer.js":
      /*!*************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_to-integer.js ***!
        \*************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // 7.1.4 ToInteger

        var ceil = Math.ceil;
        var floor = Math.floor;
        module.exports = function (it) {
          return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_to-iobject.js":
      /*!*************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_to-iobject.js ***!
        \*************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // to indexed object, toObject with fallback for non-array-like ES3 strings

        var IObject = __webpack_require__( /*! ./_iobject */"./node_modules/core-js/library/modules/_iobject.js");
        var defined = __webpack_require__( /*! ./_defined */"./node_modules/core-js/library/modules/_defined.js");
        module.exports = function (it) {
          return IObject(defined(it));
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_to-length.js":
      /*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_to-length.js ***!
        \************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // 7.1.15 ToLength

        var toInteger = __webpack_require__( /*! ./_to-integer */"./node_modules/core-js/library/modules/_to-integer.js");
        var min = Math.min;
        module.exports = function (it) {
          return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_to-object.js":
      /*!************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_to-object.js ***!
        \************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // 7.1.13 ToObject(argument)

        var defined = __webpack_require__( /*! ./_defined */"./node_modules/core-js/library/modules/_defined.js");
        module.exports = function (it) {
          return Object(defined(it));
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_to-primitive.js":
      /*!***************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_to-primitive.js ***!
        \***************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // 7.1.1 ToPrimitive(input [, PreferredType])

        var isObject = __webpack_require__( /*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js");
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function (it, S) {
          if (!isObject(it)) return it;
          var fn, val;
          if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
          if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
          if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
          throw TypeError("Can't convert object to primitive value");
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_uid.js":
      /*!******************************************************!*\
        !*** ./node_modules/core-js/library/modules/_uid.js ***!
        \******************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var id = 0;
        var px = Math.random();
        module.exports = function (key) {
          return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_user-agent.js":
      /*!*************************************************************!*\
        !*** ./node_modules/core-js/library/modules/_user-agent.js ***!
        \*************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var global = __webpack_require__( /*! ./_global */"./node_modules/core-js/library/modules/_global.js");
        var navigator = global.navigator;

        module.exports = navigator && navigator.userAgent || '';

        /***/
      },

      /***/"./node_modules/core-js/library/modules/_wks.js":
      /*!******************************************************!*\
        !*** ./node_modules/core-js/library/modules/_wks.js ***!
        \******************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var store = __webpack_require__( /*! ./_shared */"./node_modules/core-js/library/modules/_shared.js")('wks');
        var uid = __webpack_require__( /*! ./_uid */"./node_modules/core-js/library/modules/_uid.js");
        var Symbol = __webpack_require__( /*! ./_global */"./node_modules/core-js/library/modules/_global.js").Symbol;
        var USE_SYMBOL = typeof Symbol == 'function';

        var $exports = module.exports = function (name) {
          return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
        };

        $exports.store = store;

        /***/
      },

      /***/"./node_modules/core-js/library/modules/core.get-iterator-method.js":
      /*!**************************************************************************!*\
        !*** ./node_modules/core-js/library/modules/core.get-iterator-method.js ***!
        \**************************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var classof = __webpack_require__( /*! ./_classof */"./node_modules/core-js/library/modules/_classof.js");
        var ITERATOR = __webpack_require__( /*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")('iterator');
        var Iterators = __webpack_require__( /*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js");
        module.exports = __webpack_require__( /*! ./_core */"./node_modules/core-js/library/modules/_core.js").getIteratorMethod = function (it) {
          if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
        };

        /***/
      },

      /***/"./node_modules/core-js/library/modules/es6.array.iterator.js":
      /*!********************************************************************!*\
        !*** ./node_modules/core-js/library/modules/es6.array.iterator.js ***!
        \********************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var addToUnscopables = __webpack_require__( /*! ./_add-to-unscopables */"./node_modules/core-js/library/modules/_add-to-unscopables.js");
        var step = __webpack_require__( /*! ./_iter-step */"./node_modules/core-js/library/modules/_iter-step.js");
        var Iterators = __webpack_require__( /*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js");
        var toIObject = __webpack_require__( /*! ./_to-iobject */"./node_modules/core-js/library/modules/_to-iobject.js");

        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
        module.exports = __webpack_require__( /*! ./_iter-define */"./node_modules/core-js/library/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
          this._t = toIObject(iterated); // target
          this._i = 0; // next index
          this._k = kind; // kind
          // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
        }, function () {
          var O = this._t;
          var kind = this._k;
          var index = this._i++;
          if (!O || index >= O.length) {
            this._t = undefined;
            return step(1);
          }
          if (kind == 'keys') return step(0, index);
          if (kind == 'values') return step(0, O[index]);
          return step(0, [index, O[index]]);
        }, 'values');

        // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        Iterators.Arguments = Iterators.Array;

        addToUnscopables('keys');
        addToUnscopables('values');
        addToUnscopables('entries');

        /***/
      },

      /***/"./node_modules/core-js/library/modules/es6.object.to-string.js":
      /*!**********************************************************************!*\
        !*** ./node_modules/core-js/library/modules/es6.object.to-string.js ***!
        \**********************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        /***/
      },

      /***/"./node_modules/core-js/library/modules/es6.promise.js":
      /*!*************************************************************!*\
        !*** ./node_modules/core-js/library/modules/es6.promise.js ***!
        \*************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var LIBRARY = __webpack_require__( /*! ./_library */"./node_modules/core-js/library/modules/_library.js");
        var global = __webpack_require__( /*! ./_global */"./node_modules/core-js/library/modules/_global.js");
        var ctx = __webpack_require__( /*! ./_ctx */"./node_modules/core-js/library/modules/_ctx.js");
        var classof = __webpack_require__( /*! ./_classof */"./node_modules/core-js/library/modules/_classof.js");
        var $export = __webpack_require__( /*! ./_export */"./node_modules/core-js/library/modules/_export.js");
        var isObject = __webpack_require__( /*! ./_is-object */"./node_modules/core-js/library/modules/_is-object.js");
        var aFunction = __webpack_require__( /*! ./_a-function */"./node_modules/core-js/library/modules/_a-function.js");
        var anInstance = __webpack_require__( /*! ./_an-instance */"./node_modules/core-js/library/modules/_an-instance.js");
        var forOf = __webpack_require__( /*! ./_for-of */"./node_modules/core-js/library/modules/_for-of.js");
        var speciesConstructor = __webpack_require__( /*! ./_species-constructor */"./node_modules/core-js/library/modules/_species-constructor.js");
        var task = __webpack_require__( /*! ./_task */"./node_modules/core-js/library/modules/_task.js").set;
        var microtask = __webpack_require__( /*! ./_microtask */"./node_modules/core-js/library/modules/_microtask.js")();
        var newPromiseCapabilityModule = __webpack_require__( /*! ./_new-promise-capability */"./node_modules/core-js/library/modules/_new-promise-capability.js");
        var perform = __webpack_require__( /*! ./_perform */"./node_modules/core-js/library/modules/_perform.js");
        var userAgent = __webpack_require__( /*! ./_user-agent */"./node_modules/core-js/library/modules/_user-agent.js");
        var promiseResolve = __webpack_require__( /*! ./_promise-resolve */"./node_modules/core-js/library/modules/_promise-resolve.js");
        var PROMISE = 'Promise';
        var TypeError = global.TypeError;
        var process = global.process;
        var versions = process && process.versions;
        var v8 = versions && versions.v8 || '';
        var $Promise = global[PROMISE];
        var isNode = classof(process) == 'process';
        var empty = function () {/* empty */};
        var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
        var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

        var USE_NATIVE = !!function () {
          try {
            // correct subclassing with @@species support
            var promise = $Promise.resolve(1);
            var FakePromise = (promise.constructor = {})[__webpack_require__( /*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")('species')] = function (exec) {
              exec(empty, empty);
            };
            // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
            return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise
            // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
            // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
            // we can't detect it synchronously, so just check versions
            && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
          } catch (e) {/* empty */}
        }();

        // helpers
        var isThenable = function (it) {
          var then;
          return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
        };
        var notify = function (promise, isReject) {
          if (promise._n) return;
          promise._n = true;
          var chain = promise._c;
          microtask(function () {
            var value = promise._v;
            var ok = promise._s == 1;
            var i = 0;
            var run = function (reaction) {
              var handler = ok ? reaction.ok : reaction.fail;
              var resolve = reaction.resolve;
              var reject = reaction.reject;
              var domain = reaction.domain;
              var result, then, exited;
              try {
                if (handler) {
                  if (!ok) {
                    if (promise._h == 2) onHandleUnhandled(promise);
                    promise._h = 1;
                  }
                  if (handler === true) result = value;else {
                    if (domain) domain.enter();
                    result = handler(value); // may throw
                    if (domain) {
                      domain.exit();
                      exited = true;
                    }
                  }
                  if (result === reaction.promise) {
                    reject(TypeError('Promise-chain cycle'));
                  } else if (then = isThenable(result)) {
                    then.call(result, resolve, reject);
                  } else resolve(result);
                } else reject(value);
              } catch (e) {
                if (domain && !exited) domain.exit();
                reject(e);
              }
            };
            while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
            promise._c = [];
            promise._n = false;
            if (isReject && !promise._h) onUnhandled(promise);
          });
        };
        var onUnhandled = function (promise) {
          task.call(global, function () {
            var value = promise._v;
            var unhandled = isUnhandled(promise);
            var result, handler, console;
            if (unhandled) {
              result = perform(function () {
                if (isNode) {
                  process.emit('unhandledRejection', value, promise);
                } else if (handler = global.onunhandledrejection) {
                  handler({ promise: promise, reason: value });
                } else if ((console = global.console) && console.error) {
                  console.error('Unhandled promise rejection', value);
                }
              });
              // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
              promise._h = isNode || isUnhandled(promise) ? 2 : 1;
            }promise._a = undefined;
            if (unhandled && result.e) throw result.v;
          });
        };
        var isUnhandled = function (promise) {
          return promise._h !== 1 && (promise._a || promise._c).length === 0;
        };
        var onHandleUnhandled = function (promise) {
          task.call(global, function () {
            var handler;
            if (isNode) {
              process.emit('rejectionHandled', promise);
            } else if (handler = global.onrejectionhandled) {
              handler({ promise: promise, reason: promise._v });
            }
          });
        };
        var $reject = function (value) {
          var promise = this;
          if (promise._d) return;
          promise._d = true;
          promise = promise._w || promise; // unwrap
          promise._v = value;
          promise._s = 2;
          if (!promise._a) promise._a = promise._c.slice();
          notify(promise, true);
        };
        var $resolve = function (value) {
          var promise = this;
          var then;
          if (promise._d) return;
          promise._d = true;
          promise = promise._w || promise; // unwrap
          try {
            if (promise === value) throw TypeError("Promise can't be resolved itself");
            if (then = isThenable(value)) {
              microtask(function () {
                var wrapper = { _w: promise, _d: false }; // wrap
                try {
                  then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                } catch (e) {
                  $reject.call(wrapper, e);
                }
              });
            } else {
              promise._v = value;
              promise._s = 1;
              notify(promise, false);
            }
          } catch (e) {
            $reject.call({ _w: promise, _d: false }, e); // wrap
          }
        };

        // constructor polyfill
        if (!USE_NATIVE) {
          // 25.4.3.1 Promise(executor)
          $Promise = function Promise(executor) {
            anInstance(this, $Promise, PROMISE, '_h');
            aFunction(executor);
            Internal.call(this);
            try {
              executor(ctx($resolve, this, 1), ctx($reject, this, 1));
            } catch (err) {
              $reject.call(this, err);
            }
          };
          // eslint-disable-next-line no-unused-vars
          Internal = function Promise(executor) {
            this._c = []; // <- awaiting reactions
            this._a = undefined; // <- checked in isUnhandled reactions
            this._s = 0; // <- state
            this._d = false; // <- done
            this._v = undefined; // <- value
            this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
            this._n = false; // <- notify
          };
          Internal.prototype = __webpack_require__( /*! ./_redefine-all */"./node_modules/core-js/library/modules/_redefine-all.js")($Promise.prototype, {
            // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
            then: function then(onFulfilled, onRejected) {
              var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
              reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
              reaction.fail = typeof onRejected == 'function' && onRejected;
              reaction.domain = isNode ? process.domain : undefined;
              this._c.push(reaction);
              if (this._a) this._a.push(reaction);
              if (this._s) notify(this, false);
              return reaction.promise;
            },
            // 25.4.5.1 Promise.prototype.catch(onRejected)
            'catch': function (onRejected) {
              return this.then(undefined, onRejected);
            }
          });
          OwnPromiseCapability = function () {
            var promise = new Internal();
            this.promise = promise;
            this.resolve = ctx($resolve, promise, 1);
            this.reject = ctx($reject, promise, 1);
          };
          newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
            return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
          };
        }

        $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
        __webpack_require__( /*! ./_set-to-string-tag */"./node_modules/core-js/library/modules/_set-to-string-tag.js")($Promise, PROMISE);
        __webpack_require__( /*! ./_set-species */"./node_modules/core-js/library/modules/_set-species.js")(PROMISE);
        Wrapper = __webpack_require__( /*! ./_core */"./node_modules/core-js/library/modules/_core.js")[PROMISE];

        // statics
        $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
          // 25.4.4.5 Promise.reject(r)
          reject: function reject(r) {
            var capability = newPromiseCapability(this);
            var $$reject = capability.reject;
            $$reject(r);
            return capability.promise;
          }
        });
        $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
          // 25.4.4.6 Promise.resolve(x)
          resolve: function resolve(x) {
            return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
          }
        });
        $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__( /*! ./_iter-detect */"./node_modules/core-js/library/modules/_iter-detect.js")(function (iter) {
          $Promise.all(iter)['catch'](empty);
        })), PROMISE, {
          // 25.4.4.1 Promise.all(iterable)
          all: function all(iterable) {
            var C = this;
            var capability = newPromiseCapability(C);
            var resolve = capability.resolve;
            var reject = capability.reject;
            var result = perform(function () {
              var values = [];
              var index = 0;
              var remaining = 1;
              forOf(iterable, false, function (promise) {
                var $index = index++;
                var alreadyCalled = false;
                values.push(undefined);
                remaining++;
                C.resolve(promise).then(function (value) {
                  if (alreadyCalled) return;
                  alreadyCalled = true;
                  values[$index] = value;
                  --remaining || resolve(values);
                }, reject);
              });
              --remaining || resolve(values);
            });
            if (result.e) reject(result.v);
            return capability.promise;
          },
          // 25.4.4.4 Promise.race(iterable)
          race: function race(iterable) {
            var C = this;
            var capability = newPromiseCapability(C);
            var reject = capability.reject;
            var result = perform(function () {
              forOf(iterable, false, function (promise) {
                C.resolve(promise).then(capability.resolve, reject);
              });
            });
            if (result.e) reject(result.v);
            return capability.promise;
          }
        });

        /***/
      },

      /***/"./node_modules/core-js/library/modules/es6.string.iterator.js":
      /*!*********************************************************************!*\
        !*** ./node_modules/core-js/library/modules/es6.string.iterator.js ***!
        \*********************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var $at = __webpack_require__( /*! ./_string-at */"./node_modules/core-js/library/modules/_string-at.js")(true);

        // 21.1.3.27 String.prototype[@@iterator]()
        __webpack_require__( /*! ./_iter-define */"./node_modules/core-js/library/modules/_iter-define.js")(String, 'String', function (iterated) {
          this._t = String(iterated); // target
          this._i = 0; // next index
          // 21.1.5.2.1 %StringIteratorPrototype%.next()
        }, function () {
          var O = this._t;
          var index = this._i;
          var point;
          if (index >= O.length) return { value: undefined, done: true };
          point = $at(O, index);
          this._i += point.length;
          return { value: point, done: false };
        });

        /***/
      },

      /***/"./node_modules/core-js/library/modules/es7.promise.finally.js":
      /*!*********************************************************************!*\
        !*** ./node_modules/core-js/library/modules/es7.promise.finally.js ***!
        \*********************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";
        // https://github.com/tc39/proposal-promise-finally


        var $export = __webpack_require__( /*! ./_export */"./node_modules/core-js/library/modules/_export.js");
        var core = __webpack_require__( /*! ./_core */"./node_modules/core-js/library/modules/_core.js");
        var global = __webpack_require__( /*! ./_global */"./node_modules/core-js/library/modules/_global.js");
        var speciesConstructor = __webpack_require__( /*! ./_species-constructor */"./node_modules/core-js/library/modules/_species-constructor.js");
        var promiseResolve = __webpack_require__( /*! ./_promise-resolve */"./node_modules/core-js/library/modules/_promise-resolve.js");

        $export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
            var C = speciesConstructor(this, core.Promise || global.Promise);
            var isFunction = typeof onFinally == 'function';
            return this.then(isFunction ? function (x) {
              return promiseResolve(C, onFinally()).then(function () {
                return x;
              });
            } : onFinally, isFunction ? function (e) {
              return promiseResolve(C, onFinally()).then(function () {
                throw e;
              });
            } : onFinally);
          } });

        /***/
      },

      /***/"./node_modules/core-js/library/modules/es7.promise.try.js":
      /*!*****************************************************************!*\
        !*** ./node_modules/core-js/library/modules/es7.promise.try.js ***!
        \*****************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        // https://github.com/tc39/proposal-promise-try

        var $export = __webpack_require__( /*! ./_export */"./node_modules/core-js/library/modules/_export.js");
        var newPromiseCapability = __webpack_require__( /*! ./_new-promise-capability */"./node_modules/core-js/library/modules/_new-promise-capability.js");
        var perform = __webpack_require__( /*! ./_perform */"./node_modules/core-js/library/modules/_perform.js");

        $export($export.S, 'Promise', { 'try': function (callbackfn) {
            var promiseCapability = newPromiseCapability.f(this);
            var result = perform(callbackfn);
            (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
            return promiseCapability.promise;
          } });

        /***/
      },

      /***/"./node_modules/core-js/library/modules/web.dom.iterable.js":
      /*!******************************************************************!*\
        !*** ./node_modules/core-js/library/modules/web.dom.iterable.js ***!
        \******************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        __webpack_require__( /*! ./es6.array.iterator */"./node_modules/core-js/library/modules/es6.array.iterator.js");
        var global = __webpack_require__( /*! ./_global */"./node_modules/core-js/library/modules/_global.js");
        var hide = __webpack_require__( /*! ./_hide */"./node_modules/core-js/library/modules/_hide.js");
        var Iterators = __webpack_require__( /*! ./_iterators */"./node_modules/core-js/library/modules/_iterators.js");
        var TO_STRING_TAG = __webpack_require__( /*! ./_wks */"./node_modules/core-js/library/modules/_wks.js")('toStringTag');

        var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');

        for (var i = 0; i < DOMIterables.length; i++) {
          var NAME = DOMIterables[i];
          var Collection = global[NAME];
          var proto = Collection && Collection.prototype;
          if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
          Iterators[NAME] = Iterators.Array;
        }

        /***/
      },

      /***/"./node_modules/regenerator-runtime/runtime-module.js":
      /*!************************************************************!*\
        !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
        \************************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        // This method of obtaining a reference to the global object needs to be
        // kept identical to the way it is obtained in runtime.js

        var g = function () {
          return this;
        }() || Function("return this")();

        // Use `getOwnPropertyNames` because not all browsers support calling
        // `hasOwnProperty` on the global `self` object in a worker. See #183.
        var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

        // Save the old regeneratorRuntime in case it needs to be restored later.
        var oldRuntime = hadRuntime && g.regeneratorRuntime;

        // Force reevalutation of runtime.js.
        g.regeneratorRuntime = undefined;

        module.exports = __webpack_require__( /*! ./runtime */"./node_modules/regenerator-runtime/runtime.js");

        if (hadRuntime) {
          // Restore the original runtime.
          g.regeneratorRuntime = oldRuntime;
        } else {
          // Remove the global property added by runtime.js.
          try {
            delete g.regeneratorRuntime;
          } catch (e) {
            g.regeneratorRuntime = undefined;
          }
        }

        /***/
      },

      /***/"./node_modules/regenerator-runtime/runtime.js":
      /*!*****************************************************!*\
        !*** ./node_modules/regenerator-runtime/runtime.js ***!
        \*****************************************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        /**
         * Copyright (c) 2014-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        !function (global) {
          "use strict";

          var Op = Object.prototype;
          var hasOwn = Op.hasOwnProperty;
          var undefined; // More compressible than void 0.
          var $Symbol = typeof Symbol === "function" ? Symbol : {};
          var iteratorSymbol = $Symbol.iterator || "@@iterator";
          var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
          var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

          var inModule = typeof module === "object";
          var runtime = global.regeneratorRuntime;
          if (runtime) {
            if (inModule) {
              // If regeneratorRuntime is defined globally and we're in a module,
              // make the exports object identical to regeneratorRuntime.
              module.exports = runtime;
            }
            // Don't bother evaluating the rest of this file if the runtime was
            // already defined globally.
            return;
          }

          // Define the runtime globally (as expected by generated code) as either
          // module.exports (if we're in a module) or a new, empty object.
          runtime = global.regeneratorRuntime = inModule ? module.exports : {};

          function wrap(innerFn, outerFn, self, tryLocsList) {
            // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []);

            // The ._invoke method unifies the implementations of the .next,
            // .throw, and .return methods.
            generator._invoke = makeInvokeMethod(innerFn, self, context);

            return generator;
          }
          runtime.wrap = wrap;

          // Try/catch helper to minimize deoptimizations. Returns a completion
          // record like context.tryEntries[i].completion. This interface could
          // have been (and was previously) designed to take a closure to be
          // invoked without arguments, but in all the cases we care about we
          // already have an existing method we want to call, so there's no need
          // to create a new function object. We can even get away with assuming
          // the method takes exactly one argument, since that happens to be true
          // in every case, so we don't have to touch the arguments object. The
          // only additional allocation required is the completion record, which
          // has a stable shape and so hopefully should be cheap to allocate.
          function tryCatch(fn, obj, arg) {
            try {
              return { type: "normal", arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: "throw", arg: err };
            }
          }

          var GenStateSuspendedStart = "suspendedStart";
          var GenStateSuspendedYield = "suspendedYield";
          var GenStateExecuting = "executing";
          var GenStateCompleted = "completed";

          // Returning this object from the innerFn has the same effect as
          // breaking out of the dispatch switch statement.
          var ContinueSentinel = {};

          // Dummy constructor functions that we use as the .constructor and
          // .constructor.prototype properties for functions that return Generator
          // objects. For full spec compliance, you may wish to configure your
          // minifier not to mangle the names of these two functions.
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}

          // This is a polyfill for %IteratorPrototype% for environments that
          // don't natively support it.
          var IteratorPrototype = {};
          IteratorPrototype[iteratorSymbol] = function () {
            return this;
          };

          var getProto = Object.getPrototypeOf;
          var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
          if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
            // This environment has a native %IteratorPrototype%; use it instead
            // of the polyfill.
            IteratorPrototype = NativeIteratorPrototype;
          }

          var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
          GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
          GeneratorFunctionPrototype.constructor = GeneratorFunction;
          GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

          // Helper for defining the .next, .throw, and .return methods of the
          // Iterator interface in terms of a single ._invoke method.
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              prototype[method] = function (arg) {
                return this._invoke(method, arg);
              };
            });
          }

          runtime.isGeneratorFunction = function (genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor ? ctor === GeneratorFunction ||
            // For the native GeneratorFunction constructor, the best we can
            // do is to check its .name property.
            (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
          };

          runtime.mark = function (genFun) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;
              if (!(toStringTagSymbol in genFun)) {
                genFun[toStringTagSymbol] = "GeneratorFunction";
              }
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
          };

          // Within the body of any async function, `await x` is transformed to
          // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
          // `hasOwn.call(value, "__await")` to determine if the yielded value is
          // meant to be awaited.
          runtime.awrap = function (arg) {
            return { __await: arg };
          };

          function AsyncIterator(generator) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if (record.type === "throw") {
                reject(record.arg);
              } else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                  return Promise.resolve(value.__await).then(function (value) {
                    invoke("next", value, resolve, reject);
                  }, function (err) {
                    invoke("throw", err, resolve, reject);
                  });
                }

                return Promise.resolve(value).then(function (unwrapped) {
                  // When a yielded Promise is resolved, its final value becomes
                  // the .value of the Promise<{value,done}> result for the
                  // current iteration. If the Promise is rejected, however, the
                  // result for this iteration will be rejected with the same
                  // reason. Note that rejections of yielded Promises are not
                  // thrown back into the generator function, as is the case
                  // when an awaited Promise is rejected. This difference in
                  // behavior between yield and await is important, because it
                  // allows the consumer to decide what to do with the yielded
                  // rejection (swallow it and continue, manually .throw it back
                  // into the generator, abandon iteration, whatever). With
                  // await, by contrast, there is no opportunity to examine the
                  // rejection reason outside the generator function, so the
                  // only option is to throw it from the await expression, and
                  // let the generator function handle the exception.
                  result.value = unwrapped;
                  resolve(result);
                }, reject);
              }
            }

            var previousPromise;

            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new Promise(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }

              return previousPromise =
              // If enqueue has been called before, then we want to wait until
              // all previous Promises have been resolved before calling invoke,
              // so that results are always delivered in the correct order. If
              // enqueue has not been called before, then it is important to
              // call invoke immediately, without waiting on a callback to fire,
              // so that the async generator function has the opportunity to do
              // any necessary setup in a predictable way. This predictability
              // is why the Promise constructor synchronously invokes its
              // executor callback, and why async functions synchronously
              // execute code before the first await. Since we implement simple
              // async functions in terms of async generators, it is especially
              // important to get this right, even though it requires care.
              previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
              // Avoid propagating failures to Promises returned by later
              // invocations of the iterator.
              callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }

            // Define the unified helper method that is used to implement .next,
            // .throw, and .return (see defineIteratorMethods).
            this._invoke = enqueue;
          }

          defineIteratorMethods(AsyncIterator.prototype);
          AsyncIterator.prototype[asyncIteratorSymbol] = function () {
            return this;
          };
          runtime.AsyncIterator = AsyncIterator;

          // Note that simple async functions are implemented on top of
          // AsyncIterator objects; they just return a Promise for the value of
          // the final result produced by the iterator.
          runtime.async = function (innerFn, outerFn, self, tryLocsList) {
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

            return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
            : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
          };

          function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;

            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error("Generator is already running");
              }

              if (state === GenStateCompleted) {
                if (method === "throw") {
                  throw arg;
                }

                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
              }

              context.method = method;
              context.arg = arg;

              while (true) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }

                if (context.method === "next") {
                  // Setting context._sent for legacy support of Babel's
                  // function.sent implementation.
                  context.sent = context._sent = context.arg;
                } else if (context.method === "throw") {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw context.arg;
                  }

                  context.dispatchException(context.arg);
                } else if (context.method === "return") {
                  context.abrupt("return", context.arg);
                }

                state = GenStateExecuting;

                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                  // If an exception is thrown from innerFn, we leave state ===
                  // GenStateExecuting and loop back for another invocation.
                  state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                  if (record.arg === ContinueSentinel) {
                    continue;
                  }

                  return {
                    value: record.arg,
                    done: context.done
                  };
                } else if (record.type === "throw") {
                  state = GenStateCompleted;
                  // Dispatch the exception by looping back around to the
                  // context.dispatchException(context.arg) call above.
                  context.method = "throw";
                  context.arg = record.arg;
                }
              }
            };
          }

          // Call delegate.iterator[context.method](context.arg) and handle the
          // result, either by returning a { value, done } result from the
          // delegate iterator, or by modifying context.method and context.arg,
          // setting context.delegate to null, and returning the ContinueSentinel.
          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (method === undefined) {
              // A .throw or .return when the delegate iterator has no .throw
              // method always terminates the yield* loop.
              context.delegate = null;

              if (context.method === "throw") {
                if (delegate.iterator.return) {
                  // If the delegate iterator has a return method, give it a
                  // chance to clean up.
                  context.method = "return";
                  context.arg = undefined;
                  maybeInvokeDelegate(delegate, context);

                  if (context.method === "throw") {
                    // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                  }
                }

                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
              }

              return ContinueSentinel;
            }

            var record = tryCatch(method, delegate.iterator, context.arg);

            if (record.type === "throw") {
              context.method = "throw";
              context.arg = record.arg;
              context.delegate = null;
              return ContinueSentinel;
            }

            var info = record.arg;

            if (!info) {
              context.method = "throw";
              context.arg = new TypeError("iterator result is not an object");
              context.delegate = null;
              return ContinueSentinel;
            }

            if (info.done) {
              // Assign the result of the finished delegate to the temporary
              // variable specified by delegate.resultName (see delegateYield).
              context[delegate.resultName] = info.value;

              // Resume execution at the desired location (see delegateYield).
              context.next = delegate.nextLoc;

              // If context.method was "throw" but the delegate handled the
              // exception, let the outer generator proceed normally. If
              // context.method was "next", forget context.arg since it has been
              // "consumed" by the delegate iterator. If context.method was
              // "return", allow the original .return call to continue in the
              // outer generator.
              if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
              }
            } else {
              // Re-yield the result returned by the delegate method.
              return info;
            }

            // The delegate iterator is finished, so forget it and continue with
            // the outer generator.
            context.delegate = null;
            return ContinueSentinel;
          }

          // Define Generator.prototype.{next,throw,return} in terms of the
          // unified ._invoke helper method.
          defineIteratorMethods(Gp);

          Gp[toStringTagSymbol] = "Generator";

          // A Generator should always return itself as the iterator object when the
          // @@iterator function is called on it. Some browsers' implementations of the
          // iterator prototype chain incorrectly implement this, causing the Generator
          // object to not be returned from this call. This ensures that doesn't happen.
          // See https://github.com/facebook/regenerator/issues/274 for more details.
          Gp[iteratorSymbol] = function () {
            return this;
          };

          Gp.toString = function () {
            return "[object Generator]";
          };

          function pushTryEntry(locs) {
            var entry = { tryLoc: locs[0] };

            if (1 in locs) {
              entry.catchLoc = locs[1];
            }

            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }

            this.tryEntries.push(entry);
          }

          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
          }

          function Context(tryLocsList) {
            // The root entry object (effectively a try statement without a catch
            // or a finally block) gives us a place to store values thrown from
            // locations where there is no enclosing try statement.
            this.tryEntries = [{ tryLoc: "root" }];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }

          runtime.keys = function (object) {
            var keys = [];
            for (var key in object) {
              keys.push(key);
            }
            keys.reverse();

            // Rather than returning an object with a next method, we keep
            // things simple and return the next function itself.
            return function next() {
              while (keys.length) {
                var key = keys.pop();
                if (key in object) {
                  next.value = key;
                  next.done = false;
                  return next;
                }
              }

              // To avoid creating an additional object, we just hang the .value
              // and .done properties off the next function object itself. This
              // also ensures that the minifier will not anonymize the function.
              next.done = true;
              return next;
            };
          };

          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) {
                return iteratorMethod.call(iterable);
              }

              if (typeof iterable.next === "function") {
                return iterable;
              }

              if (!isNaN(iterable.length)) {
                var i = -1,
                    next = function next() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next.value = iterable[i];
                      next.done = false;
                      return next;
                    }
                  }

                  next.value = undefined;
                  next.done = true;

                  return next;
                };

                return next.next = next;
              }
            }

            // Return an iterator with no values.
            return { next: doneResult };
          }
          runtime.values = values;

          function doneResult() {
            return { value: undefined, done: true };
          }

          Context.prototype = {
            constructor: Context,

            reset: function (skipTempReset) {
              this.prev = 0;
              this.next = 0;
              // Resetting context._sent for legacy support of Babel's
              // function.sent implementation.
              this.sent = this._sent = undefined;
              this.done = false;
              this.delegate = null;

              this.method = "next";
              this.arg = undefined;

              this.tryEntries.forEach(resetTryEntry);

              if (!skipTempReset) {
                for (var name in this) {
                  // Not sure about the optimal order of these conditions:
                  if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                    this[name] = undefined;
                  }
                }
              }
            },

            stop: function () {
              this.done = true;

              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;
              if (rootRecord.type === "throw") {
                throw rootRecord.arg;
              }

              return this.rval;
            },

            dispatchException: function (exception) {
              if (this.done) {
                throw exception;
              }

              var context = this;
              function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;

                if (caught) {
                  // If the dispatched exception was caught by a catch block,
                  // then let that catch block handle the exception normally.
                  context.method = "next";
                  context.arg = undefined;
                }

                return !!caught;
              }

              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;

                if (entry.tryLoc === "root") {
                  // Exception thrown outside of any try block that could handle
                  // it, so set the completion value of the entire function to
                  // throw the exception.
                  return handle("end");
                }

                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc");
                  var hasFinally = hasOwn.call(entry, "finallyLoc");

                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    } else if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    }
                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else {
                    throw new Error("try statement without catch or finally");
                  }
                }
              }
            },

            abrupt: function (type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }

              if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                // Ignore the finally entry if control is not jumping to a
                // location outside the try/catch block.
                finallyEntry = null;
              }

              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;

              if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
              }

              return this.complete(record);
            },

            complete: function (record, afterLoc) {
              if (record.type === "throw") {
                throw record.arg;
              }

              if (record.type === "break" || record.type === "continue") {
                this.next = record.arg;
              } else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
              } else if (record.type === "normal" && afterLoc) {
                this.next = afterLoc;
              }

              return ContinueSentinel;
            },

            finish: function (finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },

            "catch": function (tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if (record.type === "throw") {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }

              // The context.catch method must only be called with a location
              // argument that corresponds to a known catch block.
              throw new Error("illegal catch attempt");
            },

            delegateYield: function (iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
              };

              if (this.method === "next") {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                this.arg = undefined;
              }

              return ContinueSentinel;
            }
          };
        }(
        // In sloppy mode, unbound `this` refers to the global object, fallback to
        // Function constructor if we're in global strict mode. That is sadly a form
        // of indirect eval which violates Content Security Policy.
        function () {
          return this;
        }() || Function("return this")());

        /***/
      },

      /***/"./src/configuration.js":
      /*!******************************!*\
        !*** ./src/configuration.js ***!
        \******************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        /**
         * Object of configuration properties and callbacks.  Pass this to the request call to setup configutation
         */
        const Configuration = {
          /**
           * uri property
           * @property {string} uri the uri
           */
          uri: "localhost",

          /**
           * url property
           * @property {string} url the url
           * @deprecated
           */
          url: "localhost",

          /**
           * contentType property
           * @property {string} contentType the content type (default is text/plain)
           */
          contentType: "text/plain",
          /**
           * dataType property
           * @property {string} dataType the data type (default is text)
           */
          dataType: "text",
          /**
           * async property - no longer supported
           * @property {boolean} async set async (default true)
           */
          //async: true;
          /**
           * method property
           * @property {string} method the ajax method (default GET)
           */
          method: "GET",
          /**
           * cache property
           * @property {boolean} cache the cache toggle (default true)
           */
          cache: true,
          /**
           * timeout property
           * @property {number} timeout the timeout property
           */
          timeout: 0,
          /**
           * crossDomain property - sets withCredentials to true
           * @property {boolean} crossDomain the cross domain property
           */
          crossDomain: false,
          /**
           * xhrFields property
           * @namespace xhrFields
           */
          xhrFields: {},
          /**
           * withCredentials property
           * @property {boolean} withCredentials the setting for credentails
           */
          withCredentials: false,
          /**
           * user property
           * @property {string} user the username for credentials
           */
          user: null,
          /**
           * password property
           * @property {string} password the password for credentials
           */
          password: null,
          /**
           * allowOrigins property
           * @property {string} allowOrigins the allowed origins for crossDomain
           */
          allowOrigins: "",
          /**
           * allowMethods property
           * @property {string} allowMethods the allowed methods for crossDomain
           */
          allowMethods: null,
          /**
           * headers property
           * @property {object} headers an object of headers (key, value)
           */
          headers: {},
          /**
           * success callback
           * @property {function} success a callback for success
           */
          success: null,
          /**
           * error callback
           * @property {function} error a callback for error
           */
          error: null,
          /**
           * complete callback
           * @property {function} complete a callback after the ajax call
           */
          complete: null,
          /**
           * beforeSend callback
           * @property {function} beforeSend a callback before the ajax call
           */
          beforeSend: null,
          /**
           * mock
           * @property {boolean} mock a toggle to mock the ajax call
           */
          mock: false
        };

        exports.default = Configuration;

        /***/
      },

      /***/"./src/dataType.js":
      /*!*************************!*\
        !*** ./src/dataType.js ***!
        \*************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        const DATA_TYPE = {
          "TEXT": "text",
          "JSON": "json"
        };

        exports.default = DATA_TYPE;

        /***/
      },

      /***/"./src/headers.js":
      /*!************************!*\
        !*** ./src/headers.js ***!
        \************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        const HEADERS = {
          "TYPE": "Content-Type",
          "TEXT": "text/plain",
          "APPLICATION": "application/json",
          "ACCEPT": "Accept",
          "CACHE": "Cache-Control",
          "NO_CACHE": "no-cache",
          "ALLOW_ORIGINS": "Access-Control-Allow-Origin",
          "ALLOW_METHODS": "Access-Control-Allow-Methods",
          "AUTH": "Authorization"
        };

        exports.default = HEADERS;

        /***/
      },

      /***/"./src/index.js":
      /*!**********************!*\
        !*** ./src/index.js ***!
        \**********************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        var _configuration = __webpack_require__( /*! ./configuration.js */"./src/configuration.js");

        var _configuration2 = _interopRequireDefault(_configuration);

        var _dataType = __webpack_require__( /*! ./dataType.js */"./src/dataType.js");

        var _dataType2 = _interopRequireDefault(_dataType);

        var _headers = __webpack_require__( /*! ./headers.js */"./src/headers.js");

        var _headers2 = _interopRequireDefault(_headers);

        var _methodMap = __webpack_require__( /*! ./methodMap.js */"./src/methodMap.js");

        var _methodMap2 = _interopRequireDefault(_methodMap);

        var _request = __webpack_require__( /*! ./request.js */"./src/request.js");

        var _request2 = _interopRequireDefault(_request);

        var _sync = __webpack_require__( /*! ./sync.js */"./src/sync.js");

        var _sync2 = _interopRequireDefault(_sync);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        module.exports.Configuration = _configuration2.default;
        module.exports.DATA_TYPE = _dataType2.default;
        module.exports.HEADERS = _headers2.default;
        module.exports.METHOD_MAP = _methodMap2.default;
        module.exports.request = _request2.default;
        module.exports.sync = _sync2.default;

        /***/
      },

      /***/"./src/methodMap.js":
      /*!**************************!*\
        !*** ./src/methodMap.js ***!
        \**************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        // Map from CRUD to HTTP for our default sync implementation.
        const METHOD_MAP = {
          "create": "POST",
          "update": "PUT",
          "patch": "PATCH",
          "delete": "DELETE",
          "read": "GET",
          "CREATE": "POST",
          "UPDATE": "PUT",
          "PATCH": "PATCH",
          "DELETE": "DELETE",
          "READ": "GET"
        };

        exports.default = METHOD_MAP;

        /***/
      },

      /***/"./src/request.js":
      /*!************************!*\
        !*** ./src/request.js ***!
        \************************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _headers = __webpack_require__( /*! ./headers.js */"./src/headers.js");

        var _headers2 = _interopRequireDefault(_headers);

        var _dataType = __webpack_require__( /*! ./dataType.js */"./src/dataType.js");

        var _dataType2 = _interopRequireDefault(_dataType);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        const ASYNC = true; // Sync no longer supported by most clients

        function mockXHR() {
          this.responseType = _dataType2.default.TEXT;
          this.responseText = "";
          this.async = true;
          this.status = 200;
          this.header = {};
          this.timeout = 70;
          this.open = (method, uri, ASYNC, user, password) => {
            this.uri = uri;
            this.async = ASYNC;
            this.user = user;
            this.method = method;
          };
          this.send = () => {
            this.onload();
          };
          this.setRequestHeader = (header, value) => {
            this.header.header = value;
          };
          this.done = () => {};
          this.fail = () => {};
          this.always = () => {};
          this.then = () => {};
          this.options = {};
        };

        /**
         * AJAX capability using simple jQuery-like API<br/>
         * Supports the following object properties and features:
         * <ul>
         * <li>method</li>
         * <li>uri</li>
         * <li>contentType</li>
         * <li>dataType</li>
         * <li>beforeSend function</li>
         * <li>success callback</li>
         * <li>failure callback</li>
         * <li>complete callback</li>
         * <li>user</li>
         * <li>password</li>
         * <li>withCredentials</li>
         * <li>cache</li>
         * <li>timeout</li>
         * <li>mock - special flag for mocking response</li>
         * </ul>
         * @static
         * @param {Configuration} configuration object of configuration properties and callbacks.
         * @returns success or failure callback
         * @deprecated Use fetch or sync
         * @example request({
         *         uri: uri,
         *         contentType: "text/plain",
         *         dataType: "text",
         *         success: function (data, status) { ... },
         *         error: function (data, status) { ... }
         *     });
         */
        const request = configuration => {
          //console.debug("AUGMENTED: Ajax object: " + JSON.stringify(configuration));
          let xhr = null;

          if (configuration && configuration.uri) {
            //console.warn("AUGMENTED: Ajax Here");
            let type = configuration.type;

            if (!configuration.method && configuration.type) {
              configuration.method = configuration.type;
            }

            let method = configuration.method ? configuration.method : "GET";
            let cache = configuration.cache ? configuration.cache : true;
            //console.warn("AUGMENTED: Ajax Here 2", (configuration.mock));
            xhr = configuration.mock ? new mockXHR() : new XMLHttpRequest();
            //console.warn("AUGMENTED: Ajax xhr", xhr);
            if (configuration.timeout) {
              xhr.timeout = configuration.timeout;
            }
            //const ASYNC = true; //(configuration.async !== undefined) ? configuration.async : true;

            // CORS & Async
            if (configuration.crossDomain && configuration.xhrFields && configuration.xhrFields.withCredentials) {
              xhr.withCredentials = configuration.xhrFields.withCredentials;
              // Sync Not supported for all browsers in CORS mode
              //if (!async) {
              //  logger.warn("AUGMENTED: Augmented.Request: Sync Not supported for all browsers in CORS mode!");
              //}
              //async = true;
            }

            if (ASYNC && configuration.dataType) {
              xhr.responseType = configuration.dataType ? configuration.dataType : _dataType2.default.TEXT;
            }

            xhr.open(method, encodeURI(configuration.uri), ASYNC, configuration.user !== undefined ? configuration.user : "", configuration.password !== undefined ? configuration.password : "");
            xhr.setRequestHeader(_headers2.default.TYPE, configuration.contentType ? configuration.contentType : _headers2.default.TEXT);

            if (configuration.dataType === _dataType2.default.JSON) {
              xhr.setRequestHeader(_headers2.default.ACCEPT, _headers2.default.APPLICATION);
            }

            if (!cache) {
              xhr.setRequestHeader(_headers2.default.CACHE, _headers2.default.NO_CACHE);
            }

            // CORS
            if (xhr.withCredentials) {
              let allowOrigins = "*",
                  allowMethods = "GET";
              if (configuration.allowOrigins) {
                allowOrigins = configuration.allowOrigins;
              }
              if (configuration.allowMethods) {
                allowMethods = configuration.allowMethods;
              }

              xhr.setRequestHeader(_headers2.default.ALLOW_ORIGINS, allowOrigins);
              xhr.setRequestHeader(_headers2.default.ALLOW_METHODS, allowMethods);
            }

            // Authorization
            if (xhr.withCredentials && configuration.user && configuration.password) {
              xhr.setRequestHeader(_headers2.default.AUTH, "Basic " + window.btoa(configuration.user + ":" + configuration.password));
            }

            // custom headers
            if (configuration.headers) {
              let i = 0,
                  keys = Object.keys(configuration.headers),
                  l = keys.length;

              for (i = 0; i < l; i++) {
                xhr.setRequestHeader(keys[i], configuration.headers[keys[i]]);
              }
            }

            xhr.onload = () => {
              try {
                if (xhr.status > 199 && xhr.status < 399) {
                  if (configuration.success) {
                    if (xhr.responseType === "" || xhr.responseType === _dataType2.default.TEXT) {
                      if (xhr.responseText) {
                        configuration.success(xhr.responseText, xhr.status, xhr);
                      } else {
                        console.warn("AUGMENTED: Ajax (" + xhr.responseType + " responseType) did not return anything.");
                        configuration.success("", xhr.status, xhr);
                      }
                    } else if (xhr.responseType === _dataType2.default.JSON) {
                      if (xhr.response) {
                        //console.debug("AUGMENTED: Ajax (JSON responseType) native JSON.");
                        configuration.success(xhr.response, xhr.status, xhr);
                      } else if (xhr.responseText) {
                        //console.debug("AUGMENTED: Ajax (JSON responseType) parsed JSON from string.");
                        configuration.success(JSON.parse(xhr.responseText), xhr.status, xhr);
                      } else {
                        console.warn("AUGMENTED: Ajax (" + xhr.responseType + " responseType) did not return anything.");
                        configuration.success("", xhr.status, xhr);
                      }
                    } else {
                      if (xhr.responseText) {
                        configuration.success(xhr.responseText, xhr.status, xhr);
                      } else if (xhr.response) {
                        configuration.success(xhr.response, xhr.status, xhr);
                      } else {
                        console.warn("AUGMENTED: Ajax (" + xhr.responseType + " responseType) did not return anything.");
                        configuration.success("", xhr.status, xhr);
                      }
                    }
                  }
                } else if (xhr.status > 399 && xhr.status < 600) {
                  if (configuration.failure) {
                    configuration.failure(xhr, xhr.status, xhr.statusText);
                  } else if (configuration.error) {
                    configuration.error(xhr, xhr.status, xhr.statusText);
                  }
                }
              } catch (e) {
                console.error("AUGMENTED: Ajax (" + e + ")");
                if (configuration && configuration.error) {
                  configuration.error(xhr, xhr.status, xhr.statusText);
                }
                return xhr;
              }
              if (configuration.complete) {
                configuration.complete(xhr, xhr.status);
              }
              return xhr;
            };

            if (configuration.beforeSend) {
              configuration.beforeSend(xhr);
            }
            xhr.send(configuration.data ? configuration.data : "");
          }

          //console.debug("AUGMENTED: Ajax status (" + xhr.status + ")");

          return xhr;
        };

        exports.default = request;

        /***/
      },

      /***/"./src/sync.js":
      /*!*********************!*\
        !*** ./src/sync.js ***!
        \*********************/
      /*! no static exports found */
      /***/function (module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _regenerator = __webpack_require__( /*! babel-runtime/regenerator */"./node_modules/babel-runtime/regenerator/index.js");

        var _regenerator2 = _interopRequireDefault(_regenerator);

        var _asyncToGenerator2 = __webpack_require__( /*! babel-runtime/helpers/asyncToGenerator */"./node_modules/babel-runtime/helpers/asyncToGenerator.js");

        var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

        var _methodMap = __webpack_require__( /*! ./methodMap.js */"./src/methodMap.js");

        var _methodMap2 = _interopRequireDefault(_methodMap);

        var _request = __webpack_require__( /*! ./request.js */"./src/request.js");

        var _request2 = _interopRequireDefault(_request);

        var _dataType = __webpack_require__( /*! ./dataType.js */"./src/dataType.js");

        var _dataType2 = _interopRequireDefault(_dataType);

        var _headers = __webpack_require__( /*! ./headers.js */"./src/headers.js");

        var _headers2 = _interopRequireDefault(_headers);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        // pull from Next as a module
        const isFunction = name => {
          return Object.prototype.toString.call(name) == "[object Function]";
        };

        /**
         * Base sync method that can pass special augmented features
         */
        const sync = (() => {
          var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(method, model, options) {
            var data, type, params, myData, ret;
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (model) {
                    _context.next = 3;
                    break;
                  }

                  console.error("No model to sync!");
                  throw new Error("No model to sync!");

                case 3:
                  data = null;

                  if (!options) {
                    options = {};
                  }
                  type = method ? _methodMap2.default[method] : _methodMap2.default.READ;
                  // Default JSON-request options.

                  params = {
                    type: type,
                    dataType: _dataType2.default.JSON,
                    success: options.success,
                    error: options.error
                  };

                  // Ensure that we have a uri.

                  if (options.uri) {
                    _context.next = 13;
                    break;
                  }

                  if (!(model && model.uri)) {
                    _context.next = 12;
                    break;
                  }

                  if (isFunction(model.uri)) {
                    options.uri = model.uri();
                  } else {
                    options.uri = model.uri;
                  }
                  _context.next = 13;
                  break;

                case 12:
                  throw new Error(`A "uri" property or model with "uri" must be specified in the collection or model class!`);

                case 13:

                  // Ensure that we have the appropriate request data.
                  if (options.data == null && model && (method === _methodMap2.default.CREATE || method === _methodMap2.default.UPDATE || method === _methodMap2.default.PATCH)) {
                    params.contentType = _headers2.default.APPLICATION;
                    params.data = JSON.stringify(options.attrs || model.toJSON(options));
                  }

                  // Don't process data on a non-GET request.
                  if (params.type !== _methodMap2.default.READ) {
                    //params.processData = false;
                    params.data = null;
                  }

                  myData = params.data ? JSON.stringify(data) : null;
                  _context.next = 18;
                  return fetch(options.uri, {
                    "method": params.type,
                    "headers": { "Content-Type": params.contentType },
                    "credentials": 'include',
                    "body": myData
                  }).then(function (res) {
                    //console.debug(`Status: ${res.status}`);
                    if (res.ok) {
                      //console.debug("fetch finished");
                      return res.json();
                    }
                    throw new Error(`${res.status}: ${params.uri} ${res.statusText} `);
                  }).then(function (response) {
                    //console.debug(`Response: ${JSON.stringify(response)}`);
                    model.set(response);
                    data = response;
                    return response;
                  }).then(function (response) {
                    if (params.success) {
                      return params.success(response);
                    }
                    return response;
                  }).then(function (response) {
                    // null is the old xhr
                    model.trigger("request", model, null, options);
                    //console.debug("completing sync");
                    return response;
                  }).catch(function (error) {
                    if (params.error) {
                      return params.error(error);
                    }
                    console.error(error);
                    return error;
                  });

                case 18:
                  ret = _context.sent;
                  return _context.abrupt("return", ret);

                case 20:
                case "end":
                  return _context.stop();
              }
            }, _callee, undefined);
          }));

          return function sync(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
          };
        })();

        exports.default = sync;

        /***/
      }

      /******/ })
  );
});
//# sourceMappingURL=presentation-request.js.map

/***/ }),

/***/ "./node_modules/presentation-storage/dist/presentation-storage.js":
/*!************************************************************************!*\
  !*** ./node_modules/presentation-storage/dist/presentation-storage.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function (e, t) {
   true ? module.exports = t(__webpack_require__(/*! next-core-structures */ "./node_modules/next-core-structures/dist/next-core-structures.js")) : undefined;
}(undefined, function (e) {
  return function (e) {
    var t = {};function r(s) {
      if (t[s]) return t[s].exports;var o = t[s] = { i: s, l: !1, exports: {} };return e[s].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }return r.m = e, r.c = t, r.d = function (e, t, s) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var s = Object.create(null);if (r.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) r.d(s, o, function (t) {
        return e[t];
      }.bind(null, o));return s;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "/dist/", r(r.s = 3);
  }([function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });const s = () => "undefined" != typeof Storage;t.default = class {
      constructor(e) {
        this.isPersisted = e, this._myStore = null, s() ? this.isPersisted ? this._myStore = localStorage : this._myStore = sessionStorage : console.warn("AUGMENTED: No localStorage.");
      }isSupported() {
        return s();
      }getItem(e) {
        if (this._myStore) {
          const t = this._myStore.getItem(e);if (t) return JSON.parse(t);
        }return null;
      }setItem(e, t) {
        this._myStore && e && t && this._myStore.setItem(e, JSON.stringify(t));
      }removeItem(e) {
        this._myStore && this._myStore.removeItem(e);
      }clear() {
        this._myStore && this._myStore.clear();
      }key(e) {
        return this._myStore ? this._myStore.key(e) : null;
      }length() {
        return this._myStore ? this._myStore.length : 0;
      }
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var s = n(r(0)),
        o = n(r(2));function n(e) {
      return e && e.__esModule ? e : { default: e };
    }t.default = class {
      constructor() {}static getStorage(e, t) {
        let r = null;return (r = t ? new o.default(e, t) : new s.default(e)) && r.isSupported() ? r : null;
      }
    };
  }, function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var s = r(4),
        o = i(r(0)),
        n = i(r(1));function i(e) {
      return e && e.__esModule ? e : { default: e };
    }t.default = class extends o.default {
      constructor(e, t) {
        super(e), this._ls = n.default.getStorage(e), this._myStore = new s.AugmentedMap(), this.namespace = t, this.isSupported() && this.namespace && !e ? this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON())) : this.isSupported() && this.namespace && e && this.getItem(this.namespace);
      }isSupported() {
        return this._ls && this._ls.isSupported();
      }getItem(e) {
        let t = {};try {
          t = JSON.parse(this._ls.getItem(this.namespace));
        } catch (e) {
          return null;
        }this._myStore.clear(), this._myStore.marshall(t);const r = this._myStore.get(e);if (r) {
          let e;try {
            e = JSON.parse(r);
          } catch (t) {
            e = r;
          }return e;
        }return null;
      }setItem(e, t) {
        this._myStore || (this._myStore = new s.AugmentedMap()), this._myStore.set(e, t), this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON()));
      }removeItem(e) {
        this._myStore.remove(e), this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON()));
      }clear() {
        this._myStore.clear(), this._ls.setItem(this.namespace, JSON.stringify(this._myStore.toJSON()));
      }key(e) {
        return this._myStore.key(e);
      }length() {
        return this._myStore.size();
      }getNamespacedItems() {
        return this._myStore;
      }
    };
  }, function (e, t, r) {
    "use strict";
    var s = i(r(0)),
        o = i(r(1)),
        n = i(r(2));function i(e) {
      return e && e.__esModule ? e : { default: e };
    }e.exports.LocalStorage = s.default, e.exports.LocalStorageFactory = o.default, e.exports.NamespacedLocalStorage = n.default;
  }, function (t, r) {
    t.exports = e;
  }]);
});
//# sourceMappingURL=presentation-storage.js.map

/***/ }),

/***/ "./node_modules/presentation-view/dist/presentation-view.js":
/*!******************************************************************!*\
  !*** ./node_modules/presentation-view/dist/presentation-view.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function (e, t) {
   true ? module.exports = t(__webpack_require__(/*! next-core-utilities */ "./node_modules/next-core-utilities/dist/next-core-utilities.js"), __webpack_require__(/*! next-core-object */ "./node_modules/next-core-object/dist/next-core-object.js"), __webpack_require__(/*! lodash.bind */ "./node_modules/lodash.bind/index.js")) : undefined;
}(undefined, function (e, t, i) {
  return function (e) {
    var t = {};function i(s) {
      if (t[s]) return t[s].exports;var n = t[s] = { i: s, l: !1, exports: {} };return e[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
    }return i.m = e, i.c = t, i.d = function (e, t, s) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s });
    }, i.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, i.t = function (e, t) {
      if (1 & t && (e = i(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var s = Object.create(null);if (i.r(s), Object.defineProperty(s, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var n in e) i.d(s, n, function (t) {
        return e[t];
      }.bind(null, n));return s;
    }, i.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return i.d(t, "a", t), t;
    }, i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, i.p = "/dist/", i(i.s = 1);
  }([function (t, i) {
    t.exports = e;
  }, function (e, t, i) {
    "use strict";
    var s = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(i(2));e.exports.View = s.default;
  }, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var s = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(i(3)),
        n = i(0);t.default = class extends s.default {
      constructor(e) {
        super(e);
      }render() {
        if (this._el && this.template) {
          let e = this._el;(0, n.isString)(this._el) && (e = document.querySelector(this._el)), e && (e.innerHTML = this.template);
        }return this;
      }remove() {
        if (this.undelegateEvents(), this.off(), this.stopListening(), this._el) {
          let e = this._el;(0, n.isString)(this._el) && (e = document.querySelector(this._el)), e && (e.innerHTML = "");
        }return this;
      }
    };
  }, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var s = i(4),
        n = i(0);const r = i(5),
          l = /^(\S+)\s*(.*)$/;t.default = class extends s.AugmentedObject {
      constructor(e) {
        super(e), e && e.name ? this._name = e.name : this._name = "Untitled", e && e.permissions ? this._permissions = e.permissions : this._permissions = { include: [], exclude: [] }, e && e.tagName ? this.tagName = e.tagName : this.tagName = "div", e && e.el ? this._el = e.el : this._el = "", e && e.model ? this.model = e.model : this.model = null, e && e.collection ? this.collection = e.collection : this.collection = null, e && e.id ? this.id = e.id : this.id = 0, e && e.className ? this._style = e.className : this._style = "", e && e.style ? this._style = e.style : this._style = "", e && e.attributes ? this.attributes = e.attributes : this.attributes = {}, this.cid = (0, n.uniqueId)("view"), e && e.noEL || this._ensureElement(), e && e.template ? this.template = e.template : this.template = "", this.initialize(e);
      }get el() {
        return this._el;
      }set el(e) {
        this._el = e;
      }init(e) {}initialize(e) {
        return this.options = e, this.init(e), this;
      }beforeRender() {
        return this;
      }render() {
        return this;
      }afterRender() {
        return this;
      }remove() {
        return this._removeElement(), this.stopListening(), this;
      }_removeElement() {
        let e = this._el;this._el && (0, n.isString)(this._el) && (e = document.querySelector(this._el)), e && (e.innerHTML = "");
      }setElement(e) {
        return this.undelegateEvents(), this._el = e, this.delegateEvents(), this;
      }delegateEvents(e) {
        if (e || (e = (0, n.result)(this, "events")), !e) return this;let t;for (t in this.undelegateEvents(), e) {
          let i = e[t];if ((0, n.isFunction)(i) || (i = this[i]), !i) continue;const s = t.match(l);this.delegate(s[1], s[2], r(i, this));
        }return this;
      }delegate(e, t, i) {
        const s = document.querySelectorAll(t);if (s) {
          const t = Array.from(s);let n = 0;const r = t.length;for (n = 0; n < r; n++) t[n].addEventListener(e, i);
        }return this;
      }undelegateEvents() {
        if (this._el) {
          let e = this._el;if ((0, n.isString)(this._el) && (e = document.querySelector(this._el)), e) {
            const t = e.cloneNode(!0);t && t.parentNode && e.parentNode.replaceChild(t, e);
          }
        }return this;
      }undelegate(e, t, i) {
        if (this._el) {
          let s = this._el;if ((0, n.isString)(this._el) && (s = document.querySelector(this._el)), s) {
            const n = s.querySelectorAll(t);if (n) {
              const t = Array.from(n);let s = 0;const r = t.length;for (s = 0; s < r; s++) t[s].removeEventListener(e, i);
            }
          }
        }return this;
      }_createElement(e) {
        return document.createElement(e);
      }_ensureElement() {
        if (this._el) this.setElement(this._el);else {
          const e = (0, n.extend)({}, (0, n.result)(this, "attributes"));this.id && (e.id = this.id), this._style && (e.class = this._style);const t = this._createElement(this.tagName),
                i = document.querySelector("body");i && i.appendChild(t), t && this.setElement(t), this._setAttributes(e);
        }
      }_setAttributes(e) {
        let t;for (t in e) if (this._el) {
          let i = this._el;(0, n.isString)(this._el) && (i = document.querySelector(this._el)), i && i.setAttribute(t, e[t]);
        }
      }set name(e) {
        this._name = e;
      }get name() {
        return this._name;
      }addPermission(e, t) {
        t || (t = !1), null === e || Array.isArray(e) || (t ? this._permissions.exclude : this._permissions.include).push(e);
      }removePermission(e, t) {
        if (t || (t = !1), null !== e && !Array.isArray(e)) {
          const i = t ? this._permissions.exclude : this._permissions.include;i.splice(i.indexOf(e), 1);
        }
      }set permissions(e) {
        this._permissions = e;
      }get permissions() {
        return this._permissions;
      }clearPermissions() {
        this._permissions = { include: [], exclude: [] };
      }matchesPermission(e, t) {
        return t || (t = !1), -1 !== (t ? this._permissions.exclude : this._permissions.include).indexOf(e);
      }canDisplay() {
        return !0;
      }
    };
  }, function (e, i) {
    e.exports = t;
  }, function (e, t) {
    e.exports = i;
  }]);
});
//# sourceMappingURL=presentation-view.js.map

/***/ }),

/***/ "./node_modules/presentation-widget/dist/presentation-widget.js":
/*!**********************************************************************!*\
  !*** ./node_modules/presentation-widget/dist/presentation-widget.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


!function (e, t) {
   true ? module.exports = t(__webpack_require__(/*! next-core-utilities */ "./node_modules/next-core-utilities/dist/next-core-utilities.js")) : undefined;
}(undefined, function (e) {
  return function (e) {
    var t = {};function n(r) {
      if (t[r]) return t[r].exports;var i = t[r] = { i: r, l: !1, exports: {} };return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var r = Object.create(null);if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function (t) {
        return e[t];
      }.bind(null, i));return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "/dist/", n(n.s = 0);
  }([function (e, t, n) {
    "use strict";
    var r = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(n(1));e.exports.Widget = r.default;
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r = n(2);t.default = class {
      constructor() {}static List(e, t, n, r) {
        let i,
            u,
            o,
            a = n ? document.createElement("ol") : document.createElement("ul"),
            l = 0;if (e && a.setAttribute("id", e), r && e && a.setAttribute("data-" + r, e), t && Array.isArray(t)) for (i = t.length, l = 0; l < i; l++) (u = document.createElement("li")).setAttribute("data-index", l), o = document.createTextNode(String(t[l])), u.appendChild(o), a.appendChild(u);return a;
      }static DescriptionList(e, t, n) {
        let i,
            u,
            o,
            a,
            l,
            c,
            d = document.createElement("dl"),
            s = 0;if (e && d.setAttribute("id", e), n && e && d.setAttribute("data-" + n, e), t && (0, r.isObject)(t)) for (i = (l = Object.keys(t)).length, s = 0; s < i; s++) o = document.createElement("dt"), a = document.createTextNode(String(l[s])), o.appendChild(a), d.appendChild(o), c = t[l[s]], u = document.createElement("dd"), a = document.createTextNode(String(c)), u.appendChild(a), d.appendChild(u);return d;
      }static DataList(e, t, n) {
        let r,
            i,
            u = document.createElement("datalist"),
            o = 0;if (e && u.setAttribute("id", e), n && e && u.setAttribute("data-" + n, e), t && Array.isArray(t)) for (r = t.length, o = 0; o < r; o++) (i = document.createElement("option")).value = String(t[o]), u.appendChild(i);return u;
      }static Input(e, t, n, r, i, u) {
        if (!e) return null;let o,
            a = n || "",
            l = e,
            c = e.type;if ("object" === c) {
          if (Array.isArray(a)) {
            let e,
                t,
                n = 0,
                r = a.length;for (o = document.createElement("select"), n = 0; n < r; n++) (e = document.createElement("option")).setAttribute("value", a[n]), t = document.createTextNode(a[n]), e.appendChild(t), o.appendChild(e);
          } else (o = document.createElement("textarea")).value = JSON.stringify(a);
        } else if ("boolean" === c) (o = document.createElement("input")).setAttribute("type", "checkbox"), !0 === a && o.setAttribute("checked", "checked"), o.value = a;else if ("number" === c || "integer" === c) (o = document.createElement("input")).setAttribute("type", "number"), o.value = a;else if ("string" === c && l.enum) {
          o = document.createElement("select");let e,
              t,
              n = 0,
              r = l.enum.length;for (n = 0; n < r; n++) (e = document.createElement("option")).setAttribute("value", l.enum[n]), t = document.createTextNode(l.enum[n]), a === l.enum[n] && e.setAttribute("selected", "selected"), e.appendChild(t), o.appendChild(e);
        } else "string" === c && "email" === l.format ? ((o = document.createElement("input")).setAttribute("type", "email"), o.value = a) : "string" === c && "uri" === l.format ? ((o = document.createElement("input")).setAttribute("type", "url"), o.value = a) : "string" === c && "date-time" === l.format ? ((o = document.createElement("input")).setAttribute("type", "datetime"), o.value = a) : ((o = document.createElement("input")).setAttribute("type", "text"), o.value = a);return "string" === c && l.pattern && o.setAttribute("pattern", l.pattern), l.minimum && o.setAttribute("min", l.minimum), l.maximum && o.setAttribute("max", l.maximum), "string" === c && l.minlength && o.setAttribute("minlength", l.minlength), "string" === c && l.maxlength && o.setAttribute("maxlength", l.maxlength), i && o.setAttribute("required", "true"), t && o.setAttribute("name", t), r && o.setAttribute("id", r), u && t && o.setAttribute("data-" + u, t), o;
      }
    };
  }, function (t, n) {
    t.exports = e;
  }]);
});
//# sourceMappingURL=presentation-widget.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function () {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function () {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "./src/drawer.js":
/*!***********************!*\
  !*** ./src/drawer.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _presentationDecorator = __webpack_require__(/*! presentation-decorator */ "./node_modules/presentation-decorator/dist/presentation-decorator.js");

var _presentationDom = __webpack_require__(/*! presentation-dom */ "./node_modules/presentation-dom/dist/presentation-dom.js");

var _presentationDom2 = _interopRequireDefault(_presentationDom);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const createCard = (name, drawer, first, second, dataId, firstTitle, secondTitle, innerDrawer, listItems) => {
  let list = ``;
  for (let i in listItems) {
    list = list + `<li>${listItems[i]}</li>`;
  }
  return `<ul>
    <li class="${drawer}" data-id="${dataId}" data-${name}="${drawer}" data-click="hide_ingredients">
      <span class="${first}">${secondTitle}</span>
      <span class="${second}" data-${name}="${second}" data-click="click_recipe">${firstTitle}</span>
      <ul class="${innerDrawer}">
        ${list}
      </ul>
    </li>
  </ul>`;
};

class Drawer extends _presentationDecorator.DirectiveView {

  constructor(options) {

    if (!options) {
      options = {};
    }

    if (!options.name) {
      options.name = "drawer";
    }

    if (!options.style) {
      options.style = "drawer";
    } else {
      options.style = `drawer ${options.style}`;
    }

    super(options);

    if (options && options.body) {
      this._body = options.body;
    } else {
      this._body = "";
    }

    if (!options.drawer) {
      this._drawer = "";
    } else {
      this._drawer = options.drawer;
    }

    if (!options.first) {
      this._first = "";
    } else {
      this._first = options.first;
    }

    if (!options.second) {
      this._second = "";
    } else {
      this._second = options.second;
    }

    if (!options.dataId) {
      this._dataId = "";
    } else {
      this._dataId = options.dataId;
    }

    if (!options.firstTitle) {
      this._firstTitle = "";
    } else {
      this._firstTitle = options.firstTitle;
    }

    if (!options.secondTitle) {
      this._secondTitle = "";
    } else {
      this._secondTitle = options.secondTitle;
    }

    if (!options.innerDrawer) {
      this._innerDrawer = "";
    } else {
      this._innerDrawer = options.innerDrawer;
    }

    if (!options.listItems) {
      this._listItems = "";
    } else {
      this._listItems = options.listItems;
    }

    if (!options.titleLink) {
      this._titleLink = "";
    } else {
      this._titleLink = options.titleLink;
    }

    if (!options.ingredientLink) {
      this._ingredientLink = "";
    } else {
      this._ingredientLink = options.ingredientLink;
    }
  }

  _template() {
    return createCard(this.name, this._drawer, this._first, this._second, this._dataId, this._firstTitle, this._secondTitle, this._innerDrawer, this._listItems);
  }

  hide_ingredients(e) {
    const ingredients = e.target.querySelector(".ingredients");
    if (ingredients) {
      ingredients.classList.toggle("visible");
    }
  }

  click_recipe(e) {
    const target = e.target.innerText.replace(/ /gi, "-");
    const recipe = `${target}-${e.target.parentNode.dataset.id}`;
    window.open(`${this._titleLink}${recipe}`);
  }

  click_ingredient(e) {
    const ingredient = e.target.childNodes[e.target.childNodes.length - 1].textContent;
    window.open(`${this._ingredientLink}${ingredient}`);
  }

  render() {
    this.injectTemplate(this._template());
    return super.render();
  }

  remove() {
    this.removeTemplate(this.el, true);
    return super.remove();
  }
};

exports.default = Drawer;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _drawer = __webpack_require__(/*! ./drawer.js */ "./src/drawer.js");

var _drawer2 = _interopRequireDefault(_drawer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const options = {
  "firstTitle": "Broccoli Frittata",
  "dataId": "356872",
  "secondTitle": "230",
  "titleLink": "https://www.yummly.com/recipe/",
  "ingredientLink": "https://www.yummly.com/recipes?allowedIngredient=",
  "listItems": [`<span class="amount">3 cups</span>broccoli florets`, `<span class="amount">1 tbsp</span>butter`, `<span class="amount">1 tbsp</span>olive oil`, `<span class="amount">1 clove</span>minced garlic`, `<span class="amount">1</span>chopped onion`, `<span class="amount">1/2 tsp</span>chopped basil`, `<span class="amount">1/2 tsp</span>chopped parsley`, `<span class="amount">8</span>eggs`, `<span class="amount">2</span>egg whites`, `<span class="amount">1/2 cup</span>parmigiano reggiano cheese`],
  "drawer": "recipe",
  "first": "calories",
  "second": "name",
  "innerDrawer": "ingredients"
};

const view = new _drawer2.default(options);
view.render();

/***/ })

/******/ });
});
//# sourceMappingURL=presentation-drawer.js.map