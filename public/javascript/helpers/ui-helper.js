/**
 * Toggles between showing the spinner or the text element,
 * depending if the current state is loading or not.
 * Also disables the button element depending on the value of isLoading.
 *
 * @param  isLoading boolean, whether buttonEl should be disabled (true) or not (false)
 * @param  buttonEl the html button element that will get disabled when isLoading is true
 * @param  spinnerEl the html element that contains the spinner
 * @param  textEl the html element inside buttonEl.
 */
function handleButtonSpinner(isLoading, buttonEl, spinnerEl, textEl) {
  buttonEl.disabled = isLoading;
  spinnerEl.classList.toggle('d-none', !isLoading);
  textEl.classList.toggle('d-none', isLoading);
}
