# Password Generator Application
Application includes Index.html, style.css and script.js. 
Purpose of the password generator is to build a random mix of uppercase, lowercase, numbers and symbols
for the user to be able to select what they are wanting. The generator generates between 1 and 50 
depending on the slider range or what the user inputs in the input box. 
# Index.html:
The Index page has been built to give the user easy selection for what they maybe looking for 
in with the password. A form is being used to handle and collect the user input, when the generate button is
clicked, it puts into play the script.js random functions.
# style.css:
The stylesheet is being used to define the layout and look of the index page. 
# script.js: 
The JavaScript is being used to capture the items the user wants to use for uppercase, numbers and/or symbols
Lower case characters are a default and don't need to be defined. With the random generation we use the 
ASCII Character Codes Table & Cheat Sheet to come up with the low and hight numbers to beable to generate the 
various random characters. Lowercase = 97 - 122, Uppercase = 65 - 90, Numbers = 48 - 57 and
symbols have diffent ranges to go after, so they are concatenated 33 - 47, 58 - 64, 91 - 96 and 123 - 126. This
gives us a chance to make use of all of the symbols in the code table. 

# Doug Brown 