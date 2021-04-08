<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col col-sm-8">
                <form id="form">
                    <div class="form-group">
                        <label class="form-label">Nome</label>
                        <input type="text" class="form-control"  name="nome">
                        <div class="text-danger" id="message-name"> </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">email</label>
                        <input type="email" class="form-control"  name="email" >
                        <div class="text-danger" id="message-email"> </div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Senha</label>
                        <input type="password" class="form-control" name="senha">
                        <div class="text-danger" id="message-senha"> </div>
                    </div>
                     <div class="form-group">
                        <label class="form-label">Confirma Senha</label>
                        <input type="password" class="form-control" name="confirm">
                        <div class="text-danger" id="message-confirm"> </div>
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-success">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
</template>
<script>
import  {Validation} from '../assets/Validation.js';


export default{
    name:'FormTeste',
    data:()=>{
        return{
            form:[
            {
                name:'nome',
                type:'text',
                min:5,
                max:90,
                required:true,
                words:2,
                input:'Deve ter 5 caracterres e 2 palavras ',
                onBlur:'Digito inválido',
                idMessage:'message-name'
            },
            {
                name:'email',
                type:'email',
                min:5,                
                required:true,
                input:'Deve ter 5 caracterres e 2 palavras ',
                onBlur:'Digito inválido',
                idMessage:'message-email'
            },
            {
                name:'senha',
                type:'password',
                min:8,   
                max:11,             
                required:true,
                input:'Deve ter no minimo 6 e no maximo 11 ',
                onBlur:'Digito inválido',
                idMessage:'message-senha'
            },
            {
                name:'confirm',
                type:'password',
                min:8,   
                max:11,             
                required:true,
                input:'Deve ter no minimo 6 e no maximo 11 ',
                onBlur:'Digito inválido',
                idMessage:'message-senha',
                confirm:'senha'
            }
         ]
        }
        
    },

    mounted(){
        Validation('form',this.form)
    }

}
</script>
