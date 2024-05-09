async function covidAPI(){
    let res = await fetch("https://data.covid19india.org/v4/min/data.min.json")
    let content = await res.json()
   
    var cntnr = document.createElement("container")
    cntnr.className="contnr"
    var row = document.createElement("row")
    row.className="row"
   
    for(key in content){
        // console.log(key)
        let total_data = content[key].total
        // console.log(total_data)

        var col = document.createElement("col")
        col.className="col-md-4"

        col.innerHTML=`<div class="card text-white bg-info mb-3" style="width: 350px;height:280px;text-align:center;">
            <div class="card-header" style="background-color:grey">Covid-19 Data</div>
            <div class="card-body">
            <h5 class="card-title">${key}</h5>
            <p class="card-text">
            Confirmed: ${total_data.confirmed}<br>
            Deceased: ${total_data.deceased}<br>
            Recovered: ${total_data.recovered}<br>
            Tested: ${total_data.tested}<br>
            Vaccinated1: ${total_data.vaccinated1}<br>
            Vaccincated2: ${total_data.vaccinated2}<br>
            </p>
            </div>
        </div>`
        row.appendChild(col)
        cntnr.appendChild(row)
        document.body.append(cntnr)
    }
}
covidAPI()