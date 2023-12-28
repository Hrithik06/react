import React from "react";
import ReactDOM from "react-dom/client";

const Logo = () => (
    <h3>logo</h3>
);
const Search = () => (
    <form>
        <input type="search" placeholder="Search" id="search" />
        <button type="submit" id="search-btn">    <span class="material-symbols-sharp">
            search
        </span></button>

    </form>
)
const User = () => (
    <h3>user</h3>
)
const Header = () => (
    <div id="header">
        <Logo />
        <Search />
        <User />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);