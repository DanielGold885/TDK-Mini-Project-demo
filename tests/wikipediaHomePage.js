
'use strict';

const { url, click, selectOption, type, waitForText } = require('testim');
const {expect} = require('chai');

const SEARCH_TEXT_FIELD = "#searchInput";
const SEARCH_ICON = "#search-form > fieldset > button > i";
const ENGLISH_LANGUAGE_SELECTOR = "#searchLanguage > option[value='en']";
const SEARCH_RESULT_PAGE_HEADLINE = "#firstHeading";
const LANGUAGE = "#jsLangLabel";
const READ_WIKIPEDIA_IN_YOUR_LANGUAGE_SELECTOR = "#js-lang-list-button > i.sprite.svg-arrow-down-blue";
const ENGLISH_LINK = "a[lang='en']";


async function searchTextInWikipedia(searchVlue) {
    //search value in wikipedia from the homepage

    await type(SEARCH_TEXT_FIELD, searchVlue);
    await click(SEARCH_ICON);
    await waitForText(SEARCH_RESULT_PAGE_HEADLINE, searchVlue);
}

async function setEnglishLanguage(LanguageSelectBoxValue) {
    //select a language by passing a value

    switch (LanguageSelectBoxValue) {
        case 'English':
            await selectOption(ENGLISH_LANGUAGE_SELECTOR);
            await waitForText(LANGUAGE, /en/);
            break;
    }
}

async function readWikipediaInEnglishLanguage(readWikipediaLanguage) {
    // open read Wikipedia in your language

    await click(READ_WIKIPEDIA_IN_YOUR_LANGUAGE_SELECTOR);
    switch (readWikipediaLanguage) {
        case "English":
            await click(ENGLISH_LINK);
            const currentURL = await url();
            expect(currentURL).to.match(/en./);
            break;
    }
}

module.exports.searchTextInWikipedia = searchTextInWikipedia;
module.exports.setEnglishLanguage = setEnglishLanguage;
module.exports.readWikipediaInEnglishLanguage = readWikipediaInEnglishLanguage;

