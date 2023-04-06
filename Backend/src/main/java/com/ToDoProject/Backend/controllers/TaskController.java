package com.ToDoProject.Backend.controllers;
import com.ToDoProject.Backend.models.Task;
import com.ToDoProject.Backend.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin
@RestController
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping("/")
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    @GetMapping("/")
    public List<Task> getAllTask() {
        return taskService.getAllTask();
    }

    @PutMapping("/{id}")
    public Task updateTask(@PathVariable Long id, @RequestBody Task task) {
        task.setId(id);
        return taskService.updateTask(task);
    }

    @DeleteMapping("/{id}")
    public Optional<Task> deleteTask(@PathVariable Long id){
        return taskService.deleteTask(id);
    }
}
