

celebsimgs = ["images/c1.png","images/c2.jpg","images/c3.jpg","images/c4.jpg","images/c5.jpg","images/c6.png","images/c7.png","images/c8.png","images/c9.png","images/c10.png","images/c11.png","images/c12.png","images/c13.png","images/c14.png","images/c15.png"]


movieposters=["https://i.pinimg.com/564x/2b/a7/82/2ba7826b7790d1d892d10d821f5b8934.jpg","https://i.pinimg.com/564x/77/9c/83/779c8343d4ca44c2bc452be26cbb0618.jpg","https://i.pinimg.com/564x/fd/46/12/fd461201f44322f79ad4ff2a51ba84e2.jpg","https://i.pinimg.com/564x/25/fa/24/25fa245a047a68a5695d559aca33247e.jpg","https://i.pinimg.com/564x/f3/5b/8e/f35b8eb20dd9ee2f0acf44721421161b.jpg","https://i.pinimg.com/564x/f3/c1/97/f3c19712b1c945ac1b0c26eeeac36374.jpg","https://i.pinimg.com/564x/c0/8c/24/c08c24ea79c83d930432aeddd44d078e.jpg","https://i.pinimg.com/564x/fc/17/e8/fc17e8451518b3bde696c95d583c1ce7.jpg","https://i.pinimg.com/564x/1e/ab/3f/1eab3fd988fdfec8d6ee892427f48a73.jpg"]


// ================= SETTING THE INITIAL PHOTOS ON GRID===================================================================//

var cbox = document.querySelectorAll(".box");

var elem=[];

document.querySelector(".bg-modal").style.display="none";
document.querySelector(".bg-modal2").style.display="none";

for(var j=0;j<15;j++)
{
    elem[j]= document.createElement("img");

    elem[j].setAttribute("src", celebsimgs[j]);
    elem[j].setAttribute("height", "175");
    elem[j].setAttribute("width", "175");

}


for(var i=0;i<cbox.length;i++)
{
    cbox[i].appendChild(elem[i]);
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

var shuffle1 = document.querySelector("#shuffle");

shuffle1.addEventListener("click",function(){
    celebsphotos(elem,celebsimgs);
});

var celebs = document.querySelector("#celebs");

celebs.addEventListener("click",function(){
        celebsphotos(elem,celebsimgs);
        shuffle1.addEventListener("click",function(){
            celebsphotos(elem,celebsimgs);
        });

});


var movies= document.querySelector("#movies");

movies.addEventListener("click",function(){
    Mchange(elem,movieposters);
    shuffle1.addEventListener("click",function(){
        Mchange(elem,shuffle(movieposters));
    });
});

function celebsphotos(x,y){

    shuffle(y);
    for(var j=0;j<15;j++)
    {
    
        x[j].src= y[j];
    
    }
}

function Mchange(x,z){

    var k=0;
    var i=0;

    for(var j=0;j<15;j++)
    {
        x[j].height=175;
        x[j].width=175;
        if((k!=0))
        {
            if(k!=4)
            {
                x[j].src= z[i];
                i=i+1;
            }
            else{
                x[j].src="https://www.colorhexa.com/fff0f5.png";
            }
    
        }
        else{
            x[j].src= "https://www.colorhexa.com/fff0f5.png";
        }
        if(k==4)
        {
            k=0;
        }
        else{
            k=k+1;
        }
        
    
    }

}

var celebs = document.querySelector("#celebs");

celebs.addEventListener("click",function(){
        options=1;
        celebsphotos(elem,celebsimgs);
});


var movies= document.querySelector("#movies");

movies.addEventListener("click",function(){
    Mchange(elem,movieposters);
});

//================================== ZODIAC OPTION ====================================================================================

function getZodiacSign(day, month) {

  
    if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
        return "CAPRICORN";
    } 
    else if((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return "AQUARIUS";
    } 
    else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "PIECES";
    } 
    else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return "ARIES";
    } 
    else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return "TAURUS";
    } 
    else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "GEMINI";
    } 
    else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return "CANCER"
    } 
    else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return "LEO";
    } 
    else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return "VIRGO";
    } 
    else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return "LIBRA";
    } 
    else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return "SCORPIO";
    } 
    else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return "SAGITTARIUS";

    }
}

var zodiac =document.querySelector("#zodiac");

var bday = document.querySelector("#bday");

bday.addEventListener("change",function(){

    var rawmonth=parseInt(bday.value[5]+bday.value[6]);
    var rawday=parseInt(bday.value[8]+bday.value[9]);

    zodiac.textContent=getZodiacSign(rawday,rawmonth);


});

var quitz = document.querySelector("#quitz")

quitz.addEventListener("click",function(){
    document.querySelector(".bg-modal").style.display="none";
});

var zlaunch = document.querySelector("#zlaunch");

zlaunch.addEventListener("click",function(){
    document.querySelector(".bg-modal").style.display="flex";
});

//============================================== BMI CALCULATOR ======================================================================

var bmi = document.querySelector("#bmi");
var category = document.querySelector("#bmicat");


function bmicalc(weight,height)
{
   
    if(weight > 0 && height > 0){	
        var finalBmi = weight/(height/100*height/100)
        bmi.textContent=finalBmi.toFixed(2);

        if(finalBmi < 18.5){
             category.textContent="UNDERWEIGHT";
        }
        if(finalBmi > 18.5 && finalBmi < 25){
            category.textContent= "NORMAL";
        }
        if(finalBmi > 25){
            category.textContent= "OVERWEIGHT";
        }
    }
    else{
        alert("Please Fill in everything correctly")
    }
}
var w;
var h;
var weightin = document.querySelector("#weight");

weightin.addEventListener("change",function(){
    w=weightin.value;
})

var heightin= document.querySelector("#height");

heightin.addEventListener("change",function(){
    h=heightin.value;
})

var bmicalcb = document.querySelector("#calbmi");

bmicalcb.addEventListener("click",function(){
   
    bmicalc(w,h);
});

var quitb = document.querySelector("#quitb");

quitb.addEventListener("click",function(){
    document.querySelector(".bg-modal2").style.display="none";

})

var bmilaunch = document.querySelector("#bmilaunch");

bmilaunch.addEventListener("click",function(){
    document.querySelector(".bg-modal2").style.display="flex";
})
