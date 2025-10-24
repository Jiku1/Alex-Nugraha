---
layout: blog
title: Blog
---

# {{ site.data.lang[site.lang].blog_heading }}

<ul>
  {% for section in site.data.ml-notes.sections %}
    <li>
      <a href="/ml-notes#{{ section.id }}">{{ section.heading }}</a>
      {% if section.points %}
        <ul>
          {% for point in section.points %}
            <li>{{ point }}</li>
          {% endfor %}
        </ul>
      {% endif %}
    </li>
  {% endfor %}
</ul>
