'use strict';

/* Aplikace */

(function() {

angular.module('zdrojak.filter', []);
angular.module('zdrojak.directive', []);
angular.module('zdrojak.controller', [])
angular.module('zdrojak.service', ['ngResource']);
angular.module('zdrojak.mock', ['ngMockE2E'])
    
var module = angular.module('zdrojak', [
  'zdrojak.controller',
  'zdrojak.filter', 
  'zdrojak.directive', 
  'zdrojak.service', 
  'zdrojak.mock',
  'ui.bootstrap.alert', 
  'ui.bootstrap.dialog',
  'ui.bootstrap.modal'
]);


/**
 * Definice vsech pravidel pro URL.
 * 
 */

module.config(function routes($routeProvider) {
  //frontend
  $routeProvider.when('/', {templateUrl: '/partials/index.html', controller: 'IndexCtrl'});
  $routeProvider.when('/vyhledavani/:query', {templateUrl: '/partials/search.html', controller: 'SearchCtrl'});
  $routeProvider.when('/info/:page', {templateUrl: '/partials/page.html', controller: 'PageCtrl'});
  $routeProvider.when('/mobily/:category', {templateUrl: '/partials/category.html', controller: 'CategoryCtrl', reloadOnSearch: false});
  $routeProvider.when('/mobil/:product', {templateUrl: '/partials/product.html', controller: 'ProductCtrl'});
  $routeProvider.when('/kosik', {templateUrl: '/partials/basket.html', controller: 'BasketCtrl'});
  $routeProvider.when('/zakaznicke-udaje', {templateUrl: '/partials/customer.html', controller: 'CustomerCtrl'});
  $routeProvider.when('/potvrzeni', {templateUrl: '/partials/summary.html', controller: 'SummaryCtrl'});
  
  //admin
  $routeProvider.when('/admin', {templateUrl: '/partials/admin/orders.html', controller: 'OrdersCtrl', menuItem: 'orders', reloadOnSearch: false});
  $routeProvider.when('/admin/orders/:number', {templateUrl: '/partials/admin/order-detail.html', controller: 'OrderDetailCtrl', menuItem: 'orders'});
  $routeProvider.when('/admin/products', {templateUrl: '/partials/admin/products.html', controller: 'ProductsCtrl', menuItem: 'products', reloadOnSearch: false});
  $routeProvider.when('/admin/products/:id', {templateUrl: '/partials/admin/product-detail.html', controller: 'ProductDetailCtrl', menuItem: 'products'});
  $routeProvider.when('/admin/users', {templateUrl: '/partials/admin/users.html', controller: 'UsersCtrl', menuItem: 'users'});
  $routeProvider.when('/admin/categories', {templateUrl: '/partials/admin/categories.html', controller: 'CategoriesCtrl', menuItem: 'categories'});
  $routeProvider.when('/admin/layouts', {templateUrl: '/partials/admin/layouts.html', controller: 'LayoutsCtrl', menuItem: 'layouts'});
  $routeProvider.otherwise({redirectTo: '/'});
});


/**
 * Nastaveni formatu URL.
 * 
 * Pro moderni prohlizece se pouzije HTML5 History API a URL 
 * budou mit standardni format. 
 * Napr. example.com/mobily/android.
 * 
 * Pokud uzivatel bude pouzivat aplikaci ve starsim prohlizeci,
 * URL pro konkretni stranky se budou davat za hash.
 * Napr. example.com/#/mobily/android  
 */

module.config(function url($locationProvider) {
  $locationProvider.html5Mode(true);   
});

    
})();