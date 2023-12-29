/**
 * Update the meta theme color
 * @param color Color to set. Defaults to body's background color
 */
export function updateThemeColor(color?: string) {
    color = color ? color : getComputedStyle(document.body).backgroundColor;
    let tc = document.getElementById('theme-color')
    if (tc) { tc.setAttribute('content', color); }
}