// array.join()
//쉼표 또는 지정된 구분 문자열로 구분된 배열(또는 배열과 유사한 객체join() ) 의 모든 요소를 ​​연결하여 새 문자열을 만들고 반환합니다 . 
//배열에 항목이 하나만 있으면 구분 기호를 사용하지 않고 해당 항목이 반환됩니다.
//구분 기호는 필요한 경우 문자열로 변환됩니다. 생략하면 배열 요소가 쉼표(",")로 구분됩니다. 
//빈 문자열 이면 separator모든 요소가 사이에 문자 없이 연결됩니다.
{
    const fruits = ['apple','banana','orange'];
    const result1 = fruits.join();
    const result2 = fruits.join('');
    const result3 = fruits.join('_');
    const result4 = fruits.join(',');
    const result5 = fruits.join(' and ');
    console.log('join() = ' + result1);
    console.log('join(" ") = ' + result2);
    console.log(result3);
    console.log(result4);
    console.log(result5);
}
console.log('************** array.join() ***************')
// array.split()
//정렬된 하위 문자열을 목록으로 나누고 이러한 하위 문자열을 배열에 넣고 배열을 반환합니다.
//separator하거나 전달하면 undefined호출 split()문자열이 단일 요소로 포함된 배열이 반환됩니다.
//undefined메소드 가 있는 객체가 아닌 모든 값은 문자열로 강제 변환@@split 됩니다.
//구분자는 꼭 전달해줘야하고, 뒤에 옵셔널인 Limit은 옵션사항이다.
{
    const fruits = '🍓,🍇,🍉,🍍';
    const result1 = fruits.split();
    const result2 = fruits.split(',');
    const result3 = fruits.split(',',2);
    console.log('split()' + result1);
    console.log('split(',')' + result2);
    console.log('split(',',2)' + result3);
}
console.log('************** array.split() ***************')
// array.reverse()
//첫 번째 배열 요소가 마지막이 되고 마지막 배열 요소가 첫 번째가 됩니다.
//배열이 제자리에서 반전되고 복사본이 만들어지지 않는다는 점에 유의하십시오.
//기존 배열값도 reverse가 되고 return값도 reverse가 된다.
{
    const array = [1,2,3,4,5];
    const result1 = array.reverse();
    console.log('reverse result = ' + result1);
    console.log('array = ' + array);
}
console.log('************** array.reverse() ***************')
// array.splice()
//기존 요소를 제거 또는 교체하거나 제자리에splice() 새 요소를 추가하여 배열의 내용을 변경합니다 .
//원래 배열을 변경하지 않고 세그먼트가 제거 및/또는 교체된 새 배열을 만들려면 toSpliced(). 
//수정하지 않고 어레이의 일부에 액세스하려면 를 참조하십시오 slice().
//즉, 배열 자체를 변경해주는 것.
{
    const array = [1,2,3,4,5];
    const result1 = array.splice(0, 1);
    console.log('splice result = ' + result1);
    console.log('array = ' + array);
}
console.log('************** array.splice() ***************')
// array.slice()
//인덱스 값을 설정해주고 0부터 2까지라고 적용한다면 마지막 인덱스값은 제외가 된다.
//배열은 그대로 유지되고 원하는 값만 return해주는 것.
{
    const array = [1,2,3,4,5];
    const result1 = array.slice(2, 5);
    console.log(result1);
    console.log(array);
}
console.log('************** array.slice() ***************')
class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45), 
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
]
// array.find()
//제공된 테스트 기능을 만족하는 제공된 배열의 첫 번째 요소를 반환합니다. 테스트 기능을 만족하는 값이 없으면 가 undefined반환됩니다.
//truey 값을 반환할 때까지 인덱스 오름차순으로 배열의 각 요소에 대해 제공된 함수를 한 번 호출합니다 .
//그런 다음 해당 요소를 반환하고 배열 반복을 중지합니다. 진실한 값을 반환하지 않으면 를 반환합니다
//즉, for문처럼 배열 하나하나를 다 검사해서 if문처럼 조건에 true값이 나오면 중지하고 콜백함수형태이기에 return값을 반환해준다.
{
    const result = students.find(function(student, index){
        console.log(student, index);
    });
    console.log('*****************************')
    const result1 = students.find(function(student){
        return student.score === 90;
    });
    const result2 = students.find((student) => student.score === 90);
    // const result1 = students.find((student) => student.score === 90);
    // console.log(result1);
    console.log(result1);
    console.log(result2);
}
console.log('************** array.find() ***************')
// array.filter()
//제공된 함수에 의해 구현된 테스트를 통과하는 주어진 배열의 요소로만 필터링된 지정된 배열 부분의 얕은 복사본을filter() 만듭니다 .
//array.find처럼 같은 동작으로 return값을 반환해준다.
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}
console.log('************** array.filter() ***************')
// array.map()
//기존에 있던 배열의 값들을 function에 의해 값을 변경하여 맵핑해준다.
//기존 배열에 1,2,3이라는 값을 function의 기능으로 *2를 해주면 2,4,6이라는 값을 맵핑해주는것이다.
{
    const result = students.map((student) => student);
    console.log(result);
    console.log('*****************************')
    const result1 = students.map((student) => student.score);
    console.log(result1);
    console.log('*****************************')
    const result2 = students.map((student) => student.score * 2);
    console.log(result2);
}
console.log('************** array.map() ***************')
// array.some()
//배열의 값중에 하나라도 true가 있다면 true를 반환 그렇지 않으면 false를 반환
{
    const result = students.some((student) => student.score < 50);
    console.log(result);
    console.log('************** array.some() ***************')
}
// array.every()
//배열의 모든 값이 true이면 true를 반환 그렇지 않으면 false를 반환
{
    const result = students.every((student) => student.score < 50);
    console.log(result);
    console.log('*****************************')
    const result1 = !students.every((student) => student.score >= 50);
    console.log(result1);
}
console.log('************** array.every() ***************')
// array.reduce()
//배열의 각 요소에 대해 reduce 콜백 함수를 순서대로 실행하고 이전 요소에 대한 계산의 반환 값을 전달합니다.
//즉,reduce()배열에 있는 모든 요소의 합계를 반환하는 것입니다.
//prev의 값은 이전에 콜백함수에서 return된 값이 전달되어져 옴
//curr는 배열의 아이템을 순차적으로 전달받는다.
{
    const result = students.reduce((prev, curr) => {
        console.log('----------');
        console.log(prev);
        console.log(curr);
    });
}
console.log('*****************************');
{
    const result = students.reduce((prev, curr) => {
        console.log('----------');
        console.log(prev);
        console.log(curr);
        return curr;
    });
}
console.log('*****************************')
{
    const result = students.reduce((prev, curr) => {
        console.log('----------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0);
    console.log('*****************************')
    console.log(result);
}
console.log('*****************************')
{
    const result = students.reduceRight((prev, curr) => {
        console.log('----------');
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0);
    console.log('*****************************')
    console.log(result);
}
console.log('************* 축약형 ****************')
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result);
}
console.log('************* 평균값 ****************')
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}
console.log('************** array.reduce() ***************')
// array 메서드들을 활용하여 원하는 값 찾아보기
{
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result);
}
console.log('************** 원하는 값으로 찾기 ***************')
// array.sort()
//배열의 요소를 제자리에서 정렬 하고 이제 정렬된 동일한 배열에 대한 참조를 반환합니다.
{
    const result = students
    .map(student => student.score)
    .filter((score) => score >= 50)
    .sort((a,b) => a - b )
    .join();
    console.log(result);
}
console.log('************* 내림차순 ****************')
{
    const result = students
    .map(student => student.score)
    .filter((score) => score >= 50)
    .sort((a,b) => b - a )
    .join();
    console.log(result);
}
console.log('************* 오름차순 ****************')