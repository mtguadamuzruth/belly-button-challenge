const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
// const data = {}
// const getData = async () =>
//     await d3.json(url).then(function (res) {
//         for (let row of res.samples) {
//             for (let otu of row.otu_ids) {
//                 if (data[otu]) {
//                     data[otu]++
//                 }
//                 else {
//                     data[otu] = 1
//                 }
//             }
//         }
//     })


function init() {
    d3.json(url).then((data) => {
        let dropDown = d3.select("#selDataset")
        for (id of data.names) {
            dropDown.append("option").text(id).property("value", id)
        }
        buildCharts(data.names[0])
    });
}
// load the data
// d3.json(url).then((data) => {

//     data.names
//  loop over the names/ids
// append option tags to the dropdown in the html for each id

// })

function buildCharts(sampleID) {
    // use d3 to load data
    d3.json(url).then((data) => {
    let samples = data.samples;
    let result = samples.filter(otu => otu.id == sampleID)
    console.log(result)






    });
    // filter the data based on sample ID

    // get your top 10 for example

    // plot your bar chart
}

function optionChanged(sampleID) {
    buildCharts(sampleID);

}





// function create_Chart(json) {
//     console.log(json)
//     let title = `top 10 otu`
//     let top10x = []
//     let top10y = []
//     for (let i = 0; i < 10; i++) {
//         let max = 0
//         let maxkey;
//         for (let key in json) {
//             console.log(key)
//             if (max < parseInt(json[key]) && !top10x.includes(key)) {
//                 max = parseInt(json[key])
//                 maxkey = key
//             }
//         }
//         top10x.push(maxkey)
//         top10y.push(max)
//     }
//     console.log(top10x)
//     console.log(top10y)
//     let trace1 = {
//         y: top10y,
//         x: top10x,
//         type: 'bar',
//         orientation: 'h'
//     };

//     let data = [trace1];

//     let layout = {
//         title: title
//     };

//     Plotly.newPlot("bar", data, layout);
// }

// getData()
// create_Chart(data)
init();