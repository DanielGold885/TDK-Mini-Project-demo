
'use strict';

const { go, click, test, selectOption, type, waitForText } = require('testim');

const searchTextField = "#searchInput";
const searchIcon = "#search-form > fieldset > button > i";
const englishLanguageSelector = "#searchLanguage > option[value='en']";
const searchResultHeadline = "#firstHeading";
const language = '#jsLangLabel';


async function searchTextInWikipedia(searchVlue) {
    //search value in wikipedia from homepage

    await type(searchTextField, searchVlue);
    await click(searchIcon);
    await waitForText(searchResultHeadline, searchVlue);
}

async function setEnglishLanguage(selectBoxValue) {
    switch (selectBoxValue) {
        case selectBoxValue === 'English':
            await selectOption(englishLanguageSelector);
            break;
    }
}

module.exports.searchTextInWikipedia = searchTextInWikipedia;
module.exports.setEnglishLanguage = setEnglishLanguage;


/*
async function setEnglishLanguage() {
    await selectOption(englishLanguageSelector);
    //await click(englishLanguageSelector);
    await waitForText(language , /en/);
}
*/