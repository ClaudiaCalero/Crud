package com.ToDo.Crud.service;

import com.ToDo.Crud.models.Task;
import com.ToDo.Crud.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;


    public Task createTask(Task task) {

    }
}
