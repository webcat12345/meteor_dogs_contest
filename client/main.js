import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("ApplicationLayout", {content: "mainPupView"});
  }
});

FlowRouter.route('/register', {
  action: function() {
    BlazeLayout.render("ApplicationLayout", {content: "register"});
  }
});

FlowRouter.route('/rules', {
  action: function() {
    BlazeLayout.render("ApplicationLayout", {content: "rules"});
  }
});

FlowRouter.route('/submit-puppy', {
  action: function() {
    BlazeLayout.render("ApplicationLayout", {content: "submitPup"});
  }
});

FlowRouter.route('/upload', {
  action: function() {
    BlazeLayout.render("ApplicationLayout", {content: "imageUploader"});
  }
});

FlowRouter.route('/profile', {
  action: function() {
    BlazeLayout.render("ApplicationLayout", {content: "profile"});
  }
});

