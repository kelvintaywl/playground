window.onload = function(){
  var password_view_btns = document.querySelectorAll('.password_view');


  for(var i = 0; i < password_view_btns.length; i++){
    var node = password_view_btns[i];
    var target = node.getAttribute("data-for");
    node.onclick = function(){
      document.getElementById(target).setAttribute('type', 'text');
      window.setTimeout(function(){
        document.getElementById(target).setAttribute('type', 'password');
      }, 1000);
    };
  };

  var suggested_search_input = document.querySelector('input[name=pokemon]');
  suggested_search_input.onkeydown = function(){
    var typed_input = this.value;
    if (typed_input.length <= 0) return;

    var httpRequest;
    if(window.XMLHttpRequest){
      httpRequest = new XMLHttpRequest();
    }
    else if(window.ActiveXObject){
      httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    };
    var url = "/pokemon/" + typed_input;

    httpRequest.onreadystatechange = function(){
      if(httpRequest.readyState === 4){
        if(httpRequest.status === 200){
          var data = JSON.parse(httpRequest.responseText);
          var pokemons = data.results;
          console.log(pokemons);
        };
      };
    };

    httpRequest.open('GET', url, true);
    httpRequest.send(null)
  };

};

