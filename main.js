

class Error{
    constructor(message){
        this.message =message;
        this.name=" Error ";
        // this.stack = <call stack>
    }
}

class convertion_error extends Error{
    constructor(message){
        super(message);
        this.name="convertionError";
    }
}

class reference_error extends Error{
    constructor(message){
        super(message);
        this.name="referenceError";
    }
}


function sum(){

    try{
    var number1=document.getElementById("input1").value;
    var number2=document.getElementById("input2").value;
    
    var regExp = /[a-zA-Z]/g;
    if(regExp.test(number1)){
        throw new reference_error("input is not a Number: err");
    }

    var result = parseInt(number1)+parseInt(number2);

    if(regExp.test(result)){
        throw new convertion_error("Value converted to NaN");
    }

    document.getElementById("result").value = result;

    }catch(err){
        if(err instanceof reference_error){
            alert("reference_error: "+ err.message);
        }
        else if (err instanceof convertion_error){
            alert("convertion_error: "+ err.message);
        }else{
            throw err;
        }
    }finally{
            console.log('The calculator is working...');
        }
}


window.onerror = function (errorMsg, url, lineNumber) {
    alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber);
}


function console_log(){
    console.log('error!')
}

function console_error(){
    const a = 10;
    const b = 4;
    const text = 'b must larger than a';
    console.assert(a < b, {a, b, text});
}

function console_table(){
    console.table([
        {
          first: 'first try',
          result : '9',
        },
        {
          first: 'second try',
          result : '35',
        },
        {
          first: 'second try',
          result : '18',
        }
      ]);
}

function console_dir(){
    console.dir(document.head);
}

function console_dirxml(){
    console.dirxml(document);
}


function console_group(){
    const label="alphebetical order" 
    console.group(label);
    console.info('A');
    console.info('B');
    console.info('C');
    console.groupEnd(label);
}


function console_time(){
    console.time();
    for (let y = 0; y < 100; y++) {
      var square = y ** 3;
    }
    console.timeEnd();
}



function console_trace(){
    const begin= () => { middle(); };
    const middle = () => { last(); };
    const last = () => { console.trace(); };
    begin();
}

