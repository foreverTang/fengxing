for((i=1;i<=9;i++))
do
	echo "IP 115.29.79.33" > /var/TcpDumpLog/cpuMem.log;\
	free -m|grep Mem >> /var/TcpDumpLog/cpuMem.log;\
	top -b -d 1 -n 1|grep Cpu >> /var/TcpDumpLog/cpuMem.log;\
	echo "`date` Runing">>/var/TcpDumpLog/cpuMem.log
	sleep 5
done

