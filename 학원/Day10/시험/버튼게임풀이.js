let text = ""; //html적 부분?
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // 전체 숫자
let answer = [1, 2, 3, 4, 5, 6, 7, 8, 0]; //?
const LEFT = -1, UP = -3, RIGHT = 1, DOWN = 3;

function shuffle()
{
    num.sort(function(a,b){return 0.5 - Math.random()});
}

function display()
{

    text ="";
    let idx = 0;
    for(let i=0;i<3;i++) //전체행 열?만들기
    {
        for(let j=0;j<3;j++) // 전체 행?열만들기
        {
            text += `<button onclick='move(${idx}, ${num[idx]})'>${num[idx]}</button>`;
            idx++; //3
        }
        text += "<br>" //3번 개행
    }
    document.getElementById("game").innerHTML = text;  
}
function move(idx, btnNum) //매개변수
{
    let pointOfTheCompass = whereIsZero(idx, btnNum); //얘도 매개변수?
    if( pointOfTheCompass != -100) //도대체 -100이 어디서 나온거지 왜?
    {
        if( pointOfTheCompass == LEFT ) //left가 -1
        {
            num[idx+LEFT] = btnNum; //idx 3 left -1
            num[idx] = 0;       // num idx 
        }
        else if( pointOfTheCompass == UP ) //-3
        {
            num[idx+UP] = btnNum;
            num[idx] = 0;       
        }
        else if( pointOfTheCompass == RIGHT ) //1
        {
            num[idx+RIGHT] = btnNum;
            num[idx] = 0;       
        }
        else if( pointOfTheCompass == DOWN) //3
        {
            num[idx+DOWN] = btnNum;
            num[idx] = 0;       
        }

        display();        
        if( result() ) alert("정답입니다.");
    }
}
function whereIsZero(idx, btnNum)
{
    if( idx%3 != 0 )
    {
        if( num[idx+LEFT]== 0 ) 
            return LEFT;
    }
    if( (idx+UP)>=0 )
    {
        if( num[idx+UP]==0 )
            return UP;
    }
    if( idx%3 != 2 )
    {
        if( num[idx+RIGHT]==0 )
            return RIGHT;
    }       
    if( (idx+DOWN) < num.length )
    {
       if( num[idx+DOWN]==0 )
            return DOWN;
    }
    return -100;   
}
function init()
{
    shuffle();
    display();
}
function result()
{
    for(var i=0;i<num.length;i++)
    {
        if(num[i] != answer[i])
            return false;
    }
    return true;
}

window.onload = init;