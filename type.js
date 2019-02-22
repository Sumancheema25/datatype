function check_datatype(type)
{
    if(type==null)
    {
        console.log("null")
        console.log(type)  
    }
     else if(typeof(type)==='object'&& typeof(type[0])==='object')
    {
        console.log("Array of object")
        type.map((x,i)=>{
            console.log(x);
        })
    }
    else if(typeof(type)=='number')
    {
        console.log("Number")
        console.log(type)
    }
    else if(typeof(type)=='undefined')
    {
        console.log("undefined")
        console.log(type)
    }
    else if(typeof(type)=='string')
    {
        console.log("string")
        console.log(type)
    }
    else if(typeof(type)==='boolean')
    {
        console.log("boolean")
        console.log(type)
    }
    else if(typeof(type)==='NaN')
    {
        console.log("NaN")
        console.log(type)
    }
    else if(typeof(type)==='object'&& typeof(type[0])!=='object' )
    {
        console.log("array")
        type.map((x,i)=>{
            console.log(x);
        })  
    }   
}
a=[1,2,3,4,5];
b =[{"a":1},{"b":2},{"c":3},{"d":4}]
c=7
var r
var e='here'
n=true
var g=1-'a';
check_datatype(a)
check_datatype(b)
check_datatype(c) 
check_datatype(d)
check_datatype(e)
check_datatype(n)
check_datatype(g)