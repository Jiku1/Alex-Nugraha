---
layout: default
title: Home
---

<section class="hero">
  <h1>{{ site.title }}</h1>
  <p>{{ site.description }}</p>
  <p>{{ site.data.cv.bio_short }}</p>
</section>

<section class="latest-projects">
  <h2>{{ site.data.lang[site.lang].projects_heading }}</h2>
  <ul class="project-list">
    {% for project in site.data.projects limit:3 %}
      <li class="project-card">
        <h3><a href="{{ project.link }}">{{ project.title }}</a></h3>
        <p>{{ project.description }}</p>
      </li>
    {% endfor %}
  </ul>
</section>

<section class="upcoming-events">
  <h2>{{ site.data.lang[site.lang].events_heading }}</h2>
  <ul>
    {% for ev in site.data.events %}
      <li>{{ ev.date }} — <strong>{{ ev.title }}</strong> ({{ ev.location }})</li>
    {% endfor %}
  </ul>
</section>
