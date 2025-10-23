---
layout: cv
title: CV
---

# CV — {{ site.data.cv.name }}

## Pendidikan
{% for edu in site.data.cv.education %}
- **{{ edu.degree }}**, {{ edu.institution }} ({{ edu.year }})
{% endfor %}

## Keahlian
{% for skill in site.data.cv.skills %}
- {{ skill }}
{% endfor %}
