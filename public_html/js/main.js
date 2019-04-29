/* 
    Created on : 31/01/2019, 06:23:00 PM
    Author     : Ricardo Presilla.
    Licencia GNU.
*/
Vue.component('alert-box', {
  template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `
});

var vue = new Vue({
    el: '#app',
    data: {
        searchText: ''
    },
});
