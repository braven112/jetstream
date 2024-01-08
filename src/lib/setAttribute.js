/**
 * This is utility function too enforce HTML attributes for CustomElement
 * https://stackoverflow.com/questions/67181931/how-to-force-inline-html-attribute-in-svelte
 * @param {HTMLElement} node 
 * @param {*} payload - attr: attribute name, val: attribute value
 * @returns 
 */
const setAttribute = (node, {attr, val}) => {
	if (val) {
		node.setAttribute(attr, val);
	}

	return {
    // @ts-ignore
		update: function (val) {
			if (val) {
				node.setAttribute(attr, val);
			}
		}
	};
};

export default setAttribute;
