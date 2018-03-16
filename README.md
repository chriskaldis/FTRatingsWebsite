# FTRatingsWebsite

#### A Website that stores ratings for using the Financial Times News webpage. Built on an AWS webinstance with an autoscaling and load balancing policy as well as a backbone AWS RDS MySQL database to store the ratings. The database stores the IP address of the user submitting the rating and the rating itself. An integer represents each rating such as: "Very Good" = 1, "Good" = 2 and so on. This would make it easier to accumulate ratings. The server side scripting was done by using the NodeJS framework, and modules within node. FT Origami was used for HTML and CSS formatting and styling.

###### Included NodeJS modules: 

**express**,
**mysql**,
**path**,
**body-parser**,

###### App originally runs on http port 8080 but an iptables rules was added to redirect traffic to port 80.
###### Tried to use HTTPS from the https://letsencrypt.org movement but Amazon Linux support was limited.

###### By Christoforos Kaldis
