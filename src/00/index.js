import { createMachine } from 'xstate';

const elOutput = document.querySelector('#output');

function output(object) {
  elOutput.innerHTML = JSON.stringify(object, null, 2);
}

console.log('Welcome to the XState workshop!');

const user = {
  name: 'David Khourshid',
  company: 'Microsoft',
  interests: ['piano', 'state machines'],
};

output(user);

const elButton = document.querySelector('#button');
elButton.addEventListener('click', () => {
  elButton.setAttribute('disabled', 'true');
    console.log('Loading data...', Date.now());
})