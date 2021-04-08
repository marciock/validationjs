
export const Validation=(id,data)=>{
   const form=document.getElementById(id)


console.log(form)

   data.forEach(d => {

        let elem=form[d.name];
        let mess=document.getElementById(d.idMessage);
     if(d.min !==undefined || d.max !==undefined || d.confirm !==undefined) {
       
        elem.addEventListener('keydown',(e)=>{
            
            let space=e.target.value;
            let minWords=d.words-1;
            if(e.target.value<d.min && e.target.value>d.max){
   
                mess.innerHTML=d.input;

            }else{  
                mess.innerHTML='';
            }

            if(space.search(' ')<minWords){
                mess.innerHTML=d.input;
            }
            
            let pass=form[d.confirm];
            
            console.log(pass.value)
           

           
        });
        elem.addEventListener('blur',(e)=>{

            if(d.type==='email'){
                let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
                if (reg.test(e.target.value)){
                 //return true; 
                    mess.innerHTML=''
                }
                else{
                 //return false;
                    mess.innerHTML=d.onBlur;
                }
            }
            if(d.required===true && elem.value===''){
                mess.innerHTML=d.onBlur;
            }
           
        })
        
        
     }
       
   });
   
}
   

   
