## Problem 1
write the queries and submit that
use the patients table

- find no of patients grouped by severity
```SELECT severity, COUNT(*) as no_of_patients FROM patients GROUP BY severity;```

- find no of patients grouped by hospital
```SELECT hospital, COUNT(*) as no_of_patients FROM patients GROUP BY hospital;```

- find average age grouped by hosptial
```SELECT hospital, AVG(age) as avg_age_of_patients FROM patients GROUP BY hospital;```

- find the average BMI of all patients
```SELECT AVG(weight/( (height/100)*(height/100)) ) as avg_bmi_of_patient FROM patients;```

- find average BMI grouped by Hospital
```SELECT hospital, AVG(weight/( (height/100)*(height/100)) ) as avg_bmi_of_patients  FROM patients GROUP BY hospital;```

- find average BMI grouped by Severity
```SELECT severity, AVG(weight/( (height/100)*(height/100)) ) as avg_bmi_of_patients  FROM patients GROUP BY severity;```

- find date (diagnosis date) wise in ascending order total no of patients
```SELECT date_of_diagnosis, count(*) as no_of_patients  FROM patients GROUP BY date_of_diagnosis ORDER BY date_of_diagnosis;```


- show all users who bmi is between two values ( you can decide the values )
```SELECT * FROM ( SELECT *,(weight/( (height/100)*(height/100)) ) as bmi_of_patient FROM patients) as bmi WHERE bmi.bmi_of_patient BETWEEN 20 and 21;``` 

- show top 10 weighing patients
``` SELECT * FROM patients ORDER BY weight DESC LIMIT 10;```

- show second top 10 weighing patients
```SELECT * FROM patients ORDER BY weight DESC LIMIT 10, 10;```

- show count of users with name which start with B
```SELECT count(*) FROM patients WHERE patient_name LIKE "B%";```

- show count of users whose name end with E
```SELECT count(*) FROM patients WHERE patient_name LIKE "%E";```

- show count of users whose name have LL on it
```SELECT count(*) FROM patients WHERE patient_name LIKE "%LL%";```

## Problem 2
- create a country table
- it should have id, and name, id is the primary key
- create a users table
- it needs to have a primary key
- id, name, country id
- id is primary key
- country is a foreign key to country table primary key
```
// Country Table 
CREATE TABLE countries (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

// User Table
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    country int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY ( country ) REFERENCES countries(id)
);
```