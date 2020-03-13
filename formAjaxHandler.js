// Ajax handler
var ES5ajax = (function() {
  var http = new XMLHttpRequest();

  function post(url, data, callback) {
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.onload = function() {
      callback(null, http.responseText);
    };
    http.send(JSON.stringify(data));
  }

  return {
    post: post
  };
})();

var emailValidate = (function() {})();

// Form handler
var formHandler = (function() {
  var UIform = null;

  function PremiumRequest(title, email) {
    this.timestamp = _getTimneStamp();
    this.title = title;
    this.email = email;
  }

  function _getTimneStamp() {
    var currentdate = new Date();
    var datetime =
      currentdate.getDate() +
      '/' +
      (currentdate.getMonth() + 1) +
      '/' +
      currentdate.getFullYear() +
      ' @ ' +
      currentdate.getHours() +
      ':' +
      currentdate.getMinutes() +
      ':' +
      currentdate.getSeconds();

    return datetime;
  }

  function _sendHandler(formElement) {
    formElement.addEventListener('submit', function(event) {
      event.preventDefault();

      var customerEmailValue = event.target.querySelector(
        '#form-customer-email'
      ).value;

      var premiumRequest = new PremiumRequest(
        'Customer free premium request',
        customerEmailValue
      );

      console.log(premiumRequest);
      ES5ajax.post(
        'https://jsonplaceholder.typicode.com/posts',
        premiumRequest,
        function(error, post) {
          if (error) {
            console.log(error);
          } else {
            console.log(post);
          }
        }
      );
    });
  }

  function start(formSelecotor) {
    UIform = document.querySelector(formSelecotor);
    _sendHandler(UIform);
  }

  return {
    start: start
  };
})();

formHandler.start('#js-code-request-form');
