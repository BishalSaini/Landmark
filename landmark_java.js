function view_table(){
    document.getElementById("all_equip_detail_table").style.display='block';
}


function view_exp(){
    document.getElementById("black_bg1").style.display='block';
}


function navigation(){
    var target = document.getElementById("about_section");
    var margin = 90;
    if (target) {
      var targetPosition = target.offsetTop - margin;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
}

function navigation_1(){
    var target = document.getElementById("equip_our");
    var margin = 140;
    if (target) {
      var targetPosition = target.offsetTop - margin;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
}

function navigation_3(){
    var target = document.getElementById("service_landmark");
    var margin = 120;
    if (target) {
      var targetPosition = target.offsetTop - margin;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
}
function navigation_4(){
    var target = document.getElementById("team_landmark");
    var margin = 160;
    if (target) {
      var targetPosition = target.offsetTop - margin;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
}
function navigation_5(){
    var target = document.getElementById("landmark_footer");
    var margin = 180;
    if (target) {
      var targetPosition = target.offsetTop - margin;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
}

function navigation_4_1(){
  const bg_1=document.getElementById("black_bg1");
  var target = document.getElementById("team_landmark");
  var margin = 160;
  if (target) {
    bg_1.style.display="none";
    var targetPosition = target.offsetTop - margin;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  }
}
function read_more_about_landmark(){
  const black_bg1_1=document.getElementById("black_bg1_1");
  black_bg1_1.style.display='block';
}

function navigation_4_1_1(){
  const black_bg1_12=document.getElementById("black_bg1_1");
  var target = document.getElementById("about_section");
  var margin = 90;
  if (target) {
    black_bg1_12.style.display='none';
    var targetPosition = target.offsetTop - margin;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  }


}
