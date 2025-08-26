## What is this repository about?
This is a small implementation of a Node application deployed on AWS Elastic Beanstalk

## Getting started
1. Clone this repository
1. Run
    ```
    npm install
    ```
1. Check that the application runs locally
    ```
    node app.js
    ```
## Setting up EBS on local
1. Make sure you have an account in AWS Management Console. You need to have an IAM user and a root user
1. You also need to have EB CLI set up on your machine and it can be checked by the following command
    ```
    eb --version
    ```
1. Now, run the following command to setup Elastic Beanstalk for the project deployment. This command will create a .elasticbeanstalk folder in the root of your project
    ```
    eb init
    ```
## Creating AWS environment for app deployment
1. Run the following command to create the environment in AWS where the application will run
    ```
    eb create ENVIRONMENT_NAME_OF_CHOICE --single
    ```
1. Run this command to finally open the running app on the web browser
    ```
    eb open
    ```
1. You can also change something in your app.js file and reflect the changes on your AWS deployed app by running
    ```
    eb deploy
    ```
