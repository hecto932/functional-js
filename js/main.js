const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

let description = $('#description');
let carbs = $('#carbs');
let calories = $('#calories');
let protein = $('#protein');

description.keypress(() => {
  description.val() ? '' : description.removeClass('is-invalid');
})

calories.keypress(() => {
  calories.val() ? '' : calories.removeClass('is-invalid');
})

carbs.keypress(() => {
  carbs.val() ? '' : carbs.removeClass('is-invalid');
})

protein.keypress(() => {
  protein.val() ? '' : protein.removeClass('is-invalid');
})

let validateInputs = () => {
  description.val() ? '' : description.addClass('is-invalid');
  calories.val() ? '' : calories.addClass('is-invalid');
  carbs.val() ? '' : carbs.addClass('is-invalid');
  protein.val() ? '' : protein.addClass('is-invalid');

  if (description.val() && calories.val() && carbs.val() && protein.val()) {
    console.log(description.val(), calories.val(), carbs.val(), protein.val())
  }
}