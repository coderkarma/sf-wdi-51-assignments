from flask import Flask, g, request
from flask import render_template, flash, redirect, url_for
import json

# this import makes our connection to models
import models
from forms import SubForm, PostForm, CommentForm


DEBUG = True
PORT = 8000

app = Flask(__name__)
app.secret_key = 'adkjfalj.adflja.dfnasdf.asd'


@app.before_request
def before_request():
    g.db = models.DATABASE
    g.db.connect()


@app.after_request
def after_request(response):
    g.db.close()
    return response


@app.route('/', methods=['GET', 'POST'])
def index():
    form = SubForm()

# checks if the form submission is valid
    if form.validate_on_submit():
        # if it is, we create a new Sub
        models.Sub.create(name=form.name.data.strip(),
                          description=form.description.data.strip())

        flash("New sub registered. Called: {}".format(form.name.data))
        # and redirect to the main Sub index
        return redirect('/r')

    return render_template("new_sub.html", title="New Sub", form=form)


@app.route('/r')
@app.route('/r/<sub>', methods=['GET', 'POST'])
def r(sub=None):
    if sub == None:
        # gets all subs up to a limit of 100
        subs = models.Sub.select().limit(100)

    # sends those subs down to the template
        return render_template("subs.html", subs=subs)
    else:
          # Find the right Sub
        sub_id = int(sub)
        sub = models.Sub.get(models.Sub.id == sub_id)
        posts = sub.posts

        # Define the form for Posts
    form = PostForm()
    if form.validate_on_submit():
        models.Post.create(
            user=form.user.data.strip(),
            title=form.title.data.strip(),
            text=form.text.data.strip(),
            sub=sub)

        return redirect("/r/{}".format(sub_id))
        # Send the found Sub to the template
    return render_template("sub.html", sub=sub, posts=posts, form=form)


@app.route('/posts')
@app.route('/posts/<id>', methods=['GET', 'POST'])
def posts(id=None):
    with open('posts.json') as json_data:
        posts = json.load(json_data)
        if id == None:
            return render_template('posts.html', posts=posts)
        else:
            if request.method == 'POST':
                print(request.form)
            post_id = int(id)
            form = CommentForm()
            return render_template('post.html', post=posts[post_id], form=form)


if __name__ == '__main__':
    models.initialize()
    app.run(debug=DEBUG, port=PORT)
