#!/bin/sh
if [ -d /var/TcpDumpLog ] 
then 
	echo "OK">/dev/null
else 
	mkdir -p /var/TcpDumpLog
fi
cpcroot=`pwd`;
echo "the root dir is `pwd` ;" > /var/TcpDumpLog/root.log
/bin/sh $cpcroot/tcpdump.sh
crontab $cpcroot/tcp.crontab

