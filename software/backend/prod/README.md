### TO DEPLOY NODE APP IN UBUNTU EC2

1. pull repo
2. setup service in /etc/systemd/system/${template.service}
3. add env variables in app.env in service designated location
4. run npm run tsc in backend/src
5. systemctl enable ${template.service}
6. systemctl start ${template.service}
   https://www.youtube.com/watch?v=oHAQ3TzUTro

### TO DEPLOY DB IN UBUNTU EC2

1. install mysql
2. start mysql
3. add users for connection
4. change mysql config bind address to 0.0.0.0, this allows the mysql server to listen to all external ips
   https://www.youtube.com/watch?v=N9DwaThhpsg

\*\*ensure all port are open for connection
