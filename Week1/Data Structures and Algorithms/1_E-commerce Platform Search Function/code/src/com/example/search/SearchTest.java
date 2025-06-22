package com.example.search;

import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Footwear"),
            new Product(103, "Phone", "Electronics"),
            new Product(104, "T-Shirt", "Clothing"),
            new Product(105, "Book", "Stationery")
        };

        
        String searchKey = "Phone";
        Product result1 = SearchUtility.linearSearch(products, searchKey);
        System.out.println("Linear Search Result: " + (result1 != null ? result1 : "Not Found"));

        
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        
        Product result2 = SearchUtility.binarySearch(products, searchKey);
        System.out.println("Binary Search Result: " + (result2 != null ? result2 : "Not Found"));
    }
}
