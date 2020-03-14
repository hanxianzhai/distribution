[English](README.md) | [中文](README_zh_CN.md)

# Distribution

## DataDistribution

### distribution_data_directory

| code           | description         | type      | constraint                                              |
| -------------- | ------------------- | --------- | ------------------------------------------------------- |
| id             | primary key/version | int       | primary_key, auto_increment                             |
| pid            | parent id           | int       | value by id                                             |
| name           | name                | varchar   | 100                                                     |
| description    | description         | varchar   | 256                                                     |
| manual_version | manual version      | varchar   | 50                                                      |
| create_time    | create time         | timestamp | not null, current_timestamp                             |
| update_time    | update time         | timestamp | not null, current_timestamp on update current_timestamp |

### distribution_data_structure



### distribution_data



### distribution_data_trigger



### distribution_data_subscriber

## FileDistribution