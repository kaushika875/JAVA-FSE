package com.example.JUnitDemo;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class AppTest {

    public int add(int a, int b) {
        return a + b;
    }

    @Test
    public void testAddition() {
        assertEquals(5, add(2, 3)); 
    }
}