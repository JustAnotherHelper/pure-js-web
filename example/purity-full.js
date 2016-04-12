/**
 * Full purity functionality.
 */

function add(item)
{
    document.body.appendChild(item.getObject());
}

/* a DOM element component. */
var element = class {
    constructor(tagname) {
        this.object = document.createElement(tagname);
        
        if (arguments.length > 1) {
            this.object.innerHTML = arguments[1];
        }
    }
    
    getObject() {
        return this.object;
    }
};
 
 /* a title component. */
 var title = class {
    constructor(text) {
        this.object = (new element('title', text)).getObject();         
    }          

    getObject() { return this.object; }
};
 
function setTitle(text) 
{
    document.head.appendChild((new title(text)).getObject())
}

/* a label component. */
var label = class {
    constructor(text) {
        this.object = (new element('p')).getObject();
        this.object.innerHTML = text;
    }
 
    getObject() {
        return this.object;
    }        
};

/* a div component. */
var div = class {
    constructor(){
        this.object = (new element('div')).getObject();
        this.contents = [];
        this.object.innerHTML = "";
    }
  
    getObject(){
        return this.object;
    }

    append(item) {
        this.object.appendChild(item.getObject());
    }
};
