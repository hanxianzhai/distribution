import datetime
import json
import os
from bson.json_util import dumps
import urllib3
from flask_cors import CORS

from component import mymysql

urllib3.disable_warnings()
# 初始化服务器
from flask import Flask, request, make_response
import logging
from logging.handlers import TimedRotatingFileHandler
from exception import MyServiceException

app = Flask(__name__)

app.config['JSON_AS_ASCII'] = False
app.config['SECRET_KEY'] = os.urandom(24)
CORS(app, supports_credentials=True)


@app.route('/')
def index():
    return "current time is: " + datetime.datetime.now().strftime('%Y.%m.%d-%H:%M:%S')


@app.route('/data', methods=['POST'])
def data():
    try:
        request_data = json.loads(request.get_data())
        if not request_data.__contains__("execute"):
            raise MyServiceException("missing param: execute")
        execute = request_data["execute"]
        execute_result = mymysql.execute(execute)
        return dumps(execute_result)
    except MyServiceException as e:
        custom_res = make_response(e.msg)
        custom_res.status = "500"
        return custom_res


# 初始化日志
if not os.path.exists("logs"):
    os.mkdir("logs")
formatter = logging.Formatter(
    "[%(asctime)s][%(filename)s:%(lineno)d][%(levelname)s][%(thread)d] - %(message)s")
handler = TimedRotatingFileHandler(
    "logs/flask.log", when="D", interval=1, backupCount=15,
    encoding="UTF-8", delay=False, utc=True)
app.logger.addHandler(handler)
handler.setFormatter(formatter)
