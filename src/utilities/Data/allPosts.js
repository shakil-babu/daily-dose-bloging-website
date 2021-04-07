
export const javascriptPost = [
    {
        date:'January 13, 2021',
        time:'10 min',
        id:"class",
        title:"JavaScript Classes",
        p1:'In JavaScript, classes are the special type of functions. We can define the class just like function declarations and function expressions.The JavaScript class contains various class members within a body including methods or constructor. The class is executed in strict mode. ',
        p2:'So, the code containing the silent error or mistake throws an error.The class syntax contains two components: 1.Class declarations 2.Class expressions',
        p3:"1.Class Declarations Example:Let's see a simple example of declaring the class.",
        p4:"2.Class Declarations Example: Hoisting.Unlike function declaration, the class declaration is not a part of JavaScript hoisting. So, it is required to declare the class before invoking it.Let's see an example.",
        p5:"We can express the class with the particular name. Here, the scope of the class name is up to the class body. The class is retrieved using class.name property.Unlike class declaration, the class expression allows us to re-declare the same class.",
        code1:true,
        badge:'JavaScript',
        code2:true,
        example:"Class Example: ",
        code3:false,
        c1:`<script>  
    //Declaring class  
    class Employee  
      {  
    //Initializing an object  
        constructor(id,name)  
        {  
          this.id=id;  
          this.name=name;  
        }  
    //Declaring method  
        detail()  
        {  
      document.writeln(this.id+" "+this.name+"<br>")  
        }  
      }  
    //passing object to a variable   
    var e1=new Employee(101,"Martin Roy");  
    var e2=new Employee(102,"Duke William");  
    e1.detail(); //calling method  
    e2.detail();  
</script> `,
    c2:`<script>  
//Declaring class  
class Employee  
  {  
//Initializing an object  
    constructor(id,name)  
    {  
      this.id=id;  
      this.name=name;  
    }  
    detail()  
    {  
  document.writeln(this.id+" "+this.name+"<br>")  
    }  
  }  
//passing object to a variable   
var e1=new Employee(101,"Martin Roy");  
var e2=new Employee(102,"Duke William");  
e1.detail(); //calling method  
e2.detail();  
//Re-declaring class  
class Employee  
  {  
  }  
</script> `
    },
    {
      date:'January 15, 2021',
      time:'14 min',
        id:"encaptualations",
        title:"JavaScript Encapsulation",
        p1:'The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data. It allows us to control the data and validate it. To achieve an encapsulation in JavaScript: Use var keyword to make data members privateUse setter methods to set the data and getter methods to get that data',
        p2:'The encapsulation allows us to handle an object using the following properties.Read/Write - Here, we use setter methods to write the data and getter methods read that data.Read Only - In this case, we use getter methods only.Write Only - In this case, we use setter methods only.',
        p3:"JavaScript Encapsulation ExampleLet's see a simple example of encapsulation that contains two data members with its setter and getter methods. ",
        p4:"JavaScript Encapsulation Example: Validate.In this example, we validate the marks of the student.",
        p5:"The JavaScript Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data. It allows us to control the data and validate it.",
        code1:true,
        badge:'JavaScript',
        code2:true,
        code3:false,
        example:"Encapsulation example",
        c1:`<script>  
    class Student  
      {  
        constructor()  
        {  
           var name;  
           var marks;  
        }  
            getName()  
            {  
              return this.name;  
            }  
          setName(name)  
          {  
            this.name=name;  
          }  
            
          getMarks()  
          {  
            return this.marks;  
          }  
        setMarks(marks)  
        {  
          this.marks=marks;  
        }  
      
        }  
        var stud=new Student();  
         stud.setName("John");  
         stud.setMarks(80);  
         document.writeln(stud.getName()+" "+stud.getMarks());  
</script>  `,
        c2:`<script>  
    class Student  
      {  
        constructor()  
        {  
           var name;  
           var marks;  
        }  
            getName()  
            {  
              return this.name;  
            }  
          setName(name)  
          {  
            this.name=name;  
          }  
            
          getMarks()  
          {  
            return this.marks;  
          }  
        setMarks(marks)  
        {  
            if(marks<0||marks>100)  
            {  
              alert("Invalid Marks");  
            }  
          else  
            {  
              this.marks=marks;  
            }  
        }  
        }  
        var stud=new Student();  
         stud.setName("John");  
         stud.setMarks(110);//alert() invokes  
         document.writeln(stud.getName()+" "+stud.getMarks());  
</script>  `
    },
    {
      date:'february 13, 2021',
      time:'12 min',
        id:"polymorphism",
        title:"JavaScript Polymorphism",
        p1:'The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms.',
        p2:'It provides an ability to call the same method on different JavaScript objects. As JavaScript is not a type-safe language, we can pass any type of data members with the methods. ',
        p3:" Example 1: Let's see an example where a child class object invokes the parent class method.",
        p4:"Example: 2 Let's see an example where a child and parent class contains the same method. Here, the object of child class invokes both classes method.",
        p5:"The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms.",
        other:"Example 3: Let's see the same example with prototype-based approach.",
        code1:true,
        badge:'JavaScript',
        code2:true,
        example:"JavaScript Polymorphism Example:",
        code3:true,
        c1:`<script>  
class A  
  {  
     display()  
    {  
      document.writeln("A is invoked");  
    }  
  }  
class B extends A  
  {  
  }  
var b=new B();  
b.display();  
</script> `,
        c2:`<script>  
class A  
  {  
     display()  
    {  
      document.writeln("A is invoked<br>");  
    }  
  }  
class B extends A  
  {  
    display()  
    {  
      document.writeln("B is invoked");  
    }  
  }  
  
var a=[new A(), new B()]  
a.forEach(function(msg)  
{  
msg.display();  
});  
</script> `,
c3:`<script>  
function A()  
{  
}  
A.prototype.display=function()  
{  
  return "A is invoked";  
}  
function B()  
{  
    
}  
  
B.prototype=Object.create(A.prototype);  
  
var a=[new A(), new B()]  
  
a.forEach(function(msg)  
{  
  document.writeln(msg.display()+"<br>");  
});  
<script> `
    },
    {
      date:'January 24, 2021',
      time:'23 min',
        id:"abstraction",
        title:"JavaScript Abstraction",
        p1:'An abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one.',
        p2:'Points to remember. 1.We cannot create an instance of Abstract Class. 2.It reduces the duplication of code.',
        p3:"Example 1 - Let's check whether we can create an instance of Abstract class or not.",
        p4:"Example 2 - Let's see an example to achieve abstraction.",
        p5:"An abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one",
        other:"Example 3 - In this example, we use instanceof operator to test whether the object refers to the corresponding class.",
        code1:true,
        badge:'JavaScript',
        code2:true,
        example:"JavaScript Abstraction Example.",
        code3:true,
        c1:`<script>  
//Creating a constructor function  
function Vehicle()  
{  
    this.vehicleName= vehicleName;  
    throw new Error("You cannot create an instance of Abstract class");  
  
}  
Vehicle.prototype.display=function()  
{  
    return this.vehicleName;  
}  
var vehicle=new Vehicle();  
 </script> `,
        c2:`<script>  
//Creating a constructor function  
 function Vehicle()  
{  
    this.vehicleName="vehicleName";  
    throw new Error("You cannot create an instance of Abstract Class");  
}  
Vehicle.prototype.display=function()  
{  
    return "Vehicle is: "+this.vehicleName;  
}  
//Creating a constructor function  
function Bike(vehicleName)  
{  
    this.vehicleName=vehicleName;  
}  
//Creating object without using the function constructor  
Bike.prototype=Object.create(Vehicle.prototype);  
var bike=new Bike("Honda");  
document.writeln(bike.display());  
  
  
 </script> `,
        c3:`<script>  
    //Creating a constructor function  
     function Vehicle()  
    {  
        this.vehicleName=vehicleName;  
        throw new Error("You cannot create an instance of Abstract class");  
    }  
    //Creating a constructor function  
    function Bike(vehicleName)  
    {  
        this.vehicleName=vehicleName;  
    }  
    Bike.prototype=Object.create(Vehicle.prototype);  
    var bike=new Bike("Honda");  
    document.writeln(bike instanceof Vehicle);  
    document.writeln(bike instanceof Bike);  
      
</script>  `
    },
     {
      date:'January 12, 2021',
      time:'23 min',
        id:"inheritance",
        title:"JavaScript Inheritance",
        p1:'The JavaScript inheritance is a mechanism that allows us to create new classes on the basis of already existing classes. It provides flexibility to the child class to reuse the methods and variables of a parent class.The JavaScript extends keyword is used to create a child class on the basis of a parent class. It facilitates child class to acquire all the properties and behavior of its parent class',
        p2:'Points to remember: (1).It maintains an IS-A relationship (2).The extends keyword is used in class expressions or class declarations. (3).We can also use a prototype-based approach to achieve inheritance. ',
        p3:"Javscript Extends example: In this example, we extends Date object to display today's date.",
        p4:"Custom class example: In this example, we declare sub-class that extends the properties of its parent class.",
        p5:"The JavaScript inheritance is a mechanism that allows us to create new classes on the basis of already existing classes. It provides flexibility to the child class to reuse the methods and variables of a parent class.",
        other:"a Prototype-based approach. Here, we perform prototype-based inheritance. In this approach, there is no need to use class and extends keywords.",
        code1:true,
        badge:'JavaScript',
        code2:true,
        code3:true,
        example:"JavaScript Inheritance Exmaple: ",
        c1:`<script>  
    class Moment extends Date {  
      constructor() {  
        super();  
      }}  
    var m=new Moment();  
    document.writeln("Current date:")  
    document.writeln(m.getDate()+"-"+(m.getMonth()+1)+"-"+m.getFullYear());  
</script>  `,
        c2:`<script>  
    class Bike  
    {  
      constructor()  
      {  
        this.company="Honda";  
      }  
    }  
    class Vehicle extends Bike {  
      constructor(name,price) {  
       super();  
        this.name=name;  
        this.price=price;  
      }   
    }  
    var v = new Vehicle("Shine","70000");  
    document.writeln(v.company+" "+v.name+" "+v.price);  
</script>  `,
        c3:`<script>  
    //Constructor function  
    function Bike(company)  
    {  
        this.company=company;   
    }  
      
    Bike.prototype.getCompany=function()  
    {  
      return this.company;  
    }  
    //Another constructor function  
    function Vehicle(name,price) {  
     this.name=name;  
      this.price=price;  
      }   
    var bike = new Bike("Honda");  
    Vehicle.prototype=bike; //Now Bike treats as a parent of Vehicle.  
    var vehicle=new Vehicle("Shine",70000);  
    document.writeln(vehicle.getCompany()+" "+vehicle.name+" "+vehicle.price);  
</script>  `
    },
     {
      date:'March 13, 2021',
      time:'10 min',
        id:"static",
        title:"JavaScript static Method",
        p1:'The JavaScript provides static methods that belong to the class instead of an instance of that class. So, an instance is not required to call the static method. These methods are called directly on the class itself.',
        p2:'Points to remember:- 1. The static keyword is used to declare a static method. 2. The static method can be of any name. 3. A class can contain more than one static method.',
        p3:"JavaScript static Method Example 1:- Let's see a simple example of a static method.",
        p4:"Example 2: Le's see an example to invoke more than one static method.",
        p5:"The JavaScript provides static methods that belong to the class instead of an instance of that class. So, an instance is not required to call the static method. These methods are called directly on the class itself.",
        other:"Example 3:- Let's see an example to invoke more than one static method with similar names.",
        example:"JavaScript static Method Example:",
        code1:true,
        badge:'JavaScript',
        code2:true,
        code3:false,
        c1:`<script>  
    class Test  
    {  
      static display()  
      {  
        return "static method is invoked"  
      }  
    }  
    document.writeln(Test.display());  
</script>  `,
        c2:`<script>  
    class Test  
    {  
      static display1()  
      {  
        return "static method is invoked"  
      }  
      static display2()  
      {  
        return "static method is invoked again"  
      }  
    }  
    document.writeln(Test.display1()+"<br>");  
    document.writeln(Test.display2());  
</script>  `,
        c3:`<script>  
    class Test  
    {  
      static display()  
      {  
        return "static method is invoked"  
      }  
      static display()  
      {  
        return "static method is invoked again"  
      }  
    }  
    document.writeln(Test.display());  
</script>  `
    }
]



// =====================================================
// ====================================================================
// =======================
// =================================== node.js data

export const nodejsPost = [
    {
      date:'February 23, 2021',
      time:'12 min',
        id:"timer",
        title:"Node.js Timer",
        p1:"Node.js Timer functions are global functions. You don't need to use require() function in order to use timer functions. Let's see the list of timer functions.",
        p2:'Set timer functions:- 1.setImmediate(): It is used to execute setImmediate. 2.setInterval(): It is used to define a time interval. 3.setTimeout(): ()- It is used to execute a one-time callback after delay milliseconds.',
        p3:"Node.js Timer setInterval() Example: This example will set a time interval of 1000 millisecond and the specified comment will be displayed after every 1000 millisecond until you terminate. ",
        p4:"Node.js setInterval(), setTimeout() and clearTimeout(): Let's see an example to use clearTimeout() function.",
        p5:"Node.js Timer functions are global functions. You don't need to use require() function in order to use timer functions. Let's see the list of timer functions.",
        other:"Node.js setInterval(), setTimeout() and clearInterval(): Let's see an example to use clearInterval() function.",
        example:"Node.js Timer Example:",
        code1:true,
        badge:'Node.js',
        code2:true,
        code3:true,
        c1:`setInterval(function() {  
     console.log("setInterval: Hey! 1 millisecond completed!..");   
}, 1000);  `,
        c2:`function welcome () {  
  console.log("Welcome to JavaTpoint!");  
}  
var id1 = setTimeout(welcome,1000);  
var id2 = setInterval(welcome,1000);  
clearTimeout(id1);  `,
        c3:`function welcome () {  
      console.log("Welcome to JavaTpoint!");  
    }  
    var id1 = setTimeout(welcome,1000);  
    var id2 = setInterval(welcome,1000);  
    //clearTimeout(id1);  
clearInterval(id2);  `
    },

    {
      date:'January 26, 2021',
      time:'19 min',
        id:"errors",
        title:"Node.js Errors",
        p1:'The Node.js applications generally face four types of errors: Standard JavaScript errors i.e. <EvalError>, <SyntaxError>, <RangeError>, <ReferenceError>, <TypeError>, <URIError> etc.',
        p2:'Some of Errors like this:- 1.System errors  2.User-specified errors 3.Assertion errors',
        p3:"Node.js Errors Example 1Let's take an example to deploy standard JavaScript error - ReferenceError.",
        p4:"Node.js Errors Example 2:",
        p5:"The Node.js applications generally face four types of errors:",
        other:"",
        example:"Node.js Errors Example: ",
        code1:true,
        badge:'Node.js',
        code2:true,
        code3:false,
        c1:`// Throws with a ReferenceError because b is undefined  
    try {  
      const a = 1;  
      const c = a + b;  
    } catch (err) {  
      console.log(err);  
}  `,
        c2:`const fs = require('fs');  
    function nodeStyleCallback(err, data) {  
     if (err) {  
       console.error('There was an error', err);  
       return;  
     }  
     console.log(data);  
    }  
    fs.readFile('/some/file/that/does-not-exist', nodeStyleCallback);  
fs.readFile('/some/file/that/does-exist', nodeStyleCallback);  `,
        c3:``
    },

    {
      date:'April 4, 2021',
      time:'10 min',
        id:"npm",
        title:"Node.js Package Manager",
        p1:'Node Package Manager provides two main functionalities:It provides online repositories for node.js packages/modules which are searchable on search.nodejs.org',
        p2:'It also provides command line utility to install Node.js packages, do version management and dependency management of Node.js packages.The npm comes bundled with Node.js installables in versions after that v0.6.3. ',
        p3:"Installing Modules using npm: Following is the syntax to install any Node.js module:",
        p4:"Global vs Local Installation:  By default, npm installs dependency in local mode. Here local mode specifies the folder where Node application is present. For example if you installed express module, it created node_modules directory in the current directory where it installed express module.",
        p5:"Node package manager is a online repositories for node.js packages/modules which are searchable on search.nodejs.org",
        other:"",
        example:"Some of instructions: ",
        code1:true,
        badge:'Node.js',
        code2:true,
        code3:false,
        c1:`npm install <Module Name>
npm install express`,
        c2:` // with global
npm install express -g
// with local
npm install express`,
        c3:``
    },
    {
      date:'February 03, 2021',
      time:'18 min',
        id:"properties",
        title:"Node.js Process",
        p1:'Node.js provides the facility to get process information such as process id, architecture, platform, version, release, uptime, upu usage etc. It can also be used to kill process, set uid, set groups, unmask etc.The process is a global object, an instance of EventEmitter, can be accessed from anywher',
        p2:'Node.js Process Properties. A list of commonly used Node.js process properties are given below. arch, args, env,pid,platform,release, version, versions etc.',
        p3:"Node.js Process Properties Example.Let's see the simple process example to print architecture, pid, platform and version of the process.",
        p4:"Node.js Process Functions Example.Let's see the process example to print current working directory and uptime of the process.",
        p5:"Hope you enjoy and got about it. thanks a million to see read this post.",
        other:"",
        example:"Node.js Process Examples : ",
        code1:true,
        badge:'Node.js',
        code2:true,
        code3:false,
        c1:`console.log('Process Architecture: ${process.arch}');  
    console.log('Process PID: ${process.pid}');  
    console.log('Process Platform: ${process.platform}'');  
console.log('Process Version: ${process.version}');  `,
        c2:`console.log('Current directory: ${process.cwd()}');  
console.log("Uptime:";  `,
        c3:``
    },
    {
      date:'January 19, 2021',
      time:'21 min',
        id:"repl",
        title:"Node.js REPL",
        p1:'The term REPL stands for Read Eval Print and Loop. It specifies a computer environment like a window console or a Unix/Linux shell where you can enter the commands and the system responds with an output in an interactive mode. ',
        p2:'REPL Environment. The Node.js or node come bundled with REPL environment. Each part of the REPL environment has a specific work.',
        p3:"How to start REPL? ou can start REPL by simply running  on the command prompt. See this:",
        p4:"Node.js Simple expressions.After starting REPL node command prompt put any mathematical expression:",
        p5:"",
        other:"Using variable. Variables are used to store values and print later. If you don't use var keyword then value is stored in the variable and printed whereas if var keyword is used then value is stored but not printed. You can print variables using console.log().",
        example:"Node.js REPL Example: ",
        code1:true,
        badge:'Node.js',
        code2:true,
        code3:true,
        c1:`// Your encironment has been set.
C:users/javascript>cd desktop>node`,
        c2:`Example: >10+20-5  
25  
Example2: >10+12 + (5*4)/7  `,
        c3:`>a=50
50
>var b= 50
undefined
>a+b
100`
    }
]



// =====================================================
// ====================================================================
// =======================
// =================================== express.js data

export const expressjsPost = [
   {
    date:'January 23, 2021',
    time:'10 min',
        id:"requ-object",
        title:"Express.js Request Object",
        p1:'Express.js Request and Response objects are the parameters of the callback function which is used in Express applications.',
        p2:'The express.js request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.',
        p3:"eq.accepts (types). This method is used to check whether the specified content types are acceptable, based on the request's Accept HTTP header field.",
        p4:"req.get(field). This method returns the specified HTTP request header field.",
        p5:"Thank you everyone to read this post . hope you got and enjoy it thanks a million.",
        other:'req.is(type) . This method returns true if the incoming request "Content-Type" HTTP header field matches the MIME type specified by the type parameter.',
        example:"Some of UseCase: ",
        code1:true,
        badge:'Express.js',
        code2:true,
        code3:false,
        c1:`req.accepts('html');  
//=>?html?  
req.accepts('text/html');  
// => ?text/html? `,
        c2:`req.get('Content-Type');  
    // => "text/plain"  
    req.get('content-type');  
    // => "text/plain"  
    req.get('Something');  
// => undefined  `,
        c3:`// With Content-Type: text/html; charset=utf-8  
    req.is('html');  
    req.is('text/html');  
    req.is('text/*');  
// => true  `
    },
     {
      date:'March 13, 2021',
      time:'10 min',
        id:"get",
        title:"Express.js GET Request",
        p1:"GET and POST both are two common HTTP requests used for building REST API's. GET requests are used to send only limited amount of data because data is sent into header while POST requests are used to send large amount of data because data is sent in the body.",
        p2:'Express.js facilitates you to handle GET and POST requests using the instance of express.',
        p3:"Express.js GET Method Example 1. Fetch data in JSON format:Let's take an example to demonstrate GET method.",
        p4:"Express.js GET Method Example 2.",
        p5:"Get method facilitates you to send only limited amount of data because data is sent in the header.",
        other:"",
        example:"Get Method Example:",
        code1:true,
        badge:'Express.js',
        code2:true,
        code3:false,
        c1:` // html file
<html>  
    <body>  
    <form action="http://127.0.0.1:8081/process_get" method="GET">  
    First Name: <input type="text" name="first_name">  <br>  
    Last Name: <input type="text" name="last_name">  
    <input type="submit" value="Submit">  
    </form>  
    </body>  
</html>  

// js file
var express = require('express');  
var app = express();  
app.use(express.static('public'));  
  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
app.get('/process_get', function (req, res) {  
response = {  
       first_name:req.query.first_name,  
       last_name:req.query.last_name  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})  
var server = app.listen(8000, function () {  
  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
  
}) `,
        c2:`// index.html
<html>  
<body>  
<form action="http://127.0.0.1:8000/get_example2" method="GET">  
First Name: <input type="text" name="first_name"/>  <br/>  
Last Name: <input type="text" name="last_name"/><br/>  
<input type="submit" value="Submit"/>  
</form>  
</body>  
</html>

// index.js
    var express = require('express');  
    var app=express();  
    app.get('/get_example2', function (req, res) {  
    res.send('<p>Username: ' + req.query['first_name']+'</p><p>Lastname: '+req.query['last_name']+'</p>');  
    })  
    var server = app.listen(8000, function () {  
      var host = server.address().address  
      var port = server.address().port  
      console.log("Example app listening at http://%s:%s", host, port)  
})  `,
        c3:``
    },

     {
      date:'February 23, 2021',
      time:'15 min',
        id:"post",
        title:"Express.js POST Request",
        p1:"GET and POST both are two common HTTP requests used for building REST API's. POST requests are used to send large amount of data.",
        p2:'Post method facilitates you to send large amount of data because data is send in the body. Post method is secure because data is not visible in URL bar but it is not used as popularly as GET method. On the other hand GET method is more efficient and used more than POST.',
        p3:"Let's take an example to demonstrate POST method. Example-1:",
        p4:"",
        p5:"GET and POST both are two common HTTP requests used for building REST API's. POST requests are used to send large amount of data",
        other:"",
        example:"Express.js POST Request Example:",
        code1:true,
        badge:'Express.js',
        code2:false,
        code3:false,
        c1:`// index.html
<html>  
    <body>  
    <form action="http://127.0.0.1:8000/process_post" method="POST">  
    First Name: <input type="text" name="first_name">  <br>  
    Last Name: <input type="text" name="last_name">  
    <input type="submit" value="Submit">  
    </form>  
    </body>  
</html>  

// index.js
var express = require('express');  
var app = express();  
var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.static('public'));  
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
app.post('/process_post', urlencodedParser, function (req, res) {  
   // Prepare output in JSON format  
   response = {  
       first_name:req.body.first_name,  
       last_name:req.body.last_name  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})  
var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
}) `,
        c2:``,
        c3:``
    },
     {
      date:'January 29, 2021',
      time:'10 min',
        id:"middleware",
        title:"Express.js Middleware",
        p1:'Express.js Middleware are different types of functions that are invoked by the Express.js routing layer before the final request handler. As the name specified, Middleware appears in the middle between an initial request and final intended route. In stack, middleware functions are always invoked in the order in which they are added. ',
        p2:'Middleware functions are the functions that access to the request and response object (req, res) in request-response cycle. ',
        p3:"Let's take an example to understand what middleware is and how it works. Example:1",
        p4:"Use of Express.js Middleware: example:2",
        p5:"In the above middleware example a new function is used to invoke with every request via app.use().",
        other:"",
        example:"Express.js Middleware Example:",
        code1:true,
        badge:'Express.js',
        code2:true,
        code3:false,
        c1:`// express.js
var express = require('express');  
    var app = express();  
      
    app.get('/', function(req, res) {  
      res.send('Welcome to JavaTpoint!');  
    });  
    app.get('/help', function(req, res) {  
      res.send('How can I help You?');  
    });  
    var server = app.listen(8000, function () {  
      var host = server.address().address  
      var port = server.address().port  
    console.log("Example app listening at http://%s:%s", host, port)  
})  `,
        c2:`// middlewares.js
var express = require('express');  
var app = express();  
app.use(function(req, res, next) {  
  console.log('%s %s', req.method, req.url);  
  next();  
});  
app.get('/', function(req, res, next) {  
  res.send('Welcome to JavaTpoint!');  
});  
app.get('/help', function(req, res, next) {  
  res.send('How can I help you?');  
});  
var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
}) `,
        c3:``
},
{
  date:'May 13, 2021',
  time:'10 min',
        id:"scaffolding",
        title:"Express.js Scaffolding",
        p1:'Scaffolding is a technique that is supported by some MVC frameworks. It is mainly supported by the following frameworks:',
        p2:'Ruby on Rails,OutSystems Platform, Express Framework, Play framework, Django, MonoRail, Brail, Symfony, Laravel, CodeIgniter, Yii, CakePHP, Phalcon PHP, Model-Glue, PRADO, Grails, Catalyst, Seam Framework, Spring Roo, ASP.NET etc.',
        p3:"Let's take an example: Example:",
        p4:"",
        p5:"Open Node.js command prompt, go to myapp and run npm init command (In my case, I have created myapp folder on desktop)",
        other:"",
        example:"Express.js Scaffolding Example: ",
        code1:true,
        badge:'Express.js',
        code2:false,
        code3:false,
        c1:`var express = require('express');  
    var app = express();  
    app.get('/', function (req, res) {  
      res.send('Welcome to JavaTpoint!');  
    });  
    app.listen(8000, function () {  
      console.log('Example app listening on port 8000!');  
});  `,
        c2:``,
        c3:``
    }
       
]




// =====================================================
// ====================================================================
// =======================
// =================================== C data



export const cPost = [

     {
      date:'April 13, 2021',
      time:'10 min',
        id:"strcat",
        title:"C String Concatenation: strcat()",
        p1:'C String Concatenation: strcat() explanation: ',
        p2:'The strcat(first_string, second_string) function concatenates two strings and result is returned to first_string.',
        example:"Examples: ",
        code1:true,
        badge:'C',
        c1:`#include<stdio.h>  
#include <string.h>    
int main(){    
  char ch[10]={'h', 'e', 'l', 'l', 'o', '\0'};    
   char ch2[10]={'c', '\0'};    
   strcat(ch,ch2);    
   printf("Value of first string is: %s",ch);    
 return 0;    
}  `,
        c2:`// output
Value of first string is: helloc`,

    },
     {
      date:'June 13, 2021',
      time:'10 min',
        id:"strcpy",
        title:"C Copy String: strcpy()",
        p1:'strcpy() function declaration.',
        p2:'The strcpy(destination, source) function copies the source string in destination.',
        example:"Examples: ",
        code1:true,
        badge:'C',
        c1:`#include<stdio.h>  
#include <string.h>    
int main(){    
 char ch[20]={'j', 'a', 'v', 'a', 't', 'p', 'o', 'i', 'n', 't', '\0'};    
   char ch2[20];    
   strcpy(ch2,ch);    
   printf("Value of second string is: %s",ch2);    
 return 0;    
}  `,
        c2:`// output
Value of second string is: javatpoint`,
    },
     {
      date:'January 14, 2021',
      time:'10 min',
        id:"strlen",
        title:"C String Length: strlen() function",
        p1:'strlen() function explanation.',
        p2:"The strlen() function returns the length of the given string. It doesn't count null character '\0'.",
        example:"Example",
        code1:true,
        badge:'C',
        c1:`#include<stdio.h>  
#include <string.h>    
int main(){    
char ch[20]={'j', 'a', 'v', 'a', 't', 'p', 'o', 'i', 'n', 't', '\0'};    
   printf("Length of string is: %d",strlen(ch));    
 return 0;    
} `,
        c2:`// output
Length of string is: 10`,
    },
    {
      date:'May 13, 2021',
      time:'20 min',
        id:"strcmp",
        title:"C Compare String: strcmp()",
        p1:'strcmp() method :',
        p2:'The strcmp(first_string, second_string) function compares two string and returns 0 if both strings are equal.Here, we are using gets() function which reads string from the console.',
        example:"Example:",
        code1:true,
        badge:'C',
        c1:`#include<stdio.h>  
#include <string.h>    
int main(){    
  char str1[20],str2[20];    
  printf("Enter 1st string: ");    
  gets(str1);//reads string from console    
  printf("Enter 2nd string: ");    
  gets(str2);    
  if(strcmp(str1,str2)==0)    
      printf("Strings are equal");    
  else    
      printf("Strings are not equal");    
 return 0;    
}`,
        c2:`// output
Enter 1st string: hello
Enter 2nd string: hello
Strings are equal`,
    },
    {
      date:'December 13, 2020',
      time:'28 min',
        id:"strrev",
        title:"C Reverse String: strrev()",
        p1:'About strrev()',
        p2:"The strrev(string) function returns reverse of the given string. Let's see a simple example of strrev() function.",
        example:"Example:",
        code1:true,
        badge:'C',
        c1:`#include<stdio.h>  
#include <string.h>    
int main(){    
  char str[20];    
  printf("Enter string: ");    
  gets(str);//reads string from console    
  printf("String is: %s",str);    
  printf("\nReverse String is: %s",strrev(str));    
 return 0;    
}  `,
        c2:`// output
Enter string: javatpoint
String is: javatpoint
Reverse String is: tnioptavaj`,
    },
    {
      date:'December 19, 2021',
      time:'30 min',
        id:"strlwr",
        title:"C String Lowercase: strlwr()",
        p1:'about strlwr()',
        p2:"The strlwr(string) function returns string characters in lowercase. Let's see a simple example of strlwr() function.",
        example:"Example:",
        code1:true,
        badge:'C',
        c1:`#include<stdio.h>  
#include <string.h>    
int main(){    
  char str[20];    
  printf("Enter string: ");    
  gets(str);//reads string from console    
  printf("String is: %s",str);    
  printf("\nLower String is: %s",strlwr(str));    
 return 0;    
}  `,
        c2:`// output
Enter string: JAVATpoint
String is: JAVATpoint
Lower String is: javatpoint`,
    }
]




// =======================================================
//===============================
//======================== all data randomly show

export const allRandomData = [...javascriptPost, ...nodejsPost , ...expressjsPost, ...cPost].sort((a,b) => Math.random() -0.5);

// all data
export const allPost = [...cPost, ...nodejsPost, ...javascriptPost, expressjsPost];