// https://calculator.swiftutors.com/area-of-an-ellipse-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const areaofanEllipseRadio = document.getElementById('areaofanEllipseRadio');
const lengthoftheSemimajorAxisRadio = document.getElementById('lengthoftheSemimajorAxisRadio');
const lengthoftheSemiminorAxisRadio = document.getElementById('lengthoftheSemiminorAxisRadio');

let areaofanEllipse;
const PI = Math.PI;
let lengthoftheSemimajorAxis = v1;
let lengthoftheSemiminorAxis = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

areaofanEllipseRadio.addEventListener('click', function() {
  variable1.textContent = '(r1) Length of the Semi-major Axis';
  variable2.textContent = '(r2) Length of the Semi-minor Axis';
  lengthoftheSemimajorAxis = v1;
  lengthoftheSemiminorAxis = v2;
  result.textContent = '';
});

lengthoftheSemimajorAxisRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of an Ellipse';
  variable2.textContent = '(r2) Length of the Semi-minor Axis';
  areaofanEllipse = v1;
  lengthoftheSemiminorAxis = v2;
  result.textContent = '';
});

lengthoftheSemiminorAxisRadio.addEventListener('click', function() {
  variable1.textContent = 'Area of an Ellipse';
  variable2.textContent = '(r1) Length of the Semi-major Axis';
  areaofanEllipse = v1;
  lengthoftheSemimajorAxis = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(areaofanEllipseRadio.checked)
    result.textContent = `Area of an Ellipse = ${computeAreaofanEllipse().toFixed(2)}`;

  else if(lengthoftheSemimajorAxisRadio.checked)
    result.textContent = `Length of the Semi-major Axis = ${computeLengthoftheSemimajorAxis().toFixed(2)}`;

  else if(lengthoftheSemiminorAxisRadio.checked)
    result.textContent = `Length of the Semi-minor Axis = ${computeLengthoftheSemiminorAxis().toFixed(2)}`;
})

// calculation

function computeAreaofanEllipse() {
  return PI * Number(lengthoftheSemimajorAxis.value) * Number(lengthoftheSemiminorAxis.value);
}

function computeLengthoftheSemimajorAxis() {
  return Number(areaofanEllipse.value) / (PI * Number(lengthoftheSemiminorAxis.value));
}

function computeLengthoftheSemiminorAxis() {
  return Number(areaofanEllipse.value) / (PI * Number(lengthoftheSemimajorAxis.value));
}