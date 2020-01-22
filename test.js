'use strict';

const { go, test } = require('testim');

const expect = require('chai').expect;
const {searchTextInWikipedia, setEnglishLanguage} = require ("./wikipediaHomePage");
const {readFromParamFile} = require ("./baseCommon.js");

test("Search a text in Wikipedia", async () => {
    await go(readFromParamFile("URL"));
    await setEnglishLanguage(readFromParamFile("Language"));
    await searchTextInWikipedia(readFromParamFile("searchText"));
});