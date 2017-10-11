var User = require('../../schema/schema.js');


var taskServices = {
    getAllTasks: () => {
        return new Promise((resolve, reject) => {
            User.find({}, (error, tasks) => {
                if (tasks) {
                    resolve(tasks)
                } else {
                    resolve('')
                }
            })
        })
    },
    saveTask: (data) => {
        return new Promise((resolve, reject) => {
            var createtask = new User(data)
            createtask.save((error, success) => {
                if (success) {
                    resolve(success)
                } else {
                    reject(error)
                }
            })
        })
    },
    updateTask: (id, data) => {
        return new Promise((resolve, reject) => {
            User.update({ _id: id }, { $set: data }).then((success) => {
                resolve(success)
            }, (error) => {
                reject(error)
            })
        })
    },
    deleteTask: (id) => {
        return new Promise((resolve, reject) => {
            User.remove({ _id: id }).then((success) => {
                resolve(success)
            }, (error) => {
                reject(error)
            })
        })
    }
}

module.exports = taskServices;

