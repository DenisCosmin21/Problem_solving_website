window.onload = showProblems();

function showProblems(){
    for(let i = 0;i < probleme.length;i++){
        let prob = `<div class="card">
        <h5 class="card-header bg-success text-white">Model ${probleme[i]}</h5>
        <div class="card-body">
        <h5 class="card-title">Cerinta: </h5>
          <p class="card-text">${cerinta[i]}</p>
          <button class="btn btn-success" onclick = "redirect(${i})">Vezi problema</button>
        </div>
      </div>`
        document.getElementsByClassName('main')[0].innerHTML += prob;
    }
    localStorage.removeItem('nr');
}

function redirect(x){
    localStorage.setItem('nr', x);
    window.location.href = 'problema.html';
}