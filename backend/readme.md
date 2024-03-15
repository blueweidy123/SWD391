# Step to run

For the first time running, in the `application.properties`, change the connection string to your database, then change the `spring.jpa.hibernate.ddl-auto = true`, after that, run the `insertdb.sql` in the `database` folder. When the table is created, set the `spring.jpa.hibernate.ddl-auto = none` or else you will lost all the data in the database in the next run

Password for all account in the db is `123456`