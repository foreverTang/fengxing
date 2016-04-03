第一步： 修改配置文件：config.xml, 设置服务器IP和端口， 字段：ipAddress 和 port
第二步： 修改tcpdump.sh文件，设置tcpdump命令，将src host  和 dst host修改为实际的源主机和目标主机IP （即抓包的范围、及过滤）
第三步： 修改cpuMemload.sh文件，设置主机IP地址
第四步： 修改log4j.xml文件，设置客户端写日志路径。

在目录下，运行java -jar cpcClient.jar