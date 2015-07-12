global = this;
(function (modules) {

    // Bundle allows the run-time to extract already-loaded modules from the
    // boot bundle.
    var bundle = {};
    var main;

    // Unpack module tuples into module objects.
    for (var i = 0; i < modules.length; i++) {
        var module = modules[i];
        module = modules[i] = new Module(
            module[0],
            module[1],
            module[2],
            module[3],
            module[4]
        );
        bundle[module.filename] = module;
    }

    function Module(id, dirname, basename, dependencies, factory) {
        this.id = id;
        this.dirname = dirname;
        this.filename = dirname + "/" + basename;
        // Dependency map and factory are used to instantiate bundled modules.
        this.dependencies = dependencies;
        this.factory = factory;
    }

    Module.prototype._require = function () {
        var module = this;
        if (module.exports === void 0) {
            module.exports = {};
            var require = function (id) {
                var index = module.dependencies[id];
                var dependency = modules[index];
                if (!dependency)
                    throw new Error("Bundle is missing a dependency: " + id);
                return dependency._require();
            };
            require.main = main;
            module.exports = module.factory(
                require,
                module.exports,
                module,
                module.filename,
                module.dirname
            ) || module.exports;
        }
        return module.exports;
    };

    // Communicate the bundle to all bundled modules
    Module.prototype.modules = bundle;

    return function require(filename) {
        main = bundle[filename];
        main._require();
    }
})([["about.yaml","codi.sh","about.yaml",{},function (require, exports, module, __filename, __dirname){

// codi.sh/about.yaml
// ------------------

module.exports = {"head":{"see":[]},"body":"<p>Hello,</p>\n<p>This application is an index of a cohort of packages I maintain for JavaScript.\nThere is an overlapping and branching narrative to these projects which I hope\nis evident.</p>\n<p>All of these packages work for both Node.js and for browsers.\nThey are insular but coherent.\nThey are more useful together than alone.</p>\n<p>Kris Kowal</p>\n"};
}],["collections.yaml","codi.sh","collections.yaml",{"./operators.yaml":10},function (require, exports, module, __filename, __dirname){

// codi.sh/collections.yaml
// ------------------------

module.exports = {"head":{"see":[{"label":"Polymorphic Operators","href":"./operators.yaml"}]},"body":"<h1 id=\"collections\">Collections</h1>\n<!--\nThere is a cafeteria of operators that collections should pick from to form\ntheir interface.\nThe contract is intrinsic to the operator, not the collection.\nA collection should implement every applicable operator.\nMany of these operators have generic implementations that can be implemented in\nterms of a small kernel from the whole body of operators.\n\nCollections should also be observable.\nEach collection supports the applicable change observer functions for\nproperty changes (including length), splice-like changes (range changes), and\nkey value changes (map changes).\n-->\n<p>Array was only the beginning.\nThe collections library provides lists, sets, and maps of various kinds.\nThese are available in npm with <code>npm install collections</code> and useful both in\nbrowsers and Node.js.</p>\n<p>See <a href=\"http://www.collectionsjs.com/\">collectionsjs.com</a> for thorough\ndocumentation of <a href=\"https://github.com/montagejs/collections\">Collections, Version 1</a>.</p>\n<p>Version 1 is at the heart of <a href=\"http://montagestudio.com/montagejs/\">MontageJS</a>, providing extensions to the Array\nand Object prototypes, as well as change listeners that are the foundation of\nMontage MVC bindings with <a href=\"https://github.com/montagejs/frb/\">FRB</a>.</p>\n<p><a href=\"https://github.com/kriskowal/collections\">Collections, Version 2</a> removes all of these shims in favor of polymorphic operators, each\npackaged separately, including <a href=\"https://github.com/kriskowal/pop-swap/\">pop-swap</a> for high performance array\nchanges, and <a href=\"https://github.com/kriskowal/pop-observe/\">pop-observe</a> for change observers on most collections.</p>\n"};
}],["columns.html","codi.sh","columns.html",{"./columns":3,"gutentag/repeat.html":18},function (require, exports, module, __filename, __dirname){

// codi.sh/columns.html
// --------------------

"use strict";
var $SUPER = require("./columns");
var $REPEAT = require("gutentag/repeat.html");
var $THIS = function CodishColumns(body, caller) {
    $SUPER.apply(this, arguments);
    var document = body.ownerDocument;
    var scope = this.scope = caller.root.nestComponents();
    scope.caller = caller;
    scope.this = this;
    var parent = body, parents = [], node, component, callee, argument;
    node = document.createBody();
    parent.appendChild(node);
    parents[parents.length] = parent; parent = node;
    // REPEAT
        node = {tagName: "repeat"};
        node.component = $THIS$0;
        callee = scope.nest();
        callee.argument = node;
        callee.id = "columns";
        component = new $REPEAT(parent, callee);
    node = parent; parent = parents[parents.length - 1]; parents.length--;
    scope.set("columns", component);
    if (component.setAttribute) {
        component.setAttribute("id", "columns_9zxj48");
    }
    if (scope.componentsFor["columns"]) {
       scope.componentsFor["columns"].setAttribute("for", "columns_9zxj48")
    }
    this.scope.set("this", this);
};
$THIS.prototype = Object.create($SUPER.prototype);
$THIS.prototype.constructor = $THIS;
$THIS.prototype.exports = {"columns:iteration":"iteration"};
module.exports = $THIS;
var $THIS$0 = function CodishColumns$0(body, caller) {
    var document = body.ownerDocument;
    var scope = this.scope = caller;
    var parent = body, parents = [], node, component, callee, argument;
    node = document.createElement("DIV");
    parent.appendChild(node);
    component = node.actualNode;
    scope.set("container", component);
    if (component.setAttribute) {
        component.setAttribute("id", "container_qpee76");
    }
    if (scope.componentsFor["container"]) {
       scope.componentsFor["container"].setAttribute("for", "container_qpee76")
    }
    if (component.setAttribute) {
    component.setAttribute("class", "column");
    }
    parents[parents.length] = parent; parent = node;
    // DIV
        node = document.createBody();
        parent.appendChild(node);
        parents[parents.length] = parent; parent = node;
        // COLUMN
            node = {tagName: "column"};
            node.component = $THIS$0$1;
            callee = scope.caller.nest();
            if (callee.argument) {
                callee.id = "column";
                component = new callee.argument.component(parent, callee);
            } else {
                component = new node.component(parent, scope);
            }
        node = parent; parent = parents[parents.length - 1]; parents.length--;
        scope.set("column", component);
        if (component.setAttribute) {
            component.setAttribute("id", "column_n0hwyr");
        }
        if (scope.componentsFor["column"]) {
           scope.componentsFor["column"].setAttribute("for", "column_n0hwyr")
        }
    node = parent; parent = parents[parents.length - 1]; parents.length--;
};
var $THIS$0$1 = function CodishColumns$0$1(body, caller) {
    var document = body.ownerDocument;
    var scope = this.scope = caller;
};

}],["columns.js","codi.sh","columns.js",{},function (require, exports, module, __filename, __dirname){

// codi.sh/columns.js
// ------------------

'use strict';

module.exports = Columns;

function Columns() {
    this.columns = null;
}

Columns.prototype.add = function (component, id, scope) {
    if (id === "this") {
        this.columns = scope.components.columns;
        this.columns.value = [];
    } else if (id === "columns:iteration") {
        scope.components.container.style.left = component.index * 600 + 'px';
    }
};

Columns.prototype.navigate = function (document, index) {
    index = index || 0;
    var pos = this.columns.value.indexOf(document);
    if (pos < 0) {
        this.columns.value.splice(index + 1, this.columns.value.length - index - 1, document);
    } else {
        this.columns.value.splice(pos + 1, this.columns.value.length);
    }
    window.scrollTo(600 * index, 0);
};

}],["gutentag.yaml","codi.sh","gutentag.yaml",{},function (require, exports, module, __filename, __dirname){

// codi.sh/gutentag.yaml
// ---------------------

module.exports = {"head":{"see":[]},"body":"<h1 id=\"guten-tag-welt-\">Guten Tag, Welt!</h1>\n"};
}],["index.js","codi.sh","index.js",{"gutentag/document":15,"gutentag/scope":22,"./main.html":7,"./index.yaml":6},function (require, exports, module, __filename, __dirname){

// codi.sh/index.js
// ----------------

"use strict";
var Document = require("gutentag/document");
var Scope = require("gutentag/scope");
var Main = require("./main.html");
var document = new Document(window.document.body);
var scope = new Scope();
scope.main = new Main(document.documentElement, scope);
scope.main.value = require("./index.yaml");

}],["index.yaml","codi.sh","index.yaml",{"./q.yaml":13,"./collections.yaml":1,"./operators.yaml":10,"./observers.yaml":9,"./system.yaml":14,"./gutentag.yaml":4,"./about.yaml":0},function (require, exports, module, __filename, __dirname){

// codi.sh/index.yaml
// ------------------

module.exports = {"head":{"see":[{"label":"Q Promises","href":"./q.yaml"},{"label":"Collections","href":"./collections.yaml"},{"label":"Operators","href":"./operators.yaml"},{"label":"Observers","href":"./observers.yaml"},{"label":"Module System","href":"./system.yaml"},{"label":"Guten Tag, HTML Modules!","href":"./gutentag.yaml"},{"label":"About This","href":"./about.yaml"}]},"body":"<p>Choose your own adventure!</p>\n"};
}],["main.html","codi.sh","main.html",{"./main":8,"./columns.html":2,"./page.html":11},function (require, exports, module, __filename, __dirname){

// codi.sh/main.html
// -----------------

"use strict";
var $SUPER = require("./main");
var $COLUMNS = require("./columns.html");
var $PAGE = require("./page.html");
var $THIS = function CodishMain(body, caller) {
    $SUPER.apply(this, arguments);
    var document = body.ownerDocument;
    var scope = this.scope = caller.root.nestComponents();
    scope.caller = caller;
    scope.this = this;
    var parent = body, parents = [], node, component, callee, argument;
    node = document.createBody();
    parent.appendChild(node);
    parents[parents.length] = parent; parent = node;
    // COLUMNS
        node = {tagName: "columns"};
        node.component = $THIS$0;
        callee = scope.nest();
        callee.argument = node;
        callee.id = "pages";
        component = new $COLUMNS(parent, callee);
    node = parent; parent = parents[parents.length - 1]; parents.length--;
    scope.set("pages", component);
    if (component.setAttribute) {
        component.setAttribute("id", "pages_k4sp3e");
    }
    if (scope.componentsFor["pages"]) {
       scope.componentsFor["pages"].setAttribute("for", "pages_k4sp3e")
    }
    this.scope.set("this", this);
};
$THIS.prototype = Object.create($SUPER.prototype);
$THIS.prototype.constructor = $THIS;
$THIS.prototype.exports = {};
module.exports = $THIS;
var $THIS$0 = function CodishMain$0(body, caller) {
    var document = body.ownerDocument;
    var scope = this.scope = caller;
    var parent = body, parents = [], node, component, callee, argument;
    node = document.createBody();
    parent.appendChild(node);
    parents[parents.length] = parent; parent = node;
    // PAGE
        node = {tagName: "page"};
        node.component = $THIS$0$1;
        callee = scope.nest();
        callee.argument = node;
        callee.id = "page";
        component = new $PAGE(parent, callee);
    node = parent; parent = parents[parents.length - 1]; parents.length--;
    scope.set("page", component);
    if (component.setAttribute) {
        component.setAttribute("id", "page_6xpvhi");
    }
    if (scope.componentsFor["page"]) {
       scope.componentsFor["page"].setAttribute("for", "page_6xpvhi")
    }
};
var $THIS$0$1 = function CodishMain$0$1(body, caller) {
    var document = body.ownerDocument;
    var scope = this.scope = caller;
};

}],["main.js","codi.sh","main.js",{},function (require, exports, module, __filename, __dirname){

// codi.sh/main.js
// ---------------

'use strict';

module.exports = Main;

function Main() {
}

Object.defineProperty(Main.prototype, "value", {
    get: function get() {
    },
    set: function set(document) {
        this.pages.navigate(document, 0);
    }
});

Main.prototype.add = function (component, id, scope) {
    if (id === "this") {
        this.pages = scope.components.pages;
    } else if (id === "pages:iteration") {
        scope.components.page.value = component.value;
        scope.components.page.index = component.index;
        scope.components.page.navigator = scope.components.pages;
    }
};

}],["observers.yaml","codi.sh","observers.yaml",{"./collections.yaml":1,"./operators.yaml":10},function (require, exports, module, __filename, __dirname){

// codi.sh/observers.yaml
// ----------------------

module.exports = {"head":{"see":[{"label":"Collections","href":"./collections.yaml"},{"label":"Polymorphic Operators","href":"./operators.yaml"}]},"body":"<h1 id=\"observers\">Observers</h1>\n<p>The <a href=\"https://github.com/kriskowal/pop-observe\">observers</a> package makes it possible to observe changes to arrays and\nother collections.\nChanges come in three kinds, all of which are meaningful for arrays, some of\nwhich are applicable to other collections and can be implemented by others.</p>\n<ul>\n<li>property changes, including the length of an array</li>\n<li>range changes, from swapping some values at an index for some other values</li>\n<li>map changes, from changing the value at a key or index</li>\n</ul>\n"};
}],["operators.yaml","codi.sh","operators.yaml",{"./observers.yaml":9},function (require, exports, module, __filename, __dirname){

// codi.sh/operators.yaml
// ----------------------

module.exports = {"head":{"see":[{"label":"Observers","href":"./observers.yaml"}]},"body":"<h1 id=\"operators-and-polymorphism\">Operators and Polymorphism</h1>\n<p>Within a corhort of modules, any pair of functions with the same symbol or name\nshould fulfill a common contract, regardless of what type they operate on,\nwhether they are free standing functions that accept objects, or objects that\nimplement methods.</p>\n<p>New operators should be able to extend the behavior of older types, and new\ntypes should be able to extend older operators.</p>\n<p>A well-planned system of objects is beautiful: a system where every meaningful\nmethod for an object has been anticipated in the design.\nInevitably, another layer of architecture introduces a new concept and with it\nthe temptation to monkey-patch, dunk-punch, or otherwise cover-up the omission.\nBut reaching backward in time, up through the layers of architecture doesn&#39;t\nalways compose well, when different levels introduce concepts of the same name\nbut distinct behavior.</p>\n<p>A polymorphic operator is a function that accepts as its first argument an\nobject and varies its behavior depending on its type.\nSuch an operator has the benefit of covering for the types from higher layers of\narchitecture, but defers to the eponymous method name of types yet to be\ndefined.\nSuch functions make it possible for a single interface to extend earlier layers\nof architecture and be extended by later layers of architecture.</p>\n<ul>\n<li><a href=\"https://github.com/kriskowal/pop-clear\">pop-clear</a></li>\n<li><a href=\"https://github.com/kriskowal/pop-zip\">pop-zip</a></li>\n<li><a href=\"https://github.com/kriskowal/pop-has\">pop-has</a></li>\n<li><a href=\"https://github.com/kriskowal/pop-iterate\">pop-iterate</a></li>\n<li><a href=\"https://github.com/kriskowal/pop-clone\">pop-clone</a></li>\n<li><a href=\"https://github.com/kriskowal/pop-compare\">pop-compare</a></li>\n<li><a href=\"https://github.com/kriskowal/pop-swap\">pop-swap</a></li>\n<li><a href=\"https://github.com/kriskowal/pop-hash\">pop-hash</a></li>\n<li><a href=\"https://github.com/kriskowal/pop-observe\">pop-observe</a></li>\n</ul>\n"};
}],["page.html","codi.sh","page.html",{"./page":12,"gutentag/text.html":23,"gutentag/html.html":16,"gutentag/repeat.html":18,"gutentag/reveal.html":20},function (require, exports, module, __filename, __dirname){

// codi.sh/page.html
// -----------------

"use strict";
var $SUPER = require("./page");
var $TEXT = require("gutentag/text.html");
var $CONTENT = require("gutentag/html.html");
var $REPEAT = require("gutentag/repeat.html");
var $REVEAL = require("gutentag/reveal.html");
var $THIS = function CodishPage(body, caller) {
    $SUPER.apply(this, arguments);
    var document = body.ownerDocument;
    var scope = this.scope = caller.root.nestComponents();
    scope.caller = caller;
    scope.this = this;
    var parent = body, parents = [], node, component, callee, argument;
    node = document.createBody();
    parent.appendChild(node);
    parents[parents.length] = parent; parent = node;
    // CONTENT
        node = {tagName: "content"};
        node.innerHTML = "";
        callee = scope.nest();
        callee.argument = node;
        callee.id = "body";
        component = new $CONTENT(parent, callee);
    node = parent; parent = parents[parents.length - 1]; parents.length--;
    scope.set("body", component);
    if (component.setAttribute) {
        component.setAttribute("id", "body_s5kv9j");
    }
    if (scope.componentsFor["body"]) {
       scope.componentsFor["body"].setAttribute("for", "body_s5kv9j")
    }
    node = document.createElement("UL");
    parent.appendChild(node);
    component = node.actualNode;
    if (component.setAttribute) {
    component.setAttribute("class", "links");
    }
    parents[parents.length] = parent; parent = node;
    // UL
        node = document.createBody();
        parent.appendChild(node);
        parents[parents.length] = parent; parent = node;
        // REPEAT
            node = {tagName: "repeat"};
            node.component = $THIS$0;
            callee = scope.nest();
            callee.argument = node;
            callee.id = "see";
            component = new $REPEAT(parent, callee);
        node = parent; parent = parents[parents.length - 1]; parents.length--;
        scope.set("see", component);
        if (component.setAttribute) {
            component.setAttribute("id", "see_ang46q");
        }
        if (scope.componentsFor["see"]) {
           scope.componentsFor["see"].setAttribute("for", "see_ang46q")
        }
    node = parent; parent = parents[parents.length - 1]; parents.length--;
    this.scope.set("this", this);
};
$THIS.prototype = Object.create($SUPER.prototype);
$THIS.prototype.constructor = $THIS;
$THIS.prototype.exports = {};
module.exports = $THIS;
var $THIS$0 = function CodishPage$0(body, caller) {
    var document = body.ownerDocument;
    var scope = this.scope = caller;
    var parent = body, parents = [], node, component, callee, argument;
    node = document.createElement("LI");
    parent.appendChild(node);
    component = node.actualNode;
    if (component.setAttribute) {
    component.setAttribute("class", "link-li");
    }
    parents[parents.length] = parent; parent = node;
    // LI
        node = document.createElement("A");
        parent.appendChild(node);
        component = node.actualNode;
        scope.set("link", component);
        if (component.setAttribute) {
            component.setAttribute("id", "link_6ankts");
        }
        if (scope.componentsFor["link"]) {
           scope.componentsFor["link"].setAttribute("for", "link_6ankts")
        }
        if (component.setAttribute) {
        component.setAttribute("class", "link");
        }
        parents[parents.length] = parent; parent = node;
        // A
            node = document.createBody();
            parent.appendChild(node);
            parents[parents.length] = parent; parent = node;
            // TEXT
                node = {tagName: "text"};
                node.innerText = "";
                callee = scope.nest();
                callee.argument = node;
                callee.id = "label";
                component = new $TEXT(parent, callee);
            node = parent; parent = parents[parents.length - 1]; parents.length--;
            scope.set("label", component);
            if (component.setAttribute) {
                component.setAttribute("id", "label_8j80a7");
            }
            if (scope.componentsFor["label"]) {
               scope.componentsFor["label"].setAttribute("for", "label_8j80a7")
            }
        node = parent; parent = parents[parents.length - 1]; parents.length--;
    node = parent; parent = parents[parents.length - 1]; parents.length--;
};

}],["page.js","codi.sh","page.js",{"system/identifier":33},function (require, exports, module, __filename, __dirname){

// codi.sh/page.js
// ---------------

'use strict';

var Identifier = require("system/identifier");

module.exports = Page;

function Page() {
    this.navigator = null;
    this.index = null;
}

Object.defineProperty(Page.prototype, "value", {
    get: function get() {
    },
    set: function set(document) {
         this.see.value = document.head.see || [];
         this.body.value = document.body;
    }
});

Page.prototype.add = function (component, id, scope) {
    if (id === "this") {
        this.see = scope.components.see;
        this.body = scope.components.body;
    } else if (id === "see:iteration") {
        if (component.value.href) {
            if (module.system) {
                scope.components.link.value = module.system.systems["codi.sh"].require(component.value.href);
            } else {
                var id = Identifier.resolve(component.value.href, "codi.sh/");
                scope.components.link.value = module.modules[id]._require();
            }
            scope.components.link.setAttribute("href", "#");
        }
        scope.components.link.addEventListener("click", this);
        scope.components.label.value = component.value.label;
    }
};

Page.prototype.handleEvent = function handleEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    if (event.target.value) {
        this.navigator.navigate(event.target.value, this.index);
    }
};

}],["q.yaml","codi.sh","q.yaml",{},function (require, exports, module, __filename, __dirname){

// codi.sh/q.yaml
// --------------

module.exports = {"head":{"see":[]},"body":"<h1 id=\"asynchronous-promises-with-q\">Asynchronous Promises with Q</h1>\n<p>If a function cannot return a value or throw an exception without\nblocking, it can return a promise instead.\nA promise is an object that represents the return value or the thrown exception\nthat the function may eventually provide.</p>\n<p><a href=\"https://github.com/kriskowal/q\">The Q Promise Library</a> is the ground-breaking\npromise library for JavaScript, based on the work of <a href=\"https://en.wikipedia.org/wiki/Mark_S._Miller\">Mark Miller</a> and <a href=\"http://waterken.sourceforge.net/web_send/\">Tyler\nClose</a> and built with substantial contributions from <a href=\"https://blog.domenic.me/\">Domenic Denicola</a>.</p>\n<p>Often imitated, Q is still a solitary example of a promise library that\nsupports queueing messages to remote objects, using <a href=\"https://github.com/kriskowal/q-connection\">Q-Connection</a>.</p>\n<p>Version 1 is a stand-alone library that can be used without modification in\nNode.js and browsers.\n<a href=\"https://github.com/kriskowal/q/tree/v2\">Version 2</a> is a work in progress that trims down the interface, breaks it\ninto smaller modules, and adds support for estimated time to completion.\nAt the heart of the new Q is the <a href=\"https://github.com/kriskowal/asap\">ASAP</a> task library.</p>\n<p>Notably absent is support for <a href=\"https://github.com/kriskowal/gtor/blob/master/cancelation.md#canceling-asynchronous-tasks\">cancellation</a>, which in the process of writing\n<a href=\"https://github.com/kriskowal/gtor/blob/master/README.md\">A General Theory of Reactivity</a>, I found to be incompatible with\npromises, but conceivable with something similar, tentatively called Tasks.\nWith A General Theory, there is a prototype for this.</p>\n<p>Version 2 of Q comes with a <a href=\"https://github.com/kriskowal/q-connection/tree/v2#asynchronous-remote-objects\">Version 2 of Q-Connection</a>.\nThe new version has better semantics for methods of remote promises.\nA method of a remote reference will always produce another remote reference,\nand only by calling <code>pull()</code> will a remote object be serialized and transported\nover the wire to a local copy.\nOnly by calling <code>push()</code> will a local object be serialized and transported over\nthe wirte to a remote copy.\nIt is possible to build remote object graphs, complete with cycles.</p>\n<p>Version 2 of Q and Q-Connection should eventually introduce a <code>there</code> method,\nwhich is like <code>then</code>, but accepts code to run where the value is local.</p>\n<p>Eventually, <a href=\"https://github.com/drses/\">Dr. SES</a> (Distributed Robust Secure ECMAScript) will make it\npossible to safely run arbitrary code on behalf of mutually suspicious parties.</p>\n"};
}],["system.yaml","codi.sh","system.yaml",{},function (require, exports, module, __filename, __dirname){

// codi.sh/system.yaml
// -------------------

module.exports = {"head":{"see":[]},"body":"<h1 id=\"system\">System</h1>\n<p><a href=\"https://github.com/gutentags/system\">System</a> is a packaged module loader and bundler for browsers and Node.js.\nFor browsers, it supports refresh-to-reload debugging, as well as a build step\ncompatible with Browserify to produce bundles for production.</p>\n<p>To use, <code>npm install -S system</code> in your package.  Then use the boot script to\nload your entry module.</p>\n<pre><code class=\"lang-html\">&lt;script\n    src=&quot;node_modules/system/boot.js&quot;\n    data-import=&quot;./entry&quot;&gt;\n&lt;/script&gt;\n</code></pre>\n<p>System loads CommonJS modules and JSON by default, just like Node.js and\nBrowserify, including support for <code>index.js</code> files.\nIn addition, each package can translate modules from other languages to\nJavaScript, on-the-fly in the browser during development, and during a build\nstep in Node.js for production.</p>\n<p>Translators are configured per-package in <code>package.json</code>.</p>\n<pre><code class=\"lang-json\">{\n  &quot;translators&quot;: {\n    &quot;text&quot;: &quot;./translate-text&quot;\n  }\n}\n</code></pre>\n<p>A translator module must export a function that modifies a module object,\nspecifically its <code>text</code> property and <code>dependencies</code> array.</p>\n<pre><code class=\"lang-js\">&quot;use strict&quot;;\nmodule.exports = function translateText(module) {\n    module.text = &quot;module.exports = &quot; +\n        JSON.stringify(module.text);\n};\n</code></pre>\n<p>Use the enclosed <code>bundle</code> script to create a <code>bundle.js</code> from your\n<code>entry.js</code> module for deployment.\nTranslator modules need to run both in the browser and in Node.js for this to\nwork properly.</p>\n<pre><code>$ bundle entry.js &gt; bundle.js\n</code></pre><p>The Module System opens the door for many opportunities including HTML modules\nwith <a href=\"https://github.com/gutentags/gutentag\">Guten Tag</a>.</p>\n"};
}],["document.js","gutentag","document.js",{"koerper":25},function (require, exports, module, __filename, __dirname){

// gutentag/document.js
// --------------------

"use strict";
module.exports = require("koerper");

}],["html.html","gutentag","html.html",{"./html":17},function (require, exports, module, __filename, __dirname){

// gutentag/html.html
// ------------------

"use strict";
module.exports = (require)("./html");

}],["html.js","gutentag","html.js",{},function (require, exports, module, __filename, __dirname){

// gutentag/html.js
// ----------------

"use strict";

module.exports = Html;
function Html(body, scope) {
    var node = body.ownerDocument.createBody();
    body.appendChild(node);
    this.node = node;
    this.defaultHtml = scope.argument.innerHTML;
    this.value = null;
}

Object.defineProperty(Html.prototype, "value", {
    get: function () {
        return this.node.innerHTML;
    },
    set: function (value) {
        if (value == null) {
            value = this.defaultHtml;
        } else if (typeof value !== "string") {
            throw new Error("HTML component only accepts string values");
        }
        this.node.innerHTML = value;
    }
});

}],["repeat.html","gutentag","repeat.html",{"./repeat":19},function (require, exports, module, __filename, __dirname){

// gutentag/repeat.html
// --------------------

"use strict";
module.exports = (require)("./repeat");

}],["repeat.js","gutentag","repeat.js",{"pop-observe":26,"pop-swap":31},function (require, exports, module, __filename, __dirname){

// gutentag/repeat.js
// ------------------


var O = require("pop-observe");
var swap = require("pop-swap");

var empty = [];

module.exports = Repetition;
function Repetition(body, scope) {
    this.body = body;
    this.scope = scope;
    this.iterations = [];
    this.Iteration = scope.argument.component;
    this.id = scope.id;
    this.observer = null;
    this._value = null;
    this.value = [];
}

Object.defineProperty(Repetition.prototype, "value", {
    get: function () {
        return this._value;
    },
    set: function (value) {
        if (!Array.isArray(value)) {
            throw new Error('Value of repetition must be an array');
        }
        if (this.observer) {
            this.observer.cancel();
            this.handleValueRangeChange(empty, this._value, 0);
        }
        this._value = value;
        this.handleValueRangeChange(this._value, empty, 0);
        this.observer = O.observeRangeChange(this._value, this, "value");
    }
});

Repetition.prototype.handleValueRangeChange = function (plus, minus, index) {
    var body = this.body;
    var document = this.body.ownerDocument;

    for (var offset = index; offset < index + minus.length; offset++) {
        var iteration = this.iterations[offset];
        body.removeChild(iteration.body);
        iteration.value = null;
        iteration.index = null;
        iteration.body = null;
        if (iteration.destroy) {
            iteration.destroy();
        }
    }

    var nextIteration = this.iterations[index + 1];
    var nextSibling = nextIteration && nextIteration.body;

    var add = [];
    for (var offset = 0; offset < plus.length; offset++) {
        var value = plus[offset];
        var iterationNode = document.createBody();
        var iterationScope = this.scope.nestComponents();

        var iteration = new this.Iteration(iterationNode, iterationScope);

        iteration.value = value;
        iteration.index = index + offset;
        iteration.body = iterationNode;

        iterationScope.set(this.scope.id + ":iteration", iteration);

        body.insertBefore(iterationNode, nextSibling);
        add.push(iteration);
    }

    swap(this.iterations, index, minus.length, add);

    // Update indexes
    for (var offset = index; offset < this.iterations.length; offset++) {
        this.iterations[offset].index = offset;
    }
};

Repetition.prototype.redraw = function (region) {
    for (var index = 0; index < this.iterations.length; index++) {
        var iteration = this.iterations[index];
        iteration.redraw(region);
    }
};

Repetition.prototype.destroy = function () {
    this.observer.cancel();
    this.handleValueRangeChange(empty, this._value, 0);
};


}],["reveal.html","gutentag","reveal.html",{"./reveal":21},function (require, exports, module, __filename, __dirname){

// gutentag/reveal.html
// --------------------

"use strict";
module.exports = (require)("./reveal");

}],["reveal.js","gutentag","reveal.js",{"pop-observe":26},function (require, exports, module, __filename, __dirname){

// gutentag/reveal.js
// ------------------

"use strict";

// TODO create scope for revealed body and add to owner whenever it is created.
// Destroy when retracted, recreate when revealed.

var O = require("pop-observe");

module.exports = Reveal;
function Reveal(body, scope) {
    this.value = false;
    this.observer = O.observePropertyChange(this, "value", this);
    this.body = body;
    this.scope = scope;
    this.Component = scope.argument.component;
    this.component = null;
    this.componentBody = null;
    this.componentScope = null;
}

Reveal.prototype.handleValuePropertyChange = function (value) {
    this.clear();
    if (value) {
        this.componentScope = this.scope.nestComponents();
        this.componentBody = this.body.ownerDocument.createBody();
        this.component = new this.Component(this.componentBody, this.componentScope);
        this.componentScope.set(this.scope.id + ":revelation", this.component);
        this.body.appendChild(this.componentBody);
    }
};

Reveal.prototype.clear = function clear() {
    if (this.component) {
        if (this.component.destroy) {
            this.component.destroy();
        }
        this.body.removeChild(this.componentBody);
        this.component = null;
        this.componentBody = null;
    }
};

Reveal.prototype.destroy = function () {
    this.clear();
    this.observer.cancel();
};

}],["scope.js","gutentag","scope.js",{},function (require, exports, module, __filename, __dirname){

// gutentag/scope.js
// -----------------

"use strict";

module.exports = Scope;
function Scope() {
    this.root = this;
    this.components = Object.create(null);
    this.componentsFor = Object.create(null);
}

Scope.prototype.nest = function () {
    var child = Object.create(this);
    child.parent = this;
    child.caller = this.caller && this.caller.nest();
    return child;
};

Scope.prototype.nestComponents = function () {
    var child = this.nest();
    child.components = Object.create(this.components);
    child.componentsFor = Object.create(this.componentsFor);
    return child;
};

Scope.prototype.set = function (id, component) {
    var scope = this;
    scope.components[id] = component;

    if (scope.this.add) {
        scope.this.add(component, id, scope);
    }

    var exportId = scope.this.exports && scope.this.exports[id];
    if (exportId) {
        var callerId = scope.caller.id;
        scope.caller.set(callerId + ":" + exportId, component);
    }
};

}],["text.html","gutentag","text.html",{"./text":24},function (require, exports, module, __filename, __dirname){

// gutentag/text.html
// ------------------

"use strict";
module.exports = (require)("./text");

}],["text.js","gutentag","text.js",{},function (require, exports, module, __filename, __dirname){

// gutentag/text.js
// ----------------

"use strict";

module.exports = Text;
function Text(body, scope) {
    var node = body.ownerDocument.createTextNode("");
    body.appendChild(node);
    this.node = node;
    this.defaultText = scope.argument.innerText;
    this._value = null;
}

Object.defineProperty(Text.prototype, "value", {
    get: function () {
        return this._value;
    },
    set: function (value) {
        this._value = value;
        if (value == null) {
            this.node.data = this.defaultText;
        } else {
            this.node.data = "" + value;
        }
    }
});

}],["koerper.js","koerper","koerper.js",{"wizdom":34},function (require, exports, module, __filename, __dirname){

// koerper/koerper.js
// ------------------

"use strict";

var BaseDocument = require("wizdom");
var BaseNode = BaseDocument.prototype.Node;
var BaseElement = BaseDocument.prototype.Element;
var BaseTextNode = BaseDocument.prototype.TextNode;

module.exports = Document;
function Document(actualNode) {
    Node.call(this, this);
    this.actualNode = actualNode;
    this.actualDocument = actualNode.ownerDocument;

    this.documentElement = this.createBody();
    this.documentElement.parentNode = this;
    actualNode.appendChild(this.documentElement.actualNode);

    this.firstChild = this.documentElement;
    this.lastChild = this.documentElement;
}

Document.prototype = Object.create(BaseDocument.prototype);
Document.prototype.Node = Node;
Document.prototype.Element = Element;
Document.prototype.TextNode = TextNode;
Document.prototype.Body = Body;
Document.prototype.OpaqueHtml = OpaqueHtml;

Document.prototype.createBody = function (label) {
    return new this.Body(this, label);
};

Document.prototype.getActualParent = function () {
    return this.actualNode;
};

function Node(document) {
    BaseNode.call(this, document);
    this.actualNode = null;
}

Node.prototype = Object.create(BaseNode.prototype);
Node.prototype.constructor = Node;

Node.prototype.insertBefore = function insertBefore(childNode, nextSibling) {
    if (nextSibling && nextSibling.parentNode !== this) {
        throw new Error("Can't insert before node that is not a child of parent");
    }
    BaseNode.prototype.insertBefore.call(this, childNode, nextSibling);
    var actualParentNode = this.getActualParent();
    var actualNextSibling;
    if (nextSibling) {
        actualNextSibling = nextSibling.getActualFirstChild();
    }
    if (!actualNextSibling) {
        actualNextSibling = this.getActualNextSibling();
    }
    if (actualNextSibling && actualNextSibling.parentNode !== actualParentNode) {
        actualNextSibling = null;
    }
    actualParentNode.insertBefore(childNode.actualNode, actualNextSibling || null);
    childNode.inject();
    return childNode;
};

Node.prototype.removeChild = function removeChild(childNode) {
    if (!childNode) {
        throw new Error("Can't remove child " + childNode);
    }
    childNode.extract();
    this.getActualParent().removeChild(childNode.actualNode);
    BaseNode.prototype.removeChild.call(this, childNode);
};

Node.prototype.setAttribute = function setAttribute(key, value) {
    this.actualNode.setAttribute(key, value);
};

Node.prototype.getAttribute = function getAttribute(key) {
    this.actualNode.getAttribute(key);
};

Node.prototype.hasAttribute = function hasAttribute(key) {
    this.actualNode.hasAttribute(key);
};

Node.prototype.removeAttribute = function removeAttribute(key) {
    this.actualNode.removeAttribute(key);
};

Node.prototype.inject = function injectNode() { };

Node.prototype.extract = function extractNode() { };

Node.prototype.getActualParent = function () {
    return this.actualNode;
};

Node.prototype.getActualFirstChild = function () {
    return this.actualNode;
};

Node.prototype.getActualNextSibling = function () {
    return null;
};

Object.defineProperty(Node.prototype, "innerHTML", {
    get: function () {
        return this.actualNode.innerHTML;
    }//,
    //set: function (html) {
    //    // TODO invalidate any subcontained child nodes
    //    this.actualNode.innerHTML = html;
    //}
});

function Element(document, type, namespace) {
    BaseNode.call(this, document, namespace);
    if (namespace) {
        this.actualNode = document.actualDocument.createElementNS(namespace, type);
    } else {
        this.actualNode = document.actualDocument.createElement(type);
    }
    this.attributes = this.actualNode.attributes;
}

Element.prototype = Object.create(Node.prototype);
Element.prototype.constructor = Element;
Element.prototype.nodeType = 1;

function TextNode(document, text) {
    Node.call(this, document);
    this.actualNode = document.actualDocument.createTextNode(text);
}

TextNode.prototype = Object.create(Node.prototype);
TextNode.prototype.constructor = TextNode;
TextNode.prototype.nodeType = 3;

Object.defineProperty(TextNode.prototype, "data", {
    set: function (data) {
        this.actualNode.data = data;
    },
    get: function () {
        return this.actualNode.data;
    }
});

// if parentNode is null, the body is extracted
// if parentNode is non-null, the body is inserted
function Body(document, label) {
    Node.call(this, document);
    this.actualNode = document.actualDocument.createTextNode(label || "");
    this.actualFirstChild = null;
    this.actualBody = document.actualDocument.createElement("BODY");
}

Body.prototype = Object.create(Node.prototype);
Body.prototype.constructor = Body;
Body.prototype.nodeType = 13;

Body.prototype.extract = function extract() {
    var body = this.actualBody;
    var lastChild = this.actualNode;
    var parentNode = this.parentNode.getActualParent();
    var at = this.getActualFirstChild();
    var next;
    while (at && at !== lastChild) {
        next = at.nextSibling;
        if (body) {
            body.appendChild(at);
        } else {
            parentNode.removeChild(at);
        }
        at = next;
    }
};

Body.prototype.inject = function inject() {
    if (!this.parentNode) {
        throw new Error("Can't inject without a parent node");
    }
    var body = this.actualBody;
    var lastChild = this.actualNode;
    var parentNode = this.parentNode.getActualParent();
    var at = body.firstChild;
    var next;
    while (at) {
        next = at.nextSibling;
        parentNode.insertBefore(at, lastChild);
        at = next;
    }
};

Body.prototype.getActualParent = function () {
    if (this.parentNode) {
        return this.parentNode.getActualParent();
    } else {
        return this.actualBody;
    }
};

Body.prototype.getActualFirstChild = function () {
    if (this.firstChild) {
        return this.firstChild.getActualFirstChild();
    } else {
        return this.actualNode;
    }
};

Body.prototype.getActualNextSibling = function () {
    return this.actualNode;
};

Object.defineProperty(Body.prototype, "innerHTML", {
    get: function () {
        if (this.parentNode) {
            this.extract();
            var html = this.actualBody.innerHTML;
            this.inject();
            return html;
        } else {
            return this.actualBody.innerHTML;
        }
    },
    set: function (html) {
        if (this.parentNode) {
            this.extract();
            this.actualBody.innerHTML = html;
            this.firstChild = this.lastChild = new OpaqueHtml(
                this.ownerDocument,
                this.actualBody
            );
            this.inject();
        } else {
            this.actualBody.innerHTML = html;
            this.firstChild = this.lastChild = new OpaqueHtml(
                this.ownerDocument,
                this.actualBody
            );
        }
        return html;
    }
});

function OpaqueHtml(ownerDocument, body) {
    Node.call(this, ownerDocument);
    this.actualFirstChild = body.firstChild;
}

OpaqueHtml.prototype = Object.create(Node.prototype);
OpaqueHtml.prototype.constructor = OpaqueHtml;

OpaqueHtml.prototype.getActualFirstChild = function getActualFirstChild() {
    return this.actualFirstChild;
};

}],["index.js","pop-observe","index.js",{"./observable-array":27,"./observable-object":29,"./observable-range":30,"./observable-map":28},function (require, exports, module, __filename, __dirname){

// pop-observe/index.js
// --------------------

"use strict";

require("./observable-array");
var Oa = require("./observable-array");
var Oo = require("./observable-object");
var Or = require("./observable-range");
var Om = require("./observable-map");

exports.makeArrayObservable = Oa.makeArrayObservable;

for (var name in Oo) {
    exports[name] = Oo[name];
}
for (var name in Or) {
    exports[name] = Or[name];
}
for (var name in Om) {
    exports[name] = Om[name];
}


}],["observable-array.js","pop-observe","observable-array.js",{"./observable-object":29,"./observable-range":30,"./observable-map":28,"pop-swap/swap":32},function (require, exports, module, __filename, __dirname){

// pop-observe/observable-array.js
// -------------------------------

/*
 * Based in part on observable arrays from Motorola Mobility’s Montage
 * Copyright (c) 2012, Motorola Mobility LLC. All Rights Reserved.
 *
 * 3-Clause BSD License
 * https://github.com/motorola-mobility/montage/blob/master/LICENSE.md
 */

/**
 * This module is responsible for observing changes to owned properties of
 * objects and changes to the content of arrays caused by method calls. The
 * interface for observing array content changes establishes the methods
 * necessary for any collection with observable content.
 */

var Oo = require("./observable-object");
var Or = require("./observable-range");
var Om = require("./observable-map");

var array_swap = require("pop-swap/swap");
var array_splice = Array.prototype.splice;
var array_slice = Array.prototype.slice;
var array_reverse = Array.prototype.reverse;
var array_sort = Array.prototype.sort;
var array_empty = [];

var observableArrayProperties = {

    swap: {
        value: function swap(start, minusLength, plus) {
            if (plus) {
                if (!Array.isArray(plus)) {
                    plus = array_slice.call(plus);
                }
            } else {
                plus = array_empty;
            }

            if (start < 0) {
                start = this.length + start;
            } else if (start > this.length) {
                var holes = start - this.length;
                var newPlus = Array(holes + plus.length);
                for (var i = 0, j = holes; i < plus.length; i++, j++) {
                    if (i in plus) {
                        newPlus[j] = plus[i];
                    }
                }
                plus = newPlus;
                start = this.length;
            }

            if (start + minusLength > this.length) {
                // Truncate minus length if it extends beyond the length
                minusLength = this.length - start;
            } else if (minusLength < 0) {
                // It is the JavaScript way.
                minusLength = 0;
            }

            var minus;
            if (minusLength === 0) {
                // minus will be empty
                if (plus.length === 0) {
                    // at this point if plus is empty there is nothing to do.
                    return []; // [], but spare us an instantiation
                }
                minus = array_empty;
            } else {
                minus = array_slice.call(this, start, start + minusLength);
            }

            var diff = plus.length - minus.length;
            var oldLength = this.length;
            var newLength = Math.max(this.length + diff, start + plus.length);
            var longest = Math.max(oldLength, newLength);
            var observedLength = Math.min(longest, this.observedLength);

            // dispatch before change events
            if (diff) {
                Oo.dispatchPropertyWillChange(this, "length", newLength, oldLength);
            }
            Or.dispatchRangeWillChange(this, plus, minus, start);
            if (diff === 0) {
                // Substring replacement
                for (var i = start, j = 0; i < start + plus.length; i++, j++) {
                    if (plus[j] !== minus[j]) {
                        Oo.dispatchPropertyWillChange(this, i, plus[j], minus[j]);
                        Om.dispatchMapWillChange(this, "update", i, plus[j], minus[j]);
                    }
                }
            } else {
                // All subsequent values changed or shifted.
                // Avoid (observedLength - start) long walks if there are no
                // registered descriptors.
                for (var i = start, j = 0; i < observedLength; i++, j++) {
                    if (i < oldLength && i < newLength) { // update
                        if (j < plus.length) {
                            if (plus[j] !== this[i]) {
                                Oo.dispatchPropertyWillChange(this, i, plus[j], this[i]);
                                Om.dispatchMapWillChange(this, "update", i, plus[j], this[i]);
                            }
                        } else {
                            if (this[i - diff] !== this[i]) {
                                Oo.dispatchPropertyWillChange(this, i, this[i - diff], this[i]);
                                Om.dispatchMapWillChange(this, "update", i, this[i - diff], this[i]);
                            }
                        }
                    } else if (i < newLength) { // but i >= oldLength, create
                        if (j < plus.length) {
                            if (plus[j] !== void 0) {
                                Oo.dispatchPropertyWillChange(this, i, plus[j]);
                            }
                            Om.dispatchMapWillChange(this, "create", i, plus[j]);
                        } else {
                            if (this[i - diff] !== void 0) {
                                Oo.dispatchPropertyWillChange(this, i, this[i - diff]);
                            }
                            Om.dispatchMapWillChange(this, "create", i, this[i - diff]);
                        }
                    } else if (i < oldLength) { // but i >= newLength, delete
                        if (this[i] !== void 0) {
                            Oo.dispatchPropertyWillChange(this, i, void 0, this[i]);
                        }
                        Om.dispatchMapWillChange(this, "delete", i, void 0, this[i]);
                    } else {
                        throw new Error("assertion error");
                    }
                }
            }

            // actual work
            array_swap(this, start, minusLength, plus);

            // dispatch after change events
            if (diff === 0) { // substring replacement
                for (var i = start, j = 0; i < start + plus.length; i++, j++) {
                    if (plus[j] !== minus[j]) {
                        Oo.dispatchPropertyChange(this, i, plus[j], minus[j]);
                        Om.dispatchMapChange(this, "update", i, plus[j], minus[j]);
                    }
                }
            } else {
                // All subsequent values changed or shifted.
                // Avoid (observedLength - start) long walks if there are no
                // registered descriptors.
                for (var i = start, j = 0; i < observedLength; i++, j++) {
                    if (i < oldLength && i < newLength) { // update
                        if (j < minus.length) {
                            if (this[i] !== minus[j]) {
                                Oo.dispatchPropertyChange(this, i, this[i], minus[j]);
                                Om.dispatchMapChange(this, "update", i, this[i], minus[j]);
                            }
                        } else {
                            if (this[i] !== this[i + diff]) {
                                Oo.dispatchPropertyChange(this, i, this[i], this[i + diff]);
                                Om.dispatchMapChange(this, "update", i, this[i], this[i + diff]);
                            }
                        }
                    } else if (i < newLength) { // but i >= oldLength, create
                        if (j < minus.length) {
                            if (this[i] !== minus[j]) {
                                Oo.dispatchPropertyChange(this, i, this[i], minus[j]);
                            }
                            Om.dispatchMapChange(this, "create", i, this[i], minus[j]);
                        } else {
                            if (this[i] !== this[i + diff]) {
                                Oo.dispatchPropertyChange(this, i, this[i], this[i + diff]);
                            }
                            Om.dispatchMapChange(this, "create", i, this[i], this[i + diff]);
                        }
                    } else if (i < oldLength) { // but i >= newLength, delete
                        if (j < minus.length) {
                            if (minus[j] !== void 0) {
                                Oo.dispatchPropertyChange(this, i, void 0, minus[j]);
                            }
                            Om.dispatchMapChange(this, "delete", i, void 0, minus[j]);
                        } else {
                            if (this[i + diff] !== void 0) {
                                Oo.dispatchPropertyChange(this, i, void 0, this[i + diff]);
                            }
                            Om.dispatchMapChange(this, "delete", i, void 0, this[i + diff]);
                        }
                    } else {
                        throw new Error("assertion error");
                    }
                }
            }

            Or.dispatchRangeChange(this, plus, minus, start);
            if (diff) {
                Oo.dispatchPropertyChange(this, "length", newLength, oldLength);
            }
        },
        writable: true,
        configurable: true
    },

    splice: {
        value: function splice(start, minusLength) {
            if (start > this.length) {
                start = this.length;
            }
            var result = this.slice(start, start + minusLength);
            this.swap.call(this, start, minusLength, array_slice.call(arguments, 2));
            return result;
        },
        writable: true,
        configurable: true
    },

    // splice is the array content change utility belt.  forward all other
    // content changes to splice so we only have to write observer code in one
    // place

    reverse: {
        value: function reverse() {
            var reversed = this.slice();
            reversed.reverse();
            this.swap(0, this.length, reversed);
            return this;
        },
        writable: true,
        configurable: true
    },

    sort: {
        value: function sort() {
            var sorted = this.slice();
            array_sort.apply(sorted, arguments);
            this.swap(0, this.length, sorted);
            return this;
        },
        writable: true,
        configurable: true
    },

    set: {
        value: function set(index, value) {
            this.swap(index, index >= this.length ? 0 : 1, [value]);
            return true;
        },
        writable: true,
        configurable: true
    },

    shift: {
        value: function shift() {
            if (this.length) {
                var result = this[0];
                this.swap(0, 1);
                return result;
            }
        },
        writable: true,
        configurable: true
    },

    pop: {
        value: function pop() {
            if (this.length) {
                var result = this[this.length - 1];
                this.swap(this.length - 1, 1);
                return result;
            }
        },
        writable: true,
        configurable: true
    },

    push: {
        value: function push(value) {
            this.swap(this.length, 0, arguments);
            return this.length;
        },
        writable: true,
        configurable: true
    },

    unshift: {
        value: function unshift(value) {
            this.swap(0, 0, arguments);
            return this.length;
        },
        writable: true,
        configurable: true
    },

    clear: {
        value: function clear() {
            this.swap(0, this.length);
        },
        writable: true,
        configurable: true
    }

};

var hiddenProperty = {
    value: null,
    enumerable: false,
    writable: true,
    configurable: true
};

var observableArrayOwnProperties = {
    observed: hiddenProperty,
    observedLength: hiddenProperty,

    propertyObservers: hiddenProperty,
    wrappedPropertyDescriptors: hiddenProperty,

    rangeChangeObservers: hiddenProperty,
    rangeWillChangeObservers: hiddenProperty,
    dispatchesRangeChanges: hiddenProperty,

    mapChangeObservers: hiddenProperty,
    mapWillChangeObservers: hiddenProperty,
    dispatchesMapChanges: hiddenProperty
};

// use different strategies for making arrays observable between Internet
// Explorer and other browsers.
var protoIsSupported = {}.__proto__ === Object.prototype;
var bestowObservableArrayProperties;
if (protoIsSupported) {
    var observableArrayPrototype = Object.create(Array.prototype, observableArrayProperties);
    bestowObservableArrayProperties = function (array) {
        array.__proto__ = observableArrayPrototype;
    };
} else {
    bestowObservableArrayProperties = function (array) {
        Object.defineProperties(array, observableArrayProperties);
    };
}

exports.makeArrayObservable = makeArrayObservable;
function makeArrayObservable(array) {
    if (array.observed) {
        return;
    }
    bestowObservableArrayProperties(array);
    Object.defineProperties(array, observableArrayOwnProperties);
    array.observedLength = 0;
    array.observed = true;
}

// For ObservableObject
exports.makePropertyObservable = makePropertyObservable;
function makePropertyObservable(array, index) {
    makeArrayObservable(array);
    if (~~index === index && index >= 0) { // Note: NaN !== NaN, ~~"foo" !== "foo"
        makeIndexObservable(array, index);
    }
}

// For ObservableRange
exports.makeRangeChangesObservable = makeRangeChangesObservable;
function makeRangeChangesObservable(array) {
    makeArrayObservable(array);
}

// For ObservableMap
exports.makeMapChangesObservable = makeMapChangesObservable;
function makeMapChangesObservable(array) {
    makeArrayObservable(array);
    makeIndexObservable(array, Infinity);
}

function makeIndexObservable(array, index) {
    if (index >= array.observedLength) {
        array.observedLength = index + 1;
    }
}


}],["observable-map.js","pop-observe","observable-map.js",{"./observable-array":27},function (require, exports, module, __filename, __dirname){

// pop-observe/observable-map.js
// -----------------------------

"use strict";

var observerFreeList = [];
var observerToFreeList = [];
var dispatching = false;

module.exports = ObservableMap;
function ObservableMap() {
    throw new Error("Can't construct. ObservableMap is a mixin.");
}

ObservableMap.prototype.observeMapChange = function (handler, name, note, capture) {
    return observeMapChange(this, handler, name, note, capture);
};

ObservableMap.prototype.observeMapWillChange = function (handler, name, note) {
    return observeMapChange(this, handler, name, note, true);
};

ObservableMap.prototype.dispatchMapChange = function (type, key, plus, minus, capture) {
    return dispatchMapChange(this, type, key, plus, minus, capture);
};

ObservableMap.prototype.dispatchMapWillChange = function (type, key, plus, minus) {
    return dispatchMapWillChange(this, type, key, plus, minus, true);
};

ObservableMap.prototype.getMapChangeObservers = function (capture) {
    return getMapChangeObservers(this, capture);
};

ObservableMap.prototype.getMapWillChangeObservers = function () {
    return getMapChangeObservers(this, true);
};

ObservableMap.observeMapChange = observeMapChange;
function observeMapChange(object, handler, name, note, capture) {
    makeMapChangesObservable(object);
    var observers = getMapChangeObservers(object, capture);

    var observer;
    if (observerFreeList.length) { // TODO !debug?
        observer = observerFreeList.pop();
    } else {
        observer = new MapChangeObserver();
    }

    observer.object = object;
    observer.name = name;
    observer.capture = capture;
    observer.observers = observers;
    observer.handler = handler;
    observer.note = note;

    // Precompute dispatch method name

    var stringName = "" + name; // Array indicides must be coerced to string.
    var propertyName = stringName.slice(0, 1).toUpperCase() + stringName.slice(1);

    if (!capture) {
        var methodName = "handle" + propertyName + "MapChange";
        if (handler[methodName]) {
            observer.handlerMethodName = methodName;
        } else if (handler.handleMapChange) {
            observer.handlerMethodName = "handleMapChange";
        } else if (handler.call) {
            observer.handlerMethodName = null;
        } else {
            throw new Error("Can't arrange to dispatch map changes to " + handler);
        }
    } else {
        var methodName = "handle" + propertyName + "MapWillChange";
        if (handler[methodName]) {
            observer.handlerMethodName = methodName;
        } else if (handler.handleMapWillChange) {
            observer.handlerMethodName = "handleMapWillChange";
        } else if (handler.call) {
            observer.handlerMethodName = null;
        } else {
            throw new Error("Can't arrange to dispatch map changes to " + handler);
        }
    }

    observers.push(observer);

    // TODO issue warning if the number of handler records is worrisome
    return observer;
}

ObservableMap.observeMapWillChange = observeMapWillChange;
function observeMapWillChange(object, handler, name, note) {
    return observeMapChange(object, handler, name, note, true);
}

ObservableMap.dispatchMapChange = dispatchMapChange;
function dispatchMapChange(object, type, key, plus, minus, capture) {
    if (plus === minus) {
        return;
    }
    if (!dispatching) { // TODO && !debug?
        return startMapChangeDispatchContext(object, type, key, plus, minus, capture);
    }
    var observers = getMapChangeObservers(object, capture);
    for (var index = 0; index < observers.length; index++) {
        var observer = observers[index];
        observer.dispatch(type, key, plus, minus);
    }
}

ObservableMap.dispatchMapWillChange = dispatchMapWillChange;
function dispatchMapWillChange(object, type, key, plus, minus) {
    return dispatchMapChange(object, type, key, plus, minus, true);
}

function startMapChangeDispatchContext(object, type, key, plus, minus, capture) {
    dispatching = true;
    try {
        dispatchMapChange(object, type, key, plus, minus, capture);
    } catch (error) {
        if (typeof error === "object" && typeof error.message === "string") {
            error.message = "Map change dispatch possibly corrupted by error: " + error.message;
            throw error;
        } else {
            throw new Error("Map change dispatch possibly corrupted by error: " + error);
        }
    } finally {
        dispatching = false;
        if (observerToFreeList.length) {
            // Using push.apply instead of addEach because push will definitely
            // be much faster than the generic addEach, which also handles
            // non-array collections.
            observerFreeList.push.apply(
                observerFreeList,
                observerToFreeList
            );
            // Using clear because it is observable. The handler record array
            // is obtainable by getPropertyChangeObservers, and is observable.
            observerToFreeList.clear();
        }
    }
}

function getMapChangeObservers(object, capture) {
    if (capture) {
        if (!object.mapWillChangeObservers) {
            object.mapWillChangeObservers = [];
        }
        return object.mapWillChangeObservers;
    } else {
        if (!object.mapChangeObservers) {
            object.mapChangeObservers = [];
        }
        return object.mapChangeObservers;
    }
}

function getMapWillChangeObservers(object) {
    return getMapChangeObservers(object, true);
}

function makeMapChangesObservable(object) {
    if (Array.isArray(object)) {
        Oa.makeMapChangesObservable(object);
    }
    if (object.makeMapChangesObservable) {
        object.makeMapChangesObservable();
    }
    object.dispatchesMapChanges = true;
}

function MapChangeObserver() {
    this.init();
}

MapChangeObserver.prototype.init = function () {
    this.object = null;
    this.name = null;
    this.observers = null;
    this.handler = null;
    this.handlerMethodName = null;
    this.childObserver = null;
    this.note = null;
    this.capture = null;
};

MapChangeObserver.prototype.cancel = function () {
    var observers = this.observers;
    var index = observers.indexOf(this);
    // Unfortunately, if this observer was reused, this would not be sufficient
    // to detect a duplicate cancel. Do not cancel more than once.
    if (index < 0) {
        throw new Error(
            "Can't cancel observer for " +
            JSON.stringify(this.name) + " map changes" +
            " because it has already been canceled"
        );
    }
    var childObserver = this.childObserver;
    observers.splice(index, 1);
    this.init();
    // If this observer is canceled while dispatching a change
    // notification for the same property...
    // 1. We cannot put the handler record onto the free list because
    // it may have been captured in the array of records to which
    // the change notification would be sent. We must mark it as
    // canceled by nulling out the handler property so the dispatcher
    // passes over it.
    // 2. We also cannot put the handler record onto the free list
    // until all change dispatches have been completed because it could
    // conceivably be reused, confusing the current dispatcher.
    if (dispatching) {
        // All handlers added to this list will be moved over to the
        // actual free list when there are no longer any property
        // change dispatchers on the stack.
        observerToFreeList.push(this);
    } else {
        observerFreeList.push(this);
    }
    if (childObserver) {
        // Calling user code on our stack.
        // Done in tail position to avoid a plan interference hazard.
        childObserver.cancel();
    }
};

MapChangeObserver.prototype.dispatch = function (type, key, plus, minus) {
    var handler = this.handler;
    // A null handler implies that an observer was canceled during the dispatch
    // of a change. The observer is pending addition to the free list.
    if (!handler) {
        return;
    }

    var childObserver = this.childObserver;
    this.childObserver = null;
    // XXX plan interference hazards calling cancel and handler methods:
    if (childObserver) {
        childObserver.cancel();
    }

    var handlerMethodName = this.handlerMethodName;
    if (handlerMethodName && typeof handler[handlerMethodName] === "function") {
        childObserver = handler[handlerMethodName](plus, minus, key, type, this.object);
    } else if (handler.call) {
        childObserver = handler.call(void 0, plus, minus, key, type, this.object);
    } else {
        throw new Error(
            "Can't dispatch map change for " + JSON.stringify(this.name) + " to " + handler +
            " because there is no handler method"
        );
    }

    this.childObserver = childObserver;
    return this;
};

var Oa = require("./observable-array");

}],["observable-object.js","pop-observe","observable-object.js",{"./observable-array":27},function (require, exports, module, __filename, __dirname){

// pop-observe/observable-object.js
// --------------------------------

/*jshint node: true*/
"use strict";

// XXX Note: exceptions thrown from handlers and handler cancelers may
// interfere with dispatching to subsequent handlers of any change in progress.
// It is unlikely that plans are recoverable once an exception interferes with
// change dispatch. The internal records should not be corrupt, but observers
// might miss an intermediate property change.

var owns = Object.prototype.hasOwnProperty;

var observerFreeList = [];
var observerToFreeList = [];
var dispatching = false;

// Reusable property descriptor
var hiddenValueProperty = {
    value: null,
    writable: true,
    enumerable: false,
    configurable: true
};

module.exports = ObservableObject;
function ObservableObject() {
    throw new Error("Can't construct. ObservableObject is a mixin.");
}

ObservableObject.prototype.observePropertyChange = function (name, handler, note, capture) {
    return observePropertyChange(this, name, handler, note, capture);
};

ObservableObject.prototype.observePropertyWillChange = function (name, handler, note) {
    return observePropertyWillChange(this, name, handler, note);
};

ObservableObject.prototype.dispatchPropertyChange = function (name, plus, minus, capture) {
    return dispatchPropertyChange(this, name, plus, minus, capture);
};

ObservableObject.prototype.dispatchPropertyWillChange = function (name, plus, minus) {
    return dispatchPropertyWillChange(this, name, plus, minus);
};

ObservableObject.prototype.getPropertyChangeObservers = function (name, capture) {
    return getPropertyChangeObservers(this, name, capture);
};

ObservableObject.prototype.getPropertyWillChangeObservers = function (name) {
    return getPropertyWillChangeObservers(this, name);
};

ObservableObject.prototype.makePropertyObservable = function (name) {
    return makePropertyObservable(this, name);
};

ObservableObject.prototype.preventPropertyObserver = function (name) {
    return preventPropertyObserver(this, name);
};

ObservableObject.prototype.PropertyChangeObserver = PropertyChangeObserver;

// Constructor interface with polymorphic delegation if available

ObservableObject.observePropertyChange = function (object, name, handler, note, capture) {
    if (object.observePropertyChange) {
        return object.observePropertyChange(name, handler, note, capture);
    } else {
        return observePropertyChange(object, name, handler, note, capture);
    }
};

ObservableObject.observePropertyWillChange = function (object, name, handler, note) {
    if (object.observePropertyWillChange) {
        return object.observePropertyWillChange(name, handler, note);
    } else {
        return observePropertyWillChange(object, name, handler, note);
    }
};

ObservableObject.dispatchPropertyChange = function (object, name, plus, minus, capture) {
    if (object.dispatchPropertyChange) {
        return object.dispatchPropertyChange(name, plus, minus, capture);
    } else {
        return dispatchPropertyChange(object, name, plus, minus, capture);
    }
};

ObservableObject.dispatchPropertyWillChange = function (object, name, plus, minus) {
    if (object.dispatchPropertyWillChange) {
        return object.dispatchPropertyWillChange(name, plus, minus);
    } else {
        return dispatchPropertyWillChange(object, name, plus, minus);
    }
};

ObservableObject.makePropertyObservable = function (object, name) {
    if (object.makePropertyObservable) {
        return object.makePropertyObservable(name);
    } else {
        return makePropertyObservable(object, name);
    }
};

ObservableObject.preventPropertyObserver = function (object, name) {
    if (object.preventPropertyObserver) {
        return object.preventPropertyObserver(name);
    } else {
        return preventPropertyObserver(object, name);
    }
};

// Implementation

function observePropertyChange(object, name, handler, note, capture) {
    ObservableObject.makePropertyObservable(object, name);
    var observers = getPropertyChangeObservers(object, name, capture);

    var observer;
    if (observerFreeList.length) { // TODO && !debug?
        observer = observerFreeList.pop();
    } else {
        observer = new PropertyChangeObserver();
    }

    observer.object = object;
    observer.propertyName = name;
    observer.capture = capture;
    observer.observers = observers;
    observer.handler = handler;
    observer.note = note;
    observer.value = object[name];

    // Precompute dispatch method names.

    var stringName = "" + name; // Array indicides must be coerced to string.
    var propertyName = stringName.slice(0, 1).toUpperCase() + stringName.slice(1);

    if (!capture) {
        var specificChangeMethodName = "handle" + propertyName + "PropertyChange";
        var genericChangeMethodName = "handlePropertyChange";
        if (handler[specificChangeMethodName]) {
            observer.handlerMethodName = specificChangeMethodName;
        } else if (handler[genericChangeMethodName]) {
            observer.handlerMethodName = genericChangeMethodName;
        } else if (handler.call) {
            observer.handlerMethodName = null;
        } else {
            throw new Error("Can't arrange to dispatch " + JSON.stringify(name) + " property changes on " + object);
        }
    } else {
        var specificWillChangeMethodName = "handle" + propertyName + "PropertyWillChange";
        var genericWillChangeMethodName = "handlePropertyWillChange";
        if (handler[specificWillChangeMethodName]) {
            observer.handlerMethodName = specificWillChangeMethodName;
        } else if (handler[genericWillChangeMethodName]) {
            observer.handlerMethodName = genericWillChangeMethodName;
        } else if (handler.call) {
            observer.handlerMethodName = null;
        } else {
            throw new Error("Can't arrange to dispatch " + JSON.stringify(name) + " property changes on " + object);
        }
    }

    observers.push(observer);

    // TODO issue warnings if the number of handler records exceeds some
    // concerning quantity as a harbinger of a memory leak.
    // TODO Note that if this is garbage collected without ever being called,
    // it probably indicates a programming error.
    return observer;
}

function observePropertyWillChange(object, name, handler, note) {
    return observePropertyChange(object, name, handler, note, true);
}

function dispatchPropertyChange(object, name, plus, minus, capture) {
    if (!dispatching) { // TODO && !debug?
        return startPropertyChangeDispatchContext(object, name, plus, minus, capture);
    }
    var observers = getPropertyChangeObservers(object, name, capture).slice();
    for (var index = 0; index < observers.length; index++) {
        var observer = observers[index];
        observer.dispatch(plus, minus);
    }
}

function dispatchPropertyWillChange(object, name, plus, minus) {
    dispatchPropertyChange(object, name, plus, minus, true);
}

function startPropertyChangeDispatchContext(object, name, plus, minus, capture) {
    dispatching = true;
    try {
        dispatchPropertyChange(object, name, plus, minus, capture);
    } catch (error) {
        if (typeof error === "object" && typeof error.message === "string") {
            error.message = "Property change dispatch possibly corrupted by error: " + error.message;
            throw error;
        } else {
            throw new Error("Property change dispatch possibly corrupted by error: " + error);
        }
    } finally {
        dispatching = false;
        if (observerToFreeList.length) {
            // Using push.apply instead of addEach because push will definitely
            // be much faster than the generic addEach, which also handles
            // non-array collections.
            observerFreeList.push.apply(
                observerFreeList,
                observerToFreeList
            );
            // Using clear because it is observable. The handler record array
            // is obtainable by getPropertyChangeObservers, and is observable.
            observerToFreeList.length = 0;
        }
    }
}

function getPropertyChangeObservers(object, name, capture) {
    if (!object.propertyObservers) {
        hiddenValueProperty.value = Object.create(null);
        Object.defineProperty(object, "propertyObservers", hiddenValueProperty);
    }
    var observersByKey = object.propertyObservers;
    var phase = capture ? "WillChange" : "Change";
    var key = name + phase;
    if (!Object.prototype.hasOwnProperty.call(observersByKey, key)) {
        observersByKey[key] = [];
    }
    return observersByKey[key];
}

function getPropertyWillChangeObservers(object, name) {
    return getPropertyChangeObservers(object, name, true);
}

function PropertyChangeObserver() {
    this.init();
    // Object.seal(this); // Maybe one day, this won't deoptimize.
}

PropertyChangeObserver.prototype.init = function () {
    this.object = null;
    this.propertyName = null;
    // Peer observers, from which to pluck itself upon cancelation.
    this.observers = null;
    // On which to dispatch property change notifications.
    this.handler = null;
    // Precomputed handler method name for change dispatch
    this.handlerMethodName = null;
    // Returned by the last property change notification, which must be
    // canceled before the next change notification, or when this observer is
    // finally canceled.
    this.childObserver = null;
    // For the discretionary use of the user, perhaps to track why this
    // observer has been created, or whether this observer should be
    // serialized.
    this.note = null;
    // Whether this observer dispatches before a change occurs, or after
    this.capture = null;
    // The last known value
    this.value = null;
};

PropertyChangeObserver.prototype.cancel = function () {
    var observers = this.observers;
    var index = observers.indexOf(this);
    // Unfortunately, if this observer was reused, this would not be sufficient
    // to detect a duplicate cancel. Do not cancel more than once.
    if (index < 0) {
        throw new Error(
            "Can't cancel observer for " +
            JSON.stringify(this.propertyName) + " on " + this.object +
            " because it has already been canceled"
        );
    }
    var childObserver = this.childObserver;
    observers.splice(index, 1);
    this.init();
    // If this observer is canceled while dispatching a change
    // notification for the same property...
    // 1. We cannot put the handler record onto the free list because
    // it may have been captured in the array of records to which
    // the change notification would be sent. We must mark it as
    // canceled by nulling out the handler property so the dispatcher
    // passes over it.
    // 2. We also cannot put the handler record onto the free list
    // until all change dispatches have been completed because it could
    // conceivably be reused, confusing the current dispatcher.
    if (dispatching) {
        // All handlers added to this list will be moved over to the
        // actual free list when there are no longer any property
        // change dispatchers on the stack.
        observerToFreeList.push(this);
    } else {
        observerFreeList.push(this);
    }
    if (childObserver) {
        // Calling user code on our stack.
        // Done in tail position to avoid a plan interference hazard.
        childObserver.cancel();
    }
};

PropertyChangeObserver.prototype.dispatch = function (plus, minus) {
    var handler = this.handler;
    // A null handler implies that an observer was canceled during the dispatch
    // of a change. The observer is pending addition to the free list.
    if (!handler) {
        return;
    }

    if (minus === void 0) {
        minus = this.value;
    }
    this.value = plus;

    var childObserver = this.childObserver;
    this.childObserver = null;
    // XXX plan interference hazards calling cancel and handler methods:
    if (childObserver) {
        childObserver.cancel();
    }
    var handlerMethodName = this.handlerMethodName;
    if (handlerMethodName && typeof handler[handlerMethodName] === "function") {
        childObserver = handler[handlerMethodName](plus, minus, this.propertyName, this.object);
    } else if (handler.call) {
        childObserver = handler.call(void 0, plus, minus, this.propertyName, this.object);
    } else {
        throw new Error(
            "Can't dispatch " + JSON.stringify(handlerMethodName) + " property change on " + object +
            " because there is no handler method"
        );
    }

    this.childObserver = childObserver;
    return this;
};

function makePropertyObservable(object, name) {
    if (Array.isArray(object)) {
        return Oa.makePropertyObservable(object, name);
    }

    var wrappedDescriptor = wrapPropertyDescriptor(object, name);

    if (!wrappedDescriptor) {
        return;
    }

    var thunk;
    // in both of these new descriptor variants, we reuse the wrapped
    // descriptor to either store the current value or apply getters
    // and setters. this is handy since we can reuse the wrapped
    // descriptor if we uninstall the observer. We even preserve the
    // assignment semantics, where we get the value from up the
    // prototype chain, and set as an owned property.
    if ("value" in wrappedDescriptor) {
        thunk = makeValuePropertyThunk(name, wrappedDescriptor);
    } else { // "get" or "set", but not necessarily both
        thunk = makeGetSetPropertyThunk(name, wrappedDescriptor);
    }

    Object.defineProperty(object, name, thunk);
}

/**
 * Prevents a thunk from being installed on a property, assuming that the
 * underlying type will dispatch the change manually, or intends the property
 * to stick on all instances.
 */
function preventPropertyObserver(object, name) {
    var wrappedDescriptor = wrapPropertyDescriptor(object, name);
    Object.defineProperty(object, name, wrappedDescriptor);
}

function wrapPropertyDescriptor(object, name) {
    // Arrays are special. We do not support direct setting of properties
    // on an array. instead, call .set(index, value). This is observable.
    // "length" property is observable for all mutating methods because
    // our overrides explicitly dispatch that change.
    if (Array.isArray(object)) {
        return;
    }

    if (!Object.isExtensible(object, name)) {
        return;
    }

    var wrappedDescriptor = getPropertyDescriptor(object, name);
    var wrappedPrototype = wrappedDescriptor.prototype;

    var existingWrappedDescriptors = wrappedPrototype.wrappedPropertyDescriptors;
    if (existingWrappedDescriptors && owns.call(existingWrappedDescriptors, name)) {
        return;
    }

    var wrappedPropertyDescriptors = object.wrappedPropertyDescriptors;
    if (!wrappedPropertyDescriptors) {
        wrappedPropertyDescriptors = {};
        hiddenValueProperty.value = wrappedPropertyDescriptors;
        Object.defineProperty(object, "wrappedPropertyDescriptors", hiddenValueProperty);
    }

    if (owns.call(wrappedPropertyDescriptors, name)) {
        // If we have already recorded a wrapped property descriptor,
        // we have already installed the observer, so short-here.
        return;
    }

    if (!wrappedDescriptor.configurable) {
        return;
    }

    // Memoize the descriptor so we know not to install another layer. We
    // could use it to uninstall the observer, but we do not to avoid GC
    // thrashing.
    wrappedPropertyDescriptors[name] = wrappedDescriptor;

    // Give up *after* storing the wrapped property descriptor so it
    // can be restored by uninstall. Unwritable properties are
    // silently not overriden. Since success is indistinguishable from
    // failure, we let it pass but don't waste time on intercepting
    // get/set.
    if (!wrappedDescriptor.writable && !wrappedDescriptor.set) {
        return;
    }

    // If there is no setter, it is not mutable, and observing is moot.
    // Manual dispatch may still apply.
    if (wrappedDescriptor.get && !wrappedDescriptor.set) {
        return;
    }

    return wrappedDescriptor;
}

function getPropertyDescriptor(object, name) {
    // walk up the prototype chain to find a property descriptor for the
    // property name.
    var descriptor;
    var prototype = object;
    do {
        descriptor = Object.getOwnPropertyDescriptor(prototype, name);
        if (descriptor) {
            break;
        }
        prototype = Object.getPrototypeOf(prototype);
    } while (prototype);
    if (descriptor) {
        descriptor.prototype = prototype;
        return descriptor;
    } else {
        // or default to an undefined value
        return {
            prototype: object,
            value: undefined,
            enumerable: false,
            writable: true,
            configurable: true
        };
    }
}

function makeValuePropertyThunk(name, wrappedDescriptor) {
    return {
        get: function () {
            // Uses __this__ to quickly distinguish __state__ properties from
            // upward in the prototype chain.
            if (this.__state__ === void 0 || this.__state__.__this__ !== this) {
                initState(this);
            }
            var state = this.__state__;

            if (!(name in state)) {
                // Get the initial value from up the prototype chain
                state[name] = wrappedDescriptor.value;
            }

            return state[name];
        },
        set: function (plus) {
            // Uses __this__ to quickly distinguish __state__ properties from
            // upward in the prototype chain.
            if (this.__state__ === void 0 || this.__state__.__this__ !== this) {
                initState(this);
                this.__state__[name] = this[name];
            }
            var state = this.__state__;

            if (!(name in state)) {
                // Get the initial value from up the prototype chain
                state[name] = wrappedDescriptor.value;
            }

            if (plus === state[name]) {
                return plus;
            }

            // XXX plan interference hazard:
            dispatchPropertyWillChange(this, name, plus);

            wrappedDescriptor.value = plus;
            state[name] = plus;

            // XXX plan interference hazard:
            dispatchPropertyChange(this, name, plus);

            return plus;
        },
        enumerable: wrappedDescriptor.enumerable,
        configurable: true
    };
}

function makeGetSetPropertyThunk(name, wrappedDescriptor) {
    return {
        get: function () {
            if (wrappedDescriptor.get) {
                return wrappedDescriptor.get.apply(this, arguments);
            }
        },
        set: function (plus) {
            // Uses __this__ to quickly distinguish __state__ properties from
            // upward in the prototype chain.
            if (this.__state__ === void 0 || this.__state__.__this__ !== this) {
                initState(this);
                this.__state__[name] = this[name];
            }
            var state = this.__state__;

            if (state[name] === plus) {
                return plus;
            }

            // XXX plan interference hazard:
            dispatchPropertyWillChange(this, name, plus);

            // call through to actual setter
            if (wrappedDescriptor.set) {
                wrappedDescriptor.set.apply(this, arguments);
                state[name] = plus;
            }

            // use getter, if possible, to adjust the plus value if the setter
            // adjusted it, for example a setter for an array property that
            // retains the original array and replaces its content, or a setter
            // that coerces the value to an expected type.
            if (wrappedDescriptor.get) {
                plus = wrappedDescriptor.get.apply(this, arguments);
            }

            // dispatch the new value: the given value if there is
            // no getter, or the actual value if there is one
            // TODO spec
            // XXX plan interference hazard:
            dispatchPropertyChange(this, name, plus);

            return plus;
        },
        enumerable: wrappedDescriptor.enumerable,
        configurable: true
    };
}

function initState(object) {
    Object.defineProperty(object, "__state__", {
        value: {
            __this__: object
        },
        writable: true,
        enumerable: false,
        configurable: true
    });
}

var Oa = require("./observable-array");

}],["observable-range.js","pop-observe","observable-range.js",{"./observable-array":27},function (require, exports, module, __filename, __dirname){

// pop-observe/observable-range.js
// -------------------------------

/*global -WeakMap*/
"use strict";

// TODO review all error messages for consistency and helpfulness across observables

var observerFreeList = [];
var observerToFreeList = [];
var dispatching = false;

module.exports = ObservableRange;
function ObservableRange() {
    throw new Error("Can't construct. ObservableRange is a mixin.");
}

ObservableRange.prototype.observeRangeChange = function (handler, name, note, capture) {
    return observeRangeChange(this, handler, name, note, capture);
};

ObservableRange.prototype.observeRangeWillChange = function (handler, name, note) {
    return observeRangeChange(this, handler, name, note, true);
};

ObservableRange.prototype.dispatchRangeChange = function (plus, minus, index, capture) {
    return dispatchRangeChange(this, plus, minus, index, capture);
};

ObservableRange.prototype.dispatchRangeWillChange = function (plus, minus, index) {
    return dispatchRangeChange(this, plus, minus, index, true);
};

ObservableRange.prototype.getRangeChangeObservers = function (capture) {
};

ObservableRange.prototype.getRangeWillChangeObservers = function () {
    return getRangeChangeObservers(this, true);
};

ObservableRange.observeRangeChange = observeRangeChange;
function observeRangeChange(object, handler, name, note, capture) {
    makeRangeChangesObservable(object);
    var observers = getRangeChangeObservers(object, capture);

    var observer;
    if (observerFreeList.length) { // TODO !debug?
        observer = observerFreeList.pop();
    } else {
        observer = new RangeChangeObserver();
    }

    observer.object = object;
    observer.name = name;
    observer.capture = capture;
    observer.observers = observers;
    observer.handler = handler;
    observer.note = note;

    // Precompute dispatch method name

    var stringName = "" + name; // Array indicides must be coerced to string.
    var propertyName = stringName.slice(0, 1).toUpperCase() + stringName.slice(1);

    if (!capture) {
        var methodName = "handle" + propertyName + "RangeChange";
        if (handler[methodName]) {
            observer.handlerMethodName = methodName;
        } else if (handler.handleRangeChange) {
            observer.handlerMethodName = "handleRangeChange";
        } else if (handler.call) {
            observer.handlerMethodName = null;
        } else {
            throw new Error("Can't arrange to dispatch " + JSON.stringify(name) + " map changes");
        }
    } else {
        var methodName = "handle" + propertyName + "RangeWillChange";
        if (handler[methodName]) {
            observer.handlerMethodName = methodName;
        } else if (handler.handleRangeWillChange) {
            observer.handlerMethodName = "handleRangeWillChange";
        } else if (handler.call) {
            observer.handlerMethodName = null;
        } else {
            throw new Error("Can't arrange to dispatch " + JSON.stringify(name) + " map changes");
        }
    }

    observers.push(observer);

    // TODO issue warning if the number of handler records is worrisome
    return observer;
}

ObservableRange.observeRangeWillChange = observeRangeWillChange;
function observeRangeWillChange(object, handler, name, note) {
    return observeRangeChange(object, handler, name, note, true);
}

ObservableRange.dispatchRangeChange = dispatchRangeChange;
function dispatchRangeChange(object, plus, minus, index, capture) {
    if (!dispatching) { // TODO && !debug?
        return startRangeChangeDispatchContext(object, plus, minus, index, capture);
    }
    var observers = getRangeChangeObservers(object, capture);
    for (var observerIndex = 0; observerIndex < observers.length; observerIndex++) {
        var observer = observers[observerIndex];
        // The slicing ensures that handlers cannot interfere with another by
        // altering these arguments.
        observer.dispatch(plus.slice(), minus.slice(), index);
    }
}

ObservableRange.dispatchRangeWillChange = dispatchRangeWillChange;
function dispatchRangeWillChange(object, plus, minus, index) {
    return dispatchRangeChange(object, plus, minus, index, true);
}

function startRangeChangeDispatchContext(object, plus, minus, index, capture) {
    dispatching = true;
    try {
        dispatchRangeChange(object, plus, minus, index, capture);
    } catch (error) {
        if (typeof error === "object" && typeof error.message === "string") {
            error.message = "Range change dispatch possibly corrupted by error: " + error.message;
            throw error;
        } else {
            throw new Error("Range change dispatch possibly corrupted by error: " + error);
        }
    } finally {
        dispatching = false;
        if (observerToFreeList.length) {
            // Using push.apply instead of addEach because push will definitely
            // be much faster than the generic addEach, which also handles
            // non-array collections.
            observerFreeList.push.apply(
                observerFreeList,
                observerToFreeList
            );
            // Using clear because it is observable. The handler record array
            // is obtainable by getPropertyChangeObservers, and is observable.
            if (observerToFreeList.clear) {
                observerToFreeList.clear();
            } else {
                observerToFreeList.length = 0;
            }
        }
    }
}

function makeRangeChangesObservable(object) {
    if (Array.isArray(object)) {
        Oa.makeRangeChangesObservable(object);
    }
    if (object.makeRangeChangesObservable) {
        object.makeRangeChangesObservable();
    }
    object.dispatchesRangeChanges = true;
}

function getRangeChangeObservers(object, capture) {
    if (capture) {
        if (!object.rangeWillChangeObservers) {
            object.rangeWillChangeObservers = [];
        }
        return object.rangeWillChangeObservers;
    } else {
        if (!object.rangeChangeObservers) {
            object.rangeChangeObservers = [];
        }
        return object.rangeChangeObservers;
    }
}

/*
    if (object.preventPropertyObserver) {
        return object.preventPropertyObserver(name);
    } else {
        return preventPropertyObserver(object, name);
    }
*/

function RangeChangeObserver() {
    this.init();
}

RangeChangeObserver.prototype.init = function () {
    this.object = null;
    this.name = null;
    this.observers = null;
    this.handler = null;
    this.handlerMethodName = null;
    this.childObserver = null;
    this.note = null;
    this.capture = null;
};

RangeChangeObserver.prototype.cancel = function () {
    var observers = this.observers;
    var index = observers.indexOf(this);
    // Unfortunately, if this observer was reused, this would not be sufficient
    // to detect a duplicate cancel. Do not cancel more than once.
    if (index < 0) {
        throw new Error(
            "Can't cancel observer for " +
            JSON.stringify(this.name) + " range changes" +
            " because it has already been canceled"
        );
    }
    var childObserver = this.childObserver;
    observers.splice(index, 1);
    this.init();
    // If this observer is canceled while dispatching a change
    // notification for the same property...
    // 1. We cannot put the handler record onto the free list because
    // it may have been captured in the array of records to which
    // the change notification would be sent. We must mark it as
    // canceled by nulling out the handler property so the dispatcher
    // passes over it.
    // 2. We also cannot put the handler record onto the free list
    // until all change dispatches have been completed because it could
    // conceivably be reused, confusing the current dispatcher.
    if (dispatching) {
        // All handlers added to this list will be moved over to the
        // actual free list when there are no longer any property
        // change dispatchers on the stack.
        observerToFreeList.push(this);
    } else {
        observerFreeList.push(this);
    }
    if (childObserver) {
        // Calling user code on our stack.
        // Done in tail position to avoid a plan interference hazard.
        childObserver.cancel();
    }
};

RangeChangeObserver.prototype.dispatch = function (plus, minus, index) {
    var handler = this.handler;
    // A null handler implies that an observer was canceled during the dispatch
    // of a change. The observer is pending addition to the free list.
    if (!handler) {
        return;
    }

    var childObserver = this.childObserver;
    this.childObserver = null;
    // XXX plan interference hazards calling cancel and handler methods:
    if (childObserver) {
        childObserver.cancel();
    }

    var handlerMethodName = this.handlerMethodName;
    if (handlerMethodName && typeof handler[handlerMethodName] === "function") {
        childObserver = handler[handlerMethodName](plus, minus, index, this.object);
    } else if (handler.call) {
        childObserver = handler.call(void 0, plus, minus, index, this.object);
    } else {
        throw new Error(
            "Can't dispatch range change to " + handler
        );
    }

    this.childObserver = childObserver;

    return this;
};

var Oa = require("./observable-array");

}],["pop-swap.js","pop-swap","pop-swap.js",{"./swap":32},function (require, exports, module, __filename, __dirname){

// pop-swap/pop-swap.js
// --------------------

"use strict";

var swap = require("./swap");

module.exports = polymorphicSwap;
function polymorphicSwap(array, start, minusLength, plus) {
    if (typeof array.swap === "function") {
        array.swap(start, minusLength, plus);
    } else {
        swap(array, start, minusLength, plus);
    }
}


}],["swap.js","pop-swap","swap.js",{},function (require, exports, module, __filename, __dirname){

// pop-swap/swap.js
// ----------------

"use strict";

// Copyright (C) 2014 Montage Studio
// https://github.com/montagejs/collections/blob/7c674d49c04955f01bbd2839f90936e15aceea2f/operators/swap.js

var array_slice = Array.prototype.slice;

module.exports = swap;
function swap(array, start, minusLength, plus) {
    // Unrolled implementation into JavaScript for a couple reasons.
    // Calling splice can cause large stack sizes for large swaps. Also,
    // splice cannot handle array holes.
    if (plus) {
        if (!Array.isArray(plus)) {
            plus = array_slice.call(plus);
        }
    } else {
        plus = Array.empty;
    }

    if (start < 0) {
        start = array.length + start;
    } else if (start > array.length) {
        array.length = start;
    }

    if (start + minusLength > array.length) {
        // Truncate minus length if it extends beyond the length
        minusLength = array.length - start;
    } else if (minusLength < 0) {
        // It is the JavaScript way.
        minusLength = 0;
    }

    var diff = plus.length - minusLength;
    var oldLength = array.length;
    var newLength = array.length + diff;

    if (diff > 0) {
        // Head Tail Plus Minus
        // H H H H M M T T T T
        // H H H H P P P P T T T T
        //         ^ start
        //         ^-^ minus.length
        //           ^ --> diff
        //         ^-----^ plus.length
        //             ^------^ tail before
        //                 ^------^ tail after
        //                   ^ start iteration
        //                       ^ start iteration offset
        //             ^ end iteration
        //                 ^ end iteration offset
        //             ^ start + minus.length
        //                     ^ length
        //                   ^ length - 1
        for (var index = oldLength - 1; index >= start + minusLength; index--) {
            var offset = index + diff;
            if (index in array) {
                array[offset] = array[index];
            } else {
                // Oddly, PhantomJS complains about deleting array
                // properties, unless you assign undefined first.
                array[offset] = void 0;
                delete array[offset];
            }
        }
    }
    for (var index = 0; index < plus.length; index++) {
        if (index in plus) {
            array[start + index] = plus[index];
        } else {
            array[start + index] = void 0;
            delete array[start + index];
        }
    }
    if (diff < 0) {
        // Head Tail Plus Minus
        // H H H H M M M M T T T T
        // H H H H P P T T T T
        //         ^ start
        //         ^-----^ length
        //         ^-^ plus.length
        //             ^ start iteration
        //                 ^ offset start iteration
        //                     ^ end
        //                         ^ offset end
        //             ^ start + minus.length - plus.length
        //             ^ start - diff
        //                 ^------^ tail before
        //             ^------^ tail after
        //                     ^ length - diff
        //                     ^ newLength
        for (var index = start + plus.length; index < oldLength - diff; index++) {
            var offset = index - diff;
            if (offset in array) {
                array[index] = array[offset];
            } else {
                array[index] = void 0;
                delete array[index];
            }
        }
    }
    array.length = newLength;
}


}],["identifier.js","system","identifier.js",{},function (require, exports, module, __filename, __dirname){

// system/identifier.js
// --------------------

"use strict";

exports.isAbsolute = isAbsolute;
function isAbsolute(path) {
    return (
        path !== "" &&
        path.lastIndexOf("./", 0) < 0 &&
        path.lastIndexOf("../", 0) < 0
    );
}

exports.isBare = isBare;
function isBare(id) {
    var lastSlash = id.lastIndexOf("/");
    return id.indexOf(".", lastSlash) < 0;
}

// TODO @user/name package names

exports.head = head;
function head(id) {
    var firstSlash = id.indexOf("/");
    if (firstSlash < 0) { return id; }
    return id.slice(0, firstSlash);
}

exports.tail = tail;
function tail(id) {
    var firstSlash = id.indexOf("/");
    if (firstSlash < 0) { return ""; }
    return id.slice(firstSlash + 1);
}

exports.extension = extension;
function extension(id) {
    var lastSlash = id.lastIndexOf("/");
    var lastDot = id.lastIndexOf(".");
    if (lastDot <= lastSlash) { return ""; }
    return id.slice(lastDot + 1);
}

exports.dirname = dirname;
function dirname(id) {
    var lastSlash = id.lastIndexOf("/");
    if (lastSlash < 0) {
        return id;
    }
    return id.slice(0, lastSlash);
}

exports.basename = basename;
function basename(id) {
    var lastSlash = id.lastIndexOf("/");
    if (lastSlash < 0) {
        return id;
    }
    return id.slice(lastSlash + 1);
}

exports.resolve = resolve;
function resolve(rel, abs) {
    abs = abs || '';
    var source = rel.split("/");
    var target = [];
    var parts;
    if (source.length && source[0] === "." || source[0] === "..") {
        parts = abs.split("/");
        parts.pop();
        source.unshift.apply(source, parts);
    }
    for (var index = 0; index < source.length; index++) {
        if (source[index] === "..") {
            if (target.length) {
                target.pop();
            }
        } else if (source[index] !== "" && source[index] !== ".") {
            target.push(source[index]);
        }
    }
    return target.join("/");
}

}],["dom.js","wizdom","dom.js",{},function (require, exports, module, __filename, __dirname){

// wizdom/dom.js
// -------------

"use strict";

module.exports = Document;
function Document(namespace) {
    this.doctype = null;
    this.documentElement = null;
    this.namespaceURI = namespace || "";
}

Document.prototype.nodeType = 9;
Document.prototype.Node = Node;
Document.prototype.Element = Element;
Document.prototype.TextNode = TextNode;
Document.prototype.Comment = Comment;
Document.prototype.Attr = Attr;
Document.prototype.NamedNodeMap = NamedNodeMap;

Document.prototype.createTextNode = function (text) {
    return new this.TextNode(this, text);
};

Document.prototype.createComment = function (text) {
    return new this.Comment(this, text);
};

Document.prototype.createElement = function (type, namespace) {
    return new this.Element(this, type, namespace || this.namespaceURI);
};

Document.prototype.createElementNS = function (namespace, type) {
    return new this.Element(this, type, namespace || this.namespaceURI);
};

Document.prototype.createAttribute = function (name, namespace) {
    return new this.Attr(this, name, namespace || this.namespaceURI);
};

Document.prototype.createAttributeNS = function (namespace, name) {
    return new this.Attr(this, name, namespace || this.namespaceURI);
};

function Node(document) {
    this.ownerDocument = document;
    this.parentNode = null;
    this.firstChild = null;
    this.lastChild = null;
    this.previousSibling = null;
    this.nextSibling = null;
}

Node.prototype.appendChild = function appendChild(childNode) {
    return this.insertBefore(childNode, null);
};

Node.prototype.insertBefore = function insertBefore(childNode, nextSibling) {
    if (!childNode) {
        throw new Error("Can't insert null child");
    }
    if (childNode.ownerDocument !== this.ownerDocument) {
        throw new Error("Can't insert child from foreign document");
    }
    if (childNode.parentNode) {
        childNode.parentNode.removeChild(childNode);
    }
    var previousSibling;
    if (nextSibling) {
        previousSibling = nextSibling.previousSibling;
    } else {
        previousSibling = this.lastChild;
    }
    if (previousSibling) {
        previousSibling.nextSibling = childNode;
    }
    if (nextSibling) {
        nextSibling.previousSibling = childNode;
    }
    childNode.nextSibling = nextSibling;
    childNode.previousSibling = previousSibling;
    childNode.parentNode = this;
    if (!nextSibling) {
        this.lastChild = childNode;
    }
    if (!previousSibling) {
        this.firstChild = childNode;
    }
};

Node.prototype.removeChild = function removeChild(childNode) {
    if (!childNode) {
        throw new Error("Can't remove null child");
    }
    var parentNode = childNode.parentNode;
    if (parentNode !== this) {
        throw new Error("Can't remove node that is not a child of parent");
    }
    if (childNode === parentNode.firstChild) {
        parentNode.firstChild = childNode.nextSibling;
    }
    if (childNode === parentNode.lastChild) {
        parentNode.lastChild = childNode.previousSibling;
    }
    if (childNode.previousSibling) {
        childNode.previousSibling.nextSibling = childNode.nextSibling;
    }
    if (childNode.nextSibling) {
        childNode.nextSibling.previousSibling = childNode.previousSibling;
    }
    childNode.previousSibling = null;
    childNode.parentNode = null;
    childNode.nextSibling = null;
    return childNode;
};

function TextNode(document, text) {
    Node.call(this, document);
    this.data = text;
}

TextNode.prototype = Object.create(Node.prototype);
TextNode.prototype.constructor = TextNode;
TextNode.prototype.nodeType = 3;

function Comment(document, text) {
    Node.call(this, document);
    this.data = text;
}

Comment.prototype = Object.create(Node.prototype);
Comment.prototype.constructor = Comment;
Comment.prototype.nodeType = 8;

function Element(document, type, namespace) {
    Node.call(this, document);
    this.tagName = type;
    this.namespaceURI = namespace;
    this.attributes = new this.ownerDocument.NamedNodeMap();
}

Element.prototype = Object.create(Node.prototype);
Element.prototype.constructor = Element;
Element.prototype.nodeType = 1;

Element.prototype.hasAttribute = function (name, namespace) {
    var attr = this.attributes.getNamedItem(name, namespace);
    return !!attr;
};

Element.prototype.getAttribute = function (name, namespace) {
    var attr = this.attributes.getNamedItem(name, namespace);
    return attr ? attr.value : null;
};

Element.prototype.setAttribute = function (name, value, namespace) {
    var attr = this.ownerDocument.createAttribute(name, namespace);
    attr.value = value;
    this.attributes.setNamedItem(attr, namespace);
};

Element.prototype.removeAttribute = function (name, namespace) {
    this.attributes.removeNamedItem(name, namespace);
};

Element.prototype.hasAttributeNS = function (namespace, name) {
    return this.hasAttribute(name, namespace);
};

Element.prototype.getAttributeNS = function (namespace, name) {
    return this.getAttribute(name, namespace);
};

Element.prototype.setAttributeNS = function (namespace, name, value) {
    this.setAttribute(name, value, namespace);
};

Element.prototype.removeAttributeNS = function (namespace, name) {
    this.removeAttribute(name, namespace);
};

function Attr(ownerDocument, name, namespace) {
    this.ownerDocument = ownerDocument;
    this.name = name;
    this.value = null;
    this.namespaceURI = namespace;
}

Attr.prototype.nodeType = 2;

function NamedNodeMap() {
    this.length = 0;
}

NamedNodeMap.prototype.getNamedItem = function (name, namespace) {
    namespace = namespace || "";
    var key = encodeURIComponent(namespace) + ":" + encodeURIComponent(name);
    return this[key];
};

NamedNodeMap.prototype.setNamedItem = function (attr) {
    var namespace = attr.namespaceURI || "";
    var name = attr.name;
    var key = encodeURIComponent(namespace) + ":" + encodeURIComponent(name);
    var previousAttr = this[key];
    if (!previousAttr) {
        this[this.length] = attr;
        this.length++;
        previousAttr = null;
    }
    this[key] = attr;
    return previousAttr;
};

NamedNodeMap.prototype.removeNamedItem = function (name, namespace) {
    namespace = namespace || "";
    var key = encodeURIComponent(namespace) + ":" + encodeURIComponent(name);
    var attr = this[key];
    if (!attr) {
        throw new Error("Not found");
    }
    var index = Array.prototype.indexOf.call(this, attr);
    delete this[key];
    delete this[index];
    this.length--;
};

NamedNodeMap.prototype.item = function (index) {
    return this[index];
};

NamedNodeMap.prototype.getNamedItemNS = function (namespace, name) {
    return this.getNamedItem(name, namespace);
};

NamedNodeMap.prototype.setNamedItemNS = function (attr) {
    return this.setNamedItem(attr);
};

NamedNodeMap.prototype.removeNamedItemNS = function (namespace, name) {
    return this.removeNamedItem(name, namespace);
};

}]])("codi.sh/index.js")
