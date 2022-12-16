import os
from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

from sqlalchemy.sql import func

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__, static_folder="")

'''
SQLALCHEMY_DATABASE_URI: The database URI to specify the database you want to establish a connection with. 
In this case, the URI follows the format sqlite:///path/to/database.db. 

You use the os.path.join() function to intelligently join the base directory you constructed and stored in the basedir variable, and the database.db file name. 
This will connect to a database.db database file in your flask_app directory. The file will be created once you initiate the database.
SQLALCHEMY_TRACK_MODIFICATIONS: A configuration to enable or disable tracking modifications of objects. You set it to False to disable tracking and use less memory. For more, see the configuration page in the Flask-SQLAlchemy documentation.
'''
app.config['SQLALCHEMY_DATABASE_URI'] =\
    'sqlite:///' + os.path.join(basedir, 'database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


# By default, the flask app will load the index.html file in our /templates folder
@app.route('/')
def my_html():
    return render_template('index.html', predicted=0)


# This POST is called inside index.html once a user submits their login
@app.route('/', methods=['GET', 'POST'])
def login_post():
    # When our login form is submitted, save the login info, save to our database, and then send user to the index.html file
    if request.method == "POST":
        _username = request.form.get("username")
        _password = request.form.get("password")

        # check if the login exists, if not, create a new user
        if not bool(User.query.filter_by(username=_username).first()):
            new_user = User(username=_username, password=_password)
            db.session.add(new_user)
            db.session.commit()

        # send the user to the library index.html page
        return render_template('lib.html')


if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000, threaded=True)


# The User table for our database
class User(db.Model):
    username = db.Column(db.String(100), nullable=False, primary_key=True)
    password = db.Column(db.String(80), nullable=False)
    book = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'

# The User table for our database


class ReserveBook(db.Model):
    ISBN = db.Column(db.String(255), primary_key=True)
    bookTitle = db.Column(db.String(255), nullable=False)
    bookAuthor = db.Column(db.String(255), nullable=False)
    booksAvailable = db.Column(db.Integer, nullable=False)
    publisher = db.Column(db.String(255), nullable=False)
    releaseDate = db.Column(db.String(255))

    def __repr__(self):
        return f'<ReserveBook {self.bookTitle}>'
