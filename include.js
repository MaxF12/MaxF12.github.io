document.addEventListener("DOMContentLoaded", () => {
  const includeElements = document.querySelectorAll('[include-html]');
  includeElements.forEach(el => {
    const file = el.getAttribute("include-html");
    fetch(file)
      .then(response => {
        if (response.ok) return response.text();
        else throw new Error("Page not found.");
      })
      .then(data => el.innerHTML = data)
      .catch(error => el.innerHTML = error);
  });
});
