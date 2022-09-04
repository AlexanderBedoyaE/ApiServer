const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const registro = require('../libros.json');


router.get('/',(req, res) => {
    res.json(registro);
});

router.post('/',(req, res) =>{
    const { name, autor, ano, descripcion }=req.body;
    if(name && autor && ano && descripcion) {
        const id = registro.length +1;
        const  newRegistro = {...req.body, id};
        registro.push(newRegistro);
        res.json(registro);
    }else{
        res.status(500).json({error: 'There was an error.'});
    }
    
});

router.put('/:id', (req, res)=> {
    const{id}=req.params;
    const { name, autor, ano, descripcion }=req.body;
    if(name && autor && ano && descripcion){
        _.each(registro, (libro, i)=> {
            if(libro.id == id){
                libro.img=img;
                libro.name = name;
                libro.autor= autor;
                libro.ano=ano;
                libro.descripcion=descripcion;
            }
        });
        res.json(registro);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

router.delete('/:id',(req, res) => {
    const{id}= req.params;
    if(id){
        _.each(registro, (libro, i) => {
            if (libro.id == id){
                registro.splice(i, 1);
            }
        });
        res.json(registro);
    }
});

module.exports=router;