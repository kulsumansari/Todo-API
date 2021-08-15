const express = require('express');
const cors = require('cors');
const {
        getAllTasks,
        getTasksByID,
        createTask, 
        addTaskValidation,
        updateTask,
        deleteTaskByID
    } = require('../controllers/tasksController')
const router = express.Router()
router.use(cors());
postMiddleware = [addTaskValidation ,createTask]
updateMiddleware = [addTaskValidation , updateTask]

router.route('/')
    .get(getAllTasks)
    .post(postMiddleware);

router.route('/:taskId')
    .get(getTasksByID)
    .post(updateMiddleware)
    .delete(deleteTaskByID);


module.exports =router ;