package com.ToDoProject.Backend.service;

import com.ToDoProject.Backend.models.Task;
import com.ToDoProject.Backend.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;


    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> getAllTask() {
        return taskRepository.findAll();

    }
    public Task updateTask(Task task) {
        return taskRepository.save(task);
    }

    public Optional<Task> deleteTask(Long id) {
        Optional<Task> deleteTask = taskRepository.findById(id);
        taskRepository.deleteById(id);
        return deleteTask;
    }
}
