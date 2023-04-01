package com.ToDo.Crud.controllers;

import com.ToDo.Crud.models.Task;
import com.ToDo.Crud.repositories.TaskRepository;
import com.ToDo.Crud.service.TaskService;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.security.cert.Extension;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@WebMvcTest
public class TaskControllerTest {
    @Autowired
    MockMvc mockMvc;
    @Autowired
    ObjectMapper objectMapper;

    @MockBean
    TaskService taskService;

    Task FirstTask = new Task(1L, "Do all the tests", true);
    Task SecondTask = new Task(2L, "All the tests are done", false);
    Task ThirdTask = new Task(3L, "Do a login/register", true);
    Task FourthTask = new Task(4L, "Front done", false);

    @Test
    public void shouldReturnAllTasksWhenCallingGetAllTask() throws Exception {
        List<Task> tasks = new ArrayList<>(Arrays.asList(FirstTask, SecondTask, ThirdTask, FourthTask));

        Mockito.when(taskService.getAllTask()).thenReturn(tasks);

        MvcResult mvcResult = mockMvc.perform(
                MockMvcRequestBuilders
                        .get("/")
                        .contentType(MediaType.APPLICATION_JSON)
        ).andReturn();

        assertEquals(200, mvcResult.getResponse().getStatus());
        List<Task> result = objectMapper.readValue(
                mvcResult.getResponse().getContentAsString(),
                objectMapper.getTypeFactory().constructCollectionType(List.class, Task.class)
        );
        assertEquals(tasks.size(), result.size());

        for(int i = 0; i < tasks.size(); i++) {
            Task task1 = tasks.get(i);
            Task result1 = result.get(i);

            assertEquals(task1.getId(), result1.getId());
            assertEquals(task1.getTask(), result1.getTask());
            assertEquals(task1.isCompleted(), result1.isCompleted());
        }

    }

}
