
$("button").click(function () {
  if ($("button").text() === "Turn ON") {
    $("button").text("Turn OFF");
    $("h2").text("TURNED ON");
    $("i").attr("class", "fa-solid fa-lightbulb");
  } else {
    $("button").text("Turn ON");
    $("h2").text("TURNED OFF");
    $("i").attr("class", "fa-regular fa-lightbulb");
  }
});



