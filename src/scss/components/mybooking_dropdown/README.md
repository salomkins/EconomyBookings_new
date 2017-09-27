### Components >>> mybooking_dropdown

Izmanto Primitives:
fonts
icons
buttons
input
Izmanto Components:
dropdown

<html>

<style>
* {
    box-sizing: border-box;
}
    body {
        margin: 20px;
        background-color: grey;
    }
</style>

<div class="dropdown dropdown-mrk dropdown-mrk-active" tabindex="1">
    <span class="font_r_13 drpdown-label dropdown-label-mrk">My Booking &nbsp;<span class="icon_angle_down"></span></span>
    <div class="dropdown-content dropdown-content-mrk dropdown-content--sign_in">
        <form class="font_r_15" action="index.html" method="post">
          <input class="form-input form-input--sign_in" type="text" name="booking_mail" placeholder="Email used for reservation">
          <input class="form-input form-input--sign_in" type="text" name="booking_number" placeholder="Booking number">
          <button class="btn-main btn-main--sign_in" type="button" name="button">Sign In</button>
        </form>
    </div>
</div>

</html>
