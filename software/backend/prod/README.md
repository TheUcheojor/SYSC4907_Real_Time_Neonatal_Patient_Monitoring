### TO DEPLOY IN UBUNTU EC2

1. pull repo
2. setup service in /etc/systemd/system/${template.service}
3. add env variables in app.env in service designated location
4. run npm run tsc in backend/src
4. systemctl enable ${template.service}
5. systemctl start ${template.service}
