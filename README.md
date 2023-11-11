# Musicon 

Musicon is a polished web project featuring three seamlessly integrated pages: a captivating home page, a sophisticated store page, and a user-friendly contacts page. This project was created with the primary goal of studying and implementing [Handlebars](https://github.com/handlebars-lang/handlebars.js), a powerful client-side templating engine. It serves as a practical example of how Handlebars can be integrated into a web project for dynamic content rendering.

## Features

- **Navigation Bar:**
  A sleek navigation bar has been implemented using unordered lists, anchor tags, and class attributes, ensuring an intuitive and accessible browsing experience.

- **Stylish Design:**
  The website has been styled to perfection, employing a harmonious blend of display properties, positioning techniques, carefully chosen color schemes, and thoughtfully selected font declarations.

- **Handlebars Templating:**
  The project leverages the power of Handlebars for client-side templating. Semantic templates have been created to showcase relevant information using JavaScript objects, arrays, and control flow. The built-in Handlebars iteration and control flow helpers enhance the dynamic display of content.

## Usage of Handlebars Templating

To dynamically render content using Handlebars, follow these steps in your JavaScript:

```javascript
// Get the Handlebars template element
const templateElement = document.getElementById("templateHB");

// Extract the template source from the element
const templateSource = templateElement.innerHTML;

// Compile the Handlebars template
const template = Handlebars.compile(templateSource);

// Define your data context (replace 'context' with your actual data)
const context = {
  // Your data properties here
};

// Generate the HTML with the compiled template and data
const compiledHtml = template(context);

// Insert the rendered HTML into the specified element in the DOM
document.getElementById("information").innerHTML = compiledHtml;
```

## Example Handlebars Template Usage

```html
<script id="templateHB" type="text/x-handlebars-template">
  {{#each instruments}}
    <article class="instrument">
      <img class="image" src="{{this.image}}" alt="{{this.name}}" />
      <section class="details">
        <h2 class="name">{{this.name}}</h2>
        <p class="description">{{this.description}}</p>
        {{#if sale}}
          <p class="price"><del>Price: {{this.price}}</del></p>
          <p class="sale">On Sale! {{this.sale}}</p>
        {{else}}
          <p class="price">Price: {{this.price}}</p>
        {{/if}}
      </section>
    </article>
  {{/each}}
</script>
```

This example demonstrates the seamless integration of Handlebars, allowing for a clean and maintainable presentation of instrument details on the store page. The use of Handlebars templates significantly enhances the overall user experience of the Musicon project.
