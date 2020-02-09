'use strict';

const { go, test } = require('testim');
const expect = require('chai').expect;
const { goToFlowerBucketPage, selectLoveEvent, addToCart, clickContinueAddToCart, openDetailsPage, validateProductCountOnPage } = require("../PO/zer4youPage");
const { readFromParamFile } = require("../utilities/baseCommon");

test("Validate the number of products in love section in flowers menu", async () => {
    await go(readFromParamFile("zer4youURL"));
    await goToFlowerBucketPage();
    await selectLoveEvent();
    await validateProductCountOnPage(readFromParamFile("numberOfProductsOnPage"));
});