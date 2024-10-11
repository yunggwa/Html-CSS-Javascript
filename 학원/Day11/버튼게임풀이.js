let text = ""; //html적 부분?
let num = [0, 1, 2, 3, 4, 5, 6, 7, 8]; // 전체 숫자 셔플
let answer = [1, 2, 3, 4, 5, 6, 7, 8, 0]; //? 셔플
const LEFT = -1, UP = -3, RIGHT = 1, DOWN = 3;

function shuffle()
{
    num.sort(function(a,b){return 0.5 - Math.random()}); // 셔플
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
    let pointOfTheCompass = whereIsZero(idx, btnNum); //0과4를 가지고 호출
    if( pointOfTheCompass != -100) // -100이 아니면 여기 실행 
    //
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
            num[idx] = 0; // 0을 찾으면 0과 옆에 있는 숫자를 바꾸는
        }

        display();        
        if( result() ) alert("정답입니다."); //return false면 출력안된다
    }
}
function whereIsZero(idx, btnNum) //인덱스 기준으로 계속 계산!
{
    if( idx%3 != 0 ) //왼쪽을 검사하지않는 묶음
    //왼쪽에 숫자가 없는 열 왼쪽은 인덱스 기준 -1을 해야 왼쪽한칸기준
    {
        if( num[idx+LEFT]== 0 ) 
            return LEFT;
    }
    if( (idx+UP)>=0 )
    {
        if( num[idx+UP]==0 )
            return UP; //기준으로 좌우 반대쪽에 있는 숫자와 비교하려면 -3을 해야 가능
    }
    if( idx%3 != 2 ) //오른쪽 인덱스 값 2 5 8 //3으로 나머지연산했을 때 2인 애들 
    {
        if( num[idx+RIGHT]==0 )
            return RIGHT; //인덱스 값이 오른쪽 한칸 기준은 +1이 되어야하기때문에!
    }       
    if( (idx+DOWN) < num.length ) //아래쪽 인덱스값 6 7 8
    {
    if( num[idx+DOWN]==0 )  
            return DOWN; //기준으로 상하 반대쪽에 있는 숫자와 비교하려면 +3을 해야 가능
    }
    return -100; // 예를 들면 0번째의 숫자에 주변에 0이 없으면 -100을 리턴 //임의
}
function init()
{
    shuffle();
    display();
}
function result() //
{
    for(var i=0;i<num.length;i++) //9보다 작으면
    {
        if(num[i] != answer[i])
            return false;
    }
    return true;
}

window.onload = init;