---
layout: blog
title: Blog
---

# {{ site.data.lang[site.lang].blog_heading }}
<p>Total posts: {{ site.posts | size }}</p>
<ul>
  {% for post in site.posts %}
    <li><a href="{{ post.url }}">{{ post.title }}</a> — <small>{{ post.date | date: "%Y-%m-%d" }}</small></li>
  {% endfor %}
</ul>

