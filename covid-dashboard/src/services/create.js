export default function create(tag, selectors, text, children) {
  try {
    const element = document.createElement(tag);

    if (selectors) {
      const { classes, attributes } = selectors;

      if (Array.isArray(classes) && classes.length) {
        classes.forEach(className => element.classList.add(className));
      }

      if (Array.isArray(attributes) && attributes.length) {
        attributes.forEach(attribute => {
          const [name, value] = attribute;

          element.setAttribute(name, value);
        });
      }
    }

    if (text) {
      element.textContent = text;
    }

    if (Array.isArray(children) && children.length) {
      children.forEach(child => element.append(child));
    }

    return element;
  } catch(e) {
    console.log(e);
  }
}