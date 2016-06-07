# angular-ngloading

Add a loading image to your app with minimal effort. Just inject the module into your app and that´s it.

## Quick start

+ Install angular-ngloading with [Bower](https://github.com/bower/bower).

>
```bash
$ bower install angular-ngloading --save
```

+ Include the required libraries in your `index.html`:

>
``` html
<link rel="stylesheet" href=".bower_components/angular-ngloading/dist/angular-ngloading.min.css" >
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular-ngloading/dist/angular-ngloading.min.js"></script>
```

+ Inject the `angular-ngloading` module into your app:

>
``` js
angular.module('myApp', ['angular-ngloading']);
```

And that´s it, you should see a loading image when an http request is sent.

## Change default options:
+ You can override global defaults for the plugin with ngLoadingProvider.defaults

>
``` js
angular.module('myApp', ['angular-ngloading'])
  .config(['ngLoadingProvider', function(ngLoadingProvider) {
    angular.extend(ngLoadingProvider.defaults, {
      imageUrl: 'http://fakeimg.pl/200x200/?text=loading...', // set loading img
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // any hex or rgba css value
      onHttpRequest: true // trigger loading whenever a http request is sent if set to true
    });
  }]);
```

## Trigger Manually using the ngLoading Service
+ If you don´t want the loader to be trigger with all http requests, just set the default to false.

>
``` js
angular.module('myApp', ['angular-ngloading'])
  .config(['ngLoadingProvider', function(ngLoadingProvider) {
    angular.extend(ngLoadingProvider.defaults, { onHttpRequest: false });
  }]);

  .controller('DemoCtrl', ['ngLoading', '$timeout', function(ngLoading, $timeout) {
    ngLoading.start();

    $timeout(function() {
      ngLoading.stop();
    }, 3000);
  }]);
```

## Running the demo

+ Keep in mind you need to serve the demo, for this example we are use php -S

>
``` sh
git clone https://github.com/coduxe/angular-ngloading.git
cd angular-ngloading
php -S localhost:9000 # go to http://localhost:9000/demo
```

## Authors

- [**Ibán Dominguez Noda**](https://github.com/ibandominguez)
- [**Dariel González Rodríguez**](https://github.com/DarielGonzalez)
- [**Óliver Grisha Lorenzo Felipe**](https://github.com/oliverGrisha)
- [**Ayoze Vera Arbelo**](https://github.com/AyozeVera)
