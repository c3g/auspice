#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master" ]; then
  mkdir -p ~/.ssh 
  echo -e "$SSH_CLEF" | base64 -d > ~/.ssh/id_rsa 
  chmod og-rwx ~/.ssh/id_rsa 
  ssh-keyscan -H covseq.ca >> ~/.ssh/known_hosts 
  ssh covsec.ca ./update_auspice.sh 
fi
