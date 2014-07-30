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

};

