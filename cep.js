
    
    
    $(document).ready(function(){
        $("#rua").val("");
        $("#bairro").val("")
        $("cidade").val("")
        $("uf").val("")
    })

    $("#cep").on('keyup',function(){
        var campoCep = $('#cep')
        var input = $('#cep').val().length
        console.log(input);
        if (input == 5){
            campoCep.val((campoCep.val()+'-'))
        }
    })

    $("#consultabotao").on('click',e =>{
        var cep = $('#cep').val().replace(/\D/g, '');
        const url = "https://viacep.com.br/ws/" + cep +"/json/"
        var erro = $('#erroCep');
        erro.innerHTML =""
        $("#rua").val("...");
        $("#bairro").val("...");
        $("#cidade").val("...");
        $("#uf").val("...");

        $.ajax({
            type:"GET",
            url:url,
            success:function(e){
            if(e.logradouro){
                $('#rua').val(e.logradouro)
                $('#bairro').val(e.bairro)
                $('#cidade').val(e.localidade)
                $('#uf').val(e.uf)
                $('#erroCep').addClass('Desaparecer')
            }else{
                $('#rua').val('')
                $('#bairro').val('')
                $('#cidade').val('')
                $('#uf').val('')
                $('#cep').val('')
               
                
                $('#erroCep').removeClass('Desaparecer')
                $('#erroCep').addClass('Aparecer')

            }
        
            
          
        },error:function(request,error){
            alert(error,'erro ao se conectar com api',request)
        }
    })
})
















/*$(document).ready(function() {

    function limpa_formulário_cep() {
        // Limpa valores do formulário de cep.
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
        $("#ibge").val("");
    }
    
    //Quando o campo cep perde o foco.
    $("#consultabotao").click(function() {

        //Nova variável "cep" somente com dígitos.
        var cep = $('#cep').val().replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                $("#rua").val("...");
                $("#bairro").val("...");
                $("#cidade").val("...");
                $("#uf").val("...");

                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#uf").val(dados.uf);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        limpa_formulário_cep();
                        alert("CEP não encontrado.");
                    }
                });
            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    });
}); */
