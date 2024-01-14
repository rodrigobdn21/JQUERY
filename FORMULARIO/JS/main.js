$(document).ready(function() {
    
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpf: {
                required: true
            },
            telefone: {
                required: true
            },
            endereço: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu ema',
            cpf: 'Por favor, insira seu cpf',
            telefone: 'Por favor, insira seu telefone',
            endereço: 'Por favor, insira seu endereço',
            cep: 'Por favor, insira seu cep',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretros = validador.numberOfInvalids();
            if (camposIncorretros) {
                alert(`Existem ${camposIncorretros} campos incorretos`)
            }
        }
    })
})