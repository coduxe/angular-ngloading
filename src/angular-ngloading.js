/**
 * angular-ngloading
 * @version v1.0.0
 * @link https://github.com/coduxe/angular-ngloading
 * @author Coduxe, https://github.com/coduxe
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

'use strict';

if (!angular) throw new TypeError("AngularJs is required");

angular.module("angular-ngloading", [])

.config(['$httpProvider', 'ngLoadingProvider', function($httpProvider, ngLoadingProvider) {
  if (!ngLoadingProvider.defaults.onHttpRequest) {
    return;
  }

  $httpProvider.interceptors.push(['$q', function ($q) {
    return {
      request: function(config) {
        ngLoadingProvider.$get().start();
        return config;
      },
      responseError: function(response) {
        ngLoadingProvider.$get().stop();
        return $q.reject(response);
      },
      response: function(response) {
        ngLoadingProvider.$get().stop();
        return response;
      }
    };
  }]);
}])

.provider('ngLoading', function() {
  this.defaults = {
    imageUrl: null,
    backgroundColor: null,
    onHttpRequest: true
  };

  this.id = 'ngloading';
  this.loadingCount = 0;
  this.body = angular.element(document.body);

  this.getLoadingCount = function() {
    return this.loadingCount;
  };

  this.increase = function() {
    this.loadingCount++;
  };

  this.decrease = function() {
    this.loadingCount--;
  };

  this.parseStyles = function() {
    var styles = [];

    if (this.defaults.imageUrl) styles.push('background-image: url(' + this.defaults.imageUrl + ')');
    if (this.defaults.backgroundColor) styles.push('background-color: ' + this.defaults.backgroundColor);

    return styles.join(';');
  };

  this.$get = function() {
    var self = this;

    return {
      start: function() {
        self.increase();

        if (self.getLoadingCount() === 1) {
          self.body.append('<div id="' + self.id + '" style="' + self.parseStyles() + '"></div>');
        }
      },
      stop: function() {
        self.decrease();

        if (self.getLoadingCount() === 0) {
          document.getElementById(self.id).remove();
        }
      }
    };
  }
});
