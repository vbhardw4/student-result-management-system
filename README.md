# Student Management System App

This application is built in React Framework and it mainly focuses on below functionalities - 
* ### Persisting a Student
    Calls the [cerebral backend](https://github.com/vbhardw4/cerebral) (which is a **backend** for this frontend application) to **Save the STUDENT** entity in the Postgres SQL Database

* ### Creating a Course
    Calls the [cerebral backend](https://github.com/vbhardw4/cerebral) to **Save the COURSE entity** in the Postgres SQL Database

* ### Adding their results
    Calls the [cerebral backend](https://github.com/vbhardw4/cerebral) to **Save the STUDENT'S RESULT** per course in the **Postgres SQL** Database

## **Tools and Technologies** used to package and deploy this application are - 
1. **Docker container** > Docker file is located in the classpath.
2. **Yaml file** for Kubernetes deployment (front-end-deployment.yaml) is also present at the classpath


# Getting Started with Student Management System App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Steps to deploy this app on Minikube cluster.

* #### Download Minikube using brew command (MacOS)
* #### Setup kubectl to interact with the minikube cluster
* #### If you want to use docker as the image container registry, then run `eval $(minikube docker-env)` command in the terminal
* #### Run `minikube start` to start the minikube cluster
* #### Minikube cluster status can be checked using `minikube status`, If everything seems to up and running, proceed with below steps to deploy the container inside the pod running in the minikube cluster node
* #### Run `kubectl apply -f front-end-deployment.yaml`
* #### Below commands can be used to verify pods, deployments and services respectively.
    `kubectl get pods`
    `kubectl get deployments`
    `kubectl get services`

* #### Considering everything is up and running and there are no application startup errors, please use below command to expose the front-end application to the outside world - 
    `minikube service --url student-management-system-svc`
    Front-end of this application can now be accessed using the URL and port number returned from the above command.


**_NOTE:_** :exclamation:  *This front-end can be deployed in conjuntion with the [cerebral backend](https://github.com/vbhardw4/cerebral) deployments to simulate a scalable and distributed enterprise application*

Below mentioned script methods can also be used should you wish to use this application as a standalone react Application
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!




