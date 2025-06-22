package com.example.forecasting;

public class FinancialForecast {

    
    public static double predictFutureValue(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }
        return predictFutureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

   
    public static double predictFutureValueMemo(double currentValue, double growthRate, int years, double[] memo) {
        if (years == 0) {
            return currentValue;
        }
        if (memo[years] != 0) {
            return memo[years];
        }
        memo[years] = predictFutureValueMemo(currentValue * (1 + growthRate), growthRate, years - 1, memo);
        return memo[years];
    }

    public static void main(String[] args) {
        double current = 10000; 
        double rate = 0.08;    
        int years = 5;

        double future = predictFutureValue(current, rate, years);
        System.out.printf("Predicted Future Value (Recursive): ₹%.2f%n", future);

        double[] memo = new double[years + 1];
        double optimizedFuture = predictFutureValueMemo(current, rate, years, memo);
        System.out.printf("Predicted Future Value (Memoized): ₹%.2f%n", optimizedFuture);
    }
}
