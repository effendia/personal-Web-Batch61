function getData(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let subject = document.getElementById("subject").value;
  let massage = document.getElementById("massage").value;
  alert(`${name} ${email} ${phoneNumber} ${subject} ${massage}`);
}
let account = [];

function getValue(event) {
  event.preventDefault();

  let nameinput = document.getElementById("nama").value;
  let startinput = document.getElementById("start").value;
  let end = document.getElementById("end").value;
  let description = document.getElementById("description").value;
  let node = document.getElementById("node").checked;
  let reach = document.getElementById("reach").checked;
  let next = document.getElementById("next").checked;
  let type = document.getElementById("type").checked;
  let input = document.getElementById("input").value;
  let img = document.getElementById("view-img").src;

  // Ubah ke objek Date
  let startDate = new Date(startinput);
  let endDate = new Date(end);

  // Hitung selisih dalam milidetik
  let selisihMs = endDate - startDate;

  // Ubah ke hari
  let selisihHari = selisihMs / (1000 * 60 * 60 * 24);

  let newAccount = {
    nameinput,
    startinput,
    end,
    selisihHari,
    description,
    node,
    reach,
    next,
    type,
    input,
    img,
  };

  account.push(newAccount);

  changeElement();
}

function changeElement() {
  let image = (document.getElementById("project").innerHTML = "");
  //melakukan lupping sebanyak jumlah array//
  for (let i = 0; i < account.length; i++) {
    document.getElementById("project").innerHTML += `<div class="myproject">
     <img src= "${account[i].img} "  width= "100%" >
    <h3>${account[i].nameinput}</h3>   
    <p>${account[i].selisihHari} hari </p>
    <p>${account[i].description}  </p>
    <div class="icons">
  ${
    account[i].node
      ? '<img src="assets/img/icons8-node-js-48.png" style="width: 30px;">'
      : ""
  }
  ${
    account[i].reach
      ? '<img src="assets/img/icons8-react-native-48.png" style="width: 30px;">'
      : ""
  }
  ${
    account[i].next
      ? '<img src="assets/img/icons8-nextjs-48.png" style="width: 30px;">'
      : ""
  }
  ${
    account[i].type
      ? '<img src="assets/img/icons8-typescript-48.png" style="width: 30px;">'
      : ""
  }
</div>

  <div id="btn" class="d-grid gap-3 d-md-block ">
    <button id="button" class="btn btn-primary" type="button">Edit</button>
    <button  id="button" class="btn btn-primary" type="button">Delet</button>
  </div>
    </div>`;
  }
}
