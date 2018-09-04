var search_regex = /([0-9]+[fF])/g

function f_to_c(input) {
    var f = parseInt(input.replace(/[Ff]$/, ''), 10)
    c = Math.floor((f - 32) / 1.8)
    return c + "C"
}

function textNodeFilter() {
    return this.nodeType == 3
}

/*
$('p', 'li').html(function() {
    return $(this).html().replace(match, '<span class="temperature">$1</span>')
})
*/

$("body").find("*").contents().filter(textNodeFilter).each(function(index) {
    var textNode = $(this)
    var text = textNode.text()
    if (text.match(search_regex)) {
        textNode.replaceWith(text.replace(search_regex, '<span class="temperature">$1</span>'))
    }
})


$('.temperature').attr('title', function() {
    return f_to_c($(this).text())
})

