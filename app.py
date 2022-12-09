from flask import Flask, render_template, request

app = Flask(__name__, static_folder="")

# By default, the flask app will load the form.html file in our /templates folder


@app.route('/')
def my_html():
    return render_template('index.html', predicted=0)


# This post is called by the login.html once a user submits their login
@app.route('/', methods=['GET', 'POST'])
def login_post():
    # When our login form is submitted, save the login info, save to our database, and then send user to the index.html file
    if request.method == "POST":
        _username = request.form.get("username")
        _password = request.form.get("password")

        # (TO DO) check if the login exists, if not, save to database

        # send the user to the library index.html page
        return render_template('lib.html')


if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000, threaded=True)
