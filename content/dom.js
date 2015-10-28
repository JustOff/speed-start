var EXPORTED_SYMBOLS = ["Dom"];

var Dom = {

	child: function (element, classOrType) {
		var elements = [ element ];
		var regexp = new RegExp("\\b" + classOrType + "\\b");

		while ((element = elements.shift())) {
			for (var i = 0; i < element.childNodes.length; i++) {
				var child = element.childNodes[i];
				if (child.nodeName.toLowerCase() == classOrType ||
					child.className && child.className.match(regexp)) return child;
				elements.push(child);
			}
		}
	},

	parent: function (element, classOrType) {
		var regexp = new RegExp("\\b" + classOrType + "\\b");

		while ((element = element.parentNode)) {
			if (element.nodeName.toLowerCase() == classOrType ||
				element.className && element.className.match(regexp)) return element;
		}
	},

	prepend: function (parentNode, child) {
		parent.insertBefore(child, parentNode.firstChild);
	},

	addClass: function (element, className) {
		if (element.className.indexOf(className) == -1) {
			element.className += " " + className;
		}
	},

	removeClass: function (element, className) {
		element.className = element.className.replace(new RegExp("((^)|( +))" + className + "(( +)|($))"), " ")
	},
	
	hasClass: function (element, className) {
		return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	},

	remove: function (element) {
		element.parentNode.removeChild(element);
	},

	clear: function(element) {
		for (var i = element.childNodes.length - 1; i >= 0; i--) {
			element.removeChild(element.childNodes[i]);
		}
	}
	
};