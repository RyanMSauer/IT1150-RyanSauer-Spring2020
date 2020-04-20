//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract()
{
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is" + diff);
}

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+ y); 

}

/* JS statements
Conditional statements:
If statement
Switch statement
*/

function compare()
{
    var charlie = 162;
    var john = 135;
    
    //conditional if statement
    
    if (charlie > john)
    {
        alert("Charlie is taller");
    }
    else if( charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else
    {
        alert("John is taller");
    }

}

function IsTropical(fruit)//fruit is a variable and is an input parameter
{
    
    var isTropical = false; //boolean variable: True or False

    switch(fruit)
    {
        case "banana":
            isTropical = true;
            break;

        case "papaya":
            isTropical = true;
            break;

        case "tomato":
            isTropical = false;
            break;

        case "mango":
            isTropical = true;
            break;

        case "watermelon":
            isTropical = true;
            break;

        default:
            isTropical = false;            
    }

    alert("Is "+ fruit+ " tropical?"+ isTropical );

}

/*
Loops:
For loop
While loop
Do while loop
Break
*/

function Repeat( message )
{
    var counter = 0;
    console.log("While loop:");
    while (counter < 5)
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    }

    counter = 0;
    console.log("Do - While loop:");
    do 
    {
        console.log( message );
        counter++; //You have to remember to increment the counter otherwise the loop will go on endlessly
    } while (counter < 5);

    console.log("For loop:");
    /************************************************* */
    for(var counter=0; counter < 5; counter++)
    {
        console.log(message);
    }
}

function CountMultiples(num)
{
    var totalMultiples = 0;

    for(var i=1;i<=100;i++)
    {
        if (i % num == 0)//This means it is a multiple
            totalMultiples++;
    }
    console.log("Total multiples of "+ num + " = "+totalMultiples);
}

function DisplayTriangle(num)
{
    var strRow="";
    var totalStars=0;
    for (var i=1;i<=num;i++){        
        strRow = ""      ;//Reset strRow
        for (var j=1; j<=i;j++){
            strRow = strRow + "*";
            totalStars++;
        }        
        //Now we have a row. Lets display the row
        console.log(strRow);     
    }
    return totalStars;
}

function CountStarsInTriangle(num)
{
    var total = DisplayTriangle(num);
    console.log("Total starts in a triangle with "+ num + " rows = "+ total);
}

function sumodd()
{
    var tot = 0;
    var count = 0;

        for(var i=6; i<150; i++)
        {
            if(count == 50)
            {
                break;
            }
            
            else if(i % 2 == 1)
            {
               tot = tot + i
               count++
            }
        }   
        alert("The sum of 50 odd numbers is " + tot);
}

function  grading(inputGrade)
{
    var trim = inputGrade % 10
    var gradeCat = (inputGrade - trim) / 10
    var isGrade;

    switch(gradeCat)
    {
        case 10:
        case 9:
            isGrade = "A"
            break;
        case 8:
            isGrade = "B"
            break;
        case 7:
            isGrade = "C"
            break;
        case 6:
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            isGrade = "F"
            break;
    }
    alert("Your grade is " + isGrade)
}

function multiples()
{
    var counter = 0

    for (var i=1; i<200; i++)
    {
        if (i%13==0)
        {
            console.log(i)
            counter ++
        }     			
    }
    console.log("There are " + counter + " multiples of 13 between 1 and 200")
}

function triangleAB(num)
{
    var strRow = "";
    var totA = 0;
    var totB = 0;
    
    for (var i=1;i<=num;i++){        
        strRow = "";
        for (var j=1; j<=i;j++)
        {
            if(j % 2 == 0)
            {
                strRow = strRow + "B";
                totB++;    
            }
            else if (j % 2 == 1)
            {
                strRow = strRow + "A";
                totA++;    
            }
        }        
        console.log(strRow);     
    }
    return
    {
        totA
        totB
    }
}

function countAB(num)
{
    var strRow = "";
    var totA = 0;
    var totB = 0;
    
    for (var i=1;i<=num;i++){        
        strRow = "";
        for (var j=1; j<=i;j++)
        {
            if(j % 2 == 0)
            {
                strRow = strRow + "B";
                totB++;    
            }
            else if (j % 2 == 1)
            {
                strRow = strRow + "A";
                totA++;    
            }
        }          
}
console.log("There are " + totA + " A's and " + totB + " B's");
}