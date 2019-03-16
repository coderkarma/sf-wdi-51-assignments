from app import db, marshmallow
from flask import jsonify

#  This is Sub model
class Sub(db.Model):
    __table_args__ = {'extend_existing': True}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True)
    description = db.Column(db.String(300))

    def __init__(self, name, description):
        self.name = name
        self.description = description

    @classmethod
    def create_sub(cls, name, description):
        new_sub = Sub(name, description)
        try:
            db.session.add(new_sub)
            db.session.commit()
        except:
            db.session.rollback()
            raise Exception('Session rollback')
        return sub_schema.jsonify(new_sub)

    @classmethod
    def get_sub(cls, subid):
        sub = Sub.query.get(subid)
        return sub_schema.jsonify(sub)

    @classmethod
    def get_subs(cls):
        subs = Sub.query.all()
        return subs_schema.jsonify(subs)


class SubSchema(marshmallow.Schema):
  class Meta:
    fields = ('id', 'name', 'description')

sub_schema = SubSchema(strict=True)
subs_schema = SubSchema(many=True, strict=True)


# create a post model
class Post(db.Model):
    __table_args__ = {'extend_existing': True} 

    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime())
    user = db.Column(db.String(100))
    title = db.Column(db.String(200))
    text = db.Column(db.String(500))
    sub = db.Column(db.Integer, db.ForeignKey("sub.id"))

    def __init__(self, user, title, text, sub):
        self.user = user
        self.title = title
        self.text = text
        self.sub = sub

    @classmethod
    def create_post(cls, user, title, text, sub):
        new_post = Post(user, title, text, sub)
        try:
            db.session.add(new_post)
            db.session.commit()
        except:
            db.session.rollback()
            raise

        return post_schema.jsonify(new_post)

    @classmethod
    def get_post(cls, post_id):
        post = Post.query.get(post_id)
        return post_schema.jsonify(post)


    #   creating the get post
    @classmethod
    def get_posts(cls):
        posts = Post.query.all()
        return posts_schema.jsonify(posts)
   

class PostSchema(marshmallow.Schema):
  class Meta:
    fields = ('id', 'user', 'title', 'text', 'sub')

# Making a comment model
class Comment(db.Model):
    __table_args__ = {'extend_existing': True} 

    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.String(100))
    title = db.Column(db.String(200))
    text = db.Column(db.String(500))
    post = db.Column(db.Integer, db.ForeignKey("post.id"))

    def __init__(self, user, title, text, post):
        self.user = user
        self.title = title
        self.text = text
        self.post = post
    
    @classmethod
    def create_comment(cls, user, title, text, post):
        new_comment = Comment(user, title, text, post)
        try:
            db.session.add(new_comment)
            db.session.commit()
        except:
            db.session.rollback()
            raise
        
        return comment_schema.jsonify(new_comment)

    @classmethod
    def get_comment(cls, commentid):
        comment = Comment.query.get(commentid)
        return comment_schema.jsonify(comment)
        

    @classmethod
    def get_comments(cls):
        comments = Comment.query.all()
        return comments_schema.jasonify(comments)


class CommentSchema(marshmallow.Schema):
  class Meta:
    fields = ('id', 'user', 'title', 'text', 'post')
# Init Schema
post_schema = PostSchema(strict=True)
posts_schema = PostSchema(many=True, strict=True)
comment_schema = CommentSchema(strict=True)
comments_schema = CommentSchema(many=True, strict=True)



if __name__ == 'models':
    db.create_all()
