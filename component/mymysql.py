import pymysql
from DBUtils.PersistentDB import PersistentDB

import config
from component import mymysql
from exception import MyServiceException

config_mysql = config.app_conf["mysql"]
db_pool = None

if not db_pool:
    config = {
        'host': config_mysql["host"],
        'port': config_mysql["port"],
        'database': config_mysql["db"],
        'user': config_mysql["username"],
        'password': config_mysql["password"],
        'charset': config_mysql["charset"],
        "cursorclass": pymysql.cursors.DictCursor
    }
    mymysql.db_pool = PersistentDB(pymysql, **config)


def execute(sql):
    try:
        conn = mymysql.db_pool.connection()
        cursor = conn.cursor()
        cursor.execute(sql)
        # consider it INSERT or other
        if sql.strip().upper().startswith("INSERT"):
            execute_result = cursor.lastrowid
        else:
            execute_result = cursor.fetchall()
        conn.commit()
    except Exception as e:
        raise MyServiceException("execute sql error" + str(e))
    finally:
        cursor.close()
        conn.close()
    return execute_result

# if __name__ == '__main__':
#     # # 查询多条
#     # result = execute("""
#     # select * from designer_data_directories
#     # """)
#     # # 查询一条
#     # result = execute("""
#     # select * from designer_data_directories where id = 1
#     # """)
#     # # 新增
#     # result = execute("""
#     # insert into designer_data_directories(pid, name) values (1,'test2')
#     # """)
#     # # 修改
#     # result = execute("""
#     # update designer_data_directories set name = 'test2' where id = 1
#     # """)
#     # # 删除
#     # result = execute("""
#     # delete from designer_data_directories where id = 4
#     # """)
#     print(result)
