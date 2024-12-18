$(document).ready(function(){
    //html 문서가 모두 로딩될때까지 기다렸다가 실행
    console.log('jquery 호출')
    $('#test').text('jquery가 씀 2')
    /*
    box_bt를 클릭하면 box에 red class 추가해줘서 클릭했을때 안했을때를 나타내줄려고 이때 세팅이 두개 만들어져있어야함
    */
   $('.box_bt').on('click',function(){
    $('.box').addClass('red') /*추가*/
   })
   /* 버튼 누르면 삭제해줌*/
   $('.box_bt2').on('click',function(){
    $('.box').removeClass('red') /*삭제*/
   })
})
console.log('안녕하세요')

let abc = '1'
abc = '만세'
abc = '또바뀜'
// = 은 할당연산자 abc = '만세'라고 넣어주면 이전 값을 지우고 나만 들어감 계속 할당하면 최근값으로 바뀌는듯
let bbb = '2'
console.log('bbb')
// 변수는 따옴표 넣으면 안됨 넣는순간 글씨 출력으로됨
console.log(abc)
// 브라우저 콘솔창에 로그 메시지를 주라는 문법이며 abc라고 하는 변수에 담겨있는 메세지임


let num1 = '11'
let num2 = '22'
let sum = num1 + num2
console.log(sum)

let num3 = 11
let num4 = 22
let sum2 = num3 + num4
console.log(sum2)

let pra1 = 14
//이 과정은 내가 변수값을 지정해주고 더해줘서 합산한결과를 또다른 변수에가라고지시하고 로그에다 표출해주라는 뜻임 
let pra2 = 65
let hap = pra1 + pra2
console.log(hap)

hap = pra2--
console.log(hap)
// -1 그대로
hap = --pra2
console.log(hap)

hap = hap - pra1
console.log(hap)
// hap 값에 부여해줄거임 hap 값에서 pra1 값 뺀것을 hap에 부여해줄거임 절대 수학이랑 똑같다라고 비교 ㄴㄴ
if(hap > 20){
    console.log('sum은 20보다 크다')
}
// if 내가 조건걸어주면 hap 값이 20보다 크면 콘솔에 해당 변수 내용 출력

hap = hap + 2
console.log(hap)

if(hap < 20){
    console.log('sum은 20보다 크다')
    // 조건맞아야 성립 근데 if else 는 둘중에 하나만 표출함
}else{
    console.log('sum은 20과 같거나 작다')
    // 조건이 아니면 성립
}

// document.querySelector('#test').innerHTML = 'jquery가 씀'
/*  script가 html 구조에 나중에 나오고 불려야함 그래야 적용이 가능한데 그전에 적용할 객체가 나오면 적용안됨
    그럼 js에서 html요소를 부르기위해서는 html 아래에 js를 내리는것인데 이는 추천하지않고 비추임
*/
$(document).ready(function(){
    $('#test').text('jquery가 씀 2')
})
