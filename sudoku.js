let row_one=new Set();
let row_two=new Set();
let row_three=new Set();
let row_four=new Set();
let row_five=new Set();
let row_six=new Set();
let row_seven=new Set();
let row_eight=new Set();
let row_nine=new Set();
let col_one=new Set();
let col_two=new Set();
let col_three=new Set();
let col_four=new Set();
let col_five=new Set();
let col_six=new Set();
let col_seven=new Set();
let col_eight=new Set();
let col_nine=new Set();
let values=[]
let variable;
let unKnown;
const dictionary={
    1:'block__1',
    2:'block__2',
    3:'block__3',
    4:'block__4',
    5:'block__5',
    6:'block__6',
    7:'block__7',
    8:'block__8',
    9:'block__9'
}
const dictionary_one={
    1:col_one,
    2:col_two,
    3:col_three,
    4:col_four,
    5:col_five,
    6:col_six,
    7:col_seven,
    8:col_eight,
    9:col_nine
}
window.onload = reset();
function sanitize(){
    let count=0;
    for(let i=1;i<82;++i){
        variable='block__'+i;
        unKnown = document.getElementById(variable).value;
        values.push(unKnown);
        if((unKnown<=0 || unKnown>9) && unKnown!=""){
            console.log(unKnown);
            document.getElementById('warning').innerHTML="Please enter valid inputs!!";
            reset();
            return true;
        }
    }
    values.forEach(element => {
        if(element!="")
            count++;        
    });
    if(count<18){
        document.getElementById('warning').innerHTML="Please give enough inputs (minimum 17) to get unique result.";
        reset();
        return true;
    }
}
function reset(){
    for(let i=1;i<82;++i){
        variable='block__'+i;
        document.getElementById(variable).value="";
    }
    values=[];
}
function set(){
    console.log('set called')
    for(let i=1;i<10;++i){
        variable="block__"+i;
        row_one.add(document.getElementById(variable).value);
    }
    for(let i=10;i<19;++i){
        variable="block__"+i;
        row_two.add(document.getElementById(variable).value);
    }
    for(let i=19;i<28;++i){
        variable="block__"+i;
        row_three.add(document.getElementById(variable).value);
    }
    for(let i=28;i<37;++i){
        variable="block__"+i;
        row_four.add(document.getElementById(variable).value);
    }
    for(let i=37;i<46;++i){
        variable="block__"+i;
        row_five.add(document.getElementById(variable).value);
    }
    for(let i=46;i<55;++i){
        variable="block__"+i;
        row_six.add(document.getElementById(variable).value);
    }
    for(let i=55;i<64;++i){
        variable="block__"+i;
        row_seven.add(document.getElementById(variable).value);
    }
    for(let i=64;i<73;++i){
        variable="block__"+i;
        row_eight.add(document.getElementById(variable).value);
    }
    for(let i=73;i<82;++i){
        variable="block__"+i;
        row_nine.add(document.getElementById(variable).value);
    }
    for(let i=1;i<10;++i){
        variable = dictionary.i;
        for(let j=i;j<=72+i;j+=9)
            dictionary_one.i.add(document.getElementById(variable).value);
    }
}
function solveMe(){
    console.log('hello');
    if(sanitize())
        return;
    set();
}
function intersection(setA, setB){
    let intersectionSet = new Set();
    for(let elem in setA){
        if(setB.has(elem))
            intersectionSet.add(elem);
    }
    return intersectionSet;
}