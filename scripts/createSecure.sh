#!/bin/sh

pushd cordova-app

tar cvf secrets.tar build.json *.cer *.p12 *.mobileprovision *.keystore serviceAccountKey-plastic-patrol.json GooglePlayAndroidDeveloper.json
travis encrypt-file secrets.tar secrets.tar.enc -p -r Geovation/plastic-patrol

echo you should run this command
echo "cp secrets.tar ../secrets/plastic-patrol.tar"

popd
