import config
from init import app


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=config.app_conf["server"]["port"],
        debug=False
    )
