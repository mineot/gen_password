import { Dimensions, GenPassword, Types } from "@/index";

window.onload = function () {
    var typeSelect = document.getElementById("typeSelect");
    var dimSelect = document.getElementById("dimSelect");
    var success = document.getElementById("success");
    var fail = document.getElementById("fail");
    var btnGen = document.getElementById("btnGen");

    typeSelect.value = "A";
    dimSelect.value = "A";

    var type = "A";
    var dim = "A";

    Object.keys(Types).forEach(type => {
        var opt = document.createElement("option");
        opt.value = Types[type];
        opt.text = type;
        typeSelect.appendChild(opt);
    });

    Object.keys(Dimensions).forEach(dim => {
        var opt = document.createElement("option");
        opt.value = Dimensions[dim];
        opt.text = dim;
        dimSelect.appendChild(opt);
    });

    typeSelect.addEventListener("change", (event) => {
        type = +event.target.value;
    });

    dimSelect.addEventListener("change", (event) => {
        dim = +event.target.value;
    });

    btnGen.addEventListener("click", () => {
        success.innerText = "";
        fail.innerText = "";

        GenPassword(type, dim)
            .then(res => {
                success.innerText = `${res.length} - ${res}`;
            })
            .catch(err => {
                fail.innerText = `${err.message} - ${err.code}`;
            });
    })
}