package com.ToDo.Crud.service;

import com.ToDo.Crud.models.Task;
import com.ToDo.Crud.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;


    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> getAllTask(Task task) {
        return taskRepository.findAll();

    }
    public Task updateTask(Task task) {
        return taskRepository.save(task);
    }

    public void deleteTask(Task task) {
        taskRepository.delete(task);
    }
}
