function scuberGreetingForFeet(t){
  let result;
  if(t <= 400){
  result = 'This one is on me!';
  return result;}
  else if  (t >= 400 & t <= 2000){
 result = 'That will be twenty bucks.'
 return result;}
 else if ( t <=2001){
  result = 'I will gladly take your thirty bucks.'
  return result;}
  else if  (t <=2501)
  result = 'No can do.'
 return result;}
 
 
 


 

function ternaryCheckCity(c){
  return c === 'NYC' ? 'Ok, sounds good.' : 'No go.' 
  
}

function switchOnCharmFromTip(n){
  let result;
  if (n === 'generous'){
    result = 'Thank you so much.'
    return result;
  }
  else if ( n === 'not as generous'){
    result = 'Thank you.'
    return result
  }
  else if (n ='thanks for everything'){
    result = 'Bye.'
    return result
  }
  
}