Laravel7 with vue2

-install laravel7
-npm install
-npm install admin-lte@v3.0.0-aplha.2 --save ( for admin dashboard design)
-npm run watch
-composer require laravel/ui:^2.4
-php artisan ui vue --auth
-npm install @fontawesome/fontawesome-free
-npm install vue-router

*import in app.js

import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes
})

*for vForm use this link - https://github.com/cretueusebiu/vform

*import in app.scss

$fa-font-path:"../webfonts";

// Bootstrap
@import '~bootstrap/scss/bootstrap';
@import '~admin-lte/dist/css/adminlte.css';

@import "~@fortawesome/fontawesome-free/scss/fontawesome.scss";

@import "~@fortawesome/fontawesome-free/scss/solid.scss";
@import "~@fortawesome/fontawesome-free/scss/brands.scss";

*Momentjs Instead of Carbon for datetime display 
https://momentjs.com/
npm install moment --save

*in app.js
import moment from 'moment'

*use vue-progressbar
https://hilongjw.github.io/vue-progressbar/
npm install vue-progressbar --save

*sweet alert
https://sweetalert2.github.io/#download
npm install sweetalert2

*To hide model after create,update
use this > $("#modal").modal("hide");

*custom event ( for component communication)
$emit ( create an event)
delcare window.Fire=new Vue() in app.js to can call everywhere of application.
then, in create function Fire.$emit('emitName') ,
then created() Fire.$on('emitName', ()=> function name that you want to call ).
anywhere in your application,
 you have access this portion(Fire.$on('emitName', ()=> function()) 
( meaning is if you create something here, any component in your application can listen for the event, this is called component commnication)

