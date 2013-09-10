// Generated by CoffeeScript 1.6.3
var facebook_encode, google_plus_encode, linkedin_encode, tumblr_encode, twitter_encode;

twitter_encode = function(url, title, source) {
  var twitter;
  twitter = "http://twitter.com/home?status=";
  if (title) {
    twitter += "" + (encodeURIComponent(title)) + "%20";
  }
  twitter += "" + (encodeURIComponent(url));
  return twitter;
};

facebook_encode = function(url, title, source) {
  return "http://www.facebook.com/sharer.php?u=" + (encodeURIComponent(url));
};

google_plus_encode = function(url, title, source) {
  return "https://plus.google.com/share?url=" + (encodeURIComponent(url));
};

linkedin_encode = function(url, title, source) {
  var linkedin;
  linkedin = "http://www.linkedin.com/shareArticle?mini=true&url=" + (encodeURIComponent(url));
  if (title) {
    linkedin += "&title=" + (encodeURIComponent(title));
  }
  if (source) {
    linkedin += "&source=" + (encodeURIComponent(source));
  }
  return linkedin;
};

tumblr_encode = function(url, title, source) {
  var tumblr;
  tumblr = "http://www.tumblr.com/share/link?url=" + (encodeURIComponent(url));
  if (title) {
    tumblr += "&name=" + (encodeURIComponent(title));
  }
  if (source) {
    tumblr += "&description=" + (encodeURIComponent(source));
  }
  return tumblr;
};

$(document).ready(function() {
  return $("input").on("keyup", function() {
    return $(".results > span").each(function(index, value) {
      var encoded_link, method;
      method = $(value).attr("class").replace("icon-", "").replace("-", "_");
      encoded_link = window[method + "_encode"]($("input[name='url']").val(), $("input[name='title']").val(), $("input[name='source']").val());
      return $(value).html("<br><a href='" + encoded_link + "' target='_new'>" + encoded_link + "</a>");
    });
  });
});