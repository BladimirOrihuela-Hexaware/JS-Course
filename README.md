# JS Course

This project was created during the JavaScript + Selenium course 👨‍🎓 👩‍🎓 

## Requirements
- Node
- Web Drivers installed in your machine.
	You might find them here 🔎
		chromedriver: https://chromedriver.chromium.org/downloads
		Edge: https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
		Firefox: https://github.com/mozilla/geckodriver/releases

## How to start  🥴 

1. Clone or fork this repo
2. run `npm install`
3. execute the default test case: `node index.js`


## Architecture 🏗️ 
[![Framework architecture](https://github.com/BladimirOrihuela-Hexaware/JS-Course/blob/master/arch.PNG "Framework architecture")](https://github.com/BladimirOrihuela-Hexaware/JS-Course/blob/master/arch.PNG "Framework architecture")

## How to use it  🐵
First you need to create a Page within the Page folder. *Pages/your_page_name*

Then, define your web elements in
*Pages/your_page_name/elements.js*

create a test_cases folder and create a test_case_1.js file
You can get an example of the Test Case structure here:
*Pages/google/test_cases/search_hexaware.js*


Define a Test Set in the index.js file.

Run the index.js file
`node index.js`
