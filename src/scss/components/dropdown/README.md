### Components >>> dropdown

UZMANĪBU!
Lai nostrādātu uz ":focus" - html pievienot parametru: tabindex="1"

<html>
<style>
* {
    box-sizing: border-box;
}
    body {
        margin-top: 20px;
        background-color: grey;
    }
</style>
<div class="dropdown" tabindex="1">
    <span class="dropdown-label">I am PRIMITIVE dropdown</span>
    <div class="dropdown-content">
        <p>Hello World!</p>
    </div>
</div>

<div class="dropdown dropdown-mrk" tabindex="1">
    <span class="drpdown-label dropdown-label-mrk">I am MRK dropdown without @extend</span>
    <div class="dropdown-content dropdown-content-mrk">
        <p>Hello World!</p>
    </div>
</div>


<div class="dropdown_mrk" tabindex="1">
    <span class="dropdown-label_mrk">I am MRK dropdown with @extend</span>
    <div class="dropdown-content_mrk">
        <p>Hello World!</p>
    </div>
</div>
</html>
