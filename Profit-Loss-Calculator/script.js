function enterbtnClicked(){
    result = document.getElementById('result')
    cost = document.getElementById('costPrice')
    sell = document.getElementById('sellPrice')
    mainresult = sell.value-cost.value
    console.log(mainresult)
    result.innerHTML = "Result:"+ mainresult;
}