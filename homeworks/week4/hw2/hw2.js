/*
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelector('.submit').addEventListener('click', test());
})
*/
function test(){

  let input = document.getElementsByClassName('input');
  let radio = document.getElementsByClassName('radio');
  let input__block = document.getElementsByClassName('input__block');
  let input__warning = document.getElementsByClassName('input__warning');
  let submi=false;

  if (input[0].value === ''){
    input__warning[0].innerText = "請輸入電子郵件地址";
    input__block[0].style.background = '#ffebee';
    input__warning[0].style.display = 'block';
    return false;
  }
  else if (input[1].value === ''){
    input__block[1].style.background = '#ffebee';
    input__warning[1].style.display = 'block';
    scroll(500);
    return false;
  }
  else if (radio[0].checked == false && radio[1].checked == false){
    input__block[2].style.background = '#ffebee';
    input__warning[2].style.display = 'block';
    scroll(650);
    return false;
  }
  else if (input[2].value === ''){
    input__block[3].style.background = '#ffebee';
    input__warning[3].style.display = 'block';
    scroll(800);
    return false;
  }
  else if (input[3].value === ''){
    input__block[4].style.background = '#ffebee';
    input__warning[4].style.display = 'block';
    return false;
  }
  else{
    for(let i = 0; i<= 4; i++){
      console.log(input[i].name + ' : ' + input[i].value);
      input__block[i].style.background = 'transparent';
      input__warning[i].style.display = 'none';
    }
    for (let j = 0; j<=1; j++){
      if (radio[j].checked == true){
        console.log(radio[j].name + ' : ' + radio[j].value);
      }
    }
    submit = true;
  }
  if (submit === true){
    alert('Submitted');
    return true;
  }
}

function scroll(pixel) {
    window.scrollTo(0, pixel);
}
