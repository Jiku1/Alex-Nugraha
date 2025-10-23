---
layout: default
title: Projects
---

# {{ site.data.lang[site.lang].projects_heading | default: "Projects" }}

<ul class="project-list">
  {% for project in site.data.projects %}
  <li class="project-card">
    <h3><a href="{{ project.link }}">{{ project.title }}</a></h3>
    <p>{{ project.description }}</p>
  </li>
  {% endfor %}
</ul>
