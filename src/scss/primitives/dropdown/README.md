### Primitives >>> dropdown

skat. https://www.w3schools.com/css/css_dropdowns.asp
https://codepen.io/Xopoc/pen/RgVmEr

UZMANĪBU!
Lai nostrādātu uz ":focus" - html pievienot parametru: tabindex="1"

<html>
<div class="dropdown" tabindex="1">
    <span class="dropdown-label" style="background-color:red">Click me!</span>
    <div class="dropdown-content" style="background-color:green">
        <p>Hello World!</p>
    </div>
</div>

<div class="dropdown dropdown-active" tabindex="1">
    <span class="dropdown-label" style="background-color:red">I am active dropdown</span>
    <div class="dropdown-content" style="background-color:green">
        <p>Hello World!</p>
    </div>
</div>
</html>
