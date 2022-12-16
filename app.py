from flask import Flask, render_template, request, url_for

app = Flask(__name__, static_folder="")

# By default, the flask app will load the form.html file in our /templates folder


@app.route('/')
def signin_post():
    return render_template('index.html')


# This post is called by the login.html once a user submits their login
@app.route('/lib', methods=['GET', 'POST'])
def lib_post():
    # When our login form is submitted, save the login info, save to our database, and then send user to the index.html file
    if request.method == "POST":
        _username = request.form.get("username")
        _password = request.form.get("password")

        # (TO DO) check if the login exists, if not, save to database

        # send the user to the library index.html page
        return render_template('lib.html')

# This post is called by the inventory page to get back to lib.html


@app.route('/search')
def search_post():
    return render_template('lib.html')


# This post swaps to the inventory page in the navbar
@app.route('/inventory')
def inv_post():
    return render_template('inventory.html')


if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000, threaded=True)
