// module.exports = function () {
//     console.log('Do a Google Search Steps Loaded');
//     this.World = require('../support/world');
//
//     /* "<Then> I should see search results" */
//     this.Then(/^I should see search results$/, function (callback) {
//
//         var inputId = '#resultStats';
//
//         this.waitFor(inputId, 3000, function (err) {
//
//             if (err) {
//                 return callback.fail(new Error('Element ' + inputId + ' was not found after 3s'));
//             }
//
//             this.getText(inputId, function (err, text) {
//
//                 text = (''+text).match(/^About ([\d,]+) .*$/);
//                 text = parseInt(text[1].replace(/,/g,''), 10);
//
//                 // Fail this test if the search results are null
//                 if (text === 0 || isNaN(text))
//                     return callback.fail(new Error('Expected to see some results, but saw 0 (captured result count is ' + number + ')'));
//
//                 // Pass and say about it.
//                 console.log( '(Saw ' + text + ' results)');
//                 return callback();
//             });
//
//         });
//     });
// };
// features/step_definitions/browser_steps.js
require('chromedriver')
var {defineSupportCode} = require('cucumber');
var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

defineSupportCode(function({setDefaultTimeout}) {
  setDefaultTimeout(60 * 1000);
});

defineSupportCode(function({Before, Given, When, Then}) {

  Before({timeout: 60 * 1000}, function() {
   // Does some slow browser/filesystem/network actions
  });

  Given('I visit http://google.com', function() {
    client
      .init()
      .url('https://google.com/')
      .end()
  });

  When('I enter {stringInSingleQuotes} into {stringInSingleQuotes}', function (text1, text2) {
    // this.driver.findElement({linkText: text}).then(function(element) {
    //   return element.click();
    // });
    client
      .setValue(text2, text1)
      .submitForm("input[value]='Google Search'")
      .end()

    console.log("booyah");

  });

  Then('I should see search results', function (text) {
    // var xpath = "//*[contains(text(),'" + text + "')]";
    // var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    // this.driver.wait(condition, 5000);
    client
      .getTitle(function(title){
        console.log("title is:" + title);
      })
      .end()
  });
});
