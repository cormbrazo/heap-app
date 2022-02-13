#!/bin/bash

npm run build
zip dist.zip -r dist
scp dist.zip pi@192.168.86.79:~/
ssh -t pi@192.168.86.79 'unzip ~/dist.zip && sudo rm -rf /home/www/heap-app && sudo mv dist /home/www/heap-app'
rm dist.zip