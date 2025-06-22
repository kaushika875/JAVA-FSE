package com.example.singleton;

public class Logger {
  private static Logger a;
  
  private Logger()
  {
	  System.out.println("Logger instance created.");
	  }
  public static Logger getInstance() {
      if (a == null) {
          a = new Logger();
      }
      return a;
  }

  public void log(String message) {
      System.out.println("Log: " + message);
  }
  
}
