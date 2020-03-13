// ES5 based ajax library

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

function ajaxLibrary() {
  this.http = new XMLHttpRequest();
}

ajaxLibrary.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;

  this.http.onload = function() {
    if (this.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send();
};

// HTTP POST request
ajaxLibrary.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };
  this.http.send(JSON.stringify(data));
};

//Make an HTTP PUT request
ajaxLibrary.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

//Make an HTTP DELETE request
ajaxLibrary.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, 'Post deleted');
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send(JSON.stringify());
};
