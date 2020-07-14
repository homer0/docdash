const path = require('path');

const nativeTypesComment = `
/**
 * @external Infinity
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Infinity
 */

/**
 * @external NaN
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/NaN
 */

/**
 * @external undefined
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined
 */

/**
 * @external null
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null
 */

// Fundamental objects
/**
 * @external Object
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
 */

/**
 * @external function
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function
 */

/**
 * @external boolean
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
 */

/**
 * @external Symbol
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Symbol
 */

/**
 * @external Error
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error
 */

/**
 * @external EvalError
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/EvalError
 */

/**
 * @external InternalError
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/InternalError
 */

/**
 * @external RangeError
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RangeError
 */

/**
 * @external ReferenceError
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
 */

/**
 * @external SyntaxError
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError
 */

/**
 * @external TypeError
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError
 */

/**
 * @external URIError
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/URIError
 */

// Numbers and dates
/**
 * @external number
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
 */

/**
 * @external Date
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

// Text processing
/**
 * @external string
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
 */

/**
 * @external RegExp
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 */

// Indexed collections
/**
 * @external Array
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

/**
 * @external Int8Array
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int8Array
 */
/**
 * @external Uint8Array
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array
 */

/**
 * @external Uint8ClampedArray
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
 */

/**
 * @external Int16Array
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int16Array
 */

/**
 * @external Uint16Array
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array
 */

/**
 * @external Int32Array
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Int32Array
 */

/**
 * @external Uint32Array
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array
 */

/**
 * @external Float32Array
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float32Array
 */

/**
 * @external Float64Array
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Float64Array
 */

// Keyed collections
/**
 * @external Map
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map
 */

/**
 * @external Set
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set
 */

/**
 * @external WeakMap
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
 */

/**
 * @external WeakSet
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
 */

// Structured data
/**
 * @external ArrayBuffer
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
 */

/**
 * @external DataView
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/DataView
 */

/**
 * @external JSON
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSON
 */

// Control abstraction objects
/**
 * @external Promise
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */

/**
 * @external Generator
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator
 */

/**
 * @external GeneratorFunction
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction
 */

// Reflection
/**
 * @external Reflect
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Reflect
 */

/**
 * @external Proxy
 * @see https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 */

// Browser
/**
 * @external Window
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window
 */

/**
 * @external Document
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document
 */

/**
 * @external DocumentFragment
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
 */

/**
 * @external Element
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element
 */

/**
 * @external Event
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Event
 */

/**
 * @external Node
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Node
 */

/**
 * @external NodeList
 * @see https://developer.mozilla.org/en-US/docs/Web/API/NodeList
 */

/**
 * @external XMLHttpRequest
 * @see https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest
 */

/**
 * @external Response
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Response
 */

/**
 * @external Request
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Request
 */


/**
 * @external AudioContext
 * @see https://developer.mozilla.org/en/docs/Web/API/AudioContext
 */

/**
 * @external CanvasRenderingContext2D
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
 */
`;

let typedefFile = null;
let added = false;
module.exports.handlers = {
  parseBegin(event) {
    const typedef = event.sourcefiles.find((file) => (
      path
      .basename(file)
      .match(/^typedef\.[jt]sx?$/)
    ));

    typedefFile = typedef || null;
    added = false;
  },
  beforeParse(event) {
    if (!added && (!typedefFile || event.filename === typedefFile)) {
      added = true;
      event.source = `${event.source}\n${nativeTypesComment}`;
    }
  }
};
