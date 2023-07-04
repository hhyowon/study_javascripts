const carinfor_obj = [
    {"YEAR":"2020","CAR_NAME":"Sonata","CAR_INFOR_ID":"CI001","COMPANY_ID":"C001"},
    {"YEAR":"2021","CAR_NAME":"Kona","CAR_INFOR_ID":"CI002","COMPANY_ID":"C002"},
    {"YEAR":"2019","CAR_NAME":"SM6","CAR_INFOR_ID":"CI003","COMPANY_ID":"C003"},
    {"YEAR":"2022","CAR_NAME":"3 Series","CAR_INFOR_ID":"CI004","COMPANY_ID":"C004"},
    {"YEAR":"2020","CAR_NAME":"Camry","CAR_INFOR_ID":"CI005","COMPANY_ID":"C005"}
  ];
  
  let outHtml = `<table>`;
  for (let car_hashmap of carinfor_obj) {   // 각 차량의 정보를 콘솔에 출력
    console.log(`YEAR: ${car_hashmap.YEAR}, CAR_NAME: ${car_hashmap.CAR_NAME}, CAR_INFOR_ID: ${car_hashmap.CAR_INFOR_ID}, COMPANY_ID: ${car_hashmap.COMPANY_ID}`);
     // 동적으로 생성된 HTML 테이블 행을 추가
    outHtml += `<tr><td>${car_hashmap.YEAR}</td><td>${car_hashmap.CAR_NAME}</td><td>${car_hashmap.CAR_INFOR_ID}</td><td>${car_hashmap.COMPANY_ID}</td></tr>`;
  }
  outHtml += `</table>`;
  
  console.log(outHtml);
  
 // "carTableBody"라는 id를 가진 DOM 요소를 찾아서 동적으로 생성된 HTML을 추가
  let carTableBody = document.querySelector('#carTableBody');
  carTableBody.innerHTML = outHtml;
  