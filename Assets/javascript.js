const tableMain = document.getElementById("table");

fetch("data/listened.json")
  .then(res => {
    return res.json();
  })
  .then(data => {
    let table = "";
    table += "<table>";
    data.forEach(element => {
      table += "<tr>";
      table += `<td><form class="rating" id="product1">
        <button type="submit" class="heart" data-heart="1">
             ❤
            <span class="screen-reader">1 heart</span>
        </button>
    </form></td>`;
      table += `<td><img src="${element["Image"]}"></td>`;
      table += `<td>${element["Name"]}`;
      table += `<td>${element["Artist"]}`;
      table += `<td>${element["Listened"]}`;
    });
    table += "</table>";
    tableMain.innerHTML = table;
  });

const tableArtists = document.getElementById("artists");

fetch("data/artists.json")
  .then(res => {
    return res.json();
  })
  .then(data => {
    let table = "";
    table += "<table>";
    data.forEach(element => {
      table += `<td class="grid"><img src="${element["Image"]}">`;
      table += `${element["Name"]}`;
      table += `<br>${element["Listens"]} Listens`;
      table += `</td>`;
    });
    table += "</table>";
    tableArtists.innerHTML = table;
  });

const tableArtists2 = document.getElementById("artists2");

fetch("data/artists2.json")
  .then(res => {
    return res.json();
  })
  .then(data => {
    let table = "";
    table += "<table>";
    data.forEach(element => {
      table += `<td class="grid"><img src="${element["Image"]}">`;
      table += `${element["Name"]}`;
      table += `<br>${element["Listens"]} Listens`;
      table += `</td>`;
    });
    table += "</table>";
    tableArtists2.innerHTML = table;
  });

const tableTracks = document.getElementById("tracks");

fetch("data/tracks.json")
  .then(res => {
    return res.json();
  })
  .then(data => {
    let table = "";
    table += "<table>";
    data.forEach(element => {
      table += "<tr>";
      table += `<td>${element["Slot"]}`;
      table += `<td><img src="${element["Image"]}"></td>`;
      table += `<td><form class="rating" id="product1">
        <button type="submit" class="heart" data-heart="1">
             ❤
            <span class="screen-reader">1 heart</span>
        </button>
    </form></td>`;
      table += `<td>${element["Name"]}`;
      table += `<br>${element["Artist"]}`;
      table += `<td>${element["Listens"]}`;
    });
    table += "</table>";
    tableTracks.innerHTML = table;
  });

//Gets date/time
var d = new Date();
var Date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();

//Appends the comment, name and date/time together and displays on page
function getcomment() {
  var node = document.createElement("p");
  node.innerHTML =
    document.getElementById("comment").value +
    "<div>" +
    "Posted by: " +
    document.getElementById("name").value +
    "<div>" +
    "Posted at: " +
    d;
  document.getElementById("para").appendChild(node);
}

function sendMessage() {
  window.alert(
    "Thank you for your message " + document.getElementById("name").value
  );
}

// Listen for form submissions
document.addEventListener(
  "submit",
  function(event) {
    // Only run our code on .rating forms
    if (!event.target.matches(".rating")) return;

    // Prevent form from submitting
    event.preventDefault();

    var selected = document.activeElement;
    if (!selected) return;
    var selectedIndex = parseInt(selected.getAttribute("data-heart"), 10);

    var hearts = Array.from(event.target.querySelectorAll(".heart"));

    var selected2 = new Boolean(false);

    hearts.forEach(function(heart, index) {
      if (Boolean(selected2) == false) {
        heart.classList.add("selected");
        var selected2 = new Boolean(true);
      } else {
        heart.classList.remove("selected");
        var selected2 = new Boolean(false);
      }
    });
  },
  false
);
