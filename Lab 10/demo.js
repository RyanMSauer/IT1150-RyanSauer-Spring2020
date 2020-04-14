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

//Homework Lab- Complete Multiplication and Division functionality

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

function compare()
{
    var charlie = 120;
    var john = 120;
    
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

function product()
{
    var x = 25;
    var y = 42;
    var prod = x * y;
    alert("Product Is " + prod);
}

function division()
{
    var x = 48;
    var y = 12;
    var quo = x / y;
    alert(" Each Kid Gets " + quo + " Pencils");
}

function mean()
{
    var num1 = 25
    var num2 = 47
    var num3 = 98
    var num4 = 46
    var num5 = 52
    var ogsum = num1 + num2 + num3 + num4 + num5
    var mean = ogsum/5
    alert("The Mean Is " + mean)
}

function greater()
{
    var ind = 100
    var dep = 1000

    if (ind > dep)
    alert("Yes")

    else if (ind < dep)
    alert("No")
}

function fivexgreater()
{
    var ind = 4
    var modind = ind * 5
    var dep = 20

    if (modind > dep)
    alert("Yes")

    else if (modind < dep)
    alert("No")
}