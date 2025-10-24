---
layout: blog
title: Blog
---

# {{ site.data.lang[site.lang].blog_heading }}

<h2>ML Notes Sections</h2>
<ul>
  <!-- Link ke Review AlexNet -->
  {% if site.data.ml-notes.review_alexnet %}
    <li>
      <a href="/ml-notes/#review_alexnet">Review AlexNet</a>
    </li>
  {% endif %}

  <!-- Link ke Sections lain -->
  {% for section in site.data.ml-notes.sections %}
    <li>
      <a href="/ml-notes#{{ section.id }}">{{ section.heading }}</a>
    </li>
  {% endfor %}
</ul>
