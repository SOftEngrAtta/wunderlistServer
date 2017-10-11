var express = require('express');
var router = express();


module.exports = function () {

    var taskServices = require('../services/task.js');

    router.get('/', (req, res, next) => {
        taskServices.getAllTasks().then(success => {
            res.send(success);
        }, error => {
            next(error)
        })
    })

    router.post('/', (req, res, next) => {
        var taskData = req.body;
        taskServices.saveTask(taskData).then(sucess => {
            res.send(sucess);
        }, error => {
            next(error)
        })
    })

    router.patch('/:id' , (req,res,next)=>{
        var id =  req.params['id']
        var data = req.body ;
        taskServices.updateTask(id , data).then(success=>{
            res.json({
                status : 200 ,
                text : "task Updated successfully"
            })
        },error =>{
            next(error)
        })
    })
    router.delete('/:id' , (req,res,next)=>{
        taskServices.deleteTask(req.params['id']).then(success=>{
            res.json({
                status : 200 ,
                text : "task deleted successfully"
            })

        },error =>{
            next(error)
        })
    })
    return router;
}