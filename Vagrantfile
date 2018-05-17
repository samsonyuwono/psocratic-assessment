# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|
    config.vm.box = "ubuntu/xenial64"

    config.vm.network "forwarded_port", guest: 3000, host: 3000
    config.vm.network "forwarded_port", guest: 8080, host: 8080

    config.vm.provider "virtualbox" do |vb|
        vb.gui = true
        vb.memory = "8192"
        vb.cpus = "4"
    end

    config.vm.synced_folder ".", "/psocratic-take-home-assessment"

    config.vm.provision "shell", inline: <<-SHELL
        echo "\n----- Installing Software Properties Common ------\n"
        apt-get install -y software-properties-common python-software-properties

        echo "\n----- Installing Java 8 ------\n"
        add-apt-repository ppa:openjdk-r/ppa -y
        apt-get update
        apt-get -y install openjdk-8-jdk
        update-alternatives --config java

        echo "\n----- Installing Maven 3 ------\n"
        apt-cache search maven
        apt-get -y install maven

        echo "\n----- Installing Git ------\n"
        apt-get -y install git

        echo "\n----- Installing cURL ------\n"
        apt-get -y install curl
    SHELL

    config.vm.provision "shell", privileged: false, inline: <<-SHELL
        curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
        export NVM_DIR="/home/vagrant/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

        echo "\n----- Installing Node ----\n"
        nvm install v6.10.3
    SHELL
end
