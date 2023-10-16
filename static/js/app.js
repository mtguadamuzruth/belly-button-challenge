//pull data using D3 intialy 

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
const init = async () =>
    await d3.json(url).then(function (res) {
        /// building selection dropdown 
        let dropDown = d3.select("#selDataset")
        for (id of res.names) {
            dropDown.append("option").text(id).property("value", id)
        }
        let otu = d3.select("#selDataset").property('value')
        let idx = res.names.indexOf(otu)
        optionChanged(idx)
    })
//pull data using D3 on sample change 

async function optionChanged(sampleID) {
    await d3.json(url).then(function (res) {
        let dropDown = d3.select("#selDataset")
        for (id of res.names) {
            dropDown.append("option").text(id).property("value", id)
        }
        let otu = d3.select("#selDataset").property('value')
        let idx = res.names.indexOf(otu)
        buildCharts(res.samples[idx]);
        metadata(res.metadata[idx])
    })
}
// building bar and bubble chart 
function buildCharts(json) {
    let title = `top 10 otu`
    let top10x = []
    let top10y = []
    for (let i = 9; i >= 0; i--) {

        top10y.push("OTU_" + json.otu_ids[i])
        top10x.push(json.sample_values[i])
    }
    let trace1 = {
        y: top10y,
        x: top10x,
        type: 'bar',
        orientation: 'h'
    };

    let data = [trace1];
    let layout = {
        title: title
    };

    Plotly.newPlot("bar", data, layout);

    // bubble chart 
    let trace2 = {
        y: json.sample_values,
        x: json.otu_ids,
        mode: 'markers',
        marker: {
            size: json.sample_values,
            color: json.otu_ids
        }
    };
    data = [trace2]
    Plotly.newPlot('bubble', data);

}
//display metadata
function metadata(subject) {

    let demoBox = d3.select("#sample-metadata");
    // clear existing content in the box
    demoBox.html("");

    Object.entries(subject).forEach(([key, value]) => {
        demoBox.append("p").text(`${key.slice(0, 1).toUpperCase() + key.slice(1)}: ${value}`);
    });

}

init();