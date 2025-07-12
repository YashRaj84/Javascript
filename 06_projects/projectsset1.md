# Projects related to DOM

#project link
[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code
# Project 1

```javascript
console.log("Yash")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('.body')

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event)
  {
    console.log(event);
    console.log(event.target);
    if(event.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if(event.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if(event.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if(event.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if(event.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

# Project 2
```javascript

const form = document.querySelector('form')
form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else {
    const BMI = (weight / ((height*height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${BMI}</span>`;
  }

})

```
