# Resources
资源文件
<!--mongodb 基本操作-->
#bin下启动mongodb
   mongod --dbpath ../blog/
   新窗口再次打开点击mongo.exe 

>show dbs    #查看所有数据库
local 0.078125GB
test 0.203125GB

>use local    #切换到local
switched to db local

> show collections    #查看local的所有collection
startup_log

>db.startup_log.find()    #产看startup_log
{ "_id" : "jlan-pc-1466044795232", "hostname" : "jlan-pc", "startTime",...}

> db.createCollection('startup_log2')    #创建collection
{ "ok" : 1 }

>db.startup_log.remove()    #清空collection

#数据导出
mongoexport -d local -c startup_log -o startup_log.json    #把startup_log导出为json文件，在终端执行

mongoexport -d local -c startup_log --csv -f _id,hostname,startTime -o startup_log.csv    #startup_log导出为csv文件，--csv表示导出为csv格式，-f表示字段名;


db.infos.insert({title: '焦点科技',content: '123456',avatar: '菜鸟教程',tag: '["随笔,心情"]',state: 'publish', date:1513921653209})


   
