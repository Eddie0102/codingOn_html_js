/*if(조건식1) {

    조건식1 이 true이면 실행
    
    }
    
    else if(조건식2) {
    
    조건식2 가 true이면 실행
    
    }
    
    else{

    조건식1, 2가 모두 false 이면 실행
    }
*/
// alert("testing...");
let age = prompt("당신의 나이를 입력하세요");

age = Number(age);

if((age >= 0) && (age <= 7)){
    charge = 1000;
    document.write("<h3>당신은 미취학 아동입니다.</h3><br>" 
                    + "당신의 입장료는 <span>" + charge + "원</span>입니다."
    )
}
else if((age >= 8) && (age <= 13)){
    charge = 2000;
    document.write("<h3>당신은 초등학생 입니다.</h3><br>" 
                    + "당신의 입장료는 <span>" + charge + "원</span>입니다."
    )
}
else if((age >= 14) && (age <= 16)){
    charge = 2500;
    document.write("<h3>당신은 중학생입니다.</h3><br>" 
                    + "당신의 입장료는 <span>" + charge + "원</span>입니다."
    )
}
else if((age >= 17) && (age <= 19)){
    charge = 2500;
    document.write("<h3>당신은 고등학생입니다.</h3><br>" 
                    + "당신의 입장료는 <span>" + charge + "원</span>입니다."
    )
}
else if(age>30){
    charge = 3000;
    document.write("<h3>당신은 너무 늙었습니다.</h3><br>" 
                    + "탑승할 수 없습니다.")
    
}
else {
    charge = 3000;
    document.write("<h3>당신은 일반인입니다.</h3><br>" 
                    + "당신의 입장료는 <span>" + charge + "원</span>입니다."
    )
}