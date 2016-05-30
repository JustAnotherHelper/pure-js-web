var purity = {
	bootstrap: function(src) {
		var script = document.createElement("script");
		script.setAttribute("src", src);
		document.head.appendChild(script);
	},

	/* a DOM element component. */
	element: class {
		constructor(tagname) {
			this.object = document.createElement(tagname);

			if (arguments.length > 1) {
				this.object.innerHTML = arguments[1];
			}
		}

		getObject() {
			return this.object;
		}
	},

	/* a title component. */
	title: class {
		constructor(text) {
			this.object = (new purity.element('title', text)).getObject();
		}

		getObject() { return this.object; }
	},

	/* a label component. */
	label: class {
		constructor(text) {
			this.object = (new purity.element('p')).getObject();
			this.object.innerHTML = text;
		}

		getObject() {
			return this.object;
		}
	},

	setTitle: function(text) {
		document.head.appendChild((new purity.title(text)).getObject())
	},

	add: function(item) {
		document.body.appendChild(item.object);
	},

	remove: function(item) {
		document.body.removeChild(item.object);
	},

	div: class {
		constructor(){
			this.object = (new purity.element('div')).getObject();
			this.contents = [];
			this.object.innerHTML = "";
		}

		getObject(){
			return this.object;
		}

		add(item) {
			this.object.appendChild(item.object);
		}

		remove(item) {
			this.object.removeChild(item.object);
		}
	}
};