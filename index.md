---
layout: default
title: Home
---
# {{ site.data.index.name }}
**{{ site.data.index.title }}** – {{ site.data.index.university }}

{{ site.data.index.intro }}

{{ site.data.index.focus }}

### Minat Penelitian
{% for item in site.data.index.interests %}
- {{ item }}
{% endfor %}
