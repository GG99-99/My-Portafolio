# este programa funciona con pyenv
# para arrancarlo usa 
import logging
from flask import Flask, render_template

app = Flask(__name__, template_folder='src/templates', static_folder='src/static')
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)
log.disabled = True

@app.route('/')
def home():
    return render_template("layout/base.html")


if __name__ == "__main__":
    app.run(debug=False, host='0.0.0.0', port="4000")
