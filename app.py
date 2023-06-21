from flask import Flask, render_template
from board import *
app = Flask(__name__)
app.config.suppress_callback_exceptions = True
ds = dashboard()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    return ds.board()

if __name__ == '__main__':
    app.run(debug=True)
