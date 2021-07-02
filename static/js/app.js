//sampleData = []
d3.json('data/samples.json').then((importedData) => {
    var data = importedData;
    // Display the top 10 OTU samples. 
    console.log("otu ids: ", data.samples[1].id)
    console.log("otu values : ", data.samples[1].otu_ids.slice(0, 10))
    var otu_ids = 958;
    for (var i = 0; i < data.samples.length; i++) {
        var id = data.samples[i].id;
        var otuId = data.samples[i].otu_ids.slice(0, 10);
        var sample_values = data.samples[i].sample_values.slice(0, 10);
        if (otu_ids == data.samples[i].id) {
            console.log("the id is: ", id, "top 10 otu ids are: ", otuId);
            console.log("sample_values :", sample_values)
            break;
        }

        var data = [{
            x: ['giraffes', 'orangutans', 'monkeys'],
            y: [20, 14, 23],
            type: 'bar'
        }];

        Plotly.newPlot('myDiv', data);
    }








    // console.log("samples: ", data.samples[i].sample_values.sort().limit(10))

    //console.log("SlicedData", data);
    // Sort the data array using the greekSearchResults value
    // data.sort(function(a, b) {
    //     return (b.data.samples[0].sample_values) - (a.data.samples[0].sample_values);
    //     //for (var i = 0; i < data.length; i++) {  
    // });
    //Slice the first 10 objects
    //for plotting

    //console.log("sortedSamples: ", sortedSamples)
    //console.log("sortedSampleId: ", sortedSampleId)


    // }


});