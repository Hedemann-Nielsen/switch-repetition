
export function ErrorDisplay(myError, fejl) {
    // console.log(alert, fejl);
 
     switch (myError) {
         case 'alert':
             alert(fejl);
             break;
         case 'error':
             console.error(fejl);
         case 'warning':
             console.warn(fejl);
     
         default:
             break;
     }
 
 }
 
  ErrorDisplay('alert', 'min besked');
 
 
 export function UserFeedback(myError, message, alertFeedback) {
    // console.log('myError', 'message');
 
     let alertElement = document.getElementById(alertFeedback);
      
       switch (myError) {
         case 'fejl':
             alertElement.innerText = `${myError}: ${message}`;
           break;
         case 'advarsel':
             alertElement.innerText = `${myError}: ${message}`;
           break;
         case 'succes':
             alertElement.innerText = `${myError}: ${message}`;
         default:
           break;
       }
     }
   
 
   UserFeedback('fejl','min besked', 'alertFeedback')