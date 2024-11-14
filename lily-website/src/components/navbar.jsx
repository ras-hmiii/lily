import React from "react"

const Navbar =() =>
{
    return (
<div>
<div class ="container mx-auto px-8 flex  " >
<ul class="flex  p-10" >
    <li class="list-none px-4">
        <a href="">Home</a>
    </li>
    <li class="list-none px-4">
        <a href="">Order Now</a>
    </li>
    <li class="list-none px-4 ">
        <a href="">About Us</a>
    </li>
        <li class="list-none px-4">
        <a href="">Services</a>
    </li>
    <li class="list-none px-4">
        <a href="">Help</a>
    </li>
</ul>

<button class="rounded mx-8 border-white border-solid ">OrderNow</button>
<button class="rounded border-white border-solid ">Search</button>
</div>
</div>
    );
}
export default  Navbar