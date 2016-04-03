#! /bin/bash

#Due to running on crontab,environmental variables changed. add the tcpdump commond path to PATH environmental variable.

export PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/sbin:$PATH

#if tcpdump process is existed,then kill the process.

if [ `ps -ef|grep "tcpdump"|wc -l` -gt 1 ] 
then 
	ps -ef|awk '{print $2" "$8}'|grep "tcpdump"|awk '{print $1}'|while read line
		do
			kill $line
		done
fi

dirname="/var/TcpDumpLog/`date '+%Y'`/`date '+%m'`"

mkdir -p $dirname

filename=$dirname"/tcp.`date '+%d'`"
touch $filename
errorfile=$dirname"/error.`date '+%d'`"
touch $errorfile

echo "filename is $filename">>$errorfile

nohup tcpdump -i any src host 10.82.82.49 or  host 192.168.0.110 and dst host 10.82.82.51 or host 192.168.0.106 -nn 1>"$filename" 2>>"$errorfile"  &
