let x = localStorage.getItem('nr');

window.onload =  show(x);

function show(x){
    let prob = `<div class="container w-25 lista">

    </div>
    <div class="container w-25 comentarii">
        <div class="card">
            <div class="card-body">
              <h4 class="card-title">Te rugam sa ne lasi o recenzie!</h4>
              <h5 class="card-text">De ce ai face asta? Deoarece fiecare recenzie ne ajuta sa imbunatatim ajutorul oferit</h5>
              <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Scrie o recenzie</button>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">Utilizator : Marius Andrei</h5>
              <button type="button" class="btn btn-success" disabled>Normala</button>
              <br><br>
              <p class="card-text">Multumesc pentru ajutor! Ar trebui sa faceti explicatia si pentru alte probleme nu doar problema 3 de la subiectul 3</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Utilizator : Draghici Denis</h5>
              <button type="button" class="btn btn-success" disabled>Foarte buna</button>
              <br><br>
              <p class="card-text">Problemele foarte bine explicate, cu explicatie video, si cod sursa atasat. M-au ajutat foarte mult in pregatirea pentru bac.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Utilizator : Ion Adrian</h5>
              <button type="button" class="btn btn-success" disabled>Buna</button>
              <br><br>
              <p class="card-text">Mi-a placut. Voi reveni cu drag!</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Utilizator : Cosmin Pop</h5>
              <button type="button" class="btn btn-success" disabled>Buna</button>
              <br><br>
              <p class="card-text">Acest website ar avea nevoie de un design diferit dar in rest imi place</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Utilizator : Carter Andreea</h5>
              <button type="button" class="btn btn-success" disabled>Foarte buna</button>
              <br><br>
              <p class="card-text">Mi-a placut faptul ca aveam codul sursa. Apreciez ajutorul vostru.</p>
            </div>
          </div>
    </div>
    <h2>Model ${probleme[x]}</h2>
    <div class="container">
    <div class="row">
    <div class="col-6 cerinta">
    <h5>Cerinta: </h5>
    
    <h6>${cerinta[x]}</h6>
    </div>
    <div class="col-6 exemplu">
    <h5>Date de intrare :</h5><br>
    <h6>${intrare[x]}</h6>
    <br>
    <h5>Date de iesire :</h5>
    <br>
    <h6>${iesire[x]}</h6>
    </div>
    </div>
    </div>
    <div class="row">
    <div class="col cod">
    <h4>Cod C++</h4>
    <br>
    <pre data-enlighter-language="less">
    ${cod[x]}
    </pre>
    </div>
    </div>
    <div class="row">
    <div class="col explicatie">
    <h3>Explicatie:</h3>
    <h5>${explicatie[x]}</h5>
    </div>
    </div>
    `
    if(video[x] != "" && video[x] != undefined){
        prob += `<div class="row">
        <div class="col video">
        <h3>Explicatie video:</h3>
        <video width = "100%" controls>
        <source src = "${video[x]}" type="video/mp4">
        <video>`
    }
    prob += `</div>
    </div>
    `
    document.getElementsByClassName('main')[0].innerHTML = prob;
    EnlighterJS.init('pre', 'code', {
        language : 'cpp',
        theme: 'classic',
        indent : 2
    });
    let k = 0;
    let exista = [];
    while(k < 9){
        let i = Math.floor(Math.random() * 15);
        while(exist(exista, i)){
            i = Math.floor(Math.random() * 15);
        }
        exista[k] = i;
        let text = `<div class="card">
            <div class="card-body">
              <h5 class="card-title">Model ${probleme[i]}</h5>
              <p class="card-text">${cerinta[i].slice(0, 100)}...</p>
              <button onclick="redirect(${i})" class="btn btn-success">Acceseaza problema</button>
            </div>
          </div>`
            document.getElementsByClassName('lista')[0].innerHTML += text;
        k++;
    }
}

function exist(exista, i) {
    if(i == x){
        return true;
    }
    else{
        for(let j = 0;j < exista.length;j++){
            if(exista[j] == i){
                return true;
            }
        }
        return false;
    }
}

function redirect(i){
    localStorage.removeItem('nr');
    localStorage.setItem('nr', i);
    window.location.href = "problema.html";
}