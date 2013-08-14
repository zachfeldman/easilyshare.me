twitter_encode = (url, title, source) ->
  twitter = "http://twitter.com/home?status="
  twitter += "#{encodeURIComponent(title)}%20" if title
  twitter += "#{encodeURIComponent(url)}"
  return twitter

facebook_encode = (url, title, source) ->
  return "http://www.facebook.com/sharer.php?u=#{encodeURIComponent(url)}"

google_plus_encode = (url, title, source) ->
  return "https://plus.google.com/share?url=#{encodeURIComponent(url)}"

linkedin_encode = (url, title, source) ->
  linkedin = "http://www.linkedin.com/shareArticle?mini=true&url=#{encodeURIComponent(url)}"
  linkedin += "&title=#{encodeURIComponent(title)}" if title
  linkedin += "&source=#{encodeURIComponent(source)}" if source
  return linkedin

$(document).ready ->
  $("input").on "keyup", ()->
    $(".results > span").each (index, value) ->
      method = $(value).attr("class").replace("icon-", "").replace("-", "_")
      encoded_link = window[method+"_encode"]($("input[name='url']").val(), $("input[name='title']").val(), $("input[name='source']").val())
      $(value).html("<br><a href='#{encoded_link}' target='_new'>#{encoded_link}</a>") 
