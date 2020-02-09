
'use strict';

const { url, click, selectOption, type, waitForText, hover, evaluate } = require('testim');
const { expect } = require('chai');

const FLOWERS_MENU = "#ctl01_RadMenu1 > ul > li.rmItem.rmFirst > a > span";
const FLOWER_BUCKET = "#ctl01_RadMenu1 > ul > li.rmItem.rmFirst > div > ul > li.rmItem.rmFirst > a > span";
const FLOWER_BUCKET_PAGE_HEADLINE = "#P7 > div:nth-child(2) > div > span > h1";
const FURTHER_DETAILS_BUTTON = "#P8 > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > a";
const ADD_TO_CART_BUTTON = "#imgAddCart_dis > img";
const CONTINUE_ADDING_TO_CART_BUTTON = "#SetSessionButton";
//const LOVE_EVENT = "#\\39 381_F11064";
const LOVE_EVENT = "#P80 > div.clearfix > div:nth-child(1) > ul > li:nth-child(7) > a";
const PRODUCT = "div[class='product']";


async function goToFlowerBucketPage() {
    //hover the upper flowers menu to present the sub menu
    await hover(FLOWERS_MENU);
    await click(FLOWER_BUCKET);
    await waitForText(FLOWER_BUCKET_PAGE_HEADLINE, /זרי פרחים/);
}

async function selectLoveEvent() {
    await click(LOVE_EVENT)
}

async function openDetailsPage() {
    await click(FURTHER_DETAILS_BUTTON);
}

async function addToCart() {
    await click(ADD_TO_CART_BUTTON);
}

async function clickContinueAddToCart() {
    await click(CONTINUE_ADDING_TO_CART_BUTTON);
}

async function validateProductCountOnPage(numberOfProductsOnPage) {
   const numberOfProducts = await evaluate((PRODUCT) => document.querySelectorAll(PRODUCT).length, PRODUCT);
   expect(numberOfProducts).to.equal(numberOfProductsOnPage);
}

module.exports.goToFlowerBucketPage = goToFlowerBucketPage;
module.exports.openDetailsPage = openDetailsPage;
module.exports.selectLoveEvent = selectLoveEvent;
module.exports.addToCart = addToCart;
module.exports.clickContinueAddToCart = clickContinueAddToCart;
module.exports.validateProductCountOnPage =validateProductCountOnPage;