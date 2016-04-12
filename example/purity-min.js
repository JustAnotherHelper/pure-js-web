/**
 * minimal purity script allowing loading of other scripts 
 * without touching HTML.
 *
 * full functionality is in purity-full.js
 */

/**
 * head include without touching HTML.
 * @src the script to include.
 */
function include(src) 
{
    var script = document.createElement("script");
    script.setAttribute("src", src);
    script.setAttribute("type", "text/javascript");
    document.head.appendChild(script);
}

/**
 * body include without touching HTML.
 * @src the script to include.
 */
function addScript(src)
{
    var script = document.createElement("script");
    script.setAttribute("src", src);
    script.setAttribute("type", "text/javascript");
    document.body.appendChild(script);
}