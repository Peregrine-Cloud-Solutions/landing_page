#!/bin/bash

cd ~/Desktop/react-material-landing-page/
git pull --rebase origin master
npm install 
npm run-script build
aws s3 cp dist/ s3://peregrinecloudsolutions.com --recursive




