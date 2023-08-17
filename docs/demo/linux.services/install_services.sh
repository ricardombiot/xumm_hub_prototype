
cp ./web_prototype.service /etc/systemd/system/web_prototype.service
sudo systemctl enable web_prototype.service

cp ./edgedb.service /etc/systemd/system/edgedb.service
sudo systemctl enable edgedb.service

sudo journalctl --vacuum-size=100M
sudo journalctl --vacuum-time=30s --unit=web_prototype.service
sudo journalctl --vacuum-time=30s --unit=edgedb.service