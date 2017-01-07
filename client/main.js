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



Template.mainPupView.events({
  "click .voteButton": function(){
    if(!Meteor.user()){
      Modal.show("registerModal")
    } else if (!Meteor.user().emails[0].verified){
      Modal.show("unverifiedModal")
    }
  }
})

Template.imageUploader.helpers({

    isUploading: function () {
        return Boolean(uploader.get());
    },

    progress: function () {
    var upload = uploader.get();
    if (upload)
    return Math.round(upload.progress() * 100);
    },

    url () {

      return imageDetails.find();

  },

});
