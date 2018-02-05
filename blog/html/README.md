# Front end Core

Core with the necessary file to start a front end project.

## Starting a project

1.  Create a www directory and clone inside the git repostory.
2.  Open the bower.json file and change the corresponding entries.
3.  Open the package.json file and change the corresponding entries.
4.  Run bower install
5.  Run npm install -d
6.  Add the source directory to Prepros.
7.  Create a new project in SublimeText.

## Project defaults for Prepros

### Sass
*   Output: Replace segment : source/scss/
*   Replace segments with : site/css

### Pug

*   Output: Replace segment : source/pug/views
*   Replace segments with : site

### Javascript

*   Output: Replace segment : source/js/
*   Replace segments with : site/js
*   Output Suffix: .min

**Important note:**
Remember that the js files must be set to autocompile manually.
This can be done browsing to the file and selecting ✓ Auto Compile.