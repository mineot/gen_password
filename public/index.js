import { GenPassword, TypeEnum, DimensionEnum, GenPasswordError } from "@/index";

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

    Object.keys(TypeEnum).forEach(type => {
        var opt = document.createElement("option");
        opt.value = TypeEnum[type];
        opt.text = type;
        typeSelect.appendChild(opt);
    });

    Object.keys(DimensionEnum).forEach(dim => {
        var opt = document.createElement("option");
        opt.value = DimensionEnum[dim];
        opt.text = dim;
        dimSelect.appendChild(opt);
    });

    typeSelect.addEventListener("change", (event) => {
        type = event.target.value;
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