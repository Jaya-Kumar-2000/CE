function _(id){
	return document.getElementById(id);
}

let prinEle = _("PrincipalAmount");

let rate = _('rateOfAmount');

let year = _('timeOfYear');

let submit = _('submited');

let graphBtn = _('graphbtn');

let tableBtn = _('tableBtn');

let compoundTable = _("table");

let PrincipalAmount,
    rateOfAmount,
    timeOfYears,
    timePeriod,
    final,
    mt,
    total,
    interest,
    lastFinal;

let ctx = document.getElementById("myChart").getContext('2d');

let line = new Chart (ctx, {});

let labels= [];

let labels2 = [];

let data =[];

let totalInterestarr = [];

let totalBalance = [];

let mInt = 0;

let interestarr = [];



let tableChart = function(){
    _('graph').style.display = "none";
    _('table').style.display = "block";
    document.querySelector('#table').innerText = "";
    let table = document.createElement('div');

    table.setAttribute('class', 'tableHeaders');

    compoundTable.appendChild(table);

    let HeadersValue = ['Month','Interest','TotalInterest','Balance']
    let DOM = new DocumentFragment();
    HeadersValue.forEach(function(ele){
        let headersRow = document.createElement('div');

        headersRow.setAttribute('class', `headers ${ele}`);

        
        let paragraph = document.createElement("div");
        paragraph.setAttribute("class","headerOfInvestment")
        paragraph.textContent = ele;
        headersRow.append(paragraph);
        console.log(ele);
        console.log(paragraph)

        // headersRow.textContent = HeadersValue[i];
        DOM.appendChild(headersRow)
 
    });    
    table.appendChild(DOM);

    if (document.getElementById('monthlyInterest').checked) {
        document.querySelector('.headerOfInvestment').innerText = "Month";
       
      }
    if (document.getElementById('yearlyInterest').checked) {
        document.querySelector('.headerOfInvestment').innerText = "Year";        
    }

      
    if(document.getElementById('monthlyInterest').checked){
        for(i=1; i<=mt; i++){
            let monthrow = document.createElement('div');

            monthrow.setAttribute('class', 'rowMonth');

            monthrow.textContent = i;

            document.querySelector('.Month').appendChild(monthrow);

            let interestValue = document.createElement('div');

            interestValue.setAttribute('class', 'Value');

            interestValue.textContent =interestarr[i-1];
            

            let temp1 = document.querySelector('.Interest')

            temp1.appendChild(interestValue);


            // console.log(temp1);

            let totalInterest = document.createElement('div');

            totalInterest.setAttribute('class', 'interestValue');

            totalInterest.textContent = data[i-1];
            document.querySelector('.TotalInterest').appendChild(totalInterest);

            let balance = document.createElement('div');

            balance.setAttribute('class', 'totalBalance');

            // balance.textContent = lastFinal;
            document.querySelector('.Balance').appendChild(balance);

            balance.textContent = totalBalance[i-1];

            

            

            

             
        }
    }

    if (document.getElementById('yearlyInterest').checked) {
        for(i=1; i<=mt; i++){
            let yearRow = document.createElement('div');

            yearRow.setAttribute('class', 'yearRow');

            yearRow.textContent = i;

            document.querySelector('.Month').appendChild(yearRow);
            let interestValue = document.createElement('div');

            interestValue.setAttribute('class', 'Value');
            console.log(interestarr)
            interestValue.textContent = interestarr[i-1];


            let temp = document.querySelector('.Interest')

            temp.appendChild(interestValue);



            let totalInterest = document.createElement('div');

            totalInterest.setAttribute('class', 'interestValue');

            totalInterest.textContent = data[i-1];
            document.querySelector('.TotalInterest').appendChild(totalInterest);

            let balance = document.createElement('div');

            balance.setAttribute('class', 'totalBalance');

            // balance.textContent = lastFinal;
            document.querySelector('.Balance').appendChild(balance);

            balance.textContent = totalBalance[i-1];

        }     
    }


    
}

tableBtn.addEventListener("click",tableChart);



let compoundInterest = function(){

    data.length = [];
    labels.length = [];
    interestarr.length = [];
    mInt = 0 ;
    totalBalance.length = [];
    

     PrincipalAmount = prinEle.value;  // get principal amount

     rateOfAmount = rate.value;    // rate of interest in percentage

     timeOfYears = year.value;    // get how many years or month to pay the interest
    

    if (document.getElementById('monthlyInterest').checked) {
        timePeriod = document.getElementById('monthlyInterest').value;
       
      }
    if (document.getElementById('yearlyInterest').checked) {
        timePeriod = document.getElementById('yearlyInterest').value;
        
    }
    

    mt=0;

        if (timePeriod == 'monthly'){
            mt = timeOfYears * 12;

            for(i=1;i<=mt;i++){
                
                labels.push("Month "+i);
            }
            
        }
        if (timePeriod == 'yearly'){
            mt = timeOfYears * 1;

            for(i=1;i<=mt;i++){
                labels.push("Year "+i);
            }
            
           
        }
        let count = 0;
            
        for (let i=1; i<=mt; i++) {
          count = i;
 
            // for (let i=1; i<=timeOfYears; i++){
                final = (PrincipalAmount * ( 1 + (rateOfAmount / 100)) ** count);


                lastFinal =final.toFixed(2);
                interest = lastFinal-PrincipalAmount;
                // mInt=interest-mInt;
                // document.querySelector('.Value').innerText = interest-mInt;

                console.log(interest-mInt);
                interestarr.push((interest - mInt).toFixed(2));
                console.log(interestarr);

                // console.log(interest);
                mInt=interest;

            // }
            data.push(+interest.toFixed(2));
            
            // console.log(data)
            // console.log(lastFinal);
            totalBalance.push(lastFinal);      
           
        }   
        // console.log(document.querySelectorAll(".Value"));   
        // document.querySelectorAll(".Value").forEach(function(ele){
        //     console.log(ele)
        //     ele.innerText=interest-mInt;
        // });
        document.querySelector("#answer").innerText = "Total Amount = " + lastFinal;
        document.querySelector("#AnswerOfInterest").innerText = "Total Interest = " + interest.toFixed(2);

             
       
    

    
    tableChart();
    drawGraph();
    
}

submit.addEventListener("click",compoundInterest);



function drawGraph(){
    line.destroy();
    line = new Chart(ctx, {
        type: 'line',
        data: {
            labels,
            labels2,
            datasets: [{
                label: 'Interest',
                data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}


let lineChart = function(){

    _('table').style.display = "none";
    _('graph').style.display = "block";
     drawGraph();
}



graphBtn.addEventListener("click",lineChart);



