$(function(){
    $('#uploadChange').on('change',function() {
         var id = $(this).attr('id');
        var totalFiles = $(this).get(0).files.length;
        if(totalFiles == 0) {
          $('#message').text('Selecionar arquivos' );
        }
        if ( totalFiles > 1) {
	        $('#message').text( totalFiles+' arquivos selecionados' );
        } else {
	        $('#message').text( totalFiles+' arquivo selecionado' );
        }
           var htm='<ol>';
         for (var i=0; i < totalFiles; i++) {
             var c = (i % 2 == 0) ? 'item_white' : 'item_grey';
             var arquivo = $(this).get(0).files[i];
             var fileV = new readFileView(arquivo, i);
             htm += '<li class="'+c+'"><div class="box-images"><img class="item" data-img="'+i+'" data-id="'+id+'" border="0"></div><span>'+arquivo.name+'</span><a href="javascript:removeFile('+i+',\''+id+'\')" class="remove">x</a></li>'+"\n";
         }
        htm += '</ol>';
           $('#lista').html(htm);
         
    });
  
});

function readFileView(file, i) {

    var reader = new FileReader();
     reader.onload = function (e) {
       $('[data-img="'+i+'"]').attr('src', e.target.result);
	}
     reader.readAsDataURL(file);
}

function removeFile(item, id) {
    var el = $('img[data-img="'+item+'"]');
    var textoQtdArquivosAtuais = $('#message').text();
    var qtdArquivosSelecionados = parseInt(textoQtdArquivosAtuais.substring(0, parseInt(textoQtdArquivosAtuais.indexOf(' arquivo')))); 
    
  if (confirm('Tem certeza que deseja remover este item?')) {
  		el.closest("li").remove();  
      qtdArquivosSelecionados = qtdArquivosSelecionados -1;
      //Alterando label com quantidade de arquivos selecionados..  
     
        if(qtdArquivosSelecionados == 0) {
          $('#message').text('Selecionar fotos' );
        } else {
        if (qtdArquivosSelecionados > 1) {
	        $('#message').text( qtdArquivosSelecionados+' arquivos selecionados' );
        } else {
	        $('#message').text( qtdArquivosSelecionados+' arquivo selecionado' );
        }
        }
  }
}