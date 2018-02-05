# FREEGO

## Installation


### Installing backend

Install [Vagrant](https://www.vagrantup.com/downloads.html)
Install [VirtualBox](https://www.virtualbox.org/wiki/Downloads)

Switch to BE folder:
```
cd be
```

Start Vagrant
```
vagrant up
```
Connect to Vagrant machine over ssh
```
vagrant ssh
```
Switch to work folder
```
cd /vagrant
```
Setup encoding for DB
```
sudo /usr/sbin/update-locale LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8
```
Install PostgreSQL and other depenedencies
```
sudo apt-get install autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm3 libgdbm-dev postgresql libpq-dev
```
Create a new database instance
```
sudo mkdir -p /usr/local/pgsql/data
sudo chown postgres:postgres /usr/local/pgsql/data
sudo su postgres
/usr/lib/postgresql/9.5/bin/initdb -D /usr/local/pgsql/data
```
_Note! version that is 9.5 may vary_
Add Vagrant user to DB
```
createuser vagrant
psql
ALTER USER vagrant WITH Superuser
\q 
```
Exit current user:
```
exit
```
Install rbenv:
```
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
source ~/.bashrc
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
Install stable version of Ruby:
```
rbenv install 2.3.1
```
_Note: this process takes several mins_
_Note: if it says that rbenv is not found prompt `sudo su`_
Set this version of Ruby globally:
```
rbenv global 2.3.1
```
Install bundler
```
gem install bundler
```
Install nodeJS
```
sudo apt-get install nodejs
```
Install project dependencies
```
bundle
```
Setup database:
```
rake db:create
```
Start Rails server
```
bundle exec rails s
```
[Open project](localhost:3001) on localhost:3001
Stop Vagrant
```
vagrant halt
```

### Running BE
```
vagrant up
vagrant ssh
cd /vagrant
bundle exec rails s
```

### Troubleshooting BE installation
postgreSQL altering role:
```
sudo su postgres
psql
ALTER USER vagrant WITH Superuser
```
postgreSQL adding user:
```
sudo su postgres
createuser root
```
Create databases:
```
psql
CREATE DATABASE freego_development
CREATE DATABASE freego_test
\list
```
Manual start DB:
```
sudo /usr/lib/postgresql/9.5/bin/pg_ctl -D /usr/local/pgsql/data -l logfile start
```
