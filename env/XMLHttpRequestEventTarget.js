// XMLHttpRequestEventTarget对象
XMLHttpRequestEventTarget = function XMLHttpRequestEventTarget(){return eggvm.toolsFunc.throwError("TypeError", "Illegal constructor")}
eggvm.toolsFunc.safeProto(XMLHttpRequestEventTarget, "XMLHttpRequestEventTarget");
Object.setPrototypeOf(XMLHttpRequestEventTarget.prototype, EventTarget.prototype);
eggvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onloadstart", {configurable:true, enumerable:true, get:function (){return eggvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onloadstart_get", arguments)}, set:function (){return eggvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onloadstart_set", arguments)}});
eggvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onprogress", {configurable:true, enumerable:true, get:function (){return eggvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onprogress_get", arguments)}, set:function (){return eggvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onprogress_set", arguments)}});
eggvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onabort", {configurable:true, enumerable:true, get:function (){return eggvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onabort_get", arguments)}, set:function (){return eggvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onabort_set", arguments)}});
eggvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onerror", {configurable:true, enumerable:true, get:function (){return eggvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onerror_get", arguments)}, set:function (){return eggvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onerror_set", arguments)}});
eggvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onload", {configurable:true, enumerable:true, get:function (){return eggvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onload_get", arguments)}, set:function (){return eggvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onload_set", arguments)}});
eggvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "ontimeout", {configurable:true, enumerable:true, get:function (){return eggvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "ontimeout_get", arguments)}, set:function (){return eggvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "ontimeout_set", arguments)}});
eggvm.toolsFunc.defineProperty(XMLHttpRequestEventTarget.prototype, "onloadend", {configurable:true, enumerable:true, get:function (){return eggvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onloadend_get", arguments)}, set:function (){return eggvm.toolsFunc.dispatch(this, XMLHttpRequestEventTarget.prototype, "XMLHttpRequestEventTarget", "onloadend_set", arguments)}});