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
  makeAJAX('/pokemon_all/', null, appendDataList);

  /*
  suggested_search_input.onkeydown = function(){
    var typed_input = this.value;
    makeAJAX("/pokemon/", typed_input, appendDataList);
  };
  */
};

function makeAJAX(url, typed_input, callback){
  if (Array.isArray(typed_input) && typed_input.length <= 0) return;

  var httpRequest;
  if(window.XMLHttpRequest){
    httpRequest = new XMLHttpRequest();
  }
  else if(window.ActiveXObject){
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
  };
  url = Array.isArray(typed_input)? url + typed_input : url;

  httpRequest.onreadystatechange = function(){
    if(httpRequest.readyState === 4){
      if(httpRequest.status === 200){
        var data = JSON.parse(httpRequest.responseText);
        callback(data);
      };
    };
  };
  
  httpRequest.open('GET', url, true);
  httpRequest.send(null);
};

function appendDataList(data){
  var datalist = document.querySelector('#suggested_list');
  var pokemons = data.results;
  console.log(pokemons.length);
  if(pokemons.length > 0){
    // update datalist
    datalist.innerHTML = "";
    for(var i = 0; i < pokemons.length; i++){
      var option = document.createElement('option');
      option.value = pokemons[i];
      option.innerHTML = pokemons[i];
      datalist.appendChild(option);
    };
  };
};