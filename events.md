---
layout: default
title: Events
---

# {{ site.data.lang[site.lang].events_heading }}

<ul>
  {% for ev in site.data.events %}
    <li><strong>{{ ev.date }}</strong> — {{ ev.title }} ({{ ev.location }})</li>
  {% endfor %}
</ul>
