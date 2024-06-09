<form method="POST" action="/submit">
  <input type="hidden" name="csrfToken" value="<%= csrfToken %>">
  <!-- Другие поля формы -->
  <button type="submit">Submit</button>
</form>