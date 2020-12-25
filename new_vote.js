let selected = false;
let selected_id = null;

ids = ["A", "B", "C", "D"];

$(document).ready(function () {
  console.log("ready!");

  ids.forEach((id) => {
    $("#" + id).hover(
      function () {
        $("#index_" + id).addClass("hidden");
        $("#text_" + id).removeClass("hidden");
      },
      function () {
        $("#index_" + id).removeClass("hidden");
        $("#text_" + id).addClass("hidden");
      }
    );
    $("#" + id).click(function () {
      $(".voter_list").css("opacity", 1);
      $(".bg-custom").css("background", "rgb(255, 210, 177)");
      $(".text-custom").css("color", "#E7690F");
      if (
        (selected == false) &
        ((selected_id != input_id) | (input_id == null))
      ) {
        $(this).delay(10).fadeOut(70).fadeIn(70).fadeOut(50).fadeIn(50);
        $(this).addClass(" bg-gray-200");
        $("#action_box_container_" + id).addClass(" bg-black text-white");
        $("#action_box_container_" + id).html("<span>Voted</span>");
        selected = true;
        selected_id = id;
      } else if (id == selected_id) {
        $("#" + selected_id).removeClass(" bg-gray-200");
        $("#action_box_container_" + selected_id).removeClass(
          " bg-black text-white"
        );
        $("#action_box_container_" + selected_id).html(
          `<span id="text_${selected_id}" class="hidden" >Vote for</span><span id="index_${selected_id}">${selected_id}</span>`
        );
        selected = false;
        selected_id = null;
      } else {
        $("#" + selected_id).removeClass(" bg-gray-200");
        $("#action_box_container_" + selected_id).removeClass(
          " bg-black text-white"
        );
        $("#action_box_container_" + selected_id).html(
          `<span id="text_${selected_id}" class="hidden" >Vote for</span><span id="index_${selected_id}">${selected_id}</span>`
        );
        $(this).delay(10).fadeOut(70).fadeIn(70).fadeOut(50).fadeIn(50);
        $(this).addClass(" bg-gray-200");
        $("#action_box_container_" + id).addClass(" bg-black text-white");
        $("#action_box_container_" + id).html("<span>Voted</span>");
        selected = true;
        selected_id = id;
      }
      console.log(selected_id);
    });
  });

  $("#nota").click(function () {
    console.log("Nota ran!");
    if (selected_id) {
      $("#" + selected_id).removeClass(" bg-gray-200");
      $("#action_box_container_" + selected_id).removeClass(
        " bg-black text-white"
      );
      $("#action_box_container_" + selected_id).html(
        `<span id="text_${selected_id}" class="hidden" >Vote for</span><span id="index_${selected_id}">${selected_id}</span>`
      );
      selected = false;
      selected_id = null;
    }
    $(".voter_list").css("opacity", 0.5);
    $(".bg-custom").css("background", "#E7690F");
    $(".text-custom").css("color", "rgb(236, 232, 229)");
  });
});

let input_id = null;
document.onkeyup = function (e) {
  if (e.which == 65) {
    input_id = "A";
  } else if (e.which == 66) {
    input_id = "B";
  } else if (e.which == 67) {
    input_id = "C";
  } else if (e.which == 68) {
    input_id = "D";
  } else {
    input_id = null;
  }

  if (input_id) {
    $(".voter_list").css("opacity", 1);
    $(".bg-custom").css("background", "rgb(255, 210, 177)");
    $(".text-custom").css("color", "#E7690F");

    $("#" + selected_id).removeClass(" bg-gray-200");
    $("#action_box_container_" + selected_id).removeClass(
      " bg-black text-white"
    );
    $("#action_box_container_" + selected_id).html(
      `<span id="text_${selected_id}" class="hidden" >Vote for</span><span id="index_${selected_id}">${selected_id}</span>`
    );
    $("#" + input_id)
      .delay(10)
      .fadeOut(70)
      .fadeIn(70)
      .fadeOut(50)
      .fadeIn(50);
    $("#"+input_id).addClass(" bg-gray-200");
    $("#action_box_container_" + input_id).addClass(" bg-black text-white");
    $("#action_box_container_" + input_id).html("<span>Voted</span>");
    selected_id = input_id;
    selected = true;
    console.log(selected_id);
  } else {
    console.log("false key");
  }
};

