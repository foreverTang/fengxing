/*
Navicat MySQL Data Transfer

Source Server         : 本地mysql
Source Server Version : 50626
Source Host           : localhost:3306
Source Database       : fengxing

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2016-03-01 18:37:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `componentlevel`
-- ----------------------------
DROP TABLE IF EXISTS `componentlevel`;
CREATE TABLE `componentlevel` (
  `id` varchar(32) NOT NULL COMMENT '组件编号',
  `portNumFrom` varchar(32) DEFAULT NULL COMMENT '发送端口号',
  `portNumTo` varchar(32) DEFAULT NULL COMMENT '接收端口号',
  `message` varchar(32) DEFAULT NULL COMMENT '信息（要填入数值类型）',
  `size` float(32,0) DEFAULT NULL COMMENT '信息的大小，单位为kb',
  `time` time(6) DEFAULT NULL COMMENT '发送信息的时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of componentlevel
-- ----------------------------

-- ----------------------------
-- Table structure for `componentlevel_history`
-- ----------------------------
DROP TABLE IF EXISTS `componentlevel_history`;
CREATE TABLE `componentlevel_history` (
  `id` varchar(32) NOT NULL COMMENT '组件编号',
  `portNumFrom` varchar(32) DEFAULT NULL COMMENT '发送端口号',
  `portNumTo` varchar(32) DEFAULT NULL COMMENT '接收端口号',
  `message` varchar(32) DEFAULT NULL COMMENT '信息',
  `size` float(32,0) DEFAULT NULL COMMENT '信息的大小（要填入数值类型），单位为kb',
  `time` time(6) DEFAULT NULL COMMENT '发送信息的时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of componentlevel_history
-- ----------------------------

-- ----------------------------
-- Table structure for `host`
-- ----------------------------
DROP TABLE IF EXISTS `host`;
CREATE TABLE `host` (
  `id` varchar(32) NOT NULL COMMENT '标识符',
  `ip` varchar(32) DEFAULT NULL COMMENT 'IP地址',
  `hostname` varchar(32) DEFAULT NULL COMMENT '主机名',
  `obligate2` varchar(32) DEFAULT NULL COMMENT '预留',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of host
-- ----------------------------
INSERT INTO `host` VALUES ('1', '11', 'hostname1', null);
INSERT INTO `host` VALUES ('2', '22', 'hostname2', null);
INSERT INTO `host` VALUES ('3', '33', 'hostname3', null);
INSERT INTO `host` VALUES ('4', '44', 'hostname4', null);

-- ----------------------------
-- Table structure for `hostevel_history`
-- ----------------------------
DROP TABLE IF EXISTS `hostevel_history`;
CREATE TABLE `hostevel_history` (
  `id` varchar(32) NOT NULL COMMENT '主机编号',
  `ipFrom` varchar(32) DEFAULT NULL COMMENT '发送信息IP地址',
  `ipTo` varchar(32) DEFAULT NULL COMMENT '接收到信息的ip地址',
  `size` float(32,0) DEFAULT NULL COMMENT '信息的大小（要填入数值类型），单位为kb',
  `message` varchar(32) DEFAULT NULL COMMENT '信息的内容',
  `time` date DEFAULT NULL COMMENT '发送信息的时间',
  `obligate1` varchar(32) DEFAULT NULL,
  `obligate2` varchar(32) DEFAULT NULL,
  `obligate3` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hostevel_history
-- ----------------------------

-- ----------------------------
-- Table structure for `hostlevel`
-- ----------------------------
DROP TABLE IF EXISTS `hostlevel`;
CREATE TABLE `hostlevel` (
  `id` varchar(32) NOT NULL COMMENT '主机编号',
  `ipFrom` varchar(32) DEFAULT NULL COMMENT '发送信息IP地址',
  `ipTo` varchar(32) DEFAULT NULL COMMENT '接收到信息的ip地址',
  `size` float(32,0) DEFAULT NULL COMMENT '信息的大小（要填入数值类型），单位为kb',
  `message` varchar(32) DEFAULT NULL COMMENT '信息的内容',
  `time` date DEFAULT NULL COMMENT '发送信息的时间',
  `obligate1` varchar(32) DEFAULT NULL,
  `obligate2` varchar(32) DEFAULT NULL,
  `obligate3` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hostlevel
-- ----------------------------
INSERT INTO `hostlevel` VALUES ('1', '11', '22', '20', null, null, null, null, null);
INSERT INTO `hostlevel` VALUES ('2', '11', '33', '12', null, null, null, null, null);
INSERT INTO `hostlevel` VALUES ('3', '33', '22', '6', null, null, null, null, null);
INSERT INTO `hostlevel` VALUES ('4', '44', '11', '8', null, null, null, null, null);
INSERT INTO `hostlevel` VALUES ('5', '33', '22', '10', null, null, null, null, null);
INSERT INTO `hostlevel` VALUES ('6', '33', '11', '1', null, null, null, null, null);

-- ----------------------------
-- Table structure for `loadlevel`
-- ----------------------------
DROP TABLE IF EXISTS `loadlevel`;
CREATE TABLE `loadlevel` (
  `id` varchar(32) NOT NULL COMMENT '标识',
  `ip` varchar(32) DEFAULT NULL COMMENT 'Ip地址',
  `cpu` varchar(32) DEFAULT NULL COMMENT 'cpu数据',
  `ram` varchar(32) DEFAULT NULL COMMENT 'ram数据',
  `time` time(6) DEFAULT NULL COMMENT '时间',
  `obligate1` varchar(32) DEFAULT NULL COMMENT '预留',
  `obligate2` varchar(32) DEFAULT NULL COMMENT '预留',
  `obligate3` varchar(32) DEFAULT NULL COMMENT '预留',
  `obligate4` varchar(32) DEFAULT NULL COMMENT '预留',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of loadlevel
-- ----------------------------

-- ----------------------------
-- Table structure for `porttocomponent`
-- ----------------------------
DROP TABLE IF EXISTS `porttocomponent`;
CREATE TABLE `porttocomponent` (
  `id` varchar(32) NOT NULL COMMENT '主键',
  `portNum` varchar(10) NOT NULL COMMENT '端口号',
  `component` varchar(32) DEFAULT NULL COMMENT '组件名称',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of porttocomponent
-- ----------------------------
INSERT INTO `porttocomponent` VALUES ('1', '35535', 'nova');

-- ----------------------------
-- Table structure for `userinfo`
-- ----------------------------
DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
  `id` varchar(32) NOT NULL,
  `username` varchar(32) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinfo
-- ----------------------------
INSERT INTO `userinfo` VALUES ('1', 'aa', '123');
