### Primitives >>> utils/media

[mqb] media queries breakpoints:
  xs-only >>> phone - only
  md >>> tablet
  md-only >>> tablet - only
  lg >>> desktop

@include media([mqb]){
  ...
  ...
}

lietojam atbilstoši piemēram:

<html>
<div class="box"></div>
<div class="box--media-lg"></div>
</html>

//scss
.box {
    width: 100px;
    height: 100px;
    background-color: red;
    margin: 10px;

    &--media-lg {
        @extend .box;
        @include media(lg) {
            background-color: green;
        }
    }
}
