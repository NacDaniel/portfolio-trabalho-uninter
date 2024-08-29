window.onload = function () {

      var scrollElementos = [
            { id: "formacaoAreaMenu", id_scroll: "formacao" },
            { id: "experienciaAreaMenu", id_scroll: "experiencia" },
            { id: "projectsAreaMenu", id_scroll: "projeto" },
            { id: "conhecimentosAreaMenu", id_scroll: "conhecimento" },
            { id: "sobreMimareaMenu", id_scroll: "sobremim" },
      ]

      scrollElementos.forEach(v => {
            var element = document.getElementById(v.id);
            if (element) {
                  element.addEventListener("click", function () {
                        var scroll = document.querySelector("[id_scroll=" + "\"" + v.id_scroll + "\"]");
                        if (scroll) {
                              scroll.scrollIntoView({ "block": "start", "behavior": "smooth" })
                              setTimeout(function () {
                                    scroll.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                                    scroll.style.borderRadius = "25px";
                                    setTimeout(function () {
                                          scroll.style.backgroundColor = "transparent";
                                          scroll.style.borderRadius = "0";
                                    }, 500)
                              }, 500)
                        }
                  })
            }
      });

      var menuAberto = false;

      document.getElementById("areaMenu").addEventListener("click",
            function (e) {
                  document.getElementById("itensMenu").style.display = (document.getElementById("itensMenu").style.display == "flex" ? "none" : "flex");
                  document.getElementById("areaMenu").classList.remove("cursorhover");
                  menuAberto = !menuAberto;
            }
      );
      document.getElementById("areaMenu").addEventListener("mouseover",
            function (e) {
                  if (menuAberto == false) {
                        document.getElementById("areaMenu").classList.add("cursorhover");
                        document.getElementById("areaMenu").addEventListener("mouseleave",
                              function (e) {
                                    document.getElementById("areaMenu").classList.remove("cursorhover");
                              }
                        );
                  }
            }
      );


      var projects = [
            { language: "Lua", name: "Nome fictício", github: "https://github.com/nacDaniel" },
            { language: "Lua", name: "Nome fictício", github: "https://github.com/nacDaniel" },
            { language: "Lua", name: "Nome fictício", github: "https://github.com/nacDaniel" },
            { language: "Java", name: "Nome fictício", github: "https://github.com/nacDaniel" },
            { language: "Java", name: "Nome fictício", github: "https://github.com/nacDaniel" },
            { language: "Java", name: "Nome fictício", github: "https://github.com/nacDaniel" },
      ]

      projects.forEach(v => {
            const divNova = document.createElement("div");
            divNova.classList.add("projectContainerFooter");
            divNova.classList.add("cursorhover");
            divNova.insertAdjacentHTML("beforeend", '<img class="hostProjectList" alt="" src="github.ico.png">');
            divNova.insertAdjacentHTML("beforeend", '<div class="nameProjectFooter"><span>'+v.name+' <span style="color: rgba(255, 199, 0, 0.5)">('+v.language+')</span></span></div>');
            document.getElementsByClassName("area-projects-footer")[0].appendChild(divNova)
            divNova.addEventListener("click",
                  function (e) {
                        //window.location.href = v.github;
                        window.open(v.github, "_blank");
                  }
            );
      });


      const blabbla = document.getElementById('areaSelectFile');
      blabbla.addEventListener('change', function () {
            blabbla.atri
            document.getElementById('textAttach').textContent = this.files[0].name
      })


      const tx = document.getElementById('message');
      tx.setAttribute("style", "height:" + (tx.scrollHeight) + "px;overflow-y:hidden;");
      tx.addEventListener("input", function () {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + "px";
      }, false);

      /**
      document.getElementById('buttonSendForm').addEventListener('click', function (e) {
            e.preventDefault();
            var opcao = document.getElementsByClassName("areaTextForm");
            for (let i = 0; i < opcao.length; i++) {
            var tag = opcao[i].getElementsByTagName("input");
            console.log(tag.getAttribute("placeholder"))
                  return;
            }
      })
       */

      abrirEmail = function (form) {
            window.open('mailto:b36548840a@mailmaxy.one?subject=' + form.subject.value + ' - ' + form.name.value + '&body=' + form.message.value + '&attachment=' + form.file.value + '', '_blank');
            form.name.value = "";
            form.subject.value = "";
            form.message.value = "";
            form.file.value = "";
            document.getElementById('textAttach').textContent = "Anexar Arquivo";
      }



      var Experiencia = [
            { language: "Java", name: "Gerenciamento Escolar", github: "https://github.com/nacDaniel" },
            { language: "Java", name: "Gerenciamento Escolar", github: "https://github.com/nacDaniel" },
      ]

}