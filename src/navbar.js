
const navbar = (() => {
    const contentContainer = document.getElementById(content);
    const header = document.createElement("header");

    header.innerHTML = `
    <footer>
        <div class="icon">
            <p>Apollonia</p>
        </div>
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>
    </footer>
    `;
})();