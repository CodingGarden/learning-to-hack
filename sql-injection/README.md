# SQL Injection

* Notes from Try Hack Me:
  * https://tryhackme.com/room/sqlilab

* Prerequisites
  * Basics of the SQL language
* What is it?
  * Vulnerability in backend codes that allows an attacker to "inject" their own queries into an existing query
* How to prevent it?
  * Escape / prepare your queries
    * Use a library / ORM
      * These typically automatically escape your queries
  * Run your queries with the minimum needed permissions
  * Use Stored Procedures
    * Functions in your database
    * You'll be using ? to reference params / args

  

