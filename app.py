from flask import Flask, render_template, request, url_for

app = Flask(__name__, static_folder="")

# By default, the flask app will load the form.html file in our /templates folder


@app.route('/')
def my_html():
    #We dont have the login html file YET, so commented out
    #return render_template('login.html', predicted=0)
    return("hello world")


# This post is called by the login.html once a user submits their login
@app.route('/', methods=['GET', 'POST'])
def login_post():
    # When our login form is submitted, save the login info, save to our database, and then send user to the index.html file
    if request.method == "POST":
        _username = request.form.get("username")
        _password = request.form.get("password")

        # (TO DO) check if the login exists, if not, save to database

        # send the user to the library index.html page
        return render_template('index.html')

@app.route('/inventory')
def inventory():
    return render_template('inventory.html')

if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000, threaded=True)
