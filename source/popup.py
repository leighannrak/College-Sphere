from google.appengine.api import users
import webapp2

class PopUp:
    def __init__(self, title, content):
        self.title = title
        self.content = content

pop_up = [
    PopUp(
        "Morehouse",
        """<div><h1>hello</h1></div>""")
    ]
