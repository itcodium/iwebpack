 
import _ from 'lodash';
import printMe from './print.js';
import { cube } from './math.js';
import './styles.css';


if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
 }else{
   console.log('Looks like we are in PRODUCTION mode!');
 }

  function component() {
   var element = document.createElement('div');
   var elementPre = document.createElement('pre');
   
   var btn = document.createElement('button');
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;
   

   elementPre.innerHTML = [
     'Hello webpack!',
     '5 cubed is equal to ' + cube(5)
   ].join('\n\n');

   element.appendChild(btn);
   element.appendChild(elementPre);

    return element;
  }

  
 let element = component(); // Store the element to re-render on print.js changes
 document.body.appendChild(element);


 if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     document.body.removeChild(element);
     element = component(); // Re-render the "component" to update the click handler
     document.body.appendChild(element);

   })
 }
