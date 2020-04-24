function closeDetails() {
  $("details[open]")
    .removeAttr("open");
}

$("details").on("click", function() {
    $("details[open]")
        .not(this)
        .removeAttr("open");
});