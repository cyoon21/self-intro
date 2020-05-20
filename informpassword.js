const pTab = prompt('비밀번호를 입력하세요',' ')
const password = '21'

if(pTab === password){
    history.forward();   
}else{
    alert("틀렸습니다!");
    history.back();
}
console.log(typeof pTab)