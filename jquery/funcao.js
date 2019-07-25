$(document).on('click', '#gravar', function(){
  var parametros = {
    "nome": $("#nome").val(),
    "telefone": $("#telefone").val(),
  };

  $.ajax({
    type:"post",
    url: "",
    data:parametros,

    success: function(data){
      navigator.notification.alert(data);
      $("#nome").val("");
      $("#telefone").val("");
    },

    error: function(data){
      navigator.notification.alert(data);
    }

  });
});

$(document).on("click","#excluir", function(){
  $.ajax({
    type: "get",
    url:"",
    data: "id="+$("#codigo").val(),

    success: function(data){
      navigator.notification.alert(data);
      location.reload();
    },

    error: function(data){
      navigator.notification.alert(data);
    }
  })
})

$(document).on("click", "#salvar", function(){
  var parametros = {
    "nome": $("#nome").val(),
    "telefone": $("#telefone").val(),
  };

  $.ajax({
    type:"post",
    url: "",
    data:parametros,

    success: function(data){
      navigator.notification.alert(data);
      location.reload();
    },

    error: function(data){
      navigator.notification.alert(data);
    }

  });
});

$(document).on("click","#editar", function(){
  habilita();
});

$(document).on("click","#cancelar", function(){
  $(location).attr("href","index.html")
  desabilita();
});

function habilita(){
  $("#nome").prop("readonly",false);
  $("#telefone").prop("readonly",false);
}

function desabilita(){
  $("#nome").prop("readonly",true);
  $("#telefone").prop("readonly",true);
}
