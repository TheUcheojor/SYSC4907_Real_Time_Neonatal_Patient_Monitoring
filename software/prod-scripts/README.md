### TO DEPLOY BACKEND (server + DB) AND FRONTEND IN UBUNTU EC2

1. setup an EC2 instance using Ubuntu 18.0.4
   max allowable free SSD size (30Gb as of 2023)
   assign an ssh key to instance
   save key.pem file on system (remember this path used for <ec2 instance ssh key path>)
2. setup EC2 instance security group to allow following connections
   port <desired server port> <-- <server ip>
   port 80 <-- any IPv4
   port 22 <-- system IP that will run the following scripts (for ssh connection)
   ... (adjust ports as desired)
3. configure variables then run `sh startServer.sh <server ip> <desired server port> <ec2 instance ssh key path>`
4. done! To deploy updates to same ec2 instance, run `sh deploy.sh <server ip> <deployed server port> <ec2 instance ssh key path>`
