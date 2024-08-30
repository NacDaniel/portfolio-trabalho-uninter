window.onload = function () {

      /*
      Scroll até a posição de alguma seção
      */
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
      /*
      Scroll até a posição de alguma seção
      */


      /*
      Criar projetos no fim da págimna
      */
      var projects = [
            { language: "Lua", name: "MTA:SA - BloquearComandos", github: "https://github.com/NacDaniel/Bloquear-Comandos--MTA-SA" },
      ]

      projects.forEach(v => {
            const divNova = document.createElement("div");
            divNova.classList.add("projectContainerFooter");
            divNova.classList.add("cursorhover");
            divNova.insertAdjacentHTML("beforeend", '<img class="hostProjectList" alt="" src="github.ico.png">');
            divNova.insertAdjacentHTML("beforeend", '<div class="nameProjectFooter"><span>' + v.name + ' <span style="color: rgba(255, 199, 0, 0.5)">(' + v.language + ')</span></span></div>');
            document.getElementsByClassName("area-projects-footer")[0].appendChild(divNova)
            divNova.addEventListener("click",
                  function (e) {
                        window.open(v.github, "_blank");
                  }
            );
      });
       /*
      Criar projetos no fim da págimna
      */


      const blabbla = document.getElementById('areaSelectFile');
      blabbla.addEventListener('change', function () {
            document.getElementById('textAreaAttachFile').textContent = this.files[0].name
      })


      const tx = document.getElementById('message');
      tx.setAttribute("style", "height:" + (tx.scrollHeight) + "px;overflow-y:hidden;");
      tx.addEventListener("input", function () {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + "px";
      }, false);

      abrirEmail = function (form) {
            window.open('mailto:b36548840a@mailmaxy.one?subject=' + form.subject.value + ' - ' + form.name.value + '&body=' + form.message.value + '&attachment=' + form.file.value + '', '_blank');
            form.name.value = "";
            form.subject.value = "";
            form.message.value = "";
            form.file.value = "";
            document.getElementById('textAreaAttachFile').textContent = "Anexar Arquivo";
      }


      var eeee = document.getElementsByClassName('areaicons')[0].getElementsByTagName("img");
      for (let i = 0; i < eeee.length; i++) {
            eeee[i].addEventListener("click", function (e) {
                  window.open(i == 1 ? "https://www.linkedin.com/in/danielnac/" : "https://github.com/NacDaniel/", "_blank");
            })
      }


}