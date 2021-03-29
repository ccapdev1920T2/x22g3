/**
 * Creates an array containing the input elements from a given HTML form.
 * This is done by excluding the form's child elements
 * with a falsy value for the name attribute.
 * @param  formEl the HTML \<form\> element
 * @returns an array of input elements taken from `formEl`
 */
function getFormElements(formEl) {
  var elements = Array.from(formEl.elements);
  // remove non-input elements
  elements = elements.filter(function (el) {
    return Boolean(el.name);
  });

  return elements;
}

/**
 * Creates an object that can be sent as a request body to a server.
 * The key-value pairs are based on the given form element's inputs.
 * @param  formEl the HTML \<form\> element
 * @returns an object containing a key-value pair of each
 * input's name and value attributes, respectively
 */
function createRequestBody(formEl) {
  var formInputs = getFormElements(formEl);

  var body = {};

  for (let i = 0; i < formInputs.length; i++) {
    var name = formInputs[i].name;
    body[name] = formInputs[i].value;
  }

  return body;
}

/**
 * Resets the value of each input in the form
 * (i.e. sets to a null string).
 * @param  formEl the HTML \<form\> element
 */
function resetFormInputs(formEl) {
  var elements = getFormElements(formEl);

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.value = "";
  }
}

function updateFormValidationStyles(formEl, formErrors) {}
