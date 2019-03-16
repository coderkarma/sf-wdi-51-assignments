# importing the flask class from the flask libarary
from flask import Flask, render_template

# initilaize an instance of the Flask class( which actually starts the websites)
app = Flask(__name__)
# setting up a roote route decorator


@app.route('/')
# function that returns hello words message
def index():
    skills = ["js", "python", "express", "hello programmer"]
    return render_template('index.html', greeting="Hello Programmer!!!", skills=skills)


@app.route('/sayhi/<username>')
def hello(username):
    return "Hello {}".format(username)


#  run the app when the program starts
if __name__ == '__main__':
    app.run(debug=True)
