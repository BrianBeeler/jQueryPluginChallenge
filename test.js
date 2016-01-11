$( document ).ready(function() {
    // Test plugin with a p tag, and orange and purple text
    $('p').reverseAndColor("orange", "purple")
    // Test plugin on a table element
    $('table').reverseAndColor("yellow", "green")
    // Test plugin on an ID, also test hex colors
    $('#hexColorTest').reverseAndColor("#00FFFF", " #FF00FF")
});