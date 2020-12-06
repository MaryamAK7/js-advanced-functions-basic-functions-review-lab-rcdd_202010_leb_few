// Your code here
function saturdayFun(activity="roller-skate"){
 
  return "This Saturday, I want to "+activity+"!";
  
}

function mondayWork(activity="go to the office"){
 
  return "This Monday, I will "+activity+".";
  
}

function wrapAdjective(flair="*"){
  
  return function(param="special"){
      return  "You are "+flair+param+flair+"!"; 
  }
}
 let Calculator={
   
   add: function(a,b){
     return a+b;
   },
   subtract: function(a,b){
     return a-b;
   },
   multiply: function(a,b){
     return a*b;
   },
   divide: function(a,b){
     return a/b;
   }
 };
 

  function actionApplyer(ind, fct) {
  let a = ind;

  for (let i = 0; i < fct.length; i++ ){
    a = fct[i](a)
  }

  return a
}

 
 
 