# Project Base
> Website Base

### Support eslint for vue
npm install -save-dev eslint-config-vue@latest <br/>
npm install -save-dev eslint-plugin-flow-vars@latest

### Support resource load, such as css
npm install -p vue-loader <br/>
npm install -p css-loader

### Support jQuery
npm install --save-dev jquery<br/>
add dependencies for jquery jquery-ui<br/>
add *.js to the folder: src/assets/js/<br/>
ignore eslint check: add src/assets/js/*.js to .eslintignore<br/>
modify webpack.base.conf.js for jquery<br/>
add import $ from 'jquery' into App.vue

### Add JQuery UI module: FullPage
to see App.Vue