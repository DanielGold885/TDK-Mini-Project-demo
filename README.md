# TDK-Mini-Project-demo

* prerequisite:

  Node installed
  Signed up to Testim
  Logged in to Testim
  

* To execute the test:

  $ npm i chai
  $ npm i @testim/testim-cli
  $ npx testim run test.js

* To avoid memory heap err:

  $ NODE_OPTIONS=--max-old-space-size=8192 npx testim run test.js
