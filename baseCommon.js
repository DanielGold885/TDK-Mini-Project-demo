



const paramFile = require('./parameterFile.json')

function readFromParamFile(value){
    return paramFile[value]
}

module.exports.readFromParamFile = readFromParamFile;

/*
function pickFromSelectBox(selectBoxIdentifier , selectBoxValue){
    switch (selectBoxValue){
    case English:
    await selectOption(selectBoxIdentifier);
    break;
    }
}
*/


/*
const xml = "./configParameters.xml"

const xml2js = require('xml2js');
const fs = require('fs');
const parser = new xml2js.Parser({ attrkey: "ATTR" });


let xml_string = fs.readFileSync(xml, "utf8");

parser.parseString(xml_string, function(error, result) {
    if(error === null) {
        console.log(result);
    }
    else {
        console.log(error);
    }
});

*/


