      let ListElem=document.getElementById('list')              
      const add=()=>{
        let  inputValue=document.getElementById('inputId').value
        if (inputValue=='')
        alert('please enter task....')
        else{
          let divElem=document.createElement('div')
          divElem.classList.add('taskDiv')
          divElem.innerHTML=`<span>${inputValue}</span> <button onclick="remove(this)">Remove</button>`
          divElem.firstElementChild.addEventListener('click',function(){
            this.style.textDecoration = "line-through";
          })
          ListElem.appendChild(divElem)
          ListElem.style.display='flex'
          document.getElementById('inputId').value=''
        }
          
        
      
    }
    const remove=(elem)=>{
   let parrent= elem.parentNode
   ListElem.removeChild(parrent)
   ListElem.childNodes.length==0?ListElem.style.display='none':null
    }