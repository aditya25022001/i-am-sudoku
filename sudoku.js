let row_one=[]
let row_two=[]
let row_three=[]
let row_four=[]
let row_five=[]
let row_six=[]
let row_seven=[]
let row_eight=[]
let row_nine=[]
let block_one=[]
let block_two=[]
let block_three=[]
let block_four=[]
let block_five=[]
let block_six=[]
let block_seven=[]
let block_eight=[]
let block_nine=[]
let col_one=[]
let col_two=[]
let col_three=[]
let col_four=[]
let col_five=[]
let col_six=[]
let col_seven=[]
let col_eight=[]
let col_nine=[]
let variable;
let unKnown;
function sanitize(){
    for(let i=1;i<82;++i){
        variable='block__'+i;
        unKnown = document.getElementById(variable).value;
        if(unKnown<=0 || unKnown>9 || unKnown-Math.floor(unKnown)!=0){
            document.getElementById('warning').innerHTML="Please enter valid inputs!!";
            reset();
            break;
        }
    }
}
function reset(){
    for(let i=1;i<82;++i){
        variable='block__'+i;
        document.getElementById(variable).value=" ";
    }
}
function set(){
    for(let i=1;i<10;++i){
        variable="block__"+i;
        block_one.push(document.getElementById(variable).value);
    }
    for(let i=10;i<19;++i){
        variable="block__"+i;
        block_two.push(document.getElementById(variable).value);
    }
    for(let i=19;i<28;++i){
        variable="block__"+i;
        block_three.push(document.getElementById(variable).value);
    }
    for(let i=28;i<37;++i){
        variable="block__"+i;
        block_four.push(document.getElementById(variable).value);
    }
    for(let i=37;i<46;++i){
        variable="block__"+i;
        block_five.push(document.getElementById(variable).value);
    }
    for(let i=46;i<55;++i){
        variable="block__"+i;
        block_six.push(document.getElementById(variable).value);
    }
    for(let i=55;i<64;++i){
        variable="block__"+i;
        block_seven.push(document.getElementById(variable).value);
    }
    for(let i=64;i<73;++i){
        variable="block__"+i;
        block_eight.push(document.getElementById(variable).value);
    }
    for(let i=73;i<82;++i){
        variable="block__"+i;
        block_nine.push(document.getElementById(variable).value);
    }
}
