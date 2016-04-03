第一步： 修改configServer.xml文件,设置服务端监听端口 <serverPort>。（注意，和客户端发送数据的端口一致）
第二步： 修改configServer.xml文件，设置数据库路径 <database>。
第三步： 修改log4jServer.xml文件，设置日志路径 <appender>。

在当前文件夹下，运行：java -jar cpcServer.jar