### TO DEPLOY BACKEND AND FRONTEND IN UBUNTU EC2

1. configure variables then run `sh deploy.sh`
2. configure variables then run `sh startServer.sh`
3. done, to deploy updates to same ec2 instance, repeat step 1

### TO DEPLOY DB IN UBUNTU EC2

1. install mysql
2. start mysql
3. add users for connection
4. change mysql config bind address to 0.0.0.0, this allows the mysql server to listen to all external ips
   https://www.youtube.com/watch?v=N9DwaThhpsg

\*\*ensure all port are open for connection
