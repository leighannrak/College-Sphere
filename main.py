#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import os
import jinja2
import sys

sys.path.append('source/')

from popup import PopUp
from popup import pop_up

jinja_environment = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)))

def constructPopUpHTML():
    html_string = "<div style= 'background-color:red; width: 100px; height: 100px;'>\n" # + pop_up.String
    html_string += "</div>"
    return html_string

class MainHandler(webapp2.RequestHandler):
  def get(self):
    template = jinja_environment.get_template('template/map.html')
    template_variables = {"popup":constructPopUpHTML()}
    self.response.out.write(template.render(template_variables))

class PopHandler(webapp2.RequestHandler):
  def get(self):
    template = jinja_environment.get_template('templates/textbox.html')
    template_variable = {"title": popup.title,
                         "content": popup.content}
    self.response.out.write(template.render(template_variables))

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/pop', PopHandler)
], debug=True)
