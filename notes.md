- tag any version of a blog post with a commit hash
- include analytics (google ?)
- do not forget to include highlightjs  + mathjax

notebooks
{% assign sorted_notes = site.notebooks | sort: "last_updated" | reverse %}
{% for note in sorted_notes %}
  <li>
    <a href="{{ note.url }}">{{ note.title }}</a>
    (Updated: {{ note.last_updated }})
  </li>
{% endfor %}

creating a comment sections powered by giscus.app
