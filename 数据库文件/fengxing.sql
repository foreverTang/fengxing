/*
Navicat MySQL Data Transfer

Source Server         : liu
Source Server Version : 50626
Source Host           : localhost:3306
Source Database       : fengxing

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2015-12-15 16:31:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `componentlevel`
-- ----------------------------
DROP TABLE IF EXISTS `componentlevel`;
CREATE TABLE `componentlevel` (
  `id` varchar(32) NOT NULL COMMENT '组件编号',
  `portNumF` varchar(32) DEFAULT NULL COMMENT '发送端口号',
  `portNumT` varchar(32) DEFAULT NULL COMMENT '接收端口号',
  `message` varchar(32) DEFAULT NULL COMMENT '信息',
  `size` varchar(32) DEFAULT NULL COMMENT '大小',
  `time` time(6) DEFAULT NULL COMMENT '时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of componentlevel
-- ----------------------------

-- ----------------------------
-- Table structure for `host`
-- ----------------------------
DROP TABLE IF EXISTS `host`;
CREATE TABLE `host` (
  `id` varchar(32) NOT NULL COMMENT '标识符',
  `ip` varchar(32) DEFAULT NULL COMMENT 'IP地址',
  `obligate1` varchar(32) DEFAULT NULL COMMENT '预留',
  `obligate2` varchar(32) DEFAULT NULL COMMENT '预留',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of host
-- ----------------------------

-- ----------------------------
-- Table structure for `hostevel`
-- ----------------------------
DROP TABLE IF EXISTS `hostevel`;
CREATE TABLE `hostevel` (
  `id` varchar(32) NOT NULL COMMENT '主机编号',
  `ipFrom` varchar(32) DEFAULT NULL COMMENT '发送信息IP地址',
  `ipTo` varchar(32) DEFAULT NULL,
  `size` varchar(32) DEFAULT NULL,
  `message` varchar(32) DEFAULT NULL,
  `time` date DEFAULT NULL,
  `obligate1` varchar(32) DEFAULT NULL,
  `obligate2` varchar(32) DEFAULT NULL,
  `obligate3` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hostevel
-- ----------------------------

-- ----------------------------
-- Table structure for `loadlevel`
-- ----------------------------
DROP TABLE IF EXISTS `loadlevel`;
CREATE TABLE `loadlevel` (
  `id` varchar(32) NOT NULL COMMENT '标识',
  `IP` varchar(32) DEFAULT NULL COMMENT 'Ip地址',
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
