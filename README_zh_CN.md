[English](README.md) | [中文](README_zh_CN.md)

# 分发库

## 数据分发库

### 分发库数据目录

| code           | description | type      | constraint                                              |
| -------------- | ----------- | --------- | ------------------------------------------------------- |
| id             | 主键/版本   | int       | primary_key, auto_increment                             |
| pid            | 父id        | int       | value by id                                             |
| name           | 名称        | varchar   | 100                                                     |
| description    | 描述        | varchar   | 256                                                     |
| manual_version | 手动版本    | varchar   | 50                                                      |
| create_time    | 创建时间    | timestamp | not null, current_timestamp                             |
| update_time    | 更新时间    | timestamp | not null, current_timestamp on update current_timestamp |

### 分发库数据结构



### 分发库数据



### 分发库数据触发



### 分发库数据订阅

