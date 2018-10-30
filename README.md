step :1 

Run "npm install"


step : 2

#check for cordova and ionic

run  "cordova --version"

#if cordova not present then 

npm install -g ionic cordova

run  "ionic --version"

#if ionic  not present then

npm install -g ionic

step : 3
#to add platforms

ionic cordova platform add ios

ionic cordova platform add android

#to check platform available

cordova platform ls

step 4:

