var c=[]
var ao=[]
var j=[]
var a,b,c

do{
    a=prompt("Insira o(s) alimento(s) do café da manhã: ")
     
    if(a==""){
        alert("Nenhum alimento inserido!!")
    }else{
        c.push(a) 
    }
}while(a!=null)
    



do{
    b=prompt("Insira o(s) alimento(s) do almoço: ")

    if(b=""){
        alert("Nenhum alimento inserido!!")
    }else{
        ao.push(b)
    }
}while(b!=null)
    
    

do{
    c=prompt("Insira o(s) alimento(s) da janta: ")

    if(c=""){
        alert("Nenhum alimento inserido!!")
    }else{
        j.push(c)
    }
    
}while(c!=null)
    

for(var cont=0;cont<2;cont++){
alert("A quantia de itens da lista é menor que dois")
}


document.write("<h3>Café da manhã</h3>")
for(var i=0;i<c.length-1; i++){
    document.write("<ul><li>"+c[i]+"</ul></li>")
}

document.write("<h3>Almoço</h3>")
for(var y=0;y<ao.length-1; y++){
    document.write("<ul><li>"+ao[y]+"</li></ul>")
}

document.write("<h3>Janta</h3>")
for(var z=0;z<j.length-1; z++){
    document.write("<ul><li>"+j[z]+"</li></ul>")
}